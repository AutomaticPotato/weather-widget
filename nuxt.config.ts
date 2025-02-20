import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["@vueuse/nuxt"],
  vite: {
    plugins: [tailwindcss()],
  },

  runtimeConfig: {
    // only available on the server
    WEATHER_API_ENDPOINT: "https://api.open-meteo.com/v1/",
  },
});
