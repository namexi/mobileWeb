<template lang="html">
  <div>
    <div class="main-header">热门城市</div>
    <div class="wrapper-city city-name">
      <div class="wrapper" v-for="(el,index) in hotCities" :key="index"><a href="#">{{el.name}}</a></div>
    </div>
    <div class="main-header">字母排序</div>
    <div class="wrapper-city letter">
      <div class="wrapper wrapper-letter" v-for="(el,key) in cities" :key="key"> <a href="#domestic-A">{{key}}</a></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Domestic',
  props: ['hotCities', 'cities']
}
</script>

<style lang="stylus" scoped>
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

</style>
