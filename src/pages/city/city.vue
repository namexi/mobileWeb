<template lang="html">
  <div class="city-wrapper">
    <city-header></city-header>
    <city-tab></city-tab>
  </div>
</template>

<script>
import CityHeader from './components/header.vue'
import CityTab from './components/tab.vue'
import CityDomestic from './components/domestic'
export default {
  name: 'City',
  components: {
    CityHeader,
    CityTab,
    CityDomestic
  }
}
</script>

<style lang="stylus">
</style>
