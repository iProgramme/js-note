/**
 * Created by yubowen on 2017/3/19.
 */
/**
 * 封装 innerText 和 textContent。获取纯文本内容 2017-03-18
 * @param ele 获取到的需要输入字符的标签
 * @param string 将要输入的值
 * @returns {*}
 */
var txt = {
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
var tag = {
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



