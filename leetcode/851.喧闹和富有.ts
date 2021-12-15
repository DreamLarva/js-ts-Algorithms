/*
851. 喧闹和富有
tag： 深度优先搜索 图 拓扑排序 数组

有一组 n 个人作为实验对象，从 0 到 n - 1 编号，其中每个人都有不同数目的钱，以及不同程度的安静值（quietness）。
为了方便起见，我们将编号为 x 的人简称为 "person x "。

给你一个数组 richer ，其中 richer[i] = [ai, bi] 表示 person ai 比 person bi 更有钱。另给你一个整数数组 quiet ，
其中 quiet[i] 是 person i 的安静值。
richer 中所给出的数据 逻辑自恰（也就是说，在 person x 比 person y 更有钱的同时，不会出现 person y 比 person x 更有钱的情况 ）。

现在，返回一个整数数组 answer 作为答案，其中 answer[x] = y 的前提是，
在所有拥有的钱肯定不少于 person x 的人中，person y 是最安静的人（也就是安静值 quiet[y] 最小的人）。



示例 1：

输入：richer = [[1,0],[2,1],[3,1],[3,7],[4,3],[5,3],[6,3]], quiet = [3,2,5,4,6,1,7,0]
输出：[5,5,2,5,4,5,6,7]
解释：
answer[0] = 5，
person 5 比 person 3 有更多的钱，person 3 比 person 1 有更多的钱，person 1 比 person 0 有更多的钱。
唯一较为安静（有较低的安静值 quiet[x]）的人是 person 7，
但是目前还不清楚他是否比 person 0 更有钱。
answer[7] = 7，
在所有拥有的钱肯定不少于 person 7 的人中（这可能包括 person 3，4，5，6 以及 7），
最安静（有较低安静值 quiet[x]）的人是 person 7。
其他的答案也可以用类似的推理来解释。
示例 2：

输入：richer = [], quiet = [0]
输出：[0]

提示：

n == quiet.length
1 <= n <= 500
0 <= quiet[i] < n
quiet 的所有值 互不相同
0 <= richer.length <= n * (n - 1) / 2
0 <= ai, bi < n
ai != bi
richer 中的所有数对 互不相同
对 richer 的观察在逻辑上是一致的
* */

function loudAndRich(richer: number[][], quiet: number[]): number[] {
  /**
   * 我们可以根据 richer 构建一张有向图：把人看成点，如果 ai 比 bi 更有钱，那么就从 bi 向 ai
   * 连一条有向边。由于题目保证 richer 中所给出的数据逻辑自恰，我们得到的是一张有向无环图。
   * */
  const n = quiet.length;
  const graph: number[][] = Array.from({ length: n }).map(() => []);

  for (let i = 0; i < richer.length; i++) {
    graph[richer[i][1]].push(richer[i][0]);
  }

  const ans = new Array(n).fill(-1);
  for (let i = 0; i < n; ++i) {
    dfs(i, quiet, graph, ans);
  }
  return ans;
}

/**
 * 无环图 从一个固定的起点凯斯 可以看成一棵树
 * 用 深度优先算法
 * @param {number} x - 当前检查的 richer 的index
 * @param quiet
 * @param graph
 * @param ans
 * */
function dfs(x: number, quiet: number[], graph: number[][], ans: number[]) {
  if (ans[x] !== -1) {
    return;
  }
  // 根据题意 默认值 为自己
  ans[x] = x;
  for (let i = 0; i < graph[x].length; i++) {
    dfs(graph[x][i], quiet, graph, ans);
    if (quiet[ans[graph[x][i]]] < quiet[ans[x]]) {
      ans[x] = ans[graph[x][i]];
    }
  }
}

function loudAndRich1(richer: number[][], quiet: number[]) {
  const n = quiet.length;

  // 存储入度 ，也就是 指向改点的 边的数量
  const inDeg = Array(n).fill(0);

  /**
   * 建立图
   * 如果 ai 比 bi 有钱， 那么建立 bi 指向 ai 的有向边
   * */
  const graph: number[][] = Array.from({ length: n }).map(() => []);
  for (const r of richer) {
    graph[r[0]].push(r[1]);

    // 增加对应点的 入度
    inDeg[r[1]]++;
  }

  // 初始化答案 默认的值是自己
  const answer = Array.from({ length: n }).map((_, i) => i);

  // 队列获取 入度为 0 的点， 也就是起点
  const queue: number[] = [];
  for (let i = 0; i < n; ++i) {
    if (inDeg[i] === 0) {
      queue.push(i);
    }
  }

  // 开始拓扑
  while (queue.length) {
    const x = queue.shift()!;
    // graph[x] 必定是入度 为0 的点 ， y 的点 必定比 点x 富有
    for (const y of graph[x]) {
      // 则 y 上的 quiet 值 可以作用到 包括 x 在内的所有子节点上
      if (quiet[answer[x]] < quiet[answer[y]]) {
        answer[y] = answer[x]; // 更新 x 的邻居的答案
      }

      // 每当点的入度 减到0 就进入队列
      if (--inDeg[y] === 0) {
        queue.push(y);
      }
    }
  }
  return answer;
}

import assert from "assert";
assert.deepStrictEqual(
  loudAndRich(
    [
      [1, 0],
      [2, 1],
      [3, 1],
      [3, 7],
      [4, 3],
      [5, 3],
      [6, 3],
    ],
    [3, 2, 5, 4, 6, 1, 7, 0]
  ),
  [5, 5, 2, 5, 4, 5, 6, 7]
);
assert.deepStrictEqual(
  loudAndRich1(
    [
      [1, 0],
      [2, 1],
      [3, 1],
      [3, 7],
      [4, 3],
      [5, 3],
      [6, 3],
    ],
    [3, 2, 5, 4, 6, 1, 7, 0]
  ),
  [5, 5, 2, 5, 4, 5, 6, 7]
);
