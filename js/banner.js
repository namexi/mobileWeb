/**
 * Created by 40663 on 2018/8/4.
 */

//轮播图对象

function Banner(){}

Banner.prototype = {
    //自动轮播
    Carrousel:function(nav,image,tab){
        var width = image.offsetWidth
        var idx = 1;//默认显示的张数
    //自动播放效果 
        var timeId = setInterval(function () {
            idx++;
            //清楚前一个样式
            tab[idx-2].removeAttribute('class')
            nav.style.transition = 'all 0.5s'
            nav.style.webkitTransition = 'all 0.5s'
            nav.style.transform = 'translateX(' + -idx * width + 'px)'
            nav.style.webkitTransform = 'translateX(' + -idx * width + 'px)'

        //轮播切换
            if(idx<9){
                tab[idx-1].className = 'now'

            }else {
                tab[0].className = 'now'
            }

        }, 1500 )

    //绑定过度完毕事件transitionend
        nav.addEventListener('transitionend', function () {
            /*自动滚动的无缝*/
            if (idx >= 9) {
                idx = 1
                /*瞬间定位*/
                /*清过渡*/
                nav.style.transition = 'none'
                nav.style.webkitTransition = 'none'
                /*做位移*/
                nav.style.transform = 'translateX(' + -idx * width + 'px)'
                nav.style.webkitTransform = 'translateX(' + -idx * width + 'px)'

            }

        })

    },
    init:function(nav,image,tab){
        this.Carrousel(nav,image,tab)
    }

};


