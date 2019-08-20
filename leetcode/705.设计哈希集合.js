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
        this.cache = Array(length).fill(0).map(() => []);
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
    ;
    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        if (!this.contains(key))
            return;
        this.cache[this.getHash(key)] = this.cache[this.getHash(key)].filter(v => v !== key);
    }
    ;
    /**
     * Returns true if this set contains the specified element
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        return this.cache[this.getHash(key)].indexOf(key) !== -1;
    }
    ;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzA1LuiuvuiuoeWTiOW4jOmbhuWQiC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNzA1LuiuvuiuoeWTiOW4jOmbhuWQiC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQThCSTs7Ozs7QUFFSjs7R0FFRztBQUNILE1BQU0sU0FBUztJQUlYLFlBQW9CLFNBQWlCLEdBQUc7UUFBcEIsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQUNwQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCxPQUFPLENBQUMsR0FBVztRQUNmLE9BQU8sR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDN0IsQ0FBQztJQUdEOzs7T0FHRztJQUNILEdBQUcsQ0FBQyxHQUFXO1FBQ1gsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztZQUFFLE9BQU87UUFFL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFBQSxDQUFDO0lBRUY7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLEdBQVc7UUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7WUFBRSxPQUFPO1FBRWhDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUN6RixDQUFDO0lBQUEsQ0FBQztJQUVGOzs7O09BSUc7SUFDSCxRQUFRLENBQUMsR0FBVztRQUNoQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBQUEsQ0FBQztDQUVMO0FBR0Q7Ozs7OztHQU1HO0FBR0g7Ozs7Ozs7Ozs7SUFVSTtBQUNKLG9EQUE0QjtBQUU1QixNQUFNLE9BQU8sR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDO0FBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2YsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQyxDQUFJLFVBQVU7QUFDM0QsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQyxDQUFJLGlCQUFpQjtBQUNuRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2YsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQyxDQUFJLFVBQVU7QUFDM0QsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNsQixnQkFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDLENBQUksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxu5LiN5L2/55So5Lu75L2V5YaF5bu655qE5ZOI5biM6KGo5bqT6K6+6K6h5LiA5Liq5ZOI5biM6ZuG5ZCIXHJcblxyXG7lhbfkvZPlnLDor7TvvIzkvaDnmoTorr7orqHlupTor6XljIXlkKvku6XkuIvnmoTlip/og71cclxuXHJcbmFkZCh2YWx1ZSnvvJrlkJHlk4jluIzpm4blkIjkuK3mj5LlhaXkuIDkuKrlgLzjgIJcclxuY29udGFpbnModmFsdWUpIO+8mui/lOWbnuWTiOW4jOmbhuWQiOS4reaYr+WQpuWtmOWcqOi/meS4quWAvOOAglxyXG5yZW1vdmUodmFsdWUp77ya5bCG57uZ5a6a5YC85LuO5ZOI5biM6ZuG5ZCI5Lit5Yig6Zmk44CC5aaC5p6c5ZOI5biM6ZuG5ZCI5Lit5rKh5pyJ6L+Z5Liq5YC877yM5LuA5LmI5Lmf5LiN5YGa44CCXHJcblxyXG7npLrkvos6XHJcblxyXG5NeUhhc2hTZXQgaGFzaFNldCA9IG5ldyBNeUhhc2hTZXQoKTtcclxuaGFzaFNldC5hZGQoMSk7IMKgIMKgIMKgIMKgXHJcbmhhc2hTZXQuYWRkKDIpOyDCoCDCoCDCoCDCoFxyXG5oYXNoU2V0LmNvbnRhaW5zKDEpOyDCoMKgwqAvLyDov5Tlm54gdHJ1ZVxyXG5oYXNoU2V0LmNvbnRhaW5zKDMpOyDCoMKgwqAvLyDov5Tlm54gZmFsc2UgKOacquaJvuWIsClcclxuaGFzaFNldC5hZGQoMik7IMKgIMKgIMKgIMKgIMKgXHJcbmhhc2hTZXQuY29udGFpbnMoMik7IMKgwqDCoC8vIOi/lOWbniB0cnVlXHJcbmhhc2hTZXQucmVtb3ZlKDIpOyDCoCDCoCDCoCDCoCDCoFxyXG5oYXNoU2V0LmNvbnRhaW5zKDIpOyDCoMKgwqAvLyDov5Tlm54gIGZhbHNlICjlt7Lnu4/ooqvliKDpmaQpXHJcblxyXG7ms6jmhI/vvJpcclxuXHJcbuaJgOacieeahOWAvOmDveWcqMKgWzEsIDEwMDAwMDBd55qE6IyD5Zu05YaF44CCXHJcbuaTjeS9nOeahOaAu+aVsOebruWcqFsxLCAxMDAwMF3ojIPlm7TlhoXjgIJcclxu5LiN6KaB5L2/55So5YaF5bu655qE5ZOI5biM6ZuG5ZCI5bqT44CCXHJcblxyXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxyXG7pk77mjqXvvJpodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9kZXNpZ24taGFzaHNldFxyXG7okZfkvZzmnYPlvZLpoobmiaPnvZHnu5zmiYDmnInjgILllYbkuJrovazovb3or7fogZTns7vlrpjmlrnmjojmnYPvvIzpnZ7llYbkuJrovazovb3or7fms6jmmI7lh7rlpITjgIJcclxuKiAqL1xyXG5cclxuLyoqXHJcbiAqIEluaXRpYWxpemUgeW91ciBkYXRhIHN0cnVjdHVyZSBoZXJlLlxyXG4gKi9cclxuY2xhc3MgTXlIYXNoU2V0IHtcclxuICAgIGNhY2hlOiBudW1iZXJbXVtdO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxlbmd0aDogbnVtYmVyID0gMTAxKSB7XHJcbiAgICAgICAgdGhpcy5jYWNoZSA9IEFycmF5KGxlbmd0aCkuZmlsbCgwKS5tYXAoKCkgPT4gW10pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEhhc2goa2V5OiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4ga2V5ICUgdGhpcy5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGtleVxyXG4gICAgICogQHJldHVybiB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgYWRkKGtleTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29udGFpbnMoa2V5KSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmNhY2hlW3RoaXMuZ2V0SGFzaChrZXkpXS5wdXNoKGtleSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGtleVxyXG4gICAgICogQHJldHVybiB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgcmVtb3ZlKGtleTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbnRhaW5zKGtleSkpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5jYWNoZVt0aGlzLmdldEhhc2goa2V5KV0gPSB0aGlzLmNhY2hlW3RoaXMuZ2V0SGFzaChrZXkpXS5maWx0ZXIodiA9PiB2ICE9PSBrZXkpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGlzIHNldCBjb250YWlucyB0aGUgc3BlY2lmaWVkIGVsZW1lbnRcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBrZXlcclxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIGNvbnRhaW5zKGtleTogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVbdGhpcy5nZXRIYXNoKGtleSldLmluZGV4T2Yoa2V5KSAhPT0gLTE7XHJcbiAgICB9O1xyXG5cclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBZb3VyIE15SGFzaFNldCBvYmplY3Qgd2lsbCBiZSBpbnN0YW50aWF0ZWQgYW5kIGNhbGxlZCBhcyBzdWNoOlxyXG4gKiB2YXIgb2JqID0gbmV3IE15SGFzaFNldCgpXHJcbiAqIG9iai5hZGQoa2V5KVxyXG4gKiBvYmoucmVtb3ZlKGtleSlcclxuICogdmFyIHBhcmFtXzMgPSBvYmouY29udGFpbnMoa2V5KVxyXG4gKi9cclxuXHJcblxyXG4vKlxyXG5NeUhhc2hTZXQgaGFzaFNldCA9IG5ldyBNeUhhc2hTZXQoKTtcclxuaGFzaFNldC5hZGQoMSk7IMKgIMKgIMKgIMKgXHJcbmhhc2hTZXQuYWRkKDIpOyDCoCDCoCDCoCDCoFxyXG5oYXNoU2V0LmNvbnRhaW5zKDEpOyDCoMKgwqAvLyDov5Tlm54gdHJ1ZVxyXG5oYXNoU2V0LmNvbnRhaW5zKDMpOyDCoMKgwqAvLyDov5Tlm54gZmFsc2UgKOacquaJvuWIsClcclxuaGFzaFNldC5hZGQoMik7IMKgIMKgIMKgIMKgIMKgXHJcbmhhc2hTZXQuY29udGFpbnMoMik7IMKgwqDCoC8vIOi/lOWbniB0cnVlXHJcbmhhc2hTZXQucmVtb3ZlKDIpOyDCoCDCoCDCoCDCoCDCoFxyXG5oYXNoU2V0LmNvbnRhaW5zKDIpOyDCoMKgwqAvLyDov5Tlm54gIGZhbHNlICjlt7Lnu4/ooqvliKDpmaQpXHJcbiogKi9cclxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XHJcblxyXG5jb25zdCBoYXNoU2V0ID0gbmV3IE15SGFzaFNldCgpO1xyXG5oYXNoU2V0LmFkZCgxKTtcclxuaGFzaFNldC5hZGQoMik7XHJcbmFzc2VydC5zdHJpY3RFcXVhbChoYXNoU2V0LmNvbnRhaW5zKDEpLHRydWUpOyDCoMKgwqAvLyDov5Tlm54gdHJ1ZVxyXG5hc3NlcnQuc3RyaWN0RXF1YWwoaGFzaFNldC5jb250YWlucygzKSxmYWxzZSk7IMKgwqDCoC8vIOi/lOWbniBmYWxzZSAo5pyq5om+5YiwKVxyXG5oYXNoU2V0LmFkZCgyKTtcclxuYXNzZXJ0LnN0cmljdEVxdWFsKGhhc2hTZXQuY29udGFpbnMoMiksdHJ1ZSk7IMKgwqDCoC8vIOi/lOWbniB0cnVlXHJcbmhhc2hTZXQucmVtb3ZlKDIpO1xyXG5hc3NlcnQuc3RyaWN0RXF1YWwoaGFzaFNldC5jb250YWlucygyKSxmYWxzZSk7IMKgwqDCoC8vIOi/lOWbniAgZmFsc2UgKOW3sue7j+iiq+WIoOmZpClcclxuIl19