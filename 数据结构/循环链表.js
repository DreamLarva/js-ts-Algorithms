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
    find(element, fromNode = this.head) {
        let currNode = fromNode;
        while (currNode && currNode.element != element) {
            currNode = currNode.next;
        }
        return currNode;
    }
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
    display() {
        let currNode = this.head;
        // 因为是循环链表 所以需要新的约束条件 遍历到head就停止遍历
        do {
            console.log(currNode.next.element);
            currNode = currNode.next;
        } while (currNode !== this.head);
    }
    remove(element) {
        const prevNode = this.findPrevious(element);
        if (prevNode) {
            prevNode.next = prevNode.next.next; // 将前一个节点的值next 指向 下下个元素
        }
    }
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoi5b6q546v6ZO+6KGoLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyLmlbDmja7nu5PmnoQv5b6q546v6ZO+6KGoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7S0FRSzs7QUFFTCxNQUFNLElBQUk7SUFJUixZQUFZLE9BQVU7UUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQztDQUNGO0FBRUQsTUFBTSxLQUFLO0lBSVQsWUFBWSxHQUFRO1FBQ2xCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO1NBQ3RDO2FBQU07WUFDTCxNQUFNLElBQUksS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7U0FDbkQ7UUFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU87UUFDbkMsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO1lBQ2YsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDcEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQy9CO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsTUFBTSxDQUFDLFVBQW9CLEVBQUUsV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHO1FBQ2pELE1BQU0sT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsVUFBVTtRQUNoRCxJQUFJLE9BQU8sQ0FBQztRQUNaLElBQUksV0FBVyxZQUFZLElBQUksRUFBRTtZQUMvQixPQUFPLEdBQUcsV0FBVyxDQUFDLENBQUMsU0FBUztTQUNqQzthQUFNO1lBQ0wsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxTQUFTO1NBQzVDO1FBQ0Q7Ozs7Ozs7O2NBUU07UUFDTixPQUFPLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyx1QkFBdUI7UUFDcEQsT0FBTyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQyxrQkFBa0I7UUFDMUMsSUFBSSxPQUFPLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUN2QixJQUFJLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQztTQUNwQjtRQUNELE9BQU8sT0FBTyxDQUFDLENBQUMsNkJBQTZCO0lBQy9DLENBQUM7SUFFRCxJQUFJLENBQUMsT0FBVSxFQUFFLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSTtRQUNuQyxJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDeEIsT0FBTyxRQUFRLElBQUksUUFBUSxDQUFDLE9BQU8sSUFBSSxPQUFPLEVBQUU7WUFDOUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7U0FDMUI7UUFDRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQsU0FBUyxDQUFDLEdBQVEsRUFBRSxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUc7UUFDeEMsSUFBSSxPQUFPLENBQUM7UUFDWixJQUFJLFdBQVcsWUFBWSxJQUFJLEVBQUU7WUFDL0IsT0FBTyxHQUFHLFdBQVcsQ0FBQyxDQUFDLFNBQVM7U0FDakM7YUFBTTtZQUNMLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsU0FBUztTQUM1QztRQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ25DLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUN4QztJQUNILENBQUM7SUFFRCxPQUFPO1FBQ0wsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN6QixrQ0FBa0M7UUFDbEMsR0FBRztZQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNuQyxRQUFRLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztTQUMxQixRQUFRLFFBQVEsS0FBSyxJQUFJLENBQUMsSUFBSSxFQUFFO0lBQ25DLENBQUM7SUFFRCxNQUFNLENBQUMsT0FBVTtRQUNmLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUMsSUFBSSxRQUFRLEVBQUU7WUFDWixRQUFRLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsd0JBQXdCO1NBQzdEO0lBQ0gsQ0FBQztJQUVELFlBQVksQ0FBQyxPQUFVO1FBQ3JCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDekIsSUFBSSxJQUFJLENBQUM7UUFDVCxHQUFHO1lBQ0QsSUFBSSxHQUFHLFFBQVEsQ0FBQztZQUNoQixRQUFRLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztZQUN6QixJQUFJLFFBQVEsQ0FBQyxPQUFPLEtBQUssT0FBTztnQkFBRSxPQUFPLElBQUksQ0FBQztTQUMvQyxRQUFRLFFBQVEsS0FBSyxJQUFJLENBQUMsSUFBSSxFQUFFO1FBQ2pDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiDlvqrnjq/pk77ooajlkozljZXlkJHpk77ooajnm7jkvLzvvIzoioLngrnnsbvlnovpg73mmK/kuIDmoLfnmoTjgILllK/kuIDnmoTljLrliKvmmK/vvIxcbiAqIOWcqOWIm+W7uuW+queOr+mTvuihqOaXtu+8jOiuqeWFtuWktOiKgueCueeahCBuZXh0IOWxnuaAp+aMh+WQkeWug+acrOi6q++8jOWNs++8mlxuICogaGVhZC5uZXh0ID0gaGVhZFxuICog6L+Z56eN6KGM5Li65Lya5Lyg5a+86Iez6ZO+6KGo5Lit55qE5q+P5Liq6IqC54K577yM5L2/5b6X5q+P5Liq6IqC54K555qEIG5leHQg5bGe5oCn6YO95oyH5ZCR6ZO+6KGo55qE5aS06IqC54K544CCXG4gKiDmjaLlj6Xor53or7TvvIzpk77ooajnmoTlsL7oioLngrnmjIflkJHlpLToioLngrnvvIzlvaLmiJDkuobkuIDkuKrlvqrnjq/pk77ooahcbiAqIOWmguaenOS9oOW4jOacm+WPr+S7peS7juWQjuWQkeWJjemBjeWOhumTvuihqO+8jOS9huaYr+WPiOS4jeaDs+S7mOWHuumineWkluS7o+S7t+adpeWIm+W7uuS4gOS4quWPjOWQkemTvuihqO+8jFxuICog6YKj5LmI5bCx6ZyA6KaB5L2/55So5b6q546v6ZO+6KGo44CC5LuO5b6q546v6ZO+6KGo55qE5bC+6IqC54K55ZCR5ZCO56e75Yqo77yM5bCx562J5LqO5LuO5ZCO5ZCR5YmN6YGN5Y6G6ZO+6KGo44CCXG4gKiAqL1xuXG5jbGFzcyBOb2RlPFQgPSBhbnk+IHtcbiAgZWxlbWVudDogVCB8IG51bGw7XG4gIG5leHQhOiBOb2RlPFQ+O1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IFQpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG59XG5cbmNsYXNzIExMaXN0PFQgPSBhbnk+IHtcbiAgaGVhZDogTm9kZTxUIHwgbnVsbD47XG4gIGVuZDogTm9kZTxUIHwgbnVsbD47XG5cbiAgY29uc3RydWN0b3IoYXJyOiBUW10pIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpIHx8IGFyciA9PSBudWxsKSB7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcInBhcmFtIG11c3QgYmUgYW4gQXJyYXkgb3Igbm9uZVwiKTtcbiAgICB9XG4gICAgdGhpcy5oZWFkID0gdGhpcy5lbmQgPSBuZXcgTm9kZShudWxsKTtcbiAgICB0aGlzLmhlYWQubmV4dCA9IHRoaXMuaGVhZDsgLy8g5aS05bC+55u46L+eXG4gICAgaWYgKGFyciAhPSBudWxsKSB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbGVuZ3RoID0gYXJyLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMuaW5zZXJ0KGFycltpXSwgdGhpcy5lbmQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGluc2VydChuZXdFbGVtZW50OiBUIHwgbnVsbCwgcHJldkVsZW1lbnQgPSB0aGlzLmVuZCkge1xuICAgIGNvbnN0IG5ld05vZGUgPSBuZXcgTm9kZShuZXdFbGVtZW50KTsgLy8gbmV3IOaWsOiKgueCuVxuICAgIGxldCBjdXJyZW50O1xuICAgIGlmIChwcmV2RWxlbWVudCBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgIGN1cnJlbnQgPSBwcmV2RWxlbWVudDsgLy8g55u05o6l5L2/55So6IqC54K5XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnQgPSB0aGlzLmZpbmQocHJldkVsZW1lbnQpOyAvLyDmib7liLDnm67moIfoioLngrlcbiAgICB9XG4gICAgLypcbiAgICAgICAgaWYgKHRoaXMuZmluZChuZXdFbGVtZW50KSkgeyAvLyDmgKfog73mnIDlpKfnmoTmtojogJflpoLmnpwg5q+P5qyh6YO95qOA57Si5piv5LiN5piv5bey57uP5pyJ6K+l5YC855qE6IqC54K5XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobmV3RWxlbWVudCArIFwiaGFzIGFscmVhZHkgZXhpc3RlZCFcIik7IC8vIOWmguaenOW3sue7j+acieivpeWAvOeahOiKgueCueWwseaKpemUmVxuICAgICAgICB9IGVsc2UgaWYgKHByZXZFbGVtZW50IGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgICAgICAgY3VycmVudCA9IHByZXZFbGVtZW50OyAvLyDnm7TmjqXkvb/nlKjoioLngrlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGN1cnJlbnQgPSB0aGlzLmZpbmQocHJldkVsZW1lbnQpOyAvLyDmib7liLDnm67moIfoioLngrlcbiAgICAgICAgfVxuICAgICAgICAqL1xuICAgIG5ld05vZGUubmV4dCA9IGN1cnJlbnQubmV4dDsgLy8g5paw6IqC54K555qEbmV4dOS4uiDliY3kuIDkuKroioLngrnnmoRuZXh0XG4gICAgY3VycmVudC5uZXh0ID0gbmV3Tm9kZTsgLy8g5YmN5LiA5Liq6IqC54K555qEbmV4dCDkuLrmlrDoioLngrlcbiAgICBpZiAoY3VycmVudCA9PSB0aGlzLmVuZCkge1xuICAgICAgdGhpcy5lbmQgPSBuZXdOb2RlO1xuICAgIH1cbiAgICByZXR1cm4gbmV3Tm9kZTsgLy8g6L+U5Zue5paw55qE6IqC54K5IOaMieasoeW6j+aPkuWFpeW+iOWkmuiKgueCueaXtuebtOaOpeehruiupOesrOS6jOS4quWPguaVsFxuICB9XG5cbiAgZmluZChlbGVtZW50OiBULCBmcm9tTm9kZSA9IHRoaXMuaGVhZCkge1xuICAgIGxldCBjdXJyTm9kZSA9IGZyb21Ob2RlO1xuICAgIHdoaWxlIChjdXJyTm9kZSAmJiBjdXJyTm9kZS5lbGVtZW50ICE9IGVsZW1lbnQpIHtcbiAgICAgIGN1cnJOb2RlID0gY3Vyck5vZGUubmV4dDtcbiAgICB9XG4gICAgcmV0dXJuIGN1cnJOb2RlO1xuICB9XG5cbiAgaW5zZXJ0QXJyKGFycjogVFtdLCBwcmV2RWxlbWVudCA9IHRoaXMuZW5kKSB7XG4gICAgbGV0IGN1cnJlbnQ7XG4gICAgaWYgKHByZXZFbGVtZW50IGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgY3VycmVudCA9IHByZXZFbGVtZW50OyAvLyDnm7TmjqXkvb/nlKjoioLngrlcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudCA9IHRoaXMuZmluZChwcmV2RWxlbWVudCk7IC8vIOaJvuWIsOebruagh+iKgueCuVxuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgY3VycmVudCA9IHRoaXMuaW5zZXJ0KGFycltpXSwgY3VycmVudCk7XG4gICAgfVxuICB9XG5cbiAgZGlzcGxheSgpIHtcbiAgICBsZXQgY3Vyck5vZGUgPSB0aGlzLmhlYWQ7XG4gICAgLy8g5Zug5Li65piv5b6q546v6ZO+6KGoIOaJgOS7pemcgOimgeaWsOeahOe6puadn+adoeS7tiDpgY3ljobliLBoZWFk5bCx5YGc5q2i6YGN5Y6GXG4gICAgZG8ge1xuICAgICAgY29uc29sZS5sb2coY3Vyck5vZGUubmV4dC5lbGVtZW50KTtcbiAgICAgIGN1cnJOb2RlID0gY3Vyck5vZGUubmV4dDtcbiAgICB9IHdoaWxlIChjdXJyTm9kZSAhPT0gdGhpcy5oZWFkKTtcbiAgfVxuXG4gIHJlbW92ZShlbGVtZW50OiBUKSB7XG4gICAgY29uc3QgcHJldk5vZGUgPSB0aGlzLmZpbmRQcmV2aW91cyhlbGVtZW50KTtcbiAgICBpZiAocHJldk5vZGUpIHtcbiAgICAgIHByZXZOb2RlLm5leHQgPSBwcmV2Tm9kZS5uZXh0Lm5leHQ7IC8vIOWwhuWJjeS4gOS4quiKgueCueeahOWAvG5leHQg5oyH5ZCRIOS4i+S4i+S4quWFg+e0oFxuICAgIH1cbiAgfVxuXG4gIGZpbmRQcmV2aW91cyhlbGVtZW50OiBUKSB7XG4gICAgbGV0IGN1cnJOb2RlID0gdGhpcy5oZWFkO1xuICAgIGxldCBsYXN0O1xuICAgIGRvIHtcbiAgICAgIGxhc3QgPSBjdXJyTm9kZTtcbiAgICAgIGN1cnJOb2RlID0gY3Vyck5vZGUubmV4dDtcbiAgICAgIGlmIChjdXJyTm9kZS5lbGVtZW50ID09PSBlbGVtZW50KSByZXR1cm4gbGFzdDtcbiAgICB9IHdoaWxlIChjdXJyTm9kZSAhPT0gdGhpcy5oZWFkKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQge307XG4iXX0=