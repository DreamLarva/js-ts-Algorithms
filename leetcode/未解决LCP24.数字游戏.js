"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*

小扣在秋日市集入口处发现了一个数字游戏。主办方共有 N 个计数器，计数器编号为 0 ~ N-1。每个计数器上分别显示了一个数字，小扣按计数器编号升序将所显示的数字记于数组 nums。每个计数器上有两个按钮，分别可以实现将显示数字加一或减一。小扣每一次操作可以选择一个计数器，按下加一或减一按钮。

主办方请小扣回答出一个长度为 N 的数组，第 i 个元素(0 <= i < N)表示将 0~i 号计数器 初始 所示数字操作成满足所有条件 nums[a]+1 == nums[a+1],(0 <= a < i) 的最小操作数。回答正确方可进入秋日市集。

由于答案可能很大，请将每个最小操作数对 1,000,000,007 取余。

示例 1：

输入：nums = [3,4,5,1,6,7]

输出：[0,0,0,5,6,7]

解释：
i = 0，[3] 无需操作
i = 1，[3,4] 无需操作；
i = 2，[3,4,5] 无需操作；
i = 3，将 [3,4,5,1] 操作成 [3,4,5,6], 最少 5 次操作；
i = 4，将 [3,4,5,1,6] 操作成 [3,4,5,6,7], 最少 6 次操作；
i = 5，将 [3,4,5,1,6,7] 操作成 [3,4,5,6,7,8]，最少 7 次操作；
返回 [0,0,0,5,6,7]。

示例 2：

输入：nums = [1,2,3,4,5]

输出：[0,0,0,0,0]

解释：对于任意计数器编号 i 都无需操作。

示例 3：

输入：nums = [1,1,1,2,3,4]

输出：[0,1,2,3,3,3]

解释：
i = 0，无需操作；
i = 1，将 [1,1] 操作成 [1,2] 或 [0,1] 最少 1 次操作；
i = 2，将 [1,1,1] 操作成 [1,2,3] 或 [0,1,2]，最少 2 次操作；
i = 3，将 [1,1,1,2] 操作成 [1,2,3,4] 或 [0,1,2,3]，最少 3 次操作；
i = 4，将 [1,1,1,2,3] 操作成 [-1,0,1,2,3]，最少 3 次操作；
i = 5，将 [1,1,1,2,3,4] 操作成 [-1,0,1,2,3,4]，最少 3 次操作；
返回 [0,1,2,3,3,3]。

提示：

1 <= nums.length <= 10^5
1 <= nums[i] <= 10^3
* */
const lodash_1 = __importDefault(require("lodash"));
function numsGame(nums) {
    /**
     * todo
     * 获取中位数 还不够
     * 当 nums.length 为偶数时 , 还必须分清使用哪个数作为中位数
     * */
    const median = findKthLargest(nums.slice(), Math.ceil(nums.length / 2));
    console.log("median", median);
    const result = [];
    const first = median - Math.floor((nums.length - 1) / 2);
    console.log(first);
    nums.reduce((pre, cur, i) => {
        const dif = first + i - cur;
        const total = dif + pre;
        const mod = total === 0 ? 0 : total % 1_000_000_007;
        result.push(mod);
        return mod;
    }, 0);
    return result;
}
/**
 * 用于获取 中位数
 * 快速选择法(Hoare 选择法, 霍尔选择法) 获取第K大的数
 * */
