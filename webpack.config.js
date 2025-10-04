const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: "./Components/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    library: {
      name: "MyUILibrary",
      type: "umd",
    },
    clean: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx", ".css"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                auto: /\.module\.css$/,
              },
              esModule: false,
            },
          },
        ],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "bundle.css",
    }),
  ],
  devServer: {
    static: "./dist",
    port: 3000,
    hot: true,
    open: true,
  },
};
