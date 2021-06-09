
/**
 * 出自 1049.最后一块石头的重量II.ts
 * 当成 一半总重量的 背包问题
 *
 * 返回两份的差值
 * */
function lastStoneWeightII2(stones){
    let sum = 0;
    for (const weight of stones) {
        sum += weight;
    }
    const m = Math.floor(sum / 2);
    const dp = new Array(m + 1).fill(false);
    dp[0] = true;
    // 改用一维 使用倒序遍历
    for (const weight of stones) {
        for (let j = m; j >= weight; --j) {
            dp[j] = dp[j] || dp[j - weight];
        }
    }
    for (let j = m; ; --j) {
        if (dp[j]) {
            return sum - 2 * j;
        }
    }
}
