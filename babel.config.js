const isProd = process.env.VUE_APP_ENV === "prod";
const plugins = [];
if (isProd) {
  plugins.push(
    "transform-undefined-to-void",
    "transform-remove-debugger",
    ["transform-remove-console", { exclude: ["error", "warn", "info"] }],
    ["minify-dead-code-elimination", { optimizeRawSize: true }]
  );
}
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins,
};
