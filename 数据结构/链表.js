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
    ;
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
    ;
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
    ;
    display() {
        let currNode = this.head;
        while (!(currNode.next == null)) {
            console.log(currNode.next.element);
            currNode = currNode.next;
        }
    }
    ;
    remove(element) {
        const prevNode = this.findPrevious(element);
        if (!(prevNode.next == null)) {
            prevNode.next = prevNode.next.next; // 将前一个节点的值next 指向 下下个元素
        }
    }
    ;
    findPrevious(element) {
        let currNode = this.head;
        while (!(currNode.next == null) && (currNode.next.element != element)) {
            currNode = currNode.next;
        }
        return currNode;
    }
    ;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoi6ZO+6KGoLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyLmlbDmja7nu5PmnoQv6ZO+6KGoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7SUFLSTs7QUFFSjs7O0tBR0s7QUFDTCxNQUFNLElBQUk7SUFJTixZQUFZLE9BQVU7UUFGdEIsU0FBSSxHQUFtQixJQUFJLENBQUM7UUFHeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDM0IsQ0FBQztDQUNKO0FBRUQ7Ozs7Ozs7SUFPSTtBQUNKLE1BQU0sS0FBSztJQUlQLFlBQVksR0FBUTtRQUNoQixJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUM7WUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDNUYsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLElBQUksR0FBRyxJQUFJLElBQUksRUFBRTtZQUNiLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNqQztTQUNKO0lBQ0wsQ0FBQztJQUVEOzs7OztTQUtLO0lBQ0wsTUFBTSxDQUFDLFVBQWEsRUFBRSxjQUFrQyxJQUFJLENBQUMsR0FBRztRQUM1RCxNQUFNLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFVBQVU7UUFDaEQsSUFBSSxPQUFPLENBQUM7UUFDWixJQUFJLFdBQVcsWUFBWSxJQUFJLEVBQUU7WUFDN0IsT0FBTyxH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Q0FBQztBQUM3Qix5QkFBeUI7QUFHekIsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN2QixPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDOUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN4QyxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRTFCLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDekIsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDaEMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNsRCxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOW9k+aVsOe7hOW+iOmVv+aXtlxyXG4gKiDmr4/lvZPopoHmlbDnu4TliKDpmaTmiJbogIXlop7liqDkuK3nmoTlhYPntKAs5YiZ5LmL5ZCO57Sg5pyJ55qE5YWD57Sg5LiL6KGo6YO96KaBKzEs5a+86Ie055qE5LqG5oCn6IO955qE5LiL6ZmNXHJcbiAqIOi/meS4quaXtuWAmemcgOimgemTvuihqCzliKDpmaTmt7vliqDlj6rmlLnlj5jliY3oioLngrnnmoTlsZ7mgKdcclxuICogZXM25Lit5a+55bqU55qE5pWw5o2u5qC85byP5pivIHNldCjkvYbmmK/msqHmnInlpLTlsL7oioLngrkg6Jm954S25pys5p2l5bCx5rKh5ZWl55SoKVxyXG4gKiovXHJcblxyXG4vKipcclxuICogbm9kZeexu1xyXG4gKiDpk77ooajkuK3nmoTmr4/kuKroioLngrnnmoTln7rnoYDnsbvlnotcclxuICogKi9cclxuY2xhc3MgTm9kZTxUPiB7XHJcbiAgICBlbGVtZW50OiBUIHwgbnVsbDtcclxuICAgIG5leHQ6IE5vZGU8VD4gfCBudWxsID0gbnVsbDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBUKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIExpbmtlZExpc3Qg57G7XHJcbiAqIGhlYWQg5aS057uT54K5XHJcbiAqIGZpbmQg5p+l5om+6IqC54K5XHJcbiAqIGluc2VydCDmj5LlhaXoioLngrlcclxuICogcmVtb3ZlICDliKDpmaToioLngrlcclxuICogZGlzcGxheSDovpPlh7rmiYDmnInoioLngrlcclxuICoqL1xyXG5jbGFzcyBMTGlzdDxUPiB7XHJcbiAgICBoZWFkOiBOb2RlPFQ+O1xyXG4gICAgZW5kOiBOb2RlPFQ+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGFycjogVFtdKSB7XHJcbiAgICAgICAgaWYgKCEoQXJyYXkuaXNBcnJheShhcnIpIHx8IGFyciA9PSBudWxsKSkgdGhyb3cgbmV3IEVycm9yKFwicGFyYW0gbXVzdCBiZSBhbiBBcnJheSBvciBub25lXCIpO1xyXG4gICAgICAgIHRoaXMuaGVhZCA9IHRoaXMuZW5kID0gbmV3IE5vZGUobnVsbCk7XHJcbiAgICAgICAgaWYgKGFyciAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW5ndGggPSBhcnIubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5zZXJ0KGFycltpXSwgdGhpcy5lbmQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5o+S5YWl5paw55qE6IqC54K5XHJcbiAgICAgKiBAcGFyYW0gbmV3RWxlbWVudCDmj5LlhaXnmoTlhoXlrrlcclxuICAgICAqIEBwYXJhbSBwcmV2RWxlbWVudCDmj5LlhaXnmoTkvY3nva7nmoTliY3kuIDkuKroioLngrlcclxuICAgICAqIOi/lOWbnuWAvOaYryDmlrDlu7rnmoToioLngrlcclxuICAgICAqICovXHJcbiAgICBpbnNlcnQobmV3RWxlbWVudDogVCwgcHJldkVsZW1lbnQ6IE5vZGU8VD4gfCBUIHwgbnVsbCA9IHRoaXMuZW5kKSB7XHJcbiAgICAgICAgY29uc3QgbmV3Tm9kZSA9IG5ldyBOb2RlKG5ld0VsZW1lbnQpOyAvLyBuZXcg5paw6IqC54K5XHJcbiAgICAgICAgbGV0IGN1cnJlbnQ7XHJcbiAgICAgICAgaWYgKHByZXZFbGVtZW50IGluc3RhbmNlb2YgTm9kZSkge1xyXG4gICAgICAgICAgICBjdXJyZW50ID0gcHJldkVsZW1lbnQ7IC8vIOebtOaOpeS9v+eUqOiKgueCuVxyXG4gICAgICAgIH0gZWxzZSBpZiAocHJldkVsZW1lbnQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjdXJyZW50ID0gdGhpcy5oZWFkO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnQgPSB0aGlzLmZpbmQocHJldkVsZW1lbnQpOyAvLyDmib7liLDnm67moIfoioLngrlcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnQgPT0gbnVsbCkgcmV0dXJuIG51bGw7IC8vIOayoeacieaJvuWIsCB0cyDlj4jnq4vlip/kuoZcclxuICAgICAgICB9XHJcbiAgICAgICAgLypcclxuICAgICAgICBpZiAodGhpcy5maW5kKG5ld0VsZW1lbnQpKSB7IC8vIOaAp+iDveacgOWkp+eahOa2iOiAl+WmguaenCDmr4/mrKHpg73mo4DntKLmmK/kuI3mmK/lt7Lnu4/mnInor6XlgLznmoToioLngrlcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG5ld0VsZW1lbnQgKyBcImhhcyBhbHJlYWR5IGV4aXN0ZWQhXCIpOyAvLyDlpoLmnpzlt7Lnu4/mnInor6XlgLznmoToioLngrnlsLHmiqXplJlcclxuICAgICAgICB9IGVsc2UgaWYgKHByZXZFbGVtZW50IGluc3RhbmNlb2YgTm9kZSkge1xyXG4gICAgICAgICAgICBjdXJyZW50ID0gcHJldkVsZW1lbnQ7IC8vIOebtOaOpeS9v+eUqOiKgueCuVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnQgPSB0aGlzLmZpbmQocHJldkVsZW1lbnQpOyAvLyDmib7liLDnm67moIfoioLngrlcclxuICAgICAgICB9XHJcbiAgICAgICAgKi9cclxuICAgICAgICBuZXdOb2RlLm5leHQgPSBjdXJyZW50Lm5leHQ7IC8vIOaWsOiKgueCueeahG5leHTkuLog5YmN5LiA5Liq6IqC54K555qEbmV4dFxyXG4gICAgICAgIGN1cnJlbnQubmV4dCA9IG5ld05vZGU7IC8vIOWJjeS4gOS4quiKgueCueeahG5leHQg5Li65paw6IqC54K5XHJcbiAgICAgICAgaWYgKGN1cnJlbnQgPT0gdGhpcy5lbmQpIHtcclxuICAgICAgICAgICAgdGhpcy5lbmQgPSBuZXdOb2RlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3Tm9kZTsgLy8g6L+U5Zue5paw55qE6IqC54K5IOaMieasoeW6j+aPkuWFpeW+iOWkmuiKgueCueaXtuebtOaOpeehruiupOesrOS6jOS4quWPguaVsFxyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOafpeaJvuiKgueCuVxyXG4gICAgICogQGVsZW1lbnQg6IqC54K5ZWxlbWVudOS4reeahOWGheWuuVxyXG4gICAgICogQGZyb21Ob2RlIOS7juWTquS4quiKgueCueWQjuW8gOWni+afpeaJviDpu5jorqTlgLzmmK/ku45oZWFk5byA5aeLXHJcbiAgICAgKiDov5Tlm57lgLwg5om+5Yiw55qE6IqC54K5ICB8fCBudWxsXHJcbiAgICAgKiovXHJcbiAgICBmaW5kKGVsZW1lbnQ6IFQsIGZyb21Ob2RlID0gdGhpcy5oZWFkKSB7XHJcbiAgICAgICAgbGV0IGN1cnJOb2RlID0gZnJvbU5vZGU7XHJcbiAgICAgICAgd2hpbGUgKGN1cnJOb2RlKSB7XHJcbiAgICAgICAgICAgIGlmIChjdXJyTm9kZS5lbGVtZW50ID09PSBlbGVtZW50KSByZXR1cm4gY3Vyck5vZGU7XHJcbiAgICAgICAgICAgIGN1cnJOb2RlID0gY3Vyck5vZGUubmV4dCE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxuXHJcbiAgICBpbnNlcnRBcnIoYXJyOiBUW10sIHByZXZFbGVtZW50OiBOb2RlPFQ+IHwgVCB8IG51bGwgPSB0aGlzLmVuZCkge1xyXG4gICAgICAgIGxldCBjdXJyZW50O1xyXG4gICAgICAgIGlmIChwcmV2RWxlbWVudCBpbnN0YW5jZW9mIE5vZGUpIHtcclxuICAgICAgICAgICAgY3VycmVudCA9IHByZXZFbGVtZW50OyAvLyDnm7TmjqXkvb/nlKjoioLngrlcclxuICAgICAgICB9IGVsc2UgaWYgKHByZXZFbGVtZW50ID09IG51bGwpIHtcclxuICAgICAgICAgICAgY3VycmVudCA9IHRoaXMuaGVhZDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjdXJyZW50ID0gdGhpcy5maW5kKHByZXZFbGVtZW50KTsgLy8g5om+5Yiw55uu5qCH6IqC54K5XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50ID09IG51bGwpIHJldHVybiBudWxsOyAvLyDmsqHmnInmib7liLAgdHMg5Y+I56uL5Yqf5LqGXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnQgPSB0aGlzLmluc2VydChhcnJbaV0sIGN1cnJlbnQhKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGRpc3BsYXkoKSB7XHJcbiAgICAgICAgbGV0IGN1cnJOb2RlID0gdGhpcy5oZWFkO1xyXG4gICAgICAgIHdoaWxlICghKGN1cnJOb2RlLm5leHQgPT0gbnVsbCkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coY3Vyck5vZGUubmV4dC5lbGVtZW50KTtcclxuICAgICAgICAgICAgY3Vyck5vZGUgPSBjdXJyTm9kZS5uZXh0O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmVtb3ZlKGVsZW1lbnQ6IFQpIHtcclxuICAgICAgICBjb25zdCBwcmV2Tm9kZSA9IHRoaXMuZmluZFByZXZpb3VzKGVsZW1lbnQpO1xyXG4gICAgICAgIGlmICghKHByZXZOb2RlLm5leHQgPT0gbnVsbCkpIHtcclxuICAgICAgICAgICAgcHJldk5vZGUubmV4dCA9IHByZXZOb2RlLm5leHQubmV4dDsgLy8g5bCG5YmN5LiA5Liq6IqC54K555qE5YC8bmV4dCDmjIflkJEg5LiL5LiL5Liq5YWD57SgXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmaW5kUHJldmlvdXMoZWxlbWVudDogVCkge1xyXG4gICAgICAgIGxldCBjdXJyTm9kZSA9IHRoaXMuaGVhZDtcclxuICAgICAgICB3aGlsZSAoIShjdXJyTm9kZS5uZXh0ID09IG51bGwpICYmIChjdXJyTm9kZS5uZXh0LmVsZW1lbnQgIT0gZWxlbWVudCkpIHtcclxuICAgICAgICAgICAgY3Vyck5vZGUgPSBjdXJyTm9kZS5uZXh0O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY3Vyck5vZGU7XHJcbiAgICB9O1xyXG5cclxufVxyXG5cclxuXHJcbmNvbnN0IGNpdGllcyA9IG5ldyBMTGlzdChbXCJDb253YXlcIiwgXCJSdXNzZWxsdmlsbGVcIiwgXCJBbG1hXCJdKTtcclxuY2l0aWVzLmluc2VydChcImFmdGVySGVhZFwiLCBudWxsKTtcclxuY2l0aWVzLmluc2VydChcImFmdGVySGVhZDJcIiwgXCJhZnRlckhlYWRcIik7XHJcblxyXG5cclxuY2l0aWVzLmRpc3BsYXkoKTtcclxuXHJcbi8vIOa1i+ivleaAp+iDvVxyXG5jb25zb2xlLnRpbWUoXCJjcmVhdGVBcnJcIik7XHJcbmNvbnN0IHRlc3RBcnI6IGFueVtdID0gW251bGxdO1xyXG5mb3IgKGxldCBpID0gMDsgaSA8IDk5OTk5OTsgaSsrKSB7XHJcbiAgICB0ZXN0QXJyLnB1c2goaSk7XHJcbn1cclxuY29uc29sZS50aW1lRW5kKFwiY3JlYXRlQXJyXCIpO1xyXG5cclxudGVzdEFyci5zaGlmdCgpO1xyXG5cclxuY29uc29sZS50aW1lKFwiY3JlYXRlTExpc3RcIik7XHJcbmNvbnN0IHRlc3RMTGlzdCA9IG5ldyBMTGlzdCh0ZXN0QXJyKTtcclxuY29uc29sZS50aW1lRW5kKFwiY3JlYXRlTExpc3RcIik7XHJcblxyXG4vLyDmlrDlu7og5pWw57uE5q+U6ZO+6KGo5Z2XIDQtMTDlgI1cclxuXHJcblxyXG4vLyBzZXQg5pWw5o2u57uT5p6EXHJcbmNvbnNvbGUudGltZShcImNyZWF0ZVNldFwiKTtcclxuY29uc29sZS50aW1lRW5kKFwiY3JlYXRlU2V0XCIpO1xyXG4vLyDmr5Tljp/nlJ/nmoRzZXTlv6sg5beu6Led5bqU6K+l5bCx5Zyo5qOA5p+lIOWOu+mHjeS4iumdolxyXG5cclxuXHJcbmNvbnNvbGUudGltZShcImFyckFkZFwiKTtcclxudGVzdEFyci5zcGxpY2UoMSwgMCwgXCJmaXJzdFwiKTtcclxudGVzdEFyci5zcGxpY2UoMiwgMCwgXCJzZWNvbmRcIiwgXCJ0aGlyZFwiKTtcclxuY29uc29sZS50aW1lRW5kKFwiYXJyQWRkXCIpO1xyXG5cclxuY29uc29sZS50aW1lKFwiTExpc3RBZGRcIik7XHJcbnRlc3RMTGlzdC5pbnNlcnQoXCJmaXJzdFwiLCBudWxsKTtcclxudGVzdExMaXN0Lmluc2VydEFycihbXCJzZWNvbmRcIiwgXCJ0aGlyZFwiXSwgXCJmaXJzdFwiKTtcclxuY29uc29sZS50aW1lRW5kKFwiTExpc3RBZGRcIik7XHJcblxyXG4vLyDlnKjlpLTpg6jmj5LlgLwg6ZO+6KGo5q+U5pWw57uE5b+rMzDlgI3lt6blj7NcclxuXHJcbmV4cG9ydCB7fTtcclxuIl19