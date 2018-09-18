<template>
    <div>
        <div class="city">
          <router-link :to="{ name: 'Home'}">
            <div class="city-left">
            <div class="iconfont  returnIcon">&#xe624;</div>
            </div>
          </router-link>
          <div class="city-right">
            城市选择
          </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'CityHeader'
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
</style>
