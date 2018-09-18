<template>
  <div class="hotlist">
    <div class="host-wrapper">
      <div class="host-title">
        <div class="host-title-img">
          <img src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" alt="">
          <span class="host-title-dec">本周热门榜单</span>
        </div>
        <a href="#">全部榜单<span class="iconfont">&#xe616;</span></a>
      </div>
      <div class="host-cont">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(el,index) in list" :key="index">
            <ul>
              <li>
                <a href="#">
                  <div class="host-cont-img">
                    <img :src="el.url" alt="">
                  </div>
                  <div class="host-cont-des">
                  <p>{{el.des}}</p>
                  <p><span>¥{{el.price}}</span>起</p>
                  </div>
                </a>
              </li>
            </ul>
          </swiper-slide>
          <div class="swiper-scrollbar" slot="scrollbar"></div>
        </swiper>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeHotlist',
  props: ['list'],
  data: function () {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 6,
        scrollbar: {
          el: '.swiper-scrollbar',
          hide: true,
          dragSize: 150
        }
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  .hotlist
    height:4.02rem
    background:#f5f5f5
    margin-top:.2rem
    .host-wrapper
      width:100%
      height:100%
      position:relative
      .host-title
        width:100%
        height:.44rem
        line-height:.44rem
        padding:12.5px 0
        background:#fff
        position:absolute
        top:0
        left:0
        right:0
        .host-title-img
          img
            height.3rem
            float:left
            margin-left:.2rem
          .host-title-dec
            float:left
            line-height:.44rem
            font-size:.32rem
            margin-left:.07rem
            color:#333
        a
          float:right
          line-height:.44rem
          font-size:.24rem
          color:#616161
          margin-right:.3rem
          span
            font-size:.32rem
    .host-cont >>> .swiper-container
      height:154px
      background:#fff
      .swiper-wrapper
        margin:0 .24rem
    .host-cont >>> .swiper-slide
      max-width:100px
    .host-cont >>> .swiper-scrollbar
      background: #fff
      .swiper-scrollbar-drag
        background: #c7c7c7
    .host-cont
        width:100%
        position:absolute
        bottom:0
      ul
        display:flex
        background:#fff
        .host-cont-img
          img
            height:2rem
        li
          p
            color:#333
            font-size:.24rem
            text-align:center
            margin:.1rem 0
          .host-cont-des
            width:2rem
            position:absolute
            bottom:.2rem
            span
              color:#ff8300
</style>
