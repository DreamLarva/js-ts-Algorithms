"use strict";
/*
523. 连续的子数组和
给你一个整数数组 nums 和一个整数 k ，编写一个函数来判断该数组是否含有同时满足下述条件的连续子数组：

子数组大小 至少为 2 ，且
子数组元素总和为 k 的倍数。
如果存在，返回 true ；否则，返回 false 。

如果存在一个整数 n ，令整数 x 符合 x = n * k ，则称 x 是 k 的一个倍数。



示例 1：

输入：nums = [23,2,4,6,7], k = 6
输出：true
解释：[2,4] 是一个大小为 2 的子数组，并且和为 6 。
示例 2：

输入：nums = [23,2,6,4,7], k = 6
输出：true
解释：[23, 2, 6, 4, 7] 是大小为 5 的子数组，并且和为 42 。
42 是 6 的倍数，因为 42 = 7 * 6 且 7 是一个整数。
示例 3：

输入：nums = [23,2,6,4,7], k = 13
输出：false


提示：

1 <= nums.length <= 105
0 <= nums[i] <= 109
0 <= sum(nums[i]) <= 231 - 1
1 <= k <= 231 - 1

* */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
function checkSubarraySum(nums, k) {
    /**
     * 根据 同余定理
     * 如果 前缀和 每次取余, 如果出现两次相同的结果 则 存在 和 能被 k整除
     * */
    //              余数      index
    const map = new Map();
    // 规定空的前缀的结束下标为 -1，由于空的前缀的元素和为 0，因此在哈希表中存入键值对 (0,-1)
    // 从 index 为 0 为开始的组合
    map.set(0, -1);
    let 前缀和余数 = 0;
    for (let i = 0; i < nums.length; i++) {
        前缀和余数 = (前缀和余数 + nums[i]) % k;
        if (map.has(前缀和余数)) {
            const prevIndex = map.get(前缀和余数);
            if (i - prevIndex >= 2)
                return true;
        }
        else {
            map.set(前缀和余数, i);
        }
    }
    return false;
}
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(checkSubarraySum([23, 2, 4, 6, 7], 6), true);
assert_1.default.strictEqual(checkSubarraySum([23, 2, 6, 4, 7], 6), true);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTIzLui/nue7reeahOWtkOaVsOe7hOWSjC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNTIzLui/nue7reeahOWtkOaVsOe7hOWSjC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQW9DSTs7Ozs7QUFFSixTQUFTLGdCQUFnQixDQUFDLElBQWMsRUFBRSxDQUFTO0lBQ2pEOzs7U0FHSztJQUNMLDZCQUE2QjtJQUM3QixNQUFNLEdBQUcsR0FBd0IsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUMzQyxvREFBb0Q7SUFDcEQscUJBQXFCO0lBQ3JCLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDZixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDZCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNwQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNsQixNQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBRSxDQUFDO1lBQ2xDLElBQUksQ0FBQyxHQUFHLFNBQVMsSUFBSSxDQUFDO2dCQUFFLE9BQU8sSUFBSSxDQUFDO1NBQ3JDO2FBQUk7WUFDSCxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsQ0FBQTtTQUNqQjtLQUNGO0lBRUQsT0FBTyxLQUFLLENBQUE7QUFDZCxDQUFDO0FBR0Qsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsV0FBVyxDQUNoQixnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFDaEMsSUFBSSxDQUNMLENBQUE7QUFFRCxnQkFBTSxDQUFDLFdBQVcsQ0FDaEIsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQ2hDLElBQUksQ0FDTCxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLypcbjUyMy4g6L+e57ut55qE5a2Q5pWw57uE5ZKMXG7nu5nkvaDkuIDkuKrmlbTmlbDmlbDnu4QgbnVtcyDlkozkuIDkuKrmlbTmlbAgayDvvIznvJblhpnkuIDkuKrlh73mlbDmnaXliKTmlq3or6XmlbDnu4TmmK/lkKblkKvmnInlkIzml7bmu6HotrPkuIvov7DmnaHku7bnmoTov57nu63lrZDmlbDnu4TvvJpcblxu5a2Q5pWw57uE5aSn5bCPIOiHs+WwkeS4uiAyIO+8jOS4lFxu5a2Q5pWw57uE5YWD57Sg5oC75ZKM5Li6IGsg55qE5YCN5pWw44CCXG7lpoLmnpzlrZjlnKjvvIzov5Tlm54gdHJ1ZSDvvJvlkKbliJnvvIzov5Tlm54gZmFsc2Ug44CCXG5cbuWmguaenOWtmOWcqOS4gOS4quaVtOaVsCBuIO+8jOS7pOaVtOaVsCB4IOespuWQiCB4ID0gbiAqIGsg77yM5YiZ56ewIHgg5pivIGsg55qE5LiA5Liq5YCN5pWw44CCXG5cblxuXG7npLrkvosgMe+8mlxuXG7ovpPlhaXvvJpudW1zID0gWzIzLDIsNCw2LDddLCBrID0gNlxu6L6T5Ye677yadHJ1ZVxu6Kej6YeK77yaWzIsNF0g5piv5LiA5Liq5aSn5bCP5Li6IDIg55qE5a2Q5pWw57uE77yM5bm25LiU5ZKM5Li6IDYg44CCXG7npLrkvosgMu+8mlxuXG7ovpPlhaXvvJpudW1zID0gWzIzLDIsNiw0LDddLCBrID0gNlxu6L6T5Ye677yadHJ1ZVxu6Kej6YeK77yaWzIzLCAyLCA2LCA0LCA3XSDmmK/lpKflsI/kuLogNSDnmoTlrZDmlbDnu4TvvIzlubbkuJTlkozkuLogNDIg44CCXG40MiDmmK8gNiDnmoTlgI3mlbDvvIzlm6DkuLogNDIgPSA3ICogNiDkuJQgNyDmmK/kuIDkuKrmlbTmlbDjgIJcbuekuuS+iyAz77yaXG5cbui+k+WFpe+8mm51bXMgPSBbMjMsMiw2LDQsN10sIGsgPSAxM1xu6L6T5Ye677yaZmFsc2VcblxuXG7mj5DnpLrvvJpcblxuMSA8PSBudW1zLmxlbmd0aCA8PSAxMDVcbjAgPD0gbnVtc1tpXSA8PSAxMDlcbjAgPD0gc3VtKG51bXNbaV0pIDw9IDIzMSAtIDFcbjEgPD0gayA8PSAyMzEgLSAxXG5cbiogKi9cblxuZnVuY3Rpb24gY2hlY2tTdWJhcnJheVN1bShudW1zOiBudW1iZXJbXSwgazogbnVtYmVyKTogYm9vbGVhbiB7XG4gIC8qKlxuICAgKiDmoLnmja4g5ZCM5L2Z5a6a55CGXG4gICAqIOWmguaenCDliY3nvIDlkowg5q+P5qyh5Y+W5L2ZLCDlpoLmnpzlh7rnjrDkuKTmrKHnm7jlkIznmoTnu5Pmnpwg5YiZIOWtmOWcqCDlkowg6IO96KKrIGvmlbTpmaRcbiAgICogKi9cbiAgLy8gICAgICAgICAgICAgIOS9meaVsCAgICAgIGluZGV4XG4gIGNvbnN0IG1hcDogTWFwPG51bWJlciwgbnVtYmVyPiA9IG5ldyBNYXAoKTtcbiAgLy8g6KeE5a6a56m655qE5YmN57yA55qE57uT5p2f5LiL5qCH5Li6IC0x77yM55Sx5LqO56m655qE5YmN57yA55qE5YWD57Sg5ZKM5Li6IDDvvIzlm6DmraTlnKjlk4jluIzooajkuK3lrZjlhaXplK7lgLzlr7kgKDAsLTEpXG4gIC8vIOS7jiBpbmRleCDkuLogMCDkuLrlvIDlp4vnmoTnu4TlkIhcbiAgbWFwLnNldCgwLCAtMSk7XG4gIGxldCDliY3nvIDlkozkvZnmlbAgPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bXMubGVuZ3RoOyBpKyspIHtcbiAgICDliY3nvIDlkozkvZnmlbAgPSAo5YmN57yA5ZKM5L2Z5pWwICsgbnVtc1tpXSkgJSBrO1xuICAgIGlmIChtYXAuaGFzKOWJjee8gOWSjOS9meaVsCkpIHtcbiAgICAgIGNvbnN0IHByZXZJbmRleCA9IG1hcC5nZXQo5YmN57yA5ZKM5L2Z5pWwKSE7XG4gICAgICBpZiAoaSAtIHByZXZJbmRleCA+PSAyKSByZXR1cm4gdHJ1ZTtcbiAgICB9ZWxzZXtcbiAgICAgIG1hcC5zZXQo5YmN57yA5ZKM5L2Z5pWwLGkpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbmFzc2VydC5zdHJpY3RFcXVhbChcbiAgY2hlY2tTdWJhcnJheVN1bShbMjMsMiw0LDYsN10sNiksXG4gIHRydWVcbilcblxuYXNzZXJ0LnN0cmljdEVxdWFsKFxuICBjaGVja1N1YmFycmF5U3VtKFsyMywyLDYsNCw3XSw2KSxcbiAgdHJ1ZVxuKVxuXG4iXX0=