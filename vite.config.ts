import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/BullCircle/',  // <- Add this line!
  plugins: [react()],
})
