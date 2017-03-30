/**
 * Created by yubowen on 2017/3/24.
 */
// 制作一个通用的返回首页和各个页面之间跳转的模板
var div = document.createElement("div");

var body = document.getElementsByTagName("body")[0];
body.setAttribute("style","margin-left:420px;position:relative")
// 再给每个页面加上一个common.css,先加在最后不要紧,以后的css继续添加到最后就好
var linkcss = document.createElement("link");
var head = document.getElementsByTagName("head")[0];
linkcss.setAttribute("href", "../css/common.css");
linkcss.rel = "stylesheet";
linkcss.style.display = "block";
head.appendChild(linkcss);
//div.style = "padding:5px 0px;height:300px;overflow:auto;width:400px;position:fixed;right:10px;top:calc(50% - 150px);background-color:#fff;text-align:left;border:1px solid #00f;box-shadow:5px 5px 5px #bbb;border-radius:10px";
// 下面的方式,兼容性更好。上面的方式,Safari不兼容
div.setAttribute("style", "padding:5px 0px;height:100%;overflow:auto;width:400px;position:fixed;left:0px;background-color:#fff;text-align:left;border-right:1px solid #00f;box-shadow:10px 10px 10px #888;z-index:9999");
function template_y(arr) {
    var ul = document.createElement("ul");
    ul.style = "list-style:none;padding:0;border-bottom:10px solid blue"
    div.appendChild(ul);

    // console.log(arr);
    // 遍历传入的数据,开始动态创建元素
    arr.filter(function (m, n) {
        // 创建li和a标签
        var li = document.createElement('li');
        var a = document.createElement('a');
        li.style = "padding:5px;"
        // 给li部分样式,并把a标签放到li里面
        li.appendChild(a);
        // 给 a 标签链接
        a.innerHTML = arr[n].name;
        a.setAttribute("href", arr[n].href);
        a.style = "display:block;width:calc(100% - 10px);padding:5px;color:red"
        ul.appendChild(li)
    })
    // 如果页面有元素,就把这个加到最前面
    if (body.children) {
        //console.log(body.children[0])
        body.insertBefore(div, body.children[0])
    }
    //console.log(body.children[0]);
}
// onload之后执行该函数


//  传入数据
// function 文件夹
var functions = [
    {
        "name": "0318--封装-- $y获取元素",
        "href": "../function/0318--封装-- $y获取元素.html"
    }, {
        "name": "0318--封装--innerText",
        "href": "../function/0318--封装--innerText.html"
    }, {
        "name": "0320--封装--tab切换",
        "href": "../function/0320--封装--tab切换.html"
    }, {
        "name": "0320--封装函数--隔行换色",
        "href": "../function/0320--封装函数--隔行换色.html"
    }, {
        "name": "0320--封装函数--选水果2",
        "href": "../function/0320--封装函数--选水果2.html"
    }, {
        "name": "0326--封装函数--轮播图完整版",
        "href": "../function/0326--封装函数--轮播图完整版.html"
    }, {
        "name": "0327--封装函数--轮播图减速移动-传入多个参数-回调函数-做特效",
        "href": "../function/0327--封装函数--轮播图减速移动-传入多个参数-回调函数-做特效.html"
    }, {
        "name": "0327--封装函数--轮播图减速移动",
        "href": "../function/0327--封装函数--轮播图减速移动.html"
    }, {
        "name": "0327--封装函数--scroll兼容封装",
        "href": "../function/0327--封装函数--scroll兼容封装.html"
    }, {
        "name": "0328--封装函数--点击拖动div",
        "href": "../function/0328--封装函数--点击拖动div.html"
    }, {
        "name": "0328--封装函数--client兼容性封装",
        "href": "../function/0328--封装函数--client兼容性封装.html"
    }, {
        "name": "0330--封装函数--addEventlisterer和attachEvent添加事件",
        "href": "../function/0330--封装函数--addEventlisterer和attachEvent添加事件.html"
    }, {
        "name": "0330--封装函数--stopPropation()和cancelBubble阻止事件冒泡",
        "href": "../function/0330--封装函数--stopPropation()和cancelBubble阻止事件冒泡.html"
    }
];

