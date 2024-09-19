<template>
  <div class="rounded-md bg-slate-200 w-fit px-6 py-4 m-auto">
    <div>
      <h3>Current weather</h3>
      <span v-if="currTime">{{ currTime }}</span>
      <div class="flex gap-6">
        <div>
          <WeatherIcon :wcode="todayWeather.weather_code" :size="'4x'"/>
          <span>{{ todayWeatherCond }}</span>
        </div>

        <div>
          <span>
            <font-awesome-icon :icon="['fas', 'temperature-three-quarters']" />
            {{ todayWeather.temperature_2m }}°C
          </span>
          <span>
            (<font-awesome-icon :icon="['fas', 'droplet']" />
            {{ todayWeather.relative_humidity_2m }}%)
          </span>
          <div>Feels like {{ todayWeather.apparent_temperature }} °C</div>
        </div>
      </div>
    </div>

    <div class="flex gap-4">
      <div <div v-for="day in dailyWeather" :key="day.time" class="flex flex-col items-center">
        <div>{{ day.time }}</div>
        <div><WeatherIcon :wcode="day.weatherCode"/></div>
        <div>{{ day.minTemp }}°C - {{ day.maxTemp }}°C</div>
      </div>
    </div>
  </div>
</template>

<script>
import WeatherIcon from "./WeatherIcon.vue";
import mapWcodeWcond from "../lib/mapWcodeIcon";

export default {
  computed: {
    currTime() {
      let currDate = new Date();
      return `${String(currDate.getHours()).padStart(2, "0")}:${String(currDate.getMinutes()).padStart(2, "0")}  ${currDate.getDate()}/${currDate.getMonth()}/${currDate.getFullYear()}`;
    },
    todayWeather() {
      return this.$store.state.todayWeatherData;
    },
    todayWeatherCond(){
      return mapWcodeWcond(this.todayWeather.weather_code);
    },
    dailyWeather(){
      return this.$store.state.dailyWeatherData;
    }
  },
};
</script>

<style lang="scss" scoped></style>
