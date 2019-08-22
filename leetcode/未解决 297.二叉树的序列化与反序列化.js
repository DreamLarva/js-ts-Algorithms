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
        current_layer_node_arr.forEach(node => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoi5pyq6Kej5YazIDI5Ny7kuozlj4nmoJHnmoTluo/liJfljJbkuI7lj43luo/liJfljJYuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlL+acquino+WGsyAyOTcu5LqM5Y+J5qCR55qE5bqP5YiX5YyW5LiO5Y+N5bqP5YiX5YyWLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBdUJJO0FBQ0osbURBQTRDO0FBQzVDLG9EQUF1QjtBQUd2Qjs7OztHQUlHO0FBQ0gsSUFBSSxTQUFTLEdBQUcsVUFBVSxJQUE2QjtJQUNuRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDaEQsQ0FBQyxDQUFDO0FBRUYsU0FBUyxjQUFjLENBQUksSUFBc0I7SUFDN0MsSUFBSSxJQUFJLEtBQUssSUFBSTtRQUFFLE9BQU8sSUFBSSxDQUFDO0lBQy9CLE1BQU0sTUFBTSxHQUFpQixFQUFFLENBQUM7SUFDaEMsTUFBTSxLQUFLLEdBQXlCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0MsT0FBTyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUN2QixNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsS0FBSyxFQUFHLENBQUM7UUFDNUIsSUFBSSxJQUFJLEtBQUssSUFBSSxFQUFDO1lBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixTQUFRO1NBQ1g7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QixJQUFJLElBQUksQ0FBQyxJQUFJO1lBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7O1lBQ2hDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsSUFBSSxJQUFJLENBQUMsS0FBSztZQUFFLEtB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LENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNsRCxpQkFBaUIsQ0FDcEIsQ0FBQztBQUVGLGdCQUFNLENBQUMsZUFBZSxDQUNsQixXQUFXLENBQUMsSUFBSSxDQUFDLEVBQ2pCLElBQUksQ0FDUCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxu5bqP5YiX5YyW5piv5bCG5LiA5Liq5pWw5o2u57uT5p6E5oiW6ICF5a+56LGh6L2s5o2i5Li66L+e57ut55qE5q+U54m55L2N55qE5pON5L2c77yM6L+b6ICM5Y+v5Lul5bCG6L2s5o2i5ZCO55qE5pWw5o2u5a2Y5YKo5Zyo5LiA5Liq5paH5Lu25oiW6ICF5YaF5a2Y5Lit77yM5ZCM5pe25Lmf5Y+v5Lul6YCa6L+H572R57uc5Lyg6L6T5Yiw5Y+m5LiA5Liq6K6h566X5py6546v5aKD77yM6YeH5Y+W55u45Y+N5pa55byP6YeN5p6E5b6X5Yiw5Y6f5pWw5o2u44CCXHJcblxyXG7or7forr7orqHkuIDkuKrnrpfms5XmnaXlrp7njrDkuozlj4nmoJHnmoTluo/liJfljJbkuI7lj43luo/liJfljJbjgILov5nph4zkuI3pmZDlrprkvaDnmoTluo/liJcgLyDlj43luo/liJfljJbnrpfms5XmiafooYzpgLvovpHvvIzkvaDlj6rpnIDopoHkv53or4HkuIDkuKrkuozlj4nmoJHlj6/ku6Xooqvluo/liJfljJbkuLrkuIDkuKrlrZfnrKbkuLLlubbkuJTlsIbov5nkuKrlrZfnrKbkuLLlj43luo/liJfljJbkuLrljp/lp4vnmoTmoJHnu5PmnoTjgIJcclxuXHJcbuekuuS+izrCoFxyXG5cclxu5L2g5Y+v5Lul5bCG5Lul5LiL5LqM5Y+J5qCR77yaXHJcblxyXG4gICAgMVxyXG4gICAvIFxcXHJcbiAgMiAgIDNcclxuICAgICAvIFxcXHJcbiAgICA0ICAgNVxyXG5cclxu5bqP5YiX5YyW5Li6IFwiWzEsMiwzLG51bGwsbnVsbCw0LDVdXCJcclxu5o+Q56S6OsKg6L+Z5LiOIExlZXRDb2RlIOebruWJjeS9v+eUqOeahOaWueW8j+S4gOiHtO+8jOivpuaDheivt+WPgumYhcKgTGVldENvZGUg5bqP5YiX5YyW5LqM5Y+J5qCR55qE5qC85byP44CC5L2g5bm26Z2e5b+F6aG76YeH5Y+W6L+Z56eN5pa55byP77yM5L2g5Lmf5Y+v5Lul6YeH55So5YW25LuW55qE5pa55rOV6Kej5Yaz6L+Z5Liq6Zeu6aKY44CCXHJcblxyXG7or7TmmI46wqDkuI3opoHkvb/nlKjnsbvnmoTmiJDlkZggLyDlhajlsYAgLyDpnZnmgIHlj5jph4/mnaXlrZjlgqjnirbmgIHvvIzkvaDnmoTluo/liJfljJblkozlj43luo/liJfljJbnrpfms5XlupTor6XmmK/ml6DnirbmgIHnmoTjgIJcclxuXHJcbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXHJcbumTvuaOpe+8mmh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL3NlcmlhbGl6ZS1hbmQtZGVzZXJpYWxpemUtYmluYXJ5LXRyZWVcclxu6JGX5L2c5p2D5b2S6aKG5omj572R57uc5omA5pyJ44CC5ZWG5Lia6L2s6L296K+36IGU57O75a6Y5pa55o6I5p2D77yM6Z2e5ZWG5Lia6L2s6L296K+35rOo5piO5Ye65aSE44CCXHJcbiogKi9cclxuaW1wb3J0IHtUcmVlTm9kZX0gZnJvbSBcIi4uL3V0aWwvQmluYXJ5VHJlZVwiO1xyXG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG5cclxuLyoqXHJcbiAqIEVuY29kZXMgYSB0cmVlIHRvIGEgc2luZ2xlIHN0cmluZy5cclxuICogQHBhcmFtIHtUcmVlTm9kZX0gcm9vdFxyXG4gKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAqL1xyXG52YXIgc2VyaWFsaXplID0gZnVuY3Rpb24gKHJvb3Q6IFRyZWVOb2RlPG51bWJlcj4gfCBudWxsKSB7XHJcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkobGV2ZWxUcmF2ZXJzYWwocm9vdCkpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gbGV2ZWxUcmF2ZXJzYWw8VD4ocm9vdDogVHJlZU5vZGU8VD58bnVsbCkge1xyXG4gICAgaWYgKHJvb3QgPT09IG51bGwpIHJldHVybiBudWxsO1xyXG4gICAgY29uc3QgcmVzdWx0OiAoVCB8IG51bGwpW10gPSBbXTtcclxuICAgIGNvbnN0IHN0YWNrOiAoVHJlZU5vZGU8VD58bnVsbClbXSA9IFtyb290XTtcclxuICAgIHdoaWxlIChzdGFjay5sZW5ndGggIT09IDApIHtcclxuICAgICAgICBjb25zdCBub2RlID0gc3RhY2suc2hpZnQoKSE7XHJcbiAgICAgICAgaWYgKG5vZGUgPT09IG51bGwpe1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChub2RlKTtcclxuICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzdWx0LnB1c2gobm9kZS52YWwpO1xyXG4gICAgICAgIGlmIChub2RlLmxlZnQpIHN0YWNrLnB1c2gobm9kZS5sZWZ0KTtcclxuICAgICAgICBlbHNlIHN0YWNrLnB1c2gobnVsbCk7XHJcbiAgICAgICAgaWYgKG5vZGUucmlnaHQpIHN0YWNrLnB1c2gobm9kZS5yaWdodCk7XHJcbiAgICAgICAgZWxzZSBzdGFjay5wdXNoKG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOWkhOeQhue7k+aenCDmiorlsL7pg6jlpJrkvZnnmoRcclxuICAgIHdoaWxlIChfLmxhc3QocmVzdWx0KSA9PT0gbnVsbCl7XHJcbiAgICAgICAgcmVzdWx0LnBvcCgpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vKipcclxuICogRGVjb2RlcyB5b3VyIGVuY29kZWQgZGF0YSB0byB0cmVlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gZGF0YVxyXG4gKiBAcmV0dXJuIHtUcmVlTm9kZX1cclxuICovXHJcbnZhciBkZXNlcmlhbGl6ZSA9IGZ1bmN0aW9uIChkYXRhOiBzdHJpbmd8bnVsbCkge1xyXG4gICAgaWYoZGF0YSA9PT0gbnVsbClyZXR1cm4gbnVsbDtcclxuICAgIHJldHVybiBjcmVhdGVCaW5hcnlUcmVlKEpTT04ucGFyc2UoZGF0YSkpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlQmluYXJ5VHJlZTxUPihhcnI6IChUIHwgbnVsbClbXSkge1xyXG4gICAgY29uc3Qgcm9vdDogVHJlZU5vZGU8VD4gPSBuZXcgVHJlZU5vZGUoYXJyLnNoaWZ0KCkhKTsgLy8g5qC56IqC54K55LiN5Li6bnVsbFxyXG4gICAgbGV0IGN1cnJlbnRfbGF5ZXJfbm9kZV9hcnIgPSBbcm9vdF07XHJcbiAgICBjb25zdCBuZXh0X2xheWVyX25vZGVfYXJyOiBUcmVlTm9kZTxUPltdID0gW107XHJcbiAgICAvLyDlsIbmr4/kuKrmlL7liLAg5LqM5Y+J5qCR5LiKIOWmguaenOi/mOWJqeS9meiKgueCuemCo+S5iOi/meS6m+iKgueCuSDnmoTlrZDoioLngrnlhajpg6jorr7kuLpudWxsXHJcbiAgICB3aGlsZSAoYXJyLmxlbmd0aCB8fCBuZXh0X2xheWVyX25vZGVfYXJyLmxlbmd0aCkge1xyXG4gICAgICAgIGN1cnJlbnRfbGF5ZXJfbm9kZV9hcnIuZm9yRWFjaChub2RlID0+IHtcclxuICAgICAgICAgICAgaWYgKG5vZGUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHNoaWZ0RGF0YSA9IGFyci5zaGlmdCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGVmdF9kYXRhID0gc2hpZnREYXRhID09IG51bGwgPyBudWxsIDogc2hpZnREYXRhOyAvLyDpgb/lhY3mlbDmja7lh7rnjrAgMCDnmoTmg4XlhrVcclxuICAgICAgICAgICAgICAgIGlmIChsZWZ0X2RhdGEgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxlZnRfbm9kZSA9IG5ldyBUcmVlTm9kZShsZWZ0X2RhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUubGVmdCA9IGxlZnRfbm9kZTtcclxuICAgICAgICAgICAgICAgICAgICBuZXh0X2xheWVyX25vZGVfYXJyLnB1c2gobGVmdF9ub2RlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5sZWZ0ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNoaWZ0RGF0YSA9IGFyci5zaGlmdCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmlnaHRfZGF0YSA9IHNoaWZ0RGF0YSA9PSBudWxsID8gbnVsbCA6IHNoaWZ0RGF0YTtcclxuICAgICAgICAgICAgICAgIGlmIChyaWdodF9kYXRhICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByaWdodF9ub2RlID0gbmV3IFRyZWVOb2RlKHJpZ2h0X2RhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUucmlnaHQgPSByaWdodF9ub2RlO1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHRfbGF5ZXJfbm9kZV9hcnIucHVzaChyaWdodF9ub2RlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5yaWdodCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBjdXJyZW50X2xheWVyX25vZGVfYXJyID0gWy4uLm5leHRfbGF5ZXJfbm9kZV9hcnJdO1xyXG4gICAgICAgIG5leHRfbGF5ZXJfbm9kZV9hcnIubGVuZ3RoID0gMDtcclxuICAgIH1cclxuICAgIHJldHVybiByb290O1xyXG5cclxufVxyXG5cclxuXHJcbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xyXG5cclxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcclxuICAgIHNlcmlhbGl6ZShjcmVhdGVCaW5hcnlUcmVlKFsxLCAyLCAzLCBudWxsLCBudWxsLCA0LCA1XSkpLFxyXG4gICAgXCJbMSwyLDMsbnVsbCxudWxsLDQsNV1cIixcclxuKTtcclxuXHJcblxyXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxyXG4gICAgc2VyaWFsaXplKGNyZWF0ZUJpbmFyeVRyZWUoWzEsIDIsIDMsIDQsIDUsIDYsIDddKSksXHJcbiAgICBcIlsxLDIsMyw0LDUsNiw3XVwiLFxyXG4pO1xyXG5cclxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcclxuICAgIGRlc2VyaWFsaXplKG51bGwpLFxyXG4gICAgbnVsbCxcclxuKTtcclxuIl19