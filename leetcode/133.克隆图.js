"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
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
  val;
  neighbors;
  constructor(val, neighbors = []) {
    this.val = val;
    this.neighbors = neighbors;
    this.val = val;
    this.neighbors = neighbors;
  }
}
/**
 * 克隆图
 * @param  {Node}  node 节点
 * @return {Node}
 */
var cloneGraph = function (node) {
  if (node == null) return node;
  const map = new Map();
  return step(node);
  function step(node) {
    if (map.has(node)) return map.get(node);
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
{
  assert_1.default.deepStrictEqual(cloneGraph(null), null);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTMzLuWFi+mahuWbvi5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTMzLuWFi+mahuWbvi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXVCSTtBQUNKOzs7Ozs7R0FNRztBQUNILE1BQU0sSUFBSTtJQUNXO0lBQW9CO0lBQXZDLFlBQW1CLEdBQVcsRUFBUyxZQUFvQixFQUFFO1FBQTFDLFFBQUcsR0FBSCxHQUFHLENBQVE7UUFBUyxjQUFTLEdBQVQsU0FBUyxDQUFhO1FBQzNELElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDN0IsQ0FBQztDQUNGO0FBRUQ7Ozs7R0FJRztBQUNILElBQUksVUFBVSxHQUFHLFVBQVUsSUFBd0I7SUFDakQsSUFBSSxJQUFJLElBQUksSUFBSTtRQUFFLE9BQU8sSUFBSSxDQUFDO0lBQzlCLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7SUFDdEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFbEIsU0FBUyxJQUFJLENBQUMsSUFBVTtRQUN0QixJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO1lBQUUsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hDLFNBQVM7UUFDVCxhQUFhO1FBQ2IsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsTUFBTSxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3hCLFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzlELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7QUFDSCxDQUFDLENBQUM7QUFFRixvREFBNEI7QUFFNUI7SUFDRSxNQUFNLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixNQUFNLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixNQUFNLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixNQUFNLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixNQUFNLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixLQUFLLENBQUMsU0FBUyxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDakMsS0FBSyxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNqQyxLQUFLLENBQUMsU0FBUyxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDakMsZ0JBQU0sQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0NBQ2xEO0FBRUQ7SUFDRSxnQkFBTSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7Q0FDaEQiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu57uZ5a6a5peg5ZCR6L+e6YCa5Zu+5Lit5LiA5Liq6IqC54K555qE5byV55So77yM6L+U5Zue6K+l5Zu+55qE5rex5ou36LSd77yI5YWL6ZqG77yJ44CC5Zu+5Lit55qE5q+P5Liq6IqC54K56YO95YyF5ZCr5a6D55qE5YC8IHZhbO+8iEludO+8iSDlkozlhbbpgrvlsYXnmoTliJfooajvvIhsaXN0W05vZGVd77yJ44CCXG5cbuekuuS+i++8mlxuIDEgLS0gMlxuIHwgICAgfFxuIDQgLS0gM1xu6L6T5YWl77yaXG57XCIkaWRcIjpcIjFcIixcIm5laWdoYm9yc1wiOlt7XCIkaWRcIjpcIjJcIixcIm5laWdoYm9yc1wiOlt7XCIkcmVmXCI6XCIxXCJ9LHtcIiRpZFwiOlwiM1wiLFwibmVpZ2hib3JzXCI6W3tcIiRyZWZcIjpcIjJcIn0se1wiJGlkXCI6XCI0XCIsXCJuZWlnaGJvcnNcIjpbe1wiJHJlZlwiOlwiM1wifSx7XCIkcmVmXCI6XCIxXCJ9XSxcInZhbFwiOjR9XSxcInZhbFwiOjN9XSxcInZhbFwiOjJ9LHtcIiRyZWZcIjpcIjRcIn1dLFwidmFsXCI6MX1cblxu6Kej6YeK77yaXG7oioLngrkgMSDnmoTlgLzmmK8gMe+8jOWug+acieS4pOS4qumCu+Wxhe+8muiKgueCuSAyIOWSjCA0IOOAglxu6IqC54K5IDIg55qE5YC85pivIDLvvIzlroPmnInkuKTkuKrpgrvlsYXvvJroioLngrkgMSDlkowgMyDjgIJcbuiKgueCuSAzIOeahOWAvOaYryAz77yM5a6D5pyJ5Lik5Liq6YK75bGF77ya6IqC54K5IDIg5ZKMIDQg44CCXG7oioLngrkgNCDnmoTlgLzmmK8gNO+8jOWug+acieS4pOS4qumCu+Wxhe+8muiKgueCuSAxIOWSjCAzIOOAglxuXG5cbuaPkOekuu+8mlxuXG7oioLngrnmlbDku4vkuo4gMSDliLAgMTAwIOS5i+mXtOOAglxu5peg5ZCR5Zu+5piv5LiA5Liq566A5Y2V5Zu+77yM6L+Z5oSP5ZGz552A5Zu+5Lit5rKh5pyJ6YeN5aSN55qE6L6577yM5Lmf5rKh5pyJ6Ieq546v44CCXG7nlLHkuo7lm77mmK/ml6DlkJHnmoTvvIzlpoLmnpzoioLngrkgcCDmmK/oioLngrkgcSDnmoTpgrvlsYXvvIzpgqPkuYjoioLngrkgcSDkuZ/lv4XpobvmmK/oioLngrkgcCDnmoTpgrvlsYXjgIJcbuW/hemhu+Wwhue7meWumuiKgueCueeahOaLt+i0neS9nOS4uuWvueWFi+mahuWbvueahOW8leeUqOi/lOWbnuOAglxuKiAqL1xuLyoqXG4gKiAvLyBEZWZpbml0aW9uIGZvciBhIE5vZGUuXG4gKiBmdW5jdGlvbiBOb2RlKHZhbCxuZWlnaGJvcnMpIHtcbiAqICAgIHRoaXMudmFsID0gdmFsO1xuICogICAgdGhpcy5uZWlnaGJvcnMgPSBuZWlnaGJvcnM7XG4gKiB9O1xuICovXG5jbGFzcyBOb2RlIHtcbiAgY29uc3RydWN0b3IocHVibGljIHZhbDogbnVtYmVyLCBwdWJsaWMgbmVpZ2hib3JzOiBOb2RlW10gPSBbXSkge1xuICAgIHRoaXMudmFsID0gdmFsO1xuICAgIHRoaXMubmVpZ2hib3JzID0gbmVpZ2hib3JzO1xuICB9XG59XG5cbi8qKlxuICog5YWL6ZqG5Zu+XG4gKiBAcGFyYW0gIHtOb2RlfSAgbm9kZSDoioLngrlcbiAqIEByZXR1cm4ge05vZGV9XG4gKi9cbnZhciBjbG9uZUdyYXBoID0gZnVuY3Rpb24gKG5vZGU6IE5vZGUgfCBudWxsIHwgdm9pZCk6IE5vZGUgfCBudWxsIHwgdm9pZCB7XG4gIGlmIChub2RlID09IG51bGwpIHJldHVybiBub2RlO1xuICBjb25zdCBtYXAgPSBuZXcgTWFwKCk7XG4gIHJldHVybiBzdGVwKG5vZGUpO1xuXG4gIGZ1bmN0aW9uIHN0ZXAobm9kZTogTm9kZSk6IE5vZGUge1xuICAgIGlmIChtYXAuaGFzKG5vZGUpKSByZXR1cm4gbWFwLmdldChub2RlKTtcbiAgICAvLyDms6jmhI8g5b+F6aG75YWIXG4gICAgLy8gMS4g5bu656uLIG5vZGVcbiAgICAvLyAyLiDlrZjlhaUgbWFwXG4gICAgLy8gMy4g6K6+572uIG5laWdoYm9yc1xuICAgIC8vIOWQpuWImeS8muWvvOiHtCDlvqrnjq/lvJXnlKgg54iG5qCIXG4gICAgY29uc3QgbmV3X25vZGUgPSBuZXcgTm9kZShub2RlLnZhbCk7XG4gICAgbWFwLnNldChub2RlLCBuZXdfbm9kZSk7XG4gICAgbmV3X25vZGUubmVpZ2hib3JzID0gbm9kZS5uZWlnaGJvcnMubWFwKChub2RlKSA9PiBzdGVwKG5vZGUpKTtcbiAgICByZXR1cm4gbmV3X25vZGU7XG4gIH1cbn07XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG57XG4gIGNvbnN0IG5vZGUxID0gbmV3IE5vZGUoMSk7XG4gIGNvbnN0IG5vZGUyID0gbmV3IE5vZGUoMik7XG4gIGNvbnN0IG5vZGUzID0gbmV3IE5vZGUoMyk7XG4gIGNvbnN0IG5vZGU0ID0gbmV3IE5vZGUoNCk7XG4gIGNvbnN0IG5vZGU1ID0gbmV3IE5vZGUoNSk7XG4gIG5vZGUxLm5laWdoYm9ycyA9IFtub2RlMiwgbm9kZTNdO1xuICBub2RlMi5uZWlnaGJvcnMgPSBbbm9kZTEsIG5vZGU1XTtcbiAgbm9kZTMubmVpZ2hib3JzID0gW25vZGUxLCBub2RlNF07XG4gIG5vZGU0Lm5laWdoYm9ycyA9IFtub2RlMywgbm9kZTVdO1xuICBub2RlNS5uZWlnaGJvcnMgPSBbbm9kZTEsIG5vZGU0XTtcbiAgYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChjbG9uZUdyYXBoKG5vZGUxKSwgbm9kZTEpO1xufVxuXG57XG4gIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoY2xvbmVHcmFwaChudWxsKSwgbnVsbCk7XG59XG4iXX0=
