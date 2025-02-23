<script setup lang="ts">
import { WMOCodes } from '~/constants/WMOCodes';
import type { ForecastResponse } from '~/types/responses/ForecastResponse';
import type { WeatherCode } from '~/types/shared/WeatherCode';

defineProps<{
  weatherData: ForecastResponse
}>()

function getWeatherInfo(weatherCode: number): WeatherCode {
  try {
    return WMOCodes[weatherCode]
  } catch {
    return WMOCodes[0]
  }
}

</script>

<template>
  <CardContainer class="flex flex-col relative w-full lg:w-auto mx-5">
    <div class="flex justify-between items-center group border-b border-white/10">
      <div class="flex flex-col">
        <span>{{ weatherData?.locationName }}</span>
        <span class="text-3xl">{{ weatherData?.current.temperature_2m }} &#8451;</span>
      </div>
      <div class="flex flex-col">
        <img class="transition-all group-hover:scale-110 duration-300 ease-out-overshoot"
          :src="getWeatherInfo(weatherData?.current.weather_code!).day.image" />
        <span class="-translate-y-5 text-center">{{
          getWeatherInfo(weatherData.current.weather_code!).day.description
          }}</span>
      </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-7 gap-3 mt-5">
      <DailyWeather v-for="(day, index) in weatherData?.daily.time" :key="day"
        :class="{ 'lg:border-r lg:border-b-0 border-b border-white/10': index < weatherData?.daily.time.length! - 1 }"
        :weather-icon-url="getWeatherInfo(weatherData?.daily.weather_code[index]!).day.image"
        :temperatureMin="weatherData?.daily.temperature_2m_min[index]!"
        :temperatureMax="weatherData?.daily.temperature_2m_max[index]!" :date="weatherData?.daily.time[index]!" />
    </div>
  </CardContainer>
</template>
