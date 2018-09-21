<template>
  <div class="tab" ref="wrapper">
    <div class="content">
      <div class="main-header">热门城市</div>
      <div class="wrapper-city city-name">
        <div class="wrapper" v-for="(el,index) in hotCities" :key="index"><a href="#">{{el.name}}</a></div>
      </div>
      <div class="main-header">字母排序</div>
      <div class="wrapper-city letter">
        <div class="wrapper wrapper-letter" v-for="(el,key) in cities" :key="key" @click="letterClick">{{key}}</div>
      </div>
      <div class="alphabet">
        <div class="alphabet-wrapper" v-for="(el, key) in cities" :key="key" :ref="key">
          <div class="main-header">{{key}}</div>
          <div class="wrapper-city list">
            <div class="wrapper letter-list" v-for="(el, index) in cities[key]" :key="index"> {{el.name}} </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'
export default {
  name: 'CityTab',
  props: ['cities', 'hotCities'],
  data () {
    return {
      letterTarget: ''
    }
  },
  methods: {
    letterClick (e) {
      this.letterTarget = e.target.innerText
    }
  },
  watch: {
    letterTarget () {
      if (this.letterTarget) {
        const el = this.$refs[this.letterTarget]
        this.scroll.scrollToElement(el[0])
      }
    }
  },
  mounted: function () {
    this.$nextTick(() => {
      this.scroll = new BetterScroll(this.$refs.wrapper)
    })
  }
}
</script>

<style lang="stylus" scoped>
  .tab
    position:absolute
    top:1.68rem
    left:0
    right:0
    bottom:0
    overflow:hidden
  .city-name
    &:before
      content:' '
      position:absolute
      width:33.33%
      left:33.33%
      height:100%
      border-left:1px solid #ddd
      border-right:1px solid #ddd
  .main-header
    font-size:.24rem
    padding:.24rem .3rem
    background:#f5f5f5
  .wrapper-city
    width:100%
    height:100%
    position:relative
    overflow:hidden
    .wrapper
      width:33.33%
      line-height:.9rem
      text-align:center
      float:left
      overflow:hidden
      white-space:nowrap
      text-overflow:ellipsis
      border-bottom:1px solid #ddd
      margin-bottom:-1px
      a
        color:#212121
  .letter
    padding:.3rem 0
    .wrapper-letter
      width:16.66%
      border:0
  .list
    &:before
      content:' '
      position:absolute
      width:25%
      left:25%
      height:100%
      border-left:1px solid #ddd
      border-right:1px solid #ddd
    &:after
      content: ' '
      position: absolute
      width: 25%
      left: 75%
      height: 100%
      border-left:1px solid #ddd
    .letter-list
      width:25%
      line-height:.9rem
      text-align:center
      float:left
      overflow:hidden
      white-space:nowrap
      text-overflow:ellipsis
      border-bottom:1px solid #ddd
      margin-bottom:-1px
</style>
