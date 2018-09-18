<template>
  <div class="homepage">
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconsList"></home-icons>
    <home-subfield></home-subfield>
    <home-hotlist :list="hotList"></home-hotlist>
    <home-guessyoulike :list="likeList"></home-guessyoulike>
    <home-weekend :list="weekList"></home-weekend>
  </div>
</template>
<script>
import HomeHeader from './components/header.vue'
import HomeSwiper from './components/swiper.vue'
import HomeIcons from './components/icons.vue'
import HomeSubfield from './components/subfield.vue'
import HomeHotlist from './components/hotlist.vue'
import HomeGuessyoulike from './components/guessyoulike.vue'
import HomeWeekend from './components/weekend.vue'
export default {
  name: 'Home',
  data () {
    return {
      swiperList: [],
      iconsList: [],
      hotList: [],
      likeList: [],
      weekList: []
    }
  },
  components: {
    HomeHeader: HomeHeader,
    HomeSwiper: HomeSwiper,
    HomeIcons,
    HomeSubfield,
    HomeHotlist,
    HomeGuessyoulike,
    HomeWeekend
  },
  methods: {
    getdat () {
      this.$axios.get('/api/index.json')
        .then(this.getResData)
    },
    getResData (res) {
      res = res.data
      if (res.ret && res.data) {
        this.swiperList = res.data.swiperList
        this.iconsList = res.data.iconList
        this.hotList = res.data.hotList
        this.likeList = res.data.recommendList
        this.weekList = res.data.weekendList
      }
    }

  },
  created () {
    this.getdat()
  }
}
</script>
<style lang="stylus">
  .homepage{
    background:#f5f5f5
  }
</style>
