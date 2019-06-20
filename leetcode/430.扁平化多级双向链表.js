"use strict";
/*
您将获得一个双向链表，除了下一个和前一个指针之外，它还有一个子指针，可能指向单独的双向链表。
这些子列表可能有一个或多个自己的子项，依此类推，生成多级数据结构，如下面的示例所示。

扁平化列表，使所有结点出现在单级双链表中。您将获得列表第一级的头部。

示例:

输入:
 1,,,2,,,3,,,4,,,5,,,6,,NULL
         |
         7,,,8,,,9,,,10,,NULL
             |
             11,,12,,NULL

输出:
1,2,3,7,8,11,12,9,10,4,5,6,NULL

来源：力扣（LeetCode）
链接：https://leetcode,cn.com/problems/flatten,a,multilevel,doubly,linked,list
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.child = null;
        this.next = null;
        this.val = val;
    }
}
/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
    let left_junction = head;
    while (left_junction != null) {
        if (left_junction.child) {
            const right_junction = left_junction.next;
            left_junction.next = left_junction.child;
            left_junction.child.prev = left_junction;
            let child_tail = left_junction.child;
            while (child_tail.next != null) {
                child_tail = child_tail.next;
            }
            if (right_junction)
                right_junction.prev = child_tail;
            child_tail.next = right_junction;
            left_junction.child = null;
        }
        left_junction = left_junction.next;
    }
    return head;
};
/*
var flatten = function (head: Node | null) {
    if(head == null)return null;
    let left_junction: Node;
    step(head);
    return head;

    function step(head: Node) {
        let next = null;
        if(left_junction){
            next = left_junction.next;
        }

        if (!left_junction) {
            left_junction = head;
        } else {
            left_junction.next = head;
            head.prev = left_junction;
        }



        let currentNode = head;
        let tail = currentNode;
        while (currentNode) {
            left_junction = currentNode;
            if (currentNode.child) {
                step(currentNode.child);
                currentNode.child = null;
            }
            tail = currentNode;
            currentNode = currentNode.next!;
            // left_junction = currentNode;
        }


        if (next != null) {
            next.prev = tail;
        }
        tail.next = next;
    }
};
*/
const assert_1 = __importDefault(require("assert"));
const DoubleLinkedList_1 = require("../util/DoubleLinkedList");
{
    const line_1 = DoubleLinkedList_1.createDoubleLinkedList([1]);
    assert_1.default.deepStrictEqual(flatten(line_1).toString(), [1]);
}
{
    const line_1 = DoubleLinkedList_1.createDoubleLinkedList([1, 2, 3, 4, 5, 6]);
    const line_2 = DoubleLinkedList_1.createDoubleLinkedList([7, 8, 9, 10]);
    const line_3 = DoubleLinkedList_1.createDoubleLinkedList([11, 12]);
    line_1.next.next.child = line_2;
    line_2.next.child = line_3;
    assert_1.default.deepStrictEqual(flatten(line_1).toString(), [1, 2, 3, 7, 8, 11, 12, 9, 10, 4, 5, 6]);
}
{
    const line_1 = DoubleLinkedList_1.createDoubleLinkedList([1]);
    const line_2 = DoubleLinkedList_1.createDoubleLinkedList([7, 8, 9, 10]);
    const line_3 = DoubleLinkedList_1.createDoubleLinkedList([11, 12]);
    line_1.child = line_2;
    line_2.next.child = line_3;
    assert_1.default.deepStrictEqual(flatten(line_1).toString(), [1, 7, 8, 11, 12, 9, 10]);
}
{
    const line_1 = DoubleLinkedList_1.createDoubleLinkedList([1]);
    const line_2 = DoubleLinkedList_1.createDoubleLinkedList([2]);
    const line_3 = DoubleLinkedList_1.createDoubleLinkedList([3]);
    line_1.child = line_2;
    line_2.child = line_3;
    assert_1.default.deepStrictEqual(flatten(line_1).toString(), [1, 2, 3]);
}
{
    const line_1 = DoubleLinkedList_1.createDoubleLinkedList([1, 2, 5, 7]);
    const line_2 = DoubleLinkedList_1.createDoubleLinkedList([3, 4]);
    const line_3 = DoubleLinkedList_1.createDoubleLinkedList([6]);
    line_1.next.child = line_2;
    line_1.next.next.child = line_3;
    assert_1.default.deepStrictEqual(flatten(line_1).toString(), [1, 2, 3, 4, 5, 6, 7]);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDMwLuaJgeW5s+WMluWkmue6p+WPjOWQkemTvuihqC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNDMwLuaJgeW5s+WMluWkmue6p+WPjOWQkemTvuihqC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXFCSTs7Ozs7QUFHSixNQUFNLElBQUk7SUFLTixZQUFtQixHQUFNO1FBQU4sUUFBRyxHQUFILEdBQUcsQ0FBRztRQUp6QixTQUFJLEdBQWdCLElBQUksQ0FBQztRQUN6QixVQUFLLEdBQWdCLElBQUksQ0FBQztRQUMxQixTQUFJLEdBQWdCLElBQUksQ0FBQztRQUdyQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNuQixDQUFDO0NBRUo7QUFFRDs7O0dBR0c7QUFDSCxJQUFJLE9BQU8sR0FBRyxVQUFVLElBQWlCO0lBQ3JDLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQztJQUN6QixPQUFPLGFBQWEsSUFBSSxJQUFJLEVBQUU7UUFDMUIsSUFBSSxhQUFhLENBQUMsS0FBSyxFQUFFO1lBQ3JCLE1BQU0sY0FBYyxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUM7WUFDMUMsYUFBYSxDQUFDLElBQUksR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDO1lBQ3pDLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQztZQUV6QyxJQUFJLFVBQVUsR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDO1lBQ3JDLE9BQU8sVUFBVSxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUU7Z0JBQzVCLFVBQVUsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDO2FBQ2hDO1lBRUQsSUFBSSxjQUFjO2dCQUFFLGNBQWMsQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO1lBQ3JELFVBQVUsQ0FBQyxJQUFJLEdBQUcsY0FBYyxDQUFDO1lBQ2pDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFBO1NB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LENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEQsTUFBTSxNQUFNLEdBQUcseUNBQXNCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QyxNQUFNLE1BQU0sR0FBRyx5Q0FBc0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFM0MsTUFBTSxDQUFDLElBQUssQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO0lBQzVCLE1BQU0sQ0FBQyxJQUFLLENBQUMsSUFBSyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7SUFFbEMsZ0JBQU0sQ0FBQyxlQUFlLENBQ2xCLE9BQU8sQ0FBQyxNQUFNLENBQUUsQ0FBQyxRQUFRLEVBQUUsRUFDM0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDeEIsQ0FBQztDQUNMIiwic291cmNlc0NvbnRlbnQiOlsiLypcbuaCqOWwhuiOt+W+l+S4gOS4quWPjOWQkemTvuihqO+8jOmZpOS6huS4i+S4gOS4quWSjOWJjeS4gOS4quaMh+mSiOS5i+Wklu+8jOWug+i/mOacieS4gOS4quWtkOaMh+mSiO+8jOWPr+iDveaMh+WQkeWNleeLrOeahOWPjOWQkemTvuihqOOAglxu6L+Z5Lqb5a2Q5YiX6KGo5Y+v6IO95pyJ5LiA5Liq5oiW5aSa5Liq6Ieq5bex55qE5a2Q6aG577yM5L6d5q2k57G75o6o77yM55Sf5oiQ5aSa57qn5pWw5o2u57uT5p6E77yM5aaC5LiL6Z2i55qE56S65L6L5omA56S644CCXG5cbuaJgeW5s+WMluWIl+ihqO+8jOS9v+aJgOaciee7k+eCueWHuueOsOWcqOWNlee6p+WPjOmTvuihqOS4reOAguaCqOWwhuiOt+W+l+WIl+ihqOesrOS4gOe6p+eahOWktOmDqOOAglxuXG7npLrkvos6XG5cbui+k+WFpTpcbiAxLCwsMiwsLDMsLCw0LCwsNSwsLDYsLE5VTExcbiAgICAgICAgIHxcbiAgICAgICAgIDcsLCw4LCwsOSwsLDEwLCxOVUxMXG4gICAgICAgICAgICAgfFxuICAgICAgICAgICAgIDExLCwxMiwsTlVMTFxuXG7ovpPlh7o6XG4xLDIsMyw3LDgsMTEsMTIsOSwxMCw0LDUsNixOVUxMXG5cbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXG7pk77mjqXvvJpodHRwczovL2xlZXRjb2RlLGNuLmNvbS9wcm9ibGVtcy9mbGF0dGVuLGEsbXVsdGlsZXZlbCxkb3VibHksbGlua2VkLGxpc3RcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxuKiAqL1xuXG5cbmNsYXNzIE5vZGU8VCA9IGFueT4ge1xuICAgIHByZXY6IG51bGwgfCBOb2RlID0gbnVsbDtcbiAgICBjaGlsZDogbnVsbCB8IE5vZGUgPSBudWxsO1xuICAgIG5leHQ6IG51bGwgfCBOb2RlID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB2YWw6IFQpIHtcbiAgICAgICAgdGhpcy52YWwgPSB2YWw7XG4gICAgfVxuXG59XG5cbi8qKlxuICogQHBhcmFtIHtOb2RlfSBoZWFkXG4gKiBAcmV0dXJuIHtOb2RlfVxuICovXG52YXIgZmxhdHRlbiA9IGZ1bmN0aW9uIChoZWFkOiBOb2RlIHwgbnVsbCkge1xuICAgIGxldCBsZWZ0X2p1bmN0aW9uID0gaGVhZDtcbiAgICB3aGlsZSAobGVmdF9qdW5jdGlvbiAhPSBudWxsKSB7XG4gICAgICAgIGlmIChsZWZ0X2p1bmN0aW9uLmNoaWxkKSB7XG4gICAgICAgICAgICBjb25zdCByaWdodF9qdW5jdGlvbiA9IGxlZnRfanVuY3Rpb24ubmV4dDtcbiAgICAgICAgICAgIGxlZnRfanVuY3Rpb24ubmV4dCA9IGxlZnRfanVuY3Rpb24uY2hpbGQ7XG4gICAgICAgICAgICBsZWZ0X2p1bmN0aW9uLmNoaWxkLnByZXYgPSBsZWZ0X2p1bmN0aW9uO1xuXG4gICAgICAgICAgICBsZXQgY2hpbGRfdGFpbCA9IGxlZnRfanVuY3Rpb24uY2hpbGQ7XG4gICAgICAgICAgICB3aGlsZSAoY2hpbGRfdGFpbC5uZXh0ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjaGlsZF90YWlsID0gY2hpbGRfdGFpbC5uZXh0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmlnaHRfanVuY3Rpb24pIHJpZ2h0X2p1bmN0aW9uLnByZXYgPSBjaGlsZF90YWlsO1xuICAgICAgICAgICAgY2hpbGRfdGFpbC5uZXh0ID0gcmlnaHRfanVuY3Rpb247XG4gICAgICAgICAgICBsZWZ0X2p1bmN0aW9uLmNoaWxkID0gbnVsbFxuXG4gICAgICAgIH1cbiAgICAgICAgbGVmdF9qdW5jdGlvbiA9IGxlZnRfanVuY3Rpb24ubmV4dDtcblxuICAgIH1cbiAgICByZXR1cm4gaGVhZDtcbn07XG4vKlxudmFyIGZsYXR0ZW4gPSBmdW5jdGlvbiAoaGVhZDogTm9kZSB8IG51bGwpIHtcbiAgICBpZihoZWFkID09IG51bGwpcmV0dXJuIG51bGw7XG4gICAgbGV0IGxlZnRfanVuY3Rpb246IE5vZGU7XG4gICAgc3RlcChoZWFkKTtcbiAgICByZXR1cm4gaGVhZDtcblxuICAgIGZ1bmN0aW9uIHN0ZXAoaGVhZDogTm9kZSkge1xuICAgICAgICBsZXQgbmV4dCA9IG51bGw7XG4gICAgICAgIGlmKGxlZnRfanVuY3Rpb24pe1xuICAgICAgICAgICAgbmV4dCA9IGxlZnRfanVuY3Rpb24ubmV4dDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghbGVmdF9qdW5jdGlvbikge1xuICAgICAgICAgICAgbGVmdF9qdW5jdGlvbiA9IGhlYWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZWZ0X2p1bmN0aW9uLm5leHQgPSBoZWFkO1xuICAgICAgICAgICAgaGVhZC5wcmV2ID0gbGVmdF9qdW5jdGlvbjtcbiAgICAgICAgfVxuXG5cblxuICAgICAgICBsZXQgY3VycmVudE5vZGUgPSBoZWFkO1xuICAgICAgICBsZXQgdGFpbCA9IGN1cnJlbnROb2RlO1xuICAgICAgICB3aGlsZSAoY3VycmVudE5vZGUpIHtcbiAgICAgICAgICAgIGxlZnRfanVuY3Rpb24gPSBjdXJyZW50Tm9kZTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50Tm9kZS5jaGlsZCkge1xuICAgICAgICAgICAgICAgIHN0ZXAoY3VycmVudE5vZGUuY2hpbGQpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnROb2RlLmNoaWxkID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRhaWwgPSBjdXJyZW50Tm9kZTtcbiAgICAgICAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUubmV4dCE7XG4gICAgICAgICAgICAvLyBsZWZ0X2p1bmN0aW9uID0gY3VycmVudE5vZGU7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmIChuZXh0ICE9IG51bGwpIHtcbiAgICAgICAgICAgIG5leHQucHJldiA9IHRhaWw7XG4gICAgICAgIH1cbiAgICAgICAgdGFpbC5uZXh0ID0gbmV4dDtcbiAgICB9XG59O1xuKi9cblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5pbXBvcnQge2NyZWF0ZURvdWJsZUxpbmtlZExpc3R9IGZyb20gXCIuLi91dGlsL0RvdWJsZUxpbmtlZExpc3RcIjtcblxue1xuICAgIGNvbnN0IGxpbmVfMSA9IGNyZWF0ZURvdWJsZUxpbmtlZExpc3QoWzFdKTtcblxuICAgIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gICAgICAgIGZsYXR0ZW4obGluZV8xKSEudG9TdHJpbmcoKSxcbiAgICAgICAgWzFdLFxuICAgICk7XG59XG57XG4gICAgY29uc3QgbGluZV8xID0gY3JlYXRlRG91YmxlTGlua2VkTGlzdChbMSwgMiwgMywgNCwgNSwgNl0pO1xuICAgIGNvbnN0IGxpbmVfMiA9IGNyZWF0ZURvdWJsZUxpbmtlZExpc3QoWzcsIDgsIDksIDEwXSk7XG4gICAgY29uc3QgbGluZV8zID0gY3JlYXRlRG91YmxlTGlua2VkTGlzdChbMTEsIDEyXSk7XG5cbiAgICBsaW5lXzEubmV4dCEubmV4dCEuY2hpbGQgPSBsaW5lXzI7XG4gICAgbGluZV8yLm5leHQhLmNoaWxkID0gbGluZV8zO1xuXG4gICAgYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAgICAgICAgZmxhdHRlbihsaW5lXzEpIS50b1N0cmluZygpLFxuICAgICAgICBbMSwgMiwgMywgNywgOCwgMTEsIDEyLCA5LCAxMCwgNCwgNSwgNl0sXG4gICAgKTtcbn1cbntcbiAgICBjb25zdCBsaW5lXzEgPSBjcmVhdGVEb3VibGVMaW5rZWRMaXN0KFsxXSk7XG4gICAgY29uc3QgbGluZV8yID0gY3JlYXRlRG91YmxlTGlua2VkTGlzdChbNywgOCwgOSwgMTBdKTtcbiAgICBjb25zdCBsaW5lXzMgPSBjcmVhdGVEb3VibGVMaW5rZWRMaXN0KFsxMSwgMTJdKTtcblxuICAgIGxpbmVfMS5jaGlsZCA9IGxpbmVfMjtcbiAgICBsaW5lXzIubmV4dCEuY2hpbGQgPSBsaW5lXzM7XG5cbiAgICBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxuICAgICAgICBmbGF0dGVuKGxpbmVfMSkhLnRvU3RyaW5nKCksXG4gICAgICAgIFsxLCA3LCA4LCAxMSwgMTIsIDksIDEwXSxcbiAgICApO1xufVxue1xuICAgIGNvbnN0IGxpbmVfMSA9IGNyZWF0ZURvdWJsZUxpbmtlZExpc3QoWzFdKTtcbiAgICBjb25zdCBsaW5lXzIgPSBjcmVhdGVEb3VibGVMaW5rZWRMaXN0KFsyXSk7XG4gICAgY29uc3QgbGluZV8zID0gY3JlYXRlRG91YmxlTGlua2VkTGlzdChbM10pO1xuXG4gICAgbGluZV8xLmNoaWxkID0gbGluZV8yO1xuICAgIGxpbmVfMi5jaGlsZCA9IGxpbmVfMztcblxuICAgIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gICAgICAgIGZsYXR0ZW4obGluZV8xKSEudG9TdHJpbmcoKSxcbiAgICAgICAgWzEsIDIsIDNdLFxuICAgICk7XG59XG57XG4gICAgY29uc3QgbGluZV8xID0gY3JlYXRlRG91YmxlTGlua2VkTGlzdChbMSwgMiwgNSwgN10pO1xuICAgIGNvbnN0IGxpbmVfMiA9IGNyZWF0ZURvdWJsZUxpbmtlZExpc3QoWzMsIDRdKTtcbiAgICBjb25zdCBsaW5lXzMgPSBjcmVhdGVEb3VibGVMaW5rZWRMaXN0KFs2XSk7XG5cbiAgICBsaW5lXzEubmV4dCEuY2hpbGQgPSBsaW5lXzI7XG4gICAgbGluZV8xLm5leHQhLm5leHQhLmNoaWxkID0gbGluZV8zO1xuXG4gICAgYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAgICAgICAgZmxhdHRlbihsaW5lXzEpIS50b1N0cmluZygpLFxuICAgICAgICBbMSwgMiwgMywgNCwgNSwgNiwgN10sXG4gICAgKTtcbn1cbiJdfQ==