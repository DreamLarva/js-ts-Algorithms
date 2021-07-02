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
    element;
    next;
    constructor(element) {
        this.element = element;
    }
}
class LList {
    head;
    end;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoi5b6q546v6ZO+6KGoLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyLmlbDmja7nu5PmnoQv5b6q546v6ZO+6KGoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7S0FRSzs7QUFFTCxNQUFNLElBQUk7SUFDUixPQUFPLENBQVc7SUFDbEIsSUFBSSxDQUFXO0lBRWYsWUFBWSxPQUFVO1FBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3pCLENBQUM7Q0FDRjtBQUVELE1BQU0sS0FBSztJQUNULElBQUksQ0FBaUI7SUFDckIsR0FBRyxDQUFpQjtJQUVwQixZQUFZLEdBQVE7UUFDbEIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7U0FDdEM7YUFBTTtZQUNMLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztTQUNuRDtRQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTztRQUNuQyxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7WUFDZixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNwRCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDL0I7U0FDRjtJQUNILENBQUM7SUFFRCxNQUFNLENBQUMsVUFBb0IsRUFBRSxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUc7UUFDakQsTUFBTSxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxVQUFVO1FBQ2hELElBQUksT0FBTyxDQUFDO1FBQ1osSUFBSSxXQUFXLFlBQVksSUFBSSxFQUFFO1lBQy9CLE9BQU8sR0FBRyxXQUFXLENBQUMsQ0FBQyxTQUFTO1NBQ2pDO2FBQU07WUFDTCxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFNBQVM7U0FDNUM7UUFDRDs7Ozs7Ozs7Y0FRTTtRQUNOLE9BQU8sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLHVCQUF1QjtRQUNwRCxPQUFPLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDLGtCQUFrQjtRQUMxQyxJQUFJLE9BQU8sSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDO1NBQ3BCO1FBQ0QsT0FBTyxPQUFPLENBQUMsQ0FBQyw2QkFBNkI7SUFDL0MsQ0FBQztJQUVELElBQUksQ0FBQyxPQUFVLEVBQUUsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJO1FBQ25DLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN4QixPQUFPLFFBQVEsSUFBSSxRQUFRLENBQUMsT0FBTyxJQUFJLE9BQU8sRUFBRTtZQUM5QyxRQUFRLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztTQUMxQjtRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxTQUFTLENBQUMsR0FBUSxFQUFFLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRztRQUN4QyxJQUFJLE9BQU8sQ0FBQztRQUNaLElBQUksV0FBVyxZQUFZLElBQUksRUFBRTtZQUMvQixPQUFPLEdBQUcsV0FBVyxDQUFDLENBQUMsU0FBUztTQUNqQzthQUFNO1lBQ0wsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxTQUFTO1NBQzVDO1FBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbkMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQztJQUVELE9BQU87UUFDTCxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3pCLGtDQUFrQztRQUNsQyxHQUFHO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ25DLFFBQVEsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO1NBQzFCLFFBQVEsUUFBUSxLQUFLLElBQUksQ0FBQyxJQUFJLEVBQUU7SUFDbkMsQ0FBQztJQUVELE1BQU0sQ0FBQyxPQUFVO1FBQ2YsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1QyxJQUFJLFFBQVEsRUFBRTtZQUNaLFFBQVEsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyx3QkFBd0I7U0FDN0Q7SUFDSCxDQUFDO0lBRUQsWUFBWSxDQUFDLE9BQVU7UUFDckIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN6QixJQUFJLElBQUksQ0FBQztRQUNULEdBQUc7WUFDRCxJQUFJLEdBQUcsUUFBUSxDQUFDO1lBQ2hCLFFBQVEsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ3pCLElBQUksUUFBUSxDQUFDLE9BQU8sS0FBSyxPQUFPO2dCQUFFLE9BQU8sSUFBSSxDQUFDO1NBQy9DLFFBQVEsUUFBUSxLQUFLLElBQUksQ0FBQyxJQUFJLEVBQUU7UUFDakMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIOW+queOr+mTvuihqOWSjOWNleWQkemTvuihqOebuOS8vO+8jOiKgueCueexu+Wei+mDveaYr+S4gOagt+eahOOAguWUr+S4gOeahOWMuuWIq+aYr++8jFxuICog5Zyo5Yib5bu65b6q546v6ZO+6KGo5pe277yM6K6p5YW25aS06IqC54K555qEIG5leHQg5bGe5oCn5oyH5ZCR5a6D5pys6Lqr77yM5Y2z77yaXG4gKiBoZWFkLm5leHQgPSBoZWFkXG4gKiDov5nnp43ooYzkuLrkvJrkvKDlr7zoh7Ppk77ooajkuK3nmoTmr4/kuKroioLngrnvvIzkvb/lvpfmr4/kuKroioLngrnnmoQgbmV4dCDlsZ7mgKfpg73mjIflkJHpk77ooajnmoTlpLToioLngrnjgIJcbiAqIOaNouWPpeivneivtO+8jOmTvuihqOeahOWwvuiKgueCueaMh+WQkeWktOiKgueCue+8jOW9ouaIkOS6huS4gOS4quW+queOr+mTvuihqFxuICog5aaC5p6c5L2g5biM5pyb5Y+v5Lul5LuO5ZCO5ZCR5YmN6YGN5Y6G6ZO+6KGo77yM5L2G5piv5Y+I5LiN5oOz5LuY5Ye66aKd5aSW5Luj5Lu35p2l5Yib5bu65LiA5Liq5Y+M5ZCR6ZO+6KGo77yMXG4gKiDpgqPkuYjlsLHpnIDopoHkvb/nlKjlvqrnjq/pk77ooajjgILku47lvqrnjq/pk77ooajnmoTlsL7oioLngrnlkJHlkI7np7vliqjvvIzlsLHnrYnkuo7ku47lkI7lkJHliY3pgY3ljobpk77ooajjgIJcbiAqICovXG5cbmNsYXNzIE5vZGU8VCA9IGFueT4ge1xuICBlbGVtZW50OiBUIHwgbnVsbDtcbiAgbmV4dCE6IE5vZGU8VD47XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudDogVCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cbn1cblxuY2xhc3MgTExpc3Q8VCA9IGFueT4ge1xuICBoZWFkOiBOb2RlPFQgfCBudWxsPjtcbiAgZW5kOiBOb2RlPFQgfCBudWxsPjtcblxuICBjb25zdHJ1Y3RvcihhcnI6IFRbXSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGFycikgfHwgYXJyID09IG51bGwpIHtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwicGFyYW0gbXVzdCBiZSBhbiBBcnJheSBvciBub25lXCIpO1xuICAgIH1cbiAgICB0aGlzLmhlYWQgPSB0aGlzLmVuZCA9IG5ldyBOb2RlKG51bGwpO1xuICAgIHRoaXMuaGVhZC5uZXh0ID0gdGhpcy5oZWFkOyAvLyDlpLTlsL7nm7jov55cbiAgICBpZiAoYXJyICE9IG51bGwpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsZW5ndGggPSBhcnIubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5pbnNlcnQoYXJyW2ldLCB0aGlzLmVuZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW5zZXJ0KG5ld0VsZW1lbnQ6IFQgfCBudWxsLCBwcmV2RWxlbWVudCA9IHRoaXMuZW5kKSB7XG4gICAgY29uc3QgbmV3Tm9kZSA9IG5ldyBOb2RlKG5ld0VsZW1lbnQpOyAvLyBuZXcg5paw6IqC54K5XG4gICAgbGV0IGN1cnJlbnQ7XG4gICAgaWYgKHByZXZFbGVtZW50IGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgY3VycmVudCA9IHByZXZFbGVtZW50OyAvLyDnm7TmjqXkvb/nlKjoioLngrlcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudCA9IHRoaXMuZmluZChwcmV2RWxlbWVudCk7IC8vIOaJvuWIsOebruagh+iKgueCuVxuICAgIH1cbiAgICAvKlxuICAgICAgICBpZiAodGhpcy5maW5kKG5ld0VsZW1lbnQpKSB7IC8vIOaAp+iDveacgOWkp+eahOa2iOiAl+WmguaenCDmr4/mrKHpg73mo4DntKLmmK/kuI3mmK/lt7Lnu4/mnInor6XlgLznmoToioLngrlcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihuZXdFbGVtZW50ICsgXCJoYXMgYWxyZWFkeSBleGlzdGVkIVwiKTsgLy8g5aaC5p6c5bey57uP5pyJ6K+l5YC855qE6IqC54K55bCx5oql6ZSZXG4gICAgICAgIH0gZWxzZSBpZiAocHJldkVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICAgICAgICBjdXJyZW50ID0gcHJldkVsZW1lbnQ7IC8vIOebtOaOpeS9v+eUqOiKgueCuVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3VycmVudCA9IHRoaXMuZmluZChwcmV2RWxlbWVudCk7IC8vIOaJvuWIsOebruagh+iKgueCuVxuICAgICAgICB9XG4gICAgICAgICovXG4gICAgbmV3Tm9kZS5uZXh0ID0gY3VycmVudC5uZXh0OyAvLyDmlrDoioLngrnnmoRuZXh05Li6IOWJjeS4gOS4quiKgueCueeahG5leHRcbiAgICBjdXJyZW50Lm5leHQgPSBuZXdOb2RlOyAvLyDliY3kuIDkuKroioLngrnnmoRuZXh0IOS4uuaWsOiKgueCuVxuICAgIGlmIChjdXJyZW50ID09IHRoaXMuZW5kKSB7XG4gICAgICB0aGlzLmVuZCA9IG5ld05vZGU7XG4gICAgfVxuICAgIHJldHVybiBuZXdOb2RlOyAvLyDov5Tlm57mlrDnmoToioLngrkg5oyJ5qyh5bqP5o+S5YWl5b6I5aSa6IqC54K55pe255u05o6l56Gu6K6k56ys5LqM5Liq5Y+C5pWwXG4gIH1cblxuICBmaW5kKGVsZW1lbnQ6IFQsIGZyb21Ob2RlID0gdGhpcy5oZWFkKSB7XG4gICAgbGV0IGN1cnJOb2RlID0gZnJvbU5vZGU7XG4gICAgd2hpbGUgKGN1cnJOb2RlICYmIGN1cnJOb2RlLmVsZW1lbnQgIT0gZWxlbWVudCkge1xuICAgICAgY3Vyck5vZGUgPSBjdXJyTm9kZS5uZXh0O1xuICAgIH1cbiAgICByZXR1cm4gY3Vyck5vZGU7XG4gIH1cblxuICBpbnNlcnRBcnIoYXJyOiBUW10sIHByZXZFbGVtZW50ID0gdGhpcy5lbmQpIHtcbiAgICBsZXQgY3VycmVudDtcbiAgICBpZiAocHJldkVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICBjdXJyZW50ID0gcHJldkVsZW1lbnQ7IC8vIOebtOaOpeS9v+eUqOiKgueCuVxuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50ID0gdGhpcy5maW5kKHByZXZFbGVtZW50KTsgLy8g5om+5Yiw55uu5qCH6IqC54K5XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjdXJyZW50ID0gdGhpcy5pbnNlcnQoYXJyW2ldLCBjdXJyZW50KTtcbiAgICB9XG4gIH1cblxuICBkaXNwbGF5KCkge1xuICAgIGxldCBjdXJyTm9kZSA9IHRoaXMuaGVhZDtcbiAgICAvLyDlm6DkuLrmmK/lvqrnjq/pk77ooagg5omA5Lul6ZyA6KaB5paw55qE57qm5p2f5p2h5Lu2IOmBjeWOhuWIsGhlYWTlsLHlgZzmraLpgY3ljoZcbiAgICBkbyB7XG4gICAgICBjb25zb2xlLmxvZyhjdXJyTm9kZS5uZXh0LmVsZW1lbnQpO1xuICAgICAgY3Vyck5vZGUgPSBjdXJyTm9kZS5uZXh0O1xuICAgIH0gd2hpbGUgKGN1cnJOb2RlICE9PSB0aGlzLmhlYWQpO1xuICB9XG5cbiAgcmVtb3ZlKGVsZW1lbnQ6IFQpIHtcbiAgICBjb25zdCBwcmV2Tm9kZSA9IHRoaXMuZmluZFByZXZpb3VzKGVsZW1lbnQpO1xuICAgIGlmIChwcmV2Tm9kZSkge1xuICAgICAgcHJldk5vZGUubmV4dCA9IHByZXZOb2RlLm5leHQubmV4dDsgLy8g5bCG5YmN5LiA5Liq6IqC54K555qE5YC8bmV4dCDmjIflkJEg5LiL5LiL5Liq5YWD57SgXG4gICAgfVxuICB9XG5cbiAgZmluZFByZXZpb3VzKGVsZW1lbnQ6IFQpIHtcbiAgICBsZXQgY3Vyck5vZGUgPSB0aGlzLmhlYWQ7XG4gICAgbGV0IGxhc3Q7XG4gICAgZG8ge1xuICAgICAgbGFzdCA9IGN1cnJOb2RlO1xuICAgICAgY3Vyck5vZGUgPSBjdXJyTm9kZS5uZXh0O1xuICAgICAgaWYgKGN1cnJOb2RlLmVsZW1lbnQgPT09IGVsZW1lbnQpIHJldHVybiBsYXN0O1xuICAgIH0gd2hpbGUgKGN1cnJOb2RlICE9PSB0aGlzLmhlYWQpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCB7fTtcbiJdfQ==