function findKthLargest(nums, k) {
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
}
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual(numsGame([3, 4, 5, 1, 6, 7]), [0, 0, 0, 5, 6, 7]);
assert_1.default.deepStrictEqual(numsGame([1, 2, 3, 4, 5]), [0, 0, 0, 0, 0]);
assert_1.default.deepStrictEqual(numsGame([1, 2, 3, 4, 5, 6]), [0, 0, 0, 0, 0, 0]);
// assert.deepStrictEqual(numsGame([1, 1, 1, 2, 3, 4]), [0, 1, 2, 3, 3, 3]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoi5pyq6Kej5YazTENQMjQu5pWw5a2X5ri45oiPLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS/mnKrop6PlhrNMQ1AyNC7mlbDlrZfmuLjmiI8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFrREk7QUFDSixvREFBdUI7QUFFdkIsU0FBUyxRQUFRLENBQUMsSUFBYztJQUM5Qjs7OztTQUlLO0lBQ0wsTUFBTSxNQUFNLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4RSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM5QixNQUFNLE1BQU0sR0FBYSxFQUFFLENBQUM7SUFDNUIsTUFBTSxLQUFLLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3pELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDMUIsTUFBTSxHQUFHLEdBQUcsS0FBSyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDNUIsTUFBTSxLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUN4QixNQUFNLEdBQUcsR0FBRyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUM7UUFFcEQsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztR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Q0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbkUsZ0JBQU0sQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3pFLDRFQUE0RSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5cbuWwj+aJo+WcqOeni+aXpeW4gumbhuWFpeWPo+WkhOWPkeeOsOS6huS4gOS4quaVsOWtl+a4uOaIj+OAguS4u+WKnuaWueWFseaciSBOIOS4quiuoeaVsOWZqO+8jOiuoeaVsOWZqOe8luWPt+S4uiAwIH4gTi0x44CC5q+P5Liq6K6h5pWw5Zmo5LiK5YiG5Yir5pi+56S65LqG5LiA5Liq5pWw5a2X77yM5bCP5omj5oyJ6K6h5pWw5Zmo57yW5Y+35Y2H5bqP5bCG5omA5pi+56S655qE5pWw5a2X6K6w5LqO5pWw57uEIG51bXPjgILmr4/kuKrorqHmlbDlmajkuIrmnInkuKTkuKrmjInpkq7vvIzliIbliKvlj6/ku6Xlrp7njrDlsIbmmL7npLrmlbDlrZfliqDkuIDmiJblh4/kuIDjgILlsI/miaPmr4/kuIDmrKHmk43kvZzlj6/ku6XpgInmi6nkuIDkuKrorqHmlbDlmajvvIzmjInkuIvliqDkuIDmiJblh4/kuIDmjInpkq7jgIJcblxu5Li75Yqe5pa56K+35bCP5omj5Zue562U5Ye65LiA5Liq6ZW/5bqm5Li6IE4g55qE5pWw57uE77yM56ysIGkg5Liq5YWD57SgKDAgPD0gaSA8IE4p6KGo56S65bCGIDB+aSDlj7forqHmlbDlmagg5Yid5aeLIOaJgOekuuaVsOWtl+aTjeS9nOaIkOa7oei2s+aJgOacieadoeS7tiBudW1zW2FdKzEgPT0gbnVtc1thKzFdLCgwIDw9IGEgPCBpKSDnmoTmnIDlsI/mk43kvZzmlbDjgILlm57nrZTmraPnoa7mlrnlj6/ov5vlhaXnp4vml6XluILpm4bjgIJcblxu55Sx5LqO562U5qGI5Y+v6IO95b6I5aSn77yM6K+35bCG5q+P5Liq5pyA5bCP5pON5L2c5pWw5a+5IDEsMDAwLDAwMCwwMDcg5Y+W5L2Z44CCXG5cbuekuuS+iyAx77yaXG5cbui+k+WFpe+8mm51bXMgPSBbMyw0LDUsMSw2LDddXG5cbui+k+WHuu+8mlswLDAsMCw1LDYsN11cblxu6Kej6YeK77yaXG5pID0gMO+8jFszXSDml6DpnIDmk43kvZxcbmkgPSAx77yMWzMsNF0g5peg6ZyA5pON5L2c77ybXG5pID0gMu+8jFszLDQsNV0g5peg6ZyA5pON5L2c77ybXG5pID0gM++8jOWwhiBbMyw0LDUsMV0g5pON5L2c5oiQIFszLDQsNSw2XSwg5pyA5bCRIDUg5qyh5pON5L2c77ybXG5pID0gNO+8jOWwhiBbMyw0LDUsMSw2XSDmk43kvZzmiJAgWzMsNCw1LDYsN10sIOacgOWwkSA2IOasoeaTjeS9nO+8m1xuaSA9IDXvvIzlsIYgWzMsNCw1LDEsNiw3XSDmk43kvZzmiJAgWzMsNCw1LDYsNyw4Xe+8jOacgOWwkSA3IOasoeaTjeS9nO+8m1xu6L+U5ZueIFswLDAsMCw1LDYsN13jgIJcblxu56S65L6LIDLvvJpcblxu6L6T5YWl77yabnVtcyA9IFsxLDIsMyw0LDVdXG5cbui+k+WHuu+8mlswLDAsMCwwLDBdXG5cbuino+mHiu+8muWvueS6juS7u+aEj+iuoeaVsOWZqOe8luWPtyBpIOmDveaXoOmcgOaTjeS9nOOAglxuXG7npLrkvosgM++8mlxuXG7ovpPlhaXvvJpudW1zID0gWzEsMSwxLDIsMyw0XVxuXG7ovpPlh7rvvJpbMCwxLDIsMywzLDNdXG5cbuino+mHiu+8mlxuaSA9IDDvvIzml6DpnIDmk43kvZzvvJtcbmkgPSAx77yM5bCGIFsxLDFdIOaTjeS9nOaIkCBbMSwyXSDmiJYgWzAsMV0g5pyA5bCRIDEg5qyh5pON5L2c77ybXG5pID0gMu+8jOWwhiBbMSwxLDFdIOaTjeS9nOaIkCBbMSwyLDNdIOaIliBbMCwxLDJd77yM5pyA5bCRIDIg5qyh5pON5L2c77ybXG5pID0gM++8jOWwhiBbMSwxLDEsMl0g5pON5L2c5oiQIFsxLDIsMyw0XSDmiJYgWzAsMSwyLDNd77yM5pyA5bCRIDMg5qyh5pON5L2c77ybXG5pID0gNO+8jOWwhiBbMSwxLDEsMiwzXSDmk43kvZzmiJAgWy0xLDAsMSwyLDNd77yM5pyA5bCRIDMg5qyh5pON5L2c77ybXG5pID0gNe+8jOWwhiBbMSwxLDEsMiwzLDRdIOaTjeS9nOaIkCBbLTEsMCwxLDIsMyw0Xe+8jOacgOWwkSAzIOasoeaTjeS9nO+8m1xu6L+U5ZueIFswLDEsMiwzLDMsM13jgIJcblxu5o+Q56S677yaXG5cbjEgPD0gbnVtcy5sZW5ndGggPD0gMTBeNVxuMSA8PSBudW1zW2ldIDw9IDEwXjNcbiogKi9cbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcblxuZnVuY3Rpb24gbnVtc0dhbWUobnVtczogbnVtYmVyW10pOiBudW1iZXJbXSB7XG4gIC8qKlxuICAgKiB0b2RvXG4gICAqIOiOt+WPluS4reS9jeaVsCDov5jkuI3lpJ9cbiAgICog5b2TIG51bXMubGVuZ3RoIOS4uuWBtuaVsOaXtiAsIOi/mOW/hemhu+WIhua4heS9v+eUqOWTquS4quaVsOS9nOS4uuS4reS9jeaVsFxuICAgKiAqL1xuICBjb25zdCBtZWRpYW4gPSBmaW5kS3RoTGFyZ2VzdChudW1zLnNsaWNlKCksIE1hdGguY2VpbChudW1zLmxlbmd0aCAvIDIpKTtcbiAgY29uc29sZS5sb2coXCJtZWRpYW5cIiwgbWVkaWFuKTtcbiAgY29uc3QgcmVzdWx0OiBudW1iZXJbXSA9IFtdO1xuICBjb25zdCBmaXJzdCA9IG1lZGlhbiAtIE1hdGguZmxvb3IoKG51bXMubGVuZ3RoIC0gMSkgLyAyKTtcbiAgY29uc29sZS5sb2coZmlyc3QpO1xuXG4gIG51bXMucmVkdWNlKChwcmUsIGN1ciwgaSkgPT4ge1xuICAgIGNvbnN0IGRpZiA9IGZpcnN0ICsgaSAtIGN1cjtcbiAgICBjb25zdCB0b3RhbCA9IGRpZiArIHByZTtcbiAgICBjb25zdCBtb2QgPSB0b3RhbCA9PT0gMCA/IDAgOiB0b3RhbCAlIDFfMDAwXzAwMF8wMDc7XG5cbiAgICByZXN1bHQucHVzaChtb2QpO1xuICAgIHJldHVybiBtb2Q7XG4gIH0sIDApO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICog55So5LqO6I635Y+WIOS4reS9jeaVsFxuICog5b+r6YCf6YCJ5oup5rOVKEhvYXJlIOmAieaLqeazlSwg6ZyN5bCU6YCJ5oup5rOVKSDojrflj5bnrKxL5aSn55qE5pWwXG4gKiAqL1xuZnVuY3Rpb24gZmluZEt0aExhcmdlc3QobnVtczogbnVtYmVyW10sIGs6IG51bWJlcikge1xuICBjb25zdCBzaXplID0gbnVtcy5sZW5ndGg7XG4gIHJldHVybiBxdWlja1NlbGVjdCgwLCBzaXplIC0gMSwgc2l6ZSAtIGspO1xuXG4gIGZ1bmN0aW9uIHBhcnRpdGlvbihsZWZ0OiBudW1iZXIsIHJpZ2h0OiBudW1iZXIsIHBpdm90X2luZGV4OiBudW1iZXIpIHtcbiAgICBsZXQgcGl2b3QgPSBudW1zW3Bpdm90X2luZGV4XTtcbiAgICAvLyDnjrDlsIYg5p6i6L20IOaNouWIsOacq+WwviDmlrnkvr8g5pON5L2cXG4gICAgW251bXNbcGl2b3RfaW5kZXhdLCBudW1zW3JpZ2h0XV0gPSBbbnVtc1tyaWdodF0sIG51bXNbcGl2b3RfaW5kZXhdXTtcbiAgICAvLyDlrZjlgqgg5p6i6L205paw55qE5L2N572uXG4gICAgbGV0IHN0b3JlX2luZGV4ID0gbGVmdDtcblxuICAgIC8vIOaeoui9tOeahOWAvCDmlL7liLDlt6bovrlcbiAgICBmb3IgKGxldCBpID0gbGVmdDsgaSA8PSByaWdodDsgaSsrKSB7XG4gICAgICBpZiAobnVtc1tpXSA8IHBpdm90KSB7XG4gICAgICAgIFtudW1zW3N0b3JlX2luZGV4XSwgbnVtc1tpXV0gPSBbbnVtc1tpXSwgbnVtc1tzdG9yZV9pbmRleF1dO1xuICAgICAgICBzdG9yZV9pbmRleCsrO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyDlsIblnKjmnIDmnKvlsL7nmoTmnqLovbTnmoTlgLwg5pS+5Yiw5paw55qE5L2N572uXG4gICAgW251bXNbc3RvcmVfaW5kZXhdLCBudW1zW3JpZ2h0XV0gPSBbbnVtc1tyaWdodF0sIG51bXNbc3RvcmVfaW5kZXhdXTtcbiAgICByZXR1cm4gc3RvcmVfaW5kZXg7XG4gIH1cblxuICBmdW5jdGlvbiBxdWlja1NlbGVjdChcbiAgICBsZWZ0OiBudW1iZXIsXG4gICAgcmlnaHQ6IG51bWJlcixcbiAgICBrX3NtYWxsZXN0OiBudW1iZXJcbiAgKTogbnVtYmVyIHtcbiAgICAvLyDlpoLmnpwg5bem5Y+z5Li6IOWQjOS4gOS4quWAvCDpgqPkuYjor7TmmI4g5Y+q5pyJ5LiA5Liq5YC8IOS4jemcgOimgeWGjemAieaLqeS6hlxuICAgIGlmIChsZWZ0ID09PSByaWdodCkge1xuICAgICAgcmV0dXJuIG51bXNbbGVmdF07XG4gICAgfVxuICAgIC8vIOmaj+acuiDnlKjkuIDkuKrlgLzkvZzkuLogaW5kZXgg5L2c5Li65p6i6L20IOW5tuS4lOi/lOWbniDmnqLovbTnmoQgaW5kZXhcbiAgICBsZXQgcGl2b3RfaW5kZXggPSBwYXJ0aXRpb24obGVmdCwgcmlnaHQsIF8ucmFuZG9tKGxlZnQsIHJpZ2h0IC0gMSkpOyAvLyBsb2Rhc2gg55qEIHJhbmRvbSDmmK/lkKvlpLQg5ZCr5bC+55qEXG5cbiAgICBpZiAoa19zbWFsbGVzdCA9PT0gcGl2b3RfaW5kZXgpIHJldHVybiBudW1zW2tfc21hbGxlc3RdO1xuICAgIC8vIOWmguaenCDmnqLovbTnmoQgaW5kZXgg5bCP5LqOIGtfc21hbGxlc3Qg6K+05piOIOWAvCDov5jlnKjmnInmnqLovbTnmoTlj7PkvqdcbiAgICBlbHNlIGlmIChrX3NtYWxsZXN0IDwgcGl2b3RfaW5kZXgpXG4gICAgICByZXR1cm4gcXVpY2tTZWxlY3QobGVmdCwgcGl2b3RfaW5kZXggLSAxLCBrX3NtYWxsZXN0KTtcbiAgICAvLyDlpoLmnpwg5p6i6L2055qEIGluZGV4IOWkp+S6jiBrX3NtYWxsZXN0IOivtOaYjiDlgLwg6L+Y5Zyo5pyJ5p6i6L2055qE5bem5L6nXG4gICAgcmV0dXJuIHF1aWNrU2VsZWN0KHBpdm90X2luZGV4ICsgMSwgcmlnaHQsIGtfc21hbGxlc3QpO1xuICB9XG59XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKG51bXNHYW1lKFszLCA0LCA1LCAxLCA2LCA3XSksIFswLCAwLCAwLCA1LCA2LCA3XSk7XG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKG51bXNHYW1lKFsxLCAyLCAzLCA0LCA1XSksIFswLCAwLCAwLCAwLCAwXSk7XG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKG51bXNHYW1lKFsxLCAyLCAzLCA0LCA1LCA2XSksIFswLCAwLCAwLCAwLCAwLCAwXSk7XG4vLyBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKG51bXNHYW1lKFsxLCAxLCAxLCAyLCAzLCA0XSksIFswLCAxLCAyLCAzLCAzLCAzXSk7XG4iXX0=