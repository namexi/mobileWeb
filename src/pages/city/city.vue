<template lang="html">
  <div class="city-wrapper">
    <city-header :cityList="cityList" @change="cityDataChange"></city-header>
    <city-tab :hotCities="hotCities" :cities="cities" :letter="letter"></city-tab>
    <letter-list :cities="cities" @change="letterChange"></letter-list>
  </div>
</template>

<script>
import CityHeader from './components/header.vue'
import CityTab from './components/tab.vue'
import LetterList from './components/letterList.vue'
export default {
  name: 'City',
  components: {
    CityHeader,
    CityTab,
    LetterList
  },
  methods: {
    cityDataChange (data) {
      this.hotCities = data[1]
      this.cities = data[0]
    },
    letterChange (letter) {
      this.letter = letter
    }
  },
  data () {
    return {
      cityList: {},
      hotCities: [],
      cities: {},
      letter: ''
    }
  },
  created () {
    this.$axios.get('api/city.json')
      .then(res => {
        res = res.data
        if (res.ret) this.cityList = res.data
        if (!this.hotCities.length) this.hotCities = res.data.hotCities
        if (!this.cities.length) this.cities = res.data.cities
      })
  }
}
</script>

<style lang="stylus">
</style>
