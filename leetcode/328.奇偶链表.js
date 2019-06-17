"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一个单链表，把所有的奇数节点和偶数节点分别排在一起。请注意，这里的奇数节点和偶数节点指的是节点编号的奇偶性，而不是节点的值的奇偶性。

请尝试使用原地算法完成。你的算法的空间复杂度应为 O(1)，时间复杂度应为 O(nodes)，nodes 为节点总数。

示例 1:

输入: 1->2->3->4->5->NULL
输出: 1->3->5->2->4->NULL
示例 2:

输入: 2->1->3->5->6->4->7->NULL
输出: 2->3->6->7->1->5->4->NULL
说明:

应当保持奇数节点和偶数节点的相对顺序。
链表的第一个节点视为奇数节点，第二个节点视为偶数节点，以此类推。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/odd-even-linked-list
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
const LinkedList_1 = require("../util/LinkedList");
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
    if (head == null || head.next == null || head.next.next == null)
        return head;
    // 根据题意
    // 空间复杂度 O(1) 说明空间复杂度 不会应为 n 的大小而改变
    // 时间复杂度应为 O(nodes)，nodes 为节点总数。 那么每个节点只能遍历一次
    let odd_last_node = head;
    const even_head_node = head.next;
    let even_last_node = even_head_node;
    while (true) {
        if (even_last_node.next == null) {
            odd_last_node.next = even_head_node;
            break;
        }
        odd_last_node.next = even_last_node.next;
        odd_last_node = odd_last_node.next;
        if (odd_last_node.next == null) {
            odd_last_node.next = even_head_node;
            /**
             * 注意 由于单数的链表的最后一个节点一定连的是 偶数链表所有没问题
             * 但是偶数的节点的 最后一个节点 可能还连着 一个奇数的节点 所以要 加以处理
             * */
            even_last_node.next = null;
            break;
        }
        even_last_node.next = odd_last_node.next;
        even_last_node = even_last_node.next;
    }
    return head;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual(oddEvenList(null), null);
