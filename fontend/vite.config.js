// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Vite sẽ chạy ở port 3000 (mặc định)
  server: {
    port: 3000,
    // Thêm proxy nếu muốn gọi API Backend không cần domain đầy đủ
    // proxy: {
    //   '/api': 'http://localhost:5000',
    // },
  },

});
