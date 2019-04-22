/**
 * 能执行拓扑排序的必须是一个有序无环图
 * 如果有一个非有向无环图，且A点出发向B经C可回到A，形成一个环。将从C到A的边方向改为从A到C，则变成有向无环图。
 * 拓扑排序常用来确定一个依赖关系集中，事物发生的顺序。例如，在日常工作中，可能会将项目拆分成A、B、C、D四个子部分来完成，但A依赖于B和D，C依赖于D。为了计算这个项目进行的顺序，可对这个关系集进行拓扑排序，得出一个线性的序列，则排在前面的任务就是需要先完成的任务。
 注意：这里得到的排序并不是唯一的！就好像你早上穿衣服可以先穿上衣也可以先穿裤子，只要里面的衣服在外面的衣服之前穿就行。
 * */
function Graph(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    for (var i = 0; i < this.vertices; ++i) {
        this.adj[i] = [];
        this.adj[i].push("");
    }


    this.vertexList = [];
}

// 添 v 到 w 的边
Graph.prototype.addEdge = function (v, w) {
    this.adj[v].push(w); // v 点 能到 w
    this.adj[w].push(v); // w 点 能到 v
    this.edges++;
};

Graph.prototype.showGraph = function () {
    var visited = [];
    var output = "";
    for (let i = 0; i < this.vertices; ++i) {
        output = this.vertexList[i] + " -> ";
        visited.push(this.vertexList[i]);
        for (var j = 0; j < this.vertices; ++j) {
            if (this.adj[i][j] !== undefined && this.adj[i][j] !== "") {
                if (visited.indexOf(this.vertexList[this.adj[i][j]]) < 0) {
                    output += this.vertexList[j] + " "
                }
            }
        }
        console.log(output);
        visited.pop();
    }
};
// 深度优先搜索
Graph.prototype.dfs = function (v) {
    for (var marked = [], i = 0; i < this.vertices; i++) {
        marked.push(false)
    }

    (function dfs(v) {
        marked[v] = true;
        if (this.adj[v] !== undefined) {
            console.log("访问了顶点" + v)
        }
        this.adj[v].forEach((v, i, a) => {
            if (!marked[v] && v !== "") {
                dfs.call(this, v)
            }
        });
    }).call(this, v)
};
// 广度优先搜索
Graph.prototype.bfs = function (s) {

    var edgeTo = [];
    var queue = [];
    for (var marked = [], i = 0; i < this.vertices; i++) {
        marked.push(false)
    }
    marked[s] = true;
    queue.push(s);

    while (queue.length > 0) {
        var w = queue.shift();
        if (w !== undefined) {
            console.log("访问了节点 " + w)
        }
        this.adj[w].forEach((v, i, a) => {
            if (!marked[v] && v !== "") {
                console.log(v, w);
                edgeTo[v] = w;
                marked[v] = true;
                queue.push(v)
            }
        })
    }
//        console.log(edgeTo);
    return {edgeTo, marked}
};
// 最短路径
Graph.prototype.pathTo = function (start, end) {
    // 如果是start开始的顶点 返回的edgeTo[start]一定等于undefined
    var {marked, edgeTo} = this.bfs(start);

    if (!marked[end]) { // 避免要到达的顶点其实并没有连接
        return undefined;
    }
    var path = [];
    // 一旦路径到达start 说明已经完成即停止循环
    for (var i = end; i != start; i = edgeTo[i]) {
        path.push(i);
    }
    path.push(start);
    return path.reverse();
};

// 拓扑排序
Graph.prototype.topSort = function () {
    var stack = [];
    var visited = [];
    for (let i = 0; i < this.vertices; i++) {
        visited[i] = false;
    }
    for (let i = 0; i < this.vertices; i++) {
        if (visited[i] === false) {
            this.topSortHelper(i, visited, stack)
        }
    }
    for (let i = 0; i < stack.length; i++) {
        if (stack[i] !== undefined && stack[i] !== false) {
            console.log(this.vertexList[stack[i]]);
        }
    }
};

Graph.prototype.topSortHelper = function (v, visited, stack) {
    visited[v] = true;

    this.adj[v].forEach((v, i, a) => {
        // 对于每个顶点的领接顶点 如果他已经没有其他顶点则推入栈中
        if (!visited[v] && v !== "") {
            this.topSortHelper.call(this, v, visited, stack)
        }
    });
    stack.push(v)
};

g = new Graph(6);
g.addEdge(1, 2);
g.addEdge(2, 5);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.addEdge(0, 1);
g.vertexList = ["CS1", "CS2", "Data Structures",
    "Assembly Language", "Operating Systems",
    "Algorithms"];
g.showGraph();
console.log("拓扑排序");
g.topSort();