assert_1.default.deepStrictEqual(oddEvenList(LinkedList_1.createLinkedList([1, 2, 3, 4])).toString(), [1, 3, 2, 4]);
assert_1.default.deepStrictEqual(oddEvenList(LinkedList_1.createLinkedList([1])).toString(), [1]);
assert_1.default.deepStrictEqual(oddEvenList(LinkedList_1.createLinkedList([1, 2])).toString(), [1, 2]);
assert_1.default.deepStrictEqual(oddEvenList(LinkedList_1.createLinkedList([1, 2, 3])).toString(), [1, 3, 2]);
assert_1.default.deepStrictEqual(oddEvenList(LinkedList_1.createLinkedList([1, 2, 3, 4])).toString(), [1, 3, 2, 4]);
assert_1.default.deepStrictEqual(oddEvenList(LinkedList_1.createLinkedList([1, 2, 3, 4, 5])).toString(), [1, 3, 5, 2, 4]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzI4LuWlh+WBtumTvuihqC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMzI4LuWlh+WBtumTvuihqC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFxQkk7QUFDSixtREFBOEQ7QUFFOUQ7OztHQUdHO0FBQ0gsSUFBSSxXQUFXLEdBQUcsVUFBVSxJQUFxQjtJQUM3QyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSTtRQUFFLE9BQU8sSUFBSSxDQUFDO0lBQzdFLE9BQU87SUFDUCxtQ0FBbUM7SUFDbkMsNkNBQTZDO0lBQzdDLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQztJQUN6QixNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2pDLElBQUksY0FBYyxHQUFHLGNBQWMsQ0FBQztJQUVwQyxPQUFPLElBQUksRUFBRTtRQUNULElBQUksY0FBZSxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUU7WUFDOUIsYUFBYSxDQUFDLElBQUksR0FBRyxjQUFjLENBQUM7WUFDcEMsTUFBTTtTQUNUO1FBQ0QsYUFBYSxDQUFDLElBQUksR0FBRyxjQUFlLENBQUMsSUFBSSxDQUFDO1FBQzFDLGFBQWEsR0FBRyxhQUFhLENBQUMsSUFBSyxDQUFDO1FBRXBDLElBQUksYUFBYSxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUU7WUFDNUIsYUFBYSxDQUFDLElBQUksR0FBRyxjQUFjLENBQUM7WUFDcEM7OztpQkFHSztZQUNMLGNBQWMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQzNCLE1BQU07U0FDVDtRQUNELGNBQWUsQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQztRQUMxQyxjQUFjLEdBQUcsY0FBZSxDQUFDLElBQUksQ0FBQztLQUV6QztJQUVELE9BQU8sSUFBSSxDQUFDO0FBRWhCLENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLGVBQWUsQ0FDbEIsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUNqQixJQUFJLENBQ1AsQ0FBQztBQUNGLGdCQUFNLENBQUMsZUFBZSxDQUNsQixXQUFXLENBQUMsNkJBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUMsUUFBUSxFQUFFLEVBQ3ZELENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ2YsQ0FBQztBQUNGLGdCQUFNLENBQUMsZUFBZSxDQUNsQixXQUFXLENBQUMsNkJBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUMsUUFBUSxFQUFFLEVBQzlDLENBQUMsQ0FBQyxDQUFDLENBQ04sQ0FBQztBQUNGLGdCQUFNLENBQUMsZUFBZSxDQUNsQixXQUFXLENBQUMsNkJBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDLFFBQVEsRUFBRSxFQUNqRCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDVCxDQUFDO0FBQ0YsZ0JBQU0sQ0FBQyxlQUFlLENBQ2xCLFdBQVcsQ0FBQyw2QkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDLFFBQVEsRUFBRSxFQUNwRCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ1osQ0FBQztBQUNGLGdCQUFNLENBQUMsZUFBZSxDQUNsQixXQUFXLENBQUMsNkJBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUMsUUFBUSxFQUFFLEVBQ3ZELENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ2YsQ0FBQztBQUNGLGdCQUFNLENBQUMsZUFBZSxDQUNsQixXQUFXLENBQUMsNkJBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDLFFBQVEsRUFBRSxFQUMxRCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDbEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbue7meWumuS4gOS4quWNlemTvuihqO+8jOaKiuaJgOacieeahOWlh+aVsOiKgueCueWSjOWBtuaVsOiKgueCueWIhuWIq+aOkuWcqOS4gOi1t+OAguivt+azqOaEj++8jOi/memHjOeahOWlh+aVsOiKgueCueWSjOWBtuaVsOiKgueCueaMh+eahOaYr+iKgueCuee8luWPt+eahOWlh+WBtuaAp++8jOiAjOS4jeaYr+iKgueCueeahOWAvOeahOWlh+WBtuaAp+OAglxyXG5cclxu6K+35bCd6K+V5L2/55So5Y6f5Zyw566X5rOV5a6M5oiQ44CC5L2g55qE566X5rOV55qE56m66Ze05aSN5p2C5bqm5bqU5Li6IE8oMSnvvIzml7bpl7TlpI3mnYLluqblupTkuLogTyhub2RlcynvvIxub2RlcyDkuLroioLngrnmgLvmlbDjgIJcclxuXHJcbuekuuS+iyAxOlxyXG5cclxu6L6T5YWlOiAxLT4yLT4zLT40LT41LT5OVUxMXHJcbui+k+WHujogMS0+My0+NS0+Mi0+NC0+TlVMTFxyXG7npLrkvosgMjpcclxuXHJcbui+k+WFpTogMi0+MS0+My0+NS0+Ni0+NC0+Ny0+TlVMTFxyXG7ovpPlh7o6IDItPjMtPjYtPjctPjEtPjUtPjQtPk5VTExcclxu6K+05piOOlxyXG5cclxu5bqU5b2T5L+d5oyB5aWH5pWw6IqC54K55ZKM5YG25pWw6IqC54K555qE55u45a+56aG65bqP44CCXHJcbumTvuihqOeahOesrOS4gOS4quiKgueCueinhuS4uuWlh+aVsOiKgueCue+8jOesrOS6jOS4quiKgueCueinhuS4uuWBtuaVsOiKgueCue+8jOS7peatpOexu+aOqOOAglxyXG5cclxu5p2l5rqQ77ya5Yqb5omj77yITGVldENvZGXvvIlcclxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvb2RkLWV2ZW4tbGlua2VkLWxpc3Rcclxu6JGX5L2c5p2D5b2S6aKG5omj572R57uc5omA5pyJ44CC5ZWG5Lia6L2s6L296K+36IGU57O75a6Y5pa55o6I5p2D77yM6Z2e5ZWG5Lia6L2s6L296K+35rOo5piO5Ye65aSE44CCXHJcbiogKi9cclxuaW1wb3J0IHtMaXN0Tm9kZSwgY3JlYXRlTGlua2VkTGlzdH0gZnJvbSBcIi4uL3V0aWwvTGlua2VkTGlzdFwiO1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7TGlzdE5vZGV9IGhlYWRcclxuICogQHJldHVybiB7TGlzdE5vZGV9XHJcbiAqL1xyXG52YXIgb2RkRXZlbkxpc3QgPSBmdW5jdGlvbiAoaGVhZDogTGlzdE5vZGUgfCBudWxsKSB7XHJcbiAgICBpZiAoaGVhZCA9PSBudWxsIHx8IGhlYWQubmV4dCA9PSBudWxsIHx8IGhlYWQubmV4dC5uZXh0ID09IG51bGwpIHJldHVybiBoZWFkO1xyXG4gICAgLy8g5qC55o2u6aKY5oSPXHJcbiAgICAvLyDnqbrpl7TlpI3mnYLluqYgTygxKSDor7TmmI7nqbrpl7TlpI3mnYLluqYg5LiN5Lya5bqU5Li6IG4g55qE5aSn5bCP6ICM5pS55Y+YXHJcbiAgICAvLyDml7bpl7TlpI3mnYLluqblupTkuLogTyhub2RlcynvvIxub2RlcyDkuLroioLngrnmgLvmlbDjgIIg6YKj5LmI5q+P5Liq6IqC54K55Y+q6IO96YGN5Y6G5LiA5qyhXHJcbiAgICBsZXQgb2RkX2xhc3Rfbm9kZSA9IGhlYWQ7XHJcbiAgICBjb25zdCBldmVuX2hlYWRfbm9kZSA9IGhlYWQubmV4dDtcclxuICAgIGxldCBldmVuX2xhc3Rfbm9kZSA9IGV2ZW5faGVhZF9ub2RlO1xyXG5cclxuICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgaWYgKGV2ZW5fbGFzdF9ub2RlIS5uZXh0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgb2RkX2xhc3Rfbm9kZS5uZXh0ID0gZXZlbl9oZWFkX25vZGU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvZGRfbGFzdF9ub2RlLm5leHQgPSBldmVuX2xhc3Rfbm9kZSEubmV4dDtcclxuICAgICAgICBvZGRfbGFzdF9ub2RlID0gb2RkX2xhc3Rfbm9kZS5uZXh0ITtcclxuXHJcbiAgICAgICAgaWYgKG9kZF9sYXN0X25vZGUubmV4dCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIG9kZF9sYXN0X25vZGUubmV4dCA9IGV2ZW5faGVhZF9ub2RlO1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog5rOo5oSPIOeUseS6juWNleaVsOeahOmTvuihqOeahOacgOWQjuS4gOS4quiKgueCueS4gOWumui/nueahOaYryDlgbbmlbDpk77ooajmiYDmnInmsqHpl67pophcclxuICAgICAgICAgICAgICog5L2G5piv5YG25pWw55qE6IqC54K555qEIOacgOWQjuS4gOS4quiKgueCuSDlj6/og73ov5jov57nnYAg5LiA5Liq5aWH5pWw55qE6IqC54K5IOaJgOS7peimgSDliqDku6XlpITnkIZcclxuICAgICAgICAgICAgICogKi9cclxuICAgICAgICAgICAgZXZlbl9sYXN0X25vZGUubmV4dCA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBldmVuX2xhc3Rfbm9kZSEubmV4dCA9IG9kZF9sYXN0X25vZGUubmV4dDtcclxuICAgICAgICBldmVuX2xhc3Rfbm9kZSA9IGV2ZW5fbGFzdF9ub2RlIS5uZXh0O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaGVhZDtcclxuXHJcbn07XHJcblxyXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcclxuXHJcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXHJcbiAgICBvZGRFdmVuTGlzdChudWxsKSxcclxuICAgIG51bGwsXHJcbik7XHJcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXHJcbiAgICBvZGRFdmVuTGlzdChjcmVhdGVMaW5rZWRMaXN0KFsxLCAyLCAzLCA0XSkpIS50b1N0cmluZygpLFxyXG4gICAgWzEsIDMsIDIsIDRdLFxyXG4pO1xyXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxyXG4gICAgb2RkRXZlbkxpc3QoY3JlYXRlTGlua2VkTGlzdChbMV0pKSEudG9TdHJpbmcoKSxcclxuICAgIFsxXSxcclxuKTtcclxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcclxuICAgIG9kZEV2ZW5MaXN0KGNyZWF0ZUxpbmtlZExpc3QoWzEsIDJdKSkhLnRvU3RyaW5nKCksXHJcbiAgICBbMSwgMl0sXHJcbik7XHJcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXHJcbiAgICBvZGRFdmVuTGlzdChjcmVhdGVMaW5rZWRMaXN0KFsxLCAyLCAzXSkpIS50b1N0cmluZygpLFxyXG4gICAgWzEsIDMsIDJdLFxyXG4pO1xyXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxyXG4gICAgb2RkRXZlbkxpc3QoY3JlYXRlTGlua2VkTGlzdChbMSwgMiwgMywgNF0pKSEudG9TdHJpbmcoKSxcclxuICAgIFsxLCAzLCAyLCA0XSxcclxuKTtcclxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcclxuICAgIG9kZEV2ZW5MaXN0KGNyZWF0ZUxpbmtlZExpc3QoWzEsIDIsIDMsIDQsIDVdKSkhLnRvU3RyaW5nKCksXHJcbiAgICBbMSwgMywgNSwgMiwgNF0sXHJcbik7XHJcbiJdfQ==