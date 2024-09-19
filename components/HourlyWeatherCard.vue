<template>
  <div class="p-2 border-b-2 flex flex-col gap-2">
    <div class="font-bold">{{ weatherData.time }}</div>
    <div class="flex items-center justify-between p-3">
      <div>
        <WeatherIcon :wcode="weatherData.weatherCode" :size="'3x'"/>
      </div>
      <div>
        <div class="flex gap-3">
          <span>
            <font-awesome-icon :icon="['fas', 'temperature-three-quarters']" />
            {{ weatherData.temp }}°C
          </span>
          <span>
            <font-awesome-icon :icon="['fas', 'droplet']" />
            {{ weatherData.humidity }}%
          </span>
        </div>
        <div>Feels like {{ weatherData.apparentTemp }}°C</div>
      </div>
    </div>
  </div>
</template>

<script>
import WeatherIcon from './WeatherIcon.vue';

export default {
  props: ['weatherData'],
  computed: {

  }
}
</script>

<style lang="scss" scoped>

</style>