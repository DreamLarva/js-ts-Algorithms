"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/*
有一幅以二维整数数组表示的图画，每一个整数表示该图画的像素值大小，数值在 0 到 65535 之间。

给你一个坐标 (sr, sc) 表示图像渲染开始的像素值（行 ，列）和一个新的颜色值 newColor，让你重新上色这幅图像。

为了完成上色工作，从初始坐标开始，记录初始坐标的上下左右四个方向上像素值与初始坐标相同的相连像素点，
接着再记录这四个方向上符合条件的像素点与他们对应四个方向上像素值与初始坐标相同的相连像素点，……，
重复该过程。将所有有记录的像素点的颜色值改为新的颜色值。

最后返回经过上色渲染后的图像。

示例 1:

输入:
image = [
    [1,1,1],
    [1,1,0],
    [1,0,1]
]
sr = 1, sc = 1, newColor = 2
输出: [[2,2,2],[2,2,0],[2,0,1]]
解析:
在图像的正中间，(坐标(sr,sc)=(1,1)),
在路径上所有符合条件的像素点的颜色都被更改成2。
注意，右下角的像素没有更改为2，
因为它不是在上下左右四个方向上与初始点相连的像素点。
注意:

1.image 和 image[0] 的长度在范围 [1, 50] 内。
2.给出的初始点将满足 0 <= sr < image.length 和 0 <= sc < image[0].length。
3.image[i][j] 和 newColor 表示的颜色值在范围 [0, 65535]内。
* */
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  // bfs
  const old_color = image[sr][sc];
  if (old_color === newColor) return image;
  const list = [];
  list.push([sc, sr]);
  while (list.length) {
    const [x, y] = list.shift();
    if (x < 0 || y < 0 || y >= image.length || x >= image[y].length) continue;
    if (image[y][x] === old_color) {
      image[y][x] = newColor;
      // 上
      list.push([x, y - 1]);
      // 右
      list.push([x + 1, y]);
      // 下
      list.push([x, y + 1]);
      // 左
      list.push([x - 1, y]);
    }
  }
  return image;
};
/**
 * 使用回溯法
 * 速度更快 因为 不需要 使用一个多余的队列
 * */
var floodFill_1 = function (image, sr, sc, newColor) {
  fill(image, sr, sc, image[sr][sc], newColor);
  return image;
  function fill(image, x, y, origColor, newColor) {
    // 出界：超出数组边界
    if (!inArea(image, x, y)) return;
    // 碰壁：遇到其他颜色，超出 origColor 区域
    if (image[x][y] != origColor) return;
    // 已探索过的 origColor 区域
    if (image[x][y] == -1) return;
    // 打标记，以免重复
    image[x][y] = -1;
    fill(image, x, y + 1, origColor, newColor);
    fill(image, x, y - 1, origColor, newColor);
    fill(image, x - 1, y, origColor, newColor);
    fill(image, x + 1, y, origColor, newColor);
    // 将标记替换为 newColor
    image[x][y] = newColor;
  }
  function inArea(image, x, y) {
    return x >= 0 && x < image.length && y >= 0 && y < image[0].length;
  }
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2
  ),
  [
    [2, 2, 2],
    [2, 2, 0],
    [2, 0, 1],
  ]
);
assert_1.default.deepStrictEqual(
  floodFill(
    [
      [0, 0, 0],
      [0, 1, 1],
    ],
    1,
    1,
    1
  ),
  [
    [0, 0, 0],
    [0, 1, 1],
  ]
);
assert_1.default.deepStrictEqual(
  floodFill(
    [
      [0, 0, 0],
      [1, 0, 0],
    ],
    1,
    0,
    2
  ),
  [
    [0, 0, 0],
    [2, 0, 0],
  ]
);
assert_1.default.deepStrictEqual(
  floodFill_1(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2
  ),
  [
    [2, 2, 2],
    [2, 2, 0],
    [2, 0, 1],
  ]
);
assert_1.default.deepStrictEqual(
  floodFill_1(
    [
      [0, 0, 0],
      [0, 1, 1],
    ],
    1,
    1,
    1
  ),
  [
    [0, 0, 0],
    [0, 1, 1],
  ]
);
assert_1.default.deepStrictEqual(
  floodFill_1(
    [
      [0, 0, 0],
      [1, 0, 0],
    ],
    1,
    0,
    2
  ),
  [
    [0, 0, 0],
    [2, 0, 0],
  ]
);
const benchmark_1 = __importDefault(require("benchmark"));
const suite = new benchmark_1.default.Suite();
suite
  .add("bfs", function () {
    floodFill(
      [
        [1, 1, 1],
        [1, 1, 0],
        [1, 0, 1],
      ],
      1,
      1,
      2
    );
  })
  .add("backtracking algorithm", function () {
    floodFill_1(
      [
        [1, 1, 1],
        [1, 1, 0],
        [1, 0, 1],
      ],
      1,
      1,
      2
    );
  })
  .on("cycle", function (event) {
    console.log(String(event.target));
  })
  .on("complete", function () {
    // console.log('Fastest is ' + this.filter('fastest').map( 'name'));
  })
  // run async
  .run({ async: false });
