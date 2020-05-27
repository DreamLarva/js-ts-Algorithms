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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTMzLuWFi+mahuWbvi5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTMzLuWFi+mahuWbvi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXVCSTtBQUNKOzs7Ozs7R0FNRztBQUNILE1BQU0sSUFBSTtJQUNSLFlBQW1CLEdBQVcsRUFBUyxZQUFvQixFQUFFO1FBQTFDLFFBQUcsR0FBSCxHQUFHLENBQVE7UUFBUyxjQUFTLEdBQVQsU0FBUyxDQUFhO1FBQzNELElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDN0IsQ0FBQztDQUNGO0FBRUQ7OztHQUdHO0FBQ0gsSUFBSSxVQUFVLEdBQUcsVUFBVSxJQUFVO0lBQ25DLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7SUFDdEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFbEIsU0FBUyxJQUFJLENBQUMsSUFBVTtRQUN0QixJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO1lBQUUsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hDLFNBQVM7UUFDVCxhQUFhO1FBQ2IsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsTUFBTSxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3hCLFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzlELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7QUFDSCxDQUFDLENBQUM7QUFFRixvREFBNEI7QUFFNUI7SUFDRSxNQUFNLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixNQUFNLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixNQUFNLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixNQUFNLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixNQUFNLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixLQUFLLENBQUMsU0FBUyxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDakMsS0FBSyxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNqQyxLQUFLLENBQUMsU0FBUyxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDakMsZ0JBQU0sQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0NBQ2xEIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxu57uZ5a6a5peg5ZCR6L+e6YCa5Zu+5Lit5LiA5Liq6IqC54K555qE5byV55So77yM6L+U5Zue6K+l5Zu+55qE5rex5ou36LSd77yI5YWL6ZqG77yJ44CC5Zu+5Lit55qE5q+P5Liq6IqC54K56YO95YyF5ZCr5a6D55qE5YC8IHZhbO+8iEludO+8iSDlkozlhbbpgrvlsYXnmoTliJfooajvvIhsaXN0W05vZGVd77yJ44CCXHJcblxyXG7npLrkvovvvJpcclxuIDEgLS0gMlxyXG4gfCAgICB8XHJcbiA0IC0tIDNcclxu6L6T5YWl77yaXHJcbntcIiRpZFwiOlwiMVwiLFwibmVpZ2hib3JzXCI6W3tcIiRpZFwiOlwiMlwiLFwibmVpZ2hib3JzXCI6W3tcIiRyZWZcIjpcIjFcIn0se1wiJGlkXCI6XCIzXCIsXCJuZWlnaGJvcnNcIjpbe1wiJHJlZlwiOlwiMlwifSx7XCIkaWRcIjpcIjRcIixcIm5laWdoYm9yc1wiOlt7XCIkcmVmXCI6XCIzXCJ9LHtcIiRyZWZcIjpcIjFcIn1dLFwidmFsXCI6NH1dLFwidmFsXCI6M31dLFwidmFsXCI6Mn0se1wiJHJlZlwiOlwiNFwifV0sXCJ2YWxcIjoxfVxyXG5cclxu6Kej6YeK77yaXHJcbuiKgueCuSAxIOeahOWAvOaYryAx77yM5a6D5pyJ5Lik5Liq6YK75bGF77ya6IqC54K5IDIg5ZKMIDQg44CCXHJcbuiKgueCuSAyIOeahOWAvOaYryAy77yM5a6D5pyJ5Lik5Liq6YK75bGF77ya6IqC54K5IDEg5ZKMIDMg44CCXHJcbuiKgueCuSAzIOeahOWAvOaYryAz77yM5a6D5pyJ5Lik5Liq6YK75bGF77ya6IqC54K5IDIg5ZKMIDQg44CCXHJcbuiKgueCuSA0IOeahOWAvOaYryA077yM5a6D5pyJ5Lik5Liq6YK75bGF77ya6IqC54K5IDEg5ZKMIDMg44CCXHJcblxyXG5cclxu5o+Q56S677yaXHJcblxyXG7oioLngrnmlbDku4vkuo4gMSDliLAgMTAwIOS5i+mXtOOAglxyXG7ml6DlkJHlm77mmK/kuIDkuKrnroDljZXlm77vvIzov5nmhI/lkbPnnYDlm77kuK3msqHmnInph43lpI3nmoTovrnvvIzkuZ/msqHmnInoh6rnjq/jgIJcclxu55Sx5LqO5Zu+5piv5peg5ZCR55qE77yM5aaC5p6c6IqC54K5IHAg5piv6IqC54K5IHEg55qE6YK75bGF77yM6YKj5LmI6IqC54K5IHEg5Lmf5b+F6aG75piv6IqC54K5IHAg55qE6YK75bGF44CCXHJcbuW/hemhu+Wwhue7meWumuiKgueCueeahOaLt+i0neS9nOS4uuWvueWFi+mahuWbvueahOW8leeUqOi/lOWbnuOAglxyXG4qICovXHJcbi8qKlxyXG4gKiAvLyBEZWZpbml0aW9uIGZvciBhIE5vZGUuXHJcbiAqIGZ1bmN0aW9uIE5vZGUodmFsLG5laWdoYm9ycykge1xyXG4gKiAgICB0aGlzLnZhbCA9IHZhbDtcclxuICogICAgdGhpcy5uZWlnaGJvcnMgPSBuZWlnaGJvcnM7XHJcbiAqIH07XHJcbiAqL1xyXG5jbGFzcyBOb2RlIHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdmFsOiBudW1iZXIsIHB1YmxpYyBuZWlnaGJvcnM6IE5vZGVbXSA9IFtdKSB7XHJcbiAgICB0aGlzLnZhbCA9IHZhbDtcclxuICAgIHRoaXMubmVpZ2hib3JzID0gbmVpZ2hib3JzO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxyXG4gKiBAcmV0dXJuIHtOb2RlfVxyXG4gKi9cclxudmFyIGNsb25lR3JhcGggPSBmdW5jdGlvbiAobm9kZTogTm9kZSk6IE5vZGUge1xyXG4gIGNvbnN0IG1hcCA9IG5ldyBNYXAoKTtcclxuICByZXR1cm4gc3RlcChub2RlKTtcclxuXHJcbiAgZnVuY3Rpb24gc3RlcChub2RlOiBOb2RlKTogTm9kZSB7XHJcbiAgICBpZiAobWFwLmhhcyhub2RlKSkgcmV0dXJuIG1hcC5nZXQobm9kZSk7XHJcbiAgICAvLyDms6jmhI8g5b+F6aG75YWIXHJcbiAgICAvLyAxLiDlu7rnq4sgbm9kZVxyXG4gICAgLy8gMi4g5a2Y5YWlIG1hcFxyXG4gICAgLy8gMy4g6K6+572uIG5laWdoYm9yc1xyXG4gICAgLy8g5ZCm5YiZ5Lya5a+86Ie0IOW+queOr+W8leeUqCDniIbmoIhcclxuICAgIGNvbnN0IG5ld19ub2RlID0gbmV3IE5vZGUobm9kZS52YWwpO1xyXG4gICAgbWFwLnNldChub2RlLCBuZXdfbm9kZSk7XHJcbiAgICBuZXdfbm9kZS5uZWlnaGJvcnMgPSBub2RlLm5laWdoYm9ycy5tYXAoKG5vZGUpID0+IHN0ZXAobm9kZSkpO1xyXG4gICAgcmV0dXJuIG5ld19ub2RlO1xyXG4gIH1cclxufTtcclxuXHJcbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xyXG5cclxue1xyXG4gIGNvbnN0IG5vZGUxID0gbmV3IE5vZGUoMSk7XHJcbiAgY29uc3Qgbm9kZTIgPSBuZXcgTm9kZSgyKTtcclxuICBjb25zdCBub2RlMyA9IG5ldyBOb2RlKDMpO1xyXG4gIGNvbnN0IG5vZGU0ID0gbmV3IE5vZGUoNCk7XHJcbiAgY29uc3Qgbm9kZTUgPSBuZXcgTm9kZSg1KTtcclxuICBub2RlMS5uZWlnaGJvcnMgPSBbbm9kZTIsIG5vZGUzXTtcclxuICBub2RlMi5uZWlnaGJvcnMgPSBbbm9kZTEsIG5vZGU1XTtcclxuICBub2RlMy5uZWlnaGJvcnMgPSBbbm9kZTEsIG5vZGU0XTtcclxuICBub2RlNC5uZWlnaGJvcnMgPSBbbm9kZTMsIG5vZGU1XTtcclxuICBub2RlNS5uZWlnaGJvcnMgPSBbbm9kZTEsIG5vZGU0XTtcclxuICBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKGNsb25lR3JhcGgobm9kZTEpLCBub2RlMSk7XHJcbn1cclxuIl19