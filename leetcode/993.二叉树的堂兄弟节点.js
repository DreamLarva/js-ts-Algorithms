"use strict";
/*
993. 二叉树的堂兄弟节点
在二叉树中，根节点位于深度 0 处，每个深度为 k 的节点的子节点位于深度 k+1 处。

如果二叉树的两个节点深度相同，但 父节点不同 ，则它们是一对堂兄弟节点。

我们给出了具有唯一值的二叉树的根节点 root ，以及树中两个不同节点的值 x 和 y 。

只有与值 x 和 y 对应的节点是堂兄弟节点时，才返回 true 。否则，返回 false。



示例 1：


输入：root = [1,2,3,4], x = 4, y = 3
输出：false
示例 2：


输入：root = [1,2,3,null,4,null,5], x = 5, y = 4
输出：true
示例 3：



输入：root = [1,2,3,null,4], x = 2, y = 3
输出：false
* */
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
class TreeNode {
    val;
    left;
    right;
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}
function isCousins(root, x, y) {
    // 层次遍历
    let fatherLevel = [root];
    while (fatherLevel.length !== 0) {
        const nextLevel = [];
        let levelGotOne = false; // 同一深度用标识
        // 遍历父节点
        for (let i = 0; i < fatherLevel.length; i++) {
            const fatherNode = fatherLevel[i];
            let nodeGotOne = false; // 兄弟标识
            if (fatherNode?.left) {
                if ([x, y].includes(fatherNode.left.val)) {
                    nodeGotOne = true;
                    if (levelGotOne)
                        return true;
                    else
                        levelGotOne = true;
                }
                else {
                    fatherNode?.left && nextLevel.push(fatherNode?.left);
                }
            }
            if (fatherNode?.right) {
                if ([x, y].includes(fatherNode.right.val)) {
                    if (nodeGotOne)
                        return false; // 不能是兄弟
                    if (levelGotOne)
                        return true;
                    else
                        levelGotOne = true;
                }
                else {
                    fatherNode?.right && nextLevel.push(fatherNode?.right);
                }
            }
        }
        if (levelGotOne)
            return false; // 一层中只有 其一
        fatherLevel = nextLevel;
    }
    return false;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTkzLuS6jOWPieagkeeahOWgguWFhOW8n+iKgueCuS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvOTkzLuS6jOWPieagkeeahOWgguWFhOW8n+iKgueCuS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUE0Qkk7QUFFSjs7Ozs7Ozs7Ozs7O0dBWUc7QUFFSCxNQUFNLFFBQVE7SUFDWixHQUFHLENBQVM7SUFDWixJQUFJLENBQWtCO0lBQ3RCLEtBQUssQ0FBa0I7SUFDdkIsWUFBWSxHQUFZLEVBQUUsSUFBc0IsRUFBRSxLQUF1QjtRQUN2RSxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDN0MsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNsRCxDQUFDO0NBQ0Y7QUFFRCxTQUFTLFNBQVMsQ0FBQyxJQUFxQixFQUFFLENBQVMsRUFBRSxDQUFTO0lBQzVELE9BQU87SUFDUCxJQUFJLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXpCLE9BQU8sV0FBVyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDL0IsTUFBTSxTQUFTLEdBQWUsRUFBRSxDQUFDO1FBRWpDLElBQUksV0FBVyxHQUFHLEtBQUssQ0FBQyxDQUFDLFVBQVU7UUFDbkMsUUFBUTtRQUNSLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzNDLE1BQU0sVUFBVSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQyxJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQyxPQUFPO1lBQy9CLElBQUksVUFBVSxFQUFFLElBQUksRUFBRTtnQkFDcEIsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDeEMsVUFBVSxHQUFHLElBQUksQ0FBQztvQkFFbEIsSUFBSSxXQUFXO3dCQUFFLE9BQU8sSUFBSSxDQUFDOzt3QkFDeEIsV0FBVyxHQUFHLElBQUksQ0FBQztpQkFDekI7cUJBQU07b0JBQ0wsVUFBVSxFQUFFLElBQUksSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztpQkFDdEQ7YUFDRjtZQUVELElBQUksVUFBVSxFQUFFLEtBQUssRUFBRTtnQkFDckIsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDekMsSUFBSSxVQUFVO3dCQUFFLE9BQU8sS0FBSyxDQUFDLENBQUMsUUFBUTtvQkFFdEMsSUFBSSxXQUFXO3dCQUFFLE9BQU8sSUFBSSxDQUFDOzt3QkFDeEIsV0FBVyxHQUFHLElBQUksQ0FBQztpQkFDekI7cUJBQU07b0JBQ0wsVUFBVSxFQUFFLEtBQUssSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztpQkFDeEQ7YUFDRjtTQUNGO1FBRUQsSUFBSSxXQUFXO1lBQUUsT0FBTyxLQUFLLENBQUMsQ0FBQyxXQUFXO1FBQzFDLFdBQVcsR0FBRyxTQUFTLENBQUM7S0FDekI7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuOTkzLiDkuozlj4nmoJHnmoTloILlhYTlvJ/oioLngrlcbuWcqOS6jOWPieagkeS4re+8jOagueiKgueCueS9jeS6jua3seW6piAwIOWkhO+8jOavj+S4qua3seW6puS4uiBrIOeahOiKgueCueeahOWtkOiKgueCueS9jeS6jua3seW6piBrKzEg5aSE44CCXG5cbuWmguaenOS6jOWPieagkeeahOS4pOS4quiKgueCuea3seW6puebuOWQjO+8jOS9hiDniLboioLngrnkuI3lkIwg77yM5YiZ5a6D5Lus5piv5LiA5a+55aCC5YWE5byf6IqC54K544CCXG5cbuaIkeS7rOe7meWHuuS6huWFt+acieWUr+S4gOWAvOeahOS6jOWPieagkeeahOagueiKgueCuSByb290IO+8jOS7peWPiuagkeS4reS4pOS4quS4jeWQjOiKgueCueeahOWAvCB4IOWSjCB5IOOAglxuXG7lj6rmnInkuI7lgLwgeCDlkowgeSDlr7nlupTnmoToioLngrnmmK/loILlhYTlvJ/oioLngrnml7bvvIzmiY3ov5Tlm54gdHJ1ZSDjgILlkKbliJnvvIzov5Tlm54gZmFsc2XjgIJcblxuXG5cbuekuuS+iyAx77yaXG5cblxu6L6T5YWl77yacm9vdCA9IFsxLDIsMyw0XSwgeCA9IDQsIHkgPSAzXG7ovpPlh7rvvJpmYWxzZVxu56S65L6LIDLvvJpcblxuXG7ovpPlhaXvvJpyb290ID0gWzEsMiwzLG51bGwsNCxudWxsLDVdLCB4ID0gNSwgeSA9IDRcbui+k+WHuu+8mnRydWVcbuekuuS+iyAz77yaXG5cblxuXG7ovpPlhaXvvJpyb290ID0gWzEsMiwzLG51bGwsNF0sIHggPSAyLCB5ID0gM1xu6L6T5Ye677yaZmFsc2VcbiogKi9cblxuLyoqXG4gKiBEZWZpbml0aW9uIGZvciBhIGJpbmFyeSB0cmVlIG5vZGUuXG4gKiBjbGFzcyBUcmVlTm9kZSB7XG4gKiAgICAgdmFsOiBudW1iZXJcbiAqICAgICBsZWZ0OiBUcmVlTm9kZSB8IG51bGxcbiAqICAgICByaWdodDogVHJlZU5vZGUgfCBudWxsXG4gKiAgICAgY29uc3RydWN0b3IodmFsPzogbnVtYmVyLCBsZWZ0PzogVHJlZU5vZGUgfCBudWxsLCByaWdodD86IFRyZWVOb2RlIHwgbnVsbCkge1xuICogICAgICAgICB0aGlzLnZhbCA9ICh2YWw9PT11bmRlZmluZWQgPyAwIDogdmFsKVxuICogICAgICAgICB0aGlzLmxlZnQgPSAobGVmdD09PXVuZGVmaW5lZCA/IG51bGwgOiBsZWZ0KVxuICogICAgICAgICB0aGlzLnJpZ2h0ID0gKHJpZ2h0PT09dW5kZWZpbmVkID8gbnVsbCA6IHJpZ2h0KVxuICogICAgIH1cbiAqIH1cbiAqL1xuXG5jbGFzcyBUcmVlTm9kZSB7XG4gIHZhbDogbnVtYmVyO1xuICBsZWZ0OiBUcmVlTm9kZSB8IG51bGw7XG4gIHJpZ2h0OiBUcmVlTm9kZSB8IG51bGw7XG4gIGNvbnN0cnVjdG9yKHZhbD86IG51bWJlciwgbGVmdD86IFRyZWVOb2RlIHwgbnVsbCwgcmlnaHQ/OiBUcmVlTm9kZSB8IG51bGwpIHtcbiAgICB0aGlzLnZhbCA9IHZhbCA9PT0gdW5kZWZpbmVkID8gMCA6IHZhbDtcbiAgICB0aGlzLmxlZnQgPSBsZWZ0ID09PSB1bmRlZmluZWQgPyBudWxsIDogbGVmdDtcbiAgICB0aGlzLnJpZ2h0ID0gcmlnaHQgPT09IHVuZGVmaW5lZCA/IG51bGwgOiByaWdodDtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0NvdXNpbnMocm9vdDogVHJlZU5vZGUgfCBudWxsLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IGJvb2xlYW4ge1xuICAvLyDlsYLmrKHpgY3ljoZcbiAgbGV0IGZhdGhlckxldmVsID0gW3Jvb3RdO1xuXG4gIHdoaWxlIChmYXRoZXJMZXZlbC5sZW5ndGggIT09IDApIHtcbiAgICBjb25zdCBuZXh0TGV2ZWw6IFRyZWVOb2RlW10gPSBbXTtcblxuICAgIGxldCBsZXZlbEdvdE9uZSA9IGZhbHNlOyAvLyDlkIzkuIDmt7HluqbnlKjmoIfor4ZcbiAgICAvLyDpgY3ljobniLboioLngrlcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZhdGhlckxldmVsLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBmYXRoZXJOb2RlID0gZmF0aGVyTGV2ZWxbaV07XG4gICAgICBsZXQgbm9kZUdvdE9uZSA9IGZhbHNlOyAvLyDlhYTlvJ/moIfor4ZcbiAgICAgIGlmIChmYXRoZXJOb2RlPy5sZWZ0KSB7XG4gICAgICAgIGlmIChbeCwgeV0uaW5jbHVkZXMoZmF0aGVyTm9kZS5sZWZ0LnZhbCkpIHtcbiAgICAgICAgICBub2RlR290T25lID0gdHJ1ZTtcblxuICAgICAgICAgIGlmIChsZXZlbEdvdE9uZSkgcmV0dXJuIHRydWU7XG4gICAgICAgICAgZWxzZSBsZXZlbEdvdE9uZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmF0aGVyTm9kZT8ubGVmdCAmJiBuZXh0TGV2ZWwucHVzaChmYXRoZXJOb2RlPy5sZWZ0KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmF0aGVyTm9kZT8ucmlnaHQpIHtcbiAgICAgICAgaWYgKFt4LCB5XS5pbmNsdWRlcyhmYXRoZXJOb2RlLnJpZ2h0LnZhbCkpIHtcbiAgICAgICAgICBpZiAobm9kZUdvdE9uZSkgcmV0dXJuIGZhbHNlOyAvLyDkuI3og73mmK/lhYTlvJ9cblxuICAgICAgICAgIGlmIChsZXZlbEdvdE9uZSkgcmV0dXJuIHRydWU7XG4gICAgICAgICAgZWxzZSBsZXZlbEdvdE9uZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmF0aGVyTm9kZT8ucmlnaHQgJiYgbmV4dExldmVsLnB1c2goZmF0aGVyTm9kZT8ucmlnaHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGxldmVsR290T25lKSByZXR1cm4gZmFsc2U7IC8vIOS4gOWxguS4reWPquaciSDlhbbkuIBcbiAgICBmYXRoZXJMZXZlbCA9IG5leHRMZXZlbDtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbiJdfQ==