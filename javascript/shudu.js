var getInput = document.getElementsByTagName('input');
var tagP = document.getElementsByTagName('p');
// tagP[1].innerHTML="haha";
    // 将所有数放在一个二维数组，再放入一个意味数组
var heng = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
];
var jiu1 = [],
    jiu2 = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
// 点击测试的次数
var ceshiTimes = 0

/**
 * [getValue 每一排为一个数组，得到9*9的二维数组]
 * @return { [arr[][] ]}     [ 9 × 9 二维数组]
 */
function getValue1() {
	// 如果字符非法或者为0，则直接返回
	for (var k = 0; k < getInput.length; k++) {
		if (isNaN(+getInput[k].value) || (String(getInput[k].value) == "0")) { 
			tagP[1].innerHTML = "输入错误";
			return false
		}
	}
	tagP[1].innerHTML = "";
    for (var i = 0; i < heng.length; i++) {
        for (var j = 0; j < heng.length; j++) {
            heng[i][j] = +getInput[i * 9 + j].value || 0
        }
    }
    return heng
}
/**
 * [getValue2 生成九宫格二维数组]
 * @return {[type]} [description]
 */
function getValue2() {
	if (!getValue1()) {
		return false
	}
    var heng1 = getValue1();
    jiu1 = [];
    // 这四个循环是将所有的数全部取出，但还为分到所在的九宫格
    for (var m = 0; m < 3; m++) { // 这个循环是得到每个九宫格的三列数字
        for (var k = 0; k < 3; k++) { //这个循环是得到每个九宫格的前三个数字
            for (var i = m; i < 9; i += 3) { //这两个循环得到的是每个九宫格的第一个数字
                for (var j = k; j < 9; j += 3) {
                    jiu1[jiu1.length] = heng1[i][j]
                }
            }
        }
    }
    // 下面将得到的该数组拆分，合并，为九宫格的二维数组
    // 每隔 9 个数，是同一个格子的
    for (var t = 0; t < 9; t++) {
        for (var n = t; n < 81; n += 9) {
            jiu2[t][(n - t) / 9] = jiu1[n]
        }
    }
    // 此时的 jiu2 是得到的每个九宫格的九个数
    return jiu2;
}

/**
 * [normalShu 生成 a 个随机数]
 * @param  {[number]} a [description]
 * @return {[type]}   [description]
 */
function normalShu(a) {
    var arr1 = [],
        arr2 = [];
    for (var i = 0; i < a; i++) {
        // 分别给a个随机数，并将其放到1-81的随机位置
        arr1[arr1.length] = parseInt(Math.random() * 9) + 1;
        arr2[arr2.length] = parseInt(Math.random() * 81);
        getInput[arr2[arr2.length - 1]].value = arr1[arr1.length - 1];
        getInput[arr2[arr2.length - 1]].placeholder = arr1[arr1.length - 1];
        getInput[arr2[arr2.length - 1]].disabled = "disabled";
        // console.log(arr2);
        // console.log(getInput[i].value);
    }
    // 判断生成的数，是否自身就已经导致数独不成立

}



/**
 * [testHeng 验证判断横向或是纵向是否有错]
 * @param  {[array]} array [description]
 * @return {[type]}       [description]
 */
function testHeng(array, arrey2) {
    var charge = false,writeP=[];
    if ((array || arrey2) == false) {
    	return console.log('填写有误');
    }
    var i, j, k, a, b, c, t, s, r, x;

    console.log("这是第   " + ceshiTimes + "   次测试");
    ceshiTimes++;

    // 1.判断横向是否有重复 i j k
    for (i = 0; i < array.length; i++) {
        for (j = 0; j < array.length; j++) {
            for (k = j + 1; k < array.length; k++) {
                if (array[i][j] == array[i][k] && array[i][k] != 0) {
                    console.log("第  " + (i + 1) + "  行有错误");
                    writeP[writeP.length] = i + 1;
                    charge = true;
                    break
                } else {
                    continue
                }
            }

        }
    }
    
    tagP[1].innerHTML = "第  " + writeP + "  行有错误";
    if (charge) {
        return console.log(''); } // 如果横向已有错误，则直接return，不进行后续运算

    // 2.判断纵向是否有重复 a b c
    for (a = 0; a < array.length; a++) {
        for (b = 0; b < array.length; b++) {
            for (c = b + 1; c < array.length; c++) {
                if (array[b][a] == array[c][a] && array[b][a] != 0) {
                    console.log("第  " + (a + 1) + "  列有错误");
                    writeP[writeP.length] = a + 1;
                    charge = true;
                    break
                } else {
                    continue
                }
            }

        }
    }
    tagP[1].innerHTML = "第  " + writeP + "  列有错误";
    if (charge) {
        return console.log(''); } // 如果纵向已有错误，则直接return，不进行后续运算

    // 3.判断九个九宫格是否有错误 r t s

    for (r = 0; r < 9; r++) {
        for (s = 0; s < 9; s++) {
            for (t = s + 1; t < 9; t++) {
                if (arrey2[r][s] == arrey2[r][t] && arrey2[r][t] != '') {
                    console.log("第  " + (r + 1) + "  个九宫格有错误");
                    writeP[writeP.length] = r + 1;
                    charge = true;
                    break
                } else {
                    continue
                }
            }

        }
    }
    if (writeP.length == 0) {
    	return tagP[1].innerHTML = "目前没有错误";
    }
    tagP[1].innerHTML = "第  " + writeP + "  个九宫格有错误";
    return console.log('');
}

//	设定初始值
normalShu(10)

//	自动测试第一次的数字
testHeng(getValue1(), getValue2());
//	console.log(heng);
// console.log(getNine());
// console.log(heng);
