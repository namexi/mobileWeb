<template lang="html">
  <div class="alphabet">
    <div class="alphabet-wrapper" v-for="(el, key) in list" :key="key">
      <div class="main-header">{{key}}</div>
      <div class="wrapper-city list">
        <div class="wrapper letter-list" v-for="(el, index) in list[key]" :key="index"> {{el.name}} </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AlphabetList',
  props: {
    list: Object
  }
}
</script>

<style lang="stylus" scoped>
  .list
    &:before
      content:' '
      position:absolute
      width:25%
      left:25%
      height:100%
      border-left:1px solid #ddd
      border-right:1px solid #ddd
    &:after
      content: ' ';
      position: absolute;
      width: 25%;
      left: 75%;
      height: 100%;
      border-left:1px solid #ddd
  .main-header
    font-size:.24rem
    padding:.24rem .3rem
    background:#f5f5f5
  .wrapper-city
    width:100%
    height:100%
    position:relative
    overflow:hidden
    .wrapper
      width:25%
      line-height:.9rem
      text-align:center
      float:left
      overflow:hidden
      white-space:nowrap
      text-overflow:ellipsis
      border-bottom:1px solid #ddd
      margin-bottom:-1px
      a
        color:#212121
</style>
