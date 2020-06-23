/**
 * 当数组很长时
 * 每当要数组删除或者增加中的元素,则之后素有的元素下表都要+1,导致的了性能的下降
 * 这个时候需要链表,删除添加只改变前节点的属性
 * es6中对应的数据格式是 set(但是没有头尾节点 虽然本来就没啥用)
 **/

/**
 * node类
 * 链表中的每个节点的基础类型
 * */
class Node<T> {
  element: T | null;
  next: Node<T> | null = null;

  constructor(element: T) {
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
class LList<T> {
  head: Node<T | null>;
  end: Node<T | null>;

  constructor(arr: T[]) {
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
  insert(
    newElement: T | null,
    prevElement: Node<T | null> | T | null = this.end
  ) {
    const newNode = new Node(newElement); // new 新节点
    let current;
    if (prevElement instanceof Node) {
      current = prevElement; // 直接使用节点
    } else if (prevElement == null) {
      current = this.head;
    } else {
      current = this.find(prevElement); // 找到目标节点
      if (current == null) return null; // 没有找到 ts 又立功了
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
  find(element: T, fromNode = this.head) {
    let currNode = fromNode;
    while (currNode) {
      if (currNode.element === element) return currNode;
      currNode = currNode.next!;
    }
    return null;
  }

  insertArr(arr: T[], prevElement: Node<T | null> | T | null = this.end) {
    let current;
    if (prevElement instanceof Node) {
      current = prevElement; // 直接使用节点
    } else if (prevElement == null) {
      current = this.head;
    } else {
      current = this.find(prevElement); // 找到目标节点
      if (current == null) return null; // 没有找到 ts 又立功了
    }
    for (let i = 0; i < arr.length; i++) {
      current = this.insert(arr[i], current!);
    }
  }

  display() {
    let currNode = this.head;
    while (!(currNode.next == null)) {
      console.log(currNode.next.element);
      currNode = currNode.next;
    }
  }

  remove(element: T) {
    const prevNode = this.findPrevious(element);
    if (!(prevNode.next == null)) {
      prevNode.next = prevNode.next.next; // 将前一个节点的值next 指向 下下个元素
    }
  }

  findPrevious(element: T) {
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
const testArr: any[] = [null];
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

// 在头部插值 链表比数组快30倍左右

export {};
