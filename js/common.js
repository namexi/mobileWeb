/**
 * Created by xi on 2018/7/31.
 */

function My$(){}

My$.prototype = {
    //获取元素
    select : function (Selector) {
        return document.querySelector(Selector);
    },
    selects : function(Selector){
        return document.querySelector(Selector);
    },
    $id : function (id) {
        return document.getElementById(id);
    },
    tag : function (tagname){
        return document.getElementsByTagName(tagname);
    },
    //处理兼容性
    getHeight : function(ele){
        return ele.offsetHeight? ele.offsetHeight:parseInt(window.getComputedStyle(ele,null).height);
    }
};

var my$ = new My$();