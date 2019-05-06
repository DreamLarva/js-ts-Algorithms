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
    const root = new TreeNode(arr.shift());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmluYXJ5VHJlZS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsidXRpbC9CaW5hcnlUcmVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFNOztBQUVOLE1BQU0sUUFBUTtJQUtWLFlBQVksR0FBTTtRQUhsQixTQUFJLEdBQXVCLElBQUksQ0FBQztRQUNoQyxVQUFLLEdBQXVCLElBQUksQ0FBQztRQUc3QixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNuQixDQUFDO0NBRUo7QUF1Q0csNEJBQVE7QUFwQ1osU0FBUyxnQkFBZ0IsQ0FBSSxHQUFRO0lBQ2pDLE1BQU0sSUFBSSxHQUFHLElBQUksUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLElBQUksc0JBQXNCLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxNQUFNLG1CQUFtQixHQUFrQixFQUFFLENBQUM7SUFDOUMsd0NBQXdDO0lBQ3hDLE9BQU8sR0FBRyxDQUFDLE1BQU0sSUFBSSxtQkFBbUIsQ0FBQyxNQUFNLEVBQUU7UUFDN0Msc0JBQXNCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2xDLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtnQkFDZCxNQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksSUFBSSxDQUFDO2dCQUN0QyxJQUFJLFNBQVMsSUFBSSxJQUFJLEVBQUU7b0JBQ25CLE1BQU0sU0FBUyxHQUFHLElBQUksUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUMxQyxJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztvQkFDdEIsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2lCQUN2QztxQkFBTTtvQkFDSCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztpQkFDcEI7Z0JBQ0QsTUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLElBQUksQ0FBQztnQkFDdkMsSUFBSSxVQUFVLElBQUksSUFBSSxFQUFFO29CQUNwQixNQUFNLFVBQVUsR0FBRyxJQUFJLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDNUMsSUFBSSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUM7b0JBQ3hCLG1CQUFtQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztpQkFDeEM7cUJBQU07b0JBQ0gsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7aUJBQ3JCO2FBQ0o7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUNILHNCQUFzQixHQUFHLENBQUMsR0FBRyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2xELG1CQUFtQixDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7S0FDbEM7SUFDRCxPQUFPLElBQUksQ0FBQztBQUVoQixDQUFDO0FBSUcsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiLy8g5LqM5Y+J5qCRXG5cbmNsYXNzIFRyZWVOb2RlPFQgPSBhbnk+IHtcbiAgICB2YWw6IFQ7XG4gICAgbGVmdDogbnVsbCB8IFRyZWVOb2RlPFQ+ID0gbnVsbDtcbiAgICByaWdodDogbnVsbCB8IFRyZWVOb2RlPFQ+ID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKHZhbDogVCkge1xuICAgICAgICB0aGlzLnZhbCA9IHZhbDtcbiAgICB9XG5cbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVCaW5hcnlUcmVlPFQ+KGFycjogVFtdKSB7XG4gICAgY29uc3Qgcm9vdCA9IG5ldyBUcmVlTm9kZShhcnIuc2hpZnQoKSk7XG4gICAgbGV0IGN1cnJlbnRfbGF5ZXJfbm9kZV9hcnIgPSBbcm9vdF07XG4gICAgY29uc3QgbmV4dF9sYXllcl9ub2RlX2FycjogVHJlZU5vZGU8VD5bXSA9IFtdO1xuICAgIC8vIOWwhuavj+S4quaUvuWIsCDkuozlj4nmoJHkuIog5aaC5p6c6L+Y5Ymp5L2Z6IqC54K56YKj5LmI6L+Z5Lqb6IqC54K5IOeahOWtkOiKgueCueWFqOmDqOiuvuS4um51bGxcbiAgICB3aGlsZSAoYXJyLmxlbmd0aCB8fCBuZXh0X2xheWVyX25vZGVfYXJyLmxlbmd0aCkge1xuICAgICAgICBjdXJyZW50X2xheWVyX25vZGVfYXJyLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgICAgICBpZiAobm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGVmdF9kYXRhID0gYXJyLnNoaWZ0KCkgfHwgbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAobGVmdF9kYXRhICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGVmdF9ub2RlID0gbmV3IFRyZWVOb2RlKGxlZnRfZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUubGVmdCA9IGxlZnRfbm9kZTtcbiAgICAgICAgICAgICAgICAgICAgbmV4dF9sYXllcl9ub2RlX2Fyci5wdXNoKGxlZnRfbm9kZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5sZWZ0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgcmlnaHRfZGF0YSA9IGFyci5zaGlmdCgpIHx8IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKHJpZ2h0X2RhdGEgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByaWdodF9ub2RlID0gbmV3IFRyZWVOb2RlKHJpZ2h0X2RhdGEpO1xuICAgICAgICAgICAgICAgICAgICBub2RlLnJpZ2h0ID0gcmlnaHRfbm9kZTtcbiAgICAgICAgICAgICAgICAgICAgbmV4dF9sYXllcl9ub2RlX2Fyci5wdXNoKHJpZ2h0X25vZGUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUucmlnaHQgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGN1cnJlbnRfbGF5ZXJfbm9kZV9hcnIgPSBbLi4ubmV4dF9sYXllcl9ub2RlX2Fycl07XG4gICAgICAgIG5leHRfbGF5ZXJfbm9kZV9hcnIubGVuZ3RoID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIHJvb3Q7XG5cbn1cblxuXG5leHBvcnQge1xuICAgIGNyZWF0ZUJpbmFyeVRyZWUsXG4gICAgVHJlZU5vZGUsXG59O1xuIl19