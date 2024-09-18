export const state = () => ({
  location: {
    lat: 10.7,
    long: 106.7,
  },
  weatherData: {},
});

export const getters = {
  getCurrLoc(state) {
    return state.location;
  },

  getWeather(state) {
    return state.weatherData;
  },
};

export const mutations = {
  setLocation(state, newCoords) {
    state.location = newCoords;
  },

  setWeatherData(state, newData){
    state.weatherData = newData;
  }
};

export const actions = {
  async fetchWeather({state, commit}) {
    return new Promise((resolve, reject) => {
      this.$axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${state.location.lat}&longitude=${state.location.long}&current=temperature_2m,relative_humidity_2m,apparent_temperature,rain,weather_code&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Asia%2FSingapore`
      )
      .then(res => {
        commit('setWeatherData', res.data);
        resolve();
      })
      .catch(e => {
        console.error("Error fetching weather API:", e);
        reject();
      })
    })
  },
};
