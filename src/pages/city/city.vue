<template lang="html">
  <div class="city-wrapper">
    <city-header :cityList="cityList" @change="cityDataChange"></city-header>
    <city-tab :hotCities="hotCities" :cities="cities"></city-tab>
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
  },
  methods: {
    cityDataChange (data) {
      this.hotCities = data[1]
      this.cities = data[0]
    }
  },
  data () {
    return {
      cityList: '',
      hotCities: '',
      cities: ''
    }
  },
  created () {
    this.$axios.get('api/city.json')
      .then(res => {
        res = res.data
        if (res.ret) this.cityList = res.data
        if (!this.hotCities) this.hotCities = res.data.hotCities
        if (!this.cities) this.cities = res.data.cities
      })
  }
}
</script>

<style lang="stylus">
</style>
