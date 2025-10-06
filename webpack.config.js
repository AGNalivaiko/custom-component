const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: "./Components/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    library: { name: "MyUILibrary", type: "umd" },
    globalObject: "this",
    clean: true,
  },
  resolve: { extensions: [".tsx", ".ts", ".js", ".jsx", ".css"] },
  externals: { react: "react", "react-dom": "react-dom" },
  module: {
    rules: [
      { test: /\.(ts|tsx)$/, use: "ts-loader", exclude: /node_modules/ },
      {
        test: /\.module\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: { auto: true, exportOnlyLocals: false, exportLocalsConvention: "asIs" },
              esModule: false,
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        exclude: /\.module\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin({ filename: "bundle.css" })],
};
