import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // <--- Zmień z '@vitejs/react-react' na '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/gabinety_korona/", // <--- Musi być dokładnie tak jak w adresie URL, z ukośnikami!
});
