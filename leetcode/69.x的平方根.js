"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
[69] x 的平方根

https://leetcode-cn.com/problems/sqrtx/description/

Tags: algorithms apple bloomberg facebook binary-search math

Langs: c cpp csharp golang java javascript kotlin php python python3 ruby rust scala swift

* algorithms
* Easy (34.95%)
* Total Accepted: 26.6K
* Total Submissions: 76K
* Testcase Example: '4'

实现 int sqrt(int x) 函数。

计算并返回 x 的平方根，其中 x 是非负整数。

由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。

示例 1:

输入: 4
输出: 2


示例 2:

输入: 8
输出: 2
说明: 8 的平方根是 2.82842...,
由于返回类型是整数，小数部分将被舍去。

*/
/**
 * 牛顿迭代法
 * */
var mySqrt = function (x) {
  let y = 1.0;
  while (Math.abs(0.5 * (y + x / y) - y) >= 0.00001) {
    y = 0.5 * (y + x / y);
  }
  return ~~y;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjkueOeahOW5s+aWueaguS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNjkueOeahOW5s+aWueaguS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBa0NFO0FBQ0Y7O0tBRUs7QUFDTCxJQUFJLE1BQU0sR0FBRyxVQUFVLENBQVM7SUFDOUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQ1osT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksT0FBTyxFQUFFO1FBQ2pELENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQ3ZCO0lBQ0QsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2IsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbls2OV0geCDnmoTlubPmlrnmoLlcblxuaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvc3FydHgvZGVzY3JpcHRpb24vXG5cblRhZ3M6IGFsZ29yaXRobXMgYXBwbGUgYmxvb21iZXJnIGZhY2Vib29rIGJpbmFyeS1zZWFyY2ggbWF0aFxuXG5MYW5nczogYyBjcHAgY3NoYXJwIGdvbGFuZyBqYXZhIGphdmFzY3JpcHQga290bGluIHBocCBweXRob24gcHl0aG9uMyBydWJ5IHJ1c3Qgc2NhbGEgc3dpZnRcblxuKiBhbGdvcml0aG1zXG4qIEVhc3kgKDM0Ljk1JSlcbiogVG90YWwgQWNjZXB0ZWQ6IDI2LjZLXG4qIFRvdGFsIFN1Ym1pc3Npb25zOiA3NktcbiogVGVzdGNhc2UgRXhhbXBsZTogJzQnXG5cbuWunueOsCBpbnQgc3FydChpbnQgeCkg5Ye95pWw44CCXG5cbuiuoeeul+W5tui/lOWbniB4IOeahOW5s+aWueague+8jOWFtuS4rSB4IOaYr+mdnui0n+aVtOaVsOOAglxuXG7nlLHkuo7ov5Tlm57nsbvlnovmmK/mlbTmlbDvvIznu5Pmnpzlj6rkv53nlZnmlbTmlbDnmoTpg6jliIbvvIzlsI/mlbDpg6jliIblsIbooqvoiI3ljrvjgIJcblxu56S65L6LIDE6XG5cbui+k+WFpTogNFxu6L6T5Ye6OiAyXG5cblxu56S65L6LIDI6XG5cbui+k+WFpTogOFxu6L6T5Ye6OiAyXG7or7TmmI46IDgg55qE5bmz5pa55qC55pivIDIuODI4NDIuLi4sXG7nlLHkuo7ov5Tlm57nsbvlnovmmK/mlbTmlbDvvIzlsI/mlbDpg6jliIblsIbooqvoiI3ljrvjgIJcblxuKi9cbi8qKlxuICog54mb6aG/6L+t5Luj5rOVXG4gKiAqL1xudmFyIG15U3FydCA9IGZ1bmN0aW9uICh4OiBudW1iZXIpIHtcbiAgbGV0IHkgPSAxLjA7XG4gIHdoaWxlIChNYXRoLmFicygwLjUgKiAoeSArIHggLyB5KSAtIHkpID49IDAuMDAwMDEpIHtcbiAgICB5ID0gMC41ICogKHkgKyB4IC8geSk7XG4gIH1cbiAgcmV0dXJuIH5+eTtcbn07XG5cbmV4cG9ydCB7fTtcbiJdfQ==
