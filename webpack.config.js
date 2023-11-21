
const path = require('node:path'); // Подключение модуля 'path' из Node.js для работы с путями файлов
const HtmlWebPackPlugin = require('html-webpack-plugin'); // Подключение плагина 'html-webpack-plugin' для генерации HTML файлов
const MiniCSSExtractPlugin = require('mini-css-extract-plugin'); // Подключение плагина 'mini-css-extract-plugin' для извлечения CSS в отдельные файлы

module.exports = {
  entry: "./src/index.js", // Указание точки входа в приложение
  output: {
    path: path.resolve(__dirname, 'dist'), // Указание пути для вывода собранных файлов в папку 'dist' в текущем каталоге
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Определение, что эти правила применяются к файлам JavaScript
        exclude: /node_modules/, // Исключение папки 'node_modules' из обработки
        use: {
          loader: 'babel-loader', // Использование Babel для транспиляции JavaScript
        },
      },
      {
        test: /\.html$/, // Определение, что эти правила применяются к HTML файлам
        use: [
          {
            loader: 'html-loader', // Использование 'html-loader' для обработки HTML файлов
          },
        ],
      },
      {
        test: /\.css$/i, // Определение, что эти правила применяются к CSS файлам
        use: [MiniCSSExtractPlugin.loader, 'css-loader'], // Использование 'css-loader' и 'MiniCSSExtractPlugin.loader' для обработки CSS файлов
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // Определение, что эти правила применяются к изображениям
        type: 'asset/resource', // Использование ресурсов для обработки изображений
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i, // Определение, что эти правила применяются к шрифтам
        type: 'asset/resource', // Использование ресурсов для обработки шрифтов
      }
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html', // Указание исходного HTML-файла для генерации
      filename: './index.html', // Указание имени итогового HTML-файла
    }),
    new MiniCSSExtractPlugin() // Использование MiniCSSExtractPlugin для извлечения CSS в отдельные файлы
  ],
};
