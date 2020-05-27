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
    constructor(val) {
        this.val = val;
        this.next = null;
        this.random = null;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTM4LuWkjeWItuW4pumaj+acuuaMh+mSiOeahOmTvuihqC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTM4LuWkjeWItuW4pumaj+acuuaMh+mSiOeahOmTvuihqC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTBCSTtBQUNKOzs7Ozs7O0dBT0c7QUFDSCxNQUFNLElBQUk7SUFJUixZQUFtQixHQUFNO1FBQU4sUUFBRyxHQUFILEdBQUcsQ0FBRztRQUh6QixTQUFJLEdBQWdCLElBQUksQ0FBQztRQUN6QixXQUFNLEdBQWdCLElBQUksQ0FBQztJQUVDLENBQUM7Q0FDOUI7QUFFRDs7O0dBR0c7QUFDSCwrQ0FBK0M7QUFDL0MsVUFBVTtBQUNWLDBCQUEwQjtBQUMxQix3QkFBd0I7QUFDeEIsK0JBQStCO0FBQy9CLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsWUFBWTtBQUNaLHFDQUFxQztBQUNyQyw2QkFBNkI7QUFDN0IseUJBQXlCO0FBQ3pCLEVBQUU7QUFDRixrQ0FBa0M7QUFDbEMsbURBQW1EO0FBQ25ELCtDQUErQztBQUMvQyxtQ0FBbUM7QUFDbkMsbUNBQW1DO0FBQ25DLCtDQUErQztBQUMvQyxZQUFZO0FBQ1osRUFBRTtBQUNGLHFDQUFxQztBQUNyQyxtREFBbUQ7QUFDbkQsWUFBWTtBQUNaLDJCQUEyQjtBQUMzQixRQUFRO0FBQ1IsS0FBSztBQUVMLElBQUksY0FBYyxHQUFHLFVBQVUsSUFBVTtJQUN2Qzs7Ozs7Ozs7U0FRSztJQUVMLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtRQUNoQixPQUFPLElBQUksQ0FBQztLQUNiO0lBRUQsd0JBQXdCO0lBQ3hCLElBQUksV0FBVyxHQUFnQixJQUFJLENBQUM7SUFDcEMsT0FBTyxXQUFXLElBQUksSUFBSSxFQUFFO1FBQzFCLE1BQU0sT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQyxNQUFNLElBQUksR0FBZ0IsV0FBVyxDQUFDLElBQUksQ0FBQztRQUUzQyxXQUFXLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztRQUMzQixPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUVwQixXQUFXLEdBQUcsSUFBSSxDQUFDO0tBQ3BCO0lBRUQsc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQ25CLE9BQU8sV0FBVyxJQUFJLElBQUksRUFBRTtRQUMxQixNQUFNLFVBQVUsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDO1FBQ3RDLE1BQU0sT0FBTyxHQUFnQixXQUFXLENBQUMsSUFBSyxDQUFDO1FBQy9DLElBQUksVUFBVSxJQUFJLFVBQVUsQ0FBQyxJQUFJO1lBQUUsT0FBTyxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDO1FBQ3BFLFdBQVcsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO0tBQzVCO0lBRUQsUUFBUTtJQUNSLFNBQVM7SUFDVCxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQ25CLE1BQU0sYUFBYSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUM7SUFDdkMsT0FBTyxXQUFXLElBQUksSUFBSSxFQUFFO1FBQzFCLE1BQU0sSUFBSSxHQUFnQixXQUFXLENBQUMsSUFBSSxDQUFDO1FBQzNDLElBQUksV0FBVyxDQUFDLElBQUksRUFBRTtZQUNwQixXQUFXLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQzFDO1FBQ0QsV0FBVyxHQUFHLElBQUksQ0FBQztLQUNwQjtJQUVELE9BQU8sYUFBYSxDQUFDO0FBQ3ZCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbue7meWumuS4gOS4qumTvuihqO+8jOavj+S4quiKgueCueWMheWQq+S4gOS4qumineWkluWinuWKoOeahOmaj+acuuaMh+mSiO+8jOivpeaMh+mSiOWPr+S7peaMh+WQkemTvuihqOS4reeahOS7u+S9leiKgueCueaIluepuuiKgueCueOAglxyXG5cclxu6KaB5rGC6L+U5Zue6L+Z5Liq6ZO+6KGo55qE5rex5ou36LSd44CCwqBcclxuXHJcbsKgXHJcblxyXG7npLrkvovvvJpcclxuXHJcblxyXG5cclxu6L6T5YWl77yaXHJcbntcIiRpZFwiOlwiMVwiLFwibmV4dFwiOntcIiRpZFwiOlwiMlwiLFwibmV4dFwiOm51bGwsXCJyYW5kb21cIjp7XCIkcmVmXCI6XCIyXCJ9LFwidmFsXCI6Mn0sXCJyYW5kb21cIjp7XCIkcmVmXCI6XCIyXCJ9LFwidmFsXCI6MX1cclxuXHJcbuino+mHiu+8mlxyXG7oioLngrkgMSDnmoTlgLzmmK8gMe+8jOWug+eahOS4i+S4gOS4quaMh+mSiOWSjOmaj+acuuaMh+mSiOmDveaMh+WQkeiKgueCuSAyIOOAglxyXG7oioLngrkgMiDnmoTlgLzmmK8gMu+8jOWug+eahOS4i+S4gOS4quaMh+mSiOaMh+WQkSBudWxs77yM6ZqP5py65oyH6ZKI5oyH5ZCR5a6D6Ieq5bex44CCXHJcbsKgXHJcblxyXG7mj5DnpLrvvJpcclxuXHJcbuS9oOW/hemhu+i/lOWbnue7meWumuWktOeahOaLt+i0neS9nOS4uuWvueWFi+mahuWIl+ihqOeahOW8leeUqOOAglxyXG5cclxu5p2l5rqQ77ya5Yqb5omj77yITGVldENvZGXvvIlcclxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvY29weS1saXN0LXdpdGgtcmFuZG9tLXBvaW50ZXJcclxu6JGX5L2c5p2D5b2S6aKG5omj572R57uc5omA5pyJ44CC5ZWG5Lia6L2s6L296K+36IGU57O75a6Y5pa55o6I5p2D77yM6Z2e5ZWG5Lia6L2s6L296K+35rOo5piO5Ye65aSE44CCXHJcbiogKi9cclxuLyoqXHJcbiAqIC8vIERlZmluaXRpb24gZm9yIGEgTm9kZS5cclxuICogZnVuY3Rpb24gTm9kZSh2YWwsbmV4dCxyYW5kb20pIHtcclxuICogICAgdGhpcy52YWwgPSB2YWw7XHJcbiAqICAgIHRoaXMubmV4dCA9IG5leHQ7XHJcbiAqICAgIHRoaXMucmFuZG9tID0gcmFuZG9tO1xyXG4gKiB9O1xyXG4gKi9cclxuY2xhc3MgTm9kZTxUID0gYW55PiB7XHJcbiAgbmV4dDogbnVsbCB8IE5vZGUgPSBudWxsO1xyXG4gIHJhbmRvbTogbnVsbCB8IE5vZGUgPSBudWxsO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdmFsOiBUKSB7fVxyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtOb2RlfSBoZWFkXHJcbiAqIEByZXR1cm4ge05vZGV9XHJcbiAqL1xyXG4vLyB2YXIgY29weVJhbmRvbUxpc3QgPSBmdW5jdGlvbiAoaGVhZDogTm9kZSkge1xyXG4vLyAgICAgLyoqXHJcbi8vICAgICAgKiDlkIwgMTMzLuWFi+mahuWbviDkuIDmoLcg5Zue5rqv5rOVXHJcbi8vICAgICAgKiDlhYjmt7HluqbkvJjlhYgg5Yid5aeL5YyW5omA5pyJ55qE6IqC54K5XHJcbi8vICAgICAgKiDlho0g5re75YqgbmV4dCDlkowgcmFuZG9tIOeahOWFs+ezu1xyXG4vLyAgICAgICog5pe26Ze05aSN5p2C5bqm77yaTyhOKVxyXG4vLyAgICAgICog56m66Ze05aSN5p2C5bqm77yaTyhOKVxyXG4vLyAgICAgICogKi9cclxuLy8gICAgIGlmIChoZWFkID09IG51bGwpIHJldHVybiBudWxsO1xyXG4vLyAgICAgY29uc3QgbWFwID0gbmV3IE1hcCgpO1xyXG4vLyAgICAgcmV0dXJuIHN0ZXAoaGVhZCk7XHJcbi8vXHJcbi8vICAgICBmdW5jdGlvbiBzdGVwKG5vZGU6IE5vZGUpIHtcclxuLy8gICAgICAgICBpZiAobWFwLmhhcyhub2RlKSkgcmV0dXJuIG1hcC5nZXQobm9kZSk7XHJcbi8vICAgICAgICAgY29uc3QgbmV3X25vZGUgPSBuZXcgTm9kZShub2RlLnZhbCk7XHJcbi8vICAgICAgICAgbWFwLnNldChub2RlLCBuZXdfbm9kZSk7XHJcbi8vICAgICAgICAgaWYgKG5vZGUubmV4dCAhPSBudWxsKSB7XHJcbi8vICAgICAgICAgICAgIG5ld19ub2RlLm5leHQgPSBzdGVwKG5vZGUubmV4dCk7XHJcbi8vICAgICAgICAgfVxyXG4vL1xyXG4vLyAgICAgICAgIGlmIChub2RlLnJhbmRvbSAhPSBudWxsKSB7XHJcbi8vICAgICAgICAgICAgIG5ld19ub2RlLnJhbmRvbSA9IHN0ZXAobm9kZS5yYW5kb20pO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICByZXR1cm4gbmV3X25vZGU7XHJcbi8vICAgICB9XHJcbi8vIH07XHJcblxyXG52YXIgY29weVJhbmRvbUxpc3QgPSBmdW5jdGlvbiAoaGVhZDogTm9kZSkge1xyXG4gIC8qKlxyXG4gICAqIOaMieeFpyDljp/oioLngrkgLT4g5paw6IqC54K5IC0+IOWOn+iKgueCuSAtPiAuLi4g55qE5qyh5bqP5paw5bu66IqC54K5XHJcbiAgICog5YaN5qyh6YGN5Y6G55qE5pe25YCZIOavj+S4qnJhbmRvbSDnm7TmjqXmib7liLDnm7jpgrvnmoToioLngrnlsLHlpb3kuoZcclxuICAgKiDmnIDlkI4g5YiG5byA5Lik5Liq6ZO+6KGo5Y2z5Y+vXHJcbiAgICpcclxuICAgKiDml7bpl7TlpI3mnYLluqbvvJpPKE4pXHJcbiAgICog56m66Ze05aSN5p2C5bqm77yaTygxKVxyXG4gICAqIOWmmSAg5ZWKXHJcbiAgICogKi9cclxuXHJcbiAgaWYgKGhlYWQgPT0gbnVsbCkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICAvLyDnrKzkuIDmrKHov63ku6Mg5re75YqgIOWcqOWOn+iKgueCuSDml4Hovrnmt7vliqDmlrDoioLngrlcclxuICBsZXQgY3VycmVudE5vZGU6IG51bGwgfCBOb2RlID0gaGVhZDtcclxuICB3aGlsZSAoY3VycmVudE5vZGUgIT0gbnVsbCkge1xyXG4gICAgY29uc3QgbmV3Tm9kZSA9IG5ldyBOb2RlKGN1cnJlbnROb2RlLnZhbCk7XHJcbiAgICBjb25zdCBuZXh0OiBudWxsIHwgTm9kZSA9IGN1cnJlbnROb2RlLm5leHQ7XHJcblxyXG4gICAgY3VycmVudE5vZGUubmV4dCA9IG5ld05vZGU7XHJcbiAgICBuZXdOb2RlLm5leHQgPSBuZXh0O1xyXG5cclxuICAgIGN1cnJlbnROb2RlID0gbmV4dDtcclxuICB9XHJcblxyXG4gIC8vIOesrOS6jOasoei/reS7oyDlpITnkIYgcmFuZG9tIOeahOaMh+WQkVxyXG4gIC8vIOS4gOasoei3syAyIOagvFxyXG4gIGN1cnJlbnROb2RlID0gaGVhZDtcclxuICB3aGlsZSAoY3VycmVudE5vZGUgIT0gbnVsbCkge1xyXG4gICAgY29uc3Qgb2xkX3JhbmRvbSA9IGN1cnJlbnROb2RlLnJhbmRvbTtcclxuICAgIGNvbnN0IG5ld05vZGU6IG51bGwgfCBOb2RlID0gY3VycmVudE5vZGUubmV4dCE7XHJcbiAgICBpZiAob2xkX3JhbmRvbSAmJiBvbGRfcmFuZG9tLm5leHQpIG5ld05vZGUucmFuZG9tID0gb2xkX3JhbmRvbS5uZXh0O1xyXG4gICAgY3VycmVudE5vZGUgPSBuZXdOb2RlLm5leHQ7XHJcbiAgfVxyXG5cclxuICAvLyDnrKzkuInmrKHpgY3ljoZcclxuICAvLyDliIblvIDkuKTkuKrpk77ooahcclxuICBjdXJyZW50Tm9kZSA9IGhlYWQ7XHJcbiAgY29uc3QgbmV3X2xpc3RfaGVhZCA9IGN1cnJlbnROb2RlLm5leHQ7XHJcbiAgd2hpbGUgKGN1cnJlbnROb2RlICE9IG51bGwpIHtcclxuICAgIGNvbnN0IG5leHQ6IG51bGwgfCBOb2RlID0gY3VycmVudE5vZGUubmV4dDtcclxuICAgIGlmIChjdXJyZW50Tm9kZS5uZXh0KSB7XHJcbiAgICAgIGN1cnJlbnROb2RlLm5leHQgPSBjdXJyZW50Tm9kZS5uZXh0Lm5leHQ7XHJcbiAgICB9XHJcbiAgICBjdXJyZW50Tm9kZSA9IG5leHQ7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbmV3X2xpc3RfaGVhZDtcclxufTtcclxuXHJcbmV4cG9ydCB7fTtcclxuIl19