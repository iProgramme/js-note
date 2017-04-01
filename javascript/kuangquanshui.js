/**
 * Created by yubowen on 2017/4/1.
 */
// 这个文件全是封装的一些特效代码
/**
 * tab通用   点击切换
 * 可直接传入 id ,自动获取
 * @param tab1 需要点击的按钮 - 伪数组
 * @param tab2 需要切换的内容 - 伪数组
 * @param class1 按钮切换的 class
 * @param class2 需要切换的内容的 class
 */
function tab(tab1,tab2,class1,class2) {
    tab1 = document.getElementById(tab1);
    tab2 = document.getElementById(tab2);
    for (var i = 0; i < tab1.length; i++) {
        tab1[i].onclick = function () {
            var index = 0;
            for (var j = 0; j < tab1.length; j++) {
                tab1[j].removeAttribute("class");
                tab2[j].removeAttribute("class");
                tab1[j].setAttribute("index",index);
                index++
            }
            this.setAttribute("class",class1);
            console.log(this.getAttribute("index"))
            tab2[this.getAttribute("index")].setAttribute("class",class2)
        }

    }
}


//------------------------------------------------------------------------------------
/**
 * 选水果
 * 可直接传入 id ,自动获取
 * @param btn1   全移到第二个框
 * @param btn2   把选择的部分移动到第二个框
 * @param btn3   全移到第一个框
 * @param btn4   把选择的部分移动到第二个框
 * @param first  第一个框
 * @param second 第二个框
 */
function sel_fruits(btn1,btn2,btn3,btn4,first,second) {
    btn1 = document.getElementById(btn1);
    btn2 = document.getElementById(btn2);
    btn3 = document.getElementById(btn3);
    btn4 = document.getElementById(btn4);
    first = document.getElementById(first);
    second = document.getElementById(second);
    btn1.onclick = function () {
        second.innerHTML +=first.innerHTML;
        first.innerHTML = ""
    }
    btn2.onclick = function () {
        first.innerHTML += second.innerHTML;
        second.innerHTML = ""
    }
    btn3.onclick = function () {
        for (var i = 0; i < first.children.length; i++) {
            if(first.children[i].selected){
                second.appendChild(first.children[i]);
                i--
            }
        }
    }
    btn4.onclick = function () {
        for (var i = 0; i < second.children.length; i++) {
            if(second.children[i].selected){
                first.appendChild(second.children[i]);
                i--
            }
        }
    }
}


//------------------------------------------------------------------------------------
/**
 * 隔行换色,鼠标滑过换 底色 和 字体色
 * 可直接传入 id ,自动获取
 * @param parent 需要隔行换色的父级div
 * @param bgc1 奇数行颜色
 * @param bgc2 偶数行颜色
 * @param hover_bgc 鼠标滑过时的底色
 * @param hover_c 鼠标滑过时的文字颜色
 */
function gehang_changecolor(parent,bgc1,bgc2,hover_bgc,hover_c) {
    // 当用户没有输入颜色的时候,全尼玛改成白色,让你丫不设置
    parent = document.getElementById(parent);
    bgc1 = bgc1 || "#fff";
    bgc2 = bgc2 || "#fff";
    hover_bgc = hover_bgc || "#fff";
    hover_c = hover_c || "#fff";
//        console.log(parent.children)
    for (var i = 0; i < parent.children.length; i++) { // children只获取子级元素节点,不获取孙子级节点
        if(parent.children[i].nodeType!=1){continue}
        if(i%2==0){
            parent.children[i].style.backgroundColor = bgc1
        }else{
            parent.children[i].style.backgroundColor = bgc2
        }
        //parent.children[i].style.backgroundColor = i%2==0? bgc1:bgc2

        var color,bgcolor;
        parent.children[i].onmouseover = function () {
            bgcolor = this.style.backgroundColor;
            color = this.style.color;
            this.style.backgroundColor = hover_bgc;
            this.style.color = hover_c
        }
        parent.children[i].onmouseout = function () {
            this.style.backgroundColor = bgcolor;
            this.style.color = color
        }
    }
}



