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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
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
            }
            else {
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
            }
            else {
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
assert_1.default.deepStrictEqual(findDiagonalOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), [
    1,
    2,
    4,
    7,
    5,
    3,
    6,
    8,
    9
]);
assert_1.default.deepStrictEqual(findDiagonalOrder([["00", "01"], ["10", "11"], ["20", "21"]]), ["00", "01", "10", "20", "11", "21"]);
assert_1.default.deepStrictEqual(findDiagonalOrder([["00", "01", "02"], ["10", "11", "12"]]), ["00", "01", "10", "11", "02", "12"]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDk4LuWvueinkue6v+mBjeWOhi5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNDk4LuWvueinkue6v+mBjeWOhi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXdCSTtBQUNKOzs7R0FHRzs7Ozs7QUFFSCxJQUFJLGlCQUFpQixHQUFHLFVBQVMsTUFBZTtJQUM5QyxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDbEIsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtRQUN0QixPQUFPLE1BQU0sQ0FBQztLQUNmO0lBQ0QsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUN4QixNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBRTNCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNWLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNWLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzlCLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekIsdUNBQXVDO1FBQ3ZDLHNCQUFzQjtRQUN0QixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDcEIsT0FBTztZQUNQLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2QsQ0FBQyxFQUFFLENBQUM7YUFDTDtZQUNELE9BQU87aUJBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNmLENBQUMsRUFBRSxDQUFDO2FBQ0w7aUJBQU07Z0JBQ0wsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osQ0FBQyxFQUFFLENBQUM7YUFDTDtTQUNGO1FBQ0Qsc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNwQixPQUFPO1lBQ1AsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDZCxDQUFDLEVBQUUsQ0FBQzthQUNMO1lBQ0QsT0FBTztpQkFDRixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2YsQ0FBQyxFQUFFLENBQUM7YUFDTDtpQkFBTTtnQkFDTCxDQUFDLEVBQUUsQ0FBQztnQkFDSixDQUFDLEVBQUUsQ0FBQzthQUNMO1NBQ0Y7S0FDRjtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMsQ0FBQztBQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXdERTtBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFbEUsZ0JBQU0sQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEUsZ0JBQU0sQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDM0UsQ0FBQztJQUNELENBQUM7SUFDRCxDQUFDO0lBQ0QsQ0FBQztJQUNELENBQUM7SUFDRCxDQUFDO0lBQ0QsQ0FBQztJQUNELENBQUM7SUFDRCxDQUFDO0NBQ0YsQ0FBQyxDQUFDO0FBQ0gsZ0JBQU0sQ0FBQyxlQUFlLENBQ3BCLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUM3RCxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQ3JDLENBQUM7QUFDRixnQkFBTSxDQUFDLGVBQWUsQ0FDcEIsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFDM0QsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUNyQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxu57uZ5a6a5LiA5Liq5ZCr5pyJIE0geCBOIOS4quWFg+e0oOeahOefqemYte+8iE0g6KGM77yMTiDliJfvvInvvIzor7fku6Xlr7nop5Lnur/pgY3ljobnmoTpobrluo/ov5Tlm57ov5nkuKrnn6npmLXkuK3nmoTmiYDmnInlhYPntKDvvIzlr7nop5Lnur/pgY3ljoblpoLkuIvlm77miYDnpLrjgIJcclxuXHJcbsKgXHJcblxyXG7npLrkvos6XHJcblxyXG7ovpPlhaU6XHJcbltcclxuIFsgMSwgMiwgMyBdLFxyXG4gWyA0LCA1LCA2IF0sXHJcbiBbIDcsIDgsIDkgXVxyXG5dXHJcblxyXG7ovpPlh7o6ICBbMSwyLDQsNyw1LDMsNiw4LDldXHJcblxyXG7op6Pph4o6XHJcblxyXG7CoFxyXG5cclxu6K+05piOOlxyXG5cclxu57uZ5a6a55+p6Zi15Lit55qE5YWD57Sg5oC75pWw5LiN5Lya6LaF6L+HIDEwMDAwMCDjgIJcclxuXHJcbiogKi9cclxuLyoqXHJcbiAqIEBwYXJhbSB7bnVtYmVyW11bXX0gbWF0cml4XHJcbiAqIEByZXR1cm4ge251bWJlcltdfVxyXG4gKi9cclxuXHJcbnZhciBmaW5kRGlhZ29uYWxPcmRlciA9IGZ1bmN0aW9uKG1hdHJpeDogYW55W11bXSkge1xyXG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gIGlmIChtYXRyaXgubGVuZ3RoID09IDApIHtcclxuICAgIHJldHVybiBtYXRyaXg7XHJcbiAgfVxyXG4gIGNvbnN0IG0gPSBtYXRyaXgubGVuZ3RoO1xyXG4gIGNvbnN0IG4gPSBtYXRyaXhbMF0ubGVuZ3RoO1xyXG5cclxuICBsZXQgeSA9IDA7XHJcbiAgbGV0IHggPSAwO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbSAqIG47IGkrKykge1xyXG4gICAgcmVzdWx0W2ldID0gbWF0cml4W3ldW3hdO1xyXG4gICAgLy8g55SoIHIgKyBjIOS9hiDlpYflgbbliKTmlq0g5LiN5ZCM55qEIOaWnOihjCjnp5LllYog6Iez5bCR55yB5LqGIDIg5Liq5Y+Y6YePKVxyXG4gICAgLy8g5ZyoIOS4iiDmiJYg5Y+zIOW8gOWniyDkuIsg5oiWIOW3piDnu5PmnZ9cclxuICAgIGlmICgoeSArIHgpICUgMiA9PSAwKSB7XHJcbiAgICAgIC8vIOWIsOi+vuS4i+i+uVxyXG4gICAgICBpZiAoeCA9PSBuIC0gMSkge1xyXG4gICAgICAgIHkrKztcclxuICAgICAgfVxyXG4gICAgICAvLyDliLDovr7lt6bovrlcclxuICAgICAgZWxzZSBpZiAoeSA9PSAwKSB7XHJcbiAgICAgICAgeCsrO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHktLTtcclxuICAgICAgICB4Kys7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIOWcqCDkuIsg5oiWIOW3piDlvIDlp4sg5LiKIOaIliDlj7Mg57uT5p2fXHJcbiAgICBpZiAoKHkgKyB4KSAlIDIgIT0gMCkge1xyXG4gICAgICAvLyDliLDovr7kuIvovrlcclxuICAgICAgaWYgKHkgPT0gbSAtIDEpIHtcclxuICAgICAgICB4Kys7XHJcbiAgICAgIH1cclxuICAgICAgLy8g5Yiw6L6+5bem6L65XHJcbiAgICAgIGVsc2UgaWYgKHggPT0gMCkge1xyXG4gICAgICAgIHkrKztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB5Kys7XHJcbiAgICAgICAgeC0tO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbi8qXHJcbnZhciBmaW5kRGlhZ29uYWxPcmRlciA9IGZ1bmN0aW9uIChtYXRyaXg6IGFueVtdW10pIHtcclxuICAgIGlmIChtYXRyaXgubGVuZ3RoID09PSAwIHx8IG1hdHJpeFswXS5sZW5ndGggPT09IDApIHJldHVybiBbXTtcclxuICAgIGlmIChtYXRyaXgubGVuZ3RoID09PSAxKSByZXR1cm4gbWF0cml4WzBdO1xyXG4gICAgaWYgKG1hdHJpeFswXS5sZW5ndGggPT09IDEpIHJldHVybiBtYXRyaXgubWFwKChbdl0pID0+IHYpO1xyXG5cclxuICAgIC8vIOS7o+ihqCDlgZrliqDms5Ug6L+Y5piv5YGa5YeP5rOVXHJcbiAgICBsZXQgc2lnbiA9IC0xO1xyXG4gICAgbGV0IGNvbHVtbiA9IDA7XHJcbiAgICBsZXQgcm93ID0gMDtcclxuICAgIGNvbnN0IGNvbHVtbl9sZW5ndGggPSBtYXRyaXgubGVuZ3RoO1xyXG4gICAgY29uc3Qgcm93X2xlbmd0aCA9IG1hdHJpeFswXS5sZW5ndGg7XHJcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgIGxldCBjYW5OZXh0RWxlbWVudE9uQm9yZGVyID0gdHJ1ZTtcclxuICAgIHdoaWxlICh0cnVlKSB7XHJcblxyXG4gICAgICAgIHJlc3VsdC5wdXNoKG1hdHJpeFtjb2x1bW5dW3Jvd10pO1xyXG4gICAgICAgIGlmIChjb2x1bW4gPT09IGNvbHVtbl9sZW5ndGggLSAxICYmIHJvdyA9PT0gcm93X2xlbmd0aCAtIDEpIHJldHVybiByZXN1bHQ7XHJcblxyXG4gICAgICAgIC8vIOWIsOi+vuS6hiDlm5vmnaHovrnnmoTmn5DmnaHovrnkuIpcclxuICAgICAgICBpZiAoY2FuTmV4dEVsZW1lbnRPbkJvcmRlciAmJiAoY29sdW1uID09PSAwIHx8IHJvdyA9PT0gMCB8fCBjb2x1bW4gPT09IGNvbHVtbl9sZW5ndGggLSAxIHx8IHJvdyA9PT0gcm93X2xlbmd0aCAtIDEpKSB7XHJcbiAgICAgICAgICAgIC8vIOWIh+aNouWIsCDkuIvkuIDkuKog5L2N572u5LiKXHJcbiAgICAgICAgICAgIC8vIOW3puS4iuinkiDlkJHlj7Pnp7vliqhcclxuICAgICAgICAgICAgY2FuTmV4dEVsZW1lbnRPbkJvcmRlciA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoY29sdW1uID09PSAwICYmIHJvdyA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcm93Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8g5bem5LiL6KeSIOWQkeWPs+enu+WKqFxyXG4gICAgICAgICAgICBlbHNlIGlmIChjb2x1bW4gPT09IGNvbHVtbl9sZW5ndGggLSAxICYmIHJvdyA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcm93Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8g5Y+z5LiK6KeSIOWQkeS4i+enu+WKqFxyXG4gICAgICAgICAgICBlbHNlIGlmIChjb2x1bW4gPT09IDAgJiYgcm93ID09PSByb3dfbGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgY29sdW1uKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8g5ZyoIOS4iui+uSDmiJYg5LiL6L65IOWQkeWPs+enu+WKqFxyXG4gICAgICAgICAgICBlbHNlIGlmIChjb2x1bW4gPT09IDAgfHwgY29sdW1uID09PSBjb2x1bW5fbGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgcm93Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8g5ZyoIOW3pui+uSDmiJYg5Y+z6L65IOWQkeS4i+enu+WKqFxyXG4gICAgICAgICAgICBlbHNlIGlmIChyb3cgPT09IDAgfHwgcm93ID09PSByb3dfbGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgY29sdW1uKys7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCLkuI3lrZjlnKjnmoTkvY3nva5cIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNpZ24gKj0gLTE7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcm93IC09IHNpZ247XHJcbiAgICAgICAgY29sdW1uICs9IHNpZ247XHJcbiAgICAgICAgY2FuTmV4dEVsZW1lbnRPbkJvcmRlciA9IHRydWU7XHJcblxyXG4gICAgfVxyXG59O1xyXG4qL1xyXG5cclxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XHJcblxyXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKGZpbmREaWFnb25hbE9yZGVyKFtbMSwgMiwgM11dKSwgWzEsIDIsIDNdKTtcclxuXHJcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoZmluZERpYWdvbmFsT3JkZXIoW1sxXSwgWzJdLCBbM11dKSwgWzEsIDIsIDNdKTtcclxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChmaW5kRGlhZ29uYWxPcmRlcihbWzEsIDIsIDNdLCBbNCwgNSwgNl0sIFs3LCA4LCA5XV0pLCBbXHJcbiAgMSxcclxuICAyLFxyXG4gIDQsXHJcbiAgNyxcclxuICA1LFxyXG4gIDMsXHJcbiAgNixcclxuICA4LFxyXG4gIDlcclxuXSk7XHJcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXHJcbiAgZmluZERpYWdvbmFsT3JkZXIoW1tcIjAwXCIsIFwiMDFcIl0sIFtcIjEwXCIsIFwiMTFcIl0sIFtcIjIwXCIsIFwiMjFcIl1dKSxcclxuICBbXCIwMFwiLCBcIjAxXCIsIFwiMTBcIiwgXCIyMFwiLCBcIjExXCIsIFwiMjFcIl1cclxuKTtcclxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcclxuICBmaW5kRGlhZ29uYWxPcmRlcihbW1wiMDBcIiwgXCIwMVwiLCBcIjAyXCJdLCBbXCIxMFwiLCBcIjExXCIsIFwiMTJcIl1dKSxcclxuICBbXCIwMFwiLCBcIjAxXCIsIFwiMTBcIiwgXCIxMVwiLCBcIjAyXCIsIFwiMTJcIl1cclxuKTtcclxuIl19