<template>
  <div class="weekend">
    <div class="weekend-title">周末去哪</div>
    <ul class="weekend-content">
      <li v-for="(el, index) in weekendList" :key="index">
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
  data () {
    return {
      weekendList: [
        {
          url: 'http://img1.qunarzz.com/sight/source/1505/8a/d412db9fcd44dd.jpg_r_640x214_86f303a2.jpg',
          title: '古典园林逛个够',
          comment: '苏州必须要留下足迹的十个地标'
        },
        {
          url: 'http://img1.qunarzz.com/sight/source/1505/3e/18b666031b22e7.jpg_r_640x214_864dce2f.jpg',
          title: '苏州必游TOP10',
          comment: '如果是第一次来苏州，园林是一定要逛的'
        },
        {
          url: 'http://img1.qunarzz.com/sight/source/1505/d7/5acd9640ee6cb2.jpg_r_640x214_975d2c3f.jpg',
          title: '山清水秀之地',
          comment: '钟情于山水之间，别有一番雅致'
        }
      ]
    }
  }
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
