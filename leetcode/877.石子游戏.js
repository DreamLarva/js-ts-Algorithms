"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
877. 石子游戏
亚历克斯和李用几堆石子在做游戏。偶数堆石子排成一行，每堆都有正整数颗石子 piles[i] 。

游戏以谁手中的石子最多来决出胜负。石子的总数是奇数，所以没有平局。

亚历克斯和李轮流进行，亚历克斯先开始。 每回合，玩家从行的开始或结束处取走整堆石头。 这种情况一直持续到没有更多的石子堆为止，此时手中石子最多的玩家获胜。

假设亚历克斯和李都发挥出最佳水平，当亚历克斯赢得比赛时返回 true ，当李赢得比赛时返回 false 。



示例：

输入：[5,3,4,5]
输出：true
解释：
亚历克斯先开始，只能拿前 5 颗或后 5 颗石子 。
假设他取了前 5 颗，这一行就变成了 [3,4,5] 。
如果李拿走前 3 颗，那么剩下的是 [4,5]，亚历克斯拿走后 5 颗赢得 10 分。
如果李拿走后 5 颗，那么剩下的是 [3,4]，亚历克斯拿走后 4 颗赢得 9 分。
这表明，取前 5 颗石子对亚历克斯来说是一个胜利的举动，所以我们返回 true 。


提示：

