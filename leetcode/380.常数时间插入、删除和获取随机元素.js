"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
设计一个支持在平均 时间复杂度 O(1) 下，执行以下操作的数据结构。

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
    /**
     * 使用一个数组 和 一个哈希表
     * */
    map = {};
    cache = [];
    constructor() { }
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
    /**
     * Get a random element from the set.
     * @return {number}
     */
    getRandom() {
        return lodash_1.default.sample(this.cache);
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzgwLuW4uOaVsOaXtumXtOaPkuWFpeOAgeWIoOmZpOWSjOiOt+WPlumaj+acuuWFg+e0oC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMzgwLuW4uOaVsOaXtumXtOaPkuWFpeOAgeWIoOmZpOWSjOiOt+WPlumaj+acuuWFg+e0oC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQW1DSTtBQUNKLG9EQUF1QjtBQUV2Qjs7R0FFRztBQUNILE1BQU0sYUFBYTtJQUNqQjs7U0FFSztJQUNMLEdBQUcsR0FBOEIsRUFBRSxDQUFDO0lBQ3BDLEtBQUssR0FBYSxFQUFFLENBQUM7SUFFckIsZ0JBQWUsQ0FBQztJQUVoQixRQUFRLENBQUMsR0FBVztRQUNsQixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDO0lBQy9CLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLEdBQVc7UUFDaEIsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ3RDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsR0FBVztRQUNoQjs7O2FBR0s7UUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUN0QyxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLG1DQUFtQztRQUNuQyxNQUFNLFVBQVUsR0FBRyxnQkFBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxXQUFXLENBQUM7UUFDbkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRDs7O09BR0c7SUFDSCxTQUFTO1FBQ1AsT0FBTyxnQkFBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQztDQUNGO0FBRUQ7Ozs7OztHQU1HO0FBRUgsb0RBQTRCO0FBQzVCLGFBQWE7QUFDYixNQUFNLFNBQVMsR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO0FBRXRDLGlDQUFpQztBQUNqQyxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBRTlDLHlCQUF5QjtBQUN6QixnQkFBTSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBRS9DLG9DQUFvQztBQUNwQyxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBRTlDLDBCQUEwQjtBQUMxQixnQkFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFFekMsa0NBQWtDO0FBQ2xDLGdCQUFNLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFFOUMsdUJBQXVCO0FBQ3ZCLGdCQUFNLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFFL0Msb0NBQW9DO0FBQ3BDLGdCQUFNLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUU3QyxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbuiuvuiuoeS4gOS4quaUr+aMgeWcqOW5s+WdhyDml7bpl7TlpI3mnYLluqYgTygxKSDkuIvvvIzmiafooYzku6XkuIvmk43kvZznmoTmlbDmja7nu5PmnoTjgIJcblxuaW5zZXJ0KHZhbCnvvJrlvZPlhYPntKAgdmFsIOS4jeWtmOWcqOaXtu+8jOWQkembhuWQiOS4reaPkuWFpeivpemhueOAglxucmVtb3ZlKHZhbCnvvJrlhYPntKAgdmFsIOWtmOWcqOaXtu+8jOS7jumbhuWQiOS4reenu+mZpOivpemhueOAglxuZ2V0UmFuZG9t77ya6ZqP5py66L+U5Zue546w5pyJ6ZuG5ZCI5Lit55qE5LiA6aG544CC5q+P5Liq5YWD57Sg5bqU6K+l5pyJ55u45ZCM55qE5qaC546H6KKr6L+U5Zue44CCXG7npLrkvosgOlxuXG4vLyDliJ3lp4vljJbkuIDkuKrnqbrnmoTpm4blkIjjgIJcblJhbmRvbWl6ZWRTZXQgcmFuZG9tU2V0ID0gbmV3IFJhbmRvbWl6ZWRTZXQoKTtcblxuLy8g5ZCR6ZuG5ZCI5Lit5o+S5YWlIDEg44CC6L+U5ZueIHRydWUg6KGo56S6IDEg6KKr5oiQ5Yqf5Zyw5o+S5YWl44CCXG5yYW5kb21TZXQuaW5zZXJ0KDEpO1xuXG4vLyDov5Tlm54gZmFsc2Ug77yM6KGo56S66ZuG5ZCI5Lit5LiN5a2Y5ZyoIDIg44CCXG5yYW5kb21TZXQucmVtb3ZlKDIpO1xuXG4vLyDlkJHpm4blkIjkuK3mj5LlhaUgMiDjgILov5Tlm54gdHJ1ZSDjgILpm4blkIjnjrDlnKjljIXlkKsgWzEsMl0g44CCXG5yYW5kb21TZXQuaW5zZXJ0KDIpO1xuXG4vLyBnZXRSYW5kb20g5bqU6ZqP5py66L+U5ZueIDEg5oiWIDIg44CCXG5yYW5kb21TZXQuZ2V0UmFuZG9tKCk7XG5cbi8vIOS7jumbhuWQiOS4reenu+mZpCAxIO+8jOi/lOWbniB0cnVlIOOAgumbhuWQiOeOsOWcqOWMheWQqyBbMl0g44CCXG5yYW5kb21TZXQucmVtb3ZlKDEpO1xuXG4vLyAyIOW3suWcqOmbhuWQiOS4re+8jOaJgOS7pei/lOWbniBmYWxzZSDjgIJcbnJhbmRvbVNldC5pbnNlcnQoMik7XG5cbi8vIOeUseS6jiAyIOaYr+mbhuWQiOS4reWUr+S4gOeahOaVsOWtl++8jGdldFJhbmRvbSDmgLvmmK/ov5Tlm54gMiDjgIJcbnJhbmRvbVNldC5nZXRSYW5kb20oKTtcblxu5p2l5rqQ77ya5Yqb5omj77yITGVldENvZGXvvIlcbumTvuaOpe+8mmh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL2luc2VydC1kZWxldGUtZ2V0cmFuZG9tLW8xXG7okZfkvZzmnYPlvZLpoobmiaPnvZHnu5zmiYDmnInjgILllYbkuJrovazovb3or7fogZTns7vlrpjmlrnmjojmnYPvvIzpnZ7llYbkuJrovazovb3or7fms6jmmI7lh7rlpITjgIJcbiogKi9cbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcblxuLyoqXG4gKiBJbml0aWFsaXplIHlvdXIgZGF0YSBzdHJ1Y3R1cmUgaGVyZS5cbiAqL1xuY2xhc3MgUmFuZG9taXplZFNldCB7XG4gIC8qKlxuICAgKiDkvb/nlKjkuIDkuKrmlbDnu4Qg5ZKMIOS4gOS4quWTiOW4jOihqFxuICAgKiAqL1xuICBtYXA6IHsgW2tleTogbnVtYmVyXTogbnVtYmVyIH0gPSB7fTtcbiAgY2FjaGU6IG51bWJlcltdID0gW107XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIGNvbnRhaW5zKHZhbDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwW3ZhbF0gIT0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnNlcnRzIGEgdmFsdWUgdG8gdGhlIHNldC4gUmV0dXJucyB0cnVlIGlmIHRoZSBzZXQgZGlkIG5vdCBhbHJlYWR5IGNvbnRhaW4gdGhlIHNwZWNpZmllZCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge251bWJlcn0gdmFsXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBpbnNlcnQodmFsOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5jb250YWlucyh2YWwpKSByZXR1cm4gZmFsc2U7XG4gICAgdGhpcy5jYWNoZS5wdXNoKHZhbCk7XG4gICAgdGhpcy5tYXBbdmFsXSA9IHRoaXMuY2FjaGUubGVuZ3RoIC0gMTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgdmFsdWUgZnJvbSB0aGUgc2V0LiBSZXR1cm5zIHRydWUgaWYgdGhlIHNldCBjb250YWluZWQgdGhlIHNwZWNpZmllZCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge251bWJlcn0gdmFsXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICByZW1vdmUodmFsOiBudW1iZXIpIHtcbiAgICAvKipcbiAgICAgKiDliKDpmaTnmoTml7blgJkg5oqK5pyA5ZCO5LiA5Liq5pWw5o2uIOaUvuWIsCDlt7Lnu4/liKDpmaTkuobmlbDmja7pop3kvY3nva4g5bCx5LiN55So5Ye6546w5b6q546v55qE5oOF5Ya1XG4gICAgICog5aaZ5ZWKXG4gICAgICogKi9cbiAgICBpZiAoIXRoaXMuY29udGFpbnModmFsKSkgcmV0dXJuIGZhbHNlO1xuICAgIGNvbnN0IGRlbGV0ZUluZGV4ID0gdGhpcy5tYXBbdmFsXTtcbiAgICAvLyDkuIrkuIDmrKHmj5LlhaXnmoTmlbDmja7nmoQgaW5kZXgg5bCx5pivIGNhY2hlIOeahGxlbmd0aFxuICAgIGNvbnN0IGxhdGVzdERhdGEgPSBfLmxhc3QodGhpcy5jYWNoZSkhO1xuICAgIHRoaXMubWFwW2xhdGVzdERhdGFdID0gZGVsZXRlSW5kZXg7XG4gICAgdGhpcy5jYWNoZS5zcGxpY2UoZGVsZXRlSW5kZXgsIDEsIGxhdGVzdERhdGEpO1xuICAgIHRoaXMuY2FjaGUucG9wKCk7XG4gICAgZGVsZXRlIHRoaXMubWFwW3ZhbF07XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgcmFuZG9tIGVsZW1lbnQgZnJvbSB0aGUgc2V0LlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXRSYW5kb20oKSB7XG4gICAgcmV0dXJuIF8uc2FtcGxlKHRoaXMuY2FjaGUpO1xuICB9XG59XG5cbi8qKlxuICogWW91ciBSYW5kb21pemVkU2V0IG9iamVjdCB3aWxsIGJlIGluc3RhbnRpYXRlZCBhbmQgY2FsbGVkIGFzIHN1Y2g6XG4gKiB2YXIgb2JqID0gbmV3IFJhbmRvbWl6ZWRTZXQoKVxuICogdmFyIHBhcmFtXzEgPSBvYmouaW5zZXJ0KHZhbClcbiAqIHZhciBwYXJhbV8yID0gb2JqLnJlbW92ZSh2YWwpXG4gKiB2YXIgcGFyYW1fMyA9IG9iai5nZXRSYW5kb20oKVxuICovXG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuLy8g5Yid5aeL5YyW5LiA5Liq56m655qE6ZuG5ZCI44CCXG5jb25zdCByYW5kb21TZXQgPSBuZXcgUmFuZG9taXplZFNldCgpO1xuXG4vLyDlkJHpm4blkIjkuK3mj5LlhaUgMSDjgILov5Tlm54gdHJ1ZSDooajnpLogMSDooqvmiJDlip/lnLDmj5LlhaXjgIJcbmFzc2VydC5zdHJpY3RFcXVhbChyYW5kb21TZXQuaW5zZXJ0KDEpLCB0cnVlKTtcblxuLy8g6L+U5ZueIGZhbHNlIO+8jOihqOekuumbhuWQiOS4reS4jeWtmOWcqCAyIOOAglxuYXNzZXJ0LnN0cmljdEVxdWFsKHJhbmRvbVNldC5yZW1vdmUoMiksIGZhbHNlKTtcblxuLy8g5ZCR6ZuG5ZCI5Lit5o+S5YWlIDIg44CC6L+U5ZueIHRydWUg44CC6ZuG5ZCI546w5Zyo5YyF5ZCrIFsxLDJdIOOAglxuYXNzZXJ0LnN0cmljdEVxdWFsKHJhbmRvbVNldC5pbnNlcnQoMiksIHRydWUpO1xuXG4vLyBnZXRSYW5kb20g5bqU6ZqP5py66L+U5ZueIDEg5oiWIDIg44CCXG5hc3NlcnQocmFuZG9tU2V0LmdldFJhbmRvbSgpID09PSAxIHx8IDIpO1xuXG4vLyDku47pm4blkIjkuK3np7vpmaQgMSDvvIzov5Tlm54gdHJ1ZSDjgILpm4blkIjnjrDlnKjljIXlkKsgWzJdIOOAglxuYXNzZXJ0LnN0cmljdEVxdWFsKHJhbmRvbVNldC5yZW1vdmUoMSksIHRydWUpO1xuXG4vLyAyIOW3suWcqOmbhuWQiOS4re+8jOaJgOS7pei/lOWbniBmYWxzZSDjgIJcbmFzc2VydC5zdHJpY3RFcXVhbChyYW5kb21TZXQuaW5zZXJ0KDIpLCBmYWxzZSk7XG5cbi8vIOeUseS6jiAyIOaYr+mbhuWQiOS4reWUr+S4gOeahOaVsOWtl++8jGdldFJhbmRvbSDmgLvmmK/ov5Tlm54gMiDjgIJcbmFzc2VydC5zdHJpY3RFcXVhbChyYW5kb21TZXQuZ2V0UmFuZG9tKCksIDIpO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwocmFuZG9tU2V0LnJlbW92ZSgyKSwgdHJ1ZSk7XG4iXX0=