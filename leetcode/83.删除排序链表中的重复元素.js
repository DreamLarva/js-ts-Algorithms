/*
[83] 删除排序链表中的重复元素

https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/description/

Tags: algorithms linked-list

Langs: c cpp csharp golang java javascript kotlin php python python3 ruby rust scala swift

* algorithms
* Easy (44.31%)
* Total Accepted: 19.5K
* Total Submissions: 43.9K
* Testcase Example: '[1,1,2]'

给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。

示例 1:

输入: 1->1->2
输出: 1->2


示例 2:

输入: 1->1->2->3->3
输出: 1->2->3

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    if (head === null)return null;
    // 新链表的尾节点
    let tail = head;
    // 正在准备插入的原节点
    let currentNode = head.next;
    while (currentNode !== null) {
        if(currentNode.val !== tail.val){
            tail.next = currentNode;
            tail = tail.next;
        }
        currentNode = currentNode.next;
    }
    // 保证最后一个 后没有多余的节点
    tail.next = null;
    return head
};

const {createLinkedList} = require("./util/linked_list");
const linkedList = createLinkedList(
    [1,1,2,3,3]);
const uniqueLinkedList =  deleteDuplicates(linkedList);
console.log(uniqueLinkedList.toString());