//------------------------------------------------------------------------------------
// 考虑以下2种情况
// 1.只要轮播图,不要左右按钮和index  ----- 不要参数 indexParentId indexTagName indexActiveClass
// 2.只要index不要轮播图和左右按钮   ----- 不要参数 ulId
/**
 * 轮播函数封装版,使用滚动轮播
 * 可直接传入 id ,自动获取
 * 自定义轮播间隔
 * 若不要轮播的图和整个div,则 ulId不传
 * @param ulId  -------------- 可选 -- 需要传入的 ul 的 id
 * 若没有这个索引,则以下三个参数都不传
 * @param indexParentId ------ 可选 -- 需要传入的小圆点的 div 的 id
 * @param indexActiveClass --- 可选 -- 需要传入的小圆点被选中时加的class
 * 若不要左右按钮,则以下两个参数都不传
 * @param btn_leftId --------- 可选 -- 需要点击的左按钮的 id
 * @param btn_rightId -------- 可选 -- 需要点击的右按钮的 id
 * 若就要默认时间,则以下参数不传
 * @param speed -------------- 可选 -- 整体滚动时间毫秒,默认2000
 * 例子:
 * ------------定义一个字符串,直接传进去------------
 * var pp = {
        "ulId": "box1",
        "indexParentId": "btn",
        "indexActiveClass": "current",
        "btn_leftId": "btn_left",
        "btn_rightId": "btn_right",
        "speed": 2000
    }
 lunboY(pp);
 */
function lunboY(obj) {
    // 只要index不要轮播图的时候
    var box1 = obj.ulId ? document.getElementById(obj.ulId) : 0;
    // 当只要轮播图,不要index的时候
    var spanParent = obj.indexParentId && obj.indexActiveClass ? document.getElementById(obj.indexParentId) : 0;
    var span = spanParent.children;
    console.log(span)

    // 默认速度2000毫秒滚动一次
    obj.speed = obj.speed || 2000;
    // 若没有左右按钮时,默认值为0
    var btn_left = obj.btn_leftId ? document.getElementById(obj.btn_leftId) : 0;
    var btn_right = obj.btn_rightId ? document.getElementById(obj.btn_rightId) : 0;
    // 获取需要轮播区域的宽度
    if (box1!=0) {
        var width_c = box1.children[0].offsetWidth;
        var width_p = box1.offsetWidth - width_c;
    }


    // 定义两个定时器
    var timeID1 = null;
    var timeID2 = null;
    // 定义用来判断是否滚动到最后一个
    var spanllength;
    // 如果没有每个图片对应的按钮,则不执行该 if,即不给每个按钮加样式和鼠标滑过事件
    if (span != 0) {
        var active = obj.indexActiveClass;
        spanllength = span.length;
        // 鼠标滑过单个按钮调到对应页面
        for (var j = 0; j < span.length; j++) {
            span[j].setAttribute("index", "" + j);
//                span[j].onmouseover = function () {
//                    var p = this.getAttribute("index");
//                    // 把index传递出去
//                    index1 = index2 = p;
//                    if (box1!=0) {
//                        time(box1, -p * width_c);
//                    }
//                    removeSpanClass()
//                    this.setAttribute("class", active)
//                }
            spanParent.onmouseover = function (e) {

                e = e || window.event;
                var p = e.target.getAttribute("index");
                // 把index传递出去
                index1 = index2 = p;
                if (box1!=0) {
                    time(box1, -p * width_c);
                }
                removeSpanClass()
                e.target.className = active;
            }

        }
    } else {  // 加 else 的原因:如果没有index,那么必须有 box1
        spanllength = box1.children.length - 1;
    }


    var index1 = 0, index2 = 0;
    // 点击左右滚动 加载的时候,这个判断会执行一次,以后再点击按钮不会再执行此判断
    if (btn_left != 0 && btn_right != 0) {
        btn_right.onclick = function () {
            play()
        }
        btn_left.onclick = function () {
            index1--;
            index2--;
            if (index1 < 0 && box1!=0) {
                index1 = spanllength - 1;
                box1.style.left = -width_p + "px"
            }
            if (index2 < 0) {
                index2 = spanllength - 1;
            }
            if (span != 0) {
                removeSpanClass();
                span[index2].setAttribute("class", active)
            }
            if (box1!=0) {
                time(box1, -index1 * width_c);
            }
        }
    }



    // 设置自动滚动
    timeID2 = setInterval(play, obj.speed);
    // 声明函数:滚动时给对应的小圆点加上对应class
    function play() {
        // 给图片设置滚动
        index1++;
        if (index1 > spanllength &&box1!=0) {
            index1 = 1;
            box1.style.left = "0px"
        }
        if (span != 0) {
            index2++;
            if (index2 >= spanllength) {
                index2 = 0;
            }
            removeSpanClass();
            span[index2].setAttribute("class", active)
        }
        if (box1!=0) {
            time(box1, -index1 * width_c);
        }
    }

    //    鼠标滑过清除定时器
    if (box1 !=0) {
        box1.onmouseover = function () {
            clearInterval(timeID2)
        }
        box1.onmouseout = function () {
            timeID2 = setInterval(play, obj.speed);
        }
    }
    /**
     * 给对应的小圆点设置对应的class
     */
    function removeSpanClass() {
        for (var i = 0; i < span.length; i++) {
            span[i].removeAttribute("class");
        }
    }
    /**
     *定义单张图片的滑动速度
     * @param ele         传入需要滚动的 ul
     * @param position    移动到指定的位置
     */
    function time(ele, position) {
        clearInterval(timeID1);
        timeID1 = setInterval(function () {
            var of = ele.offsetLeft;
            var step = 5;
            // 如果给定的位置小于现在的位置,则步长为 -5
            step = of > position ? -step : step
            ele.style.left = (of + step) + "px";
            if (Math.abs(of - position) < step) {
                clearInterval(timeID1);
                ele.style.left = position + "px"
            }
        }, 1)
    }
}