// html 文件夹
var htmls = [
    {
        "name": "0314之前测试 递归+三元表达式与一般for循环谁的速度快",
        "href": "../html/0314之前测试 递归+三元表达式与一般for循环谁的速度快.html"
    }, {
        "name": "0314之前js 第01天 类型转换，三元表达式和简单for循环",
        "href": "../html/0314之前js 第01天 类型转换，三元表达式和简单for循环.html"
    }, {
        "name": "0314之前js 第02天 数组",
        "href": "../html/0314之前js 第02天 数组.html"
    }, {
        "name": "0314之前js 第03天 函数自调用结合三元表达式",
        "href": "../html/0314之前js 第03天 函数自调用结合三元表达式.html"
    }, {
        "name": "0314之前js 第03天 函数自调用结合三元表达式2",
        "href": "../html/0314之前js 第03天 函数自调用结合三元表达式2.html"
    }, {
        "name": "0314之前js test第02天test",
        "href": "../html/0314之前js test第02天test.html"
    }, {
        "name": "0315时间与日期和对象",
        "href": "../html/0315时间与日期和对象.html"
    }, {
        "name": "0316点击切换按钮颜色和文字",
        "href": "../html/0316点击切换按钮颜色和文字.html"
    }, {
        "name": "0316点击切换上一页下一页",
        "href": "../html/0316点击切换上一页下一页.html"
    }, {
        "name": "0318--封装--innerText",
        "href": "../html/0318--封装--innerText.html"
    }, {
        "name": "0318获取属性和设置属性attribute",
        "href": "../html/0318获取属性和设置属性attribute.html"
    }, {
        "name": "0318统计字数-全选-全不选-反选",
        "href": "../html/0318统计字数-全选-全不选-反选.html"
    }, {
        "name": "0319--封装--nextElement获取下一个标签对象",
        "href": "../html/0319--封装--nextElement获取下一个标签对象.html"
    }, {
        "name": "0319部分测试",
        "href": "../html/0319部分测试.html"
    }, {
        "name": "0319隔行换色",
        "href": "../html/0319隔行换色.html"
    }, {
        "name": "0319appendChild剪切添加",
        "href": "../html/0319appendChild剪切添加.html"
    }, {
        "name": "0319tab切换",
        "href": "../html/0319tab切换.html"
    }, {
        "name": "0320仿placeholder",
        "href": "../html/0320仿placeholder.html"
    }, {
        "name": "0321动态创建标签 document.creatElement()",
        "href": "../html/0321动态创建标签 document.creatElement().html"
    }, {
        "name": "0321动态创建隔行换色的列表",
        "href": "../html/0321动态创建隔行换色的列表.html"
    }, {
        "name": "0321动态创建元素-微博发布案例",
        "href": "../html/0321动态创建元素-微博发布案例.html"
    }, {
        "name": "0321动态创建在线人员列表",
        "href": "../html/0321动态创建在线人员列表.html"
    }, {
        "name": "0321字符串的拼接效率(计算总时间)",
        "href": "../html/0321字符串的拼接效率(计算总时间).html"
    }, {
        "name": "0322定时器 css3模拟",
        "href": "../html/0322定时器 css3模拟.html"
    }, {
        "name": "0322定时器",
        "href": "../html/0322定时器.html"
    }, {
        "name": "0322定时器来回滚动变色",
        "href": "../html/0322定时器来回滚动变色.html"
    }, {
        "name": "0322模拟百度搜索框",
        "href": "../html/0322模拟百度搜索框.html"
    }, {
        "name": "0322许愿墙-用户输入内容再生成标签",
        "href": "../html/0322许愿墙-用户输入内容再生成标签.html"
    }, {
        "name": "0322window对象",
        "href": "../html/0322window对象.html"
    }, {
        "name": "0323倒计时",
        "href": "../html/0323倒计时.html"
    }, {
        "name": "0323定时器颜色渐变和移动  有bug,见升级版",
        "href": "../html/0323定时器颜色渐变和移动  有bug,见升级版.html"
    }, {
        "name": "0323发送验证短信",
        "href": "../html/0323发送验证短信.html"
    }, {
        "name": "0323美女时钟",
        "href": "../html/0323美女时钟.html"
    }, {
        "name": "0323鼠标滑过小米动画",
        "href": "../html/0323鼠标滑过小米动画.html"
    }, {
        "name": "0324测试-对象的传入",
        "href": "../html/0324测试-对象的传入.html"
    }, {
        "name": "0324对伪数组使用 filter使其自己循环执行某代码",
        "href": "../html/0324对伪数组使用 filter使其自己循环执行某代码.html"
    }, {
        "name": "0324数组排序 sort()",
        "href": "../html/0324数组排序 sort().html"
    }, {
        "name": "0324数组去重",
        "href": "../html/0324数组去重.html"
    }, {
        "name": "0324字符串操作练习题-检索字符出现的字数",
        "href": "../html/0324字符串操作练习题-检索字符出现的字数.html"
    }, {
        "name": "0324字符串操作练习题",
        "href": "../html/0324字符串操作练习题.html"
    }, {
        "name": "0324字符串操作getElementById驼峰法",
        "href": "../html/0324字符串操作getElementById驼峰法.html"
    }, {
        "name": "0325定时器颜色渐变和移动 利用offset,升级版",
        "href": "../html/0325定时器颜色渐变和移动 利用offset,升级版.html"
    }, {
        "name": "0325轮播图-老师写的原版",
        "href": "../html/0325轮播图-老师写的原版.html"
    }, {
        "name": "0325轮播图",
        "href": "../html/0325轮播图.html"
    }, {
        "name": "0325offset点击按钮滚动,常用轮播",
        "href": "../html/0325offset点击按钮滚动,常用轮播.html"
    }, {
        "name": "0325offset宽高",
        "href": "../html/0325offset宽高.html"
    }, {
        "name": "0326定时器移动小效果改用css3做",
        "href": "../html/0326定时器移动小效果改用css3做.html"
    }, {
        "name": "0326定时器移动做个小效果",
        "href": "../html/0326定时器移动做个小效果.html"
    }, {
        "name": "0326轮播图自己练习一遍",
        "href": "../html/0326轮播图自己练习一遍.html"
    }, {
        "name": "0327轮播图减速移动完整版-自己练习",
        "href": "../html/0327轮播图减速移动完整版-自己练习.html"
    }, {
        "name": "0327轮播图减速移动完整版-自己练习第二遍",
        "href": "../html/0327轮播图减速移动完整版-自己练习第二遍.html"
    }, {
        "name": "0328 clientX , pageX 和 screenX的区别",
        "href": "../html/0328 clientX , pageX 和 screenX的区别.html"
    }, {
        "name": "0328--封装函数--scroll",
        "href": "../html/0328--封装函数--scroll.html"
    }, {
        "name": "0328点击拖动div",
        "href": "../html/0328点击拖动div.html"
    }, {
        "name": "0328模拟响应式",
        "href": "../html/0328模拟响应式.html"
    }, {
        "name": "0328小图跟着鼠标动",
        "href": "../html/0328小图跟着鼠标动.html"
    }, {
        "name": "0328找到鼠标在div中的位置",
        "href": "../html/0328找到鼠标在div中的位置.html"
    }, {
        "name": "0328client兼容性封装",
        "href": "../html/0328client兼容性封装.html"
    }, {
        "name": "0328offsetHeight , scrollHeight 和 clientHeight",
        "href": "../html/0328offsetHeight , scrollHeight 和 clientHeight.html"
    }, {
        "name": "0328scrollTop等",
        "href": "../html/0328scrollTop等.html"
    }, {
        "name": "0330--封装--addEventlisterer和attachEvent",
        "href": "../html/0330--封装--addEventlisterer和attachEvent.html"
    }, {
        "name": "0330放大镜实例----自己练习第二遍",
        "href": "../html/0330放大镜实例----自己练习第二遍.html"
    }, {
        "name": "0330放大镜实例",
        "href": "../html/0330放大镜实例.html"
    }, {
        "name": "0330事件冒泡与事件委托",
        "href": "../html/0330事件冒泡与事件委托.html"
    }, {
        "name": "测试",
        "href": "../html/测试.html"
    }
]

