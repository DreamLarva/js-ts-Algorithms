/**
 * 每个节点在增加一个指针指向上一个对象
 * 方便了删除节点的操作 , 并且可以反向遍历整个链表*/
function Node(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
}

function LList() {
    this.head = new Node("head")
}

LList.prototype.dispReverse = function () {
    var currNode = this.findLast();
    while (currNode.previous != null) {
        console.log(currNode.element);
        currNode = currNode.previous
    }
};
LList.prototype.findLast = function () {
    var currNode = this.head;
    while (!(currNode.next == null)) {
        currNode = currNode.next
    }
    return currNode
};
LList.prototype.insert = function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    newNode.previous = current;
    current.next = newNode;
};
LList.prototype.remove = function remove(item) {
    var currNode = this.find(item);
    if (currNode.next != null) {
        currNode.previous.next = currNode.next;
        currNode.next.previous = currNode.previous;
        currNode.next = null;
        currNode.previous = null;
    }
};
LList.prototype.display = function () {
    var currNode = this.head;
    while (currNode.next != null) {
        console.log(currNode.next.element);
        currNode = currNode.next
    }
};
LList.prototype.find = function (item) {
    var currNode = this.head;
    while (currNode.element != item) {
        currNode = currNode.next;
    }
    return currNode
};


var cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
cities.display();
console.log("-------------");
cities.remove("Carlisle");
cities.display();
console.log("-------------");
cities.dispReverse();

