import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'import.meta.env.VITE_BACKEND_URL': JSON.stringify(process.env.VITE_BACKEND_URL),
    'import.meta.env.VITE_RAZORPAY_KEY_ID': JSON.stringify(process.env.VITE_RAZORPAY_KEY_ID),
  },
});
