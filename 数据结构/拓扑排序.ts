/**
 * 能执行拓扑排序的必须是一个有序无环图
 * 如果有一个非有向无环图，且A点出发向B经C可回到A，形成一个环。将从C到A的边方向改为从A到C，则变成有向无环图。
 * 拓扑排序常用来确定一个依赖关系集中，事物发生的顺序。例如，在日常工作中，可能会将项目拆分成A、B、C、D四个子部分来完成，但A依赖于B和D，C依赖于D。为了计算这个项目进行的顺序，可对这个关系集进行拓扑排序，得出一个线性的序列，则排在前面的任务就是需要先完成的任务。
 注意：这里得到的排序并不是唯一的！就好像你早上穿衣服可以先穿上衣也可以先穿裤子，只要里面的衣服在外面的衣服之前穿就行。
 * */

class Graph {
  edges = 0;
  adj: (number | "")[][] = [];
  vertexList: string[] = [];

  constructor(public vertices: number) {
    for (let i = 0; i < this.vertices; ++i) {
      this.adj[i] = [];
      this.adj[i].push("");
    }
  }

  // 添 v 到 w 的边
  addEdge(v: number, w: number) {
    this.adj[v].push(w); // v 点 能到 w
    this.adj[w].push(v); // w 点 能到 v
    this.edges++;
  }

  showGraph() {
    const visited: string[] = [];
    let output = "";
    for (let i = 0; i < this.vertices; ++i) {
      output = this.vertexList[i] + " -> ";
      visited.push(this.vertexList[i]);
      for (let j = 0; j < this.vertices; ++j) {
        if (this.adj[i][j] !== undefined && this.adj[i][j] !== "") {
          if (visited.indexOf(this.vertexList[<number>this.adj[i][j]]) < 0) {
            output += this.vertexList[j] + " ";
          }
        }
      }
      console.log(output);
      visited.pop();
    }
  }

  // 深度优先搜索
  dfs(v: number) {
    const marked = Array(this.vertices).fill(false);
    const { adj } = this;
    step(v);

    function step(v: number) {
      marked[v] = true;
      if (adj[v] !== undefined) {
        console.log("访问了顶点" + v);
      }
      adj[v].forEach((v) => {
        if (v !== "" && !marked[v]) {
          step(v);
        }
      });
    }
  }

  // 广度优先搜索
  bfs(s: number) {
    const edgeTo: number[] = [];
    const queue: number[] = [];
    const marked = Array(this.vertices).fill(false);
    marked[s] = true;
    queue.push(s);

    while (queue.length > 0) {
      const w = queue.shift()!;
      if (w !== undefined) {
        console.log("访问了节点 " + w);
      }
      this.adj[w].forEach((v) => {
        if (v !== "" && !marked[v]) {
          console.log(v, w);
          edgeTo[v] = w;
          marked[v] = true;
          queue.push(v);
        }
      });
    }
    // console.log(edgeTo);
    return { edgeTo, marked };
  }

  // 最短路径
  pathTo(start: number, end: number) {
    // 如果是start开始的顶点 返回的edgeTo[start]一定等于undefined
    const { marked, edgeTo } = this.bfs(start);

    if (!marked[end]) {
      // 避免要到达的顶点其实并没有连接
      return undefined;
    }
    const path: number[] = [];
    // 一旦路径到达start 说明已经完成即停止循环
    for (let i = end; i != start; i = edgeTo[i]) {
      path.push(i);
    }
    path.push(start);
    return path.reverse();
  }

  // 拓扑排序
  topSort() {
    const stack: (false | number)[] = [];
    const visited: boolean[] = [];
    for (let i = 0; i < this.vertices; i++) {
      visited[i] = false;
    }
    for (let i = 0; i < this.vertices; i++) {
      if (!visited[i]) {
        this.topSortHelper(i, visited, stack);
      }
    }
    for (let i = 0; i < stack.length; i++) {
      if (stack[i] !== undefined && stack[i] !== false) {
        console.log(this.vertexList[<number>stack[i]]);
      }
    }
  }

  topSortHelper(v: number, visited: boolean[], stack: any[]) {
    visited[v] = true;

    this.adj[v].forEach((v, i, a) => {
      // 对于每个顶点的领接顶点 如果他已经没有其他顶点则推入栈中
      if (v !== "" && !visited[v]) {
        this.topSortHelper.call(this, v, visited, stack);
      }
    });
    stack.push(v);
  }
}

const g = new Graph(6);
g.addEdge(1, 2);
g.addEdge(2, 5);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.addEdge(0, 1);
g.vertexList = [
  "CS1",
  "CS2",
  "Data Structures",
  "Assembly Language",
  "Operating Systems",
  "Algorithms",
];
g.showGraph();
console.log("拓扑排序");
g.topSort();

export {};
