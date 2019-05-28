/*
给定一个由 '1'（陆地）和 '0'（水）组成的的二维网格，计算岛屿的数量。一个岛被水包围，
并且它是通过水平方向或垂直方向上相邻的陆地连接而成的。你可以假设网格的四个边均被水包围。

示例 1:

输入:
11110
11010
11000
00000

输出: 1
示例 2:

输入:
11000
11000
00100
00011

输出: 3
* */
type character = "1" | "0"
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands1 = function (grid: character[][]) {
    // 深度优先
    // 遍历整个二维数组
    let lands = 0;
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            if (grid[y][x] === "1") {
                // 如果有 1 则有一个陆地
                lands++;
                // 然后将所有与它相邻的 1 都置为 0
                setWater(x, y);
            }
        }
    }

    return lands;

    function setWater(x: number, y: number) {
        if (x < 0 || y < 0 || y >= grid.length || x >= grid[y].length) return;
        if (grid[y][x] === "0") return;
        grid[y][x] = "0";
        // 上
        setWater(x, y - 1);
        // 右
        setWater(x + 1, y);
        // 下
        setWater(x, y + 1);
        // 左
        setWater(x - 1, y);

    }
};

var numIslands2 = function (grid: character[][]) {
    // 广度优先优先
    // 遍历整个二维数组
    let lands = 0;
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            if (grid[y][x] === "1") {
                // 如果有 1 则有一个陆地
                lands++;
                // 然后将所有与它相邻的 1 都置为 0
                setWater(x, y);
            }
        }
    }

    return lands;

    function setWater(x: number, y: number) {
        const list = [[x, y]];
        while (list.length) {
            const [x, y] = list.shift()!;
            if (x < 0 || y < 0 || y >= grid.length || x >= grid[y].length) continue;
            if (grid[y][x] === "0") continue;
            grid[y][x] = "0";
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
};


import assert from "assert";

assert.strictEqual(
    numIslands1([
        ["1", "1", "1", "1", "0"],
        ["1", "1", "0", "1", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "0", "0", "0"]]),
    1,
);

assert.strictEqual(
    numIslands1(
        [
            ["1", "1", "1"],
            ["0", "1", "0"],
            ["1", "1", "1"]],
    ),
    1,
);


assert.strictEqual(
    numIslands2([
        ["1", "1", "1", "1", "0"],
        ["1", "1", "0", "1", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "0", "0", "0"]]),
    1,
);

assert.strictEqual(
    numIslands2(
        [
            ["1", "1", "1"],
            ["0", "1", "0"],
            ["1", "1", "1"]],
    ),
    1,
);


import Benchmark from "benchmark";

const suite = new Benchmark.Suite;
const sample = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]];
suite
    .add('dfs', function () {
        numIslands1(sample as character[][]);
    })
    .add('bfs', function () {
        numIslands2(sample as character[][]);
    })
    .on('cycle', function (event: Benchmark.Event) {
        console.log(String(event.target));
    })
    .on('complete', function (this: Benchmark.Suite) {
        // console.log('Fastest is ' + this.filter('fastest').map( 'name'));
    })
    // run async
    .run({'async': false});
