"use strict";
/*
给你一个整数数组 arr 。

现需要从数组中取三个下标 i、j 和 k ，其中 (0 <= i < j <= k < arr.length) 。

a 和 b 定义如下：

a = arr[i] ^ arr[i + 1] ^ ... ^ arr[j - 1]
b = arr[j] ^ arr[j + 1] ^ ... ^ arr[k]
注意：^ 表示 按位异或 操作。

请返回能够令 a == b 成立的三元组 (i, j , k) 的数目。



示例 1：

输入：arr = [2,3,1,6,7]
输出：4
解释：满足题意的三元组分别是 (0,1,2), (0,2,2), (2,3,4) 以及 (2,4,4)
示例 2：

输入：arr = [1,1,1,1,1]
输出：10
示例 3：

输入：arr = [2,3]
输出：0
示例 4：

输入：arr = [1,3,5,7,9]
输出：3
示例 5：

输入：arr = [7,11,12,9,5,2,7,17,22]
输出：8


提示：

1 <= arr.length <= 300
1 <= arr[i] <= 10^8

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * 前提
 * a ^ b = 0; 则 a = b
 * a ^ 0 = a
 * n 个数 取 ^ 后等于0 ; 则 分成任意数量的 2分, 每份的所有值取^ , 两份异或后的值相等
 * 则 length 为 n 的数组符合每项异或为0, 则有  n-1中组合
 *
 * 如 a[i] ^ a[i+1] = n 且 a[j] ^ a[j + 1] ^ ... a[k] = n
 * 则 a[j] ^ a[j + 1] ^ ... a[k] = 0
 * */
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 朴实的三重循环
 * */
function countTriplets(arr) {
  // 从左向右 累积异或的值
  const accumulationXorArr = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    accumulationXorArr.push(accumulationXorArr[i - 1] ^ arr[i]);
  }
  let result = 0;
  for (let i = 0; i < accumulationXorArr.length - 1; i++) {
    for (let j = i + 1; j < accumulationXorArr.length; j++) {
      for (let k = j; k < accumulationXorArr.length; k++) {
        const a =
          accumulationXorArr[j - 1] ^ (i === 0 ? 0 : accumulationXorArr[i - 1]);
        const b = accumulationXorArr[k] ^ accumulationXorArr[j - 1];
        if (a === b) {
          result++;
        }
      }
    }
  }
  return result;
}
/**
 * 添加 累积异或后 每次遇到按相同值的处理
 * * */
