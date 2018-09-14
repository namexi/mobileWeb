<template>
    <div>
        <home-header></home-header>
        <home-swiper :list="swiperList"></home-swiper>
        text2
    </div>
</template>
<script>
import HomeHeader from './components/header.vue'
import HomeSwiper from './components/swiper.vue'
export default {
  name: 'Home',
  data () {
    return {
      swiperList: [
        {
          url: 'http://img1.qunarzz.com/piao/fusion/1809/6a/847ac7b98f10e202.jpg_750x200_f0593cb5.jpg',
          title: '门票'
        },
        {
          url: 'http://img1.qunarzz.com/piao/fusion/1801/bd/04554e7c67650302.jpg_750x200_4293d60a.jpg',
          title: '门票'
        },
        {
          url: 'http://img1.qunarzz.com/piao/fusion/1806/1c/4847ea66072c7b02.jpg_750x200_c32457fb.jpg',
          title: '门票'
        },
        {
          url: 'http://img1.qunarzz.com/piao/fusion/1807/78/0a6355bcbbf89502.jpg_750x200_fc738633.jpg',
          title: '门票'
        }
      ]
    }
  },
  components: {
    HomeHeader: HomeHeader,
    HomeSwiper: HomeSwiper
  }
}
</script>
<style></style>
