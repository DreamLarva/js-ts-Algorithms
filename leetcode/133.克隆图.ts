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
    constructor(public val: number, public neighbors: Node[] = []) {
        this.val = val;
        this.neighbors = neighbors;
    }

}

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node: Node): Node {
    const map = new Map();
    return step(node);

    function step(node: Node): Node {
        if (map.has(node)) return map.get(node);
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

import assert from "assert";

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
    assert.deepStrictEqual(
        cloneGraph(node1),
        node1,
    );

}
