"use strict";

import { app, protocol, BrowserWindow, powerSaveBlocker } from "electron";
const gotTheLock = app.requestSingleInstanceLock();
import { createProtocol } from "vue-cli-plugin-electron-builder/lib";
import installExtension from "electron-devtools-installer"; // , { VUEJS_DEVTOOLS }
import { autoUpdater } from "electron-updater";
const isDevelopment = process.env.NODE_ENV !== "production";
let win = null;
if (!gotTheLock) {
  app.quit();
} else {
  console.log(
    "ELECTRON_NODE_INTEGRATION",
    process.env.ELECTRON_NODE_INTEGRATION
  );
  app.on("second-instance", () => {
    // event, commandLine
    if (win) {
      if (win.isMinimized()) win.restore();
      win.focus();
    } else {
      if (!process.platform === "win32") {
        if (app.isReady()) createWindow();
      }
    }
  });

  // Scheme must be registered before the app is ready
  protocol.registerSchemesAsPrivileged([
    { scheme: "canicode", privileges: { secure: true, standard: true } },
  ]);

  // Quit when all windows are closed.
  app.on("window-all-closed", () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
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
  app.on("ready", async () => {
    // https://v3.cn.vuejs.org/guide/migration/introduction.html#devtools-extension
    if (isDevelopment && !process.env.IS_TEST) {
      // Install Vue Devtools
      try {
        const vue_devtools_beta = {
          id: "ljjemllljcmogpfapbkkighbhhppjdbg",
          electron: ">=6.0.0",
        };
        await installExtension(vue_devtools_beta);
      } catch (e) {
        console.error("Vue Devtools failed to install:", e.toString());
      }
    }
    createWindow();
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
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      contextIsolation: true,
    },
  });

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
    if (!process.env.IS_TEST) win.webContents.openDevTools();
  } else {
    createProtocol("canicode");
    // Load the index.html when not in development
    await win.loadURL("canicode://./index.html");
    if (app.isPackaged) {
      powerSaveBlocker.start("prevent-display-sleep");
      autoUpdater.checkForUpdatesAndNotify();
    }
  }
}
