"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
class Node {
  val;
  next;
  random;
  constructor(val, next, random) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : random;
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
function copyRandomList(head) {
  /**
   * 按照 原节点 -> 新节点 -> 原节点 -> ... 的次序新建节点
   * 再次遍历的时候 每个random 直接找到相邻的节点就好了
   * 最后 分开两个链表即可
   *
   * 时间复杂度：O(N)
   * 空间复杂度：O(1)
   * 妙  啊
   * */
  let cur = head;
  // 第一次循环 在每个节点后 拷贝一个一样的还没有包含 random 指向的节点
  while (cur != null) {
    const next = cur.next ?? void 0;
    cur.next = new Node(cur.val, next);
    cur = cur.next.next;
  }
  // 第二次循环 链接 random 指向
  cur = head;
  let i = 1;
  let nextRandomNode = null;
  while (cur != null) {
    if (i % 2 === 0) {
      // 是新节点
      cur.random = nextRandomNode;
    } else {
      // 是老节点
      // 存下 random 指向
      nextRandomNode = cur.random?.next ?? null;
    }
    i++;
    cur = cur.next;
  }
  const newHead = head?.next ?? null;
  cur = head;
  // 第三次循环 删除多余的 链接
  // 并且还要还原 原
  while (cur != null) {
    const next = cur.next;
    cur.next = cur?.next?.next ?? null;
    cur = next;
  }
  return newHead;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTM4LuWkjeWItuW4pumaj+acuuaMh+mSiOeahOmTvuihqC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTM4LuWkjeWItuW4pumaj+acuuaMh+mSiOeahOmTvuihqC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBMEJJOztBQUVKLE1BQU0sSUFBSTtJQUNSLEdBQUcsQ0FBUztJQUNaLElBQUksQ0FBYztJQUNsQixNQUFNLENBQWM7SUFFcEIsWUFBWSxHQUFZLEVBQUUsSUFBVyxFQUFFLE1BQWE7UUFDbEQsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUN2QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzdDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDckQsQ0FBQztDQUNGO0FBRUQ7OztHQUdHO0FBQ0gsK0NBQStDO0FBQy9DLFVBQVU7QUFDViwwQkFBMEI7QUFDMUIsd0JBQXdCO0FBQ3hCLCtCQUErQjtBQUMvQixvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLFlBQVk7QUFDWixxQ0FBcUM7QUFDckMsNkJBQTZCO0FBQzdCLHlCQUF5QjtBQUN6QixFQUFFO0FBQ0Ysa0NBQWtDO0FBQ2xDLG1EQUFtRDtBQUNuRCwrQ0FBK0M7QUFDL0MsbUNBQW1DO0FBQ25DLG1DQUFtQztBQUNuQywrQ0FBK0M7QUFDL0MsWUFBWTtBQUNaLEVBQUU7QUFDRixxQ0FBcUM7QUFDckMsbURBQW1EO0FBQ25ELFlBQVk7QUFDWiwyQkFBMkI7QUFDM0IsUUFBUTtBQUNSLEtBQUs7QUFFTCxTQUFTLGNBQWMsQ0FBQyxJQUFpQjtJQUN2Qzs7Ozs7Ozs7U0FRSztJQUVMLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQztJQUNmLHlDQUF5QztJQUN6QyxPQUFPLEdBQUcsSUFBSSxJQUFJLEVBQUU7UUFDbEIsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQztRQUNoQyxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0tBQ3JCO0lBQ0QscUJBQXFCO0lBQ3JCLEdBQUcsR0FBRyxJQUFJLENBQUM7SUFDWCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDVixJQUFJLGNBQWMsR0FBZ0IsSUFBSSxDQUFDO0lBQ3ZDLE9BQU8sR0FBRyxJQUFJLElBQUksRUFBRTtRQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2YsT0FBTztZQUNQLEdBQUcsQ0FBQyxNQUFNLEdBQUcsY0FBYyxDQUFDO1NBQzdCO2FBQU07WUFDTCxPQUFPO1lBQ1AsZUFBZTtZQUNmLGNBQWMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksSUFBSSxJQUFJLENBQUM7U0FDM0M7UUFDRCxDQUFDLEVBQUUsQ0FBQztRQUNKLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO0tBQ2hCO0lBRUQsTUFBTSxPQUFPLEdBQUcsSUFBSSxFQUFFLElBQUksSUFBSSxJQUFJLENBQUM7SUFDbkMsR0FBRyxHQUFHLElBQUksQ0FBQztJQUNYLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsT0FBTyxHQUFHLElBQUksSUFBSSxFQUFFO1FBQ2xCLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDdEIsR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksSUFBSSxJQUFJLENBQUM7UUFDbkMsR0FBRyxHQUFHLElBQUksQ0FBQztLQUNaO0lBRUQsT0FBTyxPQUFPLENBQUM7QUFDakIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7nu5nlrprkuIDkuKrpk77ooajvvIzmr4/kuKroioLngrnljIXlkKvkuIDkuKrpop3lpJblop7liqDnmoTpmo/mnLrmjIfpkojvvIzor6XmjIfpkojlj6/ku6XmjIflkJHpk77ooajkuK3nmoTku7vkvZXoioLngrnmiJbnqbroioLngrnjgIJcblxu6KaB5rGC6L+U5Zue6L+Z5Liq6ZO+6KGo55qE5rex5ou36LSd44CCXG5cblxuXG7npLrkvovvvJpcblxuXG5cbui+k+WFpe+8mlxue1wiJGlkXCI6XCIxXCIsXCJuZXh0XCI6e1wiJGlkXCI6XCIyXCIsXCJuZXh0XCI6bnVsbCxcInJhbmRvbVwiOntcIiRyZWZcIjpcIjJcIn0sXCJ2YWxcIjoyfSxcInJhbmRvbVwiOntcIiRyZWZcIjpcIjJcIn0sXCJ2YWxcIjoxfVxuXG7op6Pph4rvvJpcbuiKgueCuSAxIOeahOWAvOaYryAx77yM5a6D55qE5LiL5LiA5Liq5oyH6ZKI5ZKM6ZqP5py65oyH6ZKI6YO95oyH5ZCR6IqC54K5IDIg44CCXG7oioLngrkgMiDnmoTlgLzmmK8gMu+8jOWug+eahOS4i+S4gOS4quaMh+mSiOaMh+WQkSBudWxs77yM6ZqP5py65oyH6ZKI5oyH5ZCR5a6D6Ieq5bex44CCXG5cblxu5o+Q56S677yaXG5cbuS9oOW/hemhu+i/lOWbnue7meWumuWktOeahOaLt+i0neS9nOS4uuWvueWFi+mahuWIl+ihqOeahOW8leeUqOOAglxuXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvY29weS1saXN0LXdpdGgtcmFuZG9tLXBvaW50ZXJcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxuKiAqL1xuXG5jbGFzcyBOb2RlIHtcbiAgdmFsOiBudW1iZXI7XG4gIG5leHQ6IE5vZGUgfCBudWxsO1xuICByYW5kb206IE5vZGUgfCBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHZhbD86IG51bWJlciwgbmV4dD86IE5vZGUsIHJhbmRvbT86IE5vZGUpIHtcbiAgICB0aGlzLnZhbCA9IHZhbCA9PT0gdW5kZWZpbmVkID8gMCA6IHZhbDtcbiAgICB0aGlzLm5leHQgPSBuZXh0ID09PSB1bmRlZmluZWQgPyBudWxsIDogbmV4dDtcbiAgICB0aGlzLnJhbmRvbSA9IHJhbmRvbSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IHJhbmRvbTtcbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7Tm9kZX0gaGVhZFxuICogQHJldHVybiB7Tm9kZX1cbiAqL1xuLy8gdmFyIGNvcHlSYW5kb21MaXN0ID0gZnVuY3Rpb24gKGhlYWQ6IE5vZGUpIHtcbi8vICAgICAvKipcbi8vICAgICAgKiDlkIwgMTMzLuWFi+mahuWbviDkuIDmoLcg5Zue5rqv5rOVXG4vLyAgICAgICog5YWI5rex5bqm5LyY5YWIIOWIneWni+WMluaJgOacieeahOiKgueCuVxuLy8gICAgICAqIOWGjSDmt7vliqBuZXh0IOWSjCByYW5kb20g55qE5YWz57O7XG4vLyAgICAgICog5pe26Ze05aSN5p2C5bqm77yaTyhOKVxuLy8gICAgICAqIOepuumXtOWkjeadguW6pu+8mk8oTilcbi8vICAgICAgKiAqL1xuLy8gICAgIGlmIChoZWFkID09IG51bGwpIHJldHVybiBudWxsO1xuLy8gICAgIGNvbnN0IG1hcCA9IG5ldyBNYXAoKTtcbi8vICAgICByZXR1cm4gc3RlcChoZWFkKTtcbi8vXG4vLyAgICAgZnVuY3Rpb24gc3RlcChub2RlOiBOb2RlKSB7XG4vLyAgICAgICAgIGlmIChtYXAuaGFzKG5vZGUpKSByZXR1cm4gbWFwLmdldChub2RlKTtcbi8vICAgICAgICAgY29uc3QgbmV3X25vZGUgPSBuZXcgTm9kZShub2RlLnZhbCk7XG4vLyAgICAgICAgIG1hcC5zZXQobm9kZSwgbmV3X25vZGUpO1xuLy8gICAgICAgICBpZiAobm9kZS5uZXh0ICE9IG51bGwpIHtcbi8vICAgICAgICAgICAgIG5ld19ub2RlLm5leHQgPSBzdGVwKG5vZGUubmV4dCk7XG4vLyAgICAgICAgIH1cbi8vXG4vLyAgICAgICAgIGlmIChub2RlLnJhbmRvbSAhPSBudWxsKSB7XG4vLyAgICAgICAgICAgICBuZXdfbm9kZS5yYW5kb20gPSBzdGVwKG5vZGUucmFuZG9tKTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICByZXR1cm4gbmV3X25vZGU7XG4vLyAgICAgfVxuLy8gfTtcblxuZnVuY3Rpb24gY29weVJhbmRvbUxpc3QoaGVhZDogTm9kZSB8IG51bGwpOiBOb2RlIHwgbnVsbCB7XG4gIC8qKlxuICAgKiDmjInnhacg5Y6f6IqC54K5IC0+IOaWsOiKgueCuSAtPiDljp/oioLngrkgLT4gLi4uIOeahOasoeW6j+aWsOW7uuiKgueCuVxuICAgKiDlho3mrKHpgY3ljobnmoTml7blgJkg5q+P5LiqcmFuZG9tIOebtOaOpeaJvuWIsOebuOmCu+eahOiKgueCueWwseWlveS6hlxuICAgKiDmnIDlkI4g5YiG5byA5Lik5Liq6ZO+6KGo5Y2z5Y+vXG4gICAqXG4gICAqIOaXtumXtOWkjeadguW6pu+8mk8oTilcbiAgICog56m66Ze05aSN5p2C5bqm77yaTygxKVxuICAgKiDlppkgIOWVilxuICAgKiAqL1xuXG4gIGxldCBjdXIgPSBoZWFkO1xuICAvLyDnrKzkuIDmrKHlvqrnjq8g5Zyo5q+P5Liq6IqC54K55ZCOIOaLt+i0neS4gOS4quS4gOagt+eahOi/mOayoeacieWMheWQqyByYW5kb20g5oyH5ZCR55qE6IqC54K5XG4gIHdoaWxlIChjdXIgIT0gbnVsbCkge1xuICAgIGNvbnN0IG5leHQgPSBjdXIubmV4dCA/PyB2b2lkIDA7XG4gICAgY3VyLm5leHQgPSBuZXcgTm9kZShjdXIudmFsLCBuZXh0KTtcbiAgICBjdXIgPSBjdXIubmV4dC5uZXh0O1xuICB9XG4gIC8vIOesrOS6jOasoeW+queOryDpk77mjqUgcmFuZG9tIOaMh+WQkVxuICBjdXIgPSBoZWFkO1xuICBsZXQgaSA9IDE7XG4gIGxldCBuZXh0UmFuZG9tTm9kZTogTm9kZSB8IG51bGwgPSBudWxsO1xuICB3aGlsZSAoY3VyICE9IG51bGwpIHtcbiAgICBpZiAoaSAlIDIgPT09IDApIHtcbiAgICAgIC8vIOaYr+aWsOiKgueCuVxuICAgICAgY3VyLnJhbmRvbSA9IG5leHRSYW5kb21Ob2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyDmmK/ogIHoioLngrlcbiAgICAgIC8vIOWtmOS4iyByYW5kb20g5oyH5ZCRXG4gICAgICBuZXh0UmFuZG9tTm9kZSA9IGN1ci5yYW5kb20/Lm5leHQgPz8gbnVsbDtcbiAgICB9XG4gICAgaSsrO1xuICAgIGN1ciA9IGN1ci5uZXh0O1xuICB9XG5cbiAgY29uc3QgbmV3SGVhZCA9IGhlYWQ/Lm5leHQgPz8gbnVsbDtcbiAgY3VyID0gaGVhZDtcbiAgLy8g56ys5LiJ5qyh5b6q546vIOWIoOmZpOWkmuS9meeahCDpk77mjqVcbiAgLy8g5bm25LiU6L+Y6KaB6L+Y5Y6fIOWOn1xuICB3aGlsZSAoY3VyICE9IG51bGwpIHtcbiAgICBjb25zdCBuZXh0ID0gY3VyLm5leHQ7XG4gICAgY3VyLm5leHQgPSBjdXI/Lm5leHQ/Lm5leHQgPz8gbnVsbDtcbiAgICBjdXIgPSBuZXh0O1xuICB9XG5cbiAgcmV0dXJuIG5ld0hlYWQ7XG59XG5cbmV4cG9ydCB7fTtcbiJdfQ==
