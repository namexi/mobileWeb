<template>
  <div class="tab" >
      <div class="header">
        <ul class="header-tab">
          <li class="active" @click="tabDomestic" ref="tab1">境内</li>
          <li @click="tabOverseas" ref="tab2">境外·港澳台</li>
        </ul>
      </div>
      <div class="main" ref="wrapper">
      <div class="content">
      <city-domestic :cities="cities" :hotCities="hotCities"></city-domestic>
      <alphabet-list :list="cities"></alphabet-list>
      </div>
    </div>
  </div>
</template>

<script>
import CityDomestic from './domestic'
import AlphabetList from './Alphabet'
import BetterScroll from 'better-scroll'
export default {
  name: 'CityTab',
  components: {
    CityDomestic,
    AlphabetList
  },
  data () {
    return {
      tab1: '',
      tab2: '',
      cityList: [],
      hotCities: [],
      cities: {}
    }
  },
  created () {
    this.$axios.get('api/city.json')
      .then(res => {
        res = res.data
        if (res.ret) {
          this.cityList = res.data
          this.hotCities = res.data.hotCities
          this.cities = res.data.cities
        }
      })
  },
  mounted: function () {
    this.$nextTick(() => {
      this.scroll = new BetterScroll(this.$refs.wrapper)
      this.tab1 = this.$refs.tab1
      this.tab2 = this.$refs.tab2
    })
  },
  methods: {
    tab (add, del, className) {
      if (add.classList.contains(className)) return
      add.classList.add(className)
      del.classList.remove(className)
    },
    tabDomestic () {
      this.tab(this.tab1, this.tab2, 'active')
      this.cities = this.cityList.cities
      this.hotCities = this.cityList.hotCities
    },
    tabOverseas () {
      this.tab(this.tab2, this.tab1, 'active')
      this.cities = this.cityList.overseasCities
      this.hotCities = this.cityList.overseasHotCities
    }
  }

}
</script>

<style lang="stylus" scoped>
  .tab
    .header
      background:#00bcd4
      padding:.18rem 1rem
      .header-tab
        height:.4rem
        line-height:.4rem
        border:1px solid #fff
        border-radius:.03rem
        color:#fff
        font-size:.28rem
        li
          width:50%
          float:left
          text-align:center
          background:#00bcd4
          color:#fff
        .active
          background:#fff
          color:#00bcd4
  .main
    position:absolute
    top:1.68rem
    left:0
    right:0
    bottom:0
    overflow:hidden
</style>
