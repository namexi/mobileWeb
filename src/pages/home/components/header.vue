<template>
    <div>
        <div class="head">
            <div class="head-left">
            <div class="iconfont  returnIcon">&#xe624;</div>
            </div>

            <div class="head-input">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点/游玩主题
            </div>
            <div class="head-right">
            城市
            <span class="iconfont arrowsBotton">&#xe64a;</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'HomeHeader'
}
</script>
<style lang="stylus" scoped>
  @import '~style/varibles.styl'
  .head
    display:flex
    line-height:$headHeight
    background-color:$headBgColor
    color:#fff
    font-size:.30rem
    .head-left
      width:.64rem
      float:left
      .returnIcon
        margin-left:.13rem
        font-size:.34rem
        font-weight:700
    .head-input
      flex:1
      background-color:#fff
      height:.6rem
      font-size:.28rem
      line-height:.6rem
      margin-top:.14rem
      margin-left:.1rem
      padding-left:.16rem
      border-radius:.06rem
      color:#ccc
    .head-right
      width:1.04rem
      float:right
      text-align:center
      margin: 0 .1rem
      .arrowsBotton
        font-size:.22rem
        margin-left:-.04rem
</style>
