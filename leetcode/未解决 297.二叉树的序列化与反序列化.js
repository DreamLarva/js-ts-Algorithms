"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
序列化是将一个数据结构或者对象转换为连续的比特位的操作，进而可以将转换后的数据存储在一个文件或者内存中，同时也可以通过网络传输到另一个计算机环境，采取相反方式重构得到原数据。

请设计一个算法来实现二叉树的序列化与反序列化。这里不限定你的序列 / 反序列化算法执行逻辑，你只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串反序列化为原始的树结构。

示例:

你可以将以下二叉树：

    1
   / \
  2   3
     / \
    4   5

序列化为 "[1,2,3,null,null,4,5]"
提示: 这与 LeetCode 目前使用的方式一致，详情请参阅 LeetCode 序列化二叉树的格式。你并非必须采取这种方式，你也可以采用其他的方法解决这个问题。

说明: 不要使用类的成员 / 全局 / 静态变量来存储状态，你的序列化和反序列化算法应该是无状态的。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/serialize-and-deserialize-binary-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
const BinaryTree_1 = require("../util/BinaryTree");
const lodash_1 = __importDefault(require("lodash"));
/**
 * Encodes a tree to a single string.
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    return JSON.stringify(levelTraversal(root));
};
function levelTraversal(root) {
    if (root === null)
        return null;
    const result = [];
    const stack = [root];
    while (stack.length !== 0) {
        const node = stack.shift();
        if (node === null) {
            result.push(node);
            continue;
        }
        result.push(node.val);
        if (node.left)
            stack.push(node.left);
        else
            stack.push(null);
        if (node.right)
            stack.push(node.right);
        else
            stack.push(null);
    }
    // 处理结果 把尾部多余的
    while (lodash_1.default.last(result) === null) {
        result.pop();
    }
    return result;
}
/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    if (data === null)
        return null;
    return createBinaryTree(JSON.parse(data));
};
function createBinaryTree(arr) {
    const root = new BinaryTree_1.TreeNode(arr.shift()); // 根节点不为null
    let current_layer_node_arr = [root];
    const next_layer_node_arr = [];
    // 将每个放到 二叉树上 如果还剩余节点那么这些节点 的子节点全部设为null
    while (arr.length || next_layer_node_arr.length) {
        current_layer_node_arr.forEach((node) => {
            if (node != null) {
                let shiftData = arr.shift();
                const left_data = shiftData == null ? null : shiftData; // 避免数据出现 0 的情况
                if (left_data != null) {
                    const left_node = new BinaryTree_1.TreeNode(left_data);
                    node.left = left_node;
                    next_layer_node_arr.push(left_node);
                }
                else {
                    node.left = null;
                }
                shiftData = arr.shift();
                const right_data = shiftData == null ? null : shiftData;
                if (right_data != null) {
                    const right_node = new BinaryTree_1.TreeNode(right_data);
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
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual(serialize(createBinaryTree([1, 2, 3, null, null, 4, 5])), "[1,2,3,null,null,4,5]");
assert_1.default.deepStrictEqual(serialize(createBinaryTree([1, 2, 3, 4, 5, 6, 7])), "[1,2,3,4,5,6,7]");
assert_1.default.deepStrictEqual(deserialize(null), null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoi5pyq6Kej5YazIDI5Ny7kuozlj4nmoJHnmoTluo/liJfljJbkuI7lj43luo/liJfljJYuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlL+acquino+WGsyAyOTcu5LqM5Y+J5qCR55qE5bqP5YiX5YyW5LiO5Y+N5bqP5YiX5YyWLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBdUJJO0FBQ0osbURBQThDO0FBQzlDLG9EQUF1QjtBQUV2Qjs7OztHQUlHO0FBQ0gsSUFBSSxTQUFTLEdBQUcsVUFBVSxJQUE2QjtJQUNyRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDOUMsQ0FBQyxDQUFDO0FBRUYsU0FBUyxjQUFjLENBQUksSUFBd0I7SUFDakQsSUFBSSxJQUFJLEtBQUssSUFBSTtRQUFFLE9BQU8sSUFBSSxDQUFDO0lBQy9CLE1BQU0sTUFBTSxHQUFpQixFQUFFLENBQUM7SUFDaEMsTUFBTSxLQUFLLEdBQTJCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0MsT0FBTyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUN6QixNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsS0FBSyxFQUFHLENBQUM7UUFDNUIsSUFBSSxJQUFJLEtBQUssSUFBSSxFQUFFO1lBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsU0FBUztTQUNWO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEIsSUFBSSxJQUFJLENBQUMsSUFBSTtZQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOztZQUNoQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLElBQUksSUFBSSxDQUFDLEtBQUs7WUFBRSxL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QyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNsRCxpQkFBaUIsQ0FDbEIsQ0FBQztBQUVGLGdCQUFNLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7luo/liJfljJbmmK/lsIbkuIDkuKrmlbDmja7nu5PmnoTmiJbogIXlr7nosaHovazmjaLkuLrov57nu63nmoTmr5TnibnkvY3nmoTmk43kvZzvvIzov5vogIzlj6/ku6XlsIbovazmjaLlkI7nmoTmlbDmja7lrZjlgqjlnKjkuIDkuKrmlofku7bmiJbogIXlhoXlrZjkuK3vvIzlkIzml7bkuZ/lj6/ku6XpgJrov4fnvZHnu5zkvKDovpPliLDlj6bkuIDkuKrorqHnrpfmnLrnjq/looPvvIzph4flj5bnm7jlj43mlrnlvI/ph43mnoTlvpfliLDljp/mlbDmja7jgIJcblxu6K+36K6+6K6h5LiA5Liq566X5rOV5p2l5a6e546w5LqM5Y+J5qCR55qE5bqP5YiX5YyW5LiO5Y+N5bqP5YiX5YyW44CC6L+Z6YeM5LiN6ZmQ5a6a5L2g55qE5bqP5YiXIC8g5Y+N5bqP5YiX5YyW566X5rOV5omn6KGM6YC76L6R77yM5L2g5Y+q6ZyA6KaB5L+d6K+B5LiA5Liq5LqM5Y+J5qCR5Y+v5Lul6KKr5bqP5YiX5YyW5Li65LiA5Liq5a2X56ym5Liy5bm25LiU5bCG6L+Z5Liq5a2X56ym5Liy5Y+N5bqP5YiX5YyW5Li65Y6f5aeL55qE5qCR57uT5p6E44CCXG5cbuekuuS+izrCoFxuXG7kvaDlj6/ku6XlsIbku6XkuIvkuozlj4nmoJHvvJpcblxuICAgIDFcbiAgIC8gXFxcbiAgMiAgIDNcbiAgICAgLyBcXFxuICAgIDQgICA1XG5cbuW6j+WIl+WMluS4uiBcIlsxLDIsMyxudWxsLG51bGwsNCw1XVwiXG7mj5DnpLo6wqDov5nkuI4gTGVldENvZGUg55uu5YmN5L2/55So55qE5pa55byP5LiA6Ie077yM6K+m5oOF6K+35Y+C6ZiFwqBMZWV0Q29kZSDluo/liJfljJbkuozlj4nmoJHnmoTmoLzlvI/jgILkvaDlubbpnZ7lv4Xpobvph4flj5bov5nnp43mlrnlvI/vvIzkvaDkuZ/lj6/ku6Xph4fnlKjlhbbku5bnmoTmlrnms5Xop6PlhrPov5nkuKrpl67popjjgIJcblxu6K+05piOOsKg5LiN6KaB5L2/55So57G755qE5oiQ5ZGYIC8g5YWo5bGAIC8g6Z2Z5oCB5Y+Y6YeP5p2l5a2Y5YKo54q25oCB77yM5L2g55qE5bqP5YiX5YyW5ZKM5Y+N5bqP5YiX5YyW566X5rOV5bqU6K+l5piv5peg54q25oCB55qE44CCXG5cbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXG7pk77mjqXvvJpodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9zZXJpYWxpemUtYW5kLWRlc2VyaWFsaXplLWJpbmFyeS10cmVlXG7okZfkvZzmnYPlvZLpoobmiaPnvZHnu5zmiYDmnInjgILllYbkuJrovazovb3or7fogZTns7vlrpjmlrnmjojmnYPvvIzpnZ7llYbkuJrovazovb3or7fms6jmmI7lh7rlpITjgIJcbiogKi9cbmltcG9ydCB7IFRyZWVOb2RlIH0gZnJvbSBcIi4uL3V0aWwvQmluYXJ5VHJlZVwiO1xuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuXG4vKipcbiAqIEVuY29kZXMgYSB0cmVlIHRvIGEgc2luZ2xlIHN0cmluZy5cbiAqIEBwYXJhbSB7VHJlZU5vZGV9IHJvb3RcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xudmFyIHNlcmlhbGl6ZSA9IGZ1bmN0aW9uIChyb290OiBUcmVlTm9kZTxudW1iZXI+IHwgbnVsbCkge1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkobGV2ZWxUcmF2ZXJzYWwocm9vdCkpO1xufTtcblxuZnVuY3Rpb24gbGV2ZWxUcmF2ZXJzYWw8VD4ocm9vdDogVHJlZU5vZGU8VD4gfCBudWxsKSB7XG4gIGlmIChyb290ID09PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgY29uc3QgcmVzdWx0OiAoVCB8IG51bGwpW10gPSBbXTtcbiAgY29uc3Qgc3RhY2s6IChUcmVlTm9kZTxUPiB8IG51bGwpW10gPSBbcm9vdF07XG4gIHdoaWxlIChzdGFjay5sZW5ndGggIT09IDApIHtcbiAgICBjb25zdCBub2RlID0gc3RhY2suc2hpZnQoKSE7XG4gICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgIHJlc3VsdC5wdXNoKG5vZGUpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIHJlc3VsdC5wdXNoKG5vZGUudmFsKTtcbiAgICBpZiAobm9kZS5sZWZ0KSBzdGFjay5wdXNoKG5vZGUubGVmdCk7XG4gICAgZWxzZSBzdGFjay5wdXNoKG51bGwpO1xuICAgIGlmIChub2RlLnJpZ2h0KSBzdGFjay5wdXNoKG5vZGUucmlnaHQpO1xuICAgIGVsc2Ugc3RhY2sucHVzaChudWxsKTtcbiAgfVxuXG4gIC8vIOWkhOeQhue7k+aenCDmiorlsL7pg6jlpJrkvZnnmoRcbiAgd2hpbGUgKF8ubGFzdChyZXN1bHQpID09PSBudWxsKSB7XG4gICAgcmVzdWx0LnBvcCgpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRGVjb2RlcyB5b3VyIGVuY29kZWQgZGF0YSB0byB0cmVlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhXG4gKiBAcmV0dXJuIHtUcmVlTm9kZX1cbiAqL1xudmFyIGRlc2VyaWFsaXplID0gZnVuY3Rpb24gKGRhdGE6IHN0cmluZyB8IG51bGwpIHtcbiAgaWYgKGRhdGEgPT09IG51bGwpIHJldHVybiBudWxsO1xuICByZXR1cm4gY3JlYXRlQmluYXJ5VHJlZShKU09OLnBhcnNlKGRhdGEpKTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJpbmFyeVRyZWU8VD4oYXJyOiAoVCB8IG51bGwpW10pIHtcbiAgY29uc3Qgcm9vdDogVHJlZU5vZGU8VD4gPSBuZXcgVHJlZU5vZGUoYXJyLnNoaWZ0KCkhKTsgLy8g5qC56IqC54K55LiN5Li6bnVsbFxuICBsZXQgY3VycmVudF9sYXllcl9ub2RlX2FyciA9IFtyb290XTtcbiAgY29uc3QgbmV4dF9sYXllcl9ub2RlX2FycjogVHJlZU5vZGU8VD5bXSA9IFtdO1xuICAvLyDlsIbmr4/kuKrmlL7liLAg5LqM5Y+J5qCR5LiKIOWmguaenOi/mOWJqeS9meiKgueCuemCo+S5iOi/meS6m+iKgueCuSDnmoTlrZDoioLngrnlhajpg6jorr7kuLpudWxsXG4gIHdoaWxlIChhcnIubGVuZ3RoIHx8IG5leHRfbGF5ZXJfbm9kZV9hcnIubGVuZ3RoKSB7XG4gICAgY3VycmVudF9sYXllcl9ub2RlX2Fyci5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICBpZiAobm9kZSAhPSBudWxsKSB7XG4gICAgICAgIGxldCBzaGlmdERhdGEgPSBhcnIuc2hpZnQoKTtcbiAgICAgICAgY29uc3QgbGVmdF9kYXRhID0gc2hpZnREYXRhID09IG51bGwgPyBudWxsIDogc2hpZnREYXRhOyAvLyDpgb/lhY3mlbDmja7lh7rnjrAgMCDnmoTmg4XlhrVcbiAgICAgICAgaWYgKGxlZnRfZGF0YSAhPSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgbGVmdF9ub2RlID0gbmV3IFRyZWVOb2RlKGxlZnRfZGF0YSk7XG4gICAgICAgICAgbm9kZS5sZWZ0ID0gbGVmdF9ub2RlO1xuICAgICAgICAgIG5leHRfbGF5ZXJfbm9kZV9hcnIucHVzaChsZWZ0X25vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vZGUubGVmdCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgc2hpZnREYXRhID0gYXJyLnNoaWZ0KCk7XG4gICAgICAgIGNvbnN0IHJpZ2h0X2RhdGEgPSBzaGlmdERhdGEgPT0gbnVsbCA/IG51bGwgOiBzaGlmdERhdGE7XG4gICAgICAgIGlmIChyaWdodF9kYXRhICE9IG51bGwpIHtcbiAgICAgICAgICBjb25zdCByaWdodF9ub2RlID0gbmV3IFRyZWVOb2RlKHJpZ2h0X2RhdGEpO1xuICAgICAgICAgIG5vZGUucmlnaHQgPSByaWdodF9ub2RlO1xuICAgICAgICAgIG5leHRfbGF5ZXJfbm9kZV9hcnIucHVzaChyaWdodF9ub2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub2RlLnJpZ2h0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIGN1cnJlbnRfbGF5ZXJfbm9kZV9hcnIgPSBbLi4ubmV4dF9sYXllcl9ub2RlX2Fycl07XG4gICAgbmV4dF9sYXllcl9ub2RlX2Fyci5sZW5ndGggPSAwO1xuICB9XG4gIHJldHVybiByb290O1xufVxuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAgc2VyaWFsaXplKGNyZWF0ZUJpbmFyeVRyZWUoWzEsIDIsIDMsIG51bGwsIG51bGwsIDQsIDVdKSksXG4gIFwiWzEsMiwzLG51bGwsbnVsbCw0LDVdXCJcbik7XG5cbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gIHNlcmlhbGl6ZShjcmVhdGVCaW5hcnlUcmVlKFsxLCAyLCAzLCA0LCA1LCA2LCA3XSkpLFxuICBcIlsxLDIsMyw0LDUsNiw3XVwiXG4pO1xuXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKGRlc2VyaWFsaXplKG51bGwpLCBudWxsKTtcbiJdfQ==