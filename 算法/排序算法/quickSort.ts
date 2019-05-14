import {swap} from "./util";
import insertionSort from "./insertionSort";

/**
 * 快速排序
 * 它是一种分而治之的算法，通过递归的方式将数据依次分解为包含较小元素和较大元素的不同子序列。
 * 该算法不断重复这个步骤直到所有数据都是有序的。
 * 这个算法首先要在列表中选择一个元素作为基准值（pivot）。
 * 数据排序围绕基准值进行，将列表中小于基准值的元素移到数组的底部，将大于基准值的元素移到数组的顶部。
 * */
export function qSort(list: number[]): number[] {
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
    // console.log(qSort(lesser).concat(pivot, qSort(greater)));
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

export function qSort1(list: number[]): number[] {
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
export function medianOfThree(arr: number[]) {
    const high = arr.length - 1,
        low = 0,
        mid = (low + (high - low)) >> 1;

    // ts 又立功了
    // 使用三数取中法选择枢轴
    if (arr[0] > arr[high]) {
        // 目标: arr[mid] <= arr[high]
        swap(arr, mid, high);
    }
    if (arr[low] > arr[high]) {
        // 目标: arr[low] <= arr[high]
        swap(arr, low, high);
    }
    if (arr[mid] > arr[low]) {
        // 目标: arr[low] >= arr[mid]
        swap(arr, mid, low);
    }
}

// 当待排序的数组的长度<=10 就是用插入排序
export function qSort2(list: number[]): number[] {
    if (list.length === 0) {
        return [];
    }
    const lesser = [];
    const greater = [];
    medianOfThree(list);
    const pivot = list[0];

    if (list.length <= 10) {
        return insertionSort(list);
    }

    // 从第一个元素开始 因为第一个值为基准值 如果只剩基准值(递归的最末则不会进这个循环)
    for (let i = 1; i < list.length; i++) {
        if (list[i] < pivot) {
            lesser.push(list[i]);
        } else {
            greater.push(list[i]);
        }
    }
    // console.log(qSort(lesser).concat(pivot, qSort(greater)));
    return qSort2(lesser).concat(pivot, qSort2(greater));
}

// 聚集相同元素 就是在划分的时候在分出一个与基准值相同的值的数组(对于有大量相同的元素的数组 提升很大)
export function qSort3(list: number[]): number[] {
    if (list.length === 0) {
        return [];
    }
    const lesser = [];
    const greater = [];
    medianOfThree(list);
    const pivot = [list[0]];

    if (list.length <= 10) {
        return insertionSort(list);
    }

    // 从第一个元素开始 因为第一个值为基准值 如果只剩基准值(递归的最末则不会进这个循环)
    for (let i = 1; i < list.length; i++) {
        if (list[i] === pivot[0]) {
            pivot.push(list[i]);
        } else if (list[i] < pivot[0]) {
            lesser.push(list[i]);
        } else {
            greater.push(list[i]);
        }
    }
    // console.log(qSort(lesser).concat(pivot, qSort(greater)));
    return qSort3(lesser).concat(pivot, qSort3(greater));
}
