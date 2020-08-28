function expand(s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    --left;
    ++right;
  }
  return Math.floor((right - left - 2) / 2);
}
/**
 * 在 O(n)时间复杂度下 判断回文字符串
 * */
function manacher1(s) {
  /**
   * 将字符串加工成 #a#b#c#d#'
   * 加工后字符串的总长度 就一定是 奇数
   * 这样 奇数长度和偶数长度的字符串 都可以按照奇数长度的字符串处理
   * */
  let t = "#";
  for (const c of s) {
    t += c;
    t += "#";
  }
  t += "#";
  s = t;
  let end = -1;
  let start = 0;
  /**
   * 存储臂长的数组
   * 臂长，表示中心扩展算法向外扩展的长度。如果一个位置的最大回文字符串长度为 2 * length + 1 ，其臂长为 length
   * */
  const arm_len = [];
  // 所在回文的右边界
  let right = -1;
  // j 是 i 所在回文的中点
  let j = -1;
  for (let i = 0; i < s.length; i++) {
    /**
     * 核心的逻辑就是 当一个  dcacd b dcacd 回文子串 被检测出的时候 其实已经检测过 左侧的回文dcacd 了
     * 这个时候 右侧检测a 的时候就应该 就应该直接检测 dcacd 之后的步骤
     * */
      // 当前的臂长
    let cur_arm_len;
    // right >= i 说明现在 i 还在上一个回文 中点右侧 且没有出界
    if (right >= i) {
      // 以上一个回文 j 为中点 镜像的左侧对应的 index
      const i_sym = j * 2 - i;
      // 能够直接跳过的部分是 左侧镜像点的臂长 和 右侧点到右边界的长度 中的 小者
      const min_arm_len = Math.min(arm_len[i_sym], right - i);
      //  取得当前 i 点位置的臂长(从左右侧 min_arm_len 位置向后开始)
      cur_arm_len = expand(s, i - min_arm_len, i + min_arm_len);
    } else {
      //  取得当前 i 点位置的臂长(从左右侧开始)
      cur_arm_len = expand(s, i, i);
    }
    // 存下当前臂长
    arm_len.push(cur_arm_len);
    // 如果当前的点 位置的臂长已经超过了 right 也就是i所在回文的右边界
    if (i + cur_arm_len > right) {
      // 则i成为 新的 外侧回文的终点
      j = i;
      // 同时更新右边界
      right = i + cur_arm_len;
    }
    // 更新回文 左start 右end
    if (cur_arm_len * 2 + 1 > end - start) {
      start = i - cur_arm_len;
      end = i + cur_arm_len;
    }
  }
  // 删掉 获取 start 和 end 中的内容中的 # 就是剩下答案了
  let ans = "";
  for (let i = start; i <= end; i++) {
    if (s[i] !== "#") {
      ans += s[i];
    }
  }
  return ans;
}

module.exports = manacher1
