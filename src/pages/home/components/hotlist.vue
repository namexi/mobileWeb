<template>
  <div class="hotlist">
    <div class="host-wrapper">
      <div class="host-title">
        <div class="host-title-img">
          <img src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" alt="">
          <span class="host-title-dec">本周热门表单</span>
        </div>
        <a href="#">全部榜单<span class="iconfont">&#xe616;</span></a>
      </div>
      <div class="host-cont">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(el,index) in hostList" :key="index">
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
      },
      hostList: [
        { url: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_150x150_06cb3e52.jpg', des: '故宫', price: 20 },
        { url: 'http://img1.qunarzz.com/sight/p0/1505/f5/f5f45e1a83537bcb.water.jpg_150x150_2a3c9117.jpg', des: '圆明园', price: 25 },
        { url: 'http://img1.qunarzz.com/sight/p0/1501/40/40b2b6c951b28fdd.water.jpg_150x150_8a63d940.jpg', des: '水立方', price: 14 },
        { url: 'http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_150x150_2dec3e78.jpg', des: '长城', price: 40 },
        { url: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_150x150_06cb3e52.jpg', des: '故宫', price: 20 },
        { url: 'http://img1.qunarzz.com/sight/p0/1505/f5/f5f45e1a83537bcb.water.jpg_150x150_2a3c9117.jpg', des: '圆明园', price: 25 },
        { url: 'http://img1.qunarzz.com/sight/p0/1501/40/40b2b6c951b28fdd.water.jpg_150x150_8a63d940.jpg', des: '水立方', price: 14 },
        { url: 'http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_150x150_2dec3e78.jpg', des: '长城', price: 40 }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
  .hotlist
    height:4.02rem
    background:#f5f5f5
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
        margin:0 .12rem
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
        -webkit-padding-start:.12rem
        background:#fff
        .host-cont-img
          img
            height:2rem
        li
          &:nth-child(2n+1)
            margin-right:.1rem
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
