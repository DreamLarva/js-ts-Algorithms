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
        new_node.neighbors = node.neighbors.map(node => step(node));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTMzLuWFi+mahuWbvi5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTMzLuWFi+mahuWbvi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXVCSTtBQUNKOzs7Ozs7R0FNRztBQUNILE1BQU0sSUFBSTtJQUNOLFlBQW1CLEdBQVcsRUFBUyxZQUFvQixFQUFFO1FBQTFDLFFBQUcsR0FBSCxHQUFHLENBQVE7UUFBUyxjQUFTLEdBQVQsU0FBUyxDQUFhO1FBQ3pELElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDL0IsQ0FBQztDQUVKO0FBRUQ7OztHQUdHO0FBQ0gsSUFBSSxVQUFVLEdBQUcsVUFBVSxJQUFVO0lBQ2pDLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7SUFDdEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFbEIsU0FBUyxJQUFJLENBQUMsSUFBVTtRQUNwQixJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO1lBQUUsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hDLFNBQVM7UUFDVCxhQUFhO1FBQ2IsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsTUFBTSxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3hCLFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUM1RCxPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRTVCO0lBQ0ksTUFBTSxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUIsTUFBTSxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUIsTUFBTSxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUIsTUFBTSxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUIsTUFBTSxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUIsS0FBSyxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNqQyxLQUFLLENBQUMsU0FBUyxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDakMsS0FBSyxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNqQyxLQUFLLENBQUMsU0FBUyxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLGdCQUFNLENBQUMsZUFBZSxDQUNsQixVQUFVLENBQUMsS0FBSyxDQUFDLEVBQ2pCLEtBQUssQ0FDUixDQUFDO0NBRUwiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG7nu5nlrprml6DlkJHov57pgJrlm77kuK3kuIDkuKroioLngrnnmoTlvJXnlKjvvIzov5Tlm57or6Xlm77nmoTmt7Hmi7fotJ3vvIjlhYvpmobvvInjgILlm77kuK3nmoTmr4/kuKroioLngrnpg73ljIXlkKvlroPnmoTlgLwgdmFs77yISW5077yJIOWSjOWFtumCu+WxheeahOWIl+ihqO+8iGxpc3RbTm9kZV3vvInjgIJcclxuXHJcbuekuuS+i++8mlxyXG4gMSAtLSAyXHJcbiB8ICAgIHxcclxuIDQgLS0gM1xyXG7ovpPlhaXvvJpcclxue1wiJGlkXCI6XCIxXCIsXCJuZWlnaGJvcnNcIjpbe1wiJGlkXCI6XCIyXCIsXCJuZWlnaGJvcnNcIjpbe1wiJHJlZlwiOlwiMVwifSx7XCIkaWRcIjpcIjNcIixcIm5laWdoYm9yc1wiOlt7XCIkcmVmXCI6XCIyXCJ9LHtcIiRpZFwiOlwiNFwiLFwibmVpZ2hib3JzXCI6W3tcIiRyZWZcIjpcIjNcIn0se1wiJHJlZlwiOlwiMVwifV0sXCJ2YWxcIjo0fV0sXCJ2YWxcIjozfV0sXCJ2YWxcIjoyfSx7XCIkcmVmXCI6XCI0XCJ9XSxcInZhbFwiOjF9XHJcblxyXG7op6Pph4rvvJpcclxu6IqC54K5IDEg55qE5YC85pivIDHvvIzlroPmnInkuKTkuKrpgrvlsYXvvJroioLngrkgMiDlkowgNCDjgIJcclxu6IqC54K5IDIg55qE5YC85pivIDLvvIzlroPmnInkuKTkuKrpgrvlsYXvvJroioLngrkgMSDlkowgMyDjgIJcclxu6IqC54K5IDMg55qE5YC85pivIDPvvIzlroPmnInkuKTkuKrpgrvlsYXvvJroioLngrkgMiDlkowgNCDjgIJcclxu6IqC54K5IDQg55qE5YC85pivIDTvvIzlroPmnInkuKTkuKrpgrvlsYXvvJroioLngrkgMSDlkowgMyDjgIJcclxuXHJcblxyXG7mj5DnpLrvvJpcclxuXHJcbuiKgueCueaVsOS7i+S6jiAxIOWIsCAxMDAg5LmL6Ze044CCXHJcbuaXoOWQkeWbvuaYr+S4gOS4queugOWNleWbvu+8jOi/meaEj+WRs+edgOWbvuS4reayoeaciemHjeWkjeeahOi+ue+8jOS5n+ayoeacieiHqueOr+OAglxyXG7nlLHkuo7lm77mmK/ml6DlkJHnmoTvvIzlpoLmnpzoioLngrkgcCDmmK/oioLngrkgcSDnmoTpgrvlsYXvvIzpgqPkuYjoioLngrkgcSDkuZ/lv4XpobvmmK/oioLngrkgcCDnmoTpgrvlsYXjgIJcclxu5b+F6aG75bCG57uZ5a6a6IqC54K555qE5ou36LSd5L2c5Li65a+55YWL6ZqG5Zu+55qE5byV55So6L+U5Zue44CCXHJcbiogKi9cclxuLyoqXHJcbiAqIC8vIERlZmluaXRpb24gZm9yIGEgTm9kZS5cclxuICogZnVuY3Rpb24gTm9kZSh2YWwsbmVpZ2hib3JzKSB7XHJcbiAqICAgIHRoaXMudmFsID0gdmFsO1xyXG4gKiAgICB0aGlzLm5laWdoYm9ycyA9IG5laWdoYm9ycztcclxuICogfTtcclxuICovXHJcbmNsYXNzIE5vZGUge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIHZhbDogbnVtYmVyLCBwdWJsaWMgbmVpZ2hib3JzOiBOb2RlW10gPSBbXSkge1xyXG4gICAgICAgIHRoaXMudmFsID0gdmFsO1xyXG4gICAgICAgIHRoaXMubmVpZ2hib3JzID0gbmVpZ2hib3JzO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxyXG4gKiBAcmV0dXJuIHtOb2RlfVxyXG4gKi9cclxudmFyIGNsb25lR3JhcGggPSBmdW5jdGlvbiAobm9kZTogTm9kZSk6IE5vZGUge1xyXG4gICAgY29uc3QgbWFwID0gbmV3IE1hcCgpO1xyXG4gICAgcmV0dXJuIHN0ZXAobm9kZSk7XHJcblxyXG4gICAgZnVuY3Rpb24gc3RlcChub2RlOiBOb2RlKTogTm9kZSB7XHJcbiAgICAgICAgaWYgKG1hcC5oYXMobm9kZSkpIHJldHVybiBtYXAuZ2V0KG5vZGUpO1xyXG4gICAgICAgIC8vIOazqOaEjyDlv4XpobvlhYhcclxuICAgICAgICAvLyAxLiDlu7rnq4sgbm9kZVxyXG4gICAgICAgIC8vIDIuIOWtmOWFpSBtYXBcclxuICAgICAgICAvLyAzLiDorr7nva4gbmVpZ2hib3JzXHJcbiAgICAgICAgLy8g5ZCm5YiZ5Lya5a+86Ie0IOW+queOr+W8leeUqCDniIbmoIhcclxuICAgICAgICBjb25zdCBuZXdfbm9kZSA9IG5ldyBOb2RlKG5vZGUudmFsKTtcclxuICAgICAgICBtYXAuc2V0KG5vZGUsIG5ld19ub2RlKTtcclxuICAgICAgICBuZXdfbm9kZS5uZWlnaGJvcnMgPSBub2RlLm5laWdoYm9ycy5tYXAobm9kZSA9PiBzdGVwKG5vZGUpKTtcclxuICAgICAgICByZXR1cm4gbmV3X25vZGU7XHJcbiAgICB9XHJcbn07XHJcblxyXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcclxuXHJcbntcclxuICAgIGNvbnN0IG5vZGUxID0gbmV3IE5vZGUoMSk7XHJcbiAgICBjb25zdCBub2RlMiA9IG5ldyBOb2RlKDIpO1xyXG4gICAgY29uc3Qgbm9kZTMgPSBuZXcgTm9kZSgzKTtcclxuICAgIGNvbnN0IG5vZGU0ID0gbmV3IE5vZGUoNCk7XHJcbiAgICBjb25zdCBub2RlNSA9IG5ldyBOb2RlKDUpO1xyXG4gICAgbm9kZTEubmVpZ2hib3JzID0gW25vZGUyLCBub2RlM107XHJcbiAgICBub2RlMi5uZWlnaGJvcnMgPSBbbm9kZTEsIG5vZGU1XTtcclxuICAgIG5vZGUzLm5laWdoYm9ycyA9IFtub2RlMSwgbm9kZTRdO1xyXG4gICAgbm9kZTQubmVpZ2hib3JzID0gW25vZGUzLCBub2RlNV07XHJcbiAgICBub2RlNS5uZWlnaGJvcnMgPSBbbm9kZTEsIG5vZGU0XTtcclxuICAgIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXHJcbiAgICAgICAgY2xvbmVHcmFwaChub2RlMSksXHJcbiAgICAgICAgbm9kZTEsXHJcbiAgICApO1xyXG5cclxufVxyXG4iXX0=