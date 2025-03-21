import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'elevateddesignz' and 'BullCircle' with actual GitHub info
export default defineConfig({
  base: '/BullCircle/',  // ⚠️ repo name with slashes
  plugins: [react()]
})
