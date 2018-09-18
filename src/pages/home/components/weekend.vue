<template>
  <div class="weekend">
    <div class="weekend-title">周末去哪</div>
    <ul class="weekend-content">
      <li v-for="(el, index) in list" :key="index">
        <a href="#">
          <div class="content-img">
            <img :src="el.url" :alt="el.title">
          </div>
          <div class="content-des">
            <p class="title">{{el.title}}</p>
            <p class="comment">{{el.comment}}</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeWeekend',
  props: ['list']
}
</script>
<style lang="stylus" scoped>
  .weekend
    .weekend-title
      line-height:.8rem
      font-size:.32rem
      padding-left:.26rem
    .weekend-content
      background:#fff
      .content-img
        overflow:hidden
        width:100%
        height:0
        padding-bottom:37.1%
        img
          width:100%
      .content-des
        font-size:.32rem
        color:#333
        padding:.14rem .2rem .2rem .2rem
        p
          line-height:.48rem
          &:nth-child(2)
            font-size:.24rem
            color:#616161
            line-height:.41rem
</style>
