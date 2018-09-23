<template>
  <div class="city-header">
    <div class="city">
      <router-link :to="{ name: 'Home'}">
        <div class="city-left">
          <div class="iconfont  returnIcon">&#xe624;</div>
        </div>
      </router-link>
      <div class="city-right">城市选择</div>
    </div>
    <div class="header">
      <ul class="header-tab">
        <li :class="{active:domesticFlag}" @click="tabDomestic">境内</li>
        <li :class="{active:overseasFlag}" @click="tabOverseas">境外·港澳台</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CityHeader',
  props: {
    cityList: Object
  },
  data () {
    return {
      tab1: '',
      tab2: '',
      cities: {},
      hotCities: [],
      domesticFlag: true,
      overseasFlag: false
    }
  },
  methods: {
    tabDomestic () {
      this.cities = this.cityList.cities
      this.hotCities = this.cityList.hotCities
      this.$emit('change', [this.cities, this.hotCities])
      if (this.overseasFlag) {
        this.overseasFlag = false
      }
      this.domesticFlag = true
    },
    tabOverseas () {
      this.cities = this.cityList.overseasCities
      this.hotCities = this.cityList.overseasHotCities
      this.$emit('change', [this.cities, this.hotCities])
      if (this.domesticFlag) {
        this.domesticFlag = false
      }
      this.overseasFlag = true
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~style/varibles.styl'
.city
  width:100%
  display:flex
  line-height:$headHeight
  background-color:$headBgColor
  color:#fff
  z-index:2
  .city-left
    width:.8rem
    float:left
    color:#fff
    .returnIcon
      height:.88rem
      width:.8rem
      text-align:center
      font-size:.36rem
      font-weight:700
  .city-right
        flex:1
        font-size:.34rem
        line-height:.88rem
        text-align:center
        margin-right:1rem
.header
    background:#00bcd4
    padding:0 1rem
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
</style>
