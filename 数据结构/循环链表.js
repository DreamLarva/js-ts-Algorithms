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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoi5b6q546v6ZO+6KGoLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyLmlbDmja7nu5PmnoQv5b6q546v6ZO+6KGoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7S0FRSzs7QUFFTCxNQUFNLElBQUk7SUFJTixZQUFZLE9BQVU7UUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDM0IsQ0FBQztDQUVKO0FBRUQsTUFBTSxLQUFLO0lBSVAsWUFBWSxHQUFRO1FBQ2hCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO1NBQ3RDO2FBQU07WUFDSCxNQUFNLElBQUksS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7U0FDckQ7UUFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU87UUFDbkMsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO1lBQ2IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2pDO1NBQ0o7SUFDTCxDQUFDO0lBRUQsTUFBTSxDQUFDLFVBQWEsRUFBRSxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUc7UUFDeEMsTUFBTSxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxVQUFVO1FBQ2hELElBQUksT0FBTyxDQUFDO1FBQ1osSUFBSSxXQUFXLFlBQVksSUFBSSxFQUFFO1lBQzdCLE9BQU8sR0FBRyxXQUFXLENBQUMsQ0FBQyxTQUFTO1NBQ25DO2FBQU07WUFDSCxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFNBQVM7U0FDOUM7UUFDRDs7Ozs7Ozs7VUFRRTtRQUNGLE9BQU8sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLHVCQUF1QjtRQUNwRCxPQUFPLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDLGtCQUFrQjtRQUMxQyxJQUFJLE9BQU8sSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDO1NBQ3RCO1FBQ0QsT0FBTyxPQUFPLENBQUMsQ0FBQyw2QkFBNkI7SUFDakQsQ0FBQztJQUFBLENBQUM7SUFFRixJQUFJLENBQUMsT0FBVSxFQUFFLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSTtRQUNqQyxJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDeEIsT0FBTyxRQUFRLElBQUksUUFBUSxDQUFDLE9BQU8sSUFBSSxPQUFPLEVBQUU7WUFDNUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7U0FDNUI7UUFDRCxPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDO0lBQUEsQ0FBQztJQUVGLFNBQVMsQ0FBQyxHQUFRLEVBQUUsV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHO1FBQ3RDLElBQUksT0FBTyxDQUFDO1FBQ1osSUFBSSxXQUFXLFlBQVksSUFBSSxFQUFFO1lBQzdCLE9BQU8sR0FBRyxXQUFXLENBQUMsQ0FBQyxTQUFTO1NBQ25DO2FBQU07WUFDSCxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFNBQVM7U0FDOUM7UUFDRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNqQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDMUM7SUFDTCxDQUFDO0lBQUEsQ0FBQztJQUVGLE9BQU87UUFDSCxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3pCLGtDQUFrQztRQUNsQyxHQUFHO1lBQ0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ25DLFFBQVEsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO1NBQzVCLFFBQVEsUUFBUSxLQUFLLElBQUksQ0FBQyxJQUFJLEVBQUU7SUFDckMsQ0FBQztJQUFBLENBQUM7SUFFRixNQUFNLENBQUMsT0FBVTtRQUNiLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUMsSUFBSSxRQUFRLEVBQUU7WUFDVixRQUFRLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsd0JBQXdCO1NBQy9EO0lBQ0wsQ0FBQztJQUFBLENBQUM7SUFFRixZQUFZLENBQUMsT0FBVTtRQUNuQixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3pCLElBQUksSUFBSSxDQUFDO1FBQ1QsR0FBRztZQUNDLElBQUksR0FBRyxRQUFRLENBQUM7WUFDaEIsUUFBUSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDekIsSUFBRyxRQUFRLENBQUMsT0FBTyxLQUFLLE9BQU87Z0JBQUMsT0FBTyxJQUFJLENBQUM7U0FDL0MsUUFBUSxRQUFRLEtBQUssSUFBSSxDQUFDLElBQUksRUFBRztRQUNsQyxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQUEsQ0FBQztDQUdMIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOW+queOr+mTvuihqOWSjOWNleWQkemTvuihqOebuOS8vO+8jOiKgueCueexu+Wei+mDveaYr+S4gOagt+eahOOAguWUr+S4gOeahOWMuuWIq+aYr++8jFxyXG4gKiDlnKjliJvlu7rlvqrnjq/pk77ooajml7bvvIzorqnlhbblpLToioLngrnnmoQgbmV4dCDlsZ7mgKfmjIflkJHlroPmnKzouqvvvIzljbPvvJpcclxuICogaGVhZC5uZXh0ID0gaGVhZFxyXG4gKiDov5nnp43ooYzkuLrkvJrkvKDlr7zoh7Ppk77ooajkuK3nmoTmr4/kuKroioLngrnvvIzkvb/lvpfmr4/kuKroioLngrnnmoQgbmV4dCDlsZ7mgKfpg73mjIflkJHpk77ooajnmoTlpLToioLngrnjgIJcclxuICog5o2i5Y+l6K+d6K+077yM6ZO+6KGo55qE5bC+6IqC54K55oyH5ZCR5aS06IqC54K577yM5b2i5oiQ5LqG5LiA5Liq5b6q546v6ZO+6KGoXHJcbiAqIOWmguaenOS9oOW4jOacm+WPr+S7peS7juWQjuWQkeWJjemBjeWOhumTvuihqO+8jOS9huaYr+WPiOS4jeaDs+S7mOWHuumineWkluS7o+S7t+adpeWIm+W7uuS4gOS4quWPjOWQkemTvuihqO+8jFxyXG4gKiDpgqPkuYjlsLHpnIDopoHkvb/nlKjlvqrnjq/pk77ooajjgILku47lvqrnjq/pk77ooajnmoTlsL7oioLngrnlkJHlkI7np7vliqjvvIzlsLHnrYnkuo7ku47lkI7lkJHliY3pgY3ljobpk77ooajjgIJcclxuICogKi9cclxuXHJcbmNsYXNzIE5vZGU8VCA9IGFueT4ge1xyXG4gICAgZWxlbWVudDogVCB8IG51bGw7XHJcbiAgICBuZXh0ITogTm9kZTxUPjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBUKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNsYXNzIExMaXN0PFQgPSBhbnk+IHtcclxuICAgIGhlYWQ6IE5vZGU8VD47XHJcbiAgICBlbmQ6IE5vZGU8VD47XHJcblxyXG4gICAgY29uc3RydWN0b3IoYXJyOiBUW10pIHtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpIHx8IGFyciA9PSBudWxsKSB7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwicGFyYW0gbXVzdCBiZSBhbiBBcnJheSBvciBub25lXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhlYWQgPSB0aGlzLmVuZCA9IG5ldyBOb2RlKG51bGwpO1xyXG4gICAgICAgIHRoaXMuaGVhZC5uZXh0ID0gdGhpcy5oZWFkOyAvLyDlpLTlsL7nm7jov55cclxuICAgICAgICBpZiAoYXJyICE9IG51bGwpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbmd0aCA9IGFyci5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnNlcnQoYXJyW2ldLCB0aGlzLmVuZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5zZXJ0KG5ld0VsZW1lbnQ6IFQsIHByZXZFbGVtZW50ID0gdGhpcy5lbmQpIHtcclxuICAgICAgICBjb25zdCBuZXdOb2RlID0gbmV3IE5vZGUobmV3RWxlbWVudCk7IC8vIG5ldyDmlrDoioLngrlcclxuICAgICAgICBsZXQgY3VycmVudDtcclxuICAgICAgICBpZiAocHJldkVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnQgPSBwcmV2RWxlbWVudDsgLy8g55u05o6l5L2/55So6IqC54K5XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY3VycmVudCA9IHRoaXMuZmluZChwcmV2RWxlbWVudCk7IC8vIOaJvuWIsOebruagh+iKgueCuVxyXG4gICAgICAgIH1cclxuICAgICAgICAvKlxyXG4gICAgICAgIGlmICh0aGlzLmZpbmQobmV3RWxlbWVudCkpIHsgLy8g5oCn6IO95pyA5aSn55qE5raI6ICX5aaC5p6cIOavj+asoemDveajgOe0ouaYr+S4jeaYr+W3sue7j+acieivpeWAvOeahOiKgueCuVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobmV3RWxlbWVudCArIFwiaGFzIGFscmVhZHkgZXhpc3RlZCFcIik7IC8vIOWmguaenOW3sue7j+acieivpeWAvOeahOiKgueCueWwseaKpemUmVxyXG4gICAgICAgIH0gZWxzZSBpZiAocHJldkVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnQgPSBwcmV2RWxlbWVudDsgLy8g55u05o6l5L2/55So6IqC54K5XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY3VycmVudCA9IHRoaXMuZmluZChwcmV2RWxlbWVudCk7IC8vIOaJvuWIsOebruagh+iKgueCuVxyXG4gICAgICAgIH1cclxuICAgICAgICAqL1xyXG4gICAgICAgIG5ld05vZGUubmV4dCA9IGN1cnJlbnQubmV4dDsgLy8g5paw6IqC54K555qEbmV4dOS4uiDliY3kuIDkuKroioLngrnnmoRuZXh0XHJcbiAgICAgICAgY3VycmVudC5uZXh0ID0gbmV3Tm9kZTsgLy8g5YmN5LiA5Liq6IqC54K555qEbmV4dCDkuLrmlrDoioLngrlcclxuICAgICAgICBpZiAoY3VycmVudCA9PSB0aGlzLmVuZCkge1xyXG4gICAgICAgICAgICB0aGlzLmVuZCA9IG5ld05vZGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXdOb2RlOyAvLyDov5Tlm57mlrDnmoToioLngrkg5oyJ5qyh5bqP5o+S5YWl5b6I5aSa6IqC54K55pe255u05o6l56Gu6K6k56ys5LqM5Liq5Y+C5pWwXHJcbiAgICB9O1xyXG5cclxuICAgIGZpbmQoZWxlbWVudDogVCwgZnJvbU5vZGUgPSB0aGlzLmhlYWQpIHtcclxuICAgICAgICBsZXQgY3Vyck5vZGUgPSBmcm9tTm9kZTtcclxuICAgICAgICB3aGlsZSAoY3Vyck5vZGUgJiYgY3Vyck5vZGUuZWxlbWVudCAhPSBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGN1cnJOb2RlID0gY3Vyck5vZGUubmV4dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGN1cnJOb2RlO1xyXG4gICAgfTtcclxuXHJcbiAgICBpbnNlcnRBcnIoYXJyOiBUW10sIHByZXZFbGVtZW50ID0gdGhpcy5lbmQpIHtcclxuICAgICAgICBsZXQgY3VycmVudDtcclxuICAgICAgICBpZiAocHJldkVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnQgPSBwcmV2RWxlbWVudDsgLy8g55u05o6l5L2/55So6IqC54K5XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY3VycmVudCA9IHRoaXMuZmluZChwcmV2RWxlbWVudCk7IC8vIOaJvuWIsOebruagh+iKgueCuVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjdXJyZW50ID0gdGhpcy5pbnNlcnQoYXJyW2ldLCBjdXJyZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGRpc3BsYXkoKSB7XHJcbiAgICAgICAgbGV0IGN1cnJOb2RlID0gdGhpcy5oZWFkO1xyXG4gICAgICAgIC8vIOWboOS4uuaYr+W+queOr+mTvuihqCDmiYDku6XpnIDopoHmlrDnmoTnuqbmnZ/mnaHku7Yg6YGN5Y6G5YiwaGVhZOWwseWBnOatoumBjeWOhlxyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coY3Vyck5vZGUubmV4dC5lbGVtZW50KTtcclxuICAgICAgICAgICAgY3Vyck5vZGUgPSBjdXJyTm9kZS5uZXh0O1xyXG4gICAgICAgIH0gd2hpbGUgKGN1cnJOb2RlICE9PSB0aGlzLmhlYWQpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZW1vdmUoZWxlbWVudDogVCkge1xyXG4gICAgICAgIGNvbnN0IHByZXZOb2RlID0gdGhpcy5maW5kUHJldmlvdXMoZWxlbWVudCk7XHJcbiAgICAgICAgaWYgKHByZXZOb2RlKSB7XHJcbiAgICAgICAgICAgIHByZXZOb2RlLm5leHQgPSBwcmV2Tm9kZS5uZXh0Lm5leHQ7IC8vIOWwhuWJjeS4gOS4quiKgueCueeahOWAvG5leHQg5oyH5ZCRIOS4i+S4i+S4quWFg+e0oFxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZmluZFByZXZpb3VzKGVsZW1lbnQ6IFQpIHtcclxuICAgICAgICBsZXQgY3Vyck5vZGUgPSB0aGlzLmhlYWQ7XHJcbiAgICAgICAgbGV0IGxhc3Q7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBsYXN0ID0gY3Vyck5vZGU7XHJcbiAgICAgICAgICAgIGN1cnJOb2RlID0gY3Vyck5vZGUubmV4dDtcclxuICAgICAgICAgICAgaWYoY3Vyck5vZGUuZWxlbWVudCA9PT0gZWxlbWVudClyZXR1cm4gbGFzdDtcclxuICAgICAgICB9IHdoaWxlIChjdXJyTm9kZSAhPT0gdGhpcy5oZWFkICk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9O1xyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7fTtcclxuIl19