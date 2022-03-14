// https://vitejs.dev/config/
import { defineConfig } from 'vite'
import eslint from "@rollup/plugin-eslint"
import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig((configEnv) => {
  const isDevelopment = configEnv.mode === 'development'

  return {
    plugins: [
      react(),
      legacy({
        targets: ['ie >= 11'],
        additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
      }),
      {
        ...eslint({ include: 'src/**/*.+(ts|tsx)', throwOnError: true }),
        enforce: 'pre',
        apply: 'build',
      },
    ],
    resolve: {
      alias: {
        '@api': resolve(__dirname, 'src', 'api'),
        '@components': resolve(__dirname, 'src', 'components'),
        '@helpers': resolve(__dirname, 'src', 'helpers'),
        '@hooks': resolve(__dirname, 'src', 'hooks'),
      },
    },
    css: {
      modules: {
        generateScopedName: isDevelopment
          ? '[name]__[local]__[hash:base64:5]'
          : '[hash:base64:5]',
      },
    }
  }
})