2 <= piles.length <= 500
piles.length 是偶数。
1 <= piles[i] <= 500
sum(piles) 是奇数。
* */
function stoneGame(piles) {
    /**
     * 将 数组分成 奇数堆 和 偶数堆
     * 先选的人 能选择 其中一堆而 保持另一个人为剩下的一堆
     * 奇数堆 和 偶数堆 必不相等 所以先手必胜
     * */
    return true;
}
function stoneGame1(piles) {
    /**
     * https://leetcode-cn.com/problems/stone-game/solution/shi-zi-you-xi-by-leetcode-solution/
     * 不理解 这个动态规划
     * */
    const length = piles.length;
    const dp = new Array(length).fill(0).map(() => new Array(length).fill(0));
    for (let i = 0; i < length; i++) {
        dp[i][i] = piles[i];
    }
    for (let i = length - 2; i >= 0; i--) {
        for (let j = i + 1; j < length; j++) {
            dp[i][j] = Math.max(piles[i] - dp[i + 1][j], piles[j] - dp[i][j - 1]);
        }
    }
    return dp[0][length - 1] > 0;
}
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(stoneGame1([5, 3, 4, 5]), true);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODc3Luefs+WtkOa4uOaIjy5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvODc3Luefs+WtkOa4uOaIjy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUE4Qkk7QUFDSixTQUFTLFNBQVMsQ0FBQyxLQUFlO0lBQ2hDOzs7O1NBSUs7SUFDTCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7QUFFRCxTQUFTLFVBQVUsQ0FBQyxLQUFlO0lBQ2pDOzs7U0FHSztJQUNMLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDNUIsTUFBTSxFQUFFLEdBQUcsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQy9CLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDckI7SUFDRCxLQUFLLElBQUksQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNwQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNuQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3ZFO0tBQ0Y7SUFDRCxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQy9CLENBQUM7QUFFRCxvREFBNEI7QUFDNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG44NzcuIOefs+WtkOa4uOaIj1xu5Lqa5Y6G5YWL5pav5ZKM5p2O55So5Yeg5aCG55+z5a2Q5Zyo5YGa5ri45oiP44CC5YG25pWw5aCG55+z5a2Q5o6S5oiQ5LiA6KGM77yM5q+P5aCG6YO95pyJ5q2j5pW05pWw6aKX55+z5a2QIHBpbGVzW2ldIOOAglxuXG7muLjmiI/ku6XosIHmiYvkuK3nmoTnn7PlrZDmnIDlpJrmnaXlhrPlh7rog5zotJ/jgILnn7PlrZDnmoTmgLvmlbDmmK/lpYfmlbDvvIzmiYDku6XmsqHmnInlubPlsYDjgIJcblxu5Lqa5Y6G5YWL5pav5ZKM5p2O6L2u5rWB6L+b6KGM77yM5Lqa5Y6G5YWL5pav5YWI5byA5aeL44CCIOavj+WbnuWQiO+8jOeOqeWutuS7juihjOeahOW8gOWni+aIlue7k+adn+WkhOWPlui1sOaVtOWghuefs+WktOOAgiDov5nnp43mg4XlhrXkuIDnm7TmjIHnu63liLDmsqHmnInmm7TlpJrnmoTnn7PlrZDloIbkuLrmraLvvIzmraTml7bmiYvkuK3nn7PlrZDmnIDlpJrnmoTnjqnlrrbojrfog5zjgIJcblxu5YGH6K6+5Lqa5Y6G5YWL5pav5ZKM5p2O6YO95Y+R5oyl5Ye65pyA5L2z5rC05bmz77yM5b2T5Lqa5Y6G5YWL5pav6LWi5b6X5q+U6LWb5pe26L+U5ZueIHRydWUg77yM5b2T5p2O6LWi5b6X5q+U6LWb5pe26L+U5ZueIGZhbHNlIOOAglxuXG5cblxu56S65L6L77yaXG5cbui+k+WFpe+8mls1LDMsNCw1XVxu6L6T5Ye677yadHJ1ZVxu6Kej6YeK77yaXG7kuprljoblhYvmlq/lhYjlvIDlp4vvvIzlj6rog73mi7/liY0gNSDpopfmiJblkI4gNSDpopfnn7PlrZAg44CCXG7lgYforr7ku5blj5bkuobliY0gNSDpopfvvIzov5nkuIDooYzlsLHlj5jmiJDkuoYgWzMsNCw1XSDjgIJcbuWmguaenOadjuaLv+i1sOWJjSAzIOmil++8jOmCo+S5iOWJqeS4i+eahOaYryBbNCw1Xe+8jOS6muWOhuWFi+aWr+aLv+i1sOWQjiA1IOmil+i1ouW+lyAxMCDliIbjgIJcbuWmguaenOadjuaLv+i1sOWQjiA1IOmil++8jOmCo+S5iOWJqeS4i+eahOaYryBbMyw0Xe+8jOS6muWOhuWFi+aWr+aLv+i1sOWQjiA0IOmil+i1ouW+lyA5IOWIhuOAglxu6L+Z6KGo5piO77yM5Y+W5YmNIDUg6aKX55+z5a2Q5a+55Lqa5Y6G5YWL5pav5p2l6K+05piv5LiA5Liq6IOc5Yip55qE5Li+5Yqo77yM5omA5Lul5oiR5Lus6L+U5ZueIHRydWUg44CCXG5cblxu5o+Q56S677yaXG5cbjIgPD0gcGlsZXMubGVuZ3RoIDw9IDUwMFxucGlsZXMubGVuZ3RoIOaYr+WBtuaVsOOAglxuMSA8PSBwaWxlc1tpXSA8PSA1MDBcbnN1bShwaWxlcykg5piv5aWH5pWw44CCXG4qICovXG5mdW5jdGlvbiBzdG9uZUdhbWUocGlsZXM6IG51bWJlcltdKTogYm9vbGVhbiB7XG4gIC8qKlxuICAgKiDlsIYg5pWw57uE5YiG5oiQIOWlh+aVsOWghiDlkowg5YG25pWw5aCGXG4gICAqIOWFiOmAieeahOS6uiDog73pgInmi6kg5YW25Lit5LiA5aCG6ICMIOS/neaMgeWPpuS4gOS4quS6uuS4uuWJqeS4i+eahOS4gOWghlxuICAgKiDlpYfmlbDloIYg5ZKMIOWBtuaVsOWghiDlv4XkuI3nm7jnrYkg5omA5Lul5YWI5omL5b+F6IOcXG4gICAqICovXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBzdG9uZUdhbWUxKHBpbGVzOiBudW1iZXJbXSk6IGJvb2xlYW4ge1xuICAvKipcbiAgICogaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvc3RvbmUtZ2FtZS9zb2x1dGlvbi9zaGktemkteW91LXhpLWJ5LWxlZXRjb2RlLXNvbHV0aW9uL1xuICAgKiDkuI3nkIbop6Mg6L+Z5Liq5Yqo5oCB6KeE5YiSXG4gICAqICovXG4gIGNvbnN0IGxlbmd0aCA9IHBpbGVzLmxlbmd0aDtcbiAgY29uc3QgZHAgPSBuZXcgQXJyYXkobGVuZ3RoKS5maWxsKDApLm1hcCgoKSA9PiBuZXcgQXJyYXkobGVuZ3RoKS5maWxsKDApKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGRwW2ldW2ldID0gcGlsZXNbaV07XG4gIH1cbiAgZm9yIChsZXQgaSA9IGxlbmd0aCAtIDI7IGkgPj0gMDsgaS0tKSB7XG4gICAgZm9yIChsZXQgaiA9IGkgKyAxOyBqIDwgbGVuZ3RoOyBqKyspIHtcbiAgICAgIGRwW2ldW2pdID0gTWF0aC5tYXgocGlsZXNbaV0gLSBkcFtpICsgMV1bal0sIHBpbGVzW2pdIC0gZHBbaV1baiAtIDFdKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRwWzBdW2xlbmd0aCAtIDFdID4gMDtcbn1cblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5hc3NlcnQuc3RyaWN0RXF1YWwoc3RvbmVHYW1lMShbNSwgMywgNCwgNV0pLCB0cnVlKTtcbiJdfQ==