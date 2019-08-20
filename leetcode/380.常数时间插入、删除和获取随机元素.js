"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const lodash_1 = __importDefault(require("lodash"));
/**
 * Initialize your data structure here.
 */
class RandomizedSet {
    constructor() {
        /**
         * 使用一个数组 和 一个哈希表
         * */
        this.map = {};
        this.cache = [];
    }
    contains(val) {
        return this.map[val] != null;
    }
    /**
     * Inserts a value to the set. Returns true if the set did not already contain the specified element.
     * @param {number} val
     * @return {boolean}
     */
    insert(val) {
        if (this.contains(val))
            return false;
        this.cache.push(val);
        this.map[val] = this.cache.length - 1;
        return true;
    }
    ;
    /**
     * Removes a value from the set. Returns true if the set contained the specified element.
     * @param {number} val
     * @return {boolean}
     */
    remove(val) {
        /**
         * 删除的时候 把最后一个数据 放到 已经删除了数据额位置 就不用出现循环的情况
         * 妙啊
         * */
        if (!this.contains(val))
            return false;
        const deleteIndex = this.map[val];
        // 上一次插入的数据的 index 就是 cache 的length
        const latestData = lodash_1.default.last(this.cache);
        this.map[latestData] = deleteIndex;
        this.cache.splice(deleteIndex, 1, latestData);
        this.cache.pop();
        delete this.map[val];
        return true;
    }
    ;
    /**
     * Get a random element from the set.
     * @return {number}
     */
    getRandom() {
        return lodash_1.default.sample(this.cache);
    }
    ;
}
/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
const assert_1 = __importDefault(require("assert"));
// 初始化一个空的集合。
const randomSet = new RandomizedSet();
// 向集合中插入 1 。返回 true 表示 1 被成功地插入。
assert_1.default.strictEqual(randomSet.insert(1), true);
// 返回 false ，表示集合中不存在 2 。
assert_1.default.strictEqual(randomSet.remove(2), false);
// 向集合中插入 2 。返回 true 。集合现在包含 [1,2] 。
assert_1.default.strictEqual(randomSet.insert(2), true);
// getRandom 应随机返回 1 或 2 。
assert_1.default(randomSet.getRandom() === 1 || 2);
// 从集合中移除 1 ，返回 true 。集合现在包含 [2] 。
assert_1.default.strictEqual(randomSet.remove(1), true);
// 2 已在集合中，所以返回 false 。
assert_1.default.strictEqual(randomSet.insert(2), false);
// 由于 2 是集合中唯一的数字，getRandom 总是返回 2 。
assert_1.default.strictEqual(randomSet.getRandom(), 2);
assert_1.default.strictEqual(randomSet.remove(2), true);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzgwLuW4uOaVsOaXtumXtOaPkuWFpeOAgeWIoOmZpOWSjOiOt+WPlumaj+acuuWFg+e0oC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMzgwLuW4uOaVsOaXtumXtOaPkuWFpeOAgeWIoOmZpOWSjOiOt+WPlumaj+acuuWFg+e0oC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQW1DSTtBQUNKLG9EQUF1QjtBQUV2Qjs7R0FFRztBQUNILE1BQU0sYUFBYTtJQU9mO1FBTkE7O2FBRUs7UUFDTCxRQUFHLEdBQThCLEVBQUUsQ0FBQztRQUNwQyxVQUFLLEdBQWEsRUFBRSxDQUFDO0lBR3JCLENBQUM7SUFFRCxRQUFRLENBQUMsR0FBVztRQUNoQixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDO0lBQ2pDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLEdBQVc7UUFDZCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO1lBQUUsT0FBTyxLQUFLLENBQUM7UUFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDdEMsT0FBTyxJQUFJLENBQUE7SUFDZixDQUFDO0lBQUEsQ0FBQztJQUVGOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsR0FBVztRQUNkOzs7YUFHSztRQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQ3RDLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEMsbUNBQW1DO1FBQ25DLE1BQU0sVUFBVSxHQUFHLGdCQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLFdBQVcsQ0FBQztRQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDakIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFBQSxDQUFDO0lBRUY7OztPQUdHO0lBQ0gsU0FBUztRQUNMLE9BQU8sZ0JBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFBQSxDQUFDO0NBRUw7QUFFRDs7Ozs7O0dBTUc7QUFHSCxvREFBNEI7QUFDNUIsYUFBYTtBQUNiLE1BQU0sU0FBUyxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7QUFFdEMsaUNBQWlDO0FBQ2pDLGdCQUFNLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFFOUMseUJBQXlCO0FBQ3pCLGdCQUFNLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFFL0Msb0NBQW9DO0FBQ3BDLGdCQUFNLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFFOUMsMEJBQTBCO0FBQzFCLGdCQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUV6QyxrQ0FBa0M7QUFDbEMsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUU5Qyx1QkFBdUI7QUFDdkIsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUUvQyxvQ0FBb0M7QUFDcEMsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRTdDLGdCQUFNLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG7orr7orqHkuIDkuKrmlK/mjIHlnKjlubPlnYfCoOaXtumXtOWkjeadguW6piBPKDEpwqDkuIvvvIzmiafooYzku6XkuIvmk43kvZznmoTmlbDmja7nu5PmnoTjgIJcclxuXHJcbmluc2VydCh2YWwp77ya5b2T5YWD57SgIHZhbCDkuI3lrZjlnKjml7bvvIzlkJHpm4blkIjkuK3mj5LlhaXor6XpobnjgIJcclxucmVtb3ZlKHZhbCnvvJrlhYPntKAgdmFsIOWtmOWcqOaXtu+8jOS7jumbhuWQiOS4reenu+mZpOivpemhueOAglxyXG5nZXRSYW5kb23vvJrpmo/mnLrov5Tlm57njrDmnInpm4blkIjkuK3nmoTkuIDpobnjgILmr4/kuKrlhYPntKDlupTor6XmnInnm7jlkIznmoTmpoLnjofooqvov5Tlm57jgIJcclxu56S65L6LIDpcclxuXHJcbi8vIOWIneWni+WMluS4gOS4quepuueahOmbhuWQiOOAglxyXG5SYW5kb21pemVkU2V0IHJhbmRvbVNldCA9IG5ldyBSYW5kb21pemVkU2V0KCk7XHJcblxyXG4vLyDlkJHpm4blkIjkuK3mj5LlhaUgMSDjgILov5Tlm54gdHJ1ZSDooajnpLogMSDooqvmiJDlip/lnLDmj5LlhaXjgIJcclxucmFuZG9tU2V0Lmluc2VydCgxKTtcclxuXHJcbi8vIOi/lOWbniBmYWxzZSDvvIzooajnpLrpm4blkIjkuK3kuI3lrZjlnKggMiDjgIJcclxucmFuZG9tU2V0LnJlbW92ZSgyKTtcclxuXHJcbi8vIOWQkembhuWQiOS4reaPkuWFpSAyIOOAgui/lOWbniB0cnVlIOOAgumbhuWQiOeOsOWcqOWMheWQqyBbMSwyXSDjgIJcclxucmFuZG9tU2V0Lmluc2VydCgyKTtcclxuXHJcbi8vIGdldFJhbmRvbSDlupTpmo/mnLrov5Tlm54gMSDmiJYgMiDjgIJcclxucmFuZG9tU2V0LmdldFJhbmRvbSgpO1xyXG5cclxuLy8g5LuO6ZuG5ZCI5Lit56e76ZmkIDEg77yM6L+U5ZueIHRydWUg44CC6ZuG5ZCI546w5Zyo5YyF5ZCrIFsyXSDjgIJcclxucmFuZG9tU2V0LnJlbW92ZSgxKTtcclxuXHJcbi8vIDIg5bey5Zyo6ZuG5ZCI5Lit77yM5omA5Lul6L+U5ZueIGZhbHNlIOOAglxyXG5yYW5kb21TZXQuaW5zZXJ0KDIpO1xyXG5cclxuLy8g55Sx5LqOIDIg5piv6ZuG5ZCI5Lit5ZSv5LiA55qE5pWw5a2X77yMZ2V0UmFuZG9tIOaAu+aYr+i/lOWbniAyIOOAglxyXG5yYW5kb21TZXQuZ2V0UmFuZG9tKCk7XHJcblxyXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxyXG7pk77mjqXvvJpodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9pbnNlcnQtZGVsZXRlLWdldHJhbmRvbS1vMVxyXG7okZfkvZzmnYPlvZLpoobmiaPnvZHnu5zmiYDmnInjgILllYbkuJrovazovb3or7fogZTns7vlrpjmlrnmjojmnYPvvIzpnZ7llYbkuJrovazovb3or7fms6jmmI7lh7rlpITjgIJcclxuKiAqL1xyXG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG4vKipcclxuICogSW5pdGlhbGl6ZSB5b3VyIGRhdGEgc3RydWN0dXJlIGhlcmUuXHJcbiAqL1xyXG5jbGFzcyBSYW5kb21pemVkU2V0IHtcclxuICAgIC8qKlxyXG4gICAgICog5L2/55So5LiA5Liq5pWw57uEIOWSjCDkuIDkuKrlk4jluIzooahcclxuICAgICAqICovXHJcbiAgICBtYXA6IHsgW2tleTogbnVtYmVyXTogbnVtYmVyIH0gPSB7fTtcclxuICAgIGNhY2hlOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnRhaW5zKHZhbDogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwW3ZhbF0gIT0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEluc2VydHMgYSB2YWx1ZSB0byB0aGUgc2V0LiBSZXR1cm5zIHRydWUgaWYgdGhlIHNldCBkaWQgbm90IGFscmVhZHkgY29udGFpbiB0aGUgc3BlY2lmaWVkIGVsZW1lbnQuXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmFsXHJcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxyXG4gICAgICovXHJcbiAgICBpbnNlcnQodmFsOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5jb250YWlucyh2YWwpKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jYWNoZS5wdXNoKHZhbCk7XHJcbiAgICAgICAgdGhpcy5tYXBbdmFsXSA9IHRoaXMuY2FjaGUubGVuZ3RoIC0gMTtcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgYSB2YWx1ZSBmcm9tIHRoZSBzZXQuIFJldHVybnMgdHJ1ZSBpZiB0aGUgc2V0IGNvbnRhaW5lZCB0aGUgc3BlY2lmaWVkIGVsZW1lbnQuXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmFsXHJcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxyXG4gICAgICovXHJcbiAgICByZW1vdmUodmFsOiBudW1iZXIpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDliKDpmaTnmoTml7blgJkg5oqK5pyA5ZCO5LiA5Liq5pWw5o2uIOaUvuWIsCDlt7Lnu4/liKDpmaTkuobmlbDmja7pop3kvY3nva4g5bCx5LiN55So5Ye6546w5b6q546v55qE5oOF5Ya1XHJcbiAgICAgICAgICog5aaZ5ZWKXHJcbiAgICAgICAgICogKi9cclxuICAgICAgICBpZiAoIXRoaXMuY29udGFpbnModmFsKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IGRlbGV0ZUluZGV4ID0gdGhpcy5tYXBbdmFsXTtcclxuICAgICAgICAvLyDkuIrkuIDmrKHmj5LlhaXnmoTmlbDmja7nmoQgaW5kZXgg5bCx5pivIGNhY2hlIOeahGxlbmd0aFxyXG4gICAgICAgIGNvbnN0IGxhdGVzdERhdGEgPSBfLmxhc3QodGhpcy5jYWNoZSkhO1xyXG4gICAgICAgIHRoaXMubWFwW2xhdGVzdERhdGFdID0gZGVsZXRlSW5kZXg7XHJcbiAgICAgICAgdGhpcy5jYWNoZS5zcGxpY2UoZGVsZXRlSW5kZXgsIDEsIGxhdGVzdERhdGEpO1xyXG4gICAgICAgIHRoaXMuY2FjaGUucG9wKCk7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMubWFwW3ZhbF07XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGEgcmFuZG9tIGVsZW1lbnQgZnJvbSB0aGUgc2V0LlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICBnZXRSYW5kb20oKSB7XHJcbiAgICAgICAgcmV0dXJuIF8uc2FtcGxlKHRoaXMuY2FjaGUpO1xyXG4gICAgfTtcclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBZb3VyIFJhbmRvbWl6ZWRTZXQgb2JqZWN0IHdpbGwgYmUgaW5zdGFudGlhdGVkIGFuZCBjYWxsZWQgYXMgc3VjaDpcclxuICogdmFyIG9iaiA9IG5ldyBSYW5kb21pemVkU2V0KClcclxuICogdmFyIHBhcmFtXzEgPSBvYmouaW5zZXJ0KHZhbClcclxuICogdmFyIHBhcmFtXzIgPSBvYmoucmVtb3ZlKHZhbClcclxuICogdmFyIHBhcmFtXzMgPSBvYmouZ2V0UmFuZG9tKClcclxuICovXHJcblxyXG5cclxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XHJcbi8vIOWIneWni+WMluS4gOS4quepuueahOmbhuWQiOOAglxyXG5jb25zdCByYW5kb21TZXQgPSBuZXcgUmFuZG9taXplZFNldCgpO1xyXG5cclxuLy8g5ZCR6ZuG5ZCI5Lit5o+S5YWlIDEg44CC6L+U5ZueIHRydWUg6KGo56S6IDEg6KKr5oiQ5Yqf5Zyw5o+S5YWl44CCXHJcbmFzc2VydC5zdHJpY3RFcXVhbChyYW5kb21TZXQuaW5zZXJ0KDEpLCB0cnVlKTtcclxuXHJcbi8vIOi/lOWbniBmYWxzZSDvvIzooajnpLrpm4blkIjkuK3kuI3lrZjlnKggMiDjgIJcclxuYXNzZXJ0LnN0cmljdEVxdWFsKHJhbmRvbVNldC5yZW1vdmUoMiksIGZhbHNlKTtcclxuXHJcbi8vIOWQkembhuWQiOS4reaPkuWFpSAyIOOAgui/lOWbniB0cnVlIOOAgumbhuWQiOeOsOWcqOWMheWQqyBbMSwyXSDjgIJcclxuYXNzZXJ0LnN0cmljdEVxdWFsKHJhbmRvbVNldC5pbnNlcnQoMiksIHRydWUpO1xyXG5cclxuLy8gZ2V0UmFuZG9tIOW6lOmaj+acuui/lOWbniAxIOaIliAyIOOAglxyXG5hc3NlcnQocmFuZG9tU2V0LmdldFJhbmRvbSgpID09PSAxIHx8IDIpO1xyXG5cclxuLy8g5LuO6ZuG5ZCI5Lit56e76ZmkIDEg77yM6L+U5ZueIHRydWUg44CC6ZuG5ZCI546w5Zyo5YyF5ZCrIFsyXSDjgIJcclxuYXNzZXJ0LnN0cmljdEVxdWFsKHJhbmRvbVNldC5yZW1vdmUoMSksIHRydWUpO1xyXG5cclxuLy8gMiDlt7LlnKjpm4blkIjkuK3vvIzmiYDku6Xov5Tlm54gZmFsc2Ug44CCXHJcbmFzc2VydC5zdHJpY3RFcXVhbChyYW5kb21TZXQuaW5zZXJ0KDIpLCBmYWxzZSk7XHJcblxyXG4vLyDnlLHkuo4gMiDmmK/pm4blkIjkuK3llK/kuIDnmoTmlbDlrZfvvIxnZXRSYW5kb20g5oC75piv6L+U5ZueIDIg44CCXHJcbmFzc2VydC5zdHJpY3RFcXVhbChyYW5kb21TZXQuZ2V0UmFuZG9tKCksIDIpO1xyXG5cclxuYXNzZXJ0LnN0cmljdEVxdWFsKHJhbmRvbVNldC5yZW1vdmUoMiksIHRydWUpO1xyXG5cclxuXHJcbiJdfQ==