'use strict';

System.config({

  baseURL: '/',
  defaultJSExtensions: true,
  transpiler: 'typescript',
  typescriptOptions: {
    target: 'es5',
    module: 'system',
    sourceMap: true,
    experimentalDecorators: true,
    emitDecoratorMetadata: true
  },

  packages: {
    app: {
      main: 'index',
      defaultExtension: 'ts',
      meta: {
        '*.ts': {
          loader: 'typescript',
          format: 'es6'
        }
      }
    }
  },

  paths: {
    'npm:*': 'jspm_packages/npm/*'
  },

  map: {
    typescript: 'npm:typescript@1.7.5'
  }

});
