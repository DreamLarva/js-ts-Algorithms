// 交换两个数组的元素
export function swap(arr: number[], index1: number, index2: number) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  return arr;
}
