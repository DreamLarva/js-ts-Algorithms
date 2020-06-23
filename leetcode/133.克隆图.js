"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
        new_node.neighbors = node.neighbors.map((node) => step(node));
        return new_node;
    }
};
const assert_1 = __importDefault(require("assert"));
{
    const node1 = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);
    const node4 = new Node(4);
    const node5 = new Node(5);
    node1.neighbors = [node2, node3];
    node2.neighbors = [node1, node5];
    node3.neighbors = [node1, node4];
    node4.neighbors = [node3, node5];
    node5.neighbors = [node1, node4];
    assert_1.default.deepStrictEqual(cloneGraph(node1), node1);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTMzLuWFi+mahuWbvi5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTMzLuWFi+mahuWbvi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXVCSTtBQUNKOzs7Ozs7R0FNRztBQUNILE1BQU0sSUFBSTtJQUNSLFlBQW1CLEdBQVcsRUFBUyxZQUFvQixFQUFFO1FBQTFDLFFBQUcsR0FBSCxHQUFHLENBQVE7UUFBUyxjQUFTLEdBQVQsU0FBUyxDQUFhO1FBQzNELElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDN0IsQ0FBQztDQUNGO0FBRUQ7OztHQUdHO0FBQ0gsSUFBSSxVQUFVLEdBQUcsVUFBVSxJQUFVO0lBQ25DLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7SUFDdEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFbEIsU0FBUyxJQUFJLENBQUMsSUFBVTtRQUN0QixJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO1lBQUUsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hDLFNBQVM7UUFDVCxhQUFhO1FBQ2IsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsTUFBTSxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3hCLFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzlELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7QUFDSCxDQUFDLENBQUM7QUFFRixvREFBNEI7QUFFNUI7SUFDRSxNQUFNLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixNQUFNLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixNQUFNLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixNQUFNLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixNQUFNLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixLQUFLLENBQUMsU0FBUyxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDakMsS0FBSyxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNqQyxLQUFLLENBQUMsU0FBUyxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDakMsZ0JBQU0sQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0NBQ2xEIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue7meWumuaXoOWQkei/numAmuWbvuS4reS4gOS4quiKgueCueeahOW8leeUqO+8jOi/lOWbnuivpeWbvueahOa3seaLt+i0ne+8iOWFi+mahu+8ieOAguWbvuS4reeahOavj+S4quiKgueCuemDveWMheWQq+Wug+eahOWAvCB2YWzvvIhJbnTvvIkg5ZKM5YW26YK75bGF55qE5YiX6KGo77yIbGlzdFtOb2RlXe+8ieOAglxuXG7npLrkvovvvJpcbiAxIC0tIDJcbiB8ICAgIHxcbiA0IC0tIDNcbui+k+WFpe+8mlxue1wiJGlkXCI6XCIxXCIsXCJuZWlnaGJvcnNcIjpbe1wiJGlkXCI6XCIyXCIsXCJuZWlnaGJvcnNcIjpbe1wiJHJlZlwiOlwiMVwifSx7XCIkaWRcIjpcIjNcIixcIm5laWdoYm9yc1wiOlt7XCIkcmVmXCI6XCIyXCJ9LHtcIiRpZFwiOlwiNFwiLFwibmVpZ2hib3JzXCI6W3tcIiRyZWZcIjpcIjNcIn0se1wiJHJlZlwiOlwiMVwifV0sXCJ2YWxcIjo0fV0sXCJ2YWxcIjozfV0sXCJ2YWxcIjoyfSx7XCIkcmVmXCI6XCI0XCJ9XSxcInZhbFwiOjF9XG5cbuino+mHiu+8mlxu6IqC54K5IDEg55qE5YC85pivIDHvvIzlroPmnInkuKTkuKrpgrvlsYXvvJroioLngrkgMiDlkowgNCDjgIJcbuiKgueCuSAyIOeahOWAvOaYryAy77yM5a6D5pyJ5Lik5Liq6YK75bGF77ya6IqC54K5IDEg5ZKMIDMg44CCXG7oioLngrkgMyDnmoTlgLzmmK8gM++8jOWug+acieS4pOS4qumCu+Wxhe+8muiKgueCuSAyIOWSjCA0IOOAglxu6IqC54K5IDQg55qE5YC85pivIDTvvIzlroPmnInkuKTkuKrpgrvlsYXvvJroioLngrkgMSDlkowgMyDjgIJcblxuXG7mj5DnpLrvvJpcblxu6IqC54K55pWw5LuL5LqOIDEg5YiwIDEwMCDkuYvpl7TjgIJcbuaXoOWQkeWbvuaYr+S4gOS4queugOWNleWbvu+8jOi/meaEj+WRs+edgOWbvuS4reayoeaciemHjeWkjeeahOi+ue+8jOS5n+ayoeacieiHqueOr+OAglxu55Sx5LqO5Zu+5piv5peg5ZCR55qE77yM5aaC5p6c6IqC54K5IHAg5piv6IqC54K5IHEg55qE6YK75bGF77yM6YKj5LmI6IqC54K5IHEg5Lmf5b+F6aG75piv6IqC54K5IHAg55qE6YK75bGF44CCXG7lv4XpobvlsIbnu5nlrproioLngrnnmoTmi7fotJ3kvZzkuLrlr7nlhYvpmoblm77nmoTlvJXnlKjov5Tlm57jgIJcbiogKi9cbi8qKlxuICogLy8gRGVmaW5pdGlvbiBmb3IgYSBOb2RlLlxuICogZnVuY3Rpb24gTm9kZSh2YWwsbmVpZ2hib3JzKSB7XG4gKiAgICB0aGlzLnZhbCA9IHZhbDtcbiAqICAgIHRoaXMubmVpZ2hib3JzID0gbmVpZ2hib3JzO1xuICogfTtcbiAqL1xuY2xhc3MgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB2YWw6IG51bWJlciwgcHVibGljIG5laWdoYm9yczogTm9kZVtdID0gW10pIHtcbiAgICB0aGlzLnZhbCA9IHZhbDtcbiAgICB0aGlzLm5laWdoYm9ycyA9IG5laWdoYm9ycztcbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICogQHJldHVybiB7Tm9kZX1cbiAqL1xudmFyIGNsb25lR3JhcGggPSBmdW5jdGlvbiAobm9kZTogTm9kZSk6IE5vZGUge1xuICBjb25zdCBtYXAgPSBuZXcgTWFwKCk7XG4gIHJldHVybiBzdGVwKG5vZGUpO1xuXG4gIGZ1bmN0aW9uIHN0ZXAobm9kZTogTm9kZSk6IE5vZGUge1xuICAgIGlmIChtYXAuaGFzKG5vZGUpKSByZXR1cm4gbWFwLmdldChub2RlKTtcbiAgICAvLyDms6jmhI8g5b+F6aG75YWIXG4gICAgLy8gMS4g5bu656uLIG5vZGVcbiAgICAvLyAyLiDlrZjlhaUgbWFwXG4gICAgLy8gMy4g6K6+572uIG5laWdoYm9yc1xuICAgIC8vIOWQpuWImeS8muWvvOiHtCDlvqrnjq/lvJXnlKgg54iG5qCIXG4gICAgY29uc3QgbmV3X25vZGUgPSBuZXcgTm9kZShub2RlLnZhbCk7XG4gICAgbWFwLnNldChub2RlLCBuZXdfbm9kZSk7XG4gICAgbmV3X25vZGUubmVpZ2hib3JzID0gbm9kZS5uZWlnaGJvcnMubWFwKChub2RlKSA9PiBzdGVwKG5vZGUpKTtcbiAgICByZXR1cm4gbmV3X25vZGU7XG4gIH1cbn07XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG57XG4gIGNvbnN0IG5vZGUxID0gbmV3IE5vZGUoMSk7XG4gIGNvbnN0IG5vZGUyID0gbmV3IE5vZGUoMik7XG4gIGNvbnN0IG5vZGUzID0gbmV3IE5vZGUoMyk7XG4gIGNvbnN0IG5vZGU0ID0gbmV3IE5vZGUoNCk7XG4gIGNvbnN0IG5vZGU1ID0gbmV3IE5vZGUoNSk7XG4gIG5vZGUxLm5laWdoYm9ycyA9IFtub2RlMiwgbm9kZTNdO1xuICBub2RlMi5uZWlnaGJvcnMgPSBbbm9kZTEsIG5vZGU1XTtcbiAgbm9kZTMubmVpZ2hib3JzID0gW25vZGUxLCBub2RlNF07XG4gIG5vZGU0Lm5laWdoYm9ycyA9IFtub2RlMywgbm9kZTVdO1xuICBub2RlNS5uZWlnaGJvcnMgPSBbbm9kZTEsIG5vZGU0XTtcbiAgYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChjbG9uZUdyYXBoKG5vZGUxKSwgbm9kZTEpO1xufVxuIl19