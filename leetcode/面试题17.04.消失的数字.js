"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
面试题 17.04. 消失的数字
数组nums包含从0到n的所有整数，但其中缺了一个。请编写代码找出那个缺失的整数。你有办法在O(n)时间内完成吗？

注意：本题相对书上原题稍作改动

示例 1：

输入：[3,0,1]
输出：2


示例 2：

输入：[9,6,4,2,3,5,7,0,1]
输出：8
* */
function missingNumber(nums) {
    /**
     * 直接用 位运算 或非 来解决即可
     * */
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result ^= i;
        result ^= nums[i];
    }
    result ^= nums.length;
    return result;
}
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(missingNumber([3, 0, 1]), 2);
assert_1.default.strictEqual(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]), 8);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoi6Z2i6K+V6aKYMTcuMDQu5raI5aSx55qE5pWw5a2XLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS/pnaLor5XpopgxNy4wNC7mtojlpLHnmoTmlbDlrZcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztJQWdCSTtBQUNKLFNBQVMsYUFBYSxDQUFDLElBQWM7SUFDbkM7O1NBRUs7SUFDTCxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDZixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNwQyxNQUFNLElBQUksQ0FBQyxDQUFDO1FBQ1osTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNuQjtJQUNELE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3RCLE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFFRCxvREFBNEI7QUFDNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ2hELGdCQUFNLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7pnaLor5XpopggMTcuMDQuIOa2iOWkseeahOaVsOWtl1xu5pWw57uEbnVtc+WMheWQq+S7jjDliLBu55qE5omA5pyJ5pW05pWw77yM5L2G5YW25Lit57y65LqG5LiA5Liq44CC6K+357yW5YaZ5Luj56CB5om+5Ye66YKj5Liq57y65aSx55qE5pW05pWw44CC5L2g5pyJ5Yqe5rOV5ZyoTyhuKeaXtumXtOWGheWujOaIkOWQl++8n1xuXG7ms6jmhI/vvJrmnKzpopjnm7jlr7nkuabkuIrljp/popjnqI3kvZzmlLnliqhcblxu56S65L6LIDHvvJpcblxu6L6T5YWl77yaWzMsMCwxXVxu6L6T5Ye677yaMlxuXG5cbuekuuS+iyAy77yaXG5cbui+k+WFpe+8mls5LDYsNCwyLDMsNSw3LDAsMV1cbui+k+WHuu+8mjhcbiogKi9cbmZ1bmN0aW9uIG1pc3NpbmdOdW1iZXIobnVtczogbnVtYmVyW10pOiBudW1iZXIge1xuICAvKipcbiAgICog55u05o6l55SoIOS9jei/kOeulyDmiJbpnZ4g5p2l6Kej5Yaz5Y2z5Y+vXG4gICAqICovXG4gIGxldCByZXN1bHQgPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bXMubGVuZ3RoOyBpKyspIHtcbiAgICByZXN1bHQgXj0gaTtcbiAgICByZXN1bHQgXj0gbnVtc1tpXTtcbiAgfVxuICByZXN1bHQgXj0gbnVtcy5sZW5ndGg7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuYXNzZXJ0LnN0cmljdEVxdWFsKG1pc3NpbmdOdW1iZXIoWzMsIDAsIDFdKSwgMik7XG5hc3NlcnQuc3RyaWN0RXF1YWwobWlzc2luZ051bWJlcihbOSwgNiwgNCwgMiwgMywgNSwgNywgMCwgMV0pLCA4KTtcbiJdfQ==