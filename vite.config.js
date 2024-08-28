import { defineConfig } from "vite";
import { VitePWA } from 'vite-plugin-pwa'
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      injectRegister: 'auto',
      includeAssets: ["vite.svg"],
      manifest: {
        name: 'PWA REACT AND VITE',
        short_name: 'REACT APP',
        description: 'React and Vite app + PWA',
        theme_color: '#ffffff',
        icons: [
          {
            src: './public/vite.svg',
            sizes: '192x192',
            type: 'image/svg+xml'
          },
        ]
      }
    }),
  ],
});
