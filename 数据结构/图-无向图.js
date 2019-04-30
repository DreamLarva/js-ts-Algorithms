/**
 * 图的实际信息都保存在边上面，因为它们描述了图的结构。
 * 我们很容易像之前提到的那样用二叉树的方式去表示图，这是不对的。
 * 二叉树的表现形式相当固定，一个父节点只能有两个子节点，而图的结构却要灵活得多，一个顶点既可以有一条边，也可以有多条边与它相连。
 *
 * 我们将表示图的边的方法称为邻接表或者邻接表数组。
 * 这种方法将边存储为由顶点的相邻顶点列表构成的数组，并以此顶点作为索引。
 * */

// 图类
function Graph(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    for (var i = 0; i < this.vertices; ++i) {
        this.adj[i] = [];
        this.adj[i].push("");
    }
    this.toString = toString;


}

// 添 v 到 w 的边
Graph.prototype.addEdge = function (v, w) {
    this.adj[v].push(w); // v 点 能到 w
    this.adj[w].push(v); // w 点 能到 v
    this.edges++;
};
Graph.prototype.showGraph = function () {
    var output = "";
    for (let i = 0; i < this.vertices; ++i) {
        output = i + " -> ";
        for (var j = 0; j < this.vertices; ++j) {
            if (this.adj[i][j] != undefined) {
                output += this.adj[i][j] + " "
            }
        }
        console.log(output)
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

var g = new Graph(6);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(1, 4);
g.addEdge(2, 4);
g.addEdge(3, 5);
g.showGraph();
console.log("深度优先");
g.dfs(0);
console.log("广度优先");
g.bfs(0);
console.log("最短路径");
//    console.log(g.bfs(1,5))
console.log(g.pathTo(4, 5));
