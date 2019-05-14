import {swap} from "./util";
// 选择排序
// 从头开始,将数组的第一个元素和其他元素进行对比,检查完所有元素后,将最小的元素放到数组第一个的位置,然后算法会从第二个位置继续
export default function selectionSort(arr: number[]) {
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
