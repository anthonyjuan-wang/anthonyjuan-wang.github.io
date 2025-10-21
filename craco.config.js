const CompressionPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  webpack: {
    configure: (webpackConfig, { env }) => {
      // Production optimizations
      if (env === 'production') {
        // Optimize bundle splitting
        webpackConfig.optimization = {
          ...webpackConfig.optimization,
          splitChunks: {
            chunks: 'all',
            cacheGroups: {
              default: false,
              vendors: false,
              vendor: {
                name: 'vendor',
                chunks: 'all',
                test: /node_modules/,
                priority: 20,
                enforce: true
              },
              react: {
                name: 'react-vendor',
                test: /[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom)[\\/]/,
                chunks: 'all',
                priority: 30,
                enforce: true
              },
              framer: {
                name: 'framer-vendor',
                test: /[\\/]node_modules[\\/](framer-motion)[\\/]/,
                chunks: 'all',
                priority: 25,
                enforce: true
              },
              graph: {
                name: 'graph-vendor',
                test: /[\\/]node_modules[\\/](d3-force|react-force-graph-2d)[\\/]/,
                chunks: 'all',
                priority: 25,
                enforce: true
              },
              common: {
                name: 'common',
                minChunks: 2,
                chunks: 'all',
                priority: 10,
                reuseExistingChunk: true,
                enforce: true
              }
            }
          },
          minimizer: [
            new TerserPlugin({
              terserOptions: {
                compress: {
                  drop_console: true,
                  drop_debugger: true,
                  pure_funcs: ['console.log', 'console.info']
                },
                mangle: true,
                format: {
                  comments: false
                }
              },
              extractComments: false
            })
          ]
        };

        // Add compression plugin
        webpackConfig.plugins.push(
          new CompressionPlugin({
            test: /\.(js|css|html|svg)$/,
            threshold: 8192,
            minRatio: 0.8
          })
        );
      }

      // Add bundle analyzer in development with ANALYZE env var
      if (process.env.ANALYZE) {
        webpackConfig.plugins.push(
          new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            openAnalyzer: true
          })
        );
      }

      // Optimize images
      webpackConfig.module.rules.push({
        test: /\.(png|jpe?g|gif|webp)$/i,
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 75
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75
              }
            }
          }
        ],
        enforce: 'pre'
      });

      return webpackConfig;
    }
  },
  style: {
    css: {
      loaderOptions: (cssLoaderOptions) => {
        cssLoaderOptions.modules = {
          ...cssLoaderOptions.modules,
          exportLocalsConvention: 'camelCase'
        };
        return cssLoaderOptions;
      }
    }
  },
  devServer: {
    compress: true,
    hot: true
  }
};