// practice 文件夹
var practices = [
    {
        "name":"0315时间与日期和对象",
        "href":"../practice/0315时间与日期和对象.html"
    },
    {
        "name":"0319练习-许愿墙",
        "href":"../practice/0319练习-许愿墙.html"
    },
    {
        "name":"0319练习-许愿墙1.0数据库获取数据",
        "href":"../practice/0319练习-许愿墙1.0数据库获取数据.html"
    },
    {
        "name":"0319练习-许愿墙2.0用户输入数据",
        "href":"../practice/0319练习-许愿墙2.0用户输入数据.html"
    },
    {
        "name":"0319练习-选水果",
        "href":"../practice/0319练习-选水果.html"
    },
    {
        "name":"0321字符串的拼接效率(计算总时间)",
        "href":"../practice/0321字符串的拼接效率(计算总时间).html"
    },
]

// JavaScript特效 文件夹
var javascripts = [
    {
        "name":"0325点击(滑过)按钮滚动指定位置",
        "href":"0325点击(滑过)按钮滚动指定位置.html"
    },
    {
        "name":"0325轮播图,点击后自己来回滚动",
        "href":"0325轮播图,点击后自己来回滚动.html"
    },
    {
        "name":"0325轮播图完整版-完全封装乞丐版1.0",
        "href":"0325轮播图完整版-完全封装乞丐版1.0.html"
    },
    {
        "name":"0325轮播图完整版-左右按钮封装",
        "href":"0325轮播图完整版-左右按钮封装.html"
    },
    {
        "name":"0325轮播图完整版",
        "href":"0325轮播图完整版.html"
    },
    {
        "name":"0325无缝滚动轮播",
        "href":"0325无缝滚动轮播.html"
    },
    {
        "name":"0326轮播图完整版-完全封装乞丐版2.0",
        "href":"0326轮播图完整版-完全封装乞丐版2.0.html"
    },
    {
        "name":"0327封装getComputedStyle和currentStyle",
        "href":"0327封装getComputedStyle和currentStyle.html"
    },
    {
        "name":"0327轮播图减速移动-传入多个参数-回调函数-做特效",
        "href":"0327轮播图减速移动-传入多个参数-回调函数-做特效.html"
    },
    {
        "name":"0327轮播图减速移动-传入多个参数",
        "href":"0327轮播图减速移动-传入多个参数.html"
    },
    {
        "name":"0327轮播图减速移动-筋斗云",
        "href":"0327轮播图减速移动-筋斗云.html"
    },
    {
        "name":"0327轮播图减速移动",
        "href":"0327轮播图减速移动.html"
    },
    {
        "name":"0328点击拖动div",
        "href":"0328点击拖动div.html"
    },
    {
        "name":"0328小图跟着鼠标动",
        "href":"0328小图跟着鼠标动.html"
    },
    {
        "name":"0328旋转木马",
        "href":"0328旋转木马.html"
    },
    {
        "name":"0330放大镜实例",
        "href":"0330放大镜实例.html"
    },
]
// 翻转数组,让最新的在最上面

template_y(functions)
template_y(htmls)
template_y(practices)
template_y(javascripts)