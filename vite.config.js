import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/ProbandoWeb",
  build: {
    outDir: "dist",
  },
  server: {
    historyApiFallback: true,  // 👈 Asegura que las rutas funcionen en desarrollo
  }
})
