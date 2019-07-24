/*
堆（英语：heap)是计算机科学中一类特殊的数据结构的统称。堆通常是一个可以被看做一棵树的数组对象。
堆总是满足下列性质：
    堆中某个节点的值总是不大于或不小于其父节点的值；
    堆总是一棵完全二叉树。
    将根节点最大的堆叫做最大堆或大根堆，根节点最小的堆叫做最小堆或小根堆。常见的堆有二叉堆、斐波那契堆等。
    堆是非线性数据结构，相当于一维数组，有两个直接后继。
    堆的定义如下：n个元素的序列{k1,k2,ki,…,kn}当且仅当满足下关系时，称之为堆。
    (ki <= k2i,ki <= k2i+1)或者(ki >= k2i,ki >= k2i+1), (i = 1,2,3,4...n/2)

    若将和此次序列对应的一维数组（即以一维数组作此序列的存储结构）看成是一个完全二叉树，
    则堆的含义表明，完全二叉树中所有非终端结点的值均不大于（或不小于）其左、右孩子结点的值。
    由此，若序列{k1,k2,…,kn}是堆，则堆顶元素（或完全二叉树的根）必为序列中n个元素的最小值（或最大值）。

堆的用途 :
 1. 堆排序
 2. 大顶堆(最大堆) : 可以轻松获取 第 n 大的数 ;小顶堆(最小堆) : 可以轻松获取 第 n 小的数
* */


/**
 * 将无序数组堆化
 * 有两种算法
 * 1. SiftUp 算法  O(nlogn)
 * 2. SiftDown 算法   O(n)
 * */
export function heapifyWithSiftUp(A: number[]) {
    for (let i = 0; i < A.length; i++) {
        siftUp(A, i);
    }
    return A;
}

export function siftUp(A: number[], k: number) {
    // 此处是 最小堆
    while (k != 0) {
        // 找到父节点
        const father = Math.floor((k - 1) / 2);
        // 如果父节点 > 新加入的节点 符合 堆 结束 该轮
        if (A[k] > A[father]) {
            break;
        }
        // 反之 那么 交换两个节点
        [A[k], A[father]] = [A[father], A[k]];

        // 现在 现在新加入的节点 现在在 原来的父节点上
        k = father;
    }
}

export function heapifyWithSiftDown(A: number[]) {
    // 初始选择最接近叶子的一个父结点
    for (let i = Math.floor((A.length - 1) / 2); i >= 0; i--) {
        siftDown(A, i);
    }

    return A;
}

export function siftDown(A: number[], k: number) {
    // 此处是 最小堆
    while (k * 2 + 1 < A.length) {
        let son = k * 2 + 1;
        // 与其两个儿子中较小的一个比较
        if (k * 2 + 2 < A.length && A[son] > A[k * 2 + 2]) {
            son = k * 2 + 2;
        }

        // 若大于儿子，则与儿子交换。
        if (A[son] > A[k]) {
            break;
        }
        [A[son], A[k]] = [A[k], A[son]];
        // 交换后再与新的儿子比较并交换，直至没有儿子。
        k = son;
    }
}

/**
 * 用于验证数组 是不是一个堆
 * */
export function validHeap(arr: number[]) {
    if (arr.length <= 2) return true;
    // 也就是符合 (ki <= k2i,ki <= k2i+1)或者(ki >= k2i,ki >= k2i+1), (i = 1,2,3,4...n/2) i 是 从1 开始的
    // 直接通过 第一 和 第二个 元素 判断是 最大堆 还是最小堆
    let type = arr[0] > arr[1] ? 'MaxHeap' : 'MinHeap';

    for (let i = 0; i < arr.length; i++) {
        const awaitForCompare = [arr[i]];
        [2 * (i + 1) - 1, 2 * (i + 1) - 1 + 1].forEach(index => {
            if (index < arr.length) {
                awaitForCompare.push(arr[index]);
            }
        });
        if (type === "MaxHeap") {
            if (Math.max(...awaitForCompare) !== arr[i]) {
                return false;
            }
        } else {
            if (Math.min(...awaitForCompare) !== arr[i]) {
                return false;
            }
        }
    }

    return true;
}

import assert from 'assert';
import _ from 'lodash';


assert.ok(validHeap([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
assert.ok(validHeap([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
assert.ok(validHeap([10, 7, 2, 5, 1]));
assert.ok(validHeap([1, 5, 2, 7, 10]));
assert.strictEqual(validHeap([1, 5, 2, 7, 10, 1]), false);

assert.ok(validHeap(
    heapifyWithSiftUp(
        _.shuffle([2, 2, 1, 1, 4, 5, 6, 7, 8, 9, 0, 1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2]),
    ),
));

assert.ok(validHeap(
    heapifyWithSiftDown(
        _.shuffle([2, 2, 1, 1, 4, 5, 6, 7, 8, 9, 0, 1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2]),
    ),
));

/*

import Benchmark from "benchmark";

const suite = new Benchmark.Suite;
suite
    .add('heapifyWithSiftUp', function () {
        heapifyWithSiftUp([2, 2, 1, 1, 4, 5, 6, 7, 8, 9, 0, 1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2]);
    })
    .add('heapifyWithSiftDown', function () {
        heapifyWithSiftDown([2, 2, 1, 1, 4, 5, 6, 7, 8, 9, 0, 1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2]);
    })
    .on('cycle', function (event: Benchmark.Event) {
        console.log(String(event.target));
    })
    .on('complete', function (this: any) {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({'async': false});

*/
