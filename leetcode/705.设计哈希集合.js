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
hashSet.contains(1);    // 返回 true
hashSet.contains(3);    // 返回 false (未找到)
hashSet.add(2);
hashSet.contains(2);    // 返回 true
hashSet.remove(2);
hashSet.contains(2);    // 返回  false (已经被删除)

注意：

所有的值都在 [1, 1000000]的范围内。
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
hashSet.contains(1);    // 返回 true
hashSet.contains(3);    // 返回 false (未找到)
hashSet.add(2);
hashSet.contains(2);    // 返回 true
hashSet.remove(2);
hashSet.contains(2);    // 返回  false (已经被删除)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzA1LuiuvuiuoeWTiOW4jOmbhuWQiC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNzA1LuiuvuiuoeWTiOW4jOmbhuWQiC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQThCSTs7Ozs7QUFFSjs7R0FFRztBQUNILE1BQU0sU0FBUztJQUdiLFlBQW9CLFNBQWlCLEdBQUc7UUFBcEIsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQUN0QyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7YUFDdkIsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUNQLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBRUQsT0FBTyxDQUFDLEdBQVc7UUFDakIsT0FBTyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUMzQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsR0FBRyxDQUFDLEdBQVc7UUFDYixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO1lBQUUsT0FBTztRQUUvQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxHQUFXO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztZQUFFLE9BQU87UUFFaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUNsRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FDakIsQ0FBQztJQUNKLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsUUFBUSxDQUFDLEdBQVc7UUFDbEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDM0QsQ0FBQztDQUNGO0FBRUQ7Ozs7OztHQU1HO0FBRUg7Ozs7Ozs7Ozs7SUFVSTtBQUNKLG9EQUE0QjtBQUU1QixNQUFNLE9BQU8sR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDO0FBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2YsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVU7QUFDekQsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLGlCQUFpQjtBQUNqRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2YsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVU7QUFDekQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNsQixnQkFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLypcbuS4jeS9v+eUqOS7u+S9leWGheW7uueahOWTiOW4jOihqOW6k+iuvuiuoeS4gOS4quWTiOW4jOmbhuWQiFxuXG7lhbfkvZPlnLDor7TvvIzkvaDnmoTorr7orqHlupTor6XljIXlkKvku6XkuIvnmoTlip/og71cblxuYWRkKHZhbHVlKe+8muWQkeWTiOW4jOmbhuWQiOS4reaPkuWFpeS4gOS4quWAvOOAglxuY29udGFpbnModmFsdWUpIO+8mui/lOWbnuWTiOW4jOmbhuWQiOS4reaYr+WQpuWtmOWcqOi/meS4quWAvOOAglxucmVtb3ZlKHZhbHVlKe+8muWwhue7meWumuWAvOS7juWTiOW4jOmbhuWQiOS4reWIoOmZpOOAguWmguaenOWTiOW4jOmbhuWQiOS4reayoeaciei/meS4quWAvO+8jOS7gOS5iOS5n+S4jeWBmuOAglxuXG7npLrkvos6XG5cbk15SGFzaFNldCBoYXNoU2V0ID0gbmV3IE15SGFzaFNldCgpO1xuaGFzaFNldC5hZGQoMSk7IMKgIMKgIMKgIMKgXG5oYXNoU2V0LmFkZCgyKTsgwqAgwqAgwqAgwqBcbmhhc2hTZXQuY29udGFpbnMoMSk7IMKgwqDCoC8vIOi/lOWbniB0cnVlXG5oYXNoU2V0LmNvbnRhaW5zKDMpOyDCoMKgwqAvLyDov5Tlm54gZmFsc2UgKOacquaJvuWIsClcbmhhc2hTZXQuYWRkKDIpOyDCoCDCoCDCoCDCoCDCoFxuaGFzaFNldC5jb250YWlucygyKTsgwqDCoMKgLy8g6L+U5ZueIHRydWVcbmhhc2hTZXQucmVtb3ZlKDIpOyDCoCDCoCDCoCDCoCDCoFxuaGFzaFNldC5jb250YWlucygyKTsgwqDCoMKgLy8g6L+U5ZueICBmYWxzZSAo5bey57uP6KKr5Yig6ZmkKVxuXG7ms6jmhI/vvJpcblxu5omA5pyJ55qE5YC86YO95ZyowqBbMSwgMTAwMDAwMF3nmoTojIPlm7TlhoXjgIJcbuaTjeS9nOeahOaAu+aVsOebruWcqFsxLCAxMDAwMF3ojIPlm7TlhoXjgIJcbuS4jeimgeS9v+eUqOWGheW7uueahOWTiOW4jOmbhuWQiOW6k+OAglxuXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvZGVzaWduLWhhc2hzZXRcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxuKiAqL1xuXG4vKipcbiAqIEluaXRpYWxpemUgeW91ciBkYXRhIHN0cnVjdHVyZSBoZXJlLlxuICovXG5jbGFzcyBNeUhhc2hTZXQge1xuICBjYWNoZTogbnVtYmVyW11bXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxlbmd0aDogbnVtYmVyID0gMTAxKSB7XG4gICAgdGhpcy5jYWNoZSA9IEFycmF5KGxlbmd0aClcbiAgICAgIC5maWxsKDApXG4gICAgICAubWFwKCgpID0+IFtdKTtcbiAgfVxuXG4gIGdldEhhc2goa2V5OiBudW1iZXIpIHtcbiAgICByZXR1cm4ga2V5ICUgdGhpcy5sZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGtleVxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgYWRkKGtleTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuY29udGFpbnMoa2V5KSkgcmV0dXJuO1xuXG4gICAgdGhpcy5jYWNoZVt0aGlzLmdldEhhc2goa2V5KV0ucHVzaChrZXkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBrZXlcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIHJlbW92ZShrZXk6IG51bWJlcikge1xuICAgIGlmICghdGhpcy5jb250YWlucyhrZXkpKSByZXR1cm47XG5cbiAgICB0aGlzLmNhY2hlW3RoaXMuZ2V0SGFzaChrZXkpXSA9IHRoaXMuY2FjaGVbdGhpcy5nZXRIYXNoKGtleSldLmZpbHRlcihcbiAgICAgICh2KSA9PiB2ICE9PSBrZXlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGlzIHNldCBjb250YWlucyB0aGUgc3BlY2lmaWVkIGVsZW1lbnRcbiAgICogQHBhcmFtIHtudW1iZXJ9IGtleVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgY29udGFpbnMoa2V5OiBudW1iZXIpIHtcbiAgICByZXR1cm4gdGhpcy5jYWNoZVt0aGlzLmdldEhhc2goa2V5KV0uaW5kZXhPZihrZXkpICE9PSAtMTtcbiAgfVxufVxuXG4vKipcbiAqIFlvdXIgTXlIYXNoU2V0IG9iamVjdCB3aWxsIGJlIGluc3RhbnRpYXRlZCBhbmQgY2FsbGVkIGFzIHN1Y2g6XG4gKiB2YXIgb2JqID0gbmV3IE15SGFzaFNldCgpXG4gKiBvYmouYWRkKGtleSlcbiAqIG9iai5yZW1vdmUoa2V5KVxuICogdmFyIHBhcmFtXzMgPSBvYmouY29udGFpbnMoa2V5KVxuICovXG5cbi8qXG5NeUhhc2hTZXQgaGFzaFNldCA9IG5ldyBNeUhhc2hTZXQoKTtcbmhhc2hTZXQuYWRkKDEpOyDCoCDCoCDCoCDCoFxuaGFzaFNldC5hZGQoMik7IMKgIMKgIMKgIMKgXG5oYXNoU2V0LmNvbnRhaW5zKDEpOyDCoMKgwqAvLyDov5Tlm54gdHJ1ZVxuaGFzaFNldC5jb250YWlucygzKTsgwqDCoMKgLy8g6L+U5ZueIGZhbHNlICjmnKrmib7liLApXG5oYXNoU2V0LmFkZCgyKTsgwqAgwqAgwqAgwqAgwqBcbmhhc2hTZXQuY29udGFpbnMoMik7IMKgwqDCoC8vIOi/lOWbniB0cnVlXG5oYXNoU2V0LnJlbW92ZSgyKTsgwqAgwqAgwqAgwqAgwqBcbmhhc2hTZXQuY29udGFpbnMoMik7IMKgwqDCoC8vIOi/lOWbniAgZmFsc2UgKOW3sue7j+iiq+WIoOmZpClcbiogKi9cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG5jb25zdCBoYXNoU2V0ID0gbmV3IE15SGFzaFNldCgpO1xuaGFzaFNldC5hZGQoMSk7XG5oYXNoU2V0LmFkZCgyKTtcbmFzc2VydC5zdHJpY3RFcXVhbChoYXNoU2V0LmNvbnRhaW5zKDEpLCB0cnVlKTsgLy8g6L+U5ZueIHRydWVcbmFzc2VydC5zdHJpY3RFcXVhbChoYXNoU2V0LmNvbnRhaW5zKDMpLCBmYWxzZSk7IC8vIOi/lOWbniBmYWxzZSAo5pyq5om+5YiwKVxuaGFzaFNldC5hZGQoMik7XG5hc3NlcnQuc3RyaWN0RXF1YWwoaGFzaFNldC5jb250YWlucygyKSwgdHJ1ZSk7IC8vIOi/lOWbniB0cnVlXG5oYXNoU2V0LnJlbW92ZSgyKTtcbmFzc2VydC5zdHJpY3RFcXVhbChoYXNoU2V0LmNvbnRhaW5zKDIpLCBmYWxzZSk7IC8vIOi/lOWbniAgZmFsc2UgKOW3sue7j+iiq+WIoOmZpClcbiJdfQ==