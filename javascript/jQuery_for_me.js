/**
 * Created by yubowen on 2017/3/18.
 */
//以下所有知识为2017-03-18晚自习之前老师讲的知识,没有任何新知识
/**
 * 直接使用 $ 来代替 document.getElementsByClassName等三个
 * 书写方式与css一致
 * 暂不支持选择子代元素
 * @param string 字符串类型,根据class还是id来用 . 或者 #
 * @returns {*} 根据传入内容自动判断是 class , id 还是 标签
 */
function $y(string) {  //先只考虑只传入一个class、id或者标签,不考虑子元素,2017-03-18
    // 兼容性判断
    var flag = true;
    if(!document.getElementsByClassName("")) {  //如果浏览器不支持getElementsByClassName,则使用自己的方式找到该class
        flag = false
    }
    // console.log(document.getElementsByTagName("*"))
    var a = [];  // 用于得到去除 # 和 . 之后的部分。 支持IE9+,chrome,Firefox
    var b = [];  // IE6 - IE8 获取class时存的数组
    var d = []; // 用于存储获取class 时的数组
    var c = document.getElementsByTagName("*"); // IE6 - IE8来获取class用的
    for (var i = 1; i < string.length; i++) { // 去掉第一项后拼接剩余部分的字符串
        a[i-1] = string[i]
    }
    a = a.join(''); // 0321补充----这行是今天学的内容:用数组的方式拼接字符串。
    // console.log(a);
    if(!flag){
        for (var j = 0; j < c.length; j++) {
            if(c[j].getAttribute("class") == a){   //等学了正则再改,暂只支持元素只有一个class的情况
                b[b.length] = c[j]
            }
        }
        console.log(b)
        return b
    }
    // 在上面已经用join将 a 转换为字符串
    switch (string[0]){
        case "#":
            return document.getElementById(a);
        case ".":
            return document.getElementsByClassName(a);
        default:
            return document.getElementsByTagName(string)
    }
}
// 目前只支持以下这几种方式获取,若要获取子级的元素,要 $(".lkjlkj").getElementsByClassName("child"),以后慢慢会用更简单的方式来获取