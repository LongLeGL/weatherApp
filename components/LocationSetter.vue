<template>
  <div
    id="locationSetBar"
    class="flex gap-4 items-center bg-white w-full h-fit px-6 pt-4 pb-2"
  >
    <span class="text-lg font-bold">Current location:</span>
    <div class="flex gap-2">
      <a-input-number
        style="width: 8em"
        :min="-90"
        :max="90"
        :step="0.0001"
        :placeholder="'Latitude'"
        :value="location.lat"
        @change="updateLat"
        string-mode
      />

      <a-input-number
        style="width: 8em"
        :min="-180"
        :max="180"
        :step="0.0001"
        :placeholder="'Longtitude'"
        :value="location.long"
        @change="updateLong"
        string-mode
      />
    </div>
    <a-button type="primary" @click="setNewLocation">Set location</a-button>
  </div>
</template>

<script>
export default {
  computed: {
    location(){
      return this.$store.state.location
    }
  },
  methods: {
    setNewLocation() {
      this.$store.dispatch("fetchWeather");
    },
    updateLat(newLat){
      this.$store.commit('setLocation', {
        lat: newLat,
        long: this.location.long,
      })
    },
    updateLong(newLong){
      this.$store.commit('setLocation', {
        lat: this.location.lat,
        long: newLong,
      })
    },
  },
};
</script>

<style scoped>
#locationSetBar {
  box-shadow: 0px 11px 12px 5px white;
}
</style>
