"use strict";
/**
 * 当数组很长时
 * 每当要数组删除或者增加中的元素,则之后素有的元素下表都要+1,导致的了性能的下降
 * 这个时候需要链表,删除添加只改变前节点的属性
 * es6中对应的数据格式是 set(但是没有头尾节点 虽然本来就没啥用)
 **/
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * node类
 * 链表中的每个节点的基础类型
 * */
class Node {
    constructor(element) {
        this.next = null;
        this.element = element;
    }
}
/**
 * LinkedList 类
 * head 头结点
 * find 查找节点
 * insert 插入节点
 * remove  删除节点
 * display 输出所有节点
 **/
class LList {
    constructor(arr) {
        if (!(Array.isArray(arr) || arr == null))
            throw new Error("param must be an Array or none");
        this.head = this.end = new Node(null);
        if (arr != null) {
            for (let i = 0, length = arr.length; i < length; i++) {
                this.insert(arr[i], this.end);
            }
        }
    }
    /**
     * 插入新的节点
     * @param newElement 插入的内容
     * @param prevElement 插入的位置的前一个节点
     * 返回值是 新建的节点
     * */
    insert(newElement, prevElement = this.end) {
        const newNode = new Node(newElement); // new 新节点
        let current;
        if (prevElement instanceof Node) {
            current = prevElement; // 直接使用节点
        }
        else if (prevElement == null) {
            current = this.head;
        }
        else {
            current = this.find(prevElement); // 找到目标节点
            if (current == null)
                return null; // 没有找到 ts 又立功了
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
    /**
     * 查找节点
     * @element 节点element中的内容
     * @fromNode 从哪个节点后开始查找 默认值是从head开始
     * 返回值 找到的节点  || null
     **/
    find(element, fromNode = this.head) {
        let currNode = fromNode;
        while (currNode) {
            if (currNode.element === element)
                return currNode;
            currNode = currNode.next;
        }
        return null;
    }
    insertArr(arr, prevElement = this.end) {
        let current;
        if (prevElement instanceof Node) {
            current = prevElement; // 直接使用节点
        }
        else if (prevElement == null) {
            current = this.head;
        }
        else {
            current = this.find(prevElement); // 找到目标节点
            if (current == null)
                return null; // 没有找到 ts 又立功了
        }
        for (let i = 0; i < arr.length; i++) {
            current = this.insert(arr[i], current);
        }
    }
    display() {
        let currNode = this.head;
        while (!(currNode.next == null)) {
            console.log(currNode.next.element);
            currNode = currNode.next;
        }
    }
    remove(element) {
        const prevNode = this.findPrevious(element);
        if (!(prevNode.next == null)) {
            prevNode.next = prevNode.next.next; // 将前一个节点的值next 指向 下下个元素
        }
    }
    findPrevious(element) {
        let currNode = this.head;
        while (!(currNode.next == null) && currNode.next.element != element) {
            currNode = currNode.next;
        }
        return currNode;
    }
}
const cities = new LList(["Conway", "Russellville", "Alma"]);
cities.insert("afterHead", null);
cities.insert("afterHead2", "afterHead");
cities.display();
// 测试性能
console.time("createArr");
const testArr = [null];
for (let i = 0; i < 999999; i++) {
    testArr.push(i);
}
console.timeEnd("createArr");
testArr.shift();
console.time("createLList");
const testLList = new LList(testArr);
console.timeEnd("createLList");
// 新建 数组比链表块 4-10倍
// set 数据结构
console.time("createSet");
console.timeEnd("createSet");
// 比原生的set快 差距应该就在检查 去重上面
console.time("arrAdd");
testArr.splice(1, 0, "first");
testArr.splice(2, 0, "second", "third");
console.timeEnd("arrAdd");
console.time("LListAdd");
testLList.insert("first", null);
testLList.insertArr(["second", "third"], "first");
console.timeEnd("LListAdd");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoi6ZO+6KGoLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyLmlbDmja7nu5PmnoQv6ZO+6KGoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7SUFLSTs7QUFFSjs7O0tBR0s7QUFDTCxNQUFNLElBQUk7SUFJUixZQUFZLE9BQVU7UUFGdEIsU0FBSSxHQUFtQixJQUFJLENBQUM7UUFHMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQztDQUNGO0FBRUQ7Ozs7Ozs7SUFPSTtBQUNKLE1BQU0sS0FBSztJQUlULFlBQVksR0FBUTtRQUNsQixJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUM7WUFDdEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7WUFDZixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNwRCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDL0I7U0FDRjtJQUNILENBQUM7SUFFRDs7Ozs7U0FLSztJQUNMLE1BQU0sQ0FDSixVQUFvQixFQUNwQixjQUF5QyxJQUFJLENBQUMsR0FBRztRQUVqRCxNQUFNLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFVBQVU7UUFDaEQsSUFBSSxPQUFPLENBQUM7UUFDWixJQUFJLFdBQVcsWUFBWSxJQUFJLEVBQUU7WUFDL0IsT0FB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TyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzlCLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDeEMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUUxQixPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3pCLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ2hDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDbEQsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICog5b2T5pWw57uE5b6I6ZW/5pe2XG4gKiDmr4/lvZPopoHmlbDnu4TliKDpmaTmiJbogIXlop7liqDkuK3nmoTlhYPntKAs5YiZ5LmL5ZCO57Sg5pyJ55qE5YWD57Sg5LiL6KGo6YO96KaBKzEs5a+86Ie055qE5LqG5oCn6IO955qE5LiL6ZmNXG4gKiDov5nkuKrml7blgJnpnIDopoHpk77ooags5Yig6Zmk5re75Yqg5Y+q5pS55Y+Y5YmN6IqC54K555qE5bGe5oCnXG4gKiBlczbkuK3lr7nlupTnmoTmlbDmja7moLzlvI/mmK8gc2V0KOS9huaYr+ayoeacieWktOWwvuiKgueCuSDomb3nhLbmnKzmnaXlsLHmsqHllaXnlKgpXG4gKiovXG5cbi8qKlxuICogbm9kZeexu1xuICog6ZO+6KGo5Lit55qE5q+P5Liq6IqC54K555qE5Z+656GA57G75Z6LXG4gKiAqL1xuY2xhc3MgTm9kZTxUPiB7XG4gIGVsZW1lbnQ6IFQgfCBudWxsO1xuICBuZXh0OiBOb2RlPFQ+IHwgbnVsbCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudDogVCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cbn1cblxuLyoqXG4gKiBMaW5rZWRMaXN0IOexu1xuICogaGVhZCDlpLTnu5PngrlcbiAqIGZpbmQg5p+l5om+6IqC54K5XG4gKiBpbnNlcnQg5o+S5YWl6IqC54K5XG4gKiByZW1vdmUgIOWIoOmZpOiKgueCuVxuICogZGlzcGxheSDovpPlh7rmiYDmnInoioLngrlcbiAqKi9cbmNsYXNzIExMaXN0PFQ+IHtcbiAgaGVhZDogTm9kZTxUIHwgbnVsbD47XG4gIGVuZDogTm9kZTxUIHwgbnVsbD47XG5cbiAgY29uc3RydWN0b3IoYXJyOiBUW10pIHtcbiAgICBpZiAoIShBcnJheS5pc0FycmF5KGFycikgfHwgYXJyID09IG51bGwpKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwicGFyYW0gbXVzdCBiZSBhbiBBcnJheSBvciBub25lXCIpO1xuICAgIHRoaXMuaGVhZCA9IHRoaXMuZW5kID0gbmV3IE5vZGUobnVsbCk7XG4gICAgaWYgKGFyciAhPSBudWxsKSB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbGVuZ3RoID0gYXJyLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMuaW5zZXJ0KGFycltpXSwgdGhpcy5lbmQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDmj5LlhaXmlrDnmoToioLngrlcbiAgICogQHBhcmFtIG5ld0VsZW1lbnQg5o+S5YWl55qE5YaF5a65XG4gICAqIEBwYXJhbSBwcmV2RWxlbWVudCDmj5LlhaXnmoTkvY3nva7nmoTliY3kuIDkuKroioLngrlcbiAgICog6L+U5Zue5YC85pivIOaWsOW7uueahOiKgueCuVxuICAgKiAqL1xuICBpbnNlcnQoXG4gICAgbmV3RWxlbWVudDogVCB8IG51bGwsXG4gICAgcHJldkVsZW1lbnQ6IE5vZGU8VCB8IG51bGw+IHwgVCB8IG51bGwgPSB0aGlzLmVuZFxuICApIHtcbiAgICBjb25zdCBuZXdOb2RlID0gbmV3IE5vZGUobmV3RWxlbWVudCk7IC8vIG5ldyDmlrDoioLngrlcbiAgICBsZXQgY3VycmVudDtcbiAgICBpZiAocHJldkVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICBjdXJyZW50ID0gcHJldkVsZW1lbnQ7IC8vIOebtOaOpeS9v+eUqOiKgueCuVxuICAgIH0gZWxzZSBpZiAocHJldkVsZW1lbnQgPT0gbnVsbCkge1xuICAgICAgY3VycmVudCA9IHRoaXMuaGVhZDtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudCA9IHRoaXMuZmluZChwcmV2RWxlbWVudCk7IC8vIOaJvuWIsOebruagh+iKgueCuVxuICAgICAgaWYgKGN1cnJlbnQgPT0gbnVsbCkgcmV0dXJuIG51bGw7IC8vIOayoeacieaJvuWIsCB0cyDlj4jnq4vlip/kuoZcbiAgICB9XG4gICAgLypcbiAgICAgICAgaWYgKHRoaXMuZmluZChuZXdFbGVtZW50KSkgeyAvLyDmgKfog73mnIDlpKfnmoTmtojogJflpoLmnpwg5q+P5qyh6YO95qOA57Si5piv5LiN5piv5bey57uP5pyJ6K+l5YC855qE6IqC54K5XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobmV3RWxlbWVudCArIFwiaGFzIGFscmVhZHkgZXhpc3RlZCFcIik7IC8vIOWmguaenOW3sue7j+acieivpeWAvOeahOiKgueCueWwseaKpemUmVxuICAgICAgICB9IGVsc2UgaWYgKHByZXZFbGVtZW50IGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgICAgICAgY3VycmVudCA9IHByZXZFbGVtZW50OyAvLyDnm7TmjqXkvb/nlKjoioLngrlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGN1cnJlbnQgPSB0aGlzLmZpbmQocHJldkVsZW1lbnQpOyAvLyDmib7liLDnm67moIfoioLngrlcbiAgICAgICAgfVxuICAgICAgICAqL1xuICAgIG5ld05vZGUubmV4dCA9IGN1cnJlbnQubmV4dDsgLy8g5paw6IqC54K555qEbmV4dOS4uiDliY3kuIDkuKroioLngrnnmoRuZXh0XG4gICAgY3VycmVudC5uZXh0ID0gbmV3Tm9kZTsgLy8g5YmN5LiA5Liq6IqC54K555qEbmV4dCDkuLrmlrDoioLngrlcbiAgICBpZiAoY3VycmVudCA9PSB0aGlzLmVuZCkge1xuICAgICAgdGhpcy5lbmQgPSBuZXdOb2RlO1xuICAgIH1cbiAgICByZXR1cm4gbmV3Tm9kZTsgLy8g6L+U5Zue5paw55qE6IqC54K5IOaMieasoeW6j+aPkuWFpeW+iOWkmuiKgueCueaXtuebtOaOpeehruiupOesrOS6jOS4quWPguaVsFxuICB9XG5cbiAgLyoqXG4gICAqIOafpeaJvuiKgueCuVxuICAgKiBAZWxlbWVudCDoioLngrllbGVtZW505Lit55qE5YaF5a65XG4gICAqIEBmcm9tTm9kZSDku47lk6rkuKroioLngrnlkI7lvIDlp4vmn6Xmib4g6buY6K6k5YC85piv5LuOaGVhZOW8gOWni1xuICAgKiDov5Tlm57lgLwg5om+5Yiw55qE6IqC54K5ICB8fCBudWxsXG4gICAqKi9cbiAgZmluZChlbGVtZW50OiBULCBmcm9tTm9kZSA9IHRoaXMuaGVhZCkge1xuICAgIGxldCBjdXJyTm9kZSA9IGZyb21Ob2RlO1xuICAgIHdoaWxlIChjdXJyTm9kZSkge1xuICAgICAgaWYgKGN1cnJOb2RlLmVsZW1lbnQgPT09IGVsZW1lbnQpIHJldHVybiBjdXJyTm9kZTtcbiAgICAgIGN1cnJOb2RlID0gY3Vyck5vZGUubmV4dCE7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaW5zZXJ0QXJyKGFycjogVFtdLCBwcmV2RWxlbWVudDogTm9kZTxUIHwgbnVsbD4gfCBUIHwgbnVsbCA9IHRoaXMuZW5kKSB7XG4gICAgbGV0IGN1cnJlbnQ7XG4gICAgaWYgKHByZXZFbGVtZW50IGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgY3VycmVudCA9IHByZXZFbGVtZW50OyAvLyDnm7TmjqXkvb/nlKjoioLngrlcbiAgICB9IGVsc2UgaWYgKHByZXZFbGVtZW50ID09IG51bGwpIHtcbiAgICAgIGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnQgPSB0aGlzLmZpbmQocHJldkVsZW1lbnQpOyAvLyDmib7liLDnm67moIfoioLngrlcbiAgICAgIGlmIChjdXJyZW50ID09IG51bGwpIHJldHVybiBudWxsOyAvLyDmsqHmnInmib7liLAgdHMg5Y+I56uL5Yqf5LqGXG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjdXJyZW50ID0gdGhpcy5pbnNlcnQoYXJyW2ldLCBjdXJyZW50ISk7XG4gICAgfVxuICB9XG5cbiAgZGlzcGxheSgpIHtcbiAgICBsZXQgY3Vyck5vZGUgPSB0aGlzLmhlYWQ7XG4gICAgd2hpbGUgKCEoY3Vyck5vZGUubmV4dCA9PSBudWxsKSkge1xuICAgICAgY29uc29sZS5sb2coY3Vyck5vZGUubmV4dC5lbGVtZW50KTtcbiAgICAgIGN1cnJOb2RlID0gY3Vyck5vZGUubmV4dDtcbiAgICB9XG4gIH1cblxuICByZW1vdmUoZWxlbWVudDogVCkge1xuICAgIGNvbnN0IHByZXZOb2RlID0gdGhpcy5maW5kUHJldmlvdXMoZWxlbWVudCk7XG4gICAgaWYgKCEocHJldk5vZGUubmV4dCA9PSBudWxsKSkge1xuICAgICAgcHJldk5vZGUubmV4dCA9IHByZXZOb2RlLm5leHQubmV4dDsgLy8g5bCG5YmN5LiA5Liq6IqC54K555qE5YC8bmV4dCDmjIflkJEg5LiL5LiL5Liq5YWD57SgXG4gICAgfVxuICB9XG5cbiAgZmluZFByZXZpb3VzKGVsZW1lbnQ6IFQpIHtcbiAgICBsZXQgY3Vyck5vZGUgPSB0aGlzLmhlYWQ7XG4gICAgd2hpbGUgKCEoY3Vyck5vZGUubmV4dCA9PSBudWxsKSAmJiBjdXJyTm9kZS5uZXh0LmVsZW1lbnQgIT0gZWxlbWVudCkge1xuICAgICAgY3Vyck5vZGUgPSBjdXJyTm9kZS5uZXh0O1xuICAgIH1cbiAgICByZXR1cm4gY3Vyck5vZGU7XG4gIH1cbn1cblxuY29uc3QgY2l0aWVzID0gbmV3IExMaXN0KFtcIkNvbndheVwiLCBcIlJ1c3NlbGx2aWxsZVwiLCBcIkFsbWFcIl0pO1xuY2l0aWVzLmluc2VydChcImFmdGVySGVhZFwiLCBudWxsKTtcbmNpdGllcy5pbnNlcnQoXCJhZnRlckhlYWQyXCIsIFwiYWZ0ZXJIZWFkXCIpO1xuXG5jaXRpZXMuZGlzcGxheSgpO1xuXG4vLyDmtYvor5XmgKfog71cbmNvbnNvbGUudGltZShcImNyZWF0ZUFyclwiKTtcbmNvbnN0IHRlc3RBcnI6IGFueVtdID0gW251bGxdO1xuZm9yIChsZXQgaSA9IDA7IGkgPCA5OTk5OTk7IGkrKykge1xuICB0ZXN0QXJyLnB1c2goaSk7XG59XG5jb25zb2xlLnRpbWVFbmQoXCJjcmVhdGVBcnJcIik7XG5cbnRlc3RBcnIuc2hpZnQoKTtcblxuY29uc29sZS50aW1lKFwiY3JlYXRlTExpc3RcIik7XG5jb25zdCB0ZXN0TExpc3QgPSBuZXcgTExpc3QodGVzdEFycik7XG5jb25zb2xlLnRpbWVFbmQoXCJjcmVhdGVMTGlzdFwiKTtcblxuLy8g5paw5bu6IOaVsOe7hOavlOmTvuihqOWdlyA0LTEw5YCNXG5cbi8vIHNldCDmlbDmja7nu5PmnoRcbmNvbnNvbGUudGltZShcImNyZWF0ZVNldFwiKTtcbmNvbnNvbGUudGltZUVuZChcImNyZWF0ZVNldFwiKTtcbi8vIOavlOWOn+eUn+eahHNldOW/qyDlt67ot53lupTor6XlsLHlnKjmo4Dmn6Ug5Y676YeN5LiK6Z2iXG5cbmNvbnNvbGUudGltZShcImFyckFkZFwiKTtcbnRlc3RBcnIuc3BsaWNlKDEsIDAsIFwiZmlyc3RcIik7XG50ZXN0QXJyLnNwbGljZSgyLCAwLCBcInNlY29uZFwiLCBcInRoaXJkXCIpO1xuY29uc29sZS50aW1lRW5kKFwiYXJyQWRkXCIpO1xuXG5jb25zb2xlLnRpbWUoXCJMTGlzdEFkZFwiKTtcbnRlc3RMTGlzdC5pbnNlcnQoXCJmaXJzdFwiLCBudWxsKTtcbnRlc3RMTGlzdC5pbnNlcnRBcnIoW1wic2Vjb25kXCIsIFwidGhpcmRcIl0sIFwiZmlyc3RcIik7XG5jb25zb2xlLnRpbWVFbmQoXCJMTGlzdEFkZFwiKTtcblxuLy8g5Zyo5aS06YOo5o+S5YC8IOmTvuihqOavlOaVsOe7hOW/qzMw5YCN5bem5Y+zXG5cbmV4cG9ydCB7fTtcbiJdfQ==