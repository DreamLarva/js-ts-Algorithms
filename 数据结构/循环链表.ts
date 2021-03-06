/**
 * 循环链表和单向链表相似，节点类型都是一样的。唯一的区别是，
 * 在创建循环链表时，让其头节点的 next 属性指向它本身，即：
 * head.next = head
 * 这种行为会传导至链表中的每个节点，使得每个节点的 next 属性都指向链表的头节点。
 * 换句话说，链表的尾节点指向头节点，形成了一个循环链表
 * 如果你希望可以从后向前遍历链表，但是又不想付出额外代价来创建一个双向链表，
 * 那么就需要使用循环链表。从循环链表的尾节点向后移动，就等于从后向前遍历链表。
 * */

class Node<T = any> {
  element: T | null;
  next!: Node<T>;

  constructor(element: T) {
    this.element = element;
  }
}

class LList<T = any> {
  head: Node<T | null>;
  end: Node<T | null>;

  constructor(arr: T[]) {
    if (Array.isArray(arr) || arr == null) {
    } else {
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

  insert(newElement: T | null, prevElement = this.end) {
    const newNode = new Node(newElement); // new 新节点
    let current;
    if (prevElement instanceof Node) {
      current = prevElement; // 直接使用节点
    } else {
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

  find(element: T, fromNode = this.head) {
    let currNode = fromNode;
    while (currNode && currNode.element != element) {
      currNode = currNode.next;
    }
    return currNode;
  }

  insertArr(arr: T[], prevElement = this.end) {
    let current;
    if (prevElement instanceof Node) {
      current = prevElement; // 直接使用节点
    } else {
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

  remove(element: T) {
    const prevNode = this.findPrevious(element);
    if (prevNode) {
      prevNode.next = prevNode.next.next; // 将前一个节点的值next 指向 下下个元素
    }
  }

  findPrevious(element: T) {
    let currNode = this.head;
    let last;
    do {
      last = currNode;
      currNode = currNode.next;
      if (currNode.element === element) return last;
    } while (currNode !== this.head);
    return null;
  }
}

export {};
