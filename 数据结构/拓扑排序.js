"use strict";
/**
 * 能执行拓扑排序的必须是一个有序无环图
 * 如果有一个非有向无环图，且A点出发向B经C可回到A，形成一个环。将从C到A的边方向改为从A到C，则变成有向无环图。
 * 拓扑排序常用来确定一个依赖关系集中，事物发生的顺序。例如，在日常工作中，可能会将项目拆分成A、B、C、D四个子部分来完成，但A依赖于B和D，C依赖于D。为了计算这个项目进行的顺序，可对这个关系集进行拓扑排序，得出一个线性的序列，则排在前面的任务就是需要先完成的任务。
 注意：这里得到的排序并不是唯一的！就好像你早上穿衣服可以先穿上衣也可以先穿裤子，只要里面的衣服在外面的衣服之前穿就行。
 * */
Object.defineProperty(exports, "__esModule", { value: true });
class Graph {
    constructor(vertices) {
        this.vertices = vertices;
        this.edges = 0;
        this.adj = [];
        this.vertexList = [];
        for (let i = 0; i < this.vertices; ++i) {
            this.adj[i] = [];
            this.adj[i].push("");
        }
    }
    // 添 v 到 w 的边
    addEdge(v, w) {
        this.adj[v].push(w); // v 点 能到 w
        this.adj[w].push(v); // w 点 能到 v
        this.edges++;
    }
    ;
    showGraph() {
        const visited = [];
        let output = "";
        for (let i = 0; i < this.vertices; ++i) {
            output = this.vertexList[i] + " -> ";
            visited.push(this.vertexList[i]);
            for (let j = 0; j < this.vertices; ++j) {
                if (this.adj[i][j] !== undefined && this.adj[i][j] !== "") {
                    if (visited.indexOf(this.vertexList[this.adj[i][j]]) < 0) {
                        output += this.vertexList[j] + " ";
                    }
                }
            }
            console.log(output);
            visited.pop();
        }
    }
    ;
    // 深度优先搜索
    dfs(v) {
        const marked = Array(this.vertices).fill(false);
        const { adj } = this;
        step(v);
        function step(v) {
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
    bfs(s) {
        const edgeTo = [];
        const queue = [];
        const marked = Array(this.vertices).fill(false);
        marked[s] = true;
        queue.push(s);
        while (queue.length > 0) {
            const w = queue.shift();
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
    ;
    // 最短路径
    pathTo(start, end) {
        // 如果是start开始的顶点 返回的edgeTo[start]一定等于undefined
        const { marked, edgeTo } = this.bfs(start);
        if (!marked[end]) { // 避免要到达的顶点其实并没有连接
            return undefined;
        }
        const path = [];
        // 一旦路径到达start 说明已经完成即停止循环
        for (let i = end; i != start; i = edgeTo[i]) {
            path.push(i);
        }
        path.push(start);
        return path.reverse();
    }
    ;
    // 拓扑排序
    topSort() {
        const stack = [];
        const visited = [];
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
                console.log(this.vertexList[stack[i]]);
            }
        }
    }
    ;
    topSortHelper(v, visited, stack) {
        visited[v] = true;
        this.adj[v].forEach((v, i, a) => {
            // 对于每个顶点的领接顶点 如果他已经没有其他顶点则推入栈中
            if (v !== "" && !visited[v]) {
                this.topSortHelper.call(this, v, visited, stack);
            }
        });
        stack.push(v);
    }
    ;
}
const g = new Graph(6);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoi5ouT5omR5o6S5bqPLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyLmlbDmja7nu5PmnoQv5ouT5omR5o6S5bqPLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7S0FLSzs7QUFFTCxNQUFNLEtBQUs7SUFLUCxZQUFtQixRQUFnQjtRQUFoQixhQUFRLEdBQVIsUUFBUSxDQUFRO1FBSm5DLFVBQUssR0FBRyxDQUFDLENBQUM7UUFDVixRQUFHLEdBQXNCLEVBQUUsQ0FBQztRQUM1QixlQUFVLEdBQWEsRUFBRSxDQUFDO1FBSXRCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3hCO0lBQ0wsQ0FBQztJQUdELGFBQWE7SUFDYixPQUFPLENBQUMsQ0FBUyxFQUFFLENBQVM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXO1FBQ2hDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVztRQUNoQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUFBLENBQUM7SUFFRixTQUFTO1FBQ0wsTUFBTSxPQUFPLEdBQWEsRUFBRSxDQUFDO1FBQzdCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNoQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRTtZQUNwQyxNQUFNLEdBQUcs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QUVMO0FBR0QsTUFBTSxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdkIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDaEIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDaEIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDaEIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDaEIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDaEIsQ0FBQyxDQUFDLFVBQVUsR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsaUJBQWlCO0lBQzNDLG1CQUFtQixFQUFFLG1CQUFtQjtJQUN4QyxZQUFZLENBQUMsQ0FBQztBQUNsQixDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3BCLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDog73miafooYzmi5PmiZHmjpLluo/nmoTlv4XpobvmmK/kuIDkuKrmnInluo/ml6Dnjq/lm75cclxuICog5aaC5p6c5pyJ5LiA5Liq6Z2e5pyJ5ZCR5peg546v5Zu+77yM5LiUQeeCueWHuuWPkeWQkULnu49D5Y+v5Zue5YiwQe+8jOW9ouaIkOS4gOS4queOr+OAguWwhuS7jkPliLBB55qE6L655pa55ZCR5pS55Li65LuOQeWIsEPvvIzliJnlj5jmiJDmnInlkJHml6Dnjq/lm77jgIJcclxuICog5ouT5omR5o6S5bqP5bi455So5p2l56Gu5a6a5LiA5Liq5L6d6LWW5YWz57O76ZuG5Lit77yM5LqL54mp5Y+R55Sf55qE6aG65bqP44CC5L6L5aaC77yM5Zyo5pel5bi45bel5L2c5Lit77yM5Y+v6IO95Lya5bCG6aG555uu5ouG5YiG5oiQQeOAgULjgIFD44CBROWbm+S4quWtkOmDqOWIhuadpeWujOaIkO+8jOS9hkHkvp3otZbkuo5C5ZKMRO+8jEPkvp3otZbkuo5E44CC5Li65LqG6K6h566X6L+Z5Liq6aG555uu6L+b6KGM55qE6aG65bqP77yM5Y+v5a+56L+Z5Liq5YWz57O76ZuG6L+b6KGM5ouT5omR5o6S5bqP77yM5b6X5Ye65LiA5Liq57q/5oCn55qE5bqP5YiX77yM5YiZ5o6S5Zyo5YmN6Z2i55qE5Lu75Yqh5bCx5piv6ZyA6KaB5YWI5a6M5oiQ55qE5Lu75Yqh44CCXHJcbiDms6jmhI/vvJrov5nph4zlvpfliLDnmoTmjpLluo/lubbkuI3mmK/llK/kuIDnmoTvvIHlsLHlpb3lg4/kvaDml6nkuIrnqb/ooaPmnI3lj6/ku6XlhYjnqb/kuIrooaPkuZ/lj6/ku6XlhYjnqb/oo6TlrZDvvIzlj6ropoHph4zpnaLnmoTooaPmnI3lnKjlpJbpnaLnmoTooaPmnI3kuYvliY3nqb/lsLHooYzjgIJcclxuICogKi9cclxuXHJcbmNsYXNzIEdyYXBoIHtcclxuICAgIGVkZ2VzID0gMDtcclxuICAgIGFkajogKG51bWJlciB8IFwiXCIpW11bXSA9IFtdO1xyXG4gICAgdmVydGV4TGlzdDogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdmVydGljZXM6IG51bWJlcikge1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudmVydGljZXM7ICsraSkge1xyXG4gICAgICAgICAgICB0aGlzLmFkaltpXSA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLmFkaltpXS5wdXNoKFwiXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8g5re7IHYg5YiwIHcg55qE6L65XHJcbiAgICBhZGRFZGdlKHY6IG51bWJlciwgdzogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5hZGpbdl0ucHVzaCh3KTsgLy8gdiDngrkg6IO95YiwIHdcclxuICAgICAgICB0aGlzLmFkalt3XS5wdXNoKHYpOyAvLyB3IOeCuSDog73liLAgdlxyXG4gICAgICAgIHRoaXMuZWRnZXMrKztcclxuICAgIH07XHJcblxyXG4gICAgc2hvd0dyYXBoKCkge1xyXG4gICAgICAgIGNvbnN0IHZpc2l0ZWQ6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgbGV0IG91dHB1dCA9IFwiXCI7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnZlcnRpY2VzOyArK2kpIHtcclxuICAgICAgICAgICAgb3V0cHV0ID0gdGhpcy52ZXJ0ZXhMaXN0W2ldICsgXCIgLT4gXCI7XHJcbiAgICAgICAgICAgIHZpc2l0ZWQucHVzaCh0aGlzLnZlcnRleExpc3RbaV0pO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMudmVydGljZXM7ICsraikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYWRqW2ldW2pdICE9PSB1bmRlZmluZWQgJiYgdGhpcy5hZGpbaV1bal0gIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmlzaXRlZC5pbmRleE9mKHRoaXMudmVydGV4TGlzdFs8bnVtYmVyPnRoaXMuYWRqW2ldW2pdXSkgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dCArPSB0aGlzLnZlcnRleExpc3Rbal0gKyBcIiBcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2cob3V0cHV0KTtcclxuICAgICAgICAgICAgdmlzaXRlZC5wb3AoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIOa3seW6puS8mOWFiOaQnOe0olxyXG4gICAgZGZzKHY6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IG1hcmtlZCA9IEFycmF5KHRoaXMudmVydGljZXMpLmZpbGwoZmFsc2UpO1xyXG4gICAgICAgIGNvbnN0IHthZGp9ID0gdGhpcztcclxuICAgICAgICBzdGVwKHYpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHY6IG51bWJlcikge1xyXG4gICAgICAgICAgICBtYXJrZWRbdl0gPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAoYWRqW3ZdICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6K6/6Zeu5LqG6aG254K5XCIgKyB2KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhZGpbdl0uZm9yRWFjaCgodikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHYgIT09IFwiXCIgJiYgIW1hcmtlZFt2XSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0ZXAodik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDlub/luqbkvJjlhYjmkJzntKJcclxuICAgIGJmcyhzOiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBlZGdlVG86IG51bWJlcltdID0gW107XHJcbiAgICAgICAgY29uc3QgcXVldWU6IG51bWJlcltdID0gW107XHJcbiAgICAgICAgY29uc3QgbWFya2VkID0gQXJyYXkodGhpcy52ZXJ0aWNlcykuZmlsbChmYWxzZSk7XHJcbiAgICAgICAgbWFya2VkW3NdID0gdHJ1ZTtcclxuICAgICAgICBxdWV1ZS5wdXNoKHMpO1xyXG5cclxuICAgICAgICB3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCB3ID0gcXVldWUuc2hpZnQoKSE7XHJcbiAgICAgICAgICAgIGlmICh3ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6K6/6Zeu5LqG6IqC54K5IFwiICsgdyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5hZGpbd10uZm9yRWFjaCgodikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHYgIT09IFwiXCIgJiYgIW1hcmtlZFt2XSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHYsIHcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVkZ2VUb1t2XSA9IHc7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFya2VkW3ZdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBxdWV1ZS5wdXNoKHYpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZWRnZVRvKTtcclxuICAgICAgICByZXR1cm4ge2VkZ2VUbywgbWFya2VkfTtcclxuICAgIH07XHJcblxyXG4gICAgLy8g5pyA55+t6Lev5b6EXHJcbiAgICBwYXRoVG8oc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpIHtcclxuICAgICAgICAvLyDlpoLmnpzmmK9zdGFydOW8gOWni+eahOmhtueCuSDov5Tlm57nmoRlZGdlVG9bc3RhcnRd5LiA5a6a562J5LqOdW5kZWZpbmVkXHJcbiAgICAgICAgY29uc3Qge21hcmtlZCwgZWRnZVRvfSA9IHRoaXMuYmZzKHN0YXJ0KTtcclxuXHJcbiAgICAgICAgaWYgKCFtYXJrZWRbZW5kXSkgeyAvLyDpgb/lhY3opoHliLDovr7nmoTpobbngrnlhbblrp7lubbmsqHmnInov57mjqVcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcGF0aCA9IFtdO1xyXG4gICAgICAgIC8vIOS4gOaXpui3r+W+hOWIsOi+vnN0YXJ0IOivtOaYjuW3sue7j+WujOaIkOWNs+WBnOatouW+queOr1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBlbmQ7IGkgIT0gc3RhcnQ7IGkgPSBlZGdlVG9baV0pIHtcclxuICAgICAgICAgICAgcGF0aC5wdXNoKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwYXRoLnB1c2goc3RhcnQpO1xyXG4gICAgICAgIHJldHVybiBwYXRoLnJldmVyc2UoKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8g5ouT5omR5o6S5bqPXHJcbiAgICB0b3BTb3J0KCkge1xyXG4gICAgICAgIGNvbnN0IHN0YWNrOiAoZmFsc2UgfCBudW1iZXIpW10gPSBbXTtcclxuICAgICAgICBjb25zdCB2aXNpdGVkOiBib29sZWFuW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudmVydGljZXM7IGkrKykge1xyXG4gICAgICAgICAgICB2aXNpdGVkW2ldID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy52ZXJ0aWNlczsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICghdmlzaXRlZFtpXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b3BTb3J0SGVscGVyKGksIHZpc2l0ZWQsIHN0YWNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YWNrLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChzdGFja1tpXSAhPT0gdW5kZWZpbmVkICYmIHN0YWNrW2ldICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy52ZXJ0ZXhMaXN0WzxudW1iZXI+c3RhY2tbaV1dKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdG9wU29ydEhlbHBlcih2OiBudW1iZXIsIHZpc2l0ZWQ6IGJvb2xlYW5bXSwgc3RhY2s6IGFueVtdKSB7XHJcbiAgICAgICAgdmlzaXRlZFt2XSA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuYWRqW3ZdLmZvckVhY2goKHYsIGksIGEpID0+IHtcclxuICAgICAgICAgICAgLy8g5a+55LqO5q+P5Liq6aG254K555qE6aKG5o6l6aG254K5IOWmguaenOS7luW3sue7j+ayoeacieWFtuS7lumhtueCueWImeaOqOWFpeagiOS4rVxyXG4gICAgICAgICAgICBpZiAodiAhPT0gXCJcIiAmJiAhdmlzaXRlZFt2XSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b3BTb3J0SGVscGVyLmNhbGwodGhpcywgdiwgdmlzaXRlZCwgc3RhY2spO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc3RhY2sucHVzaCh2KTtcclxuICAgIH07XHJcblxyXG59XHJcblxyXG5cclxuY29uc3QgZyA9IG5ldyBHcmFwaCg2KTtcclxuZy5hZGRFZGdlKDEsIDIpO1xyXG5nLmFkZEVkZ2UoMiwgNSk7XHJcbmcuYWRkRWRnZSgxLCAzKTtcclxuZy5hZGRFZGdlKDIsIDQpO1xyXG5nLmFkZEVkZ2UoMCwgMSk7XHJcbmcudmVydGV4TGlzdCA9IFtcIkNTMVwiLCBcIkNTMlwiLCBcIkRhdGEgU3RydWN0dXJlc1wiLFxyXG4gICAgXCJBc3NlbWJseSBMYW5ndWFnZVwiLCBcIk9wZXJhdGluZyBTeXN0ZW1zXCIsXHJcbiAgICBcIkFsZ29yaXRobXNcIl07XHJcbmcuc2hvd0dyYXBoKCk7XHJcbmNvbnNvbGUubG9nKFwi5ouT5omR5o6S5bqPXCIpO1xyXG5nLnRvcFNvcnQoKTtcclxuXHJcbmV4cG9ydCB7fTtcclxuIl19