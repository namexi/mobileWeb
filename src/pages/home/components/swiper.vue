<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item,index) in list" :key="index">
        <img class="swiper-img" :src="item.url" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  props: ['list'],
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true,
        autoplay: true
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background:#fff
  .wrapper
    overflow:hidden
    width:100%
    height:0
    padding-bottom:26.7%
    .swiper-img
      width:100%
</style>
