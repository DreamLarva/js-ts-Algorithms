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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDk4LuWvueinkue6v+mBjeWOhi5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNDk4LuWvueinkue6v+mBjeWOhi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXdCSTtBQUNKOzs7R0FHRzs7Ozs7QUFFSCxJQUFJLGlCQUFpQixHQUFHLFVBQVMsTUFBZTtJQUM5QyxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDbEIsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtRQUN0QixPQUFPLE1BQU0sQ0FBQztLQUNmO0lBQ0QsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUN4QixNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBRTNCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNWLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNWLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzlCLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekIsdUNBQXVDO1FBQ3ZDLHNCQUFzQjtRQUN0QixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDcEIsT0FBTztZQUNQLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2QsQ0FBQyxFQUFFLENBQUM7YUFDTDtZQUNELE9BQU87aUJBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNmLENBQUMsRUFBRSxDQUFDO2FBQ0w7aUJBQU07Z0JBQ0wsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osQ0FBQyxFQUFFLENBQUM7YUFDTDtTQUNGO1FBQ0Qsc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNwQixPQUFPO1lBQ1AsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDZCxDQUFDLEVBQUUsQ0FBQzthQUNMO1lBQ0QsT0FBTztpQkFDRixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2YsQ0FBQyxFQUFFLENBQUM7YUFDTDtpQkFBTTtnQkFDTCxDQUFDLEVBQUUsQ0FBQztnQkFDSixDQUFDLEVBQUUsQ0FBQzthQUNMO1NBQ0Y7S0FDRjtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMsQ0FBQztBQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXdERTtBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFbEUsZ0JBQU0sQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEUsZ0JBQU0sQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDM0UsQ0FBQztJQUNELENBQUM7SUFDRCxDQUFDO0lBQ0QsQ0FBQztJQUNELENBQUM7SUFDRCxDQUFDO0lBQ0QsQ0FBQztJQUNELENBQUM7SUFDRCxDQUFDO0NBQ0YsQ0FBQyxDQUFDO0FBQ0gsZ0JBQU0sQ0FBQyxlQUFlLENBQ3BCLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUM3RCxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQ3JDLENBQUM7QUFDRixnQkFBTSxDQUFDLGVBQWUsQ0FDcEIsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFDM0QsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUNyQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue7meWumuS4gOS4quWQq+aciSBNIHggTiDkuKrlhYPntKDnmoTnn6npmLXvvIhNIOihjO+8jE4g5YiX77yJ77yM6K+35Lul5a+56KeS57q/6YGN5Y6G55qE6aG65bqP6L+U5Zue6L+Z5Liq55+p6Zi15Lit55qE5omA5pyJ5YWD57Sg77yM5a+56KeS57q/6YGN5Y6G5aaC5LiL5Zu+5omA56S644CCXG5cbsKgXG5cbuekuuS+izpcblxu6L6T5YWlOlxuW1xuIFsgMSwgMiwgMyBdLFxuIFsgNCwgNSwgNiBdLFxuIFsgNywgOCwgOSBdXG5dXG5cbui+k+WHujogIFsxLDIsNCw3LDUsMyw2LDgsOV1cblxu6Kej6YeKOlxuXG7CoFxuXG7or7TmmI46XG5cbue7meWumuefqemYteS4reeahOWFg+e0oOaAu+aVsOS4jeS8mui2hei/hyAxMDAwMDAg44CCXG5cbiogKi9cbi8qKlxuICogQHBhcmFtIHtudW1iZXJbXVtdfSBtYXRyaXhcbiAqIEByZXR1cm4ge251bWJlcltdfVxuICovXG5cbnZhciBmaW5kRGlhZ29uYWxPcmRlciA9IGZ1bmN0aW9uKG1hdHJpeDogYW55W11bXSkge1xuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgaWYgKG1hdHJpeC5sZW5ndGggPT0gMCkge1xuICAgIHJldHVybiBtYXRyaXg7XG4gIH1cbiAgY29uc3QgbSA9IG1hdHJpeC5sZW5ndGg7XG4gIGNvbnN0IG4gPSBtYXRyaXhbMF0ubGVuZ3RoO1xuXG4gIGxldCB5ID0gMDtcbiAgbGV0IHggPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG0gKiBuOyBpKyspIHtcbiAgICByZXN1bHRbaV0gPSBtYXRyaXhbeV1beF07XG4gICAgLy8g55SoIHIgKyBjIOS9hiDlpYflgbbliKTmlq0g5LiN5ZCM55qEIOaWnOihjCjnp5LllYog6Iez5bCR55yB5LqGIDIg5Liq5Y+Y6YePKVxuICAgIC8vIOWcqCDkuIog5oiWIOWPsyDlvIDlp4sg5LiLIOaIliDlt6Yg57uT5p2fXG4gICAgaWYgKCh5ICsgeCkgJSAyID09IDApIHtcbiAgICAgIC8vIOWIsOi+vuS4i+i+uVxuICAgICAgaWYgKHggPT0gbiAtIDEpIHtcbiAgICAgICAgeSsrO1xuICAgICAgfVxuICAgICAgLy8g5Yiw6L6+5bem6L65XG4gICAgICBlbHNlIGlmICh5ID09IDApIHtcbiAgICAgICAgeCsrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgeS0tO1xuICAgICAgICB4Kys7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIOWcqCDkuIsg5oiWIOW3piDlvIDlp4sg5LiKIOaIliDlj7Mg57uT5p2fXG4gICAgaWYgKCh5ICsgeCkgJSAyICE9IDApIHtcbiAgICAgIC8vIOWIsOi+vuS4i+i+uVxuICAgICAgaWYgKHkgPT0gbSAtIDEpIHtcbiAgICAgICAgeCsrO1xuICAgICAgfVxuICAgICAgLy8g5Yiw6L6+5bem6L65XG4gICAgICBlbHNlIGlmICh4ID09IDApIHtcbiAgICAgICAgeSsrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgeSsrO1xuICAgICAgICB4LS07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuLypcbnZhciBmaW5kRGlhZ29uYWxPcmRlciA9IGZ1bmN0aW9uIChtYXRyaXg6IGFueVtdW10pIHtcbiAgICBpZiAobWF0cml4Lmxlbmd0aCA9PT0gMCB8fCBtYXRyaXhbMF0ubGVuZ3RoID09PSAwKSByZXR1cm4gW107XG4gICAgaWYgKG1hdHJpeC5sZW5ndGggPT09IDEpIHJldHVybiBtYXRyaXhbMF07XG4gICAgaWYgKG1hdHJpeFswXS5sZW5ndGggPT09IDEpIHJldHVybiBtYXRyaXgubWFwKChbdl0pID0+IHYpO1xuXG4gICAgLy8g5Luj6KGoIOWBmuWKoOazlSDov5jmmK/lgZrlh4/ms5VcbiAgICBsZXQgc2lnbiA9IC0xO1xuICAgIGxldCBjb2x1bW4gPSAwO1xuICAgIGxldCByb3cgPSAwO1xuICAgIGNvbnN0IGNvbHVtbl9sZW5ndGggPSBtYXRyaXgubGVuZ3RoO1xuICAgIGNvbnN0IHJvd19sZW5ndGggPSBtYXRyaXhbMF0ubGVuZ3RoO1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGxldCBjYW5OZXh0RWxlbWVudE9uQm9yZGVyID0gdHJ1ZTtcbiAgICB3aGlsZSAodHJ1ZSkge1xuXG4gICAgICAgIHJlc3VsdC5wdXNoKG1hdHJpeFtjb2x1bW5dW3Jvd10pO1xuICAgICAgICBpZiAoY29sdW1uID09PSBjb2x1bW5fbGVuZ3RoIC0gMSAmJiByb3cgPT09IHJvd19sZW5ndGggLSAxKSByZXR1cm4gcmVzdWx0O1xuXG4gICAgICAgIC8vIOWIsOi+vuS6hiDlm5vmnaHovrnnmoTmn5DmnaHovrnkuIpcbiAgICAgICAgaWYgKGNhbk5leHRFbGVtZW50T25Cb3JkZXIgJiYgKGNvbHVtbiA9PT0gMCB8fCByb3cgPT09IDAgfHwgY29sdW1uID09PSBjb2x1bW5fbGVuZ3RoIC0gMSB8fCByb3cgPT09IHJvd19sZW5ndGggLSAxKSkge1xuICAgICAgICAgICAgLy8g5YiH5o2i5YiwIOS4i+S4gOS4qiDkvY3nva7kuIpcbiAgICAgICAgICAgIC8vIOW3puS4iuinkiDlkJHlj7Pnp7vliqhcbiAgICAgICAgICAgIGNhbk5leHRFbGVtZW50T25Cb3JkZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChjb2x1bW4gPT09IDAgJiYgcm93ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcm93Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDlt6bkuIvop5Ig5ZCR5Y+z56e75YqoXG4gICAgICAgICAgICBlbHNlIGlmIChjb2x1bW4gPT09IGNvbHVtbl9sZW5ndGggLSAxICYmIHJvdyA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJvdysrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g5Y+z5LiK6KeSIOWQkeS4i+enu+WKqFxuICAgICAgICAgICAgZWxzZSBpZiAoY29sdW1uID09PSAwICYmIHJvdyA9PT0gcm93X2xlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICBjb2x1bW4rKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOWcqCDkuIrovrkg5oiWIOS4i+i+uSDlkJHlj7Pnp7vliqhcbiAgICAgICAgICAgIGVsc2UgaWYgKGNvbHVtbiA9PT0gMCB8fCBjb2x1bW4gPT09IGNvbHVtbl9sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgcm93Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDlnKgg5bem6L65IOaIliDlj7Povrkg5ZCR5LiL56e75YqoXG4gICAgICAgICAgICBlbHNlIGlmIChyb3cgPT09IDAgfHwgcm93ID09PSByb3dfbGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIGNvbHVtbisrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCLkuI3lrZjlnKjnmoTkvY3nva5cIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNpZ24gKj0gLTE7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJvdyAtPSBzaWduO1xuICAgICAgICBjb2x1bW4gKz0gc2lnbjtcbiAgICAgICAgY2FuTmV4dEVsZW1lbnRPbkJvcmRlciA9IHRydWU7XG5cbiAgICB9XG59O1xuKi9cblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoZmluZERpYWdvbmFsT3JkZXIoW1sxLCAyLCAzXV0pLCBbMSwgMiwgM10pO1xuXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKGZpbmREaWFnb25hbE9yZGVyKFtbMV0sIFsyXSwgWzNdXSksIFsxLCAyLCAzXSk7XG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKGZpbmREaWFnb25hbE9yZGVyKFtbMSwgMiwgM10sIFs0LCA1LCA2XSwgWzcsIDgsIDldXSksIFtcbiAgMSxcbiAgMixcbiAgNCxcbiAgNyxcbiAgNSxcbiAgMyxcbiAgNixcbiAgOCxcbiAgOVxuXSk7XG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxuICBmaW5kRGlhZ29uYWxPcmRlcihbW1wiMDBcIiwgXCIwMVwiXSwgW1wiMTBcIiwgXCIxMVwiXSwgW1wiMjBcIiwgXCIyMVwiXV0pLFxuICBbXCIwMFwiLCBcIjAxXCIsIFwiMTBcIiwgXCIyMFwiLCBcIjExXCIsIFwiMjFcIl1cbik7XG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxuICBmaW5kRGlhZ29uYWxPcmRlcihbW1wiMDBcIiwgXCIwMVwiLCBcIjAyXCJdLCBbXCIxMFwiLCBcIjExXCIsIFwiMTJcIl1dKSxcbiAgW1wiMDBcIiwgXCIwMVwiLCBcIjEwXCIsIFwiMTFcIiwgXCIwMlwiLCBcIjEyXCJdXG4pO1xuIl19