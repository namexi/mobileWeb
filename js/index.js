/**
 * Created by xi on 2018/7/31.
 */

window.onload=function() {

    /*实例搜索对象*/
    var search = new Search()
    search.scroll(window);


    /*轮播图对象*/
    var banner = new Banner()

    //获取轮播图
    var nav = my$.select('.jd_banner ul:first-child')
    var image = nav.querySelector('li:nth-child(2)')
    var tab = my$.selects('.jd_banner ul:last-child li')
    banner.init(nav,image,tab)















    /*计时器*/


};