/**
 * 结论 backtracking >>  bfs > dfs
 * */
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzMzLuWbvuWDj+a4suafky5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNzMzLuWbvuWDj+a4suafky50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBK0JJO0FBQ0o7Ozs7OztHQU1HO0FBQ0gsSUFBSSxTQUFTLEdBQUcsVUFDZCxLQUFpQixFQUNqQixFQUFVLEVBQ1YsRUFBVSxFQUNWLFFBQWdCO0lBRWhCLE1BQU07SUFDTixNQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDaEMsSUFBSSxTQUFTLEtBQUssUUFBUTtRQUFFLE9BQU8sS0FBSyxDQUFDO0lBQ3pDLE1BQU0sSUFBSSxHQUF1QixFQUFFLENBQUM7SUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3BCLE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRTtRQUNsQixNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUcsQ0FBQztRQUM3QixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU07WUFBRSxTQUFTO1FBQzFFLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsRUFBRTtZQUM3QixLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDO1lBQ3ZCLElBQUk7WUFDSixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUk7WUFD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Q0FBQztBQUVGLGdCQUFNLENBQUMsZUFBZSxDQUNwQixTQUFTLENBQ1A7SUFDRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztDQUNWLEVBQ0QsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLENBQ0YsRUFDRDtJQUNFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0NBQ1YsQ0FDRixDQUFDO0FBQ0YsZ0JBQU0sQ0FBQyxlQUFlLENBQ3BCLFNBQVMsQ0FDUDtJQUNFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0NBQ1YsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsQ0FDRixFQUNEO0lBQ0UsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Q0FDVixDQUNGLENBQUM7QUFDRixnQkFBTSxDQUFDLGVBQWUsQ0FDcEIsV0FBVyxDQUNUO0lBQ0UsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0NBQ1YsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsQ0FDRixFQUNEO0lBQ0UsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0NBQ1YsQ0FDRixDQUFDO0FBRUYsZ0JBQU0sQ0FBQyxlQUFlLENBQ3BCLFdBQVcsQ0FDVDtJQUNFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0NBQ1YsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsQ0FDRixFQUNEO0lBQ0UsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Q0FDVixDQUNGLENBQUM7QUFDRixnQkFBTSxDQUFDLGVBQWUsQ0FDcEIsV0FBVyxDQUNUO0lBQ0UsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Q0FDVixFQUNELENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxDQUNGLEVBQ0Q7SUFDRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztDQUNWLENBQ0YsQ0FBQztBQUVGLDBEQUFrQztBQUVsQyxNQUFNLEtBQUssR0FBRyxJQUFJLG1CQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDcEMsS0FBSztLQUNGLEdBQUcsQ0FBQyxLQUFLLEVBQUU7SUFDVixTQUFTLENBQ1A7UUFDRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDVixFQUNELENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxDQUNGLENBQUM7QUFDSixDQUFDLENBQUM7S0FDRCxHQUFHLENBQUMsd0JBQXdCLEVBQUU7SUFDN0IsV0FBVyxDQUNUO1FBQ0UsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ1YsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsQ0FDRixDQUFDO0FBQ0osQ0FBQyxDQUFDO0tBQ0QsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFVLEtBQXNCO0lBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ3BDLENBQUMsQ0FBQztLQUNELEVBQUUsQ0FBQyxVQUFVLEVBQUU7SUFDZCxvRUFBb0U7QUFDdEUsQ0FBQyxDQUFDO0lBQ0YsWUFBWTtLQUNYLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBRXpCOztLQUVLIiwic291cmNlc0NvbnRlbnQiOlsiLypcbuacieS4gOW5heS7peS6jOe7tOaVtOaVsOaVsOe7hOihqOekuueahOWbvueUu++8jOavj+S4gOS4quaVtOaVsOihqOekuuivpeWbvueUu+eahOWDj+e0oOWAvOWkp+Wwj++8jOaVsOWAvOWcqCAwIOWIsCA2NTUzNSDkuYvpl7TjgIJcblxu57uZ5L2g5LiA5Liq5Z2Q5qCHIChzciwgc2MpIOihqOekuuWbvuWDj+a4suafk+W8gOWni+eahOWDj+e0oOWAvO+8iOihjCDvvIzliJfvvInlkozkuIDkuKrmlrDnmoTpopzoibLlgLwgbmV3Q29sb3LvvIzorqnkvaDph43mlrDkuIroibLov5nluYXlm77lg4/jgIJcblxu5Li65LqG5a6M5oiQ5LiK6Imy5bel5L2c77yM5LuO5Yid5aeL5Z2Q5qCH5byA5aeL77yM6K6w5b2V5Yid5aeL5Z2Q5qCH55qE5LiK5LiL5bem5Y+z5Zub5Liq5pa55ZCR5LiK5YOP57Sg5YC85LiO5Yid5aeL5Z2Q5qCH55u45ZCM55qE55u46L+e5YOP57Sg54K577yMXG7mjqXnnYDlho3orrDlvZXov5nlm5vkuKrmlrnlkJHkuIrnrKblkIjmnaHku7bnmoTlg4/ntKDngrnkuI7ku5bku6zlr7nlupTlm5vkuKrmlrnlkJHkuIrlg4/ntKDlgLzkuI7liJ3lp4vlnZDmoIfnm7jlkIznmoTnm7jov57lg4/ntKDngrnvvIzigKbigKbvvIxcbumHjeWkjeivpei/h+eoi+OAguWwhuaJgOacieacieiusOW9leeahOWDj+e0oOeCueeahOminOiJsuWAvOaUueS4uuaWsOeahOminOiJsuWAvOOAglxuXG7mnIDlkI7ov5Tlm57nu4/ov4fkuIroibLmuLLmn5PlkI7nmoTlm77lg4/jgIJcblxu56S65L6LIDE6XG5cbui+k+WFpTpcbmltYWdlID0gW1xuICAgIFsxLDEsMV0sXG4gICAgWzEsMSwwXSxcbiAgICBbMSwwLDFdXG5dXG5zciA9IDEsIHNjID0gMSwgbmV3Q29sb3IgPSAyXG7ovpPlh7o6IFtbMiwyLDJdLFsyLDIsMF0sWzIsMCwxXV1cbuino+aekDpcbuWcqOWbvuWDj+eahOato+S4remXtO+8jCjlnZDmoIcoc3Isc2MpPSgxLDEpKSxcbuWcqOi3r+W+hOS4iuaJgOacieespuWQiOadoeS7tueahOWDj+e0oOeCueeahOminOiJsumDveiiq+abtOaUueaIkDLjgIJcbuazqOaEj++8jOWPs+S4i+inkueahOWDj+e0oOayoeacieabtOaUueS4ujLvvIxcbuWboOS4uuWug+S4jeaYr+WcqOS4iuS4i+W3puWPs+Wbm+S4quaWueWQkeS4iuS4juWIneWni+eCueebuOi/nueahOWDj+e0oOeCueOAglxu5rOo5oSPOlxuXG4xLmltYWdlIOWSjCBpbWFnZVswXSDnmoTplb/luqblnKjojIPlm7QgWzEsIDUwXSDlhoXjgIJcbjIu57uZ5Ye655qE5Yid5aeL54K55bCG5ruh6LazIDAgPD0gc3IgPCBpbWFnZS5sZW5ndGgg5ZKMIDAgPD0gc2MgPCBpbWFnZVswXS5sZW5ndGjjgIJcbjMuaW1hZ2VbaV1bal0g5ZKMIG5ld0NvbG9yIOihqOekuueahOminOiJsuWAvOWcqOiMg+WbtCBbMCwgNjU1MzVd5YaF44CCXG4qICovXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyW11bXX0gaW1hZ2VcbiAqIEBwYXJhbSB7bnVtYmVyfSBzclxuICogQHBhcmFtIHtudW1iZXJ9IHNjXG4gKiBAcGFyYW0ge251bWJlcn0gbmV3Q29sb3JcbiAqIEByZXR1cm4ge251bWJlcltdW119XG4gKi9cbnZhciBmbG9vZEZpbGwgPSBmdW5jdGlvbiAoXG4gIGltYWdlOiBudW1iZXJbXVtdLFxuICBzcjogbnVtYmVyLFxuICBzYzogbnVtYmVyLFxuICBuZXdDb2xvcjogbnVtYmVyXG4pIHtcbiAgLy8gYmZzXG4gIGNvbnN0IG9sZF9jb2xvciA9IGltYWdlW3NyXVtzY107XG4gIGlmIChvbGRfY29sb3IgPT09IG5ld0NvbG9yKSByZXR1cm4gaW1hZ2U7XG4gIGNvbnN0IGxpc3Q6IFtudW1iZXIsIG51bWJlcl1bXSA9IFtdO1xuICBsaXN0LnB1c2goW3NjLCBzcl0pO1xuICB3aGlsZSAobGlzdC5sZW5ndGgpIHtcbiAgICBjb25zdCBbeCwgeV0gPSBsaXN0LnNoaWZ0KCkhO1xuICAgIGlmICh4IDwgMCB8fCB5IDwgMCB8fCB5ID49IGltYWdlLmxlbmd0aCB8fCB4ID49IGltYWdlW3ldLmxlbmd0aCkgY29udGludWU7XG4gICAgaWYgKGltYWdlW3ldW3hdID09PSBvbGRfY29sb3IpIHtcbiAgICAgIGltYWdlW3ldW3hdID0gbmV3Q29sb3I7XG4gICAgICAvLyDkuIpcbiAgICAgIGxpc3QucHVzaChbeCwgeSAtIDFdKTtcbiAgICAgIC8vIOWPs1xuICAgICAgbGlzdC5wdXNoKFt4ICsgMSwgeV0pO1xuICAgICAgLy8g5LiLXG4gICAgICBsaXN0LnB1c2goW3gsIHkgKyAxXSk7XG4gICAgICAvLyDlt6ZcbiAgICAgIGxpc3QucHVzaChbeCAtIDEsIHldKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaW1hZ2U7XG59O1xuXG4vKipcbiAqIOS9v+eUqOWbnua6r+azlVxuICog6YCf5bqm5pu05b+rIOWboOS4uiDkuI3pnIDopoEg5L2/55So5LiA5Liq5aSa5L2Z55qE6Zif5YiXXG4gKiAqL1xudmFyIGZsb29kRmlsbF8xID0gZnVuY3Rpb24gKFxuICBpbWFnZTogbnVtYmVyW11bXSxcbiAgc3I6IG51bWJlcixcbiAgc2M6IG51bWJlcixcbiAgbmV3Q29sb3I6IG51bWJlclxuKSB7XG4gIGZpbGwoaW1hZ2UsIHNyLCBzYywgaW1hZ2Vbc3JdW3NjXSwgbmV3Q29sb3IpO1xuICByZXR1cm4gaW1hZ2U7XG5cbiAgZnVuY3Rpb24gZmlsbChcbiAgICBpbWFnZTogbnVtYmVyW11bXSxcbiAgICB4OiBudW1iZXIsXG4gICAgeTogbnVtYmVyLFxuICAgIG9yaWdDb2xvcjogbnVtYmVyLFxuICAgIG5ld0NvbG9yOiBudW1iZXJcbiAgKSB7XG4gICAgLy8g5Ye655WM77ya6LaF5Ye65pWw57uE6L6555WMXG4gICAgaWYgKCFpbkFyZWEoaW1hZ2UsIHgsIHkpKSByZXR1cm47XG4gICAgLy8g56Kw5aOB77ya6YGH5Yiw5YW25LuW6aKc6Imy77yM6LaF5Ye6IG9yaWdDb2xvciDljLrln59cbiAgICBpZiAoaW1hZ2VbeF1beV0gIT0gb3JpZ0NvbG9yKSByZXR1cm47XG4gICAgLy8g5bey5o6i57Si6L+H55qEIG9yaWdDb2xvciDljLrln59cbiAgICBpZiAoaW1hZ2VbeF1beV0gPT0gLTEpIHJldHVybjtcblxuICAgIC8vIOaJk+agh+iusO+8jOS7peWFjemHjeWkjVxuICAgIGltYWdlW3hdW3ldID0gLTE7XG4gICAgZmlsbChpbWFnZSwgeCwgeSArIDEsIG9yaWdDb2xvciwgbmV3Q29sb3IpO1xuICAgIGZpbGwoaW1hZ2UsIHgsIHkgLSAxLCBvcmlnQ29sb3IsIG5ld0NvbG9yKTtcbiAgICBmaWxsKGltYWdlLCB4IC0gMSwgeSwgb3JpZ0NvbG9yLCBuZXdDb2xvcik7XG4gICAgZmlsbChpbWFnZSwgeCArIDEsIHksIG9yaWdDb2xvciwgbmV3Q29sb3IpO1xuICAgIC8vIOWwhuagh+iusOabv+aNouS4uiBuZXdDb2xvclxuICAgIGltYWdlW3hdW3ldID0gbmV3Q29sb3I7XG4gIH1cblxuICBmdW5jdGlvbiBpbkFyZWEoaW1hZ2U6IG51bWJlcltdW10sIHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHggPj0gMCAmJiB4IDwgaW1hZ2UubGVuZ3RoICYmIHkgPj0gMCAmJiB5IDwgaW1hZ2VbMF0ubGVuZ3RoO1xuICB9XG59O1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAgZmxvb2RGaWxsKFxuICAgIFtcbiAgICAgIFsxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFsxLCAwLCAxXSxcbiAgICBdLFxuICAgIDEsXG4gICAgMSxcbiAgICAyXG4gICksXG4gIFtcbiAgICBbMiwgMiwgMl0sXG4gICAgWzIsIDIsIDBdLFxuICAgIFsyLCAwLCAxXSxcbiAgXVxuKTtcblxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAgZmxvb2RGaWxsKFxuICAgIFtcbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFswLCAxLCAxXSxcbiAgICBdLFxuICAgIDEsXG4gICAgMSxcbiAgICAxXG4gICksXG4gIFtcbiAgICBbMCwgMCwgMF0sXG4gICAgWzAsIDEsIDFdLFxuICBdXG4pO1xuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAgZmxvb2RGaWxsKFxuICAgIFtcbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFsxLCAwLCAwXSxcbiAgICBdLFxuICAgIDEsXG4gICAgMCxcbiAgICAyXG4gICksXG4gIFtcbiAgICBbMCwgMCwgMF0sXG4gICAgWzIsIDAsIDBdLFxuICBdXG4pO1xuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAgZmxvb2RGaWxsXzEoXG4gICAgW1xuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzEsIDAsIDFdLFxuICAgIF0sXG4gICAgMSxcbiAgICAxLFxuICAgIDJcbiAgKSxcbiAgW1xuICAgIFsyLCAyLCAyXSxcbiAgICBbMiwgMiwgMF0sXG4gICAgWzIsIDAsIDFdLFxuICBdXG4pO1xuXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxuICBmbG9vZEZpbGxfMShcbiAgICBbXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMCwgMSwgMV0sXG4gICAgXSxcbiAgICAxLFxuICAgIDEsXG4gICAgMVxuICApLFxuICBbXG4gICAgWzAsIDAsIDBdLFxuICAgIFswLCAxLCAxXSxcbiAgXVxuKTtcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gIGZsb29kRmlsbF8xKFxuICAgIFtcbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFsxLCAwLCAwXSxcbiAgICBdLFxuICAgIDEsXG4gICAgMCxcbiAgICAyXG4gICksXG4gIFtcbiAgICBbMCwgMCwgMF0sXG4gICAgWzIsIDAsIDBdLFxuICBdXG4pO1xuXG5pbXBvcnQgQmVuY2htYXJrIGZyb20gXCJiZW5jaG1hcmtcIjtcblxuY29uc3Qgc3VpdGUgPSBuZXcgQmVuY2htYXJrLlN1aXRlKCk7XG5zdWl0ZVxuICAuYWRkKFwiYmZzXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBmbG9vZEZpbGwoXG4gICAgICBbXG4gICAgICAgIFsxLCAxLCAxXSxcbiAgICAgICAgWzEsIDEsIDBdLFxuICAgICAgICBbMSwgMCwgMV0sXG4gICAgICBdLFxuICAgICAgMSxcbiAgICAgIDEsXG4gICAgICAyXG4gICAgKTtcbiAgfSlcbiAgLmFkZChcImJhY2t0cmFja2luZyBhbGdvcml0aG1cIiwgZnVuY3Rpb24gKCkge1xuICAgIGZsb29kRmlsbF8xKFxuICAgICAgW1xuICAgICAgICBbMSwgMSwgMV0sXG4gICAgICAgIFsxLCAxLCAwXSxcbiAgICAgICAgWzEsIDAsIDFdLFxuICAgICAgXSxcbiAgICAgIDEsXG4gICAgICAxLFxuICAgICAgMlxuICAgICk7XG4gIH0pXG4gIC5vbihcImN5Y2xlXCIsIGZ1bmN0aW9uIChldmVudDogQmVuY2htYXJrLkV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coU3RyaW5nKGV2ZW50LnRhcmdldCkpO1xuICB9KVxuICAub24oXCJjb21wbGV0ZVwiLCBmdW5jdGlvbiAodGhpczogQmVuY2htYXJrLlN1aXRlKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ0Zhc3Rlc3QgaXMgJyArIHRoaXMuZmlsdGVyKCdmYXN0ZXN0JykubWFwKCAnbmFtZScpKTtcbiAgfSlcbiAgLy8gcnVuIGFzeW5jXG4gIC5ydW4oeyBhc3luYzogZmFsc2UgfSk7XG5cbi8qKlxuICog57uT6K66IGJhY2t0cmFja2luZyA+PiAgYmZzID4gZGZzXG4gKiAqL1xuIl19
