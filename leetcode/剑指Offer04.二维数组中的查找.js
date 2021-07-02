"use strict";
/*
剑指 Offer 04. 二维数组中的查找
在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。



示例:

现有矩阵 matrix 如下：

[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
给定 target = 5，返回 true。

给定 target = 20，返回 false。



限制：

0 <= n <= 1000

0 <= m <= 1000



注意：本题与主站 240 题相同：https://leetcode-cn.com/problems/search-a-2d-matrix-ii/
* */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
由于给定的二维数组具备每行从左到右递增以及每列从上到下递增的特点，当访问到一个元素时，可以排除数组中的部分元素。

从二维数组的右上角开始查找。如果当前元素等于目标值，则返回 true。
如果当前元素大于目标值，则移到左边一列。如果当前元素小于目标值，则移到下边一行。

可以证明这种方法不会错过目标值。
如果当前元素大于目标值，说明当前元素的下边的所有元素都一定大于目标值，因此往下查找不可能找到目标值，往左查找可能找到目标值。
如果当前元素小于目标值，说明当前元素的左边的所有元素都一定小于目标值，因此往左查找不可能找到目标值，往下查找可能找到目标值。

若数组为空，返回 false
初始化行下标为 0，列下标为二维数组的列数减 1
重复下列步骤，直到行下标或列下标超出边界
获得当前下标位置的元素 num
如果 num 和 target 相等，返回 true
如果 num 大于 target，列下标减 1
如果 num 小于 target，行下标加 1
循环体执行完毕仍未找到元素等于 target ，说明不存在这样的元素，返回 false`
* */
function findNumberIn2DArray(matrix, target) {
    if (matrix.length === 0)
        return false;
    const xLength = matrix[0].length;
    // 其实既可以从 左下开始 , 也可以从右上开始
    let y = matrix.length - 1;
    let x = 0;
    while (y >= 0 && x <= xLength - 1) {
        const current = matrix[y][x];
        if (current === target)
            return true;
        if (current < target)
            x++;
        else
            y--;
    }
    return false;
}
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(findNumberIn2DArray([
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30],
], 5), true);
assert_1.default.strictEqual(findNumberIn2DArray([
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30],
], 20), false);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoi5YmR5oyHT2ZmZXIwNC7kuoznu7TmlbDnu4TkuK3nmoTmn6Xmib4uanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlL+WJkeaMh09mZmVyMDQu5LqM57u05pWw57uE5Lit55qE5p+l5om+LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFnQ0k7Ozs7O0FBRUo7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWtCSTtBQUNKLFNBQVMsbUJBQW1CLENBQUMsTUFBa0IsRUFBRSxNQUFjO0lBQzdELElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDO1FBQUUsT0FBTyxLQUFLLENBQUM7SUFDdEMsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUVqQyx5QkFBeUI7SUFDekIsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDMUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRVYsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxPQUFPLEdBQUcsQ0FBQyxFQUFFO1FBQ2pDLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLE9BQU8sS0FBSyxNQUFNO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDcEMsSUFBSSxPQUFPLEdBQUcsTUFBTTtZQUFFLENBQUMsRUFBRSxDQUFDOztZQUNyQixDQUFDLEVBQUUsQ0FBQztLQUNWO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDO0FBRUQsb0RBQTRCO0FBQzVCLGdCQUFNLENBQUMsV0FBVyxDQUNoQixtQkFBbUIsQ0FDakI7SUFDRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7SUFDakIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0lBQ2pCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztJQUNqQixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7SUFDcEIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0NBQ3JCLEVBQ0QsQ0FBQyxDQUNGLEVBQ0QsSUFBSSxDQUNMLENBQUM7QUFDRixnQkFBTSxDQUFDLFdBQVcsQ0FDaEIsbUJBQW1CLENBQ2pCO0lBQ0UsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0lBQ2pCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztJQUNqQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7SUFDakIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0lBQ3BCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztDQUNyQixFQUNELEVBQUUsQ0FDSCxFQUNELEtBQUssQ0FDTixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbuWJkeaMhyBPZmZlciAwNC4g5LqM57u05pWw57uE5Lit55qE5p+l5om+XG7lnKjkuIDkuKogbiAqIG0g55qE5LqM57u05pWw57uE5Lit77yM5q+P5LiA6KGM6YO95oyJ54Wn5LuO5bem5Yiw5Y+z6YCS5aKe55qE6aG65bqP5o6S5bqP77yM5q+P5LiA5YiX6YO95oyJ54Wn5LuO5LiK5Yiw5LiL6YCS5aKe55qE6aG65bqP5o6S5bqP44CC6K+35a6M5oiQ5LiA5Liq6auY5pWI55qE5Ye95pWw77yM6L6T5YWl6L+Z5qC355qE5LiA5Liq5LqM57u05pWw57uE5ZKM5LiA5Liq5pW05pWw77yM5Yik5pat5pWw57uE5Lit5piv5ZCm5ZCr5pyJ6K+l5pW05pWw44CCXG5cblxuXG7npLrkvos6XG5cbueOsOacieefqemYtSBtYXRyaXgg5aaC5LiL77yaXG5cbltcbiAgWzEsICAgNCwgIDcsIDExLCAxNV0sXG4gIFsyLCAgIDUsICA4LCAxMiwgMTldLFxuICBbMywgICA2LCAgOSwgMTYsIDIyXSxcbiAgWzEwLCAxMywgMTQsIDE3LCAyNF0sXG4gIFsxOCwgMjEsIDIzLCAyNiwgMzBdXG5dXG7nu5nlrpogdGFyZ2V0ID0gNe+8jOi/lOWbniB0cnVl44CCXG5cbue7meWumiB0YXJnZXQgPSAyMO+8jOi/lOWbniBmYWxzZeOAglxuXG5cblxu6ZmQ5Yi277yaXG5cbjAgPD0gbiA8PSAxMDAwXG5cbjAgPD0gbSA8PSAxMDAwXG5cblxuXG7ms6jmhI/vvJrmnKzpopjkuI7kuLvnq5kgMjQwIOmimOebuOWQjO+8mmh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL3NlYXJjaC1hLTJkLW1hdHJpeC1paS9cbiogKi9cblxuLypcbueUseS6jue7meWumueahOS6jOe7tOaVsOe7hOWFt+Wkh+avj+ihjOS7juW3puWIsOWPs+mAkuWinuS7peWPiuavj+WIl+S7juS4iuWIsOS4i+mAkuWinueahOeJueeCue+8jOW9k+iuv+mXruWIsOS4gOS4quWFg+e0oOaXtu+8jOWPr+S7peaOkumZpOaVsOe7hOS4reeahOmDqOWIhuWFg+e0oOOAglxuXG7ku47kuoznu7TmlbDnu4TnmoTlj7PkuIrop5LlvIDlp4vmn6Xmib7jgILlpoLmnpzlvZPliY3lhYPntKDnrYnkuo7nm67moIflgLzvvIzliJnov5Tlm54gdHJ1ZeOAglxu5aaC5p6c5b2T5YmN5YWD57Sg5aSn5LqO55uu5qCH5YC877yM5YiZ56e75Yiw5bem6L655LiA5YiX44CC5aaC5p6c5b2T5YmN5YWD57Sg5bCP5LqO55uu5qCH5YC877yM5YiZ56e75Yiw5LiL6L655LiA6KGM44CCXG5cbuWPr+S7peivgeaYjui/meenjeaWueazleS4jeS8mumUmei/h+ebruagh+WAvOOAglxu5aaC5p6c5b2T5YmN5YWD57Sg5aSn5LqO55uu5qCH5YC877yM6K+05piO5b2T5YmN5YWD57Sg55qE5LiL6L6555qE5omA5pyJ5YWD57Sg6YO95LiA5a6a5aSn5LqO55uu5qCH5YC877yM5Zug5q2k5b6A5LiL5p+l5om+5LiN5Y+v6IO95om+5Yiw55uu5qCH5YC877yM5b6A5bem5p+l5om+5Y+v6IO95om+5Yiw55uu5qCH5YC844CCXG7lpoLmnpzlvZPliY3lhYPntKDlsI/kuo7nm67moIflgLzvvIzor7TmmI7lvZPliY3lhYPntKDnmoTlt6bovrnnmoTmiYDmnInlhYPntKDpg73kuIDlrprlsI/kuo7nm67moIflgLzvvIzlm6DmraTlvoDlt6bmn6Xmib7kuI3lj6/og73mib7liLDnm67moIflgLzvvIzlvoDkuIvmn6Xmib7lj6/og73mib7liLDnm67moIflgLzjgIJcblxu6Iul5pWw57uE5Li656m677yM6L+U5ZueIGZhbHNlXG7liJ3lp4vljJbooYzkuIvmoIfkuLogMO+8jOWIl+S4i+agh+S4uuS6jOe7tOaVsOe7hOeahOWIl+aVsOWHjyAxXG7ph43lpI3kuIvliJfmraXpqqTvvIznm7TliLDooYzkuIvmoIfmiJbliJfkuIvmoIfotoXlh7rovrnnlYxcbuiOt+W+l+W9k+WJjeS4i+agh+S9jee9rueahOWFg+e0oCBudW1cbuWmguaenCBudW0g5ZKMIHRhcmdldCDnm7jnrYnvvIzov5Tlm54gdHJ1ZVxu5aaC5p6cIG51bSDlpKfkuo4gdGFyZ2V077yM5YiX5LiL5qCH5YePIDFcbuWmguaenCBudW0g5bCP5LqOIHRhcmdldO+8jOihjOS4i+agh+WKoCAxXG7lvqrnjq/kvZPmiafooYzlrozmr5Xku43mnKrmib7liLDlhYPntKDnrYnkuo4gdGFyZ2V0IO+8jOivtOaYjuS4jeWtmOWcqOi/meagt+eahOWFg+e0oO+8jOi/lOWbniBmYWxzZWBcbiogKi9cbmZ1bmN0aW9uIGZpbmROdW1iZXJJbjJEQXJyYXkobWF0cml4OiBudW1iZXJbXVtdLCB0YXJnZXQ6IG51bWJlcik6IGJvb2xlYW4ge1xuICBpZiAobWF0cml4Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIGZhbHNlO1xuICBjb25zdCB4TGVuZ3RoID0gbWF0cml4WzBdLmxlbmd0aDtcblxuICAvLyDlhbblrp7ml6Llj6/ku6Xku44g5bem5LiL5byA5aeLICwg5Lmf5Y+v5Lul5LuO5Y+z5LiK5byA5aeLXG4gIGxldCB5ID0gbWF0cml4Lmxlbmd0aCAtIDE7XG4gIGxldCB4ID0gMDtcblxuICB3aGlsZSAoeSA+PSAwICYmIHggPD0geExlbmd0aCAtIDEpIHtcbiAgICBjb25zdCBjdXJyZW50ID0gbWF0cml4W3ldW3hdO1xuICAgIGlmIChjdXJyZW50ID09PSB0YXJnZXQpIHJldHVybiB0cnVlO1xuICAgIGlmIChjdXJyZW50IDwgdGFyZ2V0KSB4Kys7XG4gICAgZWxzZSB5LS07XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuYXNzZXJ0LnN0cmljdEVxdWFsKFxuICBmaW5kTnVtYmVySW4yREFycmF5KFxuICAgIFtcbiAgICAgIFsxLCA0LCA3LCAxMSwgMTVdLFxuICAgICAgWzIsIDUsIDgsIDEyLCAxOV0sXG4gICAgICBbMywgNiwgOSwgMTYsIDIyXSxcbiAgICAgIFsxMCwgMTMsIDE0LCAxNywgMjRdLFxuICAgICAgWzE4LCAyMSwgMjMsIDI2LCAzMF0sXG4gICAgXSxcbiAgICA1XG4gICksXG4gIHRydWVcbik7XG5hc3NlcnQuc3RyaWN0RXF1YWwoXG4gIGZpbmROdW1iZXJJbjJEQXJyYXkoXG4gICAgW1xuICAgICAgWzEsIDQsIDcsIDExLCAxNV0sXG4gICAgICBbMiwgNSwgOCwgMTIsIDE5XSxcbiAgICAgIFszLCA2LCA5LCAxNiwgMjJdLFxuICAgICAgWzEwLCAxMywgMTQsIDE3LCAyNF0sXG4gICAgICBbMTgsIDIxLCAyMywgMjYsIDMwXSxcbiAgICBdLFxuICAgIDIwXG4gICksXG4gIGZhbHNlXG4pO1xuIl19