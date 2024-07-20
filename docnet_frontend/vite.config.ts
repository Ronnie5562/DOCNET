import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  }
})
// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//       "date-fns": path.resolve(__dirname, "node_modules/date-fns/esm"),
//     },
//   },
//   optimizeDeps: {
//     include: [
//       'date-fns',
//       'date-fns/_lib/format/longFormatters',
//     ],
//   },
// })
