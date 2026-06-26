import { defineConfig } from "vite";
import react from "@vitejs/react-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/gabinety-korona/", // <--- TUTAJ wpisz dokładną nazwę swojego repozytorium na GitHubie
});
