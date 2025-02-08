import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import flowbite from "flowbite-react/tailwind";

// https://vite.dev/config/
export default defineConfig({
  // content: [
  //   "./src/**/*.{js,jsx,ts,tsx}", // Ensure your paths match your project structure
  //   flowbite.content(),
  // ],
  plugins: [react(), tailwindcss(), flowbite.plugin()],
});
