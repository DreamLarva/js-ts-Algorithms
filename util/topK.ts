export function nthElement(
  results: number[],
  left: number,
  kth: number,
  right: number
) {
  // 只有一个值的时候
  if (left === right) {
    return;
  }
  const pivot = Math.floor(Math.random() * (right - left) + left);
  // 随意找出一个值 与最右侧的值交换 作为标杆
  swap(results, pivot, right);
  // 三路划分（three-way partition）
  let sepl = left - 1, // 左指针
    sepr = left - 1; // 右指针

  for (let i = left; i <= right; i++) {
    if (results[i] > results[right]) {
      // 如果当前值 大于 标杆
      // 两个指针都向右 移一位
      // 右指针 与 i 交换
      swap(results, ++sepr, i);
      // 左指针 与 右指针交换
      swap(results, ++sepl, sepr);
    } else if (results[i] === results[right]) {
      // 与 标杆 相同
      // 则 右指针 向右
      // 与 i 位置交换
      swap(results, ++sepr, i);
    }
  }
  // 一轮结束
  // 结果是 左指针 左侧的都小于 左指针

  if (sepl < left + kth && left + kth <= sepr) {
    return;
  } else if (left + kth <= sepl) {
    // 左指针落在 第k大之后, 左侧需要 再进行一轮
    nthElement(results, left, kth, sepl);
  } else {
    // 左指针 落在 第k大之前 则右侧 需要再进行一轮
    nthElement(results, sepr + 1, kth - (sepr - left + 1), right);
  }
}

const swap = (results: number[], index1: number, index2: number) => {
  if (index1 === index2) return;
  const temp = results[index1];
  results[index1] = results[index2];
  results[index2] = temp;
};

// const data = [1, 4, 2, 3, 1, 5, 2, 0, 5, 0];
// const k = 3; // 第3大
// nthElement(data, 0, k - 1, data.length - 1);
// console.log(data[k - 1]);
