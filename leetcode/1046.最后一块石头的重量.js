"use strict";
/*
有一堆石头，每块石头的重量都是正整数。

每一回合，从中选出两块 最重的 石头，然后将它们一起粉碎。假设石头的重量分别为x 和y，且x <= y。那么粉碎的可能结果如下：

如果x == y，那么两块石头都会被完全粉碎；
如果x != y，那么重量为x的石头将会完全粉碎，而重量为y的石头新重量为y-x。
最后，最多只会剩下一块石头。返回此石头的重量。如果没有石头剩下，就返回 0。



示例：

输入：[2,7,4,1,8,1]
输出：1
解释：
先选出 7 和 8，得到 1，所以数组转换为 [2,4,1,1,1]，
再选出 2 和 4，得到 2，所以数组转换为 [2,1,1,1]，
接着是 2 和 1，得到 1，所以数组转换为 [1,1,1]，
最后选出 1 和 1，得到 0，最终数组转换为 [1]，这就是最后剩下那块石头的重量。


提示：

1 <= stones.length <= 30
1 <= stones[i] <= 1000


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/last-stone-weight
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const priority_queue_1 = require("@datastructures-js/priority-queue");
function lastStoneWeight(stones) {
    const pq = new priority_queue_1.MaxPriorityQueue();
    for (const stone of stones) {
        pq.enqueue(stone);
    }
    while (pq.size() > 1) {
        const a = pq.dequeue()["element"];
        const b = pq.dequeue()["element"];
        const diff = a - b;
        if (diff !== 0)
            pq.enqueue(diff);
    }
    return pq.size() === 0 ? 0 : pq.dequeue()["element"];
}
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(lastStoneWeight([2, 7, 4, 1, 8, 1]), 1);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTA0Ni7mnIDlkI7kuIDlnZfnn7PlpLTnmoTph43ph48uanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzEwNDYu5pyA5ZCO5LiA5Z2X55+z5aS055qE6YeN6YePLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQStCSTs7Ozs7QUFFSixzRUFBcUU7QUFFckUsU0FBUyxlQUFlLENBQUMsTUFBZ0I7SUFDdkMsTUFBTSxFQUFFLEdBQUcsSUFBSSxpQ0FBZ0IsRUFBRSxDQUFDO0lBQ2xDLEtBQUssTUFBTSxLQUFLLElBQUksTUFBTSxFQUFFO1FBQzFCLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbkI7SUFFRCxPQUFPLEVBQUUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUU7UUFDcEIsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2xDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVsQyxNQUFNLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLElBQUksSUFBSSxLQUFLLENBQUM7WUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2xDO0lBRUQsT0FBTyxFQUFFLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUN2RCxDQUFDO0FBRUQsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7mnInkuIDloIbnn7PlpLTvvIzmr4/lnZfnn7PlpLTnmoTph43ph4/pg73mmK/mraPmlbTmlbDjgIJcblxu5q+P5LiA5Zue5ZCI77yM5LuO5Lit6YCJ5Ye65Lik5Z2XIOacgOmHjeeahCDnn7PlpLTvvIznhLblkI7lsIblroPku6zkuIDotbfnsonnoo7jgILlgYforr7nn7PlpLTnmoTph43ph4/liIbliKvkuLp4IOWSjHnvvIzkuJR4IDw9IHnjgILpgqPkuYjnsonnoo7nmoTlj6/og73nu5PmnpzlpoLkuIvvvJpcblxu5aaC5p6ceCA9PSB577yM6YKj5LmI5Lik5Z2X55+z5aS06YO95Lya6KKr5a6M5YWo57KJ56KO77ybXG7lpoLmnpx4ICE9IHnvvIzpgqPkuYjph43ph4/kuLp455qE55+z5aS05bCG5Lya5a6M5YWo57KJ56KO77yM6ICM6YeN6YeP5Li6eeeahOefs+WktOaWsOmHjemHj+S4unkteOOAglxu5pyA5ZCO77yM5pyA5aSa5Y+q5Lya5Ymp5LiL5LiA5Z2X55+z5aS044CC6L+U5Zue5q2k55+z5aS055qE6YeN6YeP44CC5aaC5p6c5rKh5pyJ55+z5aS05Ymp5LiL77yM5bCx6L+U5ZueIDDjgIJcblxuXG5cbuekuuS+i++8mlxuXG7ovpPlhaXvvJpbMiw3LDQsMSw4LDFdXG7ovpPlh7rvvJoxXG7op6Pph4rvvJpcbuWFiOmAieWHuiA3IOWSjCA477yM5b6X5YiwIDHvvIzmiYDku6XmlbDnu4TovazmjaLkuLogWzIsNCwxLDEsMV3vvIxcbuWGjemAieWHuiAyIOWSjCA077yM5b6X5YiwIDLvvIzmiYDku6XmlbDnu4TovazmjaLkuLogWzIsMSwxLDFd77yMXG7mjqXnnYDmmK8gMiDlkowgMe+8jOW+l+WIsCAx77yM5omA5Lul5pWw57uE6L2s5o2i5Li6IFsxLDEsMV3vvIxcbuacgOWQjumAieWHuiAxIOWSjCAx77yM5b6X5YiwIDDvvIzmnIDnu4jmlbDnu4TovazmjaLkuLogWzFd77yM6L+Z5bCx5piv5pyA5ZCO5Ymp5LiL6YKj5Z2X55+z5aS055qE6YeN6YeP44CCXG5cblxu5o+Q56S677yaXG5cbjEgPD0gc3RvbmVzLmxlbmd0aCA8PSAzMFxuMSA8PSBzdG9uZXNbaV0gPD0gMTAwMFxuXG5cbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXG7pk77mjqXvvJpodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9sYXN0LXN0b25lLXdlaWdodFxu6JGX5L2c5p2D5b2S6aKG5omj572R57uc5omA5pyJ44CC5ZWG5Lia6L2s6L296K+36IGU57O75a6Y5pa55o6I5p2D77yM6Z2e5ZWG5Lia6L2s6L296K+35rOo5piO5Ye65aSE44CCXG4qICovXG5cbmltcG9ydCB7IE1heFByaW9yaXR5UXVldWUgfSBmcm9tIFwiQGRhdGFzdHJ1Y3R1cmVzLWpzL3ByaW9yaXR5LXF1ZXVlXCI7XG5cbmZ1bmN0aW9uIGxhc3RTdG9uZVdlaWdodChzdG9uZXM6IG51bWJlcltdKTogbnVtYmVyIHtcbiAgY29uc3QgcHEgPSBuZXcgTWF4UHJpb3JpdHlRdWV1ZSgpO1xuICBmb3IgKGNvbnN0IHN0b25lIG9mIHN0b25lcykge1xuICAgIHBxLmVucXVldWUoc3RvbmUpO1xuICB9XG5cbiAgd2hpbGUgKHBxLnNpemUoKSA+IDEpIHtcbiAgICBjb25zdCBhID0gcHEuZGVxdWV1ZSgpW1wiZWxlbWVudFwiXTtcbiAgICBjb25zdCBiID0gcHEuZGVxdWV1ZSgpW1wiZWxlbWVudFwiXTtcblxuICAgIGNvbnN0IGRpZmYgPSBhIC0gYjtcbiAgICBpZiAoZGlmZiAhPT0gMCkgcHEuZW5xdWV1ZShkaWZmKTtcbiAgfVxuXG4gIHJldHVybiBwcS5zaXplKCkgPT09IDAgPyAwIDogcHEuZGVxdWV1ZSgpW1wiZWxlbWVudFwiXTtcbn1cblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbmFzc2VydC5zdHJpY3RFcXVhbChsYXN0U3RvbmVXZWlnaHQoWzIsIDcsIDQsIDEsIDgsIDFdKSwgMSk7XG4iXX0=