//------------------------------------------------------------------------------------
/**
 * 减速移动
 * 可直接传入 id ,自动获取
 * @param ele 传入元素
 * @param json 所需要改变的参数
 * @param fn 回调函数
 */
function time(ele, json, fn) {
    ele = document.getElementById(ele);
    clearInterval(ele.timeID1);
    var of, step = 0;
    ele.timeID1 = setInterval(function () {
        var flag = true
        for (var key in json) {
            if (key == "opacity") {
                // 改变透明度,注意 step 要很大,然后再除回去,注意没有单位,要把 * 100放在里面
                of = parseInt(getStyle(ele, key) * 100) || 0;
                step = (json[key]*100 - of)/10;
                step = Math.abs(step) < 1 ? step >= 0 ? step == 0 ? 0 : 1 : -1 : step;
                //step = step>0?Math.ceil(step):Math.floor(step);
                ele.style[key] = (of + step) / 100;
                of = of/100
            }else if(key == "zIndex"){
                // 层级关系,直接到达指定层级即可
                of = parseInt(getStyle(ele, key)) || 0;
                ele.style[key] = json[key];
            }else{
                of = parseInt(getStyle(ele, key)) || 0;
                step = (json[key] - of) / 10;
                step = Math.abs(step) < 1 ? step >= 0 ? step == 0 ? 0 : 1 : -1 : step;
                //step = step>0?Math.ceil(step):Math.floor(step);
                ele.style[key] = (of + step) + "px";
            }
            if (of - json[key] != 0) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(ele.timeID1);
            if(fn){
                fn()
            }
        }
    }, 100)
    function getStyle(obj, attr) {
        if (obj.currentStyle) {
            return obj.currentStyle[attr]
        }
        return getComputedStyle(obj, null)[attr]
    }
}



//------------------------------------------------------------------------------------
/**
 * 点击拖动
 * 若有多个需要点击拖动,则需在函数外面加上   var zIndex = 0;
 * @param obj
 * @param parent
 */
function mouseMove(obj, parent) {
    obj = document.getElementById(obj);
    parent = document.getElementById(parent);
    parent = parent || obj;

    obj.onmousedown = function (e) {
        var x = page(e).x;
        var y = page(e).y;
        x = x - parent.offsetLeft;  // 这个获取的是鼠标相对于所在的 div 的距离
        y = y - parent.offsetTop;  // 这个获取的是鼠标相对于所在的 div 的距离
        document.onmousemove = function (f) {  // 这里用 document 比 window 要好因为执行效率更高,不需要从 window 往下找到 document 再找到鼠标,而是直接从 document 文档找到鼠标
            parent.style.left = (page(f).x - x) + "px";
            parent.style.top = (page(f).y - y) + "px";
        };
        //zIndex++;
        //parent.style.zIndex = zIndex
    };
    // 或者把下面的 window.onmousemove 换成 null ,但是没法把后来的位置传到全局变量 arr 里面
    obj.onmouseup = function () {
        // // 得到每个的位置,并将其传到 全局 变量里面
        // if (!obj.getAttribute("index")) {
        //     console.log(obj.getAttribute("index"))
        //     return
        // }
        //var index = obj.getAttribute("index");
        // //将值传到外面对应的数组里面,改变数组里面的对应内容
        //arr[index].left = parent.offsetLeft;
        //arr[index].top = parent.offsetTop;
        // document.onmousemove = null;
        document.onmousemove = null;
    }
}






