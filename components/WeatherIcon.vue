<template>
  <div>
    <component :is="mappedIcon" :icon="mappedIconProps" :size="size"></component>
  </div>
</template>

<script>
  export default {
    props: ['wcode', 'size'],
    computed: {
      mappedIcon(){
        switch (this.wcode) {
          case 0:
            // Clear sky
            return 'font-awesome-icon';
          default:
            return 'font-awesome-icon';
        }
      },
      mappedIconProps(){
        // Weather code as defined by OpenMeteo: https://open-meteo.com/en/docs#:~:text=Weather%20variable%20documentation-,WMO%20Weather%20interpretation%20codes,-(WW)
        switch (true) {
          case ([0,1].includes(this.wcode)):
            // Clear sky
            return ['fas', 'sun'];
          case ([2,3].includes(this.wcode)):
            // Cloudy
            return ['fas', 'cloud-sun'];
          case ([45,48].includes(this.wcode)):
            // Foggy
            return ['fas', 'smog'];
          case ([51,53,55,56,57].includes(this.wcode)):
            // Drizzle
            return ['fas', 'droplet'];
          case ([61,63,65].includes(this.wcode)):
            // Rain
            return ['fas', 'cloud-rain'];
          case ([66,67,71,73,75,77].includes(this.wcode)):
            // Snow
            return ['fas', 'snowflake'];
          case ([80,81,82].includes(this.wcode)):
            // Heavy Rain
            return ['fas', 'cloud-showers-heavy'];
          case ([95,96,99].includes(this.wcode)):
            // Thunder
            return ['fas', 'cloud-bolt'];
          default:
            return ['fas', 'rainbow'];
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>