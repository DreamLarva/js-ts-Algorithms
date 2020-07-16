/*
785. 判断二分图
给定一个无向图graph，当这个图为二分图时返回true。

如果我们能将一个图的节点集合分割成两个独立的子集A和B，并使图中的每一条边的两个节点一个来自A集合，一个来自B集合，我们就将这个图称为二分图。

graph将会以邻接表方式给出，graph[i]表示图中与节点i相连的所有节点。
每个节点都是一个在0到graph.length-1之间的整数。这图中没有自环(一个点既是边的起点也是终点)和平行边(两个点之间有多条边)： graph[i] 中不存在i，并且graph[i]中没有重复的值。


示例 1:
输入: [[1,3], [0,2], [1,3], [0,2]]
输出: true
解释:
无向图如下:
0----1
|    |
|    |
3----2
我们可以将节点分成两组: {0, 2} 和 {1, 3}。

示例 2:
输入: [[1,2,3], [0,2], [0,1,3], [0,2]]
输出: false
解释:
无向图如下:
0----1
| \  |
|  \ |
3----2
我们不能将节点分割成两个独立的子集。
注意:

graph 的长度范围为 [1, 100]。
graph[i] 中的元素的范围为 [0, graph.length - 1]。
graph[i] 不会包含 i 或者有重复的值。
图是无向的: 如果j 在 graph[i]里边, 那么 i 也会在 graph[j]里边。
* */
function isBipartite(graph: number[][]): boolean {
  /**
   * 深度优先后者 广度优先都可以
   * 从任意点 开始染色,相邻的点 染成另一种颜色
   * 只要颜色冲突就 判断为false
   * */
  enum Color {
    red,
    green,
  }

  // 可能出现单独的点 或者 两个不相互连通的图 不与任何边相连 所以要 循环
  for (let i = 0; i < graph.length; i++) {
    if (!dfs(i, Color.green, graph, [])) return false;
  }
  return true;

  /**
   * @param currentNode 要检查的点
   * @param color 希望检查的点 的颜色
   * @param graph 图
   * @param colorMap 存储的已经染色的点
   * */
  function dfs(
    currentNode: number,
    color: Color,
    graph: number[][],
    colorMap: (Color | void)[]
  ): boolean {
    if (colorMap[currentNode] == null) {
      colorMap[currentNode] = color;
      const otherColor = color ^ 1;
      for (const node of graph[currentNode]) {
        if (!dfs(node, otherColor, graph, colorMap)) {
          return false;
        }
      }
      return true;
    }
    return colorMap[currentNode] === color;
  }
}

import assert from "assert";
assert.strictEqual(
  isBipartite([
    [1, 3],
    [0, 2],
    [1, 3],
    [0, 2],
  ]),
  true
);

assert.strictEqual(
  isBipartite([
    [1, 2, 3],
    [0, 2],
    [0, 1, 3],
    [0, 2],
  ]),
  false
);

assert.strictEqual(
  isBipartite([
    [],
    [2, 4, 6],
    [1, 4, 8, 9],
    [7, 8],
    [1, 2, 8, 9],
    [6, 9],
    [1, 5, 7, 8, 9],
    [3, 6, 9],
    [2, 3, 4, 6, 9],
    [2, 4, 5, 6, 7, 8],
  ]),
  false
);

assert.strictEqual(
  isBipartite([
    [1, 3],
    [0, 2],
    [1, 3],
    [0, 2],
  ]),
  true
);
