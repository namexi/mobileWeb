<template>
    <ul class="letter-list" ref="star">
      <li v-for="el in list" :key="el" @click="letterListClick" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">{{el}}</li>
    </ul>
</template>
<script>
export default {
  name: 'LetterList',
  props: ['cities'],
  data () {
    return {
      flag: false
    }
  },
  computed: {
    list: function () {
      const letters = []
      for (let key in this.cities) {
        letters.push(key)
      }
      return letters
    }
  },
  methods: {
    letterListClick (e) {
      this.$emit('change', e.target.innerText)
    },
    touchStart () {
      this.flag = true
    },
    touchMove (e) {
      if (this.flag) {
        const startY = this.$refs.star.offsetTop
        const touchY = e.touches[0].clientY
        const idx = parseInt((touchY - startY) / 20)
        if (idx >= 0 && idx < this.list.length) {
          this.$emit('change', this.list[idx])
        }
      }
    },
    touchEnd () {
      this.flag = false
    }
  }
}
</script>
<style lang="stylus" scoped>
  .letter-list
    width:.4rem
    font-size:.28rem
    position:absolute
    top:2.78rem
    right:0
    bottom:2.78rem
    color:#25a4bb
    font-weight:550
    text-align:center
    li
      padding-top:.12rem
</style>
