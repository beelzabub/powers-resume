import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// IMPORTANT: Change 'jamie-powers-portfolio' to your actual GitHub repo name
export default defineConfig({
  plugins: [vue()],
  base: '/powers-resume/'
})
