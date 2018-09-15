<template>
  <div class="icons">
    <swiper :options="i">
      <swiper-slide v-for=" (page,index) in pagesList " :key="index">
        <div class="icon" v-for="(item,index) in page" :key="index" >
          <div class="icon-content">
            <img :src="item.url" alt="" class="icon-content-img">
          </div>
          <p class="icon-text">{{item.text}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      },
      iconList: [{
        url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        text: '景点门票'
      },
      {
        url: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        text: '必游景点'
      },
      {
        url: 'http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png',
        text: '夏日玩水'
      },
      {
        url: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
        text: '文化古迹'
      },
      {
        url: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
        text: '动植物园'
      },
      {
        url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        text: '景点门票'
      },
      {
        url: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
        text: '一日游'
      },
      {
        url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        text: '景点门票'
      },
      {
        url: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
        text: '历史文化'
      }]
    }
  },
  computed: {
    pagesList: function () {
      const array = []
      this.iconList.forEach((el, index) => {
        const page = Math.floor(index / 8)
        if (!array[page]) array[page] = []
        array[page].push(el)
      })
      return array
    },
    i: function () {
      return this.pagesList.length === 1 ? '' : this.swiperOption
    }
  }
}
</script>
<style lang="stylus" scoped>
  .icons >>> .swiper-container
    height:3.8rem
    border-sizing:content-box
  .icons >>> .swiper-pagination-bullet-active
    background:rgba(0,175,190,.8)
  .icons
    margin-top:.1rem
    .icon
      overflow:hidden
      width:25%
      height:1.6rem
      float:left
      position:relative
      .icon-content
        height:100%
        width:100%
        margin-top:.1rem
        position:absolute
        top:0
        left:0
        border-sizing:border-box
        img
          display:block
          height:1.1rem
          margin:0 auto
          line-height:1
      .icon-text
        width:100%
        position:absolute
        left:0
        bottom:0
        text-align: center
        padding-bottom:.1rem
</style>
