<template>
  <div class="flex flex-col">
    <a-spin tip="Loading weather data..." size="large" :spinning="loadingWeather">
      <div class="h-[90vh]" :style="bgStyle">
        <LocationSetter />
        <div class="flex flex-col h-full py-5 px-20">
          <div class="flex flex-1 items-center content-center">
            <DailyWeatherCard :todayWeather="currentWeatherData" />
          </div>
        </div>
      </div>
      <div class="py-5 px-20">
        <h1 class="text-2xl font-bold my-2">Hourly Weather Forecasts</h1>

        <!-- Divs version -->
        <div
          v-for="(hourByDate, key) in hourlyWeatherData"
          :key="key"
          :id="key"
        >
          <h2 class="text-2xl font-bold mt-4 w-full bg-slate-300">
            {{ key }}
          </h2>
          <HourlyWeatherCard
            v-for="hourWeather in hourByDate"
            :key="hourWeather.time + hourWeather.date"
            :weatherData="hourWeather"
          />
        </div>

        <!-- Collapsibles version -->
        <!-- <a-collapse v-model:activeKey="activeKey" :bordered="false">
        <a-collapse-panel
          v-for="(hourByDate, key) in hourlyWeatherData"
          :key="key"
          :header="key"
        >
          <HourlyWeatherCard
            v-for="hourWeather in hourByDate"
            :key="hourWeather.time + hourWeather.date"
            :weatherData="hourWeather"
          />
        </a-collapse-panel>
      </a-collapse> -->
      </div>
    </a-spin>
  </div>
</template>

<script>
import DailyWeatherCard from "../components/DailyWeatherCard.vue";
import HourlyWeatherCard from "../components/HourlyWeatherCard.vue";
import LocationSetter from "../components/LocationSetter.vue";
import mapWcodeWcond from "../lib/mapWcodeWcond";
import { ref, watch } from "vue";

export default {
  name: "IndexPage",
  data() {
    return {
      selectedDateIdx: 0,
      activeKey: ref([]),
      // this.$store.state.dailyWeatherData[0].time
    };
  },
  computed: {
    weatherData() {
      return this.$store.state.weatherData;
    },
    currentWeatherData() {
      return this.$store.state.todayWeatherData;
    },
    hourlyWeatherData() {
      return this.$store.state.hourlyWeatherData;
    },
    loadingWeather(){
      return this.$store.state.fetchingWeather;
    },
    bgStyle() {
      let weatherName = mapWcodeWcond(this.currentWeatherData.weather_code);
      return {
        backgroundImage: `url(${require(`~/assets/weatherImg/${
          weatherName + ".jpg"
        }`)})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        boxShadow: "10px -75px 106px -59px rgba(255,255,255,0.75) inset",
      };
    },
  },
  mounted() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        console.log(
          "Got user's location:",
          pos.coords.latitude + " - " + pos.coords.longitude
        );
        this.$store.commit("setLocation", {
          lat: pos.coords.latitude,
          long: pos.coords.longitude,
        });
      });
    }
  },
};
</script>
