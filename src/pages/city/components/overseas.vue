<template lang="html">
  <div>
    <div>
      <div class="main-header">热门城市</div>
      <div class="wrapper-city city-name">
        <div class="wrapper">香港</div>
        <div class="wrapper">香港 </div>
        <div class="wrapper">香港</div>
        <div class="wrapper">香港</div>
        <div class="wrapper">香港</div>
      </div>
    </div>
    <div class="">
      <div class="main-header">字母排序</div>
      <div class="wrapper-city letter">
        <div class="wrapper wrapper-letter"> <a href="#overseas-A">A</a></div>
        <div class="wrapper wrapper-letter"> <a href="#">B</a></div>
        <div class="wrapper wrapper-letter"> <a href="#">C</a> </div>
        <div class="wrapper wrapper-letter"> <a href="#">D</a> </div>
        <div class="wrapper wrapper-letter"> <a href="#">E</a> </div>
        <div class="wrapper wrapper-letter"> <a href="#">F</a> </div>
        <div class="wrapper wrapper-letter"> <a href="#">G</a> </div>
      </div>
    </div>
    <div class="">
      <a id="overseas-A"></a>
      <div class="main-header">A</div>
      <div class="wrapper-city list">
        <div class="wrapper letter-list"> 阿富汗 </div>
        <div class="wrapper letter-list">阿尔巴亚</div>
        <div class="wrapper letter-list">阿尔及利亚</div>
        <div class="wrapper letter-list"> 阿富汗 </div>
        <div class="wrapper letter-list">阿尔巴亚</div>
        <div class="wrapper letter-list">阿尔及利亚</div>
      </div>
    </div>
    <div class="">
      <a id="overseas-B"></a>
      <div class="main-header">B</div>
      <div class="wrapper-city list">
        <div class="wrapper letter-list"> 阿富汗 </div>
        <div class="wrapper letter-list">阿尔巴亚</div>
        <div class="wrapper letter-list">阿尔及利亚</div>
        <div class="wrapper letter-list"> 阿富汗 </div>
        <div class="wrapper letter-list">阿尔巴亚</div>
        <div class="wrapper letter-list">阿尔及利亚</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Overseas'
}
</script>

<style lang="stylus" scoped>
.city-name
  &:before
    content:' '
    position:absolute
    width:33.33%
    left:33.33%
    height:100%
    border-left:1px solid #ddd
    border-right:1px solid #ddd
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
    width:33.33%
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
.letter
  padding:.3rem 0
  .wrapper-letter
    width:16.66%
    border:0
.list
  .letter-list
    width:25%
</style>