function countTriplets2(arr) {
  // 从左向右 累积异或的值
  const accumulationXorArr = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    accumulationXorArr.push(accumulationXorArr[i - 1] ^ arr[i]);
  }
  let result = 0;
  // 存储相同的 累积异或的值的 索引
  const map = {};
  // 处理最 index = 0 的值 , 如果 累积异或的值 为 0 ,就是从最左侧开始有一个匹配
  map[0] = [-1];
  for (let i = 0; i < accumulationXorArr.length; i++) {
    const curXor = accumulationXorArr[i];
    if (map[curXor] == null) {
      map[curXor] = [i];
    } else {
      for (let j = 0; j < map[curXor].length; j++) {
        result += i - map[curXor][j] - 1;
      }
      map[curXor].push(i);
    }
  }
  return result;
}
function countTriplets3(arr) {
  const cnt = new Map(),
    total = new Map();
  let ans = 0,
    s = 0;
  for (const [k, val] of arr.entries()) {
    const t = s ^ val;
    if (cnt.has(t)) {
      ans += cnt.get(t) * k - total.get(t);
    }
    cnt.set(s, (cnt.get(s) ?? 0) + 1);
    total.set(s, (total.get(s) ?? 0) + k);
    s = t;
  }
  return ans;
}
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(countTriplets([2, 3, 1, 6, 7]), 4);
assert_1.default.strictEqual(countTriplets([1, 3, 5, 7, 9]), 3);
assert_1.default.strictEqual(countTriplets([1, 1, 1, 1, 1]), 10);
assert_1.default.strictEqual(countTriplets2([2, 3, 1, 6, 7]), 4);
assert_1.default.strictEqual(countTriplets2([1, 3, 5, 7, 9]), 3);
assert_1.default.strictEqual(countTriplets2([1, 1, 1, 1, 1]), 10);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQ0Mi7lvaLmiJDkuKTkuKrlvILmiJbnm7jnrYnmlbDnu4TnmoTkuInlhYPnu4TmlbDnm64uanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzE0NDIu5b2i5oiQ5Lik5Liq5byC5oiW55u4562J5pWw57uE55qE5LiJ5YWD57uE5pWw55uuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQThDSTtBQUNKOzs7Ozs7Ozs7S0FTSzs7Ozs7QUFFTDs7S0FFSztBQUNMLFNBQVMsYUFBYSxDQUFDLEdBQWE7SUFDbEMsY0FBYztJQUNkLE1BQU0sa0JBQWtCLEdBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNuQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzdEO0lBRUQsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGtCQUFrQixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDdEQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdEQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGtCQUFrQixDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDbEQsTUFBTSxDQUFDLEdBQ0wsa0JBQWtCLENBQUMsQ0FB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u4QgYXJyIOOAglxuXG7njrDpnIDopoHku47mlbDnu4TkuK3lj5bkuInkuKrkuIvmoIcgaeOAgWog5ZKMIGsg77yM5YW25LitICgwIDw9IGkgPCBqIDw9IGsgPCBhcnIubGVuZ3RoKSDjgIJcblxuYSDlkowgYiDlrprkuYnlpoLkuIvvvJpcblxuYSA9IGFycltpXSBeIGFycltpICsgMV0gXiAuLi4gXiBhcnJbaiAtIDFdXG5iID0gYXJyW2pdIF4gYXJyW2ogKyAxXSBeIC4uLiBeIGFycltrXVxu5rOo5oSP77yaXiDooajnpLog5oyJ5L2N5byC5oiWIOaTjeS9nOOAglxuXG7or7fov5Tlm57og73lpJ/ku6QgYSA9PSBiIOaIkOeri+eahOS4ieWFg+e7hCAoaSwgaiAsIGspIOeahOaVsOebruOAglxuXG5cblxu56S65L6LIDHvvJpcblxu6L6T5YWl77yaYXJyID0gWzIsMywxLDYsN11cbui+k+WHuu+8mjRcbuino+mHiu+8mua7oei2s+mimOaEj+eahOS4ieWFg+e7hOWIhuWIq+aYryAoMCwxLDIpLCAoMCwyLDIpLCAoMiwzLDQpIOS7peWPiiAoMiw0LDQpXG7npLrkvosgMu+8mlxuXG7ovpPlhaXvvJphcnIgPSBbMSwxLDEsMSwxXVxu6L6T5Ye677yaMTBcbuekuuS+iyAz77yaXG5cbui+k+WFpe+8mmFyciA9IFsyLDNdXG7ovpPlh7rvvJowXG7npLrkvosgNO+8mlxuXG7ovpPlhaXvvJphcnIgPSBbMSwzLDUsNyw5XVxu6L6T5Ye677yaM1xu56S65L6LIDXvvJpcblxu6L6T5YWl77yaYXJyID0gWzcsMTEsMTIsOSw1LDIsNywxNywyMl1cbui+k+WHuu+8mjhcblxuXG7mj5DnpLrvvJpcblxuMSA8PSBhcnIubGVuZ3RoIDw9IDMwMFxuMSA8PSBhcnJbaV0gPD0gMTBeOFxuXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvY291bnQtdHJpcGxldHMtdGhhdC1jYW4tZm9ybS10d28tYXJyYXlzLW9mLWVxdWFsLXhvclxu6JGX5L2c5p2D5b2S6aKG5omj572R57uc5omA5pyJ44CC5ZWG5Lia6L2s6L296K+36IGU57O75a6Y5pa55o6I5p2D77yM6Z2e5ZWG5Lia6L2s6L296K+35rOo5piO5Ye65aSE44CCXG4qICovXG4vKipcbiAqIOWJjeaPkFxuICogYSBeIGIgPSAwOyDliJkgYSA9IGJcbiAqIGEgXiAwID0gYVxuICogbiDkuKrmlbAg5Y+WIF4g5ZCO562J5LqOMCA7IOWImSDliIbmiJDku7vmhI/mlbDph4/nmoQgMuWIhiwg5q+P5Lu955qE5omA5pyJ5YC85Y+WXiAsIOS4pOS7veW8guaIluWQjueahOWAvOebuOetiVxuICog5YiZIGxlbmd0aCDkuLogbiDnmoTmlbDnu4TnrKblkIjmr4/pobnlvILmiJbkuLowLCDliJnmnIkgIG4tMeS4ree7hOWQiFxuICpcbiAqIOWmgiBhW2ldIF4gYVtpKzFdID0gbiDkuJQgYVtqXSBeIGFbaiArIDFdIF4gLi4uIGFba10gPSBuXG4gKiDliJkgYVtqXSBeIGFbaiArIDFdIF4gLi4uIGFba10gPSAwXG4gKiAqL1xuXG4vKipcbiAqIOactOWunueahOS4iemHjeW+queOr1xuICogKi9cbmZ1bmN0aW9uIGNvdW50VHJpcGxldHMoYXJyOiBudW1iZXJbXSkge1xuICAvLyDku47lt6blkJHlj7Mg57Sv56ev5byC5oiW55qE5YC8XG4gIGNvbnN0IGFjY3VtdWxhdGlvblhvckFycjogbnVtYmVyW10gPSBbYXJyWzBdXTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICBhY2N1bXVsYXRpb25Yb3JBcnIucHVzaChhY2N1bXVsYXRpb25Yb3JBcnJbaSAtIDFdIF4gYXJyW2ldKTtcbiAgfVxuXG4gIGxldCByZXN1bHQgPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFjY3VtdWxhdGlvblhvckFyci5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gaSArIDE7IGogPCBhY2N1bXVsYXRpb25Yb3JBcnIubGVuZ3RoOyBqKyspIHtcbiAgICAgIGZvciAobGV0IGsgPSBqOyBrIDwgYWNjdW11bGF0aW9uWG9yQXJyLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIGNvbnN0IGEgPVxuICAgICAgICAgIGFjY3VtdWxhdGlvblhvckFycltqIC0gMV0gXiAoaSA9PT0gMCA/IDAgOiBhY2N1bXVsYXRpb25Yb3JBcnJbaSAtIDFdKTtcbiAgICAgICAgY29uc3QgYiA9IGFjY3VtdWxhdGlvblhvckFycltrXSBeIGFjY3VtdWxhdGlvblhvckFycltqIC0gMV07XG4gICAgICAgIGlmIChhID09PSBiKSB7XG4gICAgICAgICAgcmVzdWx0Kys7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIOa3u+WKoCDntK/np6/lvILmiJblkI4g5q+P5qyh6YGH5Yiw5oyJ55u45ZCM5YC855qE5aSE55CGXG4gKiAqICovXG5mdW5jdGlvbiBjb3VudFRyaXBsZXRzMihhcnI6IG51bWJlcltdKSB7XG4gIC8vIOS7juW3puWQkeWPsyDntK/np6/lvILmiJbnmoTlgLxcbiAgY29uc3QgYWNjdW11bGF0aW9uWG9yQXJyOiBudW1iZXJbXSA9IFthcnJbMF1dO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIGFjY3VtdWxhdGlvblhvckFyci5wdXNoKGFjY3VtdWxhdGlvblhvckFycltpIC0gMV0gXiBhcnJbaV0pO1xuICB9XG5cbiAgbGV0IHJlc3VsdCA9IDA7XG4gIC8vIOWtmOWCqOebuOWQjOeahCDntK/np6/lvILmiJbnmoTlgLznmoQg57Si5byVXG4gIGNvbnN0IG1hcDogeyBba2V5OiBudW1iZXJdOiBudW1iZXJbXSB9ID0ge307XG4gIC8vIOWkhOeQhuacgCBpbmRleCA9IDAg55qE5YC8ICwg5aaC5p6cIOe0r+enr+W8guaIlueahOWAvCDkuLogMCAs5bCx5piv5LuO5pyA5bem5L6n5byA5aeL5pyJ5LiA5Liq5Yy56YWNXG4gIG1hcFswXSA9IFstMV07XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY2N1bXVsYXRpb25Yb3JBcnIubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBjdXJYb3IgPSBhY2N1bXVsYXRpb25Yb3JBcnJbaV07XG4gICAgaWYgKG1hcFtjdXJYb3JdID09IG51bGwpIHtcbiAgICAgIG1hcFtjdXJYb3JdID0gW2ldO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1hcFtjdXJYb3JdLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHJlc3VsdCArPSBpIC0gbWFwW2N1clhvcl1bal0gLSAxO1xuICAgICAgfVxuICAgICAgbWFwW2N1clhvcl0ucHVzaChpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbmZ1bmN0aW9uIGNvdW50VHJpcGxldHMzKGFycjogbnVtYmVyW10pIHtcbiAgY29uc3QgY250ID0gbmV3IE1hcCgpLCB0b3RhbCA9IG5ldyBNYXAoKTtcbiAgbGV0IGFucyA9IDAsIHMgPSAwO1xuXG4gIGZvciAoY29uc3QgW2ssIHZhbF0gb2YgYXJyLmVudHJpZXMoKSkge1xuICAgIGNvbnN0IHQgPSBzIF4gdmFsO1xuICAgIGlmIChjbnQuaGFzKHQpKSB7XG4gICAgICBhbnMgKz0gY250LmdldCh0KSAqIGsgLSB0b3RhbC5nZXQodCk7XG4gICAgfVxuICAgIGNudC5zZXQocywgKGNudC5nZXQocykgPz8gMCkgKyAxKTtcbiAgICB0b3RhbC5zZXQocywgKHRvdGFsLmdldChzKSA/PyAwKSArIGspO1xuICAgIHMgPSB0O1xuICB9XG4gIHJldHVybiBhbnM7XG59O1xuXG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwoY291bnRUcmlwbGV0cyhbMiwgMywgMSwgNiwgN10pLCA0KTtcbmFzc2VydC5zdHJpY3RFcXVhbChjb3VudFRyaXBsZXRzKFsxLCAzLCA1LCA3LCA5XSksIDMpO1xuYXNzZXJ0LnN0cmljdEVxdWFsKGNvdW50VHJpcGxldHMoWzEsIDEsIDEsIDEsIDFdKSwgMTApO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwoY291bnRUcmlwbGV0czIoWzIsIDMsIDEsIDYsIDddKSwgNCk7XG5hc3NlcnQuc3RyaWN0RXF1YWwoY291bnRUcmlwbGV0czIoWzEsIDMsIDUsIDcsIDldKSwgMyk7XG5hc3NlcnQuc3RyaWN0RXF1YWwoY291bnRUcmlwbGV0czIoWzEsIDEsIDEsIDEsIDFdKSwgMTApO1xuIl19
