/**
 * Created by yubowen on 2017/3/24.
 */
// 制作一个通用的返回首页和各个页面之间跳转的模板
var div_y = document.createElement("div");
var body = document.getElementsByTagName("body")[0];
body.setAttribute("style","padding-left:420px;position:relative;")
// 再给每个页面加上一个common.css,先加在最后不要紧,以后的css继续添加到最后就好
var linkcss = document.createElement("link");
var head = document.getElementsByTagName("head")[0];
var toggle = document.createElement("span");
var common_flag = true; //定义变量来单击显示隐藏
var index_y = 0; // 为给每一个 li 不同的 id
// 以上变量过多,为防止冲突,需封装成一个自调用函数,仅仅在页面加载的时候执行一次即可
toggle.setAttribute("style","border-width:20px;border-style:solid;border-color:transparent;position:fixed;border-right:20px solid #f0f;cursor:pointer;top:calc(50% - 20px);left:378px;z-index:9999;border-left-width:0;");  // 这里用 client().clientHeight 获得可视区的高度,来使得小三角始终在窗口上下居中,而不是整个 page 中居中
body.appendChild(toggle);
linkcss.setAttribute("href", "../css/common.css");
linkcss.rel = "stylesheet";
linkcss.style.display = "block";
head.appendChild(linkcss);
//div_y.style = "padding:5px 0px;height:300px;overflow:auto;width:400px;position:fixed;right:10px;top:calc(50% - 150px);background-color:#fff;text-align:left;border:1px solid #00f;box-shadow:5px 5px 5px #bbb;border-radius:10px";
// 下面的方式,兼容性更好。上面的方式,Safari不兼容
div_y.setAttribute("style", "padding:5px 0px;height:100%;overflow:auto;width:400px;position:fixed;left:0px;background-color:#fff;text-align:left;box-shadow:10px 10px 10px #888;z-index:9998;top:0;padding-right:30px");
function template_y(arr) {
    var ul = document.createElement("ul");
    ul.style = "list-style:none;padding:0;border-bottom:10px solid blue;"
    div_y.appendChild(ul);
    index_y++;
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
        a.id = "lia" + index_y + n;
        a.setAttribute("href", arr[n].href+"#lia" + index_y + n);
        a.style = "display:block;width:calc(100% - 10px);padding:5px;color:red";
        ul.appendChild(li)
    })
    // 如果页面有元素,就把这个加到最前面
    if (body.children) {
        //console.log(body.children[0])
        body.insertBefore(div_y, body.children[0])
    }
    //console.log(body.children[0]);
}
// onload之后执行该函数

// 封装可视区
function client() {
    var clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth ||0;
    var clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight ||0;
    var o = {
        clientWidth:clientWidth,
        clientHeight:clientHeight
    }
    return o
}
console.log(client().clientHeight); // 直接获得可是窗口的高度

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
        "name": "0323定时器颜色渐变和移动有bug,见升级版",
        "href": "../html/0323定时器颜色渐变和移动.html"
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
    },{
        "name":"0331匹配密码强度",
        "href":"../html/0331匹配密码强度.html"
    },{
        "name":"0331匹配汉字",
        "href":"../html/0331匹配汉字.html"
    },{
        "name":"0331正则表达式1",
        "href":"../html/0331正则表达式1.html"
    },{
        "name":"0331正则表达式匹配替换和分割",
        "href":"../html/0331正则表达式匹配替换和分割.html"
    },{
        "name":"0331验证手机号",
        "href":"../html/0331验证手机号.html"
    },{
        "name":"0331验证邮箱",
        "href":"../html/0331验证邮箱.html"
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
        "href":"../javascript特效/0325点击(滑过)按钮滚动指定位置.html"
    },
    {
        "name":"0325轮播图,点击后自己来回滚动",
        "href":"../javascript特效/0325轮播图,点击后自己来回滚动.html"
    },
    {
        "name":"0325轮播图完整版-完全封装乞丐版1.0",
        "href":"../javascript特效/0325轮播图完整版-完全封装乞丐版1.0.html"
    },
    {
        "name":"0325轮播图完整版-左右按钮封装",
        "href":"../javascript特效/0325轮播图完整版-左右按钮封装.html"
    },
    {
        "name":"0325轮播图完整版",
        "href":"../javascript特效/0325轮播图完整版.html"
    },
    {
        "name":"0325无缝滚动轮播",
        "href":"../javascript特效/0325无缝滚动轮播.html"
    },
    {
        "name":"0326轮播图完整版-完全封装乞丐版2.0",
        "href":"../javascript特效/0326轮播图完整版-完全封装乞丐版2.0.html"
    },
    {
        "name":"0327封装getComputedStyle和currentStyle",
        "href":"../javascript特效/0327封装getComputedStyle和currentStyle.html"
    },
    {
        "name":"0327轮播图减速移动-传入多个参数-回调函数-做特效",
        "href":"../javascript特效/0327轮播图减速移动-传入多个参数-回调函数-做特效.html"
    },
    {
        "name":"0327轮播图减速移动-传入多个参数",
        "href":"../javascript特效/0327轮播图减速移动-传入多个参数.html"
    },
    {
        "name":"0327轮播图减速移动-筋斗云",
        "href":"../javascript特效/0327轮播图减速移动-筋斗云.html"
    },
    {
        "name":"0327轮播图减速移动",
        "href":"../javascript特效/0327轮播图减速移动.html"
    },
    {
        "name":"0328点击拖动div",
        "href":"../javascript特效/0328点击拖动div.html"
    },
    {
        "name":"0328小图跟着鼠标动",
        "href":"../javascript特效/0328小图跟着鼠标动.html"
    },
    {
        "name":"0328旋转木马",
        "href":"../javascript特效/0328旋转木马.html"
    },
    {
        "name":"0330放大镜实例",
        "href":"../javascript特效/0330放大镜实例.html"
    },
]
// 翻转数组,让最新的在最上面

template_y(functions)
template_y(htmls)
template_y(practices)
template_y(javascripts)

// 点击,左侧显示隐藏
toggle.onclick = function () {
    if (common_flag) {
        div_y.style.width = 0;
        div_y.style.padding = 0;
        body.style.paddingLeft = 0;
        toggle.style.borderRight = 0;
        toggle.style.left = "3px";
        toggle.style.borderLeft = "20px solid #f0f";
    }else{
        div_y.style.width = "400px";
        div_y.style.padding = "5px 30px 5px 0";
        body.style.paddingLeft = "420px";
        toggle.style.borderRight = "20px solid #f0f";
        toggle.style.left = "378px";
        toggle.style.borderLeft = "0";
    }
    common_flag = !common_flag;
}