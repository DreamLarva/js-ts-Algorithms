"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
function isBipartite(graph) {
    /**
     * 深度优先后者 广度优先都可以
     * 从任意点 开始染色,相邻的点 染成另一种颜色
     * 只要颜色冲突就 判断为false
     * */
    let Color;
    (function (Color) {
        Color[Color["red"] = 0] = "red";
        Color[Color["green"] = 1] = "green";
    })(Color || (Color = {}));
    // 可能出现单独的点 或者 两个不相互连通的图 不与任何边相连 所以要 循环
    for (let i = 0; i < graph.length; i++) {
        if (!dfs(i, Color.green, graph, []))
            return false;
    }
    return true;
    /**
     * @param currentNode 要检查的点
     * @param color 希望检查的点 的颜色
     * @param graph 图
     * @param colorMap 存储的已经染色的点
     * */
    function dfs(currentNode, color, graph, colorMap) {
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
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(isBipartite([
    [1, 3],
    [0, 2],
    [1, 3],
    [0, 2],
]), true);
assert_1.default.strictEqual(isBipartite([
    [1, 2, 3],
    [0, 2],
    [0, 1, 3],
    [0, 2],
]), false);
assert_1.default.strictEqual(isBipartite([
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
]), false);
assert_1.default.strictEqual(isBipartite([
    [1, 3],
    [0, 2],
    [1, 3],
    [0, 2],
]), true);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzg1LuWIpOaWreS6jOWIhuWbvi5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNzg1LuWIpOaWreS6jOWIhuWbvi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBcUNJO0FBQ0osU0FBUyxXQUFXLENBQUMsS0FBaUI7SUFDcEM7Ozs7U0FJSztJQUNMLElBQUssS0FHSjtJQUhELFdBQUssS0FBSztRQUNSLCtCQUFHLENBQUE7UUFDSCxtQ0FBSyxDQUFBO0lBQ1AsQ0FBQyxFQUhJLEtBQUssS0FBTCxLQUFLLFFBR1Q7SUFFRCx1Q0FBdUM7SUFDdkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDckMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDO1lBQUUsT0FBTyxLQUFLLENBQUM7S0FDbkQ7SUFDRCxPQUFPLElBQUksQ0FBQztJQUVaOzs7OztTQUtLO0lBQ0wsU0FBUyxHQUFHLENBQ1YsV0FBbUIsRUFDbkIsS0FBWSxFQUNaLEtBQWlCLEVBQ2pCLFFBQTBCO1FBRTFCLElBQUksUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUksRUFBRTtZQUNqQyxRQUFRLENBQUMsV0FBVyxDQUFDLEdBQUcsS0FBSyxDQUFDO1lBQzlCLE1BQU0sVUFBVSxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDN0IsS0FBSyxNQUFNLElBQUksSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLEVBQUU7Z0JBQ3JDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLEVBQUU7b0JBQzNDLE9BQU8sS0FBSyxDQUFDO2lCQUNkO2FBQ0Y7WUFDRCxPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssS0FBSyxDQUFDO0lBQ3pDLENBQUM7QUFDSCxDQUFDO0FBRUQsb0RBQTRCO0FBQzVCLGdCQUFNLENBQUMsV0FBVyxDQUNoQixXQUFXLENBQUM7SUFDVixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7Q0FDUCxDQUFDLEVBQ0YsSUFBSSxDQUNMLENBQUM7QUFFRixnQkFBTSxDQUFDLFdBQVcsQ0FDaEIsV0FBVyxDQUFDO0lBQ1YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7Q0FDUCxDQUFDLEVBQ0YsS0FBSyxDQUNOLENBQUM7QUFFRixnQkFBTSxDQUFDLFdBQVcsQ0FDaEIsV0FBVyxDQUFDO0lBQ1YsRUFBRTtJQUNGLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNaLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1osQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNmLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Q0FDbkIsQ0FBQyxFQUNGLEtBQUssQ0FDTixDQUFDO0FBRUYsZ0JBQU0sQ0FBQyxXQUFXLENBQ2hCLFdBQVcsQ0FBQztJQUNWLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztDQUNQLENBQUMsRUFDRixJQUFJLENBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG43ODUuIOWIpOaWreS6jOWIhuWbvlxu57uZ5a6a5LiA5Liq5peg5ZCR5Zu+Z3JhcGjvvIzlvZPov5nkuKrlm77kuLrkuozliIblm77ml7bov5Tlm550cnVl44CCXG5cbuWmguaenOaIkeS7rOiDveWwhuS4gOS4quWbvueahOiKgueCuembhuWQiOWIhuWJsuaIkOS4pOS4queLrOeri+eahOWtkOmbhkHlkoxC77yM5bm25L2/5Zu+5Lit55qE5q+P5LiA5p2h6L6555qE5Lik5Liq6IqC54K55LiA5Liq5p2l6IeqQembhuWQiO+8jOS4gOS4quadpeiHqkLpm4blkIjvvIzmiJHku6zlsLHlsIbov5nkuKrlm77np7DkuLrkuozliIblm77jgIJcblxuZ3JhcGjlsIbkvJrku6XpgrvmjqXooajmlrnlvI/nu5nlh7rvvIxncmFwaFtpXeihqOekuuWbvuS4reS4juiKgueCuWnnm7jov57nmoTmiYDmnInoioLngrnjgIJcbuavj+S4quiKgueCuemDveaYr+S4gOS4quWcqDDliLBncmFwaC5sZW5ndGgtMeS5i+mXtOeahOaVtOaVsOOAgui/meWbvuS4reayoeacieiHqueOryjkuIDkuKrngrnml6LmmK/ovrnnmoTotbfngrnkuZ/mmK/nu4jngrkp5ZKM5bmz6KGM6L65KOS4pOS4queCueS5i+mXtOacieWkmuadoei+uSnvvJogZ3JhcGhbaV0g5Lit5LiN5a2Y5Zyoae+8jOW5tuS4lGdyYXBoW2ld5Lit5rKh5pyJ6YeN5aSN55qE5YC844CCXG5cblxu56S65L6LIDE6XG7ovpPlhaU6IFtbMSwzXSwgWzAsMl0sIFsxLDNdLCBbMCwyXV1cbui+k+WHujogdHJ1ZVxu6Kej6YeKOlxu5peg5ZCR5Zu+5aaC5LiLOlxuMC0tLS0xXG58ICAgIHxcbnwgICAgfFxuMy0tLS0yXG7miJHku6zlj6/ku6XlsIboioLngrnliIbmiJDkuKTnu4Q6IHswLCAyfSDlkowgezEsIDN944CCXG5cbuekuuS+iyAyOlxu6L6T5YWlOiBbWzEsMiwzXSwgWzAsMl0sIFswLDEsM10sIFswLDJdXVxu6L6T5Ye6OiBmYWxzZVxu6Kej6YeKOlxu5peg5ZCR5Zu+5aaC5LiLOlxuMC0tLS0xXG58IFxcICB8XG58ICBcXCB8XG4zLS0tLTJcbuaIkeS7rOS4jeiDveWwhuiKgueCueWIhuWJsuaIkOS4pOS4queLrOeri+eahOWtkOmbhuOAglxu5rOo5oSPOlxuXG5ncmFwaCDnmoTplb/luqbojIPlm7TkuLogWzEsIDEwMF3jgIJcbmdyYXBoW2ldIOS4reeahOWFg+e0oOeahOiMg+WbtOS4uiBbMCwgZ3JhcGgubGVuZ3RoIC0gMV3jgIJcbmdyYXBoW2ldIOS4jeS8muWMheWQqyBpIOaIluiAheaciemHjeWkjeeahOWAvOOAglxu5Zu+5piv5peg5ZCR55qEOiDlpoLmnpxqIOWcqCBncmFwaFtpXemHjOi+uSwg6YKj5LmIIGkg5Lmf5Lya5ZyoIGdyYXBoW2pd6YeM6L6544CCXG4qICovXG5mdW5jdGlvbiBpc0JpcGFydGl0ZShncmFwaDogbnVtYmVyW11bXSk6IGJvb2xlYW4ge1xuICAvKipcbiAgICog5rex5bqm5LyY5YWI5ZCO6ICFIOW5v+W6puS8mOWFiOmDveWPr+S7pVxuICAgKiDku47ku7vmhI/ngrkg5byA5aeL5p+T6ImyLOebuOmCu+eahOeCuSDmn5PmiJDlj6bkuIDnp43popzoibJcbiAgICog5Y+q6KaB6aKc6Imy5Yay56qB5bCxIOWIpOaWreS4umZhbHNlXG4gICAqICovXG4gIGVudW0gQ29sb3Ige1xuICAgIHJlZCxcbiAgICBncmVlbixcbiAgfVxuXG4gIC8vIOWPr+iDveWHuueOsOWNleeLrOeahOeCuSDmiJbogIUg5Lik5Liq5LiN55u45LqS6L+e6YCa55qE5Zu+IOS4jeS4juS7u+S9lei+ueebuOi/niDmiYDku6XopoEg5b6q546vXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZ3JhcGgubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIWRmcyhpLCBDb2xvci5ncmVlbiwgZ3JhcGgsIFtdKSkgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0gY3VycmVudE5vZGUg6KaB5qOA5p+l55qE54K5XG4gICAqIEBwYXJhbSBjb2xvciDluIzmnJvmo4Dmn6XnmoTngrkg55qE6aKc6ImyXG4gICAqIEBwYXJhbSBncmFwaCDlm75cbiAgICogQHBhcmFtIGNvbG9yTWFwIOWtmOWCqOeahOW3sue7j+afk+iJsueahOeCuVxuICAgKiAqL1xuICBmdW5jdGlvbiBkZnMoXG4gICAgY3VycmVudE5vZGU6IG51bWJlcixcbiAgICBjb2xvcjogQ29sb3IsXG4gICAgZ3JhcGg6IG51bWJlcltdW10sXG4gICAgY29sb3JNYXA6IChDb2xvciB8IHZvaWQpW11cbiAgKTogYm9vbGVhbiB7XG4gICAgaWYgKGNvbG9yTWFwW2N1cnJlbnROb2RlXSA9PSBudWxsKSB7XG4gICAgICBjb2xvck1hcFtjdXJyZW50Tm9kZV0gPSBjb2xvcjtcbiAgICAgIGNvbnN0IG90aGVyQ29sb3IgPSBjb2xvciBeIDE7XG4gICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgZ3JhcGhbY3VycmVudE5vZGVdKSB7XG4gICAgICAgIGlmICghZGZzKG5vZGUsIG90aGVyQ29sb3IsIGdyYXBoLCBjb2xvck1hcCkpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gY29sb3JNYXBbY3VycmVudE5vZGVdID09PSBjb2xvcjtcbiAgfVxufVxuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcbmFzc2VydC5zdHJpY3RFcXVhbChcbiAgaXNCaXBhcnRpdGUoW1xuICAgIFsxLCAzXSxcbiAgICBbMCwgMl0sXG4gICAgWzEsIDNdLFxuICAgIFswLCAyXSxcbiAgXSksXG4gIHRydWVcbik7XG5cbmFzc2VydC5zdHJpY3RFcXVhbChcbiAgaXNCaXBhcnRpdGUoW1xuICAgIFsxLCAyLCAzXSxcbiAgICBbMCwgMl0sXG4gICAgWzAsIDEsIDNdLFxuICAgIFswLCAyXSxcbiAgXSksXG4gIGZhbHNlXG4pO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwoXG4gIGlzQmlwYXJ0aXRlKFtcbiAgICBbXSxcbiAgICBbMiwgNCwgNl0sXG4gICAgWzEsIDQsIDgsIDldLFxuICAgIFs3LCA4XSxcbiAgICBbMSwgMiwgOCwgOV0sXG4gICAgWzYsIDldLFxuICAgIFsxLCA1LCA3LCA4LCA5XSxcbiAgICBbMywgNiwgOV0sXG4gICAgWzIsIDMsIDQsIDYsIDldLFxuICAgIFsyLCA0LCA1LCA2LCA3LCA4XSxcbiAgXSksXG4gIGZhbHNlXG4pO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwoXG4gIGlzQmlwYXJ0aXRlKFtcbiAgICBbMSwgM10sXG4gICAgWzAsIDJdLFxuICAgIFsxLCAzXSxcbiAgICBbMCwgMl0sXG4gIF0pLFxuICB0cnVlXG4pO1xuIl19