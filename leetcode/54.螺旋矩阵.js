"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。

示例 1:

输入:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
输出: [1,2,3,6,9,8,7,4,5]
示例 2:

输入:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
输出: [1,2,3,4,8,12,11,10,9,5,6,7]
* */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (matrix.length === 0) return [];
  const result = [];
  let layer = [
    [0, 0],
    [matrix.length - 1, matrix[0].length - 1],
  ];
  while (isExistNextLayer(layer)) {
    const [[top, left], [bottom, right]] = layer;
    const m = right - left;
    const n = bottom - top;
    // 只剩 1个点了
    if (m === 0 && n === 0) {
      result.push(matrix[top][left]);
      break;
    }
    // 只有 1 行
    if (n === 0) {
      for (let i = 0; i <= m; i++) {
        result.push(matrix[top][left + i]);
      }
      break;
    }
    // 只有 1列
    if (m === 0) {
      for (let i = 0; i <= n; i++) {
        result.push(matrix[top + i][left]);
      }
      break;
    }
    // 上边
    for (let i = 0; i < m; i++) {
      result.push(matrix[top][left + i]);
    }
    // 右边
    for (let i = 0; i < n; i++) {
      result.push(matrix[top + i][right]);
    }
    // 下边
    for (let i = 0; i < m; i++) {
      result.push(matrix[bottom][right - i]);
    }
    // 左边
    for (let i = 0; i < n; i++) {
      result.push(matrix[bottom - i][left]);
    }
    layer = [
      [top + 1, left + 1],
      [bottom - 1, right - 1],
    ];
  }
  return result;
  function isExistNextLayer([[top, left], [bottom, right]]) {
    return !(top > bottom || left > right);
  }
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual(spiralOrder([[1]]), [1]);
assert_1.default.deepStrictEqual(spiralOrder([[1, 2, 3, 4]]), [1, 2, 3, 4]);
assert_1.default.deepStrictEqual(
  spiralOrder([[1], [2], [3], [4]]),
  [1, 2, 3, 4]
);
assert_1.default.deepStrictEqual(
  spiralOrder([
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7],
  ]),
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
);
assert_1.default.deepStrictEqual(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ]),
  [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]
);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTQu6J665peL55+p6Zi1LmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS81NC7onrrml4vnn6npmLUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBcUJJO0FBQ0o7OztHQUdHO0FBQ0gsSUFBSSxXQUFXLEdBQUcsVUFBVSxNQUFrQjtJQUk1QyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQztRQUFFLE9BQU8sRUFBRSxDQUFDO0lBQ25DLE1BQU0sTUFBTSxHQUFZLEVBQUUsQ0FBQztJQUMzQixJQUFJLEtBQUssR0FBaUI7UUFDeEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ04sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztLQUMxQyxDQUFDO0lBQ0YsT0FBTyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUM5QixNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDN0MsTUFBTSxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQztRQUN2QixNQUFNLENBQUMsR0FBRyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ3ZCLFVBQVU7UUFDVixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQy9CLE1BQU07U0FDUDtRQUNELFNBQVM7UUFDVCxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDWCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNwQztZQUNELE1BQU07U0FDUDtRQUNELFFBQVE7UUFDUixJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDWCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUNwQztZQUNELE1BQU07U0FDUDtRQUVELEtBQUs7UUFDTCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3BDO1FBRUQsS0FBSztRQUNMLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDckM7UUFFRCxLQUFLO1FBQ0wsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN4QztRQUNELEtBQUs7UUFDTCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ3ZDO1FBRUQsS0FBSyxHQUFHO1lBQ04sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLElBQUksR0FBRyxDQUFDLENBQUM7WUFDbkIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUM7U0FDeEIsQ0FBQztLQUNIO0lBRUQsT0FBTyxNQUFNLENBQUM7SUFFZCxTQUFTLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQWU7UUFDcEUsT0FBTyxDQUFDLENBQUMsR0FBRyxHQUFHLE1BQU0sSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUM7SUFDekMsQ0FBQztBQUNILENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFaEQsZ0JBQU0sQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRWxFLGdCQUFNLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUV4RSxnQkFBTSxDQUFDLGVBQWUsQ0FDcEIsV0FBVyxDQUFDO0lBQ1YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDWixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNmLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2YsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Q0FDZCxDQUFDLEVBQ0YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FDeEQsQ0FBQztBQUNGLGdCQUFNLENBQUMsZUFBZSxDQUNwQixXQUFXLENBQUM7SUFDVixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNaLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1osQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7Q0FDaEIsQ0FBQyxFQUNGLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDeEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7nu5nlrprkuIDkuKrljIXlkKsgbSB4IG4g5Liq5YWD57Sg55qE55+p6Zi177yIbSDooYwsIG4g5YiX77yJ77yM6K+35oyJ54Wn6aG65pe26ZKI6J665peL6aG65bqP77yM6L+U5Zue55+p6Zi15Lit55qE5omA5pyJ5YWD57Sg44CCXG5cbuekuuS+iyAxOlxuXG7ovpPlhaU6XG5bXG4gWyAxLCAyLCAzIF0sXG4gWyA0LCA1LCA2IF0sXG4gWyA3LCA4LCA5IF1cbl1cbui+k+WHujogWzEsMiwzLDYsOSw4LDcsNCw1XVxu56S65L6LIDI6XG5cbui+k+WFpTpcbltcbiAgWzEsIDIsIDMsIDRdLFxuICBbNSwgNiwgNywgOF0sXG4gIFs5LDEwLDExLDEyXVxuXVxu6L6T5Ye6OiBbMSwyLDMsNCw4LDEyLDExLDEwLDksNSw2LDddXG4qICovXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyW11bXX0gbWF0cml4XG4gKiBAcmV0dXJuIHtudW1iZXJbXX1cbiAqL1xudmFyIHNwaXJhbE9yZGVyID0gZnVuY3Rpb24gKG1hdHJpeDogbnVtYmVyW11bXSkge1xuICB0eXBlIHZlY3RvciA9IFtudW1iZXIsIG51bWJlcl07XG4gIHR5cGUgbWF0cml4X2xheWVyID0gW3ZlY3RvciwgdmVjdG9yXTsgLy8g56ys5LiA5Liq5Z2Q5qCH5Li6IOW3puS4iiDnrKzkuozkuKrlnZDmoIfkuLrlj7PkuItcblxuICBpZiAobWF0cml4Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIFtdO1xuICBjb25zdCByZXN1bHQ6bnVtYmVyW10gPSBbXTtcbiAgbGV0IGxheWVyOiBtYXRyaXhfbGF5ZXIgPSBbXG4gICAgWzAsIDBdLFxuICAgIFttYXRyaXgubGVuZ3RoIC0gMSwgbWF0cml4WzBdLmxlbmd0aCAtIDFdLFxuICBdO1xuICB3aGlsZSAoaXNFeGlzdE5leHRMYXllcihsYXllcikpIHtcbiAgICBjb25zdCBbW3RvcCwgbGVmdF0sIFtib3R0b20sIHJpZ2h0XV0gPSBsYXllcjtcbiAgICBjb25zdCBtID0gcmlnaHQgLSBsZWZ0O1xuICAgIGNvbnN0IG4gPSBib3R0b20gLSB0b3A7XG4gICAgLy8g5Y+q5YmpIDHkuKrngrnkuoZcbiAgICBpZiAobSA9PT0gMCAmJiBuID09PSAwKSB7XG4gICAgICByZXN1bHQucHVzaChtYXRyaXhbdG9wXVtsZWZ0XSk7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgLy8g5Y+q5pyJIDEg6KGMXG4gICAgaWYgKG4gPT09IDApIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IG07IGkrKykge1xuICAgICAgICByZXN1bHQucHVzaChtYXRyaXhbdG9wXVtsZWZ0ICsgaV0pO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIC8vIOWPquaciSAx5YiXXG4gICAgaWYgKG0gPT09IDApIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IG47IGkrKykge1xuICAgICAgICByZXN1bHQucHVzaChtYXRyaXhbdG9wICsgaV1bbGVmdF0pO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgLy8g5LiK6L65XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtOyBpKyspIHtcbiAgICAgIHJlc3VsdC5wdXNoKG1hdHJpeFt0b3BdW2xlZnQgKyBpXSk7XG4gICAgfVxuXG4gICAgLy8g5Y+z6L65XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgIHJlc3VsdC5wdXNoKG1hdHJpeFt0b3AgKyBpXVtyaWdodF0pO1xuICAgIH1cblxuICAgIC8vIOS4i+i+uVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbTsgaSsrKSB7XG4gICAgICByZXN1bHQucHVzaChtYXRyaXhbYm90dG9tXVtyaWdodCAtIGldKTtcbiAgICB9XG4gICAgLy8g5bem6L65XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgIHJlc3VsdC5wdXNoKG1hdHJpeFtib3R0b20gLSBpXVtsZWZ0XSk7XG4gICAgfVxuXG4gICAgbGF5ZXIgPSBbXG4gICAgICBbdG9wICsgMSwgbGVmdCArIDFdLFxuICAgICAgW2JvdHRvbSAtIDEsIHJpZ2h0IC0gMV0sXG4gICAgXTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG5cbiAgZnVuY3Rpb24gaXNFeGlzdE5leHRMYXllcihbW3RvcCwgbGVmdF0sIFtib3R0b20sIHJpZ2h0XV06IG1hdHJpeF9sYXllcikge1xuICAgIHJldHVybiAhKHRvcCA+IGJvdHRvbSB8fCBsZWZ0ID4gcmlnaHQpO1xuICB9XG59O1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChzcGlyYWxPcmRlcihbWzFdXSksIFsxXSk7XG5cbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoc3BpcmFsT3JkZXIoW1sxLCAyLCAzLCA0XV0pLCBbMSwgMiwgMywgNF0pO1xuXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKHNwaXJhbE9yZGVyKFtbMV0sIFsyXSwgWzNdLCBbNF1dKSwgWzEsIDIsIDMsIDRdKTtcblxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAgc3BpcmFsT3JkZXIoW1xuICAgIFsxLCAyLCAzLCA0XSxcbiAgICBbMTIsIDEzLCAxNCwgNV0sXG4gICAgWzExLCAxNiwgMTUsIDZdLFxuICAgIFsxMCwgOSwgOCwgN10sXG4gIF0pLFxuICBbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExLCAxMiwgMTMsIDE0LCAxNSwgMTZdXG4pO1xuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAgc3BpcmFsT3JkZXIoW1xuICAgIFsxLCAyLCAzLCA0XSxcbiAgICBbNSwgNiwgNywgOF0sXG4gICAgWzksIDEwLCAxMSwgMTJdLFxuICBdKSxcbiAgWzEsIDIsIDMsIDQsIDgsIDEyLCAxMSwgMTAsIDksIDUsIDYsIDddXG4pO1xuIl19
