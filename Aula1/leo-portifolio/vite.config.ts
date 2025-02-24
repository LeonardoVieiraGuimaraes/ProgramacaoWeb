import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "",
  // base: "/", // para o servidor leoproti.com.br
  base: "/leo-portifolio/", // para git page
});
