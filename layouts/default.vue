<template>
  <Nuxt />
</template>


<script>
  export default {
    middleware: ['fetch-weather-api']
  }
</script>