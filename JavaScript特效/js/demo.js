/**
 * Created by Administrator on 2017/1/14.
 */
window.onload = function () {
    var config = [
        {
            "width": 400,
            "top": 20,
            "left": 50,
            "opacity": 0.2,
            "zIndex": 2
        },//0
        {
            "width": 600,
            "top": 70,
            "left": 0,
            "opacity": 0.8,
            "zIndex": 3
        },//1
        {
            "width": 800,
            "top": 120,
            "left": 200,
            "opacity": 1,
            "zIndex": 4
        },//2
        {
            "width": 600,
            "top": 70,
            "left": 600,
            "opacity": 0.8,
            "zIndex": 3
        },//3
        {
            "width": 400,
            "top": 20,
            "left": 750,
            "opacity": 0.2,
            "zIndex": 2
        }//4
    ];//

    var wrap = document.getElementById("wrap");
    var slide = document.getElementById("slide");
    var lis = slide.getElementsByTagName("li");
    var arr = document.getElementById("arrow");
    var arrLeft = document.getElementById("arrLeft");
    var arrRight = document.getElementById("arrRight");
    var timeID1 = null;
    var flag = true;
    //2.
    console.log(config)
    forjiazai()
    slide.onmouseover = function () {
        time(arr, {"opacity": 1})
    }
    slide.onmouseout = function () {
        time(arr, {"opacity": 0})
    }
    //左右按钮点击
    arrLeft.onclick = function () {
        if (flag) {
            flag = false;
            config.push(config.shift());
            forjiazai();
        }
    }
    arrRight.onclick = function () {
        if (flag) {
            flag = false;
            config.unshift(config.pop());
            forjiazai();
        }

    }
    function forjiazai() {
        for (var i = 0; i < config.length; i++) {
            time(lis[i], config[i],function () {
                flag = true  // 这个flag 不能放在for循环的下面,因为循环完成了,不代表动画也完成了。循环的时间很快,但是动画的效果很慢
            })
        }
    }

    //动画函数
    function time(ele, json, fn) {
        clearInterval(ele.timeID1);
        var of, step = 0;
        ele.timeID1 = setInterval(function () {
            var flag = true
            for (var key in json) {
                if (key == "opacity") {
                    // 改变透明度,注意 step 要很大,然后再除回去,注意没有单位,要把 * 100放在里面
                    of = parseInt(getStyle(ele, key) * 100) || 0;
                    step = (json[key] * 100 - of) / 10;
                    step = Math.abs(step) < 1 ? step >= 0 ? step == 0 ? 0 : 1 : -1 : step;
                    //step = step>0?Math.ceil(step):Math.floor(step);
                    ele.style[key] = (of + step) / 100;
                    of = of / 100
                } else if (key == "zIndex") {
                    // 层级关系,直接到达指定层级即可
                    of = parseInt(getStyle(ele, key)) || 0;
                    ele.style[key] = json[key];
                } else {
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
                clearInterval(timeID1);
                if (fn) {
                    fn()
                }
            }
        }, 10)
    }


    function getStyle(obj, attr) {
        if (obj.currentStyle) {
            return obj.currentStyle[attr]
        }
        return getComputedStyle(obj, null)[attr]
    }

}

