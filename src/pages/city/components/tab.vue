<template>
  <div class="tab">
    <div class="header">
      <ul class="header-tab">
        <router-link :to="{ name: 'Domestic'}">
          <li class="active" @click="tabDomestic" ref="tab1">境内</li>
        </router-link>
        <router-link :to="{ name: 'Overseas'}">
        <li @click="tabOverseas" ref="tab2">境外·港澳台</li>
        </router-link>
      </ul>
    </div>
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<script>
import router from '@/router/city.js'
export default {
  name: 'CityTab',
  router,
  data () {
    return {
      tab1: '',
      tab2: ''
    }
  },
  created () {
    this.$router.push('/domestic') // 页面加载时跳转
  },
  mounted: function () {
    this.tab1 = this.$refs.tab1
    this.tab2 = this.$refs.tab2
  },
  methods: {
    tab (add, del, className) {
      if (add.classList.contains(className)) return
      add.classList.add(className)
      del.classList.remove(className)
    },
    tabDomestic () {
      this.tab(this.tab1, this.tab2, 'active')
    },
    tabOverseas () {
      this.tab(this.tab2, this.tab1, 'active')
    }
  }

}
</script>

<style lang="stylus" scoped>
  .tab
    .header
      background:#00bcd4
      padding:.18rem 1rem
      .header-tab
        height:.4rem
        line-height:.4rem
        border:1px solid #fff
        border-radius:.03rem
        color:#fff
        font-size:.28rem
        li
          width:50%
          float:left
          text-align:center
          background:#00bcd4
          color:#fff
        .active
          background:#fff
          color:#00bcd4

</style>
