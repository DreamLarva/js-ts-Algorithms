/**
 * 每个节点在增加一个指针指向上一个对象
 * 方便了删除节点的操作 , 并且可以反向遍历整个链表*/
class Node<T> {
    element: T | null;
    next: Node<T> | null = null;
    previous: Node<T> | null = null;

    constructor(element: T | null = null) {
        this.element = element;
    }
}

class LList<T> {
    head = new Node<T>();

    dispReverse() {
        var currNode = this.findLast();
        while (currNode.previous != null) {
            console.log(currNode.element);
            currNode = currNode.previous;
        }
    }

    findLast() {
        var currNode = this.head;
        while (!(currNode.next == null)) {
            currNode = currNode.next;
        }
        return currNode;
    };

    insert(newElement: T, item: T | null) {
        const newNode = new Node(newElement);
        const current = item === null ? this.head : this.find(item);
        if (current === null) {
            console.log("找不到插入的位置");
            return;
        }
        newNode.next = current.next;
        newNode.previous = current;
        current.next = newNode;
    };

    remove(item: T) {
        let currNode = this.find(item);
        // ts 又立功了
        if (currNode === null || currNode.element === null) return null;
        if (currNode.next !== null) {
            currNode.previous!.next = currNode.next; // 这里已经排除了 是 head 节点了
            currNode.next.previous = currNode.previous;
            currNode.next = null;
            currNode.previous = null;
        }
    };

    display() {
        let currNode = this.head;
        while (currNode !== null && currNode.next != null) {
            console.log(currNode.next.element);
            currNode = currNode.next;
        }
    };

    find(item: T) {
        let currNode: null | Node<T> = this.head;
        while (currNode !== null && currNode.element != item) {
            currNode = currNode.next;
        }
        return currNode;
    };
}


var cities = new LList();
cities.insert("Conway", null);
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
cities.display();
console.log("-------------");
cities.remove("Carlisle");
cities.display();
console.log("-------------");
cities.dispReverse();

export {};
