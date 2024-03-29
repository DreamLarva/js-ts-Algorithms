"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  /**
   * 解释: 传入一个节点 让你删除这个节点
   * */
  // 每个节点分别由之后的的节点代替
  while (node) {
    node.val = node.next.val;
    if (node.next.next === null) {
      node.next = null;
      break;
    }
    node = node.next;
  }
};
function deleteNode2(root) {
  root.val = root.next.val;
  root.next = root.next.next;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjM3LuWIoOmZpOmTvuihqOS4reeahOiKgueCuS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjM3LuWIoOmZpOmTvuihqOS4reeahOiKgueCuS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQTZCQTs7O0dBR0c7QUFDSCxJQUFJLFVBQVUsR0FBRyxVQUFVLElBQXFCO0lBQzlDOztTQUVLO0lBQ0wsa0JBQWtCO0lBQ2xCLE9BQU8sSUFBSSxFQUFFO1FBQ1gsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSyxDQUFDLEdBQUcsQ0FBQztRQUMxQixJQUFJLElBQUksQ0FBQyxJQUFLLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRTtZQUM1QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixNQUFNO1NBQ1A7UUFDRCxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztLQUNsQjtBQUNILENBQUMsQ0FBQztBQUVGLFNBQVMsV0FBVyxDQUFDLElBQXFCO0lBQ3hDLElBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSyxDQUFDLElBQUssQ0FBQyxHQUFHLENBQUM7SUFDNUIsSUFBSyxDQUFDLElBQUksR0FBRyxJQUFLLENBQUMsSUFBSyxDQUFDLElBQUksQ0FBQztBQUNoQyxDQUFDO0FBQUEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7or7fnvJblhpnkuIDkuKrlh73mlbDvvIzkvb/lhbblj6/ku6XliKDpmaTmn5DkuKrpk77ooajkuK3nu5nlrprnmoTvvIjpnZ7mnKvlsL7vvInoioLngrnvvIzkvaDlsIblj6rooqvnu5nlrpropoHmsYLooqvliKDpmaTnmoToioLngrnjgIJcblxu546w5pyJ5LiA5Liq6ZO+6KGoIC0tIGhlYWQgPSBbNCw1LDEsOV3vvIzlroPlj6/ku6XooajnpLrkuLo6XG5cblxuXG5cblxu56S65L6LIDE6XG5cbui+k+WFpTogaGVhZCA9IFs0LDUsMSw5XSwgbm9kZSA9IDVcbui+k+WHujogWzQsMSw5XVxu6Kej6YeKOiDnu5nlrprkvaDpk77ooajkuK3lgLzkuLogNSDnmoTnrKzkuozkuKroioLngrnvvIzpgqPkuYjlnKjosIPnlKjkuobkvaDnmoTlh73mlbDkuYvlkI7vvIzor6Xpk77ooajlupTlj5jkuLogNCAtPiAxIC0+IDkuXG7npLrkvosgMjpcblxu6L6T5YWlOiBoZWFkID0gWzQsNSwxLDldLCBub2RlID0gMVxu6L6T5Ye6OiBbNCw1LDldXG7op6Pph4o6IOe7meWumuS9oOmTvuihqOS4reWAvOS4uiAxIOeahOesrOS4ieS4quiKgueCue+8jOmCo+S5iOWcqOiwg+eUqOS6huS9oOeahOWHveaVsOS5i+WQju+8jOivpemTvuihqOW6lOWPmOS4uiA0IC0+IDUgLT4gOS5cblxuXG7or7TmmI46XG5cbumTvuihqOiHs+WwkeWMheWQq+S4pOS4quiKgueCueOAglxu6ZO+6KGo5Lit5omA5pyJ6IqC54K555qE5YC86YO95piv5ZSv5LiA55qE44CCXG7nu5nlrprnmoToioLngrnkuLrpnZ7mnKvlsL7oioLngrnlubbkuJTkuIDlrprmmK/pk77ooajkuK3nmoTkuIDkuKrmnInmlYjoioLngrnjgIJcbuS4jeimgeS7juS9oOeahOWHveaVsOS4rei/lOWbnuS7u+S9lee7k+aenOOAglxuKiAqL1xuaW1wb3J0IHsgTGlzdE5vZGUgfSBmcm9tIFwiLi4vdXRpbC9MaW5rZWRMaXN0XCI7XG4vKipcbiAqIEBwYXJhbSB7TGlzdE5vZGV9IG5vZGVcbiAqIEByZXR1cm4ge3ZvaWR9IERvIG5vdCByZXR1cm4gYW55dGhpbmcsIG1vZGlmeSBub2RlIGluLXBsYWNlIGluc3RlYWQuXG4gKi9cbnZhciBkZWxldGVOb2RlID0gZnVuY3Rpb24gKG5vZGU6IExpc3ROb2RlIHwgbnVsbCkge1xuICAvKipcbiAgICog6Kej6YeKOiDkvKDlhaXkuIDkuKroioLngrkg6K6p5L2g5Yig6Zmk6L+Z5Liq6IqC54K5XG4gICAqICovXG4gIC8vIOavj+S4quiKgueCueWIhuWIq+eUseS5i+WQjueahOeahOiKgueCueS7o+abv1xuICB3aGlsZSAobm9kZSkge1xuICAgIG5vZGUudmFsID0gbm9kZS5uZXh0IS52YWw7XG4gICAgaWYgKG5vZGUubmV4dCEubmV4dCA9PT0gbnVsbCkge1xuICAgICAgbm9kZS5uZXh0ID0gbnVsbDtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBub2RlID0gbm9kZS5uZXh0O1xuICB9XG59O1xuXG5mdW5jdGlvbiBkZWxldGVOb2RlMihyb290OiBMaXN0Tm9kZSB8IG51bGwpOiB2b2lkIHtcbiAgcm9vdCEudmFsID0gcm9vdCEubmV4dCEudmFsO1xuICByb290IS5uZXh0ID0gcm9vdCEubmV4dCEubmV4dDtcbn07XG5cbmV4cG9ydCB7fTtcbiJdfQ==
