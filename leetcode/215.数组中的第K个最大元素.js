"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

示例 1:

输入: [3,2,1,5,6,4] 和 k = 2
输出: 5
示例 2:

输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
输出: 4
说明:

你可以假设 k 总是有效的，且 1 ≤ k ≤ 数组的长度。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/kth-largest-element-in-an-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
const lodash_1 = __importDefault(require("lodash"));
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    /**
     * 方法一 不断的堆化(求第k大的值 用**最小堆**) 并且保持 一定的长度(k)
     * 慢的一b
     * */
    const minHeap = [];
    for (let i = 0; i < nums.length; i++) {
        // 优化 如果小于顶部 就直接 过
        if (minHeap.length === k && nums[i] < minHeap[0])
            continue;
        minHeap.push(nums[i]);
        heapifyWithSiftDown(minHeap);
        if (minHeap.length > k) {
            minHeap.shift();
        }
    }
    // 还必须再堆化一次 使最小值 在第一个
    heapifyWithSiftDown(minHeap);
    return minHeap[0];
    function heapifyWithSiftDown(A) {
        // 初始选择最接近叶子的一个父结点
        for (let i = Math.floor((A.length - 1) / 2); i >= 0; i--) {
            siftDown(A, i);
        }
        return A;
    }
    function siftDown(A, k) {
        // 此处是 最小堆
        while (k * 2 + 1 < A.length) {
            let son = k * 2 + 1;
            // 与其两个儿子中较小的一个比较
            if (k * 2 + 2 < A.length && A[son] > A[k * 2 + 2]) {
                son = k * 2 + 2;
            }
            // 若大于儿子，则与儿子交换。
            if (A[son] > A[k]) {
                break;
            }
            [A[son], A[k]] = [A[k], A[son]];
            // 交换后再与新的儿子比较并交换，直至没有儿子。
            k = son;
        }
    }
};
var findKthLargest_1 = function (nums, k) {
    /**
     * 方法二 快速选择法(Hoare 选择法)
     * */
    const size = nums.length;
    return quickSelect(0, size - 1, size - k);
    function partition(left, right, pivot_index) {
        let pivot = nums[pivot_index];
        // 现将 枢轴 换到末尾 方便 操作
        [nums[pivot_index], nums[right]] = [nums[right], nums[pivot_index]];
        // 存储 枢轴新的位置
        let store_index = left;
        // 枢轴的值 放到左边
        for (let i = left; i <= right; i++) {
            if (nums[i] < pivot) {
                [nums[store_index], nums[i]] = [nums[i], nums[store_index]];
                store_index++;
            }
        }
        // 将在最末尾的枢轴的值 放到新的位置
        [nums[store_index], nums[right]] = [nums[right], nums[store_index]];
        return store_index;
    }
    function quickSelect(left, right, k_smallest) {
        // 如果 左右为 同一个值 那么说明 只有一个值 不需要再选择了
        if (left === right) {
            return nums[left];
        }
        // 随机 用一个值作为 index 作为枢轴 并且返回 枢轴的 index
        let pivot_index = partition(left, right, lodash_1.default.random(left, right - 1)); // lodash 的 random 是含头 含尾的
        if (k_smallest === pivot_index)
            return nums[k_smallest];
        // 如果 枢轴的 index 小于 k_smallest 说明 值 还在有枢轴的右侧
        else if (k_smallest < pivot_index)
            return quickSelect(left, pivot_index - 1, k_smallest);
        // 如果 枢轴的 index 大于 k_smallest 说明 值 还在有枢轴的左侧
        return quickSelect(pivot_index + 1, right, k_smallest);
    }
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(findKthLargest([3, 2, 1, 5, 6, 4], 2), 5);
assert_1.default.strictEqual(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4), 4);
assert_1.default.strictEqual(findKthLargest_1([3, 2, 1, 5, 6, 4], 2), 5);
assert_1.default.strictEqual(findKthLargest_1([3, 2, 3, 1, 2, 4, 5, 5, 6], 4), 4);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjE1LuaVsOe7hOS4reeahOesrEvkuKrmnIDlpKflhYPntKAuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzIxNS7mlbDnu4TkuK3nmoTnrKxL5Liq5pyA5aSn5YWD57SgLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWtCSTtBQUNKLG9EQUF1QjtBQUV2Qjs7OztHQUlHO0FBQ0gsSUFBSSxjQUFjLEdBQUcsVUFBVSxJQUFjLEVBQUUsQ0FBUztJQUN0RDs7O1NBR0s7SUFDTCxNQUFNLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDbkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDcEMsa0JBQWtCO1FBQ2xCLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFBRSxTQUFTO1FBQzNELE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEIsbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0IsSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN0QixPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDakI7S0FDRjtJQUNELHFCQUFxQjtJQUNyQixtQkFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QixPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVsQixTQUFTLG1CQUFtQixDQUFDLENBQVc7UUFDdEMsa0JBQWtCO1FBQ2xCLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJ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QUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7lnKjmnKrmjpLluo/nmoTmlbDnu4TkuK3mib7liLDnrKwgayDkuKrmnIDlpKfnmoTlhYPntKDjgILor7fms6jmhI/vvIzkvaDpnIDopoHmib7nmoTmmK/mlbDnu4TmjpLluo/lkI7nmoTnrKwgayDkuKrmnIDlpKfnmoTlhYPntKDvvIzogIzkuI3mmK/nrKwgayDkuKrkuI3lkIznmoTlhYPntKDjgIJcblxu56S65L6LIDE6XG5cbui+k+WFpTogWzMsMiwxLDUsNiw0XSDlkowgayA9IDJcbui+k+WHujogNVxu56S65L6LIDI6XG5cbui+k+WFpTogWzMsMiwzLDEsMiw0LDUsNSw2XSDlkowgayA9IDRcbui+k+WHujogNFxu6K+05piOOlxuXG7kvaDlj6/ku6XlgYforr4gayDmgLvmmK/mnInmlYjnmoTvvIzkuJQgMSDiiaQgayDiiaQg5pWw57uE55qE6ZW/5bqm44CCXG5cbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXG7pk77mjqXvvJpodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9rdGgtbGFyZ2VzdC1lbGVtZW50LWluLWFuLWFycmF5XG7okZfkvZzmnYPlvZLpoobmiaPnvZHnu5zmiYDmnInjgILllYbkuJrovazovb3or7fogZTns7vlrpjmlrnmjojmnYPvvIzpnZ7llYbkuJrovazovb3or7fms6jmmI7lh7rlpITjgIJcbiogKi9cbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcltdfSBudW1zXG4gKiBAcGFyYW0ge251bWJlcn0ga1xuICogQHJldHVybiB7bnVtYmVyfVxuICovXG52YXIgZmluZEt0aExhcmdlc3QgPSBmdW5jdGlvbiAobnVtczogbnVtYmVyW10sIGs6IG51bWJlcikge1xuICAvKipcbiAgICog5pa55rOV5LiAIOS4jeaWreeahOWghuWMlijmsYLnrKxr5aSn55qE5YC8IOeUqCoq5pyA5bCP5aCGKiopIOW5tuS4lOS/neaMgSDkuIDlrprnmoTplb/luqYoaylcbiAgICog5oWi55qE5LiAYlxuICAgKiAqL1xuICBjb25zdCBtaW5IZWFwID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtcy5sZW5ndGg7IGkrKykge1xuICAgIC8vIOS8mOWMliDlpoLmnpzlsI/kuo7pobbpg6gg5bCx55u05o6lIOi/h1xuICAgIGlmIChtaW5IZWFwLmxlbmd0aCA9PT0gayAmJiBudW1zW2ldIDwgbWluSGVhcFswXSkgY29udGludWU7XG4gICAgbWluSGVhcC5wdXNoKG51bXNbaV0pO1xuICAgIGhlYXBpZnlXaXRoU2lmdERvd24obWluSGVhcCk7XG4gICAgaWYgKG1pbkhlYXAubGVuZ3RoID4gaykge1xuICAgICAgbWluSGVhcC5zaGlmdCgpO1xuICAgIH1cbiAgfVxuICAvLyDov5jlv4Xpobvlho3loIbljJbkuIDmrKEg5L2/5pyA5bCP5YC8IOWcqOesrOS4gOS4qlxuICBoZWFwaWZ5V2l0aFNpZnREb3duKG1pbkhlYXApO1xuICByZXR1cm4gbWluSGVhcFswXTtcblxuICBmdW5jdGlvbiBoZWFwaWZ5V2l0aFNpZnREb3duKEE6IG51bWJlcltdKSB7XG4gICAgLy8g5Yid5aeL6YCJ5oup5pyA5o6l6L+R5Y+25a2Q55qE5LiA5Liq54i257uT54K5XG4gICAgZm9yIChsZXQgaSA9IE1hdGguZmxvb3IoKEEubGVuZ3RoIC0gMSkgLyAyKTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHNpZnREb3duKEEsIGkpO1xuICAgIH1cblxuICAgIHJldHVybiBBO1xuICB9XG5cbiAgZnVuY3Rpb24gc2lmdERvd24oQTogbnVtYmVyW10sIGs6IG51bWJlcikge1xuICAgIC8vIOatpOWkhOaYryDmnIDlsI/loIZcbiAgICB3aGlsZSAoayAqIDIgKyAxIDwgQS5sZW5ndGgpIHtcbiAgICAgIGxldCBzb24gPSBrICogMiArIDE7XG4gICAgICAvLyDkuI7lhbbkuKTkuKrlhL/lrZDkuK3ovoPlsI/nmoTkuIDkuKrmr5TovoNcbiAgICAgIGlmIChrICogMiArIDIgPCBBLmxlbmd0aCAmJiBBW3Nvbl0gPiBBW2sgKiAyICsgMl0pIHtcbiAgICAgICAgc29uID0gayAqIDIgKyAyO1xuICAgICAgfVxuXG4gICAgICAvLyDoi6XlpKfkuo7lhL/lrZDvvIzliJnkuI7lhL/lrZDkuqTmjaLjgIJcbiAgICAgIGlmIChBW3Nvbl0gPiBBW2tdKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgW0Fbc29uXSwgQVtrXV0gPSBbQVtrXSwgQVtzb25dXTtcbiAgICAgIC8vIOS6pOaNouWQjuWGjeS4juaWsOeahOWEv+WtkOavlOi+g+W5tuS6pOaNou+8jOebtOiHs+ayoeacieWEv+WtkOOAglxuICAgICAgayA9IHNvbjtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBmaW5kS3RoTGFyZ2VzdF8xID0gZnVuY3Rpb24gKG51bXM6IG51bWJlcltdLCBrOiBudW1iZXIpIHtcbiAgLyoqXG4gICAqIOaWueazleS6jCDlv6vpgJ/pgInmi6nms5UoSG9hcmUg6YCJ5oup5rOVKVxuICAgKiAqL1xuICBjb25zdCBzaXplID0gbnVtcy5sZW5ndGg7XG4gIHJldHVybiBxdWlja1NlbGVjdCgwLCBzaXplIC0gMSwgc2l6ZSAtIGspO1xuXG4gIGZ1bmN0aW9uIHBhcnRpdGlvbihsZWZ0OiBudW1iZXIsIHJpZ2h0OiBudW1iZXIsIHBpdm90X2luZGV4OiBudW1iZXIpIHtcbiAgICBsZXQgcGl2b3QgPSBudW1zW3Bpdm90X2luZGV4XTtcbiAgICAvLyDnjrDlsIYg5p6i6L20IOaNouWIsOacq+WwviDmlrnkvr8g5pON5L2cXG4gICAgW251bXNbcGl2b3RfaW5kZXhdLCBudW1zW3JpZ2h0XV0gPSBbbnVtc1tyaWdodF0sIG51bXNbcGl2b3RfaW5kZXhdXTtcbiAgICAvLyDlrZjlgqgg5p6i6L205paw55qE5L2N572uXG4gICAgbGV0IHN0b3JlX2luZGV4ID0gbGVmdDtcblxuICAgIC8vIOaeoui9tOeahOWAvCDmlL7liLDlt6bovrlcbiAgICBmb3IgKGxldCBpID0gbGVmdDsgaSA8PSByaWdodDsgaSsrKSB7XG4gICAgICBpZiAobnVtc1tpXSA8IHBpdm90KSB7XG4gICAgICAgIFtudW1zW3N0b3JlX2luZGV4XSwgbnVtc1tpXV0gPSBbbnVtc1tpXSwgbnVtc1tzdG9yZV9pbmRleF1dO1xuICAgICAgICBzdG9yZV9pbmRleCsrO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyDlsIblnKjmnIDmnKvlsL7nmoTmnqLovbTnmoTlgLwg5pS+5Yiw5paw55qE5L2N572uXG4gICAgW251bXNbc3RvcmVfaW5kZXhdLCBudW1zW3JpZ2h0XV0gPSBbbnVtc1tyaWdodF0sIG51bXNbc3RvcmVfaW5kZXhdXTtcbiAgICByZXR1cm4gc3RvcmVfaW5kZXg7XG4gIH1cblxuICBmdW5jdGlvbiBxdWlja1NlbGVjdChcbiAgICBsZWZ0OiBudW1iZXIsXG4gICAgcmlnaHQ6IG51bWJlcixcbiAgICBrX3NtYWxsZXN0OiBudW1iZXJcbiAgKTogbnVtYmVyIHtcbiAgICAvLyDlpoLmnpwg5bem5Y+z5Li6IOWQjOS4gOS4quWAvCDpgqPkuYjor7TmmI4g5Y+q5pyJ5LiA5Liq5YC8IOS4jemcgOimgeWGjemAieaLqeS6hlxuICAgIGlmIChsZWZ0ID09PSByaWdodCkge1xuICAgICAgcmV0dXJuIG51bXNbbGVmdF07XG4gICAgfVxuICAgIC8vIOmaj+acuiDnlKjkuIDkuKrlgLzkvZzkuLogaW5kZXgg5L2c5Li65p6i6L20IOW5tuS4lOi/lOWbniDmnqLovbTnmoQgaW5kZXhcbiAgICBsZXQgcGl2b3RfaW5kZXggPSBwYXJ0aXRpb24obGVmdCwgcmlnaHQsIF8ucmFuZG9tKGxlZnQsIHJpZ2h0IC0gMSkpOyAvLyBsb2Rhc2gg55qEIHJhbmRvbSDmmK/lkKvlpLQg5ZCr5bC+55qEXG5cbiAgICBpZiAoa19zbWFsbGVzdCA9PT0gcGl2b3RfaW5kZXgpIHJldHVybiBudW1zW2tfc21hbGxlc3RdO1xuICAgIC8vIOWmguaenCDmnqLovbTnmoQgaW5kZXgg5bCP5LqOIGtfc21hbGxlc3Qg6K+05piOIOWAvCDov5jlnKjmnInmnqLovbTnmoTlj7PkvqdcbiAgICBlbHNlIGlmIChrX3NtYWxsZXN0IDwgcGl2b3RfaW5kZXgpXG4gICAgICByZXR1cm4gcXVpY2tTZWxlY3QobGVmdCwgcGl2b3RfaW5kZXggLSAxLCBrX3NtYWxsZXN0KTtcbiAgICAvLyDlpoLmnpwg5p6i6L2055qEIGluZGV4IOWkp+S6jiBrX3NtYWxsZXN0IOivtOaYjiDlgLwg6L+Y5Zyo5pyJ5p6i6L2055qE5bem5L6nXG4gICAgcmV0dXJuIHF1aWNrU2VsZWN0KHBpdm90X2luZGV4ICsgMSwgcmlnaHQsIGtfc21hbGxlc3QpO1xuICB9XG59O1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuYXNzZXJ0LnN0cmljdEVxdWFsKGZpbmRLdGhMYXJnZXN0KFszLCAyLCAxLCA1LCA2LCA0XSwgMiksIDUpO1xuYXNzZXJ0LnN0cmljdEVxdWFsKGZpbmRLdGhMYXJnZXN0KFszLCAyLCAzLCAxLCAyLCA0LCA1LCA1LCA2XSwgNCksIDQpO1xuYXNzZXJ0LnN0cmljdEVxdWFsKGZpbmRLdGhMYXJnZXN0XzEoWzMsIDIsIDEsIDUsIDYsIDRdLCAyKSwgNSk7XG5hc3NlcnQuc3RyaWN0RXF1YWwoZmluZEt0aExhcmdlc3RfMShbMywgMiwgMywgMSwgMiwgNCwgNSwgNSwgNl0sIDQpLCA0KTtcbiJdfQ==