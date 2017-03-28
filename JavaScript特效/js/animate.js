/**
 * Created by Administrator on 2016/10/25.
 */
/**
 * 获得标签对象属性值的函数
 * @param obj
 * @param attr
 * @returns {*}
 */
function getStyle(obj,attr){
    // 能力检测  所谓的能力检测，也就是看浏览器是否支持此对象的属性或是方法
    if(obj&&obj.currentStyle){
        return  obj.currentStyle[attr];
    }else {
        return  getComputedStyle(obj,null)[attr];
    }
}

function animate(obj,json,fn){
    // 为了保证当前对象运动的时候，只会开启一个定时器，需要将定时器存在当前对象的属性中
    clearInterval(obj.timerId);
    obj.timerId = setInterval(function (){
        var flag = true;
        for(var key in json){
            //var leader = obj.offsetLeft;// style.left，但是style的方式只能获取 行内的属性值，如果left是在内嵌或是默认没写的情况下，我们只能是用offsetLeft来获取
            //var att=getStyle(obj,attr); // 获得当前对象现在的attr这个属性值
            //var leader = parseInt(att)||0 ;// 将这个字符串转换为number类型，如果没有这个属性的话，给一个默认的值0
            //var step = (target-leader)/10;

            if(key=="opacity"){
                var leader = parseInt(getStyle(obj,key)*100)||0; //因为opacity是小数，为了便于计算，先将此值扩大100倍
                var target = json[key]*100;//这个就是json里面的目标位置
                var step = (target-leader)/10;
                step=  step>0?Math.ceil(step):Math.floor(step);
                leader = leader + step;
                obj.style[key] = leader/100;
            }else if(key=="zIndex"){
                var leader = parseInt(getStyle(obj,key))||0; //当前对象现在的属性值
                var target = json[key];//这个就是json里面的目标位置
                step = (target-leader)/10;
                step=  step>0?Math.ceil(step):Math.floor(step);
                leader = leader + step;
                obj.style[key] = leader;
            }else {
                var leader = parseInt(getStyle(obj,key))||0; //当前对象现在的属性值
                var target = json[key];//这个就是json里面的目标位置
                var step = (target-leader)/10;
                step=  step>0?Math.ceil(step):Math.floor(step);
                leader = leader + step;
                obj.style[key] = leader +'px';
            }
            if(leader!=target){ //如果有一个属性的值没有到达目标位置的话,就要让flag为false
                flag = false;
            }
        }
        if(flag){ // 要根据flag的值来确定是否要清除定时器
            clearInterval(obj.timerId);
            if(fn){ //如果fn有值，并且是一个函数的话，则调用这个函数
                fn();
            }
        }
    },15)
}