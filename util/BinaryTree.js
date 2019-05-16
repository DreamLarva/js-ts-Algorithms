"use strict";
// 二叉树
Object.defineProperty(exports, "__esModule", { value: true });
class TreeNode {
    constructor(val) {
        this.left = null;
        this.right = null;
        this.val = val;
    }
}
exports.TreeNode = TreeNode;
function createBinaryTree(arr) {
    const root = new TreeNode(arr.shift()); // 根节点不为null
    let current_layer_node_arr = [root];
    const next_layer_node_arr = [];
    // 将每个放到 二叉树上 如果还剩余节点那么这些节点 的子节点全部设为null
    while (arr.length || next_layer_node_arr.length) {
        current_layer_node_arr.forEach(node => {
            if (node != null) {
                const left_data = arr.shift() || null;
                if (left_data != null) {
                    const left_node = new TreeNode(left_data);
                    node.left = left_node;
                    next_layer_node_arr.push(left_node);
                }
                else {
                    node.left = null;
                }
                const right_data = arr.shift() || null;
                if (right_data != null) {
                    const right_node = new TreeNode(right_data);
                    node.right = right_node;
                    next_layer_node_arr.push(right_node);
                }
                else {
                    node.right = null;
                }
            }
        });
        current_layer_node_arr = [...next_layer_node_arr];
        next_layer_node_arr.length = 0;
    }
    return root;
}
exports.createBinaryTree = createBinaryTree;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmluYXJ5VHJlZS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsidXRpbC9CaW5hcnlUcmVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFNOztBQUVOLE1BQU0sUUFBUTtJQUtWLFlBQVksR0FBTTtRQUhsQixTQUFJLEdBQXVCLElBQUksQ0FBQztRQUNoQyxVQUFLLEdBQXVCLElBQUksQ0FBQztRQUc3QixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNuQixDQUFDO0NBRUo7QUF1Q0csNEJBQVE7QUFwQ1osU0FBUyxnQkFBZ0IsQ0FBSSxHQUFpQjtJQUMxQyxNQUFNLElBQUksR0FBZ0IsSUFBSSxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRyxDQUFDLENBQUMsQ0FBQyxZQUFZO0lBQ2xFLElBQUksc0JBQXNCLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxNQUFNLG1CQUFtQixHQUFrQixFQUFFLENBQUM7SUFDOUMsd0NBQXdDO0lBQ3hDLE9BQU8sR0FBRyxDQUFDLE1BQU0sSUFBSSxtQkFBbUIsQ0FBQyxNQUFNLEVBQUU7UUFDN0Msc0JBQXNCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2xDLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtnQkFDZCxNQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksSUFBSSxDQUFDO2dCQUN0QyxJQUFJLFNBQVMsSUFBSSxJQUFJLEVBQUU7b0JBQ25CLE1BQU0sU0FBUyxHQUFHLElBQUksUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUMxQyxJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztvQkFDdEIsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2lCQUN2QztxQkFBTTtvQkFDSCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztpQkFDcEI7Z0JBQ0QsTUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLElBQUksQ0FBQztnQkFDdkMsSUFBSSxVQUFVLElBQUksSUFBSSxFQUFFO29CQUNwQixNQUFNLFVBQVUsR0FBRyxJQUFJLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDNUMsSUFBSSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUM7b0JBQ3hCLG1CQUFtQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztpQkFDeEM7cUJBQU07b0JBQ0gsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7aUJBQ3JCO2FBQ0o7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUNILHNCQUFzQixHQUFHLENBQUMsR0FBRyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2xELG1CQUFtQixDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7S0FDbEM7SUFDRCxPQUFPLElBQUksQ0FBQztBQUVoQixDQUFDO0FBSUcsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiLy8g5LqM5Y+J5qCRXG5cbmNsYXNzIFRyZWVOb2RlPFQgPSBhbnk+IHtcbiAgICB2YWw6IFQ7XG4gICAgbGVmdDogbnVsbCB8IFRyZWVOb2RlPFQ+ID0gbnVsbDtcbiAgICByaWdodDogbnVsbCB8IFRyZWVOb2RlPFQ+ID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKHZhbDogVCkge1xuICAgICAgICB0aGlzLnZhbCA9IHZhbDtcbiAgICB9XG5cbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVCaW5hcnlUcmVlPFQ+KGFycjogKFQgfCBudWxsKVtdKSB7XG4gICAgY29uc3Qgcm9vdDogVHJlZU5vZGU8VD4gPSBuZXcgVHJlZU5vZGUoYXJyLnNoaWZ0KCkhKTsgLy8g5qC56IqC54K55LiN5Li6bnVsbFxuICAgIGxldCBjdXJyZW50X2xheWVyX25vZGVfYXJyID0gW3Jvb3RdO1xuICAgIGNvbnN0IG5leHRfbGF5ZXJfbm9kZV9hcnI6IFRyZWVOb2RlPFQ+W10gPSBbXTtcbiAgICAvLyDlsIbmr4/kuKrmlL7liLAg5LqM5Y+J5qCR5LiKIOWmguaenOi/mOWJqeS9meiKgueCuemCo+S5iOi/meS6m+iKgueCuSDnmoTlrZDoioLngrnlhajpg6jorr7kuLpudWxsXG4gICAgd2hpbGUgKGFyci5sZW5ndGggfHwgbmV4dF9sYXllcl9ub2RlX2Fyci5sZW5ndGgpIHtcbiAgICAgICAgY3VycmVudF9sYXllcl9ub2RlX2Fyci5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICAgICAgaWYgKG5vZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxlZnRfZGF0YSA9IGFyci5zaGlmdCgpIHx8IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKGxlZnRfZGF0YSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxlZnRfbm9kZSA9IG5ldyBUcmVlTm9kZShsZWZ0X2RhdGEpO1xuICAgICAgICAgICAgICAgICAgICBub2RlLmxlZnQgPSBsZWZ0X25vZGU7XG4gICAgICAgICAgICAgICAgICAgIG5leHRfbGF5ZXJfbm9kZV9hcnIucHVzaChsZWZ0X25vZGUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUubGVmdCA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHJpZ2h0X2RhdGEgPSBhcnIuc2hpZnQoKSB8fCBudWxsO1xuICAgICAgICAgICAgICAgIGlmIChyaWdodF9kYXRhICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmlnaHRfbm9kZSA9IG5ldyBUcmVlTm9kZShyaWdodF9kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5yaWdodCA9IHJpZ2h0X25vZGU7XG4gICAgICAgICAgICAgICAgICAgIG5leHRfbGF5ZXJfbm9kZV9hcnIucHVzaChyaWdodF9ub2RlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBub2RlLnJpZ2h0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjdXJyZW50X2xheWVyX25vZGVfYXJyID0gWy4uLm5leHRfbGF5ZXJfbm9kZV9hcnJdO1xuICAgICAgICBuZXh0X2xheWVyX25vZGVfYXJyLmxlbmd0aCA9IDA7XG4gICAgfVxuICAgIHJldHVybiByb290O1xuXG59XG5cblxuZXhwb3J0IHtcbiAgICBjcmVhdGVCaW5hcnlUcmVlLFxuICAgIFRyZWVOb2RlLFxufTtcbiJdfQ==