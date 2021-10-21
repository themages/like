"use strict";

import { app, protocol, BrowserWindow, powerSaveBlocker } from "electron";
import { createProtocol } from "vue-cli-plugin-electron-builder/lib";
import installExtension, { VUEJS3_DEVTOOLS } from "electron-devtools-installer";
import { autoUpdater } from "electron-updater";
const path = require("path");
const gotTheLock = app.requestSingleInstanceLock();
const isPackaged = app.isPackaged;
const PROTOCOL = "likelive";
let win = null;

if (!gotTheLock) {
  app.quit();
} else {
  const isDevelopment = process.env.NODE_ENV !== "production";
  const isWindows = process.platform === "win32";
  let blockerId = null;
  app.on("second-instance", () => {
    // event, commandLine, workingDirectory
    // Someone tried to run a second instance, we should focus our window.
    if (win) {
      if (win.isMinimized()) win.restore();
      win.focus();
    } else {
      if (!isWindows) {
        if (app.isReady()) createWindow();
      }
    }
  });
  app.on("open-url", (event, url) => {
    event.preventDefault();
    console.log("open-url: %O", url);
  });
  // Scheme must be registered before the app is ready
  protocol.registerSchemesAsPrivileged([
    { scheme: PROTOCOL, privileges: { secure: true, standard: true } },
  ]);
  // 仅在打包后的应用才去设置唤醒协议
  if (isPackaged) {
    setAsDefaultProtocolClient();
  }
  // Quit when all windows are closed.
  app.on("window-all-closed", () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (isPackaged) {
      powerSaveBlocker.stop(blockerId);
    }
    if (process.platform !== "darwin") {
      app.quit();
    }
  });

  app.on("activate", () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });

  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  app.whenReady().then(() => {
    console.log("===> whenReady");
  });
  app.on("ready", async () => {
    console.log("===> ready");
    if (isDevelopment && !process.env.IS_TEST) {
      // Install Vue Devtools
      try {
        await installExtension(VUEJS3_DEVTOOLS);
      } catch (e) {
        console.error("Vue Devtools failed to install:", e.toString());
      }
    }
    if (isPackaged) {
      blockerId = powerSaveBlocker.start("prevent-display-sleep");
      createProtocol(PROTOCOL);
    }
    createWindow();
    autoUpdater.checkForUpdatesAndNotify();
  });

  // Exit cleanly on request from parent process in development mode.
  if (isDevelopment) {
    if (process.platform === "win32") {
      process.on("message", (data) => {
        if (data === "graceful-exit") {
          app.quit();
        }
      });
    } else {
      process.on("SIGTERM", () => {
        app.quit();
      });
    }
  }
}
async function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: true, // process.env.ELECTRON_NODE_INTEGRATION
      contextIsolation: false, // !process.env.ELECTRON_NODE_INTEGRATION
    },
  });

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
    if (!process.env.IS_TEST) win.webContents.openDevTools();
  } else {
    // Load the index.html when not in development
    win.loadURL(`${PROTOCOL}://./index.html`);
  }
}
// 设置客户端唤醒协议
function setAsDefaultProtocolClient() {
  const argv = [];
  if (!isPackaged) {
    argv.push(path.resolve(`${process.argv[1]}`));
  }
  argv.push("--");
  const isDefault = app.isDefaultProtocolClient(
    PROTOCOL,
    process.execPath,
    argv
  );
  if (!isDefault) {
    app.setAsDefaultProtocolClient(PROTOCOL, process.execPath, argv);
  }
  // app.removeAsDefaultProtocolClient(PROTOCOL, process.execPath, argv)
}
