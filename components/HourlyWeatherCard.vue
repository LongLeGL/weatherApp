<template>
  <div>
    <h1>Hourly Weathers</h1>
    <div v-for="hourWeather in hourlyData" :key="hourWeather.time" class="flex justify-between border-b-2">
      <div>
        <span>{{ hourWeather.time }}</span>
        <WeatherIcon :wcode="hourWeather.weatherCode"/>
        <span>{{ hourWeather.temp }}°C</span>
      </div>
      <div>
        <span>{{ hourWeather.humidity }}%</span>
        <span>Feels like {{ hourWeather.apparentTemp }}°C</span>
      </div>
    </div>
  </div>
</template>

<script>
import WeatherIcon from './WeatherIcon.vue';

export default {
  computed: {
    hourlyData(){
      return this.$store.state.hourlyWeatherData;
    }
  }
}
</script>

<style lang="scss" scoped>

</style>