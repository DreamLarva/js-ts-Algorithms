import insertionSort from "./insertionSort";
import selectionSort from "./selectionSort";
import bubbleSort from "./bubbleSort";

import mergeSort from "./mergeSort";
import {shellSortWithDynamicGaps, shellSortWithStaticGaps} from "./shellSort";
import {qSort, qSort1, qSort2, qSort3} from "./quickSort";

// 测试用随机数组
function generateRandomArr(length: number) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * length));
    }
    return arr;
}

// 复制一个数组
function paste<T>(arr: T[]): T[] {
    return arr.slice();
}

// 检验结果是否正确
function isRight<T>(arr: number[]) {
    return arr.every((v, i, a) => {
        if (i === arr.length - 1) {
            return true;
        }
        return v <= a[i + 1];
    });
}

type SortFunction = (arr: number[], compareFn?: (a: number, b: number) => number) => any

// 测试消耗时间
function test(arr: number[], fun: SortFunction, str: string) {
    let testArr = paste(arr);
    // var start = new Date().getTime();
    console.time(str);
    if (str === "nativeSort(quickSort)") {
        fun(testArr, (a, b) => a - b);
    } else {
        const _arr = fun(testArr);
        testArr = Array.isArray(_arr) ? _arr : testArr;
    }

    console.timeEnd(str);
    console.log(`result:${isRight(testArr)}`);
    return testArr;
}

let testArr = generateRandomArr(10000);
const myTest = test.bind({}, testArr);
// 测试原生
// 反柯里化
const unCurrying = function (fn: Function) {
    return function () {
        const args = [].slice.call(arguments, 1);
        return fn.apply(arguments[0], args);
    };
};

let nativeSort = unCurrying(Array.prototype.sort);
// 基本排序算法
console.log("Basic sorting algorithm 10000 elements");

myTest(bubbleSort, "bubbleSort");
myTest(insertionSort, "insertionSort");
myTest(selectionSort, "selectionSort");
myTest(nativeSort, "nativeSort(quickSort)");

console.log("-----------------------");

let testArr1 = generateRandomArr(1000000);
const myTest1 = test.bind({}, testArr1);


console.log("Advanced orting algorithm 100000 elements");
myTest1(shellSortWithStaticGaps, "希尔排序固定间隔(Ciura 序列)");
myTest1(shellSortWithDynamicGaps, "希尔排序动态间隔");
myTest1(mergeSort, "归并排序");
myTest1(qSort, "快速排序");
myTest1(qSort1, "快速排序+三数取中");
myTest1(qSort2, "快速排序+三数取中+插入排序");
myTest1(qSort3, "快速排序+三数取中+插入排序+聚集相等元素");
myTest1(nativeSort, "nativeSort(quickSort)");

