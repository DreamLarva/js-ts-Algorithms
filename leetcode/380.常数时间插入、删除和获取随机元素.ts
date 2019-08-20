/*
设计一个支持在平均 时间复杂度 O(1) 下，执行以下操作的数据结构。

insert(val)：当元素 val 不存在时，向集合中插入该项。
remove(val)：元素 val 存在时，从集合中移除该项。
getRandom：随机返回现有集合中的一项。每个元素应该有相同的概率被返回。
示例 :

// 初始化一个空的集合。
RandomizedSet randomSet = new RandomizedSet();

// 向集合中插入 1 。返回 true 表示 1 被成功地插入。
randomSet.insert(1);

// 返回 false ，表示集合中不存在 2 。
randomSet.remove(2);

// 向集合中插入 2 。返回 true 。集合现在包含 [1,2] 。
randomSet.insert(2);

// getRandom 应随机返回 1 或 2 。
randomSet.getRandom();

// 从集合中移除 1 ，返回 true 。集合现在包含 [2] 。
randomSet.remove(1);

// 2 已在集合中，所以返回 false 。
randomSet.insert(2);

// 由于 2 是集合中唯一的数字，getRandom 总是返回 2 。
randomSet.getRandom();

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/insert-delete-getrandom-o1
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
import _ from "lodash";

/**
 * Initialize your data structure here.
 */
class RandomizedSet {
    /**
     * 使用一个数组 和 一个哈希表
     * */
    map: { [key: number]: number } = {};
    cache: number[] = [];

    constructor() {
    }

    contains(val: number) {
        return this.map[val] != null;
    }

    /**
     * Inserts a value to the set. Returns true if the set did not already contain the specified element.
     * @param {number} val
     * @return {boolean}
     */
    insert(val: number) {
        if (this.contains(val)) return false;
        this.cache.push(val);
        this.map[val] = this.cache.length - 1;
        return true
    };

    /**
     * Removes a value from the set. Returns true if the set contained the specified element.
     * @param {number} val
     * @return {boolean}
     */
    remove(val: number) {
        /**
         * 删除的时候 把最后一个数据 放到 已经删除了数据额位置 就不用出现循环的情况
         * 妙啊
         * */
        if (!this.contains(val)) return false;
        const deleteIndex = this.map[val];
        // 上一次插入的数据的 index 就是 cache 的length
        const latestData = _.last(this.cache)!;
        this.map[latestData] = deleteIndex;
        this.cache.splice(deleteIndex, 1, latestData);
        this.cache.pop();
        delete this.map[val];
        return true;
    };

    /**
     * Get a random element from the set.
     * @return {number}
     */
    getRandom() {
        return _.sample(this.cache);
    };

}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */


import assert from "assert";
// 初始化一个空的集合。
const randomSet = new RandomizedSet();

// 向集合中插入 1 。返回 true 表示 1 被成功地插入。
assert.strictEqual(randomSet.insert(1), true);

// 返回 false ，表示集合中不存在 2 。
assert.strictEqual(randomSet.remove(2), false);

// 向集合中插入 2 。返回 true 。集合现在包含 [1,2] 。
assert.strictEqual(randomSet.insert(2), true);

// getRandom 应随机返回 1 或 2 。
assert(randomSet.getRandom() === 1 || 2);

// 从集合中移除 1 ，返回 true 。集合现在包含 [2] 。
assert.strictEqual(randomSet.remove(1), true);

// 2 已在集合中，所以返回 false 。
assert.strictEqual(randomSet.insert(2), false);

// 由于 2 是集合中唯一的数字，getRandom 总是返回 2 。
assert.strictEqual(randomSet.getRandom(), 2);

assert.strictEqual(randomSet.remove(2), true);


