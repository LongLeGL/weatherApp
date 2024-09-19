<template>
  <div class="rounded-md bg-slate-200 w-fit px-6 py-4 m-auto opacity-90">
    <div>
      <h3 class="text-2xl font-bold text-slate-950">Current Weather</h3>
      <div v-if="currTime" class="text-base my-2">{{ currTime }}</div>
      <div class="flex gap-12">
        <div>
          <WeatherIcon :wcode="todayWeather.weather_code" :size="'4x'"/>
          <div class="font-bold my-2">{{ todayWeatherCond }}</div>
        </div>

        <div class="flex flex-col gap-2">
          <div class="text-2xl">
            <span >
              <font-awesome-icon :icon="['fas', 'temperature-three-quarters']" />
              {{ todayWeather.temperature_2m }}°C
            </span>
            <span>
              (<font-awesome-icon :icon="['fas', 'droplet']" />
              {{ todayWeather.relative_humidity_2m }}%)
            </span>
          </div>
          <div class="text-lg">Feels like {{ todayWeather.apparent_temperature }} °C</div>
        </div>
      </div>
    </div>

    <h3 class="text-xl font-bold text-slate-700 mt-6">7 days forecast</h3>
    <div class="flex gap-4 my-4">
      <div v-for="day in dailyWeather" :key="day.time" @click="scrollToId(day.time)" class="flex flex-col gap-1 items-center rounded bg-slate-300 p-2">
          <div class="text-base font-bold">{{ day.time }}</div>
          <div class="my-2"><WeatherIcon :wcode="day.weatherCode" :size="'2x'"/></div>
          <div class="text-slate-700">{{ day.minTemp }}°C - {{ day.maxTemp }}°C</div>
      </div>
    </div>
  </div>
</template>

<script>
import WeatherIcon from "./WeatherIcon.vue";
import mapWcodeWcond from "../lib/mapWcodeWcond";

export default {
  props: ["todayWeather"],
  computed: {
    currTime() {
      let currDate = new Date();
      return `${String(currDate.getHours()).padStart(2, "0")}:${String(currDate.getMinutes()).padStart(2, "0")}  ${currDate.getDate()}/${currDate.getMonth()+1}/${currDate.getFullYear()}`;
    },
    todayWeatherCond(){
      return mapWcodeWcond(this.todayWeather.weather_code);
    },
    dailyWeather(){
      return this.$store.state.dailyWeatherData;
    }
  },
  methods: {
    scrollToId(id){

    }
  }
};
</script>

<style lang="scss" scoped></style>
