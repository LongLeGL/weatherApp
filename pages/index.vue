<template>
  <div class="flex flex-col gap-10">
    <h1>Today's Weather</h1>
    <LocationSetter />
    <DailyWeatherCard />
    <HourlyWeatherCard />
  </div>
</template>

<script>
import DailyWeatherCard from "../components/DailyWeatherCard.vue";
import HourlyWeatherCard from "../components/HourlyWeatherCard.vue";
import LocationSetter from "../components/LocationSetter.vue";

export default {
  name: "IndexPage",
  data() {
    return {
      selectedDateIdx: 0,
    };
  },
  computed: {
    weatherData() {
      return this.$store.state.weatherData;
    },
  },
  mounted() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        console.log(
          "Got user's location:",
          pos.coords.latitude + " - " + pos.coords.longitude
        );
        this.$store.commit('setLocation', {
          lat: pos.coords.latitude,
          long: pos.coords.longitude
        });
      });
    }
  },
};
</script>
