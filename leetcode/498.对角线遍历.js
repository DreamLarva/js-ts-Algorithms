"use strict";
/*
给定一个含有 M x N 个元素的矩阵（M 行，N 列），请以对角线遍历的顺序返回这个矩阵中的所有元素，对角线遍历如下图所示。



示例:

输入:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]

输出:  [1,2,4,7,5,3,6,8,9]

解释:



说明:

给定矩阵中的元素总数不会超过 100000 。

* */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var findDiagonalOrder = function (matrix) {
  const result = [];
  if (matrix.length == 0) {
    return matrix;
  }
  const m = matrix.length;
  const n = matrix[0].length;
  let y = 0;
  let x = 0;
  for (let i = 0; i < m * n; i++) {
    result[i] = matrix[y][x];
    // 用 r + c 但 奇偶判断 不同的 斜行(秒啊 至少省了 2 个变量)
    // 在 上 或 右 开始 下 或 左 结束
    if ((y + x) % 2 == 0) {
      // 到达下边
      if (x == n - 1) {
        y++;
      }
      // 到达左边
      else if (y == 0) {
        x++;
      } else {
        y--;
        x++;
      }
    }
    // 在 下 或 左 开始 上 或 右 结束
    if ((y + x) % 2 != 0) {
      // 到达下边
      if (y == m - 1) {
        x++;
      }
      // 到达左边
      else if (x == 0) {
        y++;
      } else {
        y++;
        x--;
      }
    }
  }
  return result;
};
/*
var findDiagonalOrder = function (matrix: any[][]) {
    if (matrix.length === 0 || matrix[0].length === 0) return [];
    if (matrix.length === 1) return matrix[0];
    if (matrix[0].length === 1) return matrix.map(([v]) => v);

    // 代表 做加法 还是做减法
    let sign = -1;
    let column = 0;
    let row = 0;
    const column_length = matrix.length;
    const row_length = matrix[0].length;
    const result = [];
    let canNextElementOnBorder = true;
    while (true) {

        result.push(matrix[column][row]);
        if (column === column_length - 1 && row === row_length - 1) return result;

        // 到达了 四条边的某条边上
        if (canNextElementOnBorder && (column === 0 || row === 0 || column === column_length - 1 || row === row_length - 1)) {
            // 切换到 下一个 位置上
            // 左上角 向右移动
            canNextElementOnBorder = false;
            if (column === 0 && row === 0) {
                row++;
            }
            // 左下角 向右移动
            else if (column === column_length - 1 && row === 0) {
                row++;
            }
            // 右上角 向下移动
            else if (column === 0 && row === row_length - 1) {
                column++;
            }
            // 在 上边 或 下边 向右移动
            else if (column === 0 || column === column_length - 1) {
                row++;
            }
            // 在 左边 或 右边 向下移动
            else if (row === 0 || row === row_length - 1) {
                column++;
            } else {
                throw new Error("不存在的位置");
            }

            sign *= -1;
            continue;
        }

        row -= sign;
        column += sign;
        canNextElementOnBorder = true;

    }
};
*/
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual(findDiagonalOrder([[1, 2, 3]]), [1, 2, 3]);
assert_1.default.deepStrictEqual(findDiagonalOrder([[1], [2], [3]]), [1, 2, 3]);
assert_1.default.deepStrictEqual(
  findDiagonalOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
  [1, 2, 4, 7, 5, 3, 6, 8, 9]
);
assert_1.default.deepStrictEqual(
  findDiagonalOrder([
    ["00", "01"],
    ["10", "11"],
    ["20", "21"],
  ]),
  ["00", "01", "10", "20", "11", "21"]
);
assert_1.default.deepStrictEqual(
  findDiagonalOrder([
    ["00", "01", "02"],
    ["10", "11", "12"],
  ]),
  ["00", "01", "10", "11", "02", "12"]
);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDk4LuWvueinkue6v+mBjeWOhi5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNDk4LuWvueinkue6v+mBjeWOhi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXdCSTtBQUNKOzs7R0FHRzs7Ozs7QUFFSCxJQUFJLGlCQUFpQixHQUFHLFVBQVUsTUFBZTtJQUMvQyxNQUFNLE1BQU0sR0FBVSxFQUFFLENBQUM7SUFDekIsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtRQUN0QixPQUFPLE1BQU0sQ0FBQztLQUNmO0lBQ0QsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUN4QixNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBRTNCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNWLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNWLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzlCLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekIsdUNBQXVDO1FBQ3ZDLHNCQUFzQjtRQUN0QixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDcEIsT0FBTztZQUNQLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2QsQ0FBQyxFQUFFLENBQUM7YUFDTDtZQUNELE9BQU87aUJBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNmLENBQUMsRUFBRSxDQUFDO2FBQ0w7aUJBQU07Z0JBQ0wsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osQ0FBQyxFQUFFLENBQUM7YUFDTDtTQUNGO1FBQ0Qsc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNwQixPQUFPO1lBQ1AsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDZCxDQUFDLEVBQUUsQ0FBQzthQUNMO1lBQ0QsT0FBTztpQkFDRixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2YsQ0FBQyxFQUFFLENBQUM7YUFDTDtpQkFBTTtnQkFDTCxDQUFDLEVBQUUsQ0FBQztnQkFDSixDQUFDLEVBQUUsQ0FBQzthQUNMO1NBQ0Y7S0FDRjtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMsQ0FBQztBQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXdERTtBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFbEUsZ0JBQU0sQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEUsZ0JBQU0sQ0FBQyxlQUFlLENBQ3BCLGlCQUFpQixDQUFDO0lBQ2hCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztDQUNWLENBQUMsRUFDRixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQzVCLENBQUM7QUFDRixnQkFBTSxDQUFDLGVBQWUsQ0FDcEIsaUJBQWlCLENBQUM7SUFDaEIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO0lBQ1osQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO0lBQ1osQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO0NBQ2IsQ0FBQyxFQUNGLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FDckMsQ0FBQztBQUNGLGdCQUFNLENBQUMsZUFBZSxDQUNwQixpQkFBaUIsQ0FBQztJQUNoQixDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO0lBQ2xCLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7Q0FDbkIsQ0FBQyxFQUNGLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FDckMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7nu5nlrprkuIDkuKrlkKvmnIkgTSB4IE4g5Liq5YWD57Sg55qE55+p6Zi177yITSDooYzvvIxOIOWIl++8ie+8jOivt+S7peWvueinkue6v+mBjeWOhueahOmhuuW6j+i/lOWbnui/meS4quefqemYteS4reeahOaJgOacieWFg+e0oO+8jOWvueinkue6v+mBjeWOhuWmguS4i+WbvuaJgOekuuOAglxuXG5cblxu56S65L6LOlxuXG7ovpPlhaU6XG5bXG4gWyAxLCAyLCAzIF0sXG4gWyA0LCA1LCA2IF0sXG4gWyA3LCA4LCA5IF1cbl1cblxu6L6T5Ye6OiAgWzEsMiw0LDcsNSwzLDYsOCw5XVxuXG7op6Pph4o6XG5cblxuXG7or7TmmI46XG5cbue7meWumuefqemYteS4reeahOWFg+e0oOaAu+aVsOS4jeS8mui2hei/hyAxMDAwMDAg44CCXG5cbiogKi9cbi8qKlxuICogQHBhcmFtIHtudW1iZXJbXVtdfSBtYXRyaXhcbiAqIEByZXR1cm4ge251bWJlcltdfVxuICovXG5cbnZhciBmaW5kRGlhZ29uYWxPcmRlciA9IGZ1bmN0aW9uIChtYXRyaXg6IGFueVtdW10pIHtcbiAgY29uc3QgcmVzdWx0OiBhbnlbXSA9IFtdO1xuICBpZiAobWF0cml4Lmxlbmd0aCA9PSAwKSB7XG4gICAgcmV0dXJuIG1hdHJpeDtcbiAgfVxuICBjb25zdCBtID0gbWF0cml4Lmxlbmd0aDtcbiAgY29uc3QgbiA9IG1hdHJpeFswXS5sZW5ndGg7XG5cbiAgbGV0IHkgPSAwO1xuICBsZXQgeCA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbSAqIG47IGkrKykge1xuICAgIHJlc3VsdFtpXSA9IG1hdHJpeFt5XVt4XTtcbiAgICAvLyDnlKggciArIGMg5L2GIOWlh+WBtuWIpOaWrSDkuI3lkIznmoQg5pac6KGMKOenkuWViiDoh7PlsJHnnIHkuoYgMiDkuKrlj5jph48pXG4gICAgLy8g5ZyoIOS4iiDmiJYg5Y+zIOW8gOWniyDkuIsg5oiWIOW3piDnu5PmnZ9cbiAgICBpZiAoKHkgKyB4KSAlIDIgPT0gMCkge1xuICAgICAgLy8g5Yiw6L6+5LiL6L65XG4gICAgICBpZiAoeCA9PSBuIC0gMSkge1xuICAgICAgICB5Kys7XG4gICAgICB9XG4gICAgICAvLyDliLDovr7lt6bovrlcbiAgICAgIGVsc2UgaWYgKHkgPT0gMCkge1xuICAgICAgICB4Kys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB5LS07XG4gICAgICAgIHgrKztcbiAgICAgIH1cbiAgICB9XG4gICAgLy8g5ZyoIOS4iyDmiJYg5bemIOW8gOWniyDkuIog5oiWIOWPsyDnu5PmnZ9cbiAgICBpZiAoKHkgKyB4KSAlIDIgIT0gMCkge1xuICAgICAgLy8g5Yiw6L6+5LiL6L65XG4gICAgICBpZiAoeSA9PSBtIC0gMSkge1xuICAgICAgICB4Kys7XG4gICAgICB9XG4gICAgICAvLyDliLDovr7lt6bovrlcbiAgICAgIGVsc2UgaWYgKHggPT0gMCkge1xuICAgICAgICB5Kys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB5Kys7XG4gICAgICAgIHgtLTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4vKlxudmFyIGZpbmREaWFnb25hbE9yZGVyID0gZnVuY3Rpb24gKG1hdHJpeDogYW55W11bXSkge1xuICAgIGlmIChtYXRyaXgubGVuZ3RoID09PSAwIHx8IG1hdHJpeFswXS5sZW5ndGggPT09IDApIHJldHVybiBbXTtcbiAgICBpZiAobWF0cml4Lmxlbmd0aCA9PT0gMSkgcmV0dXJuIG1hdHJpeFswXTtcbiAgICBpZiAobWF0cml4WzBdLmxlbmd0aCA9PT0gMSkgcmV0dXJuIG1hdHJpeC5tYXAoKFt2XSkgPT4gdik7XG5cbiAgICAvLyDku6Pooagg5YGa5Yqg5rOVIOi/mOaYr+WBmuWHj+azlVxuICAgIGxldCBzaWduID0gLTE7XG4gICAgbGV0IGNvbHVtbiA9IDA7XG4gICAgbGV0IHJvdyA9IDA7XG4gICAgY29uc3QgY29sdW1uX2xlbmd0aCA9IG1hdHJpeC5sZW5ndGg7XG4gICAgY29uc3Qgcm93X2xlbmd0aCA9IG1hdHJpeFswXS5sZW5ndGg7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgbGV0IGNhbk5leHRFbGVtZW50T25Cb3JkZXIgPSB0cnVlO1xuICAgIHdoaWxlICh0cnVlKSB7XG5cbiAgICAgICAgcmVzdWx0LnB1c2gobWF0cml4W2NvbHVtbl1bcm93XSk7XG4gICAgICAgIGlmIChjb2x1bW4gPT09IGNvbHVtbl9sZW5ndGggLSAxICYmIHJvdyA9PT0gcm93X2xlbmd0aCAtIDEpIHJldHVybiByZXN1bHQ7XG5cbiAgICAgICAgLy8g5Yiw6L6+5LqGIOWbm+adoei+ueeahOafkOadoei+ueS4ilxuICAgICAgICBpZiAoY2FuTmV4dEVsZW1lbnRPbkJvcmRlciAmJiAoY29sdW1uID09PSAwIHx8IHJvdyA9PT0gMCB8fCBjb2x1bW4gPT09IGNvbHVtbl9sZW5ndGggLSAxIHx8IHJvdyA9PT0gcm93X2xlbmd0aCAtIDEpKSB7XG4gICAgICAgICAgICAvLyDliIfmjaLliLAg5LiL5LiA5LiqIOS9jee9ruS4ilxuICAgICAgICAgICAgLy8g5bem5LiK6KeSIOWQkeWPs+enu+WKqFxuICAgICAgICAgICAgY2FuTmV4dEVsZW1lbnRPbkJvcmRlciA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKGNvbHVtbiA9PT0gMCAmJiByb3cgPT09IDApIHtcbiAgICAgICAgICAgICAgICByb3crKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOW3puS4i+inkiDlkJHlj7Pnp7vliqhcbiAgICAgICAgICAgIGVsc2UgaWYgKGNvbHVtbiA9PT0gY29sdW1uX2xlbmd0aCAtIDEgJiYgcm93ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcm93Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDlj7PkuIrop5Ig5ZCR5LiL56e75YqoXG4gICAgICAgICAgICBlbHNlIGlmIChjb2x1bW4gPT09IDAgJiYgcm93ID09PSByb3dfbGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIGNvbHVtbisrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g5ZyoIOS4iui+uSDmiJYg5LiL6L65IOWQkeWPs+enu+WKqFxuICAgICAgICAgICAgZWxzZSBpZiAoY29sdW1uID09PSAwIHx8IGNvbHVtbiA9PT0gY29sdW1uX2xlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICByb3crKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOWcqCDlt6bovrkg5oiWIOWPs+i+uSDlkJHkuIvnp7vliqhcbiAgICAgICAgICAgIGVsc2UgaWYgKHJvdyA9PT0gMCB8fCByb3cgPT09IHJvd19sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgY29sdW1uKys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIuS4jeWtmOWcqOeahOS9jee9rlwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2lnbiAqPSAtMTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcm93IC09IHNpZ247XG4gICAgICAgIGNvbHVtbiArPSBzaWduO1xuICAgICAgICBjYW5OZXh0RWxlbWVudE9uQm9yZGVyID0gdHJ1ZTtcblxuICAgIH1cbn07XG4qL1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChmaW5kRGlhZ29uYWxPcmRlcihbWzEsIDIsIDNdXSksIFsxLCAyLCAzXSk7XG5cbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoZmluZERpYWdvbmFsT3JkZXIoW1sxXSwgWzJdLCBbM11dKSwgWzEsIDIsIDNdKTtcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gIGZpbmREaWFnb25hbE9yZGVyKFtcbiAgICBbMSwgMiwgM10sXG4gICAgWzQsIDUsIDZdLFxuICAgIFs3LCA4LCA5XSxcbiAgXSksXG4gIFsxLCAyLCA0LCA3LCA1LCAzLCA2LCA4LCA5XVxuKTtcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gIGZpbmREaWFnb25hbE9yZGVyKFtcbiAgICBbXCIwMFwiLCBcIjAxXCJdLFxuICAgIFtcIjEwXCIsIFwiMTFcIl0sXG4gICAgW1wiMjBcIiwgXCIyMVwiXSxcbiAgXSksXG4gIFtcIjAwXCIsIFwiMDFcIiwgXCIxMFwiLCBcIjIwXCIsIFwiMTFcIiwgXCIyMVwiXVxuKTtcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gIGZpbmREaWFnb25hbE9yZGVyKFtcbiAgICBbXCIwMFwiLCBcIjAxXCIsIFwiMDJcIl0sXG4gICAgW1wiMTBcIiwgXCIxMVwiLCBcIjEyXCJdLFxuICBdKSxcbiAgW1wiMDBcIiwgXCIwMVwiLCBcIjEwXCIsIFwiMTFcIiwgXCIwMlwiLCBcIjEyXCJdXG4pO1xuIl19
