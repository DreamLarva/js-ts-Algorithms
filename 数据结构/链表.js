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
    element;
    next = null;
    constructor(element) {
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
    head;
    end;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoi6ZO+6KGoLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyLmlbDmja7nu5PmnoQv6ZO+6KGoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7SUFLSTs7QUFFSjs7O0tBR0s7QUFDTCxNQUFNLElBQUk7SUFDUixPQUFPLENBQVc7SUFDbEIsSUFBSSxHQUFtQixJQUFJLENBQUM7SUFFNUIsWUFBWSxPQUFVO1FBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3pCLENBQUM7Q0FDRjtBQUVEOzs7Ozs7O0lBT0k7QUFDSixNQUFNLEtBQUs7SUFDVCxJQUFJLENBQWlCO0lBQ3JCLEdBQUcsQ0FBaUI7SUFFcEIsWUFBWSxHQUFRO1FBQ2xCLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQztZQUN0QyxNQUFNLElBQUksS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLElBQUksR0FBRyxJQUFJLElBQUksRUFBRTtZQUNmLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3BELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUMvQjtTQUNGO0lBQ0gsQ0FBQztJQUVEOzs7OztTQUtLO0lBQ0wsTUFBTSxDQUNKLFVBQW9CLEVBQ3BCLGNBQXlDLElBQUksQ0FBQyxHQUFHO1FBRWpELE1BQU0sT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsVUFBVTtRQUNoRCxJQUFJ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QUFFekIsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN2QixPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDOUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN4QyxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRTFCLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDekIsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDaEMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNsRCxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiDlvZPmlbDnu4Tlvojplb/ml7ZcbiAqIOavj+W9k+imgeaVsOe7hOWIoOmZpOaIluiAheWinuWKoOS4reeahOWFg+e0oCzliJnkuYvlkI7ntKDmnInnmoTlhYPntKDkuIvooajpg73opoErMSzlr7zoh7TnmoTkuobmgKfog73nmoTkuIvpmY1cbiAqIOi/meS4quaXtuWAmemcgOimgemTvuihqCzliKDpmaTmt7vliqDlj6rmlLnlj5jliY3oioLngrnnmoTlsZ7mgKdcbiAqIGVzNuS4reWvueW6lOeahOaVsOaNruagvOW8j+aYryBzZXQo5L2G5piv5rKh5pyJ5aS05bC+6IqC54K5IOiZveeEtuacrOadpeWwseayoeWVpeeUqClcbiAqKi9cblxuLyoqXG4gKiBub2Rl57G7XG4gKiDpk77ooajkuK3nmoTmr4/kuKroioLngrnnmoTln7rnoYDnsbvlnotcbiAqICovXG5jbGFzcyBOb2RlPFQ+IHtcbiAgZWxlbWVudDogVCB8IG51bGw7XG4gIG5leHQ6IE5vZGU8VD4gfCBudWxsID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBUKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgfVxufVxuXG4vKipcbiAqIExpbmtlZExpc3Qg57G7XG4gKiBoZWFkIOWktOe7k+eCuVxuICogZmluZCDmn6Xmib7oioLngrlcbiAqIGluc2VydCDmj5LlhaXoioLngrlcbiAqIHJlbW92ZSAg5Yig6Zmk6IqC54K5XG4gKiBkaXNwbGF5IOi+k+WHuuaJgOacieiKgueCuVxuICoqL1xuY2xhc3MgTExpc3Q8VD4ge1xuICBoZWFkOiBOb2RlPFQgfCBudWxsPjtcbiAgZW5kOiBOb2RlPFQgfCBudWxsPjtcblxuICBjb25zdHJ1Y3RvcihhcnI6IFRbXSkge1xuICAgIGlmICghKEFycmF5LmlzQXJyYXkoYXJyKSB8fCBhcnIgPT0gbnVsbCkpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJwYXJhbSBtdXN0IGJlIGFuIEFycmF5IG9yIG5vbmVcIik7XG4gICAgdGhpcy5oZWFkID0gdGhpcy5lbmQgPSBuZXcgTm9kZShudWxsKTtcbiAgICBpZiAoYXJyICE9IG51bGwpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsZW5ndGggPSBhcnIubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5pbnNlcnQoYXJyW2ldLCB0aGlzLmVuZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOaPkuWFpeaWsOeahOiKgueCuVxuICAgKiBAcGFyYW0gbmV3RWxlbWVudCDmj5LlhaXnmoTlhoXlrrlcbiAgICogQHBhcmFtIHByZXZFbGVtZW50IOaPkuWFpeeahOS9jee9rueahOWJjeS4gOS4quiKgueCuVxuICAgKiDov5Tlm57lgLzmmK8g5paw5bu655qE6IqC54K5XG4gICAqICovXG4gIGluc2VydChcbiAgICBuZXdFbGVtZW50OiBUIHwgbnVsbCxcbiAgICBwcmV2RWxlbWVudDogTm9kZTxUIHwgbnVsbD4gfCBUIHwgbnVsbCA9IHRoaXMuZW5kXG4gICkge1xuICAgIGNvbnN0IG5ld05vZGUgPSBuZXcgTm9kZShuZXdFbGVtZW50KTsgLy8gbmV3IOaWsOiKgueCuVxuICAgIGxldCBjdXJyZW50O1xuICAgIGlmIChwcmV2RWxlbWVudCBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgIGN1cnJlbnQgPSBwcmV2RWxlbWVudDsgLy8g55u05o6l5L2/55So6IqC54K5XG4gICAgfSBlbHNlIGlmIChwcmV2RWxlbWVudCA9PSBudWxsKSB7XG4gICAgICBjdXJyZW50ID0gdGhpcy5oZWFkO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50ID0gdGhpcy5maW5kKHByZXZFbGVtZW50KTsgLy8g5om+5Yiw55uu5qCH6IqC54K5XG4gICAgICBpZiAoY3VycmVudCA9PSBudWxsKSByZXR1cm4gbnVsbDsgLy8g5rKh5pyJ5om+5YiwIHRzIOWPiOeri+WKn+S6hlxuICAgIH1cbiAgICAvKlxuICAgICAgICBpZiAodGhpcy5maW5kKG5ld0VsZW1lbnQpKSB7IC8vIOaAp+iDveacgOWkp+eahOa2iOiAl+WmguaenCDmr4/mrKHpg73mo4DntKLmmK/kuI3mmK/lt7Lnu4/mnInor6XlgLznmoToioLngrlcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihuZXdFbGVtZW50ICsgXCJoYXMgYWxyZWFkeSBleGlzdGVkIVwiKTsgLy8g5aaC5p6c5bey57uP5pyJ6K+l5YC855qE6IqC54K55bCx5oql6ZSZXG4gICAgICAgIH0gZWxzZSBpZiAocHJldkVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICAgICAgICBjdXJyZW50ID0gcHJldkVsZW1lbnQ7IC8vIOebtOaOpeS9v+eUqOiKgueCuVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3VycmVudCA9IHRoaXMuZmluZChwcmV2RWxlbWVudCk7IC8vIOaJvuWIsOebruagh+iKgueCuVxuICAgICAgICB9XG4gICAgICAgICovXG4gICAgbmV3Tm9kZS5uZXh0ID0gY3VycmVudC5uZXh0OyAvLyDmlrDoioLngrnnmoRuZXh05Li6IOWJjeS4gOS4quiKgueCueeahG5leHRcbiAgICBjdXJyZW50Lm5leHQgPSBuZXdOb2RlOyAvLyDliY3kuIDkuKroioLngrnnmoRuZXh0IOS4uuaWsOiKgueCuVxuICAgIGlmIChjdXJyZW50ID09IHRoaXMuZW5kKSB7XG4gICAgICB0aGlzLmVuZCA9IG5ld05vZGU7XG4gICAgfVxuICAgIHJldHVybiBuZXdOb2RlOyAvLyDov5Tlm57mlrDnmoToioLngrkg5oyJ5qyh5bqP5o+S5YWl5b6I5aSa6IqC54K55pe255u05o6l56Gu6K6k56ys5LqM5Liq5Y+C5pWwXG4gIH1cblxuICAvKipcbiAgICog5p+l5om+6IqC54K5XG4gICAqIEBlbGVtZW50IOiKgueCuWVsZW1lbnTkuK3nmoTlhoXlrrlcbiAgICogQGZyb21Ob2RlIOS7juWTquS4quiKgueCueWQjuW8gOWni+afpeaJviDpu5jorqTlgLzmmK/ku45oZWFk5byA5aeLXG4gICAqIOi/lOWbnuWAvCDmib7liLDnmoToioLngrkgIHx8IG51bGxcbiAgICoqL1xuICBmaW5kKGVsZW1lbnQ6IFQsIGZyb21Ob2RlID0gdGhpcy5oZWFkKSB7XG4gICAgbGV0IGN1cnJOb2RlID0gZnJvbU5vZGU7XG4gICAgd2hpbGUgKGN1cnJOb2RlKSB7XG4gICAgICBpZiAoY3Vyck5vZGUuZWxlbWVudCA9PT0gZWxlbWVudCkgcmV0dXJuIGN1cnJOb2RlO1xuICAgICAgY3Vyck5vZGUgPSBjdXJyTm9kZS5uZXh0ITtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpbnNlcnRBcnIoYXJyOiBUW10sIHByZXZFbGVtZW50OiBOb2RlPFQgfCBudWxsPiB8IFQgfCBudWxsID0gdGhpcy5lbmQpIHtcbiAgICBsZXQgY3VycmVudDtcbiAgICBpZiAocHJldkVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICBjdXJyZW50ID0gcHJldkVsZW1lbnQ7IC8vIOebtOaOpeS9v+eUqOiKgueCuVxuICAgIH0gZWxzZSBpZiAocHJldkVsZW1lbnQgPT0gbnVsbCkge1xuICAgICAgY3VycmVudCA9IHRoaXMuaGVhZDtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudCA9IHRoaXMuZmluZChwcmV2RWxlbWVudCk7IC8vIOaJvuWIsOebruagh+iKgueCuVxuICAgICAgaWYgKGN1cnJlbnQgPT0gbnVsbCkgcmV0dXJuIG51bGw7IC8vIOayoeacieaJvuWIsCB0cyDlj4jnq4vlip/kuoZcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGN1cnJlbnQgPSB0aGlzLmluc2VydChhcnJbaV0sIGN1cnJlbnQhKTtcbiAgICB9XG4gIH1cblxuICBkaXNwbGF5KCkge1xuICAgIGxldCBjdXJyTm9kZSA9IHRoaXMuaGVhZDtcbiAgICB3aGlsZSAoIShjdXJyTm9kZS5uZXh0ID09IG51bGwpKSB7XG4gICAgICBjb25zb2xlLmxvZyhjdXJyTm9kZS5uZXh0LmVsZW1lbnQpO1xuICAgICAgY3Vyck5vZGUgPSBjdXJyTm9kZS5uZXh0O1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZShlbGVtZW50OiBUKSB7XG4gICAgY29uc3QgcHJldk5vZGUgPSB0aGlzLmZpbmRQcmV2aW91cyhlbGVtZW50KTtcbiAgICBpZiAoIShwcmV2Tm9kZS5uZXh0ID09IG51bGwpKSB7XG4gICAgICBwcmV2Tm9kZS5uZXh0ID0gcHJldk5vZGUubmV4dC5uZXh0OyAvLyDlsIbliY3kuIDkuKroioLngrnnmoTlgLxuZXh0IOaMh+WQkSDkuIvkuIvkuKrlhYPntKBcbiAgICB9XG4gIH1cblxuICBmaW5kUHJldmlvdXMoZWxlbWVudDogVCkge1xuICAgIGxldCBjdXJyTm9kZSA9IHRoaXMuaGVhZDtcbiAgICB3aGlsZSAoIShjdXJyTm9kZS5uZXh0ID09IG51bGwpICYmIGN1cnJOb2RlLm5leHQuZWxlbWVudCAhPSBlbGVtZW50KSB7XG4gICAgICBjdXJyTm9kZSA9IGN1cnJOb2RlLm5leHQ7XG4gICAgfVxuICAgIHJldHVybiBjdXJyTm9kZTtcbiAgfVxufVxuXG5jb25zdCBjaXRpZXMgPSBuZXcgTExpc3QoW1wiQ29ud2F5XCIsIFwiUnVzc2VsbHZpbGxlXCIsIFwiQWxtYVwiXSk7XG5jaXRpZXMuaW5zZXJ0KFwiYWZ0ZXJIZWFkXCIsIG51bGwpO1xuY2l0aWVzLmluc2VydChcImFmdGVySGVhZDJcIiwgXCJhZnRlckhlYWRcIik7XG5cbmNpdGllcy5kaXNwbGF5KCk7XG5cbi8vIOa1i+ivleaAp+iDvVxuY29uc29sZS50aW1lKFwiY3JlYXRlQXJyXCIpO1xuY29uc3QgdGVzdEFycjogYW55W10gPSBbbnVsbF07XG5mb3IgKGxldCBpID0gMDsgaSA8IDk5OTk5OTsgaSsrKSB7XG4gIHRlc3RBcnIucHVzaChpKTtcbn1cbmNvbnNvbGUudGltZUVuZChcImNyZWF0ZUFyclwiKTtcblxudGVzdEFyci5zaGlmdCgpO1xuXG5jb25zb2xlLnRpbWUoXCJjcmVhdGVMTGlzdFwiKTtcbmNvbnN0IHRlc3RMTGlzdCA9IG5ldyBMTGlzdCh0ZXN0QXJyKTtcbmNvbnNvbGUudGltZUVuZChcImNyZWF0ZUxMaXN0XCIpO1xuXG4vLyDmlrDlu7og5pWw57uE5q+U6ZO+6KGo5Z2XIDQtMTDlgI1cblxuLy8gc2V0IOaVsOaNrue7k+aehFxuY29uc29sZS50aW1lKFwiY3JlYXRlU2V0XCIpO1xuY29uc29sZS50aW1lRW5kKFwiY3JlYXRlU2V0XCIpO1xuLy8g5q+U5Y6f55Sf55qEc2V05b+rIOW3rui3neW6lOivpeWwseWcqOajgOafpSDljrvph43kuIrpnaJcblxuY29uc29sZS50aW1lKFwiYXJyQWRkXCIpO1xudGVzdEFyci5zcGxpY2UoMSwgMCwgXCJmaXJzdFwiKTtcbnRlc3RBcnIuc3BsaWNlKDIsIDAsIFwic2Vjb25kXCIsIFwidGhpcmRcIik7XG5jb25zb2xlLnRpbWVFbmQoXCJhcnJBZGRcIik7XG5cbmNvbnNvbGUudGltZShcIkxMaXN0QWRkXCIpO1xudGVzdExMaXN0Lmluc2VydChcImZpcnN0XCIsIG51bGwpO1xudGVzdExMaXN0Lmluc2VydEFycihbXCJzZWNvbmRcIiwgXCJ0aGlyZFwiXSwgXCJmaXJzdFwiKTtcbmNvbnNvbGUudGltZUVuZChcIkxMaXN0QWRkXCIpO1xuXG4vLyDlnKjlpLTpg6jmj5LlgLwg6ZO+6KGo5q+U5pWw57uE5b+rMzDlgI3lt6blj7NcblxuZXhwb3J0IHt9O1xuIl19