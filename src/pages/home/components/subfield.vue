<template>
  <div class="club">
      <ul>
        <li>
        <span class="iconfont">&#xe608;</span>
        定位失败
        </li>
        <li>
        <span class="iconfont">&#xe633;</span>
        玩水季
        </li>
      </ul>
    <ul>
      <li><a href="#"></a></li>
      <li><a href="#"></a></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeSubfield'
}
</script>
<style lang="stylus" scoped>
  .club
    width:100%
    background:#f5f5f5
    ul
      display:flex
      -webkit-margin-after: 0.7em;
      background:#fff
      border-top: .02rem solid rgba(224, 224, 224, .39)
      li
        width:50%
        height:.98rem
        line-height:.98rem
        text-align:center
        &:nth-child(2n+1)
          border-right: .02rem solid rgba(224, 224, 224, .39)
      &:nth-child(2)
        li
          height:1.4rem
          &:nth-child(1)
            a
              display:block
              height:100%
              background:url(http://img1.qunarzz.com/piao/fusion/1806/29/30427c0e0658b502.png) center center no-repeat
              background-size:auto 100%
          &:nth-child(2)
            a
              display:block
              height:100%
              background:url(http://img1.qunarzz.com/piao/fusion/1809/13/d6a5711a7dd07402.png) center center no-repeat
              background-size:auto 100%
</style>
