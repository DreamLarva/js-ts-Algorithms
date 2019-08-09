/**
 * N个值，此时每份的数值在一个固定的区间 [max, min] 内。浮动 从视觉上看，每份的数量在平均线上下波动，并带有随机性,
 * 但是所有的值得总和依然是[max,min]的平均值
 * */


/**
 * 穷举 所以的结果为一个 树形结构
 * */
function exhaustWave(n = 5, crest = 4, trough = 4) {
    let root = {parent: null, count: null, subtotal: 0}; // 根节点
    let leaves = [root]; // 叶子（数组）
    let level = 0; // 层数
    // 检查当前组合是否合法
    let isOK = subtotal => {
        if (level < n - 1) {
            if (-subtotal <= (n - level) * crest || subtotal <= (n - level) * trough) return true;
        } else return subtotal === 0;
    };
    // 生成组合树
    while (level < n) {
        let newLeaves = []; // 存储最新叶子
        leaves.forEach(node => {
            for (let count = -trough; count <= crest; ++count) {
                let subtotal = node.subtotal + count;
                isOK(subtotal) && newLeaves.push(
                    {parent: node, count: count, subtotal: subtotal}
                );
            }
        });
        leaves = newLeaves;
        ++level;
    }
    // 随机取一片叶子
    let leaf = leaves[Math.random() * leaves.length >> 0];
    let group = [leaf.count];
    for (let i = 0; i < 4; ++i) {
        leaf = leaf.parent;
        group.push(leaf.count);
    }
    return group;
}

/**
 * 更佳 快速分配 动态配置之后的 能够随机的值 的区间
 * */
function quickWave(n = 5, crest = 4, trough = 4, isInteger = true) {
    let list = [];
    // 无法进行波动均分，直接返回完全平分
    if (crest > (n - 1) * trough || trough > (n - 1) * crest) {
        return new Array(n).fill(0);
    }
    let base = 0; // 最少需要消除的高度
    let wave = 0; // 波动量
    let high = crest; // 高位
    let low = -trough; // 低位
    let sum = 0; // 累计量
    let count = n; // 剩余数量
    while (--count >= 0) {
        // 动态当前的波动量
        if (crest > count * trough - sum) {
            high = count * trough - sum;
        }
        if (trough > count * crest + sum) {
            low = -sum - count * crest;
        }
        base = low;
        wave = high - low;
        let rnd; // 随机波动量
        if (count > 0) {
            rnd = base + Math.random() * (wave + 1); // 随机波动
        } else {
            rnd = -sum;
        }
        if (isInteger === true) {
            rnd = Math.floor(rnd);
        }
        sum += rnd;
        list.push(rnd);
    }
    return list;
}


console.log(exhaustWave(5, 4, 4)); // 组合总数: 3951
console.log(quickWave(5, 4, 4)); // 组合总数: 3951
