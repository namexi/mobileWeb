/**
 * Created by 40663 on 2018/8/2.
 */


/*搜索对对象*/
function Search(src,login){
    //基本信息
    this.icon = src;
    this.login = login;
}

Search.prototype={
    //绑定scroll事件
    scroll : function(obj){
        var opcation = 0;
        obj.onscroll=function(){
            //获取盒子高度
            var height = my$.select('.jd_banner').offsetHeight;
            //获取页面滚动
            var scrollTOP = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;

            if(scrollTOP < height){
                //页面滚动时，随着页面卷曲高度变大 透明度变大
                opcation = scrollTOP / height *1;
            }else{
                //    页面滚动时 超过某一高度 透明度保持固定值不变
                opcation = 0.85;
            }
            my$.select('.jd_search').style.background = 'rgba(201,21,35,'+opcation+')';
        };

    }
};

