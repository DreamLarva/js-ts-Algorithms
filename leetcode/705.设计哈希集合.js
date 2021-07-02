"use strict";
/*
不使用任何内建的哈希表库设计一个哈希集合

具体地说，你的设计应该包含以下的功能

add(value)：向哈希集合中插入一个值。
contains(value) ：返回哈希集合中是否存在这个值。
remove(value)：将给定值从哈希集合中删除。如果哈希集合中没有这个值，什么也不做。

示例:

MyHashSet hashSet = new MyHashSet();
hashSet.add(1);
hashSet.add(2);
hashSet.contains(1);    // 返回 true
hashSet.contains(3);    // 返回 false (未找到)
hashSet.add(2);
hashSet.contains(2);    // 返回 true
hashSet.remove(2);
hashSet.contains(2);    // 返回  false (已经被删除)

注意：

所有的值都在 [1, 1000000]的范围内。
操作的总数目在[1, 10000]范围内。
不要使用内建的哈希集合库。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/design-hashset
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Initialize your data structure here.
 */
class MyHashSet {
    length;
    cache;
    constructor(length = 101) {
        this.length = length;
        this.cache = Array(length)
            .fill(0)
            .map(() => []);
    }
    getHash(key) {
        return key % this.length;
    }
    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        if (this.contains(key))
            return;
        this.cache[this.getHash(key)].push(key);
    }
    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        if (!this.contains(key))
            return;
        this.cache[this.getHash(key)] = this.cache[this.getHash(key)].filter((v) => v !== key);
    }
    /**
     * Returns true if this set contains the specified element
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        return this.cache[this.getHash(key)].indexOf(key) !== -1;
    }
}
/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
/*
MyHashSet hashSet = new MyHashSet();
hashSet.add(1);
hashSet.add(2);
hashSet.contains(1);    // 返回 true
hashSet.contains(3);    // 返回 false (未找到)
hashSet.add(2);
hashSet.contains(2);    // 返回 true
hashSet.remove(2);
hashSet.contains(2);    // 返回  false (已经被删除)
* */
const assert_1 = __importDefault(require("assert"));
const hashSet = new MyHashSet();
hashSet.add(1);
hashSet.add(2);
assert_1.default.strictEqual(hashSet.contains(1), true); // 返回 true
assert_1.default.strictEqual(hashSet.contains(3), false); // 返回 false (未找到)
hashSet.add(2);
assert_1.default.strictEqual(hashSet.contains(2), true); // 返回 true
hashSet.remove(2);
assert_1.default.strictEqual(hashSet.contains(2), false); // 返回  false (已经被删除)
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzA1LuiuvuiuoeWTiOW4jOmbhuWQiC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNzA1LuiuvuiuoeWTiOW4jOmbhuWQiC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQThCSTs7Ozs7QUFFSjs7R0FFRztBQUNILE1BQU0sU0FBUztJQUdPO0lBRnBCLEtBQUssQ0FBYTtJQUVsQixZQUFvQixTQUFpQixHQUFHO1FBQXBCLFdBQU0sR0FBTixNQUFNLENBQWM7UUFDdEMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO2FBQ3ZCLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDUCxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUVELE9BQU8sQ0FBQyxHQUFXO1FBQ2pCLE9BQU8sR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDM0IsQ0FBQztJQUVEOzs7T0FHRztJQUNILEdBQUcsQ0FBQyxHQUFXO1FBQ2IsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztZQUFFLE9BQU87UUFFL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsR0FBVztRQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7WUFBRSxPQUFPO1FBRWhDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FDbEUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQ2pCLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILFFBQVEsQ0FBQyxHQUFXO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7Q0FDRjtBQUVEOzs7Ozs7R0FNRztBQUVIOzs7Ozs7Ozs7O0lBVUk7QUFDSixvREFBNEI7QUFFNUIsTUFBTSxPQUFPLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztBQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNmLGdCQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVO0FBQ3pELGdCQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxpQkFBaUI7QUFDakUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNmLGdCQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVO0FBQ3pELE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEIsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7kuI3kvb/nlKjku7vkvZXlhoXlu7rnmoTlk4jluIzooajlupPorr7orqHkuIDkuKrlk4jluIzpm4blkIhcblxu5YW35L2T5Zyw6K+077yM5L2g55qE6K6+6K6h5bqU6K+l5YyF5ZCr5Lul5LiL55qE5Yqf6IO9XG5cbmFkZCh2YWx1ZSnvvJrlkJHlk4jluIzpm4blkIjkuK3mj5LlhaXkuIDkuKrlgLzjgIJcbmNvbnRhaW5zKHZhbHVlKSDvvJrov5Tlm57lk4jluIzpm4blkIjkuK3mmK/lkKblrZjlnKjov5nkuKrlgLzjgIJcbnJlbW92ZSh2YWx1ZSnvvJrlsIbnu5nlrprlgLzku47lk4jluIzpm4blkIjkuK3liKDpmaTjgILlpoLmnpzlk4jluIzpm4blkIjkuK3msqHmnInov5nkuKrlgLzvvIzku4DkuYjkuZ/kuI3lgZrjgIJcblxu56S65L6LOlxuXG5NeUhhc2hTZXQgaGFzaFNldCA9IG5ldyBNeUhhc2hTZXQoKTtcbmhhc2hTZXQuYWRkKDEpO1xuaGFzaFNldC5hZGQoMik7XG5oYXNoU2V0LmNvbnRhaW5zKDEpOyAgICAvLyDov5Tlm54gdHJ1ZVxuaGFzaFNldC5jb250YWlucygzKTsgICAgLy8g6L+U5ZueIGZhbHNlICjmnKrmib7liLApXG5oYXNoU2V0LmFkZCgyKTtcbmhhc2hTZXQuY29udGFpbnMoMik7ICAgIC8vIOi/lOWbniB0cnVlXG5oYXNoU2V0LnJlbW92ZSgyKTtcbmhhc2hTZXQuY29udGFpbnMoMik7ICAgIC8vIOi/lOWbniAgZmFsc2UgKOW3sue7j+iiq+WIoOmZpClcblxu5rOo5oSP77yaXG5cbuaJgOacieeahOWAvOmDveWcqCBbMSwgMTAwMDAwMF3nmoTojIPlm7TlhoXjgIJcbuaTjeS9nOeahOaAu+aVsOebruWcqFsxLCAxMDAwMF3ojIPlm7TlhoXjgIJcbuS4jeimgeS9v+eUqOWGheW7uueahOWTiOW4jOmbhuWQiOW6k+OAglxuXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvZGVzaWduLWhhc2hzZXRcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxuKiAqL1xuXG4vKipcbiAqIEluaXRpYWxpemUgeW91ciBkYXRhIHN0cnVjdHVyZSBoZXJlLlxuICovXG5jbGFzcyBNeUhhc2hTZXQge1xuICBjYWNoZTogbnVtYmVyW11bXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxlbmd0aDogbnVtYmVyID0gMTAxKSB7XG4gICAgdGhpcy5jYWNoZSA9IEFycmF5KGxlbmd0aClcbiAgICAgIC5maWxsKDApXG4gICAgICAubWFwKCgpID0+IFtdKTtcbiAgfVxuXG4gIGdldEhhc2goa2V5OiBudW1iZXIpIHtcbiAgICByZXR1cm4ga2V5ICUgdGhpcy5sZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGtleVxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgYWRkKGtleTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuY29udGFpbnMoa2V5KSkgcmV0dXJuO1xuXG4gICAgdGhpcy5jYWNoZVt0aGlzLmdldEhhc2goa2V5KV0ucHVzaChrZXkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBrZXlcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIHJlbW92ZShrZXk6IG51bWJlcikge1xuICAgIGlmICghdGhpcy5jb250YWlucyhrZXkpKSByZXR1cm47XG5cbiAgICB0aGlzLmNhY2hlW3RoaXMuZ2V0SGFzaChrZXkpXSA9IHRoaXMuY2FjaGVbdGhpcy5nZXRIYXNoKGtleSldLmZpbHRlcihcbiAgICAgICh2KSA9PiB2ICE9PSBrZXlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGlzIHNldCBjb250YWlucyB0aGUgc3BlY2lmaWVkIGVsZW1lbnRcbiAgICogQHBhcmFtIHtudW1iZXJ9IGtleVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgY29udGFpbnMoa2V5OiBudW1iZXIpIHtcbiAgICByZXR1cm4gdGhpcy5jYWNoZVt0aGlzLmdldEhhc2goa2V5KV0uaW5kZXhPZihrZXkpICE9PSAtMTtcbiAgfVxufVxuXG4vKipcbiAqIFlvdXIgTXlIYXNoU2V0IG9iamVjdCB3aWxsIGJlIGluc3RhbnRpYXRlZCBhbmQgY2FsbGVkIGFzIHN1Y2g6XG4gKiB2YXIgb2JqID0gbmV3IE15SGFzaFNldCgpXG4gKiBvYmouYWRkKGtleSlcbiAqIG9iai5yZW1vdmUoa2V5KVxuICogdmFyIHBhcmFtXzMgPSBvYmouY29udGFpbnMoa2V5KVxuICovXG5cbi8qXG5NeUhhc2hTZXQgaGFzaFNldCA9IG5ldyBNeUhhc2hTZXQoKTtcbmhhc2hTZXQuYWRkKDEpO1xuaGFzaFNldC5hZGQoMik7XG5oYXNoU2V0LmNvbnRhaW5zKDEpOyAgICAvLyDov5Tlm54gdHJ1ZVxuaGFzaFNldC5jb250YWlucygzKTsgICAgLy8g6L+U5ZueIGZhbHNlICjmnKrmib7liLApXG5oYXNoU2V0LmFkZCgyKTtcbmhhc2hTZXQuY29udGFpbnMoMik7ICAgIC8vIOi/lOWbniB0cnVlXG5oYXNoU2V0LnJlbW92ZSgyKTtcbmhhc2hTZXQuY29udGFpbnMoMik7ICAgIC8vIOi/lOWbniAgZmFsc2UgKOW3sue7j+iiq+WIoOmZpClcbiogKi9cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG5jb25zdCBoYXNoU2V0ID0gbmV3IE15SGFzaFNldCgpO1xuaGFzaFNldC5hZGQoMSk7XG5oYXNoU2V0LmFkZCgyKTtcbmFzc2VydC5zdHJpY3RFcXVhbChoYXNoU2V0LmNvbnRhaW5zKDEpLCB0cnVlKTsgLy8g6L+U5ZueIHRydWVcbmFzc2VydC5zdHJpY3RFcXVhbChoYXNoU2V0LmNvbnRhaW5zKDMpLCBmYWxzZSk7IC8vIOi/lOWbniBmYWxzZSAo5pyq5om+5YiwKVxuaGFzaFNldC5hZGQoMik7XG5hc3NlcnQuc3RyaWN0RXF1YWwoaGFzaFNldC5jb250YWlucygyKSwgdHJ1ZSk7IC8vIOi/lOWbniB0cnVlXG5oYXNoU2V0LnJlbW92ZSgyKTtcbmFzc2VydC5zdHJpY3RFcXVhbChoYXNoU2V0LmNvbnRhaW5zKDIpLCBmYWxzZSk7IC8vIOi/lOWbniAgZmFsc2UgKOW3sue7j+iiq+WIoOmZpClcbiJdfQ==