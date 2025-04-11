import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // 这里可以添加全局的 SCSS 变量或导入
        // additionalData: `@import "./src/styles/variables.scss";`
      },
    },
  },
});
