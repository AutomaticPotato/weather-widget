<script setup lang="ts">
import { WMOCodes } from '~/constants/WMOCodes';
import type { ForecastResponse } from '~/types/responses/ForecastResponse';

defineProps<{
  weatherData: ForecastResponse
}>()

function getWeatherIcon(weatherCode: number): string {
  try {
    return WMOCodes[weatherCode].day.image
  } catch {
    return WMOCodes[0].day.image
  }
}

</script>

<template>
  <CardContainer class="flex flex-col relative w-full lg:w-auto mx-5">
    <div class="flex justify-between items-center group">
      <div class="flex flex-col">
        <span>{{ weatherData?.locationName }}</span>
        <span class="text-3xl">{{ weatherData?.current.temperature_2m }} &#8451;</span>
      </div>
      <img class="transition-all group-hover:scale-110 duration-300 ease-out-overshoot"
        :src="getWeatherIcon(weatherData?.current.weather_code!)" />
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-7 gap-3 mt-5">
      <DailyWeather v-for="(day, index) in weatherData?.daily.time" :key="day"
        :class="{ 'lg:border-r lg:border-b-0 border-b border-white/10': index < weatherData?.daily.time.length! - 1 }"
        :weather-icon-url="getWeatherIcon(weatherData?.daily.weather_code[index]!)"
        :temperatureMin="weatherData?.daily.temperature_2m_min[index]!"
        :temperatureMax="weatherData?.daily.temperature_2m_max[index]!" :date="weatherData?.daily.time[index]!" />
    </div>
  </CardContainer>
</template>
