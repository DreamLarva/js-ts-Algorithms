"use strict";
/*
设计一个简化版的推特(Twitter)，可以让用户实现发送推文，关注/取消关注其他用户，能够看见关注人（包括自己）的最近十条推文。你的设计需要支持以下的几个功能：

postTweet(userId, tweetId): 创建一条新的推文
getNewsFeed(userId): 检索最近的十条推文。每个推文都必须是由此用户关注的人或者是用户自己发出的。推文必须按照时间顺序由最近的开始排序。
follow(followerId, followeeId): 关注一个用户
unfollow(followerId, followeeId): 取消关注一个用户

示例:

Twitter twitter = new Twitter();

// 用户1发送了一条新推文 (用户id = 1, 推文id = 5).
twitter.postTweet(1, 5);

// 用户1的获取推文应当返回一个列表，其中包含一个id为5的推文.
twitter.getNewsFeed(1);

// 用户1关注了用户2.
twitter.follow(1, 2);

// 用户2发送了一个新推文 (推文id = 6).
twitter.postTweet(2, 6);

// 用户1的获取推文应当返回一个列表，其中包含两个推文，id分别为 -> [6, 5].
// 推文id6应当在推文id5之前，因为它是在5之后发送的.
twitter.getNewsFeed(1);

// 用户1取消关注了用户2.
twitter.unfollow(1, 2);

// 用户1的获取推文应当返回一个列表，其中包含一个id为5的推文.
// 因为用户1已经不再关注用户2.
twitter.getNewsFeed(1);


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/design-twitter
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
class ArticleLinkListNode {
    article;
    dateStamp;
    next = null;
    constructor(article, dateStamp = Date.now()) {
        this.article = article;
        this.dateStamp = dateStamp;
    }
}
class Twitter {
    usersFollowCache;
    usersArticlesCache;
    /**
     * Initialize your data structure here.
     */
    constructor() {
        // 存储用户关注
        this.usersFollowCache = {};
        // 存储用户发布的文章
        this.usersArticlesCache = {};
    }
    /**
     * Compose a new tweet.
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        const article = this.usersArticlesCache[userId];
        const lastArticle = new ArticleLinkListNode(tweetId);
        lastArticle.next = article;
        this.usersArticlesCache[userId] = lastArticle;
    }
    /**
     * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent.
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        // todo 23. 合并K个排序链表
    }
    /**
     * Follower follows a followee. If the operation is invalid, it should be a no-op.
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        this.usersFollowCache[followerId].add(followeeId);
    }
    /**
     * Follower unfollows a followee. If the operation is invalid, it should be a no-op.
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        this.usersFollowCache[followerId].delete(followeeId);
    }
}
/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoi5pyq6Kej5YazIDM1NS7orr7orqHmjqjnibkuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlL+acquino+WGsyAzNTUu6K6+6K6h5o6o54m5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBdUNJO0FBRUosTUFBTSxtQkFBbUI7SUFHYjtJQUNBO0lBSFYsSUFBSSxHQUErQixJQUFJLENBQUM7SUFDeEMsWUFDVSxPQUFlLEVBQ2YsWUFBb0IsSUFBSSxDQUFDLEdBQUcsRUFBRTtRQUQ5QixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YsY0FBUyxHQUFULFNBQVMsQ0FBcUI7SUFDckMsQ0FBQztDQUNMO0FBRUQsTUFBTSxPQUFPO0lBQ1gsZ0JBQWdCLENBQWlDO0lBQ2pELGtCQUFrQixDQUF5QztJQUUzRDs7T0FFRztJQUNIO1FBQ0UsU0FBUztRQUNULElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDM0IsWUFBWTtRQUNaLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsU0FBUyxDQUFDLE1BQWMsRUFBRSxPQUFlO1FBQ3ZDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoRCxNQUFNLFdBQVcsR0FBRyxJQUFJLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JELFdBQVcsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1FBQzNCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsR0FBRyxXQUFXLENBQUM7SUFDaEQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxXQUFXLENBQUMsTUFBYztRQUN4QixvQkFBb0I7SUFDdEIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsTUFBTSxDQUFDLFVBQWtCLEVBQUUsVUFBa0I7UUFDM0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxRQUFRLENBQUMsVUFBa0IsRUFBRSxVQUFrQjtRQUM3QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Q0FDRjtBQUVEOzs7Ozs7O0dBT0ciLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu6K6+6K6h5LiA5Liq566A5YyW54mI55qE5o6o54m5KFR3aXR0ZXIp77yM5Y+v5Lul6K6p55So5oi35a6e546w5Y+R6YCB5o6o5paH77yM5YWz5rOoL+WPlua2iOWFs+azqOWFtuS7lueUqOaIt++8jOiDveWkn+eci+ingeWFs+azqOS6uu+8iOWMheaLrOiHquW3se+8ieeahOacgOi/keWNgeadoeaOqOaWh+OAguS9oOeahOiuvuiuoemcgOimgeaUr+aMgeS7peS4i+eahOWHoOS4quWKn+iDve+8mlxuXG5wb3N0VHdlZXQodXNlcklkLCB0d2VldElkKTog5Yib5bu65LiA5p2h5paw55qE5o6o5paHXG5nZXROZXdzRmVlZCh1c2VySWQpOiDmo4DntKLmnIDov5HnmoTljYHmnaHmjqjmlofjgILmr4/kuKrmjqjmlofpg73lv4XpobvmmK/nlLHmraTnlKjmiLflhbPms6jnmoTkurrmiJbogIXmmK/nlKjmiLfoh6rlt7Hlj5Hlh7rnmoTjgILmjqjmloflv4XpobvmjInnhafml7bpl7Tpobrluo/nlLHmnIDov5HnmoTlvIDlp4vmjpLluo/jgIJcbmZvbGxvdyhmb2xsb3dlcklkLCBmb2xsb3dlZUlkKTog5YWz5rOo5LiA5Liq55So5oi3XG51bmZvbGxvdyhmb2xsb3dlcklkLCBmb2xsb3dlZUlkKTog5Y+W5raI5YWz5rOo5LiA5Liq55So5oi3XG5cbuekuuS+izpcblxuVHdpdHRlciB0d2l0dGVyID0gbmV3IFR3aXR0ZXIoKTtcblxuLy8g55So5oi3MeWPkemAgeS6huS4gOadoeaWsOaOqOaWhyAo55So5oi3aWQgPSAxLCDmjqjmlodpZCA9IDUpLlxudHdpdHRlci5wb3N0VHdlZXQoMSwgNSk7XG5cbi8vIOeUqOaItzHnmoTojrflj5bmjqjmloflupTlvZPov5Tlm57kuIDkuKrliJfooajvvIzlhbbkuK3ljIXlkKvkuIDkuKppZOS4ujXnmoTmjqjmlocuXG50d2l0dGVyLmdldE5ld3NGZWVkKDEpO1xuXG4vLyDnlKjmiLcx5YWz5rOo5LqG55So5oi3Mi5cbnR3aXR0ZXIuZm9sbG93KDEsIDIpO1xuXG4vLyDnlKjmiLcy5Y+R6YCB5LqG5LiA5Liq5paw5o6o5paHICjmjqjmlodpZCA9IDYpLlxudHdpdHRlci5wb3N0VHdlZXQoMiwgNik7XG5cbi8vIOeUqOaItzHnmoTojrflj5bmjqjmloflupTlvZPov5Tlm57kuIDkuKrliJfooajvvIzlhbbkuK3ljIXlkKvkuKTkuKrmjqjmlofvvIxpZOWIhuWIq+S4uiAtPiBbNiwgNV0uXG4vLyDmjqjmlodpZDblupTlvZPlnKjmjqjmlodpZDXkuYvliY3vvIzlm6DkuLrlroPmmK/lnKg15LmL5ZCO5Y+R6YCB55qELlxudHdpdHRlci5nZXROZXdzRmVlZCgxKTtcblxuLy8g55So5oi3MeWPlua2iOWFs+azqOS6hueUqOaItzIuXG50d2l0dGVyLnVuZm9sbG93KDEsIDIpO1xuXG4vLyDnlKjmiLcx55qE6I635Y+W5o6o5paH5bqU5b2T6L+U5Zue5LiA5Liq5YiX6KGo77yM5YW25Lit5YyF5ZCr5LiA5LiqaWTkuLo155qE5o6o5paHLlxuLy8g5Zug5Li655So5oi3MeW3sue7j+S4jeWGjeWFs+azqOeUqOaItzIuXG50d2l0dGVyLmdldE5ld3NGZWVkKDEpO1xuXG5cbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXG7pk77mjqXvvJpodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9kZXNpZ24tdHdpdHRlclxu6JGX5L2c5p2D5b2S6aKG5omj572R57uc5omA5pyJ44CC5ZWG5Lia6L2s6L296K+36IGU57O75a6Y5pa55o6I5p2D77yM6Z2e5ZWG5Lia6L2s6L296K+35rOo5piO5Ye65aSE44CCXG4qICovXG5cbmNsYXNzIEFydGljbGVMaW5rTGlzdE5vZGUge1xuICBuZXh0OiBBcnRpY2xlTGlua0xpc3ROb2RlIHwgbnVsbCA9IG51bGw7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYXJ0aWNsZTogbnVtYmVyLFxuICAgIHByaXZhdGUgZGF0ZVN0YW1wOiBudW1iZXIgPSBEYXRlLm5vdygpXG4gICkge31cbn1cblxuY2xhc3MgVHdpdHRlciB7XG4gIHVzZXJzRm9sbG93Q2FjaGU6IHsgW2tleTogc3RyaW5nXTogU2V0PG51bWJlcj4gfTtcbiAgdXNlcnNBcnRpY2xlc0NhY2hlOiB7IFtrZXk6IG51bWJlcl06IEFydGljbGVMaW5rTGlzdE5vZGUgfTtcblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB5b3VyIGRhdGEgc3RydWN0dXJlIGhlcmUuXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyDlrZjlgqjnlKjmiLflhbPms6hcbiAgICB0aGlzLnVzZXJzRm9sbG93Q2FjaGUgPSB7fTtcbiAgICAvLyDlrZjlgqjnlKjmiLflj5HluIPnmoTmlofnq6BcbiAgICB0aGlzLnVzZXJzQXJ0aWNsZXNDYWNoZSA9IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXBvc2UgYSBuZXcgdHdlZXQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB1c2VySWRcbiAgICogQHBhcmFtIHtudW1iZXJ9IHR3ZWV0SWRcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIHBvc3RUd2VldCh1c2VySWQ6IG51bWJlciwgdHdlZXRJZDogbnVtYmVyKSB7XG4gICAgY29uc3QgYXJ0aWNsZSA9IHRoaXMudXNlcnNBcnRpY2xlc0NhY2hlW3VzZXJJZF07XG4gICAgY29uc3QgbGFzdEFydGljbGUgPSBuZXcgQXJ0aWNsZUxpbmtMaXN0Tm9kZSh0d2VldElkKTtcbiAgICBsYXN0QXJ0aWNsZS5uZXh0ID0gYXJ0aWNsZTtcbiAgICB0aGlzLnVzZXJzQXJ0aWNsZXNDYWNoZVt1c2VySWRdID0gbGFzdEFydGljbGU7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmUgdGhlIDEwIG1vc3QgcmVjZW50IHR3ZWV0IGlkcyBpbiB0aGUgdXNlcidzIG5ld3MgZmVlZC4gRWFjaCBpdGVtIGluIHRoZSBuZXdzIGZlZWQgbXVzdCBiZSBwb3N0ZWQgYnkgdXNlcnMgd2hvIHRoZSB1c2VyIGZvbGxvd2VkIG9yIGJ5IHRoZSB1c2VyIGhlcnNlbGYuIFR3ZWV0cyBtdXN0IGJlIG9yZGVyZWQgZnJvbSBtb3N0IHJlY2VudCB0byBsZWFzdCByZWNlbnQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB1c2VySWRcbiAgICogQHJldHVybiB7bnVtYmVyW119XG4gICAqL1xuICBnZXROZXdzRmVlZCh1c2VySWQ6IG51bWJlcik6IG51bWJlcltdIHtcbiAgICAvLyB0b2RvIDIzLiDlkIjlubZL5Liq5o6S5bqP6ZO+6KGoXG4gIH1cblxuICAvKipcbiAgICogRm9sbG93ZXIgZm9sbG93cyBhIGZvbGxvd2VlLiBJZiB0aGUgb3BlcmF0aW9uIGlzIGludmFsaWQsIGl0IHNob3VsZCBiZSBhIG5vLW9wLlxuICAgKiBAcGFyYW0ge251bWJlcn0gZm9sbG93ZXJJZFxuICAgKiBAcGFyYW0ge251bWJlcn0gZm9sbG93ZWVJZFxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgZm9sbG93KGZvbGxvd2VySWQ6IG51bWJlciwgZm9sbG93ZWVJZDogbnVtYmVyKSB7XG4gICAgdGhpcy51c2Vyc0ZvbGxvd0NhY2hlW2ZvbGxvd2VySWRdLmFkZChmb2xsb3dlZUlkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb2xsb3dlciB1bmZvbGxvd3MgYSBmb2xsb3dlZS4gSWYgdGhlIG9wZXJhdGlvbiBpcyBpbnZhbGlkLCBpdCBzaG91bGQgYmUgYSBuby1vcC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGZvbGxvd2VySWRcbiAgICogQHBhcmFtIHtudW1iZXJ9IGZvbGxvd2VlSWRcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIHVuZm9sbG93KGZvbGxvd2VySWQ6IG51bWJlciwgZm9sbG93ZWVJZDogbnVtYmVyKSB7XG4gICAgdGhpcy51c2Vyc0ZvbGxvd0NhY2hlW2ZvbGxvd2VySWRdLmRlbGV0ZShmb2xsb3dlZUlkKTtcbiAgfVxufVxuXG4vKipcbiAqIFlvdXIgVHdpdHRlciBvYmplY3Qgd2lsbCBiZSBpbnN0YW50aWF0ZWQgYW5kIGNhbGxlZCBhcyBzdWNoOlxuICogdmFyIG9iaiA9IG5ldyBUd2l0dGVyKClcbiAqIG9iai5wb3N0VHdlZXQodXNlcklkLHR3ZWV0SWQpXG4gKiB2YXIgcGFyYW1fMiA9IG9iai5nZXROZXdzRmVlZCh1c2VySWQpXG4gKiBvYmouZm9sbG93KGZvbGxvd2VySWQsZm9sbG93ZWVJZClcbiAqIG9iai51bmZvbGxvdyhmb2xsb3dlcklkLGZvbGxvd2VlSWQpXG4gKi9cbiJdfQ==