"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
不使用任何内建的哈希表库设计一个哈希映射

具体地说，你的设计应该包含以下的功能

put(key, value)：向哈希映射中插入(键,值)的数值对。如果键对应的值已经存在，更新这个值。
get(key)：返回给定的键所对应的值，如果映射中不包含这个键，返回-1。
remove(key)：如果映射中存在这个键，删除这个数值对。

示例：

MyHashMap hashMap = new MyHashMap();
hashMap.put(1, 1);
hashMap.put(2, 2);
hashMap.get(1);            // 返回 1
hashMap.get(3);            // 返回 -1 (未找到)
hashMap.put(2, 1);         // 更新已有的值
hashMap.get(2);            // 返回 1
hashMap.remove(2);         // 删除键为2的数据
hashMap.get(2);            // 返回 -1 (未找到)

注意：

所有的值都在 [1, 1000000]的范围内。
操作的总数目在[1, 10000]范围内。
不要使用内建的哈希库。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/design-hashmap
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * Initialize your data structure here.
 */
class MyHashMap {
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
    contains(key) {
        return this.cache[this.getHash(key)].some(([_key]) => _key === key);
    }
    /**
     * value will always be non-negative.
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.contains(key)) {
            this.cache[this.getHash(key)].find(([_key]) => _key === key)[1] = value;
        }
        else {
            this.cache[this.getHash(key)].push([key, value]);
        }
    }
    /**
     * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (this.contains(key)) {
            return this.cache[this.getHash(key)].find(([_key]) => _key === key)[1];
        }
        return -1;
    }
    /**
     * Removes the mapping of the specified value key if this map contains a mapping for the key
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        if (this.contains(key)) {
            this.cache[this.getHash(key)] = this.cache[this.getHash(key)].filter(([_key]) => _key !== key);
        }
    }
}
/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
/*
MyHashMap hashMap = new MyHashMap();
hashMap.put(1, 1);
hashMap.put(2, 2);
hashMap.get(1);            // 返回 1
hashMap.get(3);            // 返回 -1 (未找到)
hashMap.put(2, 1);         // 更新已有的值
hashMap.get(2);            // 返回 1
hashMap.remove(2);         // 删除键为2的数据
hashMap.get(2);            // 返回 -1 (未找到)

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/design-hashmap
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
const assert_1 = __importDefault(require("assert"));
const hashMap = new MyHashMap();
hashMap.put(1, 1);
hashMap.put(2, 2);
assert_1.default.strictEqual(hashMap.get(1), 1); // 返回 1
assert_1.default.strictEqual(hashMap.get(3), -1); // 返回 -1 (未找到)
hashMap.put(2, 1); // 更新已有的值
assert_1.default.strictEqual(hashMap.get(2), 1); // 返回 1
hashMap.remove(2); // 删除键为2的数据
assert_1.default.strictEqual(hashMap.get(2), -1); // 返回 -1 (未找到)
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzA2LuiuvuiuoeWTiOW4jOaYoOWwhC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNzA2LuiuvuiuoeWTiOW4jOaYoOWwhC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUE4Qkk7QUFDSjs7R0FFRztBQUNILE1BQU0sU0FBUztJQUdPO0lBRnBCLEtBQUssQ0FBdUI7SUFFNUIsWUFBb0IsU0FBaUIsR0FBRztRQUFwQixXQUFNLEdBQU4sTUFBTSxDQUFjO1FBQ3RDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQzthQUN2QixJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ1AsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFFRCxPQUFPLENBQUMsR0FBVztRQUNqQixPQUFPLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQzNCLENBQUM7SUFFRCxRQUFRLENBQUMsR0FBVztRQUNsQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxHQUFHLENBQUMsR0FBVyxFQUFFLEtBQWE7UUFDNUIsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksS0FBSyxHQUFHLENBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7U0FDMUU7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ2xEO0lBQ0gsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxHQUFHLENBQUMsR0FBVztRQUNiLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN0QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksS0FBSyxHQUFHLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN6RTtRQUNELE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDWixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyxHQUFXO1FBQ2hCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQ2xFLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxLQUFLLEdBQUcsQ0FDekIsQ0FBQztTQUNIO0lBQ0gsQ0FBQztDQUNGO0FBRUQ7Ozs7OztHQU1HO0FBRUg7Ozs7Ozs7Ozs7Ozs7O0lBY0k7QUFFSixvREFBNEI7QUFFNUIsTUFBTSxPQUFPLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztBQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNsQixnQkFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTztBQUM5QyxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjO0FBQ3RELE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUztBQUM1QixnQkFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTztBQUM5QyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVztBQUM5QixnQkFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLypcbuS4jeS9v+eUqOS7u+S9leWGheW7uueahOWTiOW4jOihqOW6k+iuvuiuoeS4gOS4quWTiOW4jOaYoOWwhFxuXG7lhbfkvZPlnLDor7TvvIzkvaDnmoTorr7orqHlupTor6XljIXlkKvku6XkuIvnmoTlip/og71cblxucHV0KGtleSwgdmFsdWUp77ya5ZCR5ZOI5biM5pig5bCE5Lit5o+S5YWlKOmUrizlgLwp55qE5pWw5YC85a+544CC5aaC5p6c6ZSu5a+55bqU55qE5YC85bey57uP5a2Y5Zyo77yM5pu05paw6L+Z5Liq5YC844CCXG5nZXQoa2V5Ke+8mui/lOWbnue7meWumueahOmUruaJgOWvueW6lOeahOWAvO+8jOWmguaenOaYoOWwhOS4reS4jeWMheWQq+i/meS4qumUru+8jOi/lOWbni0x44CCXG5yZW1vdmUoa2V5Ke+8muWmguaenOaYoOWwhOS4reWtmOWcqOi/meS4qumUru+8jOWIoOmZpOi/meS4quaVsOWAvOWvueOAglxuXG7npLrkvovvvJpcblxuTXlIYXNoTWFwIGhhc2hNYXAgPSBuZXcgTXlIYXNoTWFwKCk7XG5oYXNoTWFwLnB1dCgxLCAxKTtcbmhhc2hNYXAucHV0KDIsIDIpO1xuaGFzaE1hcC5nZXQoMSk7ICAgICAgICAgICAgLy8g6L+U5ZueIDFcbmhhc2hNYXAuZ2V0KDMpOyAgICAgICAgICAgIC8vIOi/lOWbniAtMSAo5pyq5om+5YiwKVxuaGFzaE1hcC5wdXQoMiwgMSk7ICAgICAgICAgLy8g5pu05paw5bey5pyJ55qE5YC8XG5oYXNoTWFwLmdldCgyKTsgICAgICAgICAgICAvLyDov5Tlm54gMVxuaGFzaE1hcC5yZW1vdmUoMik7ICAgICAgICAgLy8g5Yig6Zmk6ZSu5Li6MueahOaVsOaNrlxuaGFzaE1hcC5nZXQoMik7ICAgICAgICAgICAgLy8g6L+U5ZueIC0xICjmnKrmib7liLApXG5cbuazqOaEj++8mlxuXG7miYDmnInnmoTlgLzpg73lnKggWzEsIDEwMDAwMDBd55qE6IyD5Zu05YaF44CCXG7mk43kvZznmoTmgLvmlbDnm67lnKhbMSwgMTAwMDBd6IyD5Zu05YaF44CCXG7kuI3opoHkvb/nlKjlhoXlu7rnmoTlk4jluIzlupPjgIJcblxu5p2l5rqQ77ya5Yqb5omj77yITGVldENvZGXvvIlcbumTvuaOpe+8mmh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL2Rlc2lnbi1oYXNobWFwXG7okZfkvZzmnYPlvZLpoobmiaPnvZHnu5zmiYDmnInjgILllYbkuJrovazovb3or7fogZTns7vlrpjmlrnmjojmnYPvvIzpnZ7llYbkuJrovazovb3or7fms6jmmI7lh7rlpITjgIJcbiogKi9cbi8qKlxuICogSW5pdGlhbGl6ZSB5b3VyIGRhdGEgc3RydWN0dXJlIGhlcmUuXG4gKi9cbmNsYXNzIE15SGFzaE1hcCB7XG4gIGNhY2hlOiBbbnVtYmVyLCBudW1iZXJdW11bXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxlbmd0aDogbnVtYmVyID0gMTAxKSB7XG4gICAgdGhpcy5jYWNoZSA9IEFycmF5KGxlbmd0aClcbiAgICAgIC5maWxsKDApXG4gICAgICAubWFwKCgpID0+IFtdKTtcbiAgfVxuXG4gIGdldEhhc2goa2V5OiBudW1iZXIpIHtcbiAgICByZXR1cm4ga2V5ICUgdGhpcy5sZW5ndGg7XG4gIH1cblxuICBjb250YWlucyhrZXk6IG51bWJlcikge1xuICAgIHJldHVybiB0aGlzLmNhY2hlW3RoaXMuZ2V0SGFzaChrZXkpXS5zb21lKChbX2tleV0pID0+IF9rZXkgPT09IGtleSk7XG4gIH1cblxuICAvKipcbiAgICogdmFsdWUgd2lsbCBhbHdheXMgYmUgbm9uLW5lZ2F0aXZlLlxuICAgKiBAcGFyYW0ge251bWJlcn0ga2V5XG4gICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgcHV0KGtleTogbnVtYmVyLCB2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuY29udGFpbnMoa2V5KSkge1xuICAgICAgdGhpcy5jYWNoZVt0aGlzLmdldEhhc2goa2V5KV0uZmluZCgoW19rZXldKSA9PiBfa2V5ID09PSBrZXkpIVsxXSA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNhY2hlW3RoaXMuZ2V0SGFzaChrZXkpXS5wdXNoKFtrZXksIHZhbHVlXSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHZhbHVlIHRvIHdoaWNoIHRoZSBzcGVjaWZpZWQga2V5IGlzIG1hcHBlZCwgb3IgLTEgaWYgdGhpcyBtYXAgY29udGFpbnMgbm8gbWFwcGluZyBmb3IgdGhlIGtleVxuICAgKiBAcGFyYW0ge251bWJlcn0ga2V5XG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldChrZXk6IG51bWJlcikge1xuICAgIGlmICh0aGlzLmNvbnRhaW5zKGtleSkpIHtcbiAgICAgIHJldHVybiB0aGlzLmNhY2hlW3RoaXMuZ2V0SGFzaChrZXkpXS5maW5kKChbX2tleV0pID0+IF9rZXkgPT09IGtleSkhWzFdO1xuICAgIH1cbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyB0aGUgbWFwcGluZyBvZiB0aGUgc3BlY2lmaWVkIHZhbHVlIGtleSBpZiB0aGlzIG1hcCBjb250YWlucyBhIG1hcHBpbmcgZm9yIHRoZSBrZXlcbiAgICogQHBhcmFtIHtudW1iZXJ9IGtleVxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgcmVtb3ZlKGtleTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuY29udGFpbnMoa2V5KSkge1xuICAgICAgdGhpcy5jYWNoZVt0aGlzLmdldEhhc2goa2V5KV0gPSB0aGlzLmNhY2hlW3RoaXMuZ2V0SGFzaChrZXkpXS5maWx0ZXIoXG4gICAgICAgIChbX2tleV0pID0+IF9rZXkgIT09IGtleVxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBZb3VyIE15SGFzaE1hcCBvYmplY3Qgd2lsbCBiZSBpbnN0YW50aWF0ZWQgYW5kIGNhbGxlZCBhcyBzdWNoOlxuICogdmFyIG9iaiA9IG5ldyBNeUhhc2hNYXAoKVxuICogb2JqLnB1dChrZXksdmFsdWUpXG4gKiB2YXIgcGFyYW1fMiA9IG9iai5nZXQoa2V5KVxuICogb2JqLnJlbW92ZShrZXkpXG4gKi9cblxuLypcbk15SGFzaE1hcCBoYXNoTWFwID0gbmV3IE15SGFzaE1hcCgpO1xuaGFzaE1hcC5wdXQoMSwgMSk7XG5oYXNoTWFwLnB1dCgyLCAyKTtcbmhhc2hNYXAuZ2V0KDEpOyAgICAgICAgICAgIC8vIOi/lOWbniAxXG5oYXNoTWFwLmdldCgzKTsgICAgICAgICAgICAvLyDov5Tlm54gLTEgKOacquaJvuWIsClcbmhhc2hNYXAucHV0KDIsIDEpOyAgICAgICAgIC8vIOabtOaWsOW3suacieeahOWAvFxuaGFzaE1hcC5nZXQoMik7ICAgICAgICAgICAgLy8g6L+U5ZueIDFcbmhhc2hNYXAucmVtb3ZlKDIpOyAgICAgICAgIC8vIOWIoOmZpOmUruS4ujLnmoTmlbDmja5cbmhhc2hNYXAuZ2V0KDIpOyAgICAgICAgICAgIC8vIOi/lOWbniAtMSAo5pyq5om+5YiwKVxuXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvZGVzaWduLWhhc2htYXBcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxuKiAqL1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuY29uc3QgaGFzaE1hcCA9IG5ldyBNeUhhc2hNYXAoKTtcbmhhc2hNYXAucHV0KDEsIDEpO1xuaGFzaE1hcC5wdXQoMiwgMik7XG5hc3NlcnQuc3RyaWN0RXF1YWwoaGFzaE1hcC5nZXQoMSksIDEpOyAvLyDov5Tlm54gMVxuYXNzZXJ0LnN0cmljdEVxdWFsKGhhc2hNYXAuZ2V0KDMpLCAtMSk7IC8vIOi/lOWbniAtMSAo5pyq5om+5YiwKVxuaGFzaE1hcC5wdXQoMiwgMSk7IC8vIOabtOaWsOW3suacieeahOWAvFxuYXNzZXJ0LnN0cmljdEVxdWFsKGhhc2hNYXAuZ2V0KDIpLCAxKTsgLy8g6L+U5ZueIDFcbmhhc2hNYXAucmVtb3ZlKDIpOyAvLyDliKDpmaTplK7kuLoy55qE5pWw5o2uXG5hc3NlcnQuc3RyaWN0RXF1YWwoaGFzaE1hcC5nZXQoMiksIC0xKTsgLy8g6L+U5ZueIC0xICjmnKrmib7liLApXG4iXX0=