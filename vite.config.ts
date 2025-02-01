import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    AutoImport({
      dts: 'src/types/auto-imports.d.ts',
      imports: [
        '@vueuse/core',
        'vue-router',
        'vue',
      ],
    }),
    Components({
      dts: 'src/types/components.d.ts',
      types: [{ from: 'vue-router', names: ['RouterLink', 'RouterView'] }],
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
