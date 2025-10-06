const path = require("path");

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
    globalObject: "this", 
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx", ".css"],
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
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
          {
            loader: "css-loader",
            options: {
              modules: {
                auto: /\.module\.css$/,
              },
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
  devServer: {
    static: "./dist",
    port: 3000,
    hot: true,
    open: true,
  },
};
