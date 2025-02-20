<script setup lang="ts">
import type { ForecastResponse } from '~/types/responses/ForecastResponse';

// If i hade a reverse geomap API I would use the user location. Instead for this example i'm hard coding Groningen
// const { coords } = useGeolocation()

const latitude = computed(() => 53.21064892641366)
const longitude = computed(() => 6.584382254116292)

const { data: weatherData } = await useFetch<ForecastResponse>("/api/forecast", {
  query: {
    latitude,
    longitude,
  }
})

</script>
<template>
  <div class="bg-(image:--gradient-pink) min-h-[100dvh] w-full flex justify-center items-center py-5">
    <WeatherWidget :weatherData="weatherData!" />
  </div>
</template>
