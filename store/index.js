export const state = () => ({
  location: {
    lat: 10.7,
    long: 106.7,
  },
  weatherData: {},
  todayWeatherData: {},
  dailyWeatherData: [],
  hourlyWeatherData: [],
});

export const getters = {
  getCurrLoc(state) {
    return state.location;
  },

  getWeather(state) {
    return state.weatherData;
  },

  getTodayWeather(state){
    return state.todayWeatherData;
  },
};

export const mutations = {
  setLocation(state, newCoords) {
    state.location = newCoords;
  },

  setWeatherData(state, newData){
    state.weatherData = newData;
  },

  setTodayWeatherData(state, newData){
    state.todayWeatherData = newData;
  },

  setDailyWeatherData(state, newData){
    state.dailyWeatherData = newData;
  },

  setHourlyWeatherData(state, newData){
    state.hourlyWeatherData = newData;
  },
};

export const actions = {
  async fetchWeather({state, commit}) {
    return new Promise((resolve, reject) => {
      this.$axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${state.location.lat}&longitude=${state.location.long}&current=temperature_2m,relative_humidity_2m,apparent_temperature,rain,weather_code&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Asia%2FSingapore`
      )
      .then(res => {
        commit('setWeatherData', res.data);
        commit('setTodayWeatherData', res.data.current);
        commit('setDailyWeatherData', extractDailyForecast(res.data.daily));
        commit('setHourlyWeatherData', extractHourlyForecast(res.data.hourly));
        resolve();
      })
      .catch(e => {
        console.error("Error fetching weather API:", e);
        reject();
      })
    })
  },
};

function extractDailyForecast({time, temperature_2m_min, temperature_2m_max, weather_code}){
  let dailyData = time.map((date, index) => {
    return {
      time: date.split('-').reverse().join('/'),      // convert yyyy-mm-dd to dd/mm/yyyy
      minTemp: temperature_2m_min[index],
      maxTemp: temperature_2m_max[index],
      weatherCode: weather_code[index]
    }
  })

  return dailyData;
}

function extractHourlyForecast({time, temperature_2m, relative_humidity_2m, apparent_temperature, weather_code}){
  let dailyData = time.map((date, index) => {
    return {
      time: date.split('-').reverse().join('/'),      // convert yyyy-mm-dd to dd/mm/yyyy
      temp: temperature_2m[index],
      humidity: relative_humidity_2m[index],
      apparentTemp: apparent_temperature[index],
      weatherCode: weather_code[index]
    }
  })

  return dailyData;
}
