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
assert_1.default.deepStrictEqual(findDiagonalOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]), [1, 2, 4, 7, 5, 3, 6, 8, 9]);
assert_1.default.deepStrictEqual(findDiagonalOrder([
    ["00", "01"],
    ["10", "11"],
    ["20", "21"],
]), ["00", "01", "10", "20", "11", "21"]);
assert_1.default.deepStrictEqual(findDiagonalOrder([
    ["00", "01", "02"],
    ["10", "11", "12"],
]), ["00", "01", "10", "11", "02", "12"]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDk4LuWvueinkue6v+mBjeWOhi5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNDk4LuWvueinkue6v+mBjeWOhi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXdCSTtBQUNKOzs7R0FHRzs7Ozs7QUFFSCxJQUFJLGlCQUFpQixHQUFHLFVBQVUsTUFBZTtJQUMvQyxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDbEIsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtRQUN0QixPQUFPLE1BQU0sQ0FBQztLQUNmO0lBQ0QsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUN4QixNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBRTNCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNWLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNWLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzlCLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekIsdUNBQXVDO1FBQ3ZDLHNCQUFzQjtRQUN0QixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDcEIsT0FBTztZQUNQLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2QsQ0FBQyxFQUFFLENBQUM7YUFDTDtZQUNELE9BQU87aUJBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNmLENBQUMsRUFBRSxDQUFDO2FBQ0w7aUJBQU07Z0JBQ0wsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osQ0FBQyxFQUFFLENBQUM7YUFDTDtTQUNGO1FBQ0Qsc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNwQixPQUFPO1lBQ1AsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDZCxDQUFDLEVBQUUsQ0FBQzthQUNMO1lBQ0QsT0FBTztpQkFDRixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2YsQ0FBQyxFQUFFLENBQUM7YUFDTDtpQkFBTTtnQkFDTCxDQUFDLEVBQUUsQ0FBQztnQkFDSixDQUFDLEVBQUUsQ0FBQzthQUNMO1NBQ0Y7S0FDRjtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMsQ0FBQztBQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXdERTtBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFbEUsZ0JBQU0sQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEUsZ0JBQU0sQ0FBQyxlQUFlLENBQ3BCLGlCQUFpQixDQUFDO0lBQ2hCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztDQUNWLENBQUMsRUFDRixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQzVCLENBQUM7QUFDRixnQkFBTSxDQUFDLGVBQWUsQ0FDcEIsaUJBQWlCLENBQUM7SUFDaEIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO0lBQ1osQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO0lBQ1osQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO0NBQ2IsQ0FBQyxFQUNGLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FDckMsQ0FBQztBQUNGLGdCQUFNLENBQUMsZUFBZSxDQUNwQixpQkFBaUIsQ0FBQztJQUNoQixDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO0lBQ2xCLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7Q0FDbkIsQ0FBQyxFQUNGLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FDckMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbue7meWumuS4gOS4quWQq+aciSBNIHggTiDkuKrlhYPntKDnmoTnn6npmLXvvIhNIOihjO+8jE4g5YiX77yJ77yM6K+35Lul5a+56KeS57q/6YGN5Y6G55qE6aG65bqP6L+U5Zue6L+Z5Liq55+p6Zi15Lit55qE5omA5pyJ5YWD57Sg77yM5a+56KeS57q/6YGN5Y6G5aaC5LiL5Zu+5omA56S644CCXHJcblxyXG7CoFxyXG5cclxu56S65L6LOlxyXG5cclxu6L6T5YWlOlxyXG5bXHJcbiBbIDEsIDIsIDMgXSxcclxuIFsgNCwgNSwgNiBdLFxyXG4gWyA3LCA4LCA5IF1cclxuXVxyXG5cclxu6L6T5Ye6OiAgWzEsMiw0LDcsNSwzLDYsOCw5XVxyXG5cclxu6Kej6YeKOlxyXG5cclxuwqBcclxuXHJcbuivtOaYjjpcclxuXHJcbue7meWumuefqemYteS4reeahOWFg+e0oOaAu+aVsOS4jeS8mui2hei/hyAxMDAwMDAg44CCXHJcblxyXG4qICovXHJcbi8qKlxyXG4gKiBAcGFyYW0ge251bWJlcltdW119IG1hdHJpeFxyXG4gKiBAcmV0dXJuIHtudW1iZXJbXX1cclxuICovXHJcblxyXG52YXIgZmluZERpYWdvbmFsT3JkZXIgPSBmdW5jdGlvbiAobWF0cml4OiBhbnlbXVtdKSB7XHJcbiAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgaWYgKG1hdHJpeC5sZW5ndGggPT0gMCkge1xyXG4gICAgcmV0dXJuIG1hdHJpeDtcclxuICB9XHJcbiAgY29uc3QgbSA9IG1hdHJpeC5sZW5ndGg7XHJcbiAgY29uc3QgbiA9IG1hdHJpeFswXS5sZW5ndGg7XHJcblxyXG4gIGxldCB5ID0gMDtcclxuICBsZXQgeCA9IDA7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtICogbjsgaSsrKSB7XHJcbiAgICByZXN1bHRbaV0gPSBtYXRyaXhbeV1beF07XHJcbiAgICAvLyDnlKggciArIGMg5L2GIOWlh+WBtuWIpOaWrSDkuI3lkIznmoQg5pac6KGMKOenkuWViiDoh7PlsJHnnIHkuoYgMiDkuKrlj5jph48pXHJcbiAgICAvLyDlnKgg5LiKIOaIliDlj7Mg5byA5aeLIOS4iyDmiJYg5bemIOe7k+adn1xyXG4gICAgaWYgKCh5ICsgeCkgJSAyID09IDApIHtcclxuICAgICAgLy8g5Yiw6L6+5LiL6L65XHJcbiAgICAgIGlmICh4ID09IG4gLSAxKSB7XHJcbiAgICAgICAgeSsrO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIOWIsOi+vuW3pui+uVxyXG4gICAgICBlbHNlIGlmICh5ID09IDApIHtcclxuICAgICAgICB4Kys7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgeS0tO1xyXG4gICAgICAgIHgrKztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8g5ZyoIOS4iyDmiJYg5bemIOW8gOWniyDkuIog5oiWIOWPsyDnu5PmnZ9cclxuICAgIGlmICgoeSArIHgpICUgMiAhPSAwKSB7XHJcbiAgICAgIC8vIOWIsOi+vuS4i+i+uVxyXG4gICAgICBpZiAoeSA9PSBtIC0gMSkge1xyXG4gICAgICAgIHgrKztcclxuICAgICAgfVxyXG4gICAgICAvLyDliLDovr7lt6bovrlcclxuICAgICAgZWxzZSBpZiAoeCA9PSAwKSB7XHJcbiAgICAgICAgeSsrO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHkrKztcclxuICAgICAgICB4LS07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuLypcclxudmFyIGZpbmREaWFnb25hbE9yZGVyID0gZnVuY3Rpb24gKG1hdHJpeDogYW55W11bXSkge1xyXG4gICAgaWYgKG1hdHJpeC5sZW5ndGggPT09IDAgfHwgbWF0cml4WzBdLmxlbmd0aCA9PT0gMCkgcmV0dXJuIFtdO1xyXG4gICAgaWYgKG1hdHJpeC5sZW5ndGggPT09IDEpIHJldHVybiBtYXRyaXhbMF07XHJcbiAgICBpZiAobWF0cml4WzBdLmxlbmd0aCA9PT0gMSkgcmV0dXJuIG1hdHJpeC5tYXAoKFt2XSkgPT4gdik7XHJcblxyXG4gICAgLy8g5Luj6KGoIOWBmuWKoOazlSDov5jmmK/lgZrlh4/ms5VcclxuICAgIGxldCBzaWduID0gLTE7XHJcbiAgICBsZXQgY29sdW1uID0gMDtcclxuICAgIGxldCByb3cgPSAwO1xyXG4gICAgY29uc3QgY29sdW1uX2xlbmd0aCA9IG1hdHJpeC5sZW5ndGg7XHJcbiAgICBjb25zdCByb3dfbGVuZ3RoID0gbWF0cml4WzBdLmxlbmd0aDtcclxuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgbGV0IGNhbk5leHRFbGVtZW50T25Cb3JkZXIgPSB0cnVlO1xyXG4gICAgd2hpbGUgKHRydWUpIHtcclxuXHJcbiAgICAgICAgcmVzdWx0LnB1c2gobWF0cml4W2NvbHVtbl1bcm93XSk7XHJcbiAgICAgICAgaWYgKGNvbHVtbiA9PT0gY29sdW1uX2xlbmd0aCAtIDEgJiYgcm93ID09PSByb3dfbGVuZ3RoIC0gMSkgcmV0dXJuIHJlc3VsdDtcclxuXHJcbiAgICAgICAgLy8g5Yiw6L6+5LqGIOWbm+adoei+ueeahOafkOadoei+ueS4ilxyXG4gICAgICAgIGlmIChjYW5OZXh0RWxlbWVudE9uQm9yZGVyICYmIChjb2x1bW4gPT09IDAgfHwgcm93ID09PSAwIHx8IGNvbHVtbiA9PT0gY29sdW1uX2xlbmd0aCAtIDEgfHwgcm93ID09PSByb3dfbGVuZ3RoIC0gMSkpIHtcclxuICAgICAgICAgICAgLy8g5YiH5o2i5YiwIOS4i+S4gOS4qiDkvY3nva7kuIpcclxuICAgICAgICAgICAgLy8g5bem5LiK6KeSIOWQkeWPs+enu+WKqFxyXG4gICAgICAgICAgICBjYW5OZXh0RWxlbWVudE9uQm9yZGVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmIChjb2x1bW4gPT09IDAgJiYgcm93ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByb3crKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyDlt6bkuIvop5Ig5ZCR5Y+z56e75YqoXHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNvbHVtbiA9PT0gY29sdW1uX2xlbmd0aCAtIDEgJiYgcm93ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByb3crKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyDlj7PkuIrop5Ig5ZCR5LiL56e75YqoXHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNvbHVtbiA9PT0gMCAmJiByb3cgPT09IHJvd19sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICBjb2x1bW4rKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyDlnKgg5LiK6L65IOaIliDkuIvovrkg5ZCR5Y+z56e75YqoXHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNvbHVtbiA9PT0gMCB8fCBjb2x1bW4gPT09IGNvbHVtbl9sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICByb3crKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyDlnKgg5bem6L65IOaIliDlj7Povrkg5ZCR5LiL56e75YqoXHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHJvdyA9PT0gMCB8fCByb3cgPT09IHJvd19sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICBjb2x1bW4rKztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIuS4jeWtmOWcqOeahOS9jee9rlwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2lnbiAqPSAtMTtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByb3cgLT0gc2lnbjtcclxuICAgICAgICBjb2x1bW4gKz0gc2lnbjtcclxuICAgICAgICBjYW5OZXh0RWxlbWVudE9uQm9yZGVyID0gdHJ1ZTtcclxuXHJcbiAgICB9XHJcbn07XHJcbiovXHJcblxyXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcclxuXHJcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoZmluZERpYWdvbmFsT3JkZXIoW1sxLCAyLCAzXV0pLCBbMSwgMiwgM10pO1xyXG5cclxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChmaW5kRGlhZ29uYWxPcmRlcihbWzFdLCBbMl0sIFszXV0pLCBbMSwgMiwgM10pO1xyXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxyXG4gIGZpbmREaWFnb25hbE9yZGVyKFtcclxuICAgIFsxLCAyLCAzXSxcclxuICAgIFs0LCA1LCA2XSxcclxuICAgIFs3LCA4LCA5XSxcclxuICBdKSxcclxuICBbMSwgMiwgNCwgNywgNSwgMywgNiwgOCwgOV1cclxuKTtcclxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcclxuICBmaW5kRGlhZ29uYWxPcmRlcihbXHJcbiAgICBbXCIwMFwiLCBcIjAxXCJdLFxyXG4gICAgW1wiMTBcIiwgXCIxMVwiXSxcclxuICAgIFtcIjIwXCIsIFwiMjFcIl0sXHJcbiAgXSksXHJcbiAgW1wiMDBcIiwgXCIwMVwiLCBcIjEwXCIsIFwiMjBcIiwgXCIxMVwiLCBcIjIxXCJdXHJcbik7XHJcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXHJcbiAgZmluZERpYWdvbmFsT3JkZXIoW1xyXG4gICAgW1wiMDBcIiwgXCIwMVwiLCBcIjAyXCJdLFxyXG4gICAgW1wiMTBcIiwgXCIxMVwiLCBcIjEyXCJdLFxyXG4gIF0pLFxyXG4gIFtcIjAwXCIsIFwiMDFcIiwgXCIxMFwiLCBcIjExXCIsIFwiMDJcIiwgXCIxMlwiXVxyXG4pO1xyXG4iXX0=