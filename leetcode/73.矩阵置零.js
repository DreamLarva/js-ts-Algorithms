"use strict";
/*
73. 矩阵置零
给定一个 m x n 的矩阵，如果一个元素为 0，则将其所在行和列的所有元素都设为 0。请使用原地算法。

示例 1:

输入:
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
输出:
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
示例 2:

输入:
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
输出:
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]
进阶:

一个直接的解决方案是使用  O(mn) 的额外空间，但这并不是一个好的解决方案。
一个简单的改进方案是使用 O(m + n) 的额外空间，但这仍然不是最好的解决方案。
你能想出一个常数空间的解决方案吗？
* */
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix) {
  // 要不使用 额外的空间 就必须将 额外的数据依然存在 数组上
  // 每次检测到 0 的时候 就 将改行的 行首 和 列首 设置为0
  // 再次循环 按照行首 和 列首的 值设置 一列 和一行的值
  // 处理所有非行首 和 列首的值
  // 需要注意的是 第一样和第一列 的 标志位 都是 [0][0] 位置的值
  // 所以需要一个额外的判断
  let isCol = false; // 记录第一列 是不是都要设置为 0
  // 将 matrix[0][0] 的位置
  for (let y = 0; y < matrix.length; y++) {
    if (matrix[y][0] === 0) {
      isCol = true;
    }
    // 这里从 1 开始 让出第一列不操作
    for (let x = 1; x < matrix[y].length; x++) {
      if (matrix[y][x] === 0) {
        matrix[0][x] = 0;
        matrix[y][0] = 0;
      }
    }
  }
  for (let y = 1; y < matrix.length; y++) {
    for (let x = 1; x < matrix[y].length; x++) {
      if (matrix[y][0] === 0 || matrix[0][x] === 0) {
        matrix[y][x] = 0;
      }
    }
  }
  if (matrix[0][0] === 0) {
    matrix[0].fill(0);
  }
  // 操作第一列
  if (isCol) {
    for (let y = 0; y < matrix.length; y++) {
      matrix[y][0] = 0;
    }
  }
}
const assert_1 = __importDefault(require("assert"));
{
  const sample = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];
  setZeroes(sample);
  assert_1.default.deepStrictEqual(sample, [
    [1, 0, 1],
    [0, 0, 0],
    [1, 0, 1],
  ]);
}
{
  const sample = [
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ];
  setZeroes(sample);
  assert_1.default.deepStrictEqual(sample, [
    [0, 0, 0, 0],
    [0, 4, 5, 0],
    [0, 3, 1, 0],
  ]);
}
{
  const sample = [
    [1, 2, 3, 4],
    [5, 0, 7, 8],
    [0, 10, 11, 12],
    [13, 14, 15, 0],
  ];
  setZeroes(sample);
  assert_1.default.deepStrictEqual(sample, [
    [0, 0, 3, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzMu55+p6Zi1572u6Zu2LmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS83My7nn6npmLXnva7pm7YudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBcUNJOzs7OztBQUVKOztHQUVHO0FBQ0gsU0FBUyxTQUFTLENBQUMsTUFBa0I7SUFDbkMsZ0NBQWdDO0lBQ2hDLGtDQUFrQztJQUVsQywrQkFBK0I7SUFDL0IsaUJBQWlCO0lBQ2pCLHNDQUFzQztJQUN0QyxjQUFjO0lBRWQsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsbUJBQW1CO0lBQ3RDLHFCQUFxQjtJQUNyQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUN0QyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDdEIsS0FBSyxHQUFHLElBQUksQ0FBQztTQUNkO1FBQ0Qsb0JBQW9CO1FBQ3BCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3pDLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDdEIsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakIsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNsQjtTQUNGO0tBQ0Y7SUFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUN0QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN6QyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDNUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNsQjtTQUNGO0tBQ0Y7SUFFRCxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDdEIsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNuQjtJQUVELFFBQVE7SUFDUixJQUFJLEtBQUssRUFBRTtRQUNULEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3RDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDbEI7S0FDRjtBQUNILENBQUM7QUFFRCxvREFBNEI7QUFDNUI7SUFDRSxNQUFNLE1BQU0sR0FBRztRQUNiLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNWLENBQUM7SUFDRixTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEIsZ0JBQU0sQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFO1FBQzdCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNWLENBQUMsQ0FBQztDQUNKO0FBQ0Q7SUFDRSxNQUFNLE1BQU0sR0FBRztRQUNiLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1osQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDWixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNiLENBQUM7SUFDRixTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEIsZ0JBQU0sQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFO1FBQzdCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1osQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDWixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNiLENBQUMsQ0FBQztDQUNKO0FBQ0Q7SUFDRSxNQUFNLE1BQU0sR0FBRztRQUNiLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1osQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDWixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUNmLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0tBQ2hCLENBQUM7SUFDRixTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEIsZ0JBQU0sQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFO1FBQzdCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1osQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDWixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNaLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ2IsQ0FBQyxDQUFDO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuNzMuIOefqemYtee9rumbtlxu57uZ5a6a5LiA5LiqIG0geCBuIOeahOefqemYte+8jOWmguaenOS4gOS4quWFg+e0oOS4uiAw77yM5YiZ5bCG5YW25omA5Zyo6KGM5ZKM5YiX55qE5omA5pyJ5YWD57Sg6YO96K6+5Li6IDDjgILor7fkvb/nlKjljp/lnLDnrpfms5XjgIJcblxu56S65L6LIDE6XG5cbui+k+WFpTpcbltcbiAgWzEsMSwxXSxcbiAgWzEsMCwxXSxcbiAgWzEsMSwxXVxuXVxu6L6T5Ye6OlxuW1xuICBbMSwwLDFdLFxuICBbMCwwLDBdLFxuICBbMSwwLDFdXG5dXG7npLrkvosgMjpcblxu6L6T5YWlOlxuW1xuICBbMCwxLDIsMF0sXG4gIFszLDQsNSwyXSxcbiAgWzEsMywxLDVdXG5dXG7ovpPlh7o6XG5bXG4gIFswLDAsMCwwXSxcbiAgWzAsNCw1LDBdLFxuICBbMCwzLDEsMF1cbl1cbui/m+mYtjpcblxu5LiA5Liq55u05o6l55qE6Kej5Yaz5pa55qGI5piv5L2/55SoICBPKG1uKSDnmoTpop3lpJbnqbrpl7TvvIzkvYbov5nlubbkuI3mmK/kuIDkuKrlpb3nmoTop6PlhrPmlrnmoYjjgIJcbuS4gOS4queugOWNleeahOaUuei/m+aWueahiOaYr+S9v+eUqCBPKG0gKyBuKSDnmoTpop3lpJbnqbrpl7TvvIzkvYbov5nku43nhLbkuI3mmK/mnIDlpb3nmoTop6PlhrPmlrnmoYjjgIJcbuS9oOiDveaDs+WHuuS4gOS4quW4uOaVsOepuumXtOeahOino+WGs+aWueahiOWQl++8n1xuKiAqL1xuXG4vKipcbiBEbyBub3QgcmV0dXJuIGFueXRoaW5nLCBtb2RpZnkgbWF0cml4IGluLXBsYWNlIGluc3RlYWQuXG4gKi9cbmZ1bmN0aW9uIHNldFplcm9lcyhtYXRyaXg6IG51bWJlcltdW10pOiB2b2lkIHtcbiAgLy8g6KaB5LiN5L2/55SoIOmineWklueahOepuumXtCDlsLHlv4XpobvlsIYg6aKd5aSW55qE5pWw5o2u5L6d54S25a2Y5ZyoIOaVsOe7hOS4ilxuICAvLyDmr4/mrKHmo4DmtYvliLAgMCDnmoTml7blgJkg5bCxIOWwhuaUueihjOeahCDooYzpppYg5ZKMIOWIl+mmliDorr7nva7kuLowXG5cbiAgLy8g5YaN5qyh5b6q546vIOaMieeFp+ihjOmmliDlkowg5YiX6aaW55qEIOWAvOiuvue9riDkuIDliJcg5ZKM5LiA6KGM55qE5YC8XG4gIC8vIOWkhOeQhuaJgOaciemdnuihjOmmliDlkowg5YiX6aaW55qE5YC8XG4gIC8vIOmcgOimgeazqOaEj+eahOaYryDnrKzkuIDmoLflkoznrKzkuIDliJcg55qEIOagh+W/l+S9jSDpg73mmK8gWzBdWzBdIOS9jee9rueahOWAvFxuICAvLyDmiYDku6XpnIDopoHkuIDkuKrpop3lpJbnmoTliKTmlq1cblxuICBsZXQgaXNDb2wgPSBmYWxzZTsgLy8g6K6w5b2V56ys5LiA5YiXIOaYr+S4jeaYr+mDveimgeiuvue9ruS4uiAwXG4gIC8vIOWwhiBtYXRyaXhbMF1bMF0g55qE5L2N572uXG4gIGZvciAobGV0IHkgPSAwOyB5IDwgbWF0cml4Lmxlbmd0aDsgeSsrKSB7XG4gICAgaWYgKG1hdHJpeFt5XVswXSA9PT0gMCkge1xuICAgICAgaXNDb2wgPSB0cnVlO1xuICAgIH1cbiAgICAvLyDov5nph4zku44gMSDlvIDlp4sg6K6p5Ye656ys5LiA5YiX5LiN5pON5L2cXG4gICAgZm9yIChsZXQgeCA9IDE7IHggPCBtYXRyaXhbeV0ubGVuZ3RoOyB4KyspIHtcbiAgICAgIGlmIChtYXRyaXhbeV1beF0gPT09IDApIHtcbiAgICAgICAgbWF0cml4WzBdW3hdID0gMDtcbiAgICAgICAgbWF0cml4W3ldWzBdID0gMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmb3IgKGxldCB5ID0gMTsgeSA8IG1hdHJpeC5sZW5ndGg7IHkrKykge1xuICAgIGZvciAobGV0IHggPSAxOyB4IDwgbWF0cml4W3ldLmxlbmd0aDsgeCsrKSB7XG4gICAgICBpZiAobWF0cml4W3ldWzBdID09PSAwIHx8IG1hdHJpeFswXVt4XSA9PT0gMCkge1xuICAgICAgICBtYXRyaXhbeV1beF0gPSAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChtYXRyaXhbMF1bMF0gPT09IDApIHtcbiAgICBtYXRyaXhbMF0uZmlsbCgwKTtcbiAgfVxuXG4gIC8vIOaTjeS9nOesrOS4gOWIl1xuICBpZiAoaXNDb2wpIHtcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IG1hdHJpeC5sZW5ndGg7IHkrKykge1xuICAgICAgbWF0cml4W3ldWzBdID0gMDtcbiAgICB9XG4gIH1cbn1cblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG57XG4gIGNvbnN0IHNhbXBsZSA9IFtcbiAgICBbMSwgMSwgMV0sXG4gICAgWzEsIDAsIDFdLFxuICAgIFsxLCAxLCAxXSxcbiAgXTtcbiAgc2V0WmVyb2VzKHNhbXBsZSk7XG4gIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoc2FtcGxlLCBbXG4gICAgWzEsIDAsIDFdLFxuICAgIFswLCAwLCAwXSxcbiAgICBbMSwgMCwgMV0sXG4gIF0pO1xufVxue1xuICBjb25zdCBzYW1wbGUgPSBbXG4gICAgWzAsIDEsIDIsIDBdLFxuICAgIFszLCA0LCA1LCAyXSxcbiAgICBbMSwgMywgMSwgNV0sXG4gIF07XG4gIHNldFplcm9lcyhzYW1wbGUpO1xuICBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHNhbXBsZSwgW1xuICAgIFswLCAwLCAwLCAwXSxcbiAgICBbMCwgNCwgNSwgMF0sXG4gICAgWzAsIDMsIDEsIDBdLFxuICBdKTtcbn1cbntcbiAgY29uc3Qgc2FtcGxlID0gW1xuICAgIFsxLCAyLCAzLCA0XSxcbiAgICBbNSwgMCwgNywgOF0sXG4gICAgWzAsIDEwLCAxMSwgMTJdLFxuICAgIFsxMywgMTQsIDE1LCAwXSxcbiAgXTtcbiAgc2V0WmVyb2VzKHNhbXBsZSk7XG4gIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoc2FtcGxlLCBbXG4gICAgWzAsIDAsIDMsIDBdLFxuICAgIFswLCAwLCAwLCAwXSxcbiAgICBbMCwgMCwgMCwgMF0sXG4gICAgWzAsIDAsIDAsIDBdLFxuICBdKTtcbn1cbiJdfQ==
