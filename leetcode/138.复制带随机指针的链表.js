"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一个链表，每个节点包含一个额外增加的随机指针，该指针可以指向链表中的任何节点或空节点。

要求返回这个链表的深拷贝。



示例：



输入：
{"$id":"1","next":{"$id":"2","next":null,"random":{"$ref":"2"},"val":2},"random":{"$ref":"2"},"val":1}

解释：
节点 1 的值是 1，它的下一个指针和随机指针都指向节点 2 。
节点 2 的值是 2，它的下一个指针指向 null，随机指针指向它自己。


提示：

你必须返回给定头的拷贝作为对克隆列表的引用。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/copy-list-with-random-pointer
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
class Node {
    val;
    next = null;
    random = null;
    constructor(val) {
        this.val = val;
    }
}
/**
 * @param {Node} head
 * @return {Node}
 */
// var copyRandomList = function (head: Node) {
//     /**
//      * 同 133.克隆图 一样 回溯法
//      * 先深度优先 初始化所有的节点
//      * 再 添加next 和 random 的关系
//      * 时间复杂度：O(N)
//      * 空间复杂度：O(N)
//      * */
//     if (head == null) return null;
//     const map = new Map();
//     return step(head);
//
//     function step(node: Node) {
//         if (map.has(node)) return map.get(node);
//         const new_node = new Node(node.val);
//         map.set(node, new_node);
//         if (node.next != null) {
//             new_node.next = step(node.next);
//         }
//
//         if (node.random != null) {
//             new_node.random = step(node.random);
//         }
//         return new_node;
//     }
// };
var copyRandomList = function (head) {
    /**
     * 按照 原节点 -> 新节点 -> 原节点 -> ... 的次序新建节点
     * 再次遍历的时候 每个random 直接找到相邻的节点就好了
     * 最后 分开两个链表即可
     *
     * 时间复杂度：O(N)
     * 空间复杂度：O(1)
     * 妙  啊
     * */
    if (head == null) {
        return null;
    }
    // 第一次迭代 添加 在原节点 旁边添加新节点
    let currentNode = head;
    while (currentNode != null) {
        const newNode = new Node(currentNode.val);
        const next = currentNode.next;
        currentNode.next = newNode;
        newNode.next = next;
        currentNode = next;
    }
    // 第二次迭代 处理 random 的指向
    // 一次跳 2 格
    currentNode = head;
    while (currentNode != null) {
        const old_random = currentNode.random;
        const newNode = currentNode.next;
        if (old_random && old_random.next)
            newNode.random = old_random.next;
        currentNode = newNode.next;
    }
    // 第三次遍历
    // 分开两个链表
    currentNode = head;
    const new_list_head = currentNode.next;
    while (currentNode != null) {
        const next = currentNode.next;
        if (currentNode.next) {
            currentNode.next = currentNode.next.next;
        }
        currentNode = next;
    }
    return new_list_head;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTM4LuWkjeWItuW4pumaj+acuuaMh+mSiOeahOmTvuihqC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTM4LuWkjeWItuW4pumaj+acuuaMh+mSiOeahOmTvuihqC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTBCSTtBQUNKOzs7Ozs7O0dBT0c7QUFDSCxNQUFNLElBQUk7SUFJVztJQUhuQixJQUFJLEdBQWdCLElBQUksQ0FBQztJQUN6QixNQUFNLEdBQWdCLElBQUksQ0FBQztJQUUzQixZQUFtQixHQUFNO1FBQU4sUUFBRyxHQUFILEdBQUcsQ0FBRztJQUFHLENBQUM7Q0FDOUI7QUFFRDs7O0dBR0c7QUFDSCwrQ0FBK0M7QUFDL0MsVUFBVTtBQUNWLDBCQUEwQjtBQUMxQix3QkFBd0I7QUFDeEIsK0JBQStCO0FBQy9CLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsWUFBWTtBQUNaLHFDQUFxQztBQUNyQyw2QkFBNkI7QUFDN0IseUJBQXlCO0FBQ3pCLEVBQUU7QUFDRixrQ0FBa0M7QUFDbEMsbURBQW1EO0FBQ25ELCtDQUErQztBQUMvQyxtQ0FBbUM7QUFDbkMsbUNBQW1DO0FBQ25DLCtDQUErQztBQUMvQyxZQUFZO0FBQ1osRUFBRTtBQUNGLHFDQUFxQztBQUNyQyxtREFBbUQ7QUFDbkQsWUFBWTtBQUNaLDJCQUEyQjtBQUMzQixRQUFRO0FBQ1IsS0FBSztBQUVMLElBQUksY0FBYyxHQUFHLFVBQVUsSUFBVTtJQUN2Qzs7Ozs7Ozs7U0FRSztJQUVMLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtRQUNoQixPQUFPLElBQUksQ0FBQztLQUNiO0lBRUQsd0JBQXdCO0lBQ3hCLElBQUksV0FBVyxHQUFnQixJQUFJLENBQUM7SUFDcEMsT0FBTyxXQUFXLElBQUksSUFBSSxFQUFFO1FBQzFCLE1BQU0sT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQyxNQUFNLElBQUksR0FBZ0IsV0FBVyxDQUFDLElBQUksQ0FBQztRQUUzQyxXQUFXLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztRQUMzQixPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUVwQixXQUFXLEdBQUcsSUFBSSxDQUFDO0tBQ3BCO0lBRUQsc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQ25CLE9BQU8sV0FBVyxJQUFJLElBQUksRUFBRTtRQUMxQixNQUFNLFVBQVUsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDO1FBQ3RDLE1BQU0sT0FBTyxHQUFnQixXQUFXLENBQUMsSUFBSyxDQUFDO1FBQy9DLElBQUksVUFBVSxJQUFJLFVBQVUsQ0FBQyxJQUFJO1lBQUUsT0FBTyxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDO1FBQ3BFLFdBQVcsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO0tBQzVCO0lBRUQsUUFBUTtJQUNSLFNBQVM7SUFDVCxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQ25CLE1BQU0sYUFBYSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUM7SUFDdkMsT0FBTyxXQUFXLElBQUksSUFBSSxFQUFFO1FBQzFCLE1BQU0sSUFBSSxHQUFnQixXQUFXLENBQUMsSUFBSSxDQUFDO1FBQzNDLElBQUksV0FBVyxDQUFDLElBQUksRUFBRTtZQUNwQixXQUFXLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQzFDO1FBQ0QsV0FBVyxHQUFHLElBQUksQ0FBQztLQUNwQjtJQUVELE9BQU8sYUFBYSxDQUFDO0FBQ3ZCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7nu5nlrprkuIDkuKrpk77ooajvvIzmr4/kuKroioLngrnljIXlkKvkuIDkuKrpop3lpJblop7liqDnmoTpmo/mnLrmjIfpkojvvIzor6XmjIfpkojlj6/ku6XmjIflkJHpk77ooajkuK3nmoTku7vkvZXoioLngrnmiJbnqbroioLngrnjgIJcblxu6KaB5rGC6L+U5Zue6L+Z5Liq6ZO+6KGo55qE5rex5ou36LSd44CCXG5cblxuXG7npLrkvovvvJpcblxuXG5cbui+k+WFpe+8mlxue1wiJGlkXCI6XCIxXCIsXCJuZXh0XCI6e1wiJGlkXCI6XCIyXCIsXCJuZXh0XCI6bnVsbCxcInJhbmRvbVwiOntcIiRyZWZcIjpcIjJcIn0sXCJ2YWxcIjoyfSxcInJhbmRvbVwiOntcIiRyZWZcIjpcIjJcIn0sXCJ2YWxcIjoxfVxuXG7op6Pph4rvvJpcbuiKgueCuSAxIOeahOWAvOaYryAx77yM5a6D55qE5LiL5LiA5Liq5oyH6ZKI5ZKM6ZqP5py65oyH6ZKI6YO95oyH5ZCR6IqC54K5IDIg44CCXG7oioLngrkgMiDnmoTlgLzmmK8gMu+8jOWug+eahOS4i+S4gOS4quaMh+mSiOaMh+WQkSBudWxs77yM6ZqP5py65oyH6ZKI5oyH5ZCR5a6D6Ieq5bex44CCXG5cblxu5o+Q56S677yaXG5cbuS9oOW/hemhu+i/lOWbnue7meWumuWktOeahOaLt+i0neS9nOS4uuWvueWFi+mahuWIl+ihqOeahOW8leeUqOOAglxuXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvY29weS1saXN0LXdpdGgtcmFuZG9tLXBvaW50ZXJcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxuKiAqL1xuLyoqXG4gKiAvLyBEZWZpbml0aW9uIGZvciBhIE5vZGUuXG4gKiBmdW5jdGlvbiBOb2RlKHZhbCxuZXh0LHJhbmRvbSkge1xuICogICAgdGhpcy52YWwgPSB2YWw7XG4gKiAgICB0aGlzLm5leHQgPSBuZXh0O1xuICogICAgdGhpcy5yYW5kb20gPSByYW5kb207XG4gKiB9O1xuICovXG5jbGFzcyBOb2RlPFQgPSBhbnk+IHtcbiAgbmV4dDogbnVsbCB8IE5vZGUgPSBudWxsO1xuICByYW5kb206IG51bGwgfCBOb2RlID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdmFsOiBUKSB7fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7Tm9kZX0gaGVhZFxuICogQHJldHVybiB7Tm9kZX1cbiAqL1xuLy8gdmFyIGNvcHlSYW5kb21MaXN0ID0gZnVuY3Rpb24gKGhlYWQ6IE5vZGUpIHtcbi8vICAgICAvKipcbi8vICAgICAgKiDlkIwgMTMzLuWFi+mahuWbviDkuIDmoLcg5Zue5rqv5rOVXG4vLyAgICAgICog5YWI5rex5bqm5LyY5YWIIOWIneWni+WMluaJgOacieeahOiKgueCuVxuLy8gICAgICAqIOWGjSDmt7vliqBuZXh0IOWSjCByYW5kb20g55qE5YWz57O7XG4vLyAgICAgICog5pe26Ze05aSN5p2C5bqm77yaTyhOKVxuLy8gICAgICAqIOepuumXtOWkjeadguW6pu+8mk8oTilcbi8vICAgICAgKiAqL1xuLy8gICAgIGlmIChoZWFkID09IG51bGwpIHJldHVybiBudWxsO1xuLy8gICAgIGNvbnN0IG1hcCA9IG5ldyBNYXAoKTtcbi8vICAgICByZXR1cm4gc3RlcChoZWFkKTtcbi8vXG4vLyAgICAgZnVuY3Rpb24gc3RlcChub2RlOiBOb2RlKSB7XG4vLyAgICAgICAgIGlmIChtYXAuaGFzKG5vZGUpKSByZXR1cm4gbWFwLmdldChub2RlKTtcbi8vICAgICAgICAgY29uc3QgbmV3X25vZGUgPSBuZXcgTm9kZShub2RlLnZhbCk7XG4vLyAgICAgICAgIG1hcC5zZXQobm9kZSwgbmV3X25vZGUpO1xuLy8gICAgICAgICBpZiAobm9kZS5uZXh0ICE9IG51bGwpIHtcbi8vICAgICAgICAgICAgIG5ld19ub2RlLm5leHQgPSBzdGVwKG5vZGUubmV4dCk7XG4vLyAgICAgICAgIH1cbi8vXG4vLyAgICAgICAgIGlmIChub2RlLnJhbmRvbSAhPSBudWxsKSB7XG4vLyAgICAgICAgICAgICBuZXdfbm9kZS5yYW5kb20gPSBzdGVwKG5vZGUucmFuZG9tKTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICByZXR1cm4gbmV3X25vZGU7XG4vLyAgICAgfVxuLy8gfTtcblxudmFyIGNvcHlSYW5kb21MaXN0ID0gZnVuY3Rpb24gKGhlYWQ6IE5vZGUpIHtcbiAgLyoqXG4gICAqIOaMieeFpyDljp/oioLngrkgLT4g5paw6IqC54K5IC0+IOWOn+iKgueCuSAtPiAuLi4g55qE5qyh5bqP5paw5bu66IqC54K5XG4gICAqIOWGjeasoemBjeWOhueahOaXtuWAmSDmr4/kuKpyYW5kb20g55u05o6l5om+5Yiw55u46YK755qE6IqC54K55bCx5aW95LqGXG4gICAqIOacgOWQjiDliIblvIDkuKTkuKrpk77ooajljbPlj69cbiAgICpcbiAgICog5pe26Ze05aSN5p2C5bqm77yaTyhOKVxuICAgKiDnqbrpl7TlpI3mnYLluqbvvJpPKDEpXG4gICAqIOWmmSAg5ZWKXG4gICAqICovXG5cbiAgaWYgKGhlYWQgPT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLy8g56ys5LiA5qyh6L+t5LujIOa3u+WKoCDlnKjljp/oioLngrkg5peB6L655re75Yqg5paw6IqC54K5XG4gIGxldCBjdXJyZW50Tm9kZTogbnVsbCB8IE5vZGUgPSBoZWFkO1xuICB3aGlsZSAoY3VycmVudE5vZGUgIT0gbnVsbCkge1xuICAgIGNvbnN0IG5ld05vZGUgPSBuZXcgTm9kZShjdXJyZW50Tm9kZS52YWwpO1xuICAgIGNvbnN0IG5leHQ6IG51bGwgfCBOb2RlID0gY3VycmVudE5vZGUubmV4dDtcblxuICAgIGN1cnJlbnROb2RlLm5leHQgPSBuZXdOb2RlO1xuICAgIG5ld05vZGUubmV4dCA9IG5leHQ7XG5cbiAgICBjdXJyZW50Tm9kZSA9IG5leHQ7XG4gIH1cblxuICAvLyDnrKzkuozmrKHov63ku6Mg5aSE55CGIHJhbmRvbSDnmoTmjIflkJFcbiAgLy8g5LiA5qyh6LezIDIg5qC8XG4gIGN1cnJlbnROb2RlID0gaGVhZDtcbiAgd2hpbGUgKGN1cnJlbnROb2RlICE9IG51bGwpIHtcbiAgICBjb25zdCBvbGRfcmFuZG9tID0gY3VycmVudE5vZGUucmFuZG9tO1xuICAgIGNvbnN0IG5ld05vZGU6IG51bGwgfCBOb2RlID0gY3VycmVudE5vZGUubmV4dCE7XG4gICAgaWYgKG9sZF9yYW5kb20gJiYgb2xkX3JhbmRvbS5uZXh0KSBuZXdOb2RlLnJhbmRvbSA9IG9sZF9yYW5kb20ubmV4dDtcbiAgICBjdXJyZW50Tm9kZSA9IG5ld05vZGUubmV4dDtcbiAgfVxuXG4gIC8vIOesrOS4ieasoemBjeWOhlxuICAvLyDliIblvIDkuKTkuKrpk77ooahcbiAgY3VycmVudE5vZGUgPSBoZWFkO1xuICBjb25zdCBuZXdfbGlzdF9oZWFkID0gY3VycmVudE5vZGUubmV4dDtcbiAgd2hpbGUgKGN1cnJlbnROb2RlICE9IG51bGwpIHtcbiAgICBjb25zdCBuZXh0OiBudWxsIHwgTm9kZSA9IGN1cnJlbnROb2RlLm5leHQ7XG4gICAgaWYgKGN1cnJlbnROb2RlLm5leHQpIHtcbiAgICAgIGN1cnJlbnROb2RlLm5leHQgPSBjdXJyZW50Tm9kZS5uZXh0Lm5leHQ7XG4gICAgfVxuICAgIGN1cnJlbnROb2RlID0gbmV4dDtcbiAgfVxuXG4gIHJldHVybiBuZXdfbGlzdF9oZWFkO1xufTtcblxuZXhwb3J0IHt9O1xuIl19