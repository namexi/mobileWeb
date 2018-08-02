/**
 * Created by 40663 on 2018/8/2.
 */


/*搜索对对象*/
function Search(boxSelector,bannerSelector){
    //配置元素信息
    this.config={
            search : document.querySelector(boxSelector),
            banner : document.querySelector(bannerSelector),
    };

}

Search.prototype={
    //绑定scroll事件
    scroll : function(obj){
        var that = this;
        obj.onscroll=function(){
            //获取盒子高度
            var height = that.config.banner.offsetHeight;
            //获取页面滚动
            var scrollTOP = document.documentElement.scrollTop;
            var opcation = 0;
            if(scrollTOP < height){
                //页面滚动时，随着页面卷曲高度变大 透明度变大
                opcation = scrollTOP / height *1;
            }else{
                //    页面滚动时 超过某一高度 透明度保持固定值不变
                opcation = 0.85;
            }
            that.config.search.style.background = 'rgba(201,21,35,'+opcation+')';
        }

    }
};

