"use strict";
/**
 * 循环链表和单向链表相似，节点类型都是一样的。唯一的区别是，
 * 在创建循环链表时，让其头节点的 next 属性指向它本身，即：
 * head.next = head
 * 这种行为会传导至链表中的每个节点，使得每个节点的 next 属性都指向链表的头节点。
 * 换句话说，链表的尾节点指向头节点，形成了一个循环链表
 * 如果你希望可以从后向前遍历链表，但是又不想付出额外代价来创建一个双向链表，
 * 那么就需要使用循环链表。从循环链表的尾节点向后移动，就等于从后向前遍历链表。
 * */
Object.defineProperty(exports, "__esModule", { value: true });
class Node {
    constructor(element) {
        this.element = element;
    }
}
class LList {
    constructor(arr) {
        if (Array.isArray(arr) || arr == null) {
        }
        else {
            throw new Error("param must be an Array or none");
        }
        this.head = this.end = new Node(null);
        this.head.next = this.head; // 头尾相连
        if (arr != null) {
            for (let i = 0, length = arr.length; i < length; i++) {
                this.insert(arr[i], this.end);
            }
        }
    }
    insert(newElement, prevElement = this.end) {
        const newNode = new Node(newElement); // new 新节点
        let current;
        if (prevElement instanceof Node) {
            current = prevElement; // 直接使用节点
        }
        else {
            current = this.find(prevElement); // 找到目标节点
        }
        /*
        if (this.find(newElement)) { // 性能最大的消耗如果 每次都检索是不是已经有该值的节点
            throw new Error(newElement + "has already existed!"); // 如果已经有该值的节点就报错
        } else if (prevElement instanceof Node) {
            current = prevElement; // 直接使用节点
        } else {
            current = this.find(prevElement); // 找到目标节点
        }
        */
        newNode.next = current.next; // 新节点的next为 前一个节点的next
        current.next = newNode; // 前一个节点的next 为新节点
        if (current == this.end) {
            this.end = newNode;
        }
        return newNode; // 返回新的节点 按次序插入很多节点时直接确认第二个参数
    }
    ;
    find(element, fromNode = this.head) {
        let currNode = fromNode;
        while (currNode && currNode.element != element) {
            currNode = currNode.next;
        }
        return currNode;
    }
    ;
    insertArr(arr, prevElement = this.end) {
        let current;
        if (prevElement instanceof Node) {
            current = prevElement; // 直接使用节点
        }
        else {
            current = this.find(prevElement); // 找到目标节点
        }
        for (let i = 0; i < arr.length; i++) {
            current = this.insert(arr[i], current);
        }
    }
    ;
    display() {
        let currNode = this.head;
        // 因为是循环链表 所以需要新的约束条件 遍历到head就停止遍历
        do {
            console.log(currNode.next.element);
            currNode = currNode.next;
        } while (currNode !== this.head);
    }
    ;
    remove(element) {
        const prevNode = this.findPrevious(element);
        if (prevNode) {
            prevNode.next = prevNode.next.next; // 将前一个节点的值next 指向 下下个元素
        }
    }
    ;
    findPrevious(element) {
        let currNode = this.head;
        let last;
        do {
            last = currNode;
            currNode = currNode.next;
            if (currNode.element === element)
                return last;
        } while (currNode !== this.head);
        return null;
    }
    ;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoi5b6q546v6ZO+6KGoLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyLmlbDmja7nu5PmnoQv5b6q546v6ZO+6KGoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7S0FRSzs7QUFFTCxNQUFNLElBQUk7SUFJTixZQUFZLE9BQVU7UUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDM0IsQ0FBQztDQUVKO0FBRUQsTUFBTSxLQUFLO0lBSVAsWUFBWSxHQUFRO1FBQ2hCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO1NBQ3RDO2FBQU07WUFDSCxNQUFNLElBQUksS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7U0FDckQ7UUFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU87UUFDbkMsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO1lBQ2IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2pDO1NBQ0o7SUFDTCxDQUFDO0lBRUQsTUFBTSxDQUFDLFVBQW9CLEVBQUUsV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHO1FBQy9DLE1BQU0sT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsVUFBVTtRQUNoRCxJQUFJLE9BQU8sQ0FBQztRQUNaLElBQUksV0FBVyxZQUFZLElBQUksRUFBRTtZQUM3QixPQUFPLEdBQUcsV0FBVyxDQUFDLENBQUMsU0FBUztTQUNuQzthQUFNO1lBQ0gsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxTQUFTO1NBQzlDO1FBQ0Q7Ozs7Ozs7O1VBUUU7UUFDRixPQUFPLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyx1QkFBdUI7UUFDcEQsT0FBTyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQyxrQkFBa0I7UUFDMUMsSUFBSSxPQUFPLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNyQixJQUFJLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQztTQUN0QjtRQUNELE9BQU8sT0FBTyxDQUFDLENBQUMsNkJBQTZCO0lBQ2pELENBQUM7SUFBQSxDQUFDO0lBRUYsSUFBSSxDQUFDLE9BQVUsRUFBRSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUk7UUFDakMsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3hCLE9BQU8sUUFBUSxJQUFJLFFBQVEsQ0FBQyxPQUFPLElBQUksT0FBTyxFQUFFO1lBQzVDLFFBQVEsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO1NBQzVCO1FBQ0QsT0FBTyxRQUFRLENBQUM7SUFDcEIsQ0FBQztJQUFBLENBQUM7SUFFRixTQUFTLENBQUMsR0FBUSxFQUFFLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRztRQUN0QyxJQUFJLE9BQU8sQ0FBQztRQUNaLElBQUksV0FBVyxZQUFZLElBQUksRUFBRTtZQUM3QixPQUFPLEdBQUcsV0FBVyxDQUFDLENBQUMsU0FBUztTQUNuQzthQUFNO1lBQ0gsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxTQUFTO1NBQzlDO1FBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDakMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQzFDO0lBQ0wsQ0FBQztJQUFBLENBQUM7SUFFRixPQUFPO1FBQ0gsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN6QixrQ0FBa0M7UUFDbEMsR0FBRztZQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNuQyxRQUFRLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztTQUM1QixRQUFRLFFBQVEsS0FBSyxJQUFJLENBQUMsSUFBSSxFQUFFO0lBQ3JDLENBQUM7SUFBQSxDQUFDO0lBRUYsTUFBTSxDQUFDLE9BQVU7UUFDYixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVDLElBQUksUUFBUSxFQUFFO1lBQ1YsUUFBUSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLHdCQUF3QjtTQUMvRDtJQUNMLENBQUM7SUFBQSxDQUFDO0lBRUYsWUFBWSxDQUFDLE9BQVU7UUFDbkIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN6QixJQUFJLElBQUksQ0FBQztRQUNULEdBQUc7WUFDQyxJQUFJLEdBQUcsUUFBUSxDQUFDO1lBQ2hCLFFBQVEsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ3pCLElBQUksUUFBUSxDQUFDLE9BQU8sS0FBSyxPQUFPO2dCQUFFLE9BQU8sSUFBSSxDQUFDO1NBQ2pELFFBQVEsUUFBUSxLQUFLLElBQUksQ0FBQyxJQUFJLEVBQUU7UUFDakMsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUFBLENBQUM7Q0FHTCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDlvqrnjq/pk77ooajlkozljZXlkJHpk77ooajnm7jkvLzvvIzoioLngrnnsbvlnovpg73mmK/kuIDmoLfnmoTjgILllK/kuIDnmoTljLrliKvmmK/vvIxcclxuICog5Zyo5Yib5bu65b6q546v6ZO+6KGo5pe277yM6K6p5YW25aS06IqC54K555qEIG5leHQg5bGe5oCn5oyH5ZCR5a6D5pys6Lqr77yM5Y2z77yaXHJcbiAqIGhlYWQubmV4dCA9IGhlYWRcclxuICog6L+Z56eN6KGM5Li65Lya5Lyg5a+86Iez6ZO+6KGo5Lit55qE5q+P5Liq6IqC54K577yM5L2/5b6X5q+P5Liq6IqC54K555qEIG5leHQg5bGe5oCn6YO95oyH5ZCR6ZO+6KGo55qE5aS06IqC54K544CCXHJcbiAqIOaNouWPpeivneivtO+8jOmTvuihqOeahOWwvuiKgueCueaMh+WQkeWktOiKgueCue+8jOW9ouaIkOS6huS4gOS4quW+queOr+mTvuihqFxyXG4gKiDlpoLmnpzkvaDluIzmnJvlj6/ku6Xku47lkI7lkJHliY3pgY3ljobpk77ooajvvIzkvYbmmK/lj4jkuI3mg7Pku5jlh7rpop3lpJbku6Pku7fmnaXliJvlu7rkuIDkuKrlj4zlkJHpk77ooajvvIxcclxuICog6YKj5LmI5bCx6ZyA6KaB5L2/55So5b6q546v6ZO+6KGo44CC5LuO5b6q546v6ZO+6KGo55qE5bC+6IqC54K55ZCR5ZCO56e75Yqo77yM5bCx562J5LqO5LuO5ZCO5ZCR5YmN6YGN5Y6G6ZO+6KGo44CCXHJcbiAqICovXHJcblxyXG5jbGFzcyBOb2RlPFQgPSBhbnk+IHtcclxuICAgIGVsZW1lbnQ6IFQgfCBudWxsO1xyXG4gICAgbmV4dCE6IE5vZGU8VD47XHJcblxyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogVCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jbGFzcyBMTGlzdDxUID0gYW55PiB7XHJcbiAgICBoZWFkOiBOb2RlPFQgfCBudWxsPjtcclxuICAgIGVuZDogTm9kZTxUIHwgbnVsbD47XHJcblxyXG4gICAgY29uc3RydWN0b3IoYXJyOiBUW10pIHtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpIHx8IGFyciA9PSBudWxsKSB7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwicGFyYW0gbXVzdCBiZSBhbiBBcnJheSBvciBub25lXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhlYWQgPSB0aGlzLmVuZCA9IG5ldyBOb2RlKG51bGwpO1xyXG4gICAgICAgIHRoaXMuaGVhZC5uZXh0ID0gdGhpcy5oZWFkOyAvLyDlpLTlsL7nm7jov55cclxuICAgICAgICBpZiAoYXJyICE9IG51bGwpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbmd0aCA9IGFyci5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnNlcnQoYXJyW2ldLCB0aGlzLmVuZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5zZXJ0KG5ld0VsZW1lbnQ6IFQgfCBudWxsLCBwcmV2RWxlbWVudCA9IHRoaXMuZW5kKSB7XHJcbiAgICAgICAgY29uc3QgbmV3Tm9kZSA9IG5ldyBOb2RlKG5ld0VsZW1lbnQpOyAvLyBuZXcg5paw6IqC54K5XHJcbiAgICAgICAgbGV0IGN1cnJlbnQ7XHJcbiAgICAgICAgaWYgKHByZXZFbGVtZW50IGluc3RhbmNlb2YgTm9kZSkge1xyXG4gICAgICAgICAgICBjdXJyZW50ID0gcHJldkVsZW1lbnQ7IC8vIOebtOaOpeS9v+eUqOiKgueCuVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnQgPSB0aGlzLmZpbmQocHJldkVsZW1lbnQpOyAvLyDmib7liLDnm67moIfoioLngrlcclxuICAgICAgICB9XHJcbiAgICAgICAgLypcclxuICAgICAgICBpZiAodGhpcy5maW5kKG5ld0VsZW1lbnQpKSB7IC8vIOaAp+iDveacgOWkp+eahOa2iOiAl+WmguaenCDmr4/mrKHpg73mo4DntKLmmK/kuI3mmK/lt7Lnu4/mnInor6XlgLznmoToioLngrlcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG5ld0VsZW1lbnQgKyBcImhhcyBhbHJlYWR5IGV4aXN0ZWQhXCIpOyAvLyDlpoLmnpzlt7Lnu4/mnInor6XlgLznmoToioLngrnlsLHmiqXplJlcclxuICAgICAgICB9IGVsc2UgaWYgKHByZXZFbGVtZW50IGluc3RhbmNlb2YgTm9kZSkge1xyXG4gICAgICAgICAgICBjdXJyZW50ID0gcHJldkVsZW1lbnQ7IC8vIOebtOaOpeS9v+eUqOiKgueCuVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnQgPSB0aGlzLmZpbmQocHJldkVsZW1lbnQpOyAvLyDmib7liLDnm67moIfoioLngrlcclxuICAgICAgICB9XHJcbiAgICAgICAgKi9cclxuICAgICAgICBuZXdOb2RlLm5leHQgPSBjdXJyZW50Lm5leHQ7IC8vIOaWsOiKgueCueeahG5leHTkuLog5YmN5LiA5Liq6IqC54K555qEbmV4dFxyXG4gICAgICAgIGN1cnJlbnQubmV4dCA9IG5ld05vZGU7IC8vIOWJjeS4gOS4quiKgueCueeahG5leHQg5Li65paw6IqC54K5XHJcbiAgICAgICAgaWYgKGN1cnJlbnQgPT0gdGhpcy5lbmQpIHtcclxuICAgICAgICAgICAgdGhpcy5lbmQgPSBuZXdOb2RlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3Tm9kZTsgLy8g6L+U5Zue5paw55qE6IqC54K5IOaMieasoeW6j+aPkuWFpeW+iOWkmuiKgueCueaXtuebtOaOpeehruiupOesrOS6jOS4quWPguaVsFxyXG4gICAgfTtcclxuXHJcbiAgICBmaW5kKGVsZW1lbnQ6IFQsIGZyb21Ob2RlID0gdGhpcy5oZWFkKSB7XHJcbiAgICAgICAgbGV0IGN1cnJOb2RlID0gZnJvbU5vZGU7XHJcbiAgICAgICAgd2hpbGUgKGN1cnJOb2RlICYmIGN1cnJOb2RlLmVsZW1lbnQgIT0gZWxlbWVudCkge1xyXG4gICAgICAgICAgICBjdXJyTm9kZSA9IGN1cnJOb2RlLm5leHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjdXJyTm9kZTtcclxuICAgIH07XHJcblxyXG4gICAgaW5zZXJ0QXJyKGFycjogVFtdLCBwcmV2RWxlbWVudCA9IHRoaXMuZW5kKSB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnQ7XHJcbiAgICAgICAgaWYgKHByZXZFbGVtZW50IGluc3RhbmNlb2YgTm9kZSkge1xyXG4gICAgICAgICAgICBjdXJyZW50ID0gcHJldkVsZW1lbnQ7IC8vIOebtOaOpeS9v+eUqOiKgueCuVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnQgPSB0aGlzLmZpbmQocHJldkVsZW1lbnQpOyAvLyDmib7liLDnm67moIfoioLngrlcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY3VycmVudCA9IHRoaXMuaW5zZXJ0KGFycltpXSwgY3VycmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBkaXNwbGF5KCkge1xyXG4gICAgICAgIGxldCBjdXJyTm9kZSA9IHRoaXMuaGVhZDtcclxuICAgICAgICAvLyDlm6DkuLrmmK/lvqrnjq/pk77ooagg5omA5Lul6ZyA6KaB5paw55qE57qm5p2f5p2h5Lu2IOmBjeWOhuWIsGhlYWTlsLHlgZzmraLpgY3ljoZcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJOb2RlLm5leHQuZWxlbWVudCk7XHJcbiAgICAgICAgICAgIGN1cnJOb2RlID0gY3Vyck5vZGUubmV4dDtcclxuICAgICAgICB9IHdoaWxlIChjdXJyTm9kZSAhPT0gdGhpcy5oZWFkKTtcclxuICAgIH07XHJcblxyXG4gICAgcmVtb3ZlKGVsZW1lbnQ6IFQpIHtcclxuICAgICAgICBjb25zdCBwcmV2Tm9kZSA9IHRoaXMuZmluZFByZXZpb3VzKGVsZW1lbnQpO1xyXG4gICAgICAgIGlmIChwcmV2Tm9kZSkge1xyXG4gICAgICAgICAgICBwcmV2Tm9kZS5uZXh0ID0gcHJldk5vZGUubmV4dC5uZXh0OyAvLyDlsIbliY3kuIDkuKroioLngrnnmoTlgLxuZXh0IOaMh+WQkSDkuIvkuIvkuKrlhYPntKBcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZpbmRQcmV2aW91cyhlbGVtZW50OiBUKSB7XHJcbiAgICAgICAgbGV0IGN1cnJOb2RlID0gdGhpcy5oZWFkO1xyXG4gICAgICAgIGxldCBsYXN0O1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgbGFzdCA9IGN1cnJOb2RlO1xyXG4gICAgICAgICAgICBjdXJyTm9kZSA9IGN1cnJOb2RlLm5leHQ7XHJcbiAgICAgICAgICAgIGlmIChjdXJyTm9kZS5lbGVtZW50ID09PSBlbGVtZW50KSByZXR1cm4gbGFzdDtcclxuICAgICAgICB9IHdoaWxlIChjdXJyTm9kZSAhPT0gdGhpcy5oZWFkKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH07XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IHt9O1xyXG4iXX0=