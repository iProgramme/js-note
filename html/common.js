/**
 * Created by Administrator on 2017/2/26.
 */

/**
 * 封装了一个获取标签间文本的函数
 * @param ele
 * @returns {*}
 */
function getText(ele) {
    // 能力检测   就是要看当前浏览器是否支持此对象的属性或是方法
    if (typeof ele.innerText == "string") { // 一般是放boolean类型或是关系表达式或是逻辑表达式 ，如果是其它类型则会默认的调用Boolean()函数将其转为对应的Boolean类型，再进行判断
        return ele.innerText;
    } else {
        return ele.textContent;
    }
}

/**
 * 封装了一个兼容版本的设置标签间文本的函数
 * @param ele
 * @param value
 */
function setText(ele, value) {
    // 能力检测  所谓的能力检测 就是要看当前的浏览器是否支持此对象的属性或是方法
    if (typeof ele.innerText == "string") {
        ele.innerText = value;
    } else {
        ele.textContent = value;
    }
}


var txt = {
    getText: function (ele) {
        // 能力检测   就是要看当前浏览器是否支持此对象的属性或是方法
        if (typeof ele.innerText == "string") { // 一般是放boolean类型或是关系表达式或是逻辑表达式 ，如果是其它类型则会默认的调用Boolean()函数将其转为对应的Boolean类型，再进行判断
            return ele.innerText;
        } else {
            return ele.textContent;
        }
    },
    setText: function (ele, value) {
        // 能力检测  所谓的能力检测 就是要看当前的浏览器是否支持此对象的属性或是方法
        if (typeof ele.innerText == "string") {
            ele.innerText = value;
        } else {
            ele.textContent = value;
        }
    }
}


/**
 * 根据传入的id名获得标签对象
 * @param id
 * @returns {Element}
 */
function $$(id) {
    return document.getElementById(id);  // 将获取到的标签对象返回
}

/**
 * 封装了一个兼容性的获取上一个标签节点的函数
 * @param ele
 * @returns {*}
 */
function getPreviousElement(ele) {
    if (ele && ele.previousElementSibling) {
        return ele.previousElementSibling;
    } else {
        if (ele) {
            ele = ele.previousSibling;//获得上一个节点
            while (ele && ele.nodeType != 1) {
                ele = ele.previousSibling;
            }
            return ele;
        }
    }
}

/**
 * 封装了一个兼容版本的获取下一个标签对象的函数
 * @param ele
 * @returns {*}
 */
function getNextElement(ele) {
    if (ele && ele.nextElementSibling) { //有对象，而且支持nextElementSibling的方式获取下一个标签对象
        return ele.nextElementSibling;
    } else {
        ele = ele.nextSibling;
        while (ele && ele.nodeType != 1) {
            ele = ele.nextSibling;
        }
        return ele;  //返回获取到的下一个标签对象
    }
}
/**
 * 封装了一个兼容版本的获得父元素的第一个子标签节点的函数
 * @param ele
 * @returns {*}
 */
function getFirstChild(ele) {
    if (ele && ele.firstElementChild) {
        return ele.firstElementChild;
    } else {
        if (ele) {
            ele = ele.firstChild; //在当前节点的基础上，获取第一个子节点(标签，文本，注释)
            while (ele && ele.nodeType != 1) {
                ele = ele.nextSibling;// 在当前节点的基础上，继续往下找
            }
            return ele;
        }
    }
}
function getLastChild(ele){
    if(ele&&ele.lastElementChild){ //高级浏览器支持的方式
        return ele.lastElementChild;
    }else { //IE8及之前的浏览器支持的方式
        ele = ele.lastChild;
        while(ele&&ele.nodeType!=1){
            ele = ele.previousSibling;//在当前标签基础上，往前找兄弟姊妹级节点
        }
        return ele;
    }
}

var tag = {
    getNextElement: function (ele) {
        if (ele && ele.nextElementSibling) { //有对象，而且支持nextElementSibling的方式获取下一个标签对象
            return ele.nextElementSibling;
        } else {
            ele = ele.nextSibling;
            while (ele && ele.nodeType != 1) {
                ele = ele.nextSibling;
            }
            return ele;  //返回获取到的下一个标签对象
        }
    },
    getPreviousElement: function (ele){
        if (ele && ele.previousElementSibling) {
            return ele.previousElementSibling;
        } else {
            if (ele) {
                ele = ele.previousSibling;//获得上一个节点
                while (ele && ele.nodeType != 1) {
                    ele = ele.previousSibling;
                }
                return ele;
            }
        }
    },
    //name:"张三",
    //age:20,
    //sayHi:function(){
    //
    //},
    getFirstChild:function (ele){
        if (ele && ele.firstElementChild) {
            return ele.firstElementChild;
        } else {
            if (ele) {
                ele = ele.firstChild; //在当前节点的基础上，获取第一个子节点(标签，文本，注释)
                while (ele && ele.nodeType != 1) {
                    ele = ele.nextSibling;// 在当前节点的基础上，继续往下找
                }
                return ele;
            }
        }
    },
    getLastChild:function (ele){
        if(ele&&ele.lastElementChild){ //高级浏览器支持的方式
            return ele.lastElementChild;
        }else { //IE8及之前的浏览器支持的方式
            ele = ele.lastChild;
            while(ele&&ele.nodeType!=1){
                ele = ele.previousSibling;//在当前标签基础上，往前找兄弟姊妹级节点
            }
            return ele;
        }
    }
}


// 对象   对象是无序属性的集合或是键值对象的集合   属性和方法    包

