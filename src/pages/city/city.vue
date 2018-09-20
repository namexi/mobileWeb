<template lang="html">
  <div class="">
    <city-header></city-header>
    <city-tab></city-tab>
  </div>
</template>

<script>
import CityHeader from './components/header.vue'
import CityTab from './components/tab.vue'
export default {
  name: 'City',
  components: {
    CityHeader,
    CityTab
  }
}
</script>

<style lang="stylus" scoped>

</style>
