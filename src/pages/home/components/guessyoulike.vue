<template>
  <div class="like">
    <div class="like-title">
      <div class="like-title-img">
        <img src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="">
        <span class="like-title-dec">猜你喜欢</span>
      </div>
    </div>
    <ul class="like-content">
      <li v-for="(el,index) in list" :key="index">
        <a href="#">
          <div class="like-content-img">
            <img :src="el.url" :alt="el.title">
          </div>
          <div class="like-content-des">
            <div class="title">{{el.title}}</div>
            <div class="comment"><span>★★★★★</span>  <i>{{el.comment}}条评论</i></div>
            <div class="price"><span>¥<em>{{el.price}}</em></span>起 <i>{{el.coord}}</i></div>
            <div class="like-content-feature" v-if="el.feature">
            <div class="feature">{{el.feature}}</div>
          </div>
          </div>
        </a>
      </li>
    </ul>
    <a href="#" class="like-more">查看所有产品</a>
  </div>
</template>
<script>
export default {
  name: 'HomeGuessyoulike',
  props: ['list']
}
</script>
<style lang="stylus" scoped>
  .like
    margin-top:.2rem
    background:#fff
    .like-title
      width:100%
      height:.44rem
      line-height:.44rem
      padding:12.5px 0
      .like-title-img
        height:100%
        img
          height:.3rem
          margin-left:.22rem
          margin-bottom:.2rem
        .like-title-dec
          display:inline-block
          line-height:.44rem
          font-size:.32rem
          margin-left:-1px
    .like-content
      li
        padding:.2rem 0
        a
          display:flex
        .like-content-img
          width:2rem
          float:left
          margin-left:.24rem
          img
            height:2rem
        .like-content-des
          flex:1
          margin-left:.2rem
          .title
            font-size:.32rem
            color:#333
            margin-top:.3rem
          .comment
            margin-top:.22rem
            color:#616161
            i
              font-size:.24rem
              padding-left:.2rem
          span
              font-weight:500
              color:#ffb436
          .price
            margin-top:.22rem
            color:#616161
            position:relative
            em
              font-size:.4rem
            i
              font-size:.24rem
              position:absolute
              bottom:0
              right:.24rem
          .like-content-feature
            margin-top:.48rem
            .feature
              color:#f55
              font-size:.24rem
              line-height:.34rem
              padding-left:.1rem
    .like-more
      display:block
      width:100%
      font-size:.28rem
      line-height:.4rem
      padding:.2rem 0
      text-align:center
      border-top: 1px solid rgba(224,224,224,0.39)
</style>
