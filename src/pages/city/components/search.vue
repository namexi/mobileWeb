<template>
  <div class="search">
    <div class="city-search">
      <input type="text" class="search-input" v-model="input" placeholder="输入城市名或拼音">
    </div>
    <div class="search-list" ref="wrapper" v-show="input">
      <ul>
        <li class="search-wrapper" v-for="(el,key) in list" :key="key"><a href="#">{{el.name}}</a></li>
        <li class="search-wrapper" v-show="flag">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      input: '',
      list: [],
      timer: null,
      flag: false
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  watch: {
    input () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.input) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        this.flag = false
        let array = []
        for (let i in this.cities) {
          this.cities[i].forEach(el => {
            if (el.spell.indexOf(this.input.toLowerCase()) >= 0 || el.name.indexOf(this.input) >= 0) {
              array.push(el)
            }
          })
        }
        this.list = array
        if (!this.list.length) this.flag = true
      }, 100)
    }
  }
}
</script>
<style lang="stylus" scoped>
  .search
    .city-search
      background:#00bcd4
      padding:.05rem 1.1rem .1rem 1.1rem
      .search-input
        width:100%
        height:.47rem
        border-radius:.04rem
        text-align:center
        font-size:.26rem
    .search-list
      z-index:1
      position:absolute
      top:1.9rem
      left:0
      bottom:0
      right:0
      overflow:hidden
      font-size:.30rem
      background:rgba(245, 245, 245, .7)
    ul
      background:#fff
      .search-wrapper
        padding: .3rem 0 .3rem .2rem
        border-bottom:1px solid #f5f5f5
        a
          color:#333
</style>
