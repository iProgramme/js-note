/**
 * Created by yubowen on 2017/3/19.
 */
// 此文件不依赖 jQuery_for_me
/**
 * 封装 innerText 和 textContent。获取纯文本内容 2017-03-18
 * @param ele 获取到的需要输入字符的标签
 * @param string 将要输入的值
 * @returns {*}
 */
var Txt = {
    setText:function (ele,string) {
        if (typeof ele.innerText == 'string'){
            return ele.innerText = string
        }else{
            return ele.textContent = string
        }
    },
    getText:function (ele) {
        if (typeof ele.innerText == 'string'){
            return ele.innerText
        }else{
            return ele.textContent
        }
    }
}

//  获取节点。下一个节点,上一个节点,第一个节点,最后一个节点 2017-03-19
// 传入当前节点,获取所需节点,节点相关操作
var Tag = {
    nextElement:function (ele) {
        if (ele && ele.nextElementSibling){
            return ele.nextElementSibling
        }
        ele = ele.nextSibling;
        while (ele && ele.nodeType != 1){
            ele = ele.nextSibling;
        }return ele
    },
    preElement:function (ele) {
        if (ele && ele.previousElementSibling){
            return ele.previousElementSibling
        }
        ele = ele.previousSibling;
        while (ele && ele.nodeType != 1){
            ele = ele.previousSibling;
        }return ele
    },
    first_child:function (ele) {
        if (ele && ele.firstElementChild){
            return ele.firstElementChild
        }
        ele = ele.firstChild;
        while (ele && ele.nodeType != 1){
            ele = ele.nextSibling;
        }return ele
    },
    last_child:function (ele) {
        if (ele && ele.lastElementChild){
            return ele.lastElementChild
        }
        ele = ele.lastChild;
        while (ele && ele.nodeType != 1){
            ele = ele.previousSibling;
        }return ele
    }
}


/**
 * 封装,获取宽高等的原值 没有设置left的时候,是 auto
 * @param obj
 * @param attr
 * @returns {*}
 */
function getStyle(obj,attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr]
    }
    return getComputedStyle(obj,null)[attr]
}

/**
 * 滚动页面时,搜索框在上面
 * 该元素滚动的距离
 * @returns {number}
 */
// function scroll1() {
//     var scrollTop = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop || 0;
//     var scrollLeft = window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft || 0;
//     var o = {
//         scrollTop:scrollTop,
//         scrollLeft:scrollLeft
//     }
//     return o
// }
function scroll() {
    var scrollTop = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop || 0 ;
    var scrollLeft = window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft || 0 ;
    return {
        scrollTop:scrollTop,
        scrollLeft:scrollLeft
    }
}
/**
 * 元素到整个 html 顶部的距离
 * @param e  是 event 或者 window.event
 * @returns {{pagex: (Number|*), pagey: (Number|*)}}
 */
function page(e) {
    var x = e.pageX || e.clientX + scroll().scrollLeft;
    var y = e.pageY || e.clientY + scroll().scrollTop;

    return {
        x:x,
        y:y
    }
}
/**
 * 获取浏览器可视区的宽度和高度
 * @returns {{clientWidth: (Number|number), clientHeight: (Number|number)}}
 */
function client() {
    var clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth ||0;
    var clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight ||0;
    var o = {
        clientWidth:clientWidth,
        clientHeight:clientHeight
    }
    return o
}


/**
 * 给同一事件源添加,删除事件
 * @param obj   事件源
 * @param type   事件类型
 * @param listener  事件处理程序
 */
function addEventListener(obj, type, listener) {
    if (obj && obj.addEventListener) {
        obj.addEventListener(type, listener, false)
    } else if (obj && obj.attachEvent) {
        obj.attachEvent("on" + type, listener)
    } else {
        obj["on" + type] = listener
    }
}
function removeEventListener(obj, type, listener) {
    if (obj && obj.removeEventListener) {
        obj.removeEventListener(type, listener, false)
    } else if (obj && obj.detachEvent) {
        obj.detachEvent("on" + type, listener)
    } else {
        obj["on" + type] = null
    }
}
/**
 * 阻止事件冒泡
 * @param e
 */
function stopPropation(e) {
    if (e || e.stopPropagation) {
        return e.stopPropagation()
    } else {
        e.cancelBubble
    }
}
// 以上三个封装成下面的对象了
// 封装事件对象
var eventTools = {
    addEventListener:function (obj, type, listener) {
        if (obj && obj.addEventListener) {
            obj.addEventListener(type, listener, false)
        } else if (obj && obj.attachEvent) {
            obj.attachEvent("on" + type, listener)
        } else {
            obj["on" + type] = listener
        }
    },
    removeEventListener:function (obj, type, listener) {
        if (obj && obj.removeEventListener) {
            obj.removeEventListener(type, listener, false)
        } else if (obj && obj.detachEvent) {
            obj.detachEvent("on" + type, listener)
        } else {
            obj["on" + type] = null
        }
    },
    getEvent:function (e) {
        e = e || window.event;
        return e
    }
}
















/**
 * 点击鼠标拖动div 有 margin 的时候会影响拖拽效果,需要把 margin 给减去或者加上
 * @param obj 第一个参数
 * @param parent 有值时,则拖动 obj 让 parent
 */
function mouseMove(obj,parent) {
    parent = parent || obj;
    obj.onmousedown = function (e) {
        //这里的 page(e).x 和 page(e).y 最好不要换成 client
        var x = page(e).x;
        var y = page(e).y;
        // 下面用 client 比较好
        x = x - parent.offsetLeft;  // 这个获取的是鼠标相对于所在的 div 的距离
        y = y - parent.offsetTop;  // 这个获取的是鼠标相对于所在的 div 的距离
        window.onmousemove = function (f) {
            parent.style.left = (page(f).x - x) + "px";
            parent.style.top = (page(f).y - y) + "px"
        }
    };
    obj.onmouseup = function () {
        window.onmousemove = function () {
            parent.style.left = parent.offsetLeft + "px";
            console.log(parent.offsetLeft)
            console.log(parent.style.left)
            parent.style.top = parent.offsetTop + "px"
        }
    }
}



