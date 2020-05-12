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
var floodFill = function (
  image: number[][],
  sr: number,
  sc: number,
  newColor: number
) {
  // bfs
  const old_color = image[sr][sc];
  if (old_color === newColor) return image;
  const list: [number, number][] = [];
  list.push([sc, sr]);
  while (list.length) {
    const [x, y] = list.shift()!;
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
var floodFill_1 = function (
  image: number[][],
  sr: number,
  sc: number,
  newColor: number
) {
  fill(image, sr, sc, image[sr][sc], newColor);
  return image;

  function fill(
    image: number[][],
    x: number,
    y: number,
    origColor: number,
    newColor: number
  ) {
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

  function inArea(image: number[][], x: number, y: number) {
    return x >= 0 && x < image.length && y >= 0 && y < image[0].length;
  }
};

import assert from "assert";

assert.deepStrictEqual(
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

assert.deepStrictEqual(
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
assert.deepStrictEqual(
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
assert.deepStrictEqual(
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

assert.deepStrictEqual(
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
assert.deepStrictEqual(
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

import Benchmark from "benchmark";

const suite = new Benchmark.Suite();
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
  .on("cycle", function (event: Benchmark.Event) {
    console.log(String(event.target));
  })
  .on("complete", function (this: Benchmark.Suite) {
    // console.log('Fastest is ' + this.filter('fastest').map( 'name'));
  })
  // run async
  .run({ async: false });

/**
 * 结论 backtracking >>  bfs > dfs
 * */
