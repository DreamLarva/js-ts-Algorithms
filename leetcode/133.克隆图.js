"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定无向连通图中一个节点的引用，返回该图的深拷贝（克隆）。图中的每个节点都包含它的值 val（Int） 和其邻居的列表（list[Node]）。

示例：
 1 -- 2
 |    |
 4 -- 3
输入：
{"$id":"1","neighbors":[{"$id":"2","neighbors":[{"$ref":"1"},{"$id":"3","neighbors":[{"$ref":"2"},{"$id":"4","neighbors":[{"$ref":"3"},{"$ref":"1"}],"val":4}],"val":3}],"val":2},{"$ref":"4"}],"val":1}

解释：
节点 1 的值是 1，它有两个邻居：节点 2 和 4 。
节点 2 的值是 2，它有两个邻居：节点 1 和 3 。
节点 3 的值是 3，它有两个邻居：节点 2 和 4 。
节点 4 的值是 4，它有两个邻居：节点 1 和 3 。


提示：

节点数介于 1 到 100 之间。
无向图是一个简单图，这意味着图中没有重复的边，也没有自环。
由于图是无向的，如果节点 p 是节点 q 的邻居，那么节点 q 也必须是节点 p 的邻居。
必须将给定节点的拷贝作为对克隆图的引用返回。
* */
/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
class Node {
    constructor(val, neighbors = []) {
        this.val = val;
        this.neighbors = neighbors;
        this.val = val;
        this.neighbors = neighbors;
    }
}
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
    const map = new Map();
    return step(node);
    function step(node) {
        if (map.has(node))
            return map.get(node);
        // 注意 必须先
        // 1. 建立 node
        // 2. 存入 map
        // 3. 设置 neighbors
        // 否则会导致 循环引用 爆栈
        const new_node = new Node(node.val);
        map.set(node, new_node);
        new_node.neighbors = node.neighbors.map(node => step(node));
        return new_node;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTMzLuWFi+mahuWbvi5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTMzLuWFi+mahuWbvi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXVCSTtBQUNKOzs7Ozs7R0FNRztBQUNILE1BQU0sSUFBSTtJQUNOLFlBQW1CLEdBQVcsRUFBUyxZQUFvQixFQUFFO1FBQTFDLFFBQUcsR0FBSCxHQUFHLENBQVE7UUFBUyxjQUFTLEdBQVQsU0FBUyxDQUFhO1FBQ3pELElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDL0IsQ0FBQztDQUVKO0FBRUQ7OztHQUdHO0FBQ0gsSUFBSSxVQUFVLEdBQUcsVUFBVSxJQUFVO0lBQ2pDLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7SUFDdEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFbEIsU0FBUyxJQUFJLENBQUMsSUFBVTtRQUNwQixJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO1lBQUUsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hDLFNBQVM7UUFDVCxhQUFhO1FBQ2IsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsTUFBTSxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3hCLFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUM1RCxPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDO0FBQ0wsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxu57uZ5a6a5peg5ZCR6L+e6YCa5Zu+5Lit5LiA5Liq6IqC54K555qE5byV55So77yM6L+U5Zue6K+l5Zu+55qE5rex5ou36LSd77yI5YWL6ZqG77yJ44CC5Zu+5Lit55qE5q+P5Liq6IqC54K56YO95YyF5ZCr5a6D55qE5YC8IHZhbO+8iEludO+8iSDlkozlhbbpgrvlsYXnmoTliJfooajvvIhsaXN0W05vZGVd77yJ44CCXHJcblxyXG7npLrkvovvvJpcclxuIDEgLS0gMlxyXG4gfCAgICB8XHJcbiA0IC0tIDNcclxu6L6T5YWl77yaXHJcbntcIiRpZFwiOlwiMVwiLFwibmVpZ2hib3JzXCI6W3tcIiRpZFwiOlwiMlwiLFwibmVpZ2hib3JzXCI6W3tcIiRyZWZcIjpcIjFcIn0se1wiJGlkXCI6XCIzXCIsXCJuZWlnaGJvcnNcIjpbe1wiJHJlZlwiOlwiMlwifSx7XCIkaWRcIjpcIjRcIixcIm5laWdoYm9yc1wiOlt7XCIkcmVmXCI6XCIzXCJ9LHtcIiRyZWZcIjpcIjFcIn1dLFwidmFsXCI6NH1dLFwidmFsXCI6M31dLFwidmFsXCI6Mn0se1wiJHJlZlwiOlwiNFwifV0sXCJ2YWxcIjoxfVxyXG5cclxu6Kej6YeK77yaXHJcbuiKgueCuSAxIOeahOWAvOaYryAx77yM5a6D5pyJ5Lik5Liq6YK75bGF77ya6IqC54K5IDIg5ZKMIDQg44CCXHJcbuiKgueCuSAyIOeahOWAvOaYryAy77yM5a6D5pyJ5Lik5Liq6YK75bGF77ya6IqC54K5IDEg5ZKMIDMg44CCXHJcbuiKgueCuSAzIOeahOWAvOaYryAz77yM5a6D5pyJ5Lik5Liq6YK75bGF77ya6IqC54K5IDIg5ZKMIDQg44CCXHJcbuiKgueCuSA0IOeahOWAvOaYryA077yM5a6D5pyJ5Lik5Liq6YK75bGF77ya6IqC54K5IDEg5ZKMIDMg44CCXHJcblxyXG5cclxu5o+Q56S677yaXHJcblxyXG7oioLngrnmlbDku4vkuo4gMSDliLAgMTAwIOS5i+mXtOOAglxyXG7ml6DlkJHlm77mmK/kuIDkuKrnroDljZXlm77vvIzov5nmhI/lkbPnnYDlm77kuK3msqHmnInph43lpI3nmoTovrnvvIzkuZ/msqHmnInoh6rnjq/jgIJcclxu55Sx5LqO5Zu+5piv5peg5ZCR55qE77yM5aaC5p6c6IqC54K5IHAg5piv6IqC54K5IHEg55qE6YK75bGF77yM6YKj5LmI6IqC54K5IHEg5Lmf5b+F6aG75piv6IqC54K5IHAg55qE6YK75bGF44CCXHJcbuW/hemhu+Wwhue7meWumuiKgueCueeahOaLt+i0neS9nOS4uuWvueWFi+mahuWbvueahOW8leeUqOi/lOWbnuOAglxyXG4qICovXHJcbi8qKlxyXG4gKiAvLyBEZWZpbml0aW9uIGZvciBhIE5vZGUuXHJcbiAqIGZ1bmN0aW9uIE5vZGUodmFsLG5laWdoYm9ycykge1xyXG4gKiAgICB0aGlzLnZhbCA9IHZhbDtcclxuICogICAgdGhpcy5uZWlnaGJvcnMgPSBuZWlnaGJvcnM7XHJcbiAqIH07XHJcbiAqL1xyXG5jbGFzcyBOb2RlIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB2YWw6IG51bWJlciwgcHVibGljIG5laWdoYm9yczogTm9kZVtdID0gW10pIHtcclxuICAgICAgICB0aGlzLnZhbCA9IHZhbDtcclxuICAgICAgICB0aGlzLm5laWdoYm9ycyA9IG5laWdoYm9ycztcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge05vZGV9IG5vZGVcclxuICogQHJldHVybiB7Tm9kZX1cclxuICovXHJcbnZhciBjbG9uZUdyYXBoID0gZnVuY3Rpb24gKG5vZGU6IE5vZGUpOiBOb2RlIHtcclxuICAgIGNvbnN0IG1hcCA9IG5ldyBNYXAoKTtcclxuICAgIHJldHVybiBzdGVwKG5vZGUpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHN0ZXAobm9kZTogTm9kZSk6IE5vZGUge1xyXG4gICAgICAgIGlmIChtYXAuaGFzKG5vZGUpKSByZXR1cm4gbWFwLmdldChub2RlKTtcclxuICAgICAgICAvLyDms6jmhI8g5b+F6aG75YWIXHJcbiAgICAgICAgLy8gMS4g5bu656uLIG5vZGVcclxuICAgICAgICAvLyAyLiDlrZjlhaUgbWFwXHJcbiAgICAgICAgLy8gMy4g6K6+572uIG5laWdoYm9yc1xyXG4gICAgICAgIC8vIOWQpuWImeS8muWvvOiHtCDlvqrnjq/lvJXnlKgg54iG5qCIXHJcbiAgICAgICAgY29uc3QgbmV3X25vZGUgPSBuZXcgTm9kZShub2RlLnZhbCk7XHJcbiAgICAgICAgbWFwLnNldChub2RlLCBuZXdfbm9kZSk7XHJcbiAgICAgICAgbmV3X25vZGUubmVpZ2hib3JzID0gbm9kZS5uZWlnaGJvcnMubWFwKG5vZGUgPT4gc3RlcChub2RlKSk7XHJcbiAgICAgICAgcmV0dXJuIG5ld19ub2RlO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHt9O1xyXG4iXX0=