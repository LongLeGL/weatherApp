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
};
</script>
