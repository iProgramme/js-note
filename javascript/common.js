/**
 * Created by yubowen on 2017/3/24.
 */
// 制作一个通用的返回首页和各个页面之间跳转的模板
window.onload = function () {
    function template_y(arr) {
        var div = document.createElement("div");
        var ul = document.createElement("ul");
        var body = document.getElementsByTagName("body")[0];
        div.style = "padding:5px 0px;height:300px;overflow:auto;width:400px;position:fixed;right:10px;top:calc(50% - 150px);background-color:#fff;text-align:left;border:1px solid #00f;box-shadow:5px 5px 5px #bbb;border-radius:10px";
        ul.style = "list-style:none;padding:0"
        div.appendChild(ul);
        // 再给每个页面加上一个common.css,先加在最后不要紧,以后的css继续添加到最后就好
        var linkcss = document.createElement("link");
        var head = document.getElementsByTagName("head")[0];
        linkcss.setAttribute("href","../css/common.css");

        head.appendChild(linkcss);
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



            if (n>0) {
                if (arr[n].href.slice(0,5) != arr[n-1].href.slice(0,5)) {
                    // console.log(111)
                    li.style.borderBottom = "10px solid blue"
                }
            }



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
    template_y(data_y)
}


//  传入数据

var data_y = [
    {
        "name": "0314之前js 第01天 类型转换，三元表达式和简单for循环",
        "href": "../html/0314之前js 第01天 类型转换，三元表达式和for循环.html"
    },
    {
        "name": "0314之前js test第02天test",
        "href": "../html/0314之前js test第02天test.html"
    },
    {
        "name": "0314之前测试 递归+三元表达式与一般for循环谁的速度快",
        "href": "../html/0314之前测试 递归+三元表达式与for循环谁的速度快.html"
    },
    {
        "name": "0314之前js 第03天 函数自调用结合三元表达式2",
        "href": "../html/0314之前js 第03天 函数自调用结合三元表达式2.html"
    },
    {
        "name": "0314之前js 第03天 函数自调用结合三元表达式",
        "href": "../html/0314之前js 第03天 函数自调用结合三元表达式.html"
    },
    {
        "name": "0314之前js 第02天 数组",
        "href": "../html/0314之前js 第02天 数组.html"
    },
    {
        "name": "0315时间与日期和对象",
        "href": "../html/0315时间与日期和对象.html"
    },
    {
        "name": "0316点击切换按钮颜色和文字",
        "href": "../html/0316点击切换按钮颜色和文字.html"
    },
    {
        "name": "0316点击切换上一页下一页",
        "href": "../html/0316点击切换上一页下一页.html"
    },
    {
        "name": "0318--封装--innerText",
        "href": "../html/0318--封装--innerText.html"
    },
    {
        "name": "0318统计字数-全选-全不选-反选",
        "href": "../html/0318统计字数-全选-全不选-反选.html"
    },
    {
        "name": "0318获取属性和设置属性attribute",
        "href": "../html/0318获取属性和设置属性attribute.html"
    },
    {
        "name": "0319tab切换",
        "href": "../html/0319tab切换.html"
    },
    {
        "name": "0319appendChild剪切添加",
        "href": "../html/0319appendChild剪切添加.html"
    },
    {
        "name": "0319隔行换色",
        "href": "../html/0319隔行换色.html"
    },
    {
        "name": "0319--封装--nextElement获取下一个标签对象",
        "href": "../html/0319--封装--nextElement获取下一个标签对象.html"
    },
    {
        "name": "0320仿placeholder",
        "href": "../html/0320仿placeholder.html"
    },
    {
        "name": "0321动态创建标签 document.creatElement('')",
        "href": "../html/0321动态创建标签 document.creatElement('').html"
    },
    {
        "name": "0321动态创建在线人员列表",
        "href": "../html/0321动态创建在线人员列表.html"
    },
    {
        "name": "0321动态创建隔行换色的列表",
        "href": "../html/0321动态创建隔行换色的列表.html"
    },
    {
        "name": "0321动态创建元素-微博发布案例",
        "href": "../html/0321动态创建元素-微博发布案例.html"
    },
    {
        "name": "0321字符串的拼接效率(计算总时间)",
        "href": "../html/0321字符串的拼接效率(计算总时间).html"
    },
    {
        "name": "0319部分测试",
        "href": "../html/0319部分测试.html"
    },
    {
        "name": "0319部分测试",
        "href": "../html/0319部分测试.html"
    },
    {
        "name": "0322window对象",
        "href": "../html/0322window对象.html"
    },
    {
        "name": "0322定时器",
        "href": "../html/0322定时器.html"
    },
    {
        "name": "0322模拟百度搜索框",
        "href": "../html/0322模拟百度搜索框.html"
    },
    {
        "name": "0322定时器来回滚动变色",
        "href": "../html/0322定时器来回滚动变色.html"
    },
    {
        "name": "0323定时器颜色渐变",
        "href": "../html/0323定时器颜色渐变和移动.html"
    },
    {
        "name": "0323倒计时",
        "href": "../html/0323倒计时.html"
    },
    {
        "name": "0322许愿墙-用户输入内容再生成标签",
        "href": "../html/0322许愿墙-用户输入内容再生成标签.html"
    },
    {
        "name": "0323美女时钟",
        "href": "../html/0323美女时钟.html"
    },
    {
        "name": "0323发送验证短信",
        "href": "../html/0323发送验证短信.html"
    },
    {
        "name": "0323鼠标滑过小米动画",
        "href": "../html/0323鼠标滑过小米动画.html"
    },
    {
        "name": "0322定时器 css3模拟",
        "href": "../html/0322定时器 css3模拟.html"
    },
    {
        "name": "0324字符串操作getElementById驼峰法",
        "href": "../html/0324字符串操作getElementById驼峰法.html"
    },
    {
        "name": "0324字符串操作练习题-检索字符出现的字数",
        "href": "../html/0324字符串操作练习题-检索字符出现的字数.html"
    },
    {
        "name": "0324数组排序 sort()",
        "href": "../html/0324数组排序 sort().html"
    },
    {
        "name": "测试",
        "href": "../html/测试.html"
    },
    {
        "name": "0324测试-对象的传入",
        "href": "../html/0324测试-对象的传入.html"
    },
    {
        "name": "0324对伪数组使用 filter使其自己循环执行某代码",
        "href": "../html/0324对伪数组使用 filter使其自己循环执行某代码.html"
    },
    {
        "name": "0324字符串操作练习题",
        "href": "../html/0324字符串操作练习题.html"
    },
    {
        "name": "0324数组去重",
        "href": "../html/0324数组去重.html"
    },
    {
        "name": "0325轮播图,点击后自己来回滚动",
        "href": "../html/0325轮播图,点击后自己来回滚动.html"
    },
    {
        "name": "0320tab切换2(新封装tab切换函数)",
        "href": "../练习题-封装版/0320tab切换2(新封装tab切换函数).html"
    },
    {
        "name": "0320选水果2(新封装适应所有类似选择)",
        "href": "../练习题-封装版/0320选水果2(新封装适应所有类似选择).html"
    },
    {
        "name": "0320隔行换色2(新封装适应所有隔行换色)",
        "href": "../练习题-封装版/0320隔行换色2(新封装适应所有隔行换色).html"
    },
    {
        "name": "0321字符串的拼接效率(计算总时间)",
        "href": "../practive/0321字符串的拼接效率(计算总时间).html"
    },
    {
        "name": "0315时间与日期和对象",
        "href": "../practive/0315时间与日期和对象.html"
    },
    {
        "name": "0319练习-许愿墙",
        "href": "../practive/0319练习-许愿墙.html"
    },
    {
        "name": "0319练习-许愿墙1.0数据库获取数据",
        "href": "../practive/0319练习-许愿墙1.0数据库获取数据.html"
    },
    {
        "name": "0319练习-许愿墙2.0用户输入数据",
        "href": "../practive/0319练习-许愿墙2.0用户输入数据.html"
    },
    {
        "name": "0319练习-选水果",
        "href": "../practive/0319练习-选水果.html"
    }
];
// 翻转数组,让最新的在最上面
data_y = data_y.reverse();
console.log(data_y)

