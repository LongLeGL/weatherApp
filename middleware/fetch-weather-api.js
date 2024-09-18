export default async function({store, from}) {
  // if (!from){   // If this is the first page load
    await Promise.all([
      store.dispatch('fetchWeather'),
    ]);
    console.log("Middleware execution completed !");
  // }
}