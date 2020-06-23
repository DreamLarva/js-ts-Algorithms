import { swap } from "./util";

// 冒泡排序
// 每次相邻的像个元素比较(如果靠前的元素>靠后的元素就交换位置)
export default function bubbleSort(arr: number[]) {
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
