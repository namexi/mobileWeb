<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="swiperShow">
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
        autoplay: true,
        loop: true
      }
    }
  },
  computed: {
    swiperShow () {
      return this.list.length
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
    padding-bottom:31.25%
    .swiper-img
      width:100%
      height:100%
</style>
