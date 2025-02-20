<script lang="ts" setup>
const { date } = defineProps<{
  date: string,
  weatherIconUrl: string,
  temperatureMin: number,
  temperatureMax: number
}>()

const formattedDateFull = useDateFormat(date, "dddd") 
</script>

<template>
  <div class="grid grid-cols-3 lg:flex lg:flex-col items-center group transition-all duration-300 hover:scale-105 px-1">
    <span class="group-hover:font-semibold transition-all duration-300 ease-out">{{ formattedDateFull }}</span>
    <img class="transition-all delay-100 duration-300 ease-out-overshoot group-hover:scale-105 justify-self-center"
      :src="weatherIconUrl" />
    <div class="justify-self-end flex items-center gap-2">
      <span class="opacity-50 text-sm group-hover:opacity-60 transition-all duration-300">{{
        temperatureMin }}
        &#8451;</span>
      <span class="font-semibold">{{ temperatureMax }} &#8451;</span>
    </div>
  </div>
</template>
