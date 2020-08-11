"use strict";
/*
判断一个 9x9 的数独是否有效。只需要根据以下规则，验证已经填入的数字是否有效即可。

数字 1-9 在每一行只能出现一次。
数字 1-9 在每一列只能出现一次。
数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。


上图是一个部分填充的有效的数独。

数独部分空格内已填入了数字，空白格用 '.' 表示。

示例 1:

输入:
[
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
输出: true
示例 2:

输入:
[
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
输出: false
解释: 除了第一行的第一个数字从 5 改为 8 以外，空格内其他数字均与 示例1 相同。
     但由于位于左上角的 3x3 宫内有两个 8 存在, 因此这个数独是无效的。
说明:

一个有效的数独（部分已被填充）不一定是可解的。
只需要根据以上规则，验证已经填入的数字是否有效即可。
给定数独序列只包含数字 1-9 和字符 '.' 。
给定数独永远是 9x9 形式的。
* */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
function isValidSudoku(board) {
    // 存储每列的结果
    const columns = Array(9)
        .fill(0)
        .map(() => []);
    // 存储每行的结果
    const rows = Array(9)
        .fill(0)
        .map(() => []);
    // 存储每块的结果
    const blocks = Array(9)
        .fill(0)
        .map(() => []);
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            let num = board[i][j];
            if (num === ".")
                continue;
            const num_element = parseInt(num);
            const box_index = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            // 老样子 哈希表 判断重复
            rows[i][num_element] = (rows[i][num_element] || 0) + 1;
            columns[j][num_element] = (columns[j][num_element] || 0) + 1;
            blocks[box_index][num_element] =
                (blocks[box_index][num_element] || 0) + 1;
            if (rows[i][num_element] > 1 ||
                columns[j][num_element] > 1 ||
                blocks[box_index][num_element] > 1)
                return false;
        }
    }
    return true;
}
exports.default = isValidSudoku;
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]), true);
assert_1.default.strictEqual(isValidSudoku([
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]), false);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzYu5pyJ5pWI55qE5pWw54usLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8zNi7mnInmlYjnmoTmlbDni6wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWtESTs7Ozs7QUFPSixTQUF3QixhQUFhLENBQUMsS0FBd0I7SUFDNUQsVUFBVTtJQUNWLE1BQU0sT0FBTyxHQUFlLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDakMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUNQLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNqQixVQUFVO0lBQ1YsTUFBTSxJQUFJLEdBQWUsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUM5QixJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ1AsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2pCLFVBQVU7SUFDVixNQUFNLE1BQU0sR0FBZSxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ2hDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDUCxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFakIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDckMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDeEMsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksR0FBRyxLQUFLLEdBQUc7Z0JBQUUsU0FBUztZQUMxQixNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbEMsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzVELGVBQWU7WUFDZixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZELE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDN0QsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztnQkFDNUIsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRTVDLElBQ0UsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUM7Z0JBQ3hCLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDO2dCQUMzQixNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQztnQkFFbEMsT0FBTyxLQUFLLENBQUM7U0FDaEI7S0FDRjtJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQW5DRCxnQ0FtQ0M7QUFFRCxvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQ2hCLGFBQWEsQ0FBQztJQUNaLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFDN0MsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztJQUM3QyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBQzdDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFDN0MsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztJQUM3QyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBQzdDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFDN0MsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztJQUM3QyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQzlDLENBQUMsRUFDRixJQUFJLENBQ0wsQ0FBQztBQUNGLGdCQUFNLENBQUMsV0FBVyxDQUNoQixhQUFhLENBQUM7SUFDWixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBQzdDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFDN0MsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztJQUM3QyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBQzdDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFDN0MsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztJQUM3QyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBQzdDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFDN0MsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztDQUM5QyxDQUFDLEVBQ0YsS0FBSyxDQUNOLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu5Yik5pat5LiA5LiqIDl4OSDnmoTmlbDni6zmmK/lkKbmnInmlYjjgILlj6rpnIDopoHmoLnmja7ku6XkuIvop4TliJnvvIzpqozor4Hlt7Lnu4/loavlhaXnmoTmlbDlrZfmmK/lkKbmnInmlYjljbPlj6/jgIJcblxu5pWw5a2XIDEtOSDlnKjmr4/kuIDooYzlj6rog73lh7rnjrDkuIDmrKHjgIJcbuaVsOWtlyAxLTkg5Zyo5q+P5LiA5YiX5Y+q6IO95Ye6546w5LiA5qyh44CCXG7mlbDlrZcgMS05IOWcqOavj+S4gOS4quS7peeyl+Wunue6v+WIhumalOeahCAzeDMg5a6r5YaF5Y+q6IO95Ye6546w5LiA5qyh44CCXG5cblxu5LiK5Zu+5piv5LiA5Liq6YOo5YiG5aGr5YWF55qE5pyJ5pWI55qE5pWw54us44CCXG5cbuaVsOeLrOmDqOWIhuepuuagvOWGheW3suWhq+WFpeS6huaVsOWtl++8jOepuueZveagvOeUqCAnLicg6KGo56S644CCXG5cbuekuuS+iyAxOlxuXG7ovpPlhaU6XG5bXG4gIFtcIjVcIixcIjNcIixcIi5cIixcIi5cIixcIjdcIixcIi5cIixcIi5cIixcIi5cIixcIi5cIl0sXG4gIFtcIjZcIixcIi5cIixcIi5cIixcIjFcIixcIjlcIixcIjVcIixcIi5cIixcIi5cIixcIi5cIl0sXG4gIFtcIi5cIixcIjlcIixcIjhcIixcIi5cIixcIi5cIixcIi5cIixcIi5cIixcIjZcIixcIi5cIl0sXG4gIFtcIjhcIixcIi5cIixcIi5cIixcIi5cIixcIjZcIixcIi5cIixcIi5cIixcIi5cIixcIjNcIl0sXG4gIFtcIjRcIixcIi5cIixcIi5cIixcIjhcIixcIi5cIixcIjNcIixcIi5cIixcIi5cIixcIjFcIl0sXG4gIFtcIjdcIixcIi5cIixcIi5cIixcIi5cIixcIjJcIixcIi5cIixcIi5cIixcIi5cIixcIjZcIl0sXG4gIFtcIi5cIixcIjZcIixcIi5cIixcIi5cIixcIi5cIixcIi5cIixcIjJcIixcIjhcIixcIi5cIl0sXG4gIFtcIi5cIixcIi5cIixcIi5cIixcIjRcIixcIjFcIixcIjlcIixcIi5cIixcIi5cIixcIjVcIl0sXG4gIFtcIi5cIixcIi5cIixcIi5cIixcIi5cIixcIjhcIixcIi5cIixcIi5cIixcIjdcIixcIjlcIl1cbl1cbui+k+WHujogdHJ1ZVxu56S65L6LIDI6XG5cbui+k+WFpTpcbltcbiAgW1wiOFwiLFwiM1wiLFwiLlwiLFwiLlwiLFwiN1wiLFwiLlwiLFwiLlwiLFwiLlwiLFwiLlwiXSxcbiAgW1wiNlwiLFwiLlwiLFwiLlwiLFwiMVwiLFwiOVwiLFwiNVwiLFwiLlwiLFwiLlwiLFwiLlwiXSxcbiAgW1wiLlwiLFwiOVwiLFwiOFwiLFwiLlwiLFwiLlwiLFwiLlwiLFwiLlwiLFwiNlwiLFwiLlwiXSxcbiAgW1wiOFwiLFwiLlwiLFwiLlwiLFwiLlwiLFwiNlwiLFwiLlwiLFwiLlwiLFwiLlwiLFwiM1wiXSxcbiAgW1wiNFwiLFwiLlwiLFwiLlwiLFwiOFwiLFwiLlwiLFwiM1wiLFwiLlwiLFwiLlwiLFwiMVwiXSxcbiAgW1wiN1wiLFwiLlwiLFwiLlwiLFwiLlwiLFwiMlwiLFwiLlwiLFwiLlwiLFwiLlwiLFwiNlwiXSxcbiAgW1wiLlwiLFwiNlwiLFwiLlwiLFwiLlwiLFwiLlwiLFwiLlwiLFwiMlwiLFwiOFwiLFwiLlwiXSxcbiAgW1wiLlwiLFwiLlwiLFwiLlwiLFwiNFwiLFwiMVwiLFwiOVwiLFwiLlwiLFwiLlwiLFwiNVwiXSxcbiAgW1wiLlwiLFwiLlwiLFwiLlwiLFwiLlwiLFwiOFwiLFwiLlwiLFwiLlwiLFwiN1wiLFwiOVwiXVxuXVxu6L6T5Ye6OiBmYWxzZVxu6Kej6YeKOiDpmaTkuobnrKzkuIDooYznmoTnrKzkuIDkuKrmlbDlrZfku44gNSDmlLnkuLogOCDku6XlpJbvvIznqbrmoLzlhoXlhbbku5bmlbDlrZflnYfkuI4g56S65L6LMSDnm7jlkIzjgIJcbiAgICAg5L2G55Sx5LqO5L2N5LqO5bem5LiK6KeS55qEIDN4MyDlrqvlhoXmnInkuKTkuKogOCDlrZjlnKgsIOWboOatpOi/meS4quaVsOeLrOaYr+aXoOaViOeahOOAglxu6K+05piOOlxuXG7kuIDkuKrmnInmlYjnmoTmlbDni6zvvIjpg6jliIblt7LooqvloavlhYXvvInkuI3kuIDlrprmmK/lj6/op6PnmoTjgIJcbuWPqumcgOimgeagueaNruS7peS4iuinhOWIme+8jOmqjOivgeW3sue7j+Whq+WFpeeahOaVsOWtl+aYr+WQpuacieaViOWNs+WPr+OAglxu57uZ5a6a5pWw54us5bqP5YiX5Y+q5YyF5ZCr5pWw5a2XIDEtOSDlkozlrZfnrKYgJy4nIOOAglxu57uZ5a6a5pWw54us5rC46L+c5pivIDl4OSDlvaLlvI/nmoTjgIJcbiogKi9cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ1tdW119IGJvYXJkXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG50eXBlIFN1ZG9rdUVsZW1lbnQgPSBzdHJpbmcgLy8gXCIuXCIgfCBcIjFcIiB8IFwiMlwiIHwgXCIzXCIgfCBcIjRcIiB8IFwiNVwiIHwgXCI2XCIgfCBcIjdcIiB8IFwiOFwiIHwgXCI5XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1ZhbGlkU3Vkb2t1KGJvYXJkOiBTdWRva3VFbGVtZW50W11bXSkge1xuICAvLyDlrZjlgqjmr4/liJfnmoTnu5PmnpxcbiAgY29uc3QgY29sdW1uczogbnVtYmVyW11bXSA9IEFycmF5KDkpXG4gICAgLmZpbGwoMClcbiAgICAubWFwKCgpID0+IFtdKTtcbiAgLy8g5a2Y5YKo5q+P6KGM55qE57uT5p6cXG4gIGNvbnN0IHJvd3M6IG51bWJlcltdW10gPSBBcnJheSg5KVxuICAgIC5maWxsKDApXG4gICAgLm1hcCgoKSA9PiBbXSk7XG4gIC8vIOWtmOWCqOavj+Wdl+eahOe7k+aenFxuICBjb25zdCBibG9ja3M6IG51bWJlcltdW10gPSBBcnJheSg5KVxuICAgIC5maWxsKDApXG4gICAgLm1hcCgoKSA9PiBbXSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2FyZC5sZW5ndGg7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgYm9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgIGxldCBudW0gPSBib2FyZFtpXVtqXTtcbiAgICAgIGlmIChudW0gPT09IFwiLlwiKSBjb250aW51ZTtcbiAgICAgIGNvbnN0IG51bV9lbGVtZW50ID0gcGFyc2VJbnQobnVtKTtcbiAgICAgIGNvbnN0IGJveF9pbmRleCA9IE1hdGguZmxvb3IoaSAvIDMpICogMyArIE1hdGguZmxvb3IoaiAvIDMpO1xuICAgICAgLy8g6ICB5qC35a2QIOWTiOW4jOihqCDliKTmlq3ph43lpI1cbiAgICAgIHJvd3NbaV1bbnVtX2VsZW1lbnRdID0gKHJvd3NbaV1bbnVtX2VsZW1lbnRdIHx8IDApICsgMTtcbiAgICAgIGNvbHVtbnNbal1bbnVtX2VsZW1lbnRdID0gKGNvbHVtbnNbal1bbnVtX2VsZW1lbnRdIHx8IDApICsgMTtcbiAgICAgIGJsb2Nrc1tib3hfaW5kZXhdW251bV9lbGVtZW50XSA9XG4gICAgICAgIChibG9ja3NbYm94X2luZGV4XVtudW1fZWxlbWVudF0gfHwgMCkgKyAxO1xuXG4gICAgICBpZiAoXG4gICAgICAgIHJvd3NbaV1bbnVtX2VsZW1lbnRdID4gMSB8fFxuICAgICAgICBjb2x1bW5zW2pdW251bV9lbGVtZW50XSA+IDEgfHxcbiAgICAgICAgYmxvY2tzW2JveF9pbmRleF1bbnVtX2VsZW1lbnRdID4gMVxuICAgICAgKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuYXNzZXJ0LnN0cmljdEVxdWFsKFxuICBpc1ZhbGlkU3Vkb2t1KFtcbiAgICBbXCI1XCIsIFwiM1wiLCBcIi5cIiwgXCIuXCIsIFwiN1wiLCBcIi5cIiwgXCIuXCIsIFwiLlwiLCBcIi5cIl0sXG4gICAgW1wiNlwiLCBcIi5cIiwgXCIuXCIsIFwiMVwiLCBcIjlcIiwgXCI1XCIsIFwiLlwiLCBcIi5cIiwgXCIuXCJdLFxuICAgIFtcIi5cIiwgXCI5XCIsIFwiOFwiLCBcIi5cIiwgXCIuXCIsIFwiLlwiLCBcIi5cIiwgXCI2XCIsIFwiLlwiXSxcbiAgICBbXCI4XCIsIFwiLlwiLCBcIi5cIiwgXCIuXCIsIFwiNlwiLCBcIi5cIiwgXCIuXCIsIFwiLlwiLCBcIjNcIl0sXG4gICAgW1wiNFwiLCBcIi5cIiwgXCIuXCIsIFwiOFwiLCBcIi5cIiwgXCIzXCIsIFwiLlwiLCBcIi5cIiwgXCIxXCJdLFxuICAgIFtcIjdcIiwgXCIuXCIsIFwiLlwiLCBcIi5cIiwgXCIyXCIsIFwiLlwiLCBcIi5cIiwgXCIuXCIsIFwiNlwiXSxcbiAgICBbXCIuXCIsIFwiNlwiLCBcIi5cIiwgXCIuXCIsIFwiLlwiLCBcIi5cIiwgXCIyXCIsIFwiOFwiLCBcIi5cIl0sXG4gICAgW1wiLlwiLCBcIi5cIiwgXCIuXCIsIFwiNFwiLCBcIjFcIiwgXCI5XCIsIFwiLlwiLCBcIi5cIiwgXCI1XCJdLFxuICAgIFtcIi5cIiwgXCIuXCIsIFwiLlwiLCBcIi5cIiwgXCI4XCIsIFwiLlwiLCBcIi5cIiwgXCI3XCIsIFwiOVwiXSxcbiAgXSksXG4gIHRydWVcbik7XG5hc3NlcnQuc3RyaWN0RXF1YWwoXG4gIGlzVmFsaWRTdWRva3UoW1xuICAgIFtcIjhcIiwgXCIzXCIsIFwiLlwiLCBcIi5cIiwgXCI3XCIsIFwiLlwiLCBcIi5cIiwgXCIuXCIsIFwiLlwiXSxcbiAgICBbXCI2XCIsIFwiLlwiLCBcIi5cIiwgXCIxXCIsIFwiOVwiLCBcIjVcIiwgXCIuXCIsIFwiLlwiLCBcIi5cIl0sXG4gICAgW1wiLlwiLCBcIjlcIiwgXCI4XCIsIFwiLlwiLCBcIi5cIiwgXCIuXCIsIFwiLlwiLCBcIjZcIiwgXCIuXCJdLFxuICAgIFtcIjhcIiwgXCIuXCIsIFwiLlwiLCBcIi5cIiwgXCI2XCIsIFwiLlwiLCBcIi5cIiwgXCIuXCIsIFwiM1wiXSxcbiAgICBbXCI0XCIsIFwiLlwiLCBcIi5cIiwgXCI4XCIsIFwiLlwiLCBcIjNcIiwgXCIuXCIsIFwiLlwiLCBcIjFcIl0sXG4gICAgW1wiN1wiLCBcIi5cIiwgXCIuXCIsIFwiLlwiLCBcIjJcIiwgXCIuXCIsIFwiLlwiLCBcIi5cIiwgXCI2XCJdLFxuICAgIFtcIi5cIiwgXCI2XCIsIFwiLlwiLCBcIi5cIiwgXCIuXCIsIFwiLlwiLCBcIjJcIiwgXCI4XCIsIFwiLlwiXSxcbiAgICBbXCIuXCIsIFwiLlwiLCBcIi5cIiwgXCI0XCIsIFwiMVwiLCBcIjlcIiwgXCIuXCIsIFwiLlwiLCBcIjVcIl0sXG4gICAgW1wiLlwiLCBcIi5cIiwgXCIuXCIsIFwiLlwiLCBcIjhcIiwgXCIuXCIsIFwiLlwiLCBcIjdcIiwgXCI5XCJdLFxuICBdKSxcbiAgZmFsc2Vcbik7XG4iXX0=