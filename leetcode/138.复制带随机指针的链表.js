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
    if (old_random && old_random.next) newNode.random = old_random.next;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTM4LuWkjeWItuW4pumaj+acuuaMh+mSiOeahOmTvuihqC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTM4LuWkjeWItuW4pumaj+acuuaMh+mSiOeahOmTvuihqC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTBCSTtBQUNKOzs7Ozs7O0dBT0c7QUFDSCxNQUFNLElBQUk7SUFJTixZQUFtQixHQUFNO1FBQU4sUUFBRyxHQUFILEdBQUcsQ0FBRztRQUh6QixTQUFJLEdBQWdCLElBQUksQ0FBQztRQUN6QixXQUFNLEdBQWdCLElBQUksQ0FBQztJQUkzQixDQUFDO0NBRUo7QUFFRDs7O0dBR0c7QUFDSCwrQ0FBK0M7QUFDL0MsVUFBVTtBQUNWLDBCQUEwQjtBQUMxQix3QkFBd0I7QUFDeEIsK0JBQStCO0FBQy9CLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsWUFBWTtBQUNaLHFDQUFxQztBQUNyQyw2QkFBNkI7QUFDN0IseUJBQXlCO0FBQ3pCLEVBQUU7QUFDRixrQ0FBa0M7QUFDbEMsbURBQW1EO0FBQ25ELCtDQUErQztBQUMvQyxtQ0FBbUM7QUFDbkMsbUNBQW1DO0FBQ25DLCtDQUErQztBQUMvQyxZQUFZO0FBQ1osRUFBRTtBQUNGLHFDQUFxQztBQUNyQyxtREFBbUQ7QUFDbkQsWUFBWTtBQUNaLDJCQUEyQjtBQUMzQixRQUFRO0FBQ1IsS0FBSztBQUdMLElBQUksY0FBYyxHQUFHLFVBQVUsSUFBVTtJQUNyQzs7Ozs7Ozs7U0FRSztJQUVMLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtRQUNkLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFFRCx3QkFBd0I7SUFDeEIsSUFBSSxXQUFXLEdBQWdCLElBQUksQ0FBQztJQUNwQyxPQUFPLFdBQVcsSUFBSSxJQUFJLEVBQUU7UUFDeEIsTUFBTSxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sSUFBSSxHQUFnQixXQUFXLENBQUMsSUFBSSxDQUFDO1FBRTNDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1FBQzNCLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRXBCLFdBQVcsR0FBRyxJQUFJLENBQUM7S0FDdEI7SUFFRCxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDbkIsT0FBTyxXQUFXLElBQUksSUFBSSxFQUFFO1FBQ3hCLE1BQU0sVUFBVSxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7UUFDdEMsTUFBTSxPQUFPLEdBQWdCLFdBQVcsQ0FBQyxJQUFLLENBQUM7UUFDL0MsSUFBSSxVQUFVLElBQUksVUFBVSxDQUFDLElBQUk7WUFBRSxPQUFPLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFDcEUsV0FBVyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7S0FDOUI7SUFFRCxRQUFRO0lBQ1IsU0FBUztJQUNULFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDbkIsTUFBTSxhQUFhLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQztJQUN2QyxPQUFPLFdBQVcsSUFBSSxJQUFJLEVBQUU7UUFDeEIsTUFBTSxJQUFJLEdBQWdCLFdBQVcsQ0FBQyxJQUFJLENBQUM7UUFDM0MsSUFBSSxXQUFXLENBQUMsSUFBSSxFQUFFO1lBQ2xCLFdBQVcsQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDNUM7UUFDRCxXQUFXLEdBQUcsSUFBSSxDQUFDO0tBQ3RCO0lBRUQsT0FBTyxhQUFhLENBQUM7QUFDekIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxu57uZ5a6a5LiA5Liq6ZO+6KGo77yM5q+P5Liq6IqC54K55YyF5ZCr5LiA5Liq6aKd5aSW5aKe5Yqg55qE6ZqP5py65oyH6ZKI77yM6K+l5oyH6ZKI5Y+v5Lul5oyH5ZCR6ZO+6KGo5Lit55qE5Lu75L2V6IqC54K55oiW56m66IqC54K544CCXHJcblxyXG7opoHmsYLov5Tlm57ov5nkuKrpk77ooajnmoTmt7Hmi7fotJ3jgILCoFxyXG5cclxuwqBcclxuXHJcbuekuuS+i++8mlxyXG5cclxuXHJcblxyXG7ovpPlhaXvvJpcclxue1wiJGlkXCI6XCIxXCIsXCJuZXh0XCI6e1wiJGlkXCI6XCIyXCIsXCJuZXh0XCI6bnVsbCxcInJhbmRvbVwiOntcIiRyZWZcIjpcIjJcIn0sXCJ2YWxcIjoyfSxcInJhbmRvbVwiOntcIiRyZWZcIjpcIjJcIn0sXCJ2YWxcIjoxfVxyXG5cclxu6Kej6YeK77yaXHJcbuiKgueCuSAxIOeahOWAvOaYryAx77yM5a6D55qE5LiL5LiA5Liq5oyH6ZKI5ZKM6ZqP5py65oyH6ZKI6YO95oyH5ZCR6IqC54K5IDIg44CCXHJcbuiKgueCuSAyIOeahOWAvOaYryAy77yM5a6D55qE5LiL5LiA5Liq5oyH6ZKI5oyH5ZCRIG51bGzvvIzpmo/mnLrmjIfpkojmjIflkJHlroPoh6rlt7HjgIJcclxuwqBcclxuXHJcbuaPkOekuu+8mlxyXG5cclxu5L2g5b+F6aG76L+U5Zue57uZ5a6a5aS055qE5ou36LSd5L2c5Li65a+55YWL6ZqG5YiX6KGo55qE5byV55So44CCXHJcblxyXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxyXG7pk77mjqXvvJpodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9jb3B5LWxpc3Qtd2l0aC1yYW5kb20tcG9pbnRlclxyXG7okZfkvZzmnYPlvZLpoobmiaPnvZHnu5zmiYDmnInjgILllYbkuJrovazovb3or7fogZTns7vlrpjmlrnmjojmnYPvvIzpnZ7llYbkuJrovazovb3or7fms6jmmI7lh7rlpITjgIJcclxuKiAqL1xyXG4vKipcclxuICogLy8gRGVmaW5pdGlvbiBmb3IgYSBOb2RlLlxyXG4gKiBmdW5jdGlvbiBOb2RlKHZhbCxuZXh0LHJhbmRvbSkge1xyXG4gKiAgICB0aGlzLnZhbCA9IHZhbDtcclxuICogICAgdGhpcy5uZXh0ID0gbmV4dDtcclxuICogICAgdGhpcy5yYW5kb20gPSByYW5kb207XHJcbiAqIH07XHJcbiAqL1xyXG5jbGFzcyBOb2RlPFQgPSBhbnk+IHtcclxuICAgIG5leHQ6IG51bGwgfCBOb2RlID0gbnVsbDtcclxuICAgIHJhbmRvbTogbnVsbCB8IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB2YWw6IFQpIHtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtOb2RlfSBoZWFkXHJcbiAqIEByZXR1cm4ge05vZGV9XHJcbiAqL1xyXG4vLyB2YXIgY29weVJhbmRvbUxpc3QgPSBmdW5jdGlvbiAoaGVhZDogTm9kZSkge1xyXG4vLyAgICAgLyoqXHJcbi8vICAgICAgKiDlkIwgMTMzLuWFi+mahuWbviDkuIDmoLcg5Zue5rqv5rOVXHJcbi8vICAgICAgKiDlhYjmt7HluqbkvJjlhYgg5Yid5aeL5YyW5omA5pyJ55qE6IqC54K5XHJcbi8vICAgICAgKiDlho0g5re75YqgbmV4dCDlkowgcmFuZG9tIOeahOWFs+ezu1xyXG4vLyAgICAgICog5pe26Ze05aSN5p2C5bqm77yaTyhOKVxyXG4vLyAgICAgICog56m66Ze05aSN5p2C5bqm77yaTyhOKVxyXG4vLyAgICAgICogKi9cclxuLy8gICAgIGlmIChoZWFkID09IG51bGwpIHJldHVybiBudWxsO1xyXG4vLyAgICAgY29uc3QgbWFwID0gbmV3IE1hcCgpO1xyXG4vLyAgICAgcmV0dXJuIHN0ZXAoaGVhZCk7XHJcbi8vXHJcbi8vICAgICBmdW5jdGlvbiBzdGVwKG5vZGU6IE5vZGUpIHtcclxuLy8gICAgICAgICBpZiAobWFwLmhhcyhub2RlKSkgcmV0dXJuIG1hcC5nZXQobm9kZSk7XHJcbi8vICAgICAgICAgY29uc3QgbmV3X25vZGUgPSBuZXcgTm9kZShub2RlLnZhbCk7XHJcbi8vICAgICAgICAgbWFwLnNldChub2RlLCBuZXdfbm9kZSk7XHJcbi8vICAgICAgICAgaWYgKG5vZGUubmV4dCAhPSBudWxsKSB7XHJcbi8vICAgICAgICAgICAgIG5ld19ub2RlLm5leHQgPSBzdGVwKG5vZGUubmV4dCk7XHJcbi8vICAgICAgICAgfVxyXG4vL1xyXG4vLyAgICAgICAgIGlmIChub2RlLnJhbmRvbSAhPSBudWxsKSB7XHJcbi8vICAgICAgICAgICAgIG5ld19ub2RlLnJhbmRvbSA9IHN0ZXAobm9kZS5yYW5kb20pO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICByZXR1cm4gbmV3X25vZGU7XHJcbi8vICAgICB9XHJcbi8vIH07XHJcblxyXG5cclxudmFyIGNvcHlSYW5kb21MaXN0ID0gZnVuY3Rpb24gKGhlYWQ6IE5vZGUpIHtcclxuICAgIC8qKlxyXG4gICAgICog5oyJ54WnIOWOn+iKgueCuSAtPiDmlrDoioLngrkgLT4g5Y6f6IqC54K5IC0+IC4uLiDnmoTmrKHluo/mlrDlu7roioLngrlcclxuICAgICAqIOWGjeasoemBjeWOhueahOaXtuWAmSDmr4/kuKpyYW5kb20g55u05o6l5om+5Yiw55u46YK755qE6IqC54K55bCx5aW95LqGXHJcbiAgICAgKiDmnIDlkI4g5YiG5byA5Lik5Liq6ZO+6KGo5Y2z5Y+vXHJcbiAgICAgKlxyXG4gICAgICog5pe26Ze05aSN5p2C5bqm77yaTyhOKVxyXG4gICAgICog56m66Ze05aSN5p2C5bqm77yaTygxKVxyXG4gICAgICog5aaZICDllYpcclxuICAgICAqICovXHJcblxyXG4gICAgaWYgKGhlYWQgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOesrOS4gOasoei/reS7oyDmt7vliqAg5Zyo5Y6f6IqC54K5IOaXgei+uea3u+WKoOaWsOiKgueCuVxyXG4gICAgbGV0IGN1cnJlbnROb2RlOiBudWxsIHwgTm9kZSA9IGhlYWQ7XHJcbiAgICB3aGlsZSAoY3VycmVudE5vZGUgIT0gbnVsbCkge1xyXG4gICAgICAgIGNvbnN0IG5ld05vZGUgPSBuZXcgTm9kZShjdXJyZW50Tm9kZS52YWwpO1xyXG4gICAgICAgIGNvbnN0IG5leHQ6IG51bGwgfCBOb2RlID0gY3VycmVudE5vZGUubmV4dDtcclxuXHJcbiAgICAgICAgY3VycmVudE5vZGUubmV4dCA9IG5ld05vZGU7XHJcbiAgICAgICAgbmV3Tm9kZS5uZXh0ID0gbmV4dDtcclxuXHJcbiAgICAgICAgY3VycmVudE5vZGUgPSBuZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOesrOS6jOasoei/reS7oyDlpITnkIYgcmFuZG9tIOeahOaMh+WQkVxyXG4gICAgLy8g5LiA5qyh6LezIDIg5qC8XHJcbiAgICBjdXJyZW50Tm9kZSA9IGhlYWQ7XHJcbiAgICB3aGlsZSAoY3VycmVudE5vZGUgIT0gbnVsbCkge1xyXG4gICAgICAgIGNvbnN0IG9sZF9yYW5kb20gPSBjdXJyZW50Tm9kZS5yYW5kb207XHJcbiAgICAgICAgY29uc3QgbmV3Tm9kZTogbnVsbCB8IE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0ITtcclxuICAgICAgICBpZiAob2xkX3JhbmRvbSAmJiBvbGRfcmFuZG9tLm5leHQpIG5ld05vZGUucmFuZG9tID0gb2xkX3JhbmRvbS5uZXh0O1xyXG4gICAgICAgIGN1cnJlbnROb2RlID0gbmV3Tm9kZS5uZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOesrOS4ieasoemBjeWOhlxyXG4gICAgLy8g5YiG5byA5Lik5Liq6ZO+6KGoXHJcbiAgICBjdXJyZW50Tm9kZSA9IGhlYWQ7XHJcbiAgICBjb25zdCBuZXdfbGlzdF9oZWFkID0gY3VycmVudE5vZGUubmV4dDtcclxuICAgIHdoaWxlIChjdXJyZW50Tm9kZSAhPSBudWxsKSB7XHJcbiAgICAgICAgY29uc3QgbmV4dDogbnVsbCB8IE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0O1xyXG4gICAgICAgIGlmIChjdXJyZW50Tm9kZS5uZXh0KSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnROb2RlLm5leHQgPSBjdXJyZW50Tm9kZS5uZXh0Lm5leHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN1cnJlbnROb2RlID0gbmV4dDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3X2xpc3RfaGVhZDtcclxufTtcclxuXHJcblxyXG5leHBvcnQge307XHJcbiJdfQ==
