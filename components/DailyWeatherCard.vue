<template>
  <div class="rounded-md bg-slate-200 w-fit px-6 py-4 m-auto">
    <div>
      <h3>Current weather</h3>
      <span v-if="currTime">{{ currTime }}</span>
      <div class="flex">
        <div>
          <span>Weather icon image</span>
          <span>{{ todayWeather.temperature_2m }} °C</span>
        </div>
        <div>
          <div>Weather condition</div>
          <div>
            <span>Feels like 30 °C</span>
            <span>({{ todayWeather.relative_humidity_2m }}%)</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="flex">
      <div>
        <div>Thur, 20/9/2024</div>
        <div>Weather icon</div>
        <div>Temp_min - Temp-max</div>
      </div>
      <div>
        <div>Thur, 21/9/2024</div>
        <div>Weather icon</div>
        <div>Temp_min - Temp-max</div>
      </div>
      <div>
        <div>Thur, 22/9/2024</div>
        <div>Weather icon</div>
        <div>Temp_min - Temp-max</div>
      </div>
      <div>
        <div>Thur, 23/9/2024</div>
        <div>Weather icon</div>
        <div>Temp_min - Temp-max</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      currTime(){
        let currDate = new Date();
        return `${String(currDate.getHours()).padStart(2, '0')}:${String(currDate.getMinutes()).padStart(2, '0')}`;
      },
      todayWeather(){
        return this.$store.state.weatherData.current;
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>