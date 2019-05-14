// 插入排序
// 插入排序有两个循环。外循环将数组元素挨个移动，而内循环则对外循环中选中的元素及它后面的那个元素进行比较。如果外循环中选中的元素比内循环中选中的元素小，那么数组元素会向右移动，为内循环中的这个元素腾出位置.
export default function insertionSort(arr: number[]) {
    let temp, inner;
    const len = arr.length;
    for (let outer = 1; outer < len; ++outer) {
        temp = arr[outer];
        inner = outer;
        // 内层 inner = 0表示已经匹配到了数组最左边的元素
        // 如果arr[inner - 1] < temp 自己的index++ 这个位置让给外层正在匹配的元素
        while (inner > 0 && (arr[inner - 1] >= temp)) {
            arr[inner] = arr[inner - 1];
            inner--;
        }
        arr[inner] = temp;
    }
    return arr;
}
