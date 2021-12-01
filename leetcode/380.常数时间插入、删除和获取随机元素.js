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
(0, assert_1.default)(randomSet.getRandom() === 1 || 2);
// 从集合中移除 1 ，返回 true 。集合现在包含 [2] 。
assert_1.default.strictEqual(randomSet.remove(1), true);
// 2 已在集合中，所以返回 false 。
assert_1.default.strictEqual(randomSet.insert(2), false);
// 由于 2 是集合中唯一的数字，getRandom 总是返回 2 。
assert_1.default.strictEqual(randomSet.getRandom(), 2);
assert_1.default.strictEqual(randomSet.remove(2), true);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzgwLuW4uOaVsOaXtumXtOaPkuWFpeOAgeWIoOmZpOWSjOiOt+WPlumaj+acuuWFg+e0oC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMzgwLuW4uOaVsOaXtumXtOaPkuWFpeOAgeWIoOmZpOWSjOiOt+WPlumaj+acuuWFg+e0oC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQW1DSTtBQUNKLG9EQUF1QjtBQUV2Qjs7R0FFRztBQUNILE1BQU0sYUFBYTtJQUNqQjs7U0FFSztJQUNMLEdBQUcsR0FBOEIsRUFBRSxDQUFDO0lBQ3BDLEtBQUssR0FBYSxFQUFFLENBQUM7SUFFckIsZ0JBQWUsQ0FBQztJQUVoQixRQUFRLENBQUMsR0FBVztRQUNsQixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDO0lBQy9CLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLEdBQVc7UUFDaEIsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ3RDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsR0FBVztRQUNoQjs7O2FBR0s7UUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUN0QyxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLG1DQUFtQztRQUNuQyxNQUFNLFVBQVUsR0FBRyxnQkFBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxXQUFXLENBQUM7UUFDbkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRDs7O09BR0c7SUFDSCxTQUFTO1FBQ1AsT0FBTyxnQkFBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQztDQUNGO0FBRUQ7Ozs7OztHQU1HO0FBRUgsb0RBQTRCO0FBQzVCLGFBQWE7QUFDYixNQUFNLFNBQVMsR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO0FBRXRDLGlDQUFpQztBQUNqQyxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBRTlDLHlCQUF5QjtBQUN6QixnQkFBTSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBRS9DLG9DQUFvQztBQUNwQyxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBRTlDLDBCQUEwQjtBQUMxQixJQUFBLGdCQUFNLEVBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUV6QyxrQ0FBa0M7QUFDbEMsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUU5Qyx1QkFBdUI7QUFDdkIsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUUvQyxvQ0FBb0M7QUFDcEMsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRTdDLGdCQUFNLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu6K6+6K6h5LiA5Liq5pSv5oyB5Zyo5bmz5Z2HIOaXtumXtOWkjeadguW6piBPKDEpIOS4i++8jOaJp+ihjOS7peS4i+aTjeS9nOeahOaVsOaNrue7k+aehOOAglxuXG5pbnNlcnQodmFsKe+8muW9k+WFg+e0oCB2YWwg5LiN5a2Y5Zyo5pe277yM5ZCR6ZuG5ZCI5Lit5o+S5YWl6K+l6aG544CCXG5yZW1vdmUodmFsKe+8muWFg+e0oCB2YWwg5a2Y5Zyo5pe277yM5LuO6ZuG5ZCI5Lit56e76Zmk6K+l6aG544CCXG5nZXRSYW5kb23vvJrpmo/mnLrov5Tlm57njrDmnInpm4blkIjkuK3nmoTkuIDpobnjgILmr4/kuKrlhYPntKDlupTor6XmnInnm7jlkIznmoTmpoLnjofooqvov5Tlm57jgIJcbuekuuS+iyA6XG5cbi8vIOWIneWni+WMluS4gOS4quepuueahOmbhuWQiOOAglxuUmFuZG9taXplZFNldCByYW5kb21TZXQgPSBuZXcgUmFuZG9taXplZFNldCgpO1xuXG4vLyDlkJHpm4blkIjkuK3mj5LlhaUgMSDjgILov5Tlm54gdHJ1ZSDooajnpLogMSDooqvmiJDlip/lnLDmj5LlhaXjgIJcbnJhbmRvbVNldC5pbnNlcnQoMSk7XG5cbi8vIOi/lOWbniBmYWxzZSDvvIzooajnpLrpm4blkIjkuK3kuI3lrZjlnKggMiDjgIJcbnJhbmRvbVNldC5yZW1vdmUoMik7XG5cbi8vIOWQkembhuWQiOS4reaPkuWFpSAyIOOAgui/lOWbniB0cnVlIOOAgumbhuWQiOeOsOWcqOWMheWQqyBbMSwyXSDjgIJcbnJhbmRvbVNldC5pbnNlcnQoMik7XG5cbi8vIGdldFJhbmRvbSDlupTpmo/mnLrov5Tlm54gMSDmiJYgMiDjgIJcbnJhbmRvbVNldC5nZXRSYW5kb20oKTtcblxuLy8g5LuO6ZuG5ZCI5Lit56e76ZmkIDEg77yM6L+U5ZueIHRydWUg44CC6ZuG5ZCI546w5Zyo5YyF5ZCrIFsyXSDjgIJcbnJhbmRvbVNldC5yZW1vdmUoMSk7XG5cbi8vIDIg5bey5Zyo6ZuG5ZCI5Lit77yM5omA5Lul6L+U5ZueIGZhbHNlIOOAglxucmFuZG9tU2V0Lmluc2VydCgyKTtcblxuLy8g55Sx5LqOIDIg5piv6ZuG5ZCI5Lit5ZSv5LiA55qE5pWw5a2X77yMZ2V0UmFuZG9tIOaAu+aYr+i/lOWbniAyIOOAglxucmFuZG9tU2V0LmdldFJhbmRvbSgpO1xuXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvaW5zZXJ0LWRlbGV0ZS1nZXRyYW5kb20tbzFcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxuKiAqL1xuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuXG4vKipcbiAqIEluaXRpYWxpemUgeW91ciBkYXRhIHN0cnVjdHVyZSBoZXJlLlxuICovXG5jbGFzcyBSYW5kb21pemVkU2V0IHtcbiAgLyoqXG4gICAqIOS9v+eUqOS4gOS4quaVsOe7hCDlkowg5LiA5Liq5ZOI5biM6KGoXG4gICAqICovXG4gIG1hcDogeyBba2V5OiBudW1iZXJdOiBudW1iZXIgfSA9IHt9O1xuICBjYWNoZTogbnVtYmVyW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgY29udGFpbnModmFsOiBudW1iZXIpIHtcbiAgICByZXR1cm4gdGhpcy5tYXBbdmFsXSAhPSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEluc2VydHMgYSB2YWx1ZSB0byB0aGUgc2V0LiBSZXR1cm5zIHRydWUgaWYgdGhlIHNldCBkaWQgbm90IGFscmVhZHkgY29udGFpbiB0aGUgc3BlY2lmaWVkIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB2YWxcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGluc2VydCh2YWw6IG51bWJlcikge1xuICAgIGlmICh0aGlzLmNvbnRhaW5zKHZhbCkpIHJldHVybiBmYWxzZTtcbiAgICB0aGlzLmNhY2hlLnB1c2godmFsKTtcbiAgICB0aGlzLm1hcFt2YWxdID0gdGhpcy5jYWNoZS5sZW5ndGggLSAxO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYSB2YWx1ZSBmcm9tIHRoZSBzZXQuIFJldHVybnMgdHJ1ZSBpZiB0aGUgc2V0IGNvbnRhaW5lZCB0aGUgc3BlY2lmaWVkIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB2YWxcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIHJlbW92ZSh2YWw6IG51bWJlcikge1xuICAgIC8qKlxuICAgICAqIOWIoOmZpOeahOaXtuWAmSDmiormnIDlkI7kuIDkuKrmlbDmja4g5pS+5YiwIOW3sue7j+WIoOmZpOS6huaVsOaNrumineS9jee9riDlsLHkuI3nlKjlh7rnjrDlvqrnjq/nmoTmg4XlhrVcbiAgICAgKiDlppnllYpcbiAgICAgKiAqL1xuICAgIGlmICghdGhpcy5jb250YWlucyh2YWwpKSByZXR1cm4gZmFsc2U7XG4gICAgY29uc3QgZGVsZXRlSW5kZXggPSB0aGlzLm1hcFt2YWxdO1xuICAgIC8vIOS4iuS4gOasoeaPkuWFpeeahOaVsOaNrueahCBpbmRleCDlsLHmmK8gY2FjaGUg55qEbGVuZ3RoXG4gICAgY29uc3QgbGF0ZXN0RGF0YSA9IF8ubGFzdCh0aGlzLmNhY2hlKSE7XG4gICAgdGhpcy5tYXBbbGF0ZXN0RGF0YV0gPSBkZWxldGVJbmRleDtcbiAgICB0aGlzLmNhY2hlLnNwbGljZShkZWxldGVJbmRleCwgMSwgbGF0ZXN0RGF0YSk7XG4gICAgdGhpcy5jYWNoZS5wb3AoKTtcbiAgICBkZWxldGUgdGhpcy5tYXBbdmFsXTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSByYW5kb20gZWxlbWVudCBmcm9tIHRoZSBzZXQuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldFJhbmRvbSgpIHtcbiAgICByZXR1cm4gXy5zYW1wbGUodGhpcy5jYWNoZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBZb3VyIFJhbmRvbWl6ZWRTZXQgb2JqZWN0IHdpbGwgYmUgaW5zdGFudGlhdGVkIGFuZCBjYWxsZWQgYXMgc3VjaDpcbiAqIHZhciBvYmogPSBuZXcgUmFuZG9taXplZFNldCgpXG4gKiB2YXIgcGFyYW1fMSA9IG9iai5pbnNlcnQodmFsKVxuICogdmFyIHBhcmFtXzIgPSBvYmoucmVtb3ZlKHZhbClcbiAqIHZhciBwYXJhbV8zID0gb2JqLmdldFJhbmRvbSgpXG4gKi9cblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG4vLyDliJ3lp4vljJbkuIDkuKrnqbrnmoTpm4blkIjjgIJcbmNvbnN0IHJhbmRvbVNldCA9IG5ldyBSYW5kb21pemVkU2V0KCk7XG5cbi8vIOWQkembhuWQiOS4reaPkuWFpSAxIOOAgui/lOWbniB0cnVlIOihqOekuiAxIOiiq+aIkOWKn+WcsOaPkuWFpeOAglxuYXNzZXJ0LnN0cmljdEVxdWFsKHJhbmRvbVNldC5pbnNlcnQoMSksIHRydWUpO1xuXG4vLyDov5Tlm54gZmFsc2Ug77yM6KGo56S66ZuG5ZCI5Lit5LiN5a2Y5ZyoIDIg44CCXG5hc3NlcnQuc3RyaWN0RXF1YWwocmFuZG9tU2V0LnJlbW92ZSgyKSwgZmFsc2UpO1xuXG4vLyDlkJHpm4blkIjkuK3mj5LlhaUgMiDjgILov5Tlm54gdHJ1ZSDjgILpm4blkIjnjrDlnKjljIXlkKsgWzEsMl0g44CCXG5hc3NlcnQuc3RyaWN0RXF1YWwocmFuZG9tU2V0Lmluc2VydCgyKSwgdHJ1ZSk7XG5cbi8vIGdldFJhbmRvbSDlupTpmo/mnLrov5Tlm54gMSDmiJYgMiDjgIJcbmFzc2VydChyYW5kb21TZXQuZ2V0UmFuZG9tKCkgPT09IDEgfHwgMik7XG5cbi8vIOS7jumbhuWQiOS4reenu+mZpCAxIO+8jOi/lOWbniB0cnVlIOOAgumbhuWQiOeOsOWcqOWMheWQqyBbMl0g44CCXG5hc3NlcnQuc3RyaWN0RXF1YWwocmFuZG9tU2V0LnJlbW92ZSgxKSwgdHJ1ZSk7XG5cbi8vIDIg5bey5Zyo6ZuG5ZCI5Lit77yM5omA5Lul6L+U5ZueIGZhbHNlIOOAglxuYXNzZXJ0LnN0cmljdEVxdWFsKHJhbmRvbVNldC5pbnNlcnQoMiksIGZhbHNlKTtcblxuLy8g55Sx5LqOIDIg5piv6ZuG5ZCI5Lit5ZSv5LiA55qE5pWw5a2X77yMZ2V0UmFuZG9tIOaAu+aYr+i/lOWbniAyIOOAglxuYXNzZXJ0LnN0cmljdEVxdWFsKHJhbmRvbVNldC5nZXRSYW5kb20oKSwgMik7XG5cbmFzc2VydC5zdHJpY3RFcXVhbChyYW5kb21TZXQucmVtb3ZlKDIpLCB0cnVlKTtcbiJdfQ==