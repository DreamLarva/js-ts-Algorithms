// 冒泡排序
// 每次相邻的像个元素比较(如果靠前的元素>靠后的元素就交换位置)
function bubbleSort(arr) {
    let len = arr.length;
    // 外层从后往前
    for (let outer = len; outer >= 2; --outer) {
        // 内层从前往后
        for (let inner = 0; inner <= outer - 1; ++inner) {
            if (arr[inner] > arr[inner + 1]) {
                swap(arr, inner, inner + 1);
            }
        }
    }
}

// 选择排序
// 从头开始,将数组的第一个元素和其他元素进行对比,检查完所有元素后,将最小的元素放到数组第一个的位置,然后算法会从第二个位置继续
function selectionSort(arr) {
    let min;
    const len = arr.length;
    for (let outer = 0; outer <= len - 2; ++outer) {
        min = outer;
        for (let inner = outer + 1; inner <= len - 1; ++inner) {
            if (arr[inner] < arr[min]) {
                min = inner;
            }
        }
        swap(arr, outer, min);
    }
}

// 插入排序
// 插入排序有两个循环。外循环将数组元素挨个移动，而内循环则对外循环中选中的元素及它后面的那个元素进行比较。如果外循环中选中的元素比内循环中选中的元素小，那么数组元素会向右移动，为内循环中的这个元素腾出位置.
function insertionSort(arr) {
    let temp, inner;
    const len = arr.length;
    for (let outer = 1; outer < len; ++outer) {
        temp = arr[outer];
        inner = outer;
        // 内层 innner = 0表示已经匹配到了数组最左边的元素
        // 如果arr[inner - 1] < temp 自己的index++ 这个位置让给外层正在匹配的元素
        while (inner > 0 && (arr[inner - 1] >= temp)) {
            arr[inner] = arr[inner - 1];
            inner--;
        }
        arr[inner] = temp
    }
    return arr
}

// 交换两个数组的元素
function swap(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    return arr
}

// 测试用随机数组
function generateRandomArr(length) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * length))
    }
    return arr
}

// 复制一个数组
function paste(arr) {
    return arr.map(v => v)
}

// 检验结果是否正确
function isRight(arr) {
    return arr.every((v, i, a) => {
        if (i === arr.length - 1) {
            return true
        }
        return v <= a[i + 1]
    })
}

// 测试消耗时间
function test(arr, fun, str) {
    let testArr = paste(arr);
    // var start = new Date().getTime();
    console.time(str);
    if (str === "原生排序(似乎是快速排序)") {
        fun(testArr, (a, b) => a - b)
    } else {
        const _arr = fun(testArr);
        testArr = Array.isArray(_arr) ? _arr : testArr;
    }

    console.timeEnd(str);
    console.log(`校验结果是${isRight(testArr)}`);
    return testArr
}


let testArr = generateRandomArr(10000);
const myTest = test.bind({}, testArr);
// 测试原生
// 反柯里化
const unCurrying = function (fn) {
    return function () {
        const args = [].slice.call(arguments, 1);
        return fn.apply(arguments[0], args);
    }
};
let nativeSort = unCurrying(Array.prototype.sort);


// 基本排序算法
console.log("基本排序算法 10000个元素");

myTest(nativeSort, "原生排序(似乎是快速排序)");
myTest(insertionSort, "插入排序");
myTest(selectionSort, "选择排序");
myTest(bubbleSort, "冒泡排序");

/**
 * 希尔排序的核心理念与插入排序不同，它会首先比较距离较远的元素，
 * 而非相邻的元素。和简单地比较相邻元素相比，
 * 使用这种方案可以使离正确位置很远的元素更快地回到合适的位置。
 * 当开始用这个算法遍历数据集时，所有元素之间的距离会不断减小，
 * 直到处理到数据集的末尾，这时算法比较的就是相邻元素了。
 *
 * 希尔排序的工作原理是，通过定义一个间隔序列来表示在排序过程中进行比较的元素之间有多远的间隔。
 * 我们可以动态定义间隔序列，不过对于大部分的实际应用场景，算法要用到的间隔序列可以提前定好。
 * 最佳的间隔序列是： 701, 301, 132, 57, 23, 10, 4, 1 。
 * 最佳间隔的推到论文(http://sun.aei.polsl.pl/~mciura/publikacje/shellsort.pdf)
 * */

function shellSortWithStaticGaps(arr) {
    let len = arr.length;
    // 定义间隔 必须和下面的数组对应 从大到小
    let gaps = [701, 301, 132, 57, 23, 10, 4, 1];

//        console.log(arr.join(" "))
    // 间隔按照排序的每次取用的间隔一次减小
    for (let g = 0; g < gaps.length; g++) {
        // 对于每个间隔内 页逐渐减小 直到进入 下一个更小的间隔
        for (let i = gaps[g]; i < len; i++) {
            // 储存当前节点准备之后插入
            let temp = arr[i];
            // 相当于将 从arr[j]开始 想做 每间隔gaps[g]的元素 组成的数组进行插入排序
            // arr[j - gaps[g]]> temp 而不是再比较 两个间隔之间的元素 是因为 在i值更小的时候已经比较过了 所以只要比temp和上一次间隔的元素的大小就能判断是不是要对当前i和当前间隔进行插入排序
            let j;
            for (j =  i; j >= gaps[g] && arr[j - gaps[g]] > temp; j -= gaps[g]) {
                arr[j] = arr[j - gaps[g]];
//                    console.log(arr.join(" "))
            }
            arr[j] = temp;
//                console.log(arr.join(" "))

        }

    }
}


function shellSortWithDynamicGaps(arr) {
    const N = arr.length;
    let h = 1;
    // 动态生成 shellSort 最佳的间隔
    while (h < N / 3) {
        h = 3 * h + 1;
    }

    // 这种办法比 向后赋值最后更新到最前面的位置 比不停交换两个元素的位置的速度快的多
    while (h >= 1) {
        for (let i = h; i < N; i++) {
            let temp = arr[i];
            let j;
            for (j = i; j >= h && arr[j - h] > temp; j -= h) {
                arr[j] = arr[j - h];
            }
            arr[j] = temp;
        }
        h = (h - 1) / 3;
    }
    /*        while (h >= 1) {
     for (var i = h; i < N; i++) {
     for (var j = i; j >= h && arr[j] < arr[j-h]; j -= h) {
     swap(arr, j, j-h);
     }
     }
     h = (h-1)/3;
     }*/
}

/**
 * 归并排序
 * 把一系列排好序的子序列合并成一个大的完整有序序列。
 * 从理论上讲，这个算法很容易实现。我们需要两个排好序的子数组，
 * 然后通过比较数据大小，先从最小的数据开始插入，最后合并得到第三个数组。
 *
 * 问题:在实际情况中，归并排序还有一些问题，当我们用这个算法对一个很大的数据集进行排序时，
 * 我们需要相当大的空间来合并存储两个子数组.
 * */

function mergeSort(arr) {
    if (arr.length < 2) {
        return
    }
    let step = 1;
    let left, right;
    while (step < arr.length) {
        left = 0;
        right = step;
        while (right + step <= arr.length) {
            mergeArrays(arr, left, left + step, right, right + step);
            left = right + step;
            right = left + step;
        }
        if (right < arr.length) {
            mergeArrays(arr, left, left + step, right, arr.length);
        }
        step *= 2;
    }
}

function mergeArrays(arr, startLeft, stopLeft, startRight, stopRight) {
    const rightArr = new Array(stopRight - startRight + 1);
    const leftArr = new Array(stopLeft - startLeft + 1);
    let _startRight = startRight;
    for (let i = 0; i < rightArr.length - 1; ++i) {
        rightArr[i] = arr[_startRight];
        ++_startRight;
    }
    let _startLeft = startLeft;
    for (let i = 0; i < leftArr.length - 1; i++) {
        leftArr[i] = arr[_startLeft];
        ++_startLeft
    }

    //?
    rightArr[rightArr.length - 1] = Infinity; // 哨兵值
    leftArr[leftArr.length - 1] = Infinity; //哨兵值

    // m 和 n 相当于左右数组的指针
    let m = 0, n = 0;

    // 两个各自已经*排序好*的数组 组合进行排序 只比较共 左数组的length+ 右数组的length次
    // 并且左右数组(必定相邻)的区间 在结果arr数组中排序
    for (let k = startLeft; k < stopRight; k++) {
        if (leftArr[m] <= rightArr[n]) {
            arr[k] = leftArr[m];
            m++
        } else {
            arr[k] = rightArr[n];
            n++;
        }
    }
//        console.log(arr.join(','))
}


/**
 * 快速排序
 * 它是一种分而治之的算法，通过递归的方式将数据依次分解为包含较小元素和较大元素的不同子序列。
 * 该算法不断重复这个步骤直到所有数据都是有序的。
 *这个算法首先要在列表中选择一个元素作为基准值（pivot）。
 * 数据排序围绕基准值进行，将列表中小于基准值的元素移到数组的底部，将大于基准值的元素移到数组的顶部。
 * */

function qSort(list) {
    if (list.length === 0) {
        return [];
    }
    const lesser = [];
    const greater = [];
    const pivot = list[0];

    // 从第一个元素开始 因为第一个值为基准值 如果只剩基准值(递归的最末则不会进这个循环)
    for (let i = 1; i < list.length; i++) {
        if (list[i] < pivot) {
            lesser.push(list[i]);
        } else {
            greater.push(list[i]);
        }
    }
//        console.log(qSort(lesser).concat(pivot, qSort(greater)));
    return qSort(lesser).concat(pivot, qSort(greater));
}


/**
 * 快速排序有很大的优化空间
 * 1.取的基准值越接近 数组所有元素的中位数 排序的成熟越少(三数取中)
 * 2.快速排序并不稳定 在分割的数组的元素的个数小于10的情况下可以采用插入排序(稳定) 来减少排序的次数
 * 3.对于递归可已使用尾调优化(es6)
 * */


// 三数取中(median-of-three)
// 选取第一个元素 最后一个元素 和中间的元素 选择其中 的中位数 作为基准值

function qSort1(list) {
    if (list.length === 0) {
        return [];
    }
    const lesser = [];
    const greater = [];
    medianOfThree(list);
    const pivot = list[0];


    // 从第一个元素开始 因为第一个值为基准值 如果只剩基准值(递归的最末则不会进这个循环)
    for (let i = 1; i < list.length; i++) {
        if (list[i] < pivot) {
            lesser.push(list[i]);
        } else {
            greater.push(list[i]);
        }
    }
//        console.log(qSort(lesser).concat(pivot, qSort(greater)));
    return qSort1(lesser).concat(pivot, qSort1(greater));
}

// 三数取中
function medianOfThree(arr) {
    const high = arr.length - 1,
        low = 0,
        mid = low + (high - low) >> 1;

    //使用三数取中法选择枢轴
    if (arr[0] > arr[high])//目标: arr[mid] <= arr[high]
    {
        swap(arr[mid], arr[high]);
    }
    if (arr[low] > arr[high])//目标: arr[low] <= arr[high]
    {
        swap(arr[low], arr[high]);
    }
    if (arr[mid] > arr[low]) //目标: arr[low] >= arr[mid]
    {
        swap(arr[mid], arr[low]);
    }
}

//当待排序的数组的长度<=10 就是用插入排序
function qSort2(list) {
    if (list.length === 0) {
        return [];
    }
    const lesser = [];
    const greater = [];
    medianOfThree(list);
    const pivot = list[0];

    if (list.length <= 10) {
        return insertionSort(list)
    }

    // 从第一个元素开始 因为第一个值为基准值 如果只剩基准值(递归的最末则不会进这个循环)
    for (let i = 1; i < list.length; i++) {
        if (list[i] < pivot) {
            lesser.push(list[i]);
        } else {
            greater.push(list[i]);
        }
    }
//        console.log(qSort(lesser).concat(pivot, qSort(greater)));
    return qSort2(lesser).concat(pivot, qSort2(greater));
}


// 聚集相同元素 就是在划分的时候在分出一个与基准值相同的值的数组(对于有大量相同的元素的数组 提升很大)
function qSort3(list) {

    if (list.length === 0) {
        return [];
    }
    const lesser = [];
    const greater = [];
    medianOfThree(list);
    const pivot = [list[0]];

    if (list.length <= 10) {
        return insertionSort(list)
    }

    // 从第一个元素开始 因为第一个值为基准值 如果只剩基准值(递归的最末则不会进这个循环)
    for (let i = 1; i < list.length; i++) {
        if (list[i] === pivot[0]) {
            pivot.push(list[i])
        } else if (list[i] < pivot[0]) {
            lesser.push(list[i]);
        } else {
            greater.push(list[i]);
        }
    }
//        console.log(qSort(lesser).concat(pivot, qSort(greater)));
    return qSort3(lesser).concat(pivot, qSort3(greater));

}


let testArr1 = generateRandomArr(1000000);
const myTest1 = test.bind({}, testArr1);


console.log("\n高级排序算法 100000个元素");
myTest1(shellSortWithStaticGaps, "希尔排序固定间隔(Ciura 序列)");
myTest1(shellSortWithDynamicGaps, "希尔排序动态间隔");
myTest1(mergeSort, "归并排序");
myTest1(qSort, "快速排序");
myTest1(qSort1, "快速排序+三数取中");
myTest1(qSort2, "快速排序+三数取中+插入排序");
myTest1(qSort3, "快速排序+三数取中+插入排序+聚集相等元素");


myTest1(nativeSort, "原生排序(似乎是快速排序)");
