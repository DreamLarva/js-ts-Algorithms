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
    constructor(article, dateStamp = Date.now()) {
        this.article = article;
        this.dateStamp = dateStamp;
        this.next = null;
    }
}
class Twitter {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoi5pyq6Kej5YazIDM1NS7orr7orqHmjqjnibkuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlL+acquino+WGsyAzNTUu6K6+6K6h5o6o54m5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBdUNJO0FBRUosTUFBTSxtQkFBbUI7SUFFdkIsWUFDVSxPQUFlLEVBQ2YsWUFBb0IsSUFBSSxDQUFDLEdBQUcsRUFBRTtRQUQ5QixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YsY0FBUyxHQUFULFNBQVMsQ0FBcUI7UUFIeEMsU0FBSSxHQUErQixJQUFJLENBQUM7SUFJckMsQ0FBQztDQUNMO0FBRUQsTUFBTSxPQUFPO0lBSVg7O09BRUc7SUFDSDtRQUNFLFNBQVM7UUFDVCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQzNCLFlBQVk7UUFDWixJQUFJLENBQUMsa0JBQWtCLEdBQUcsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILFNBQVMsQ0FBQyxNQUFjLEVBQUUsT0FBZTtRQUN2QyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEQsTUFBTSxXQUFXLEdBQUcsSUFBSSxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyRCxXQUFXLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztRQUMzQixJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLEdBQUcsV0FBVyxDQUFDO0lBQ2hELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsV0FBVyxDQUFDLE1BQWM7UUFDeEIsb0JBQW9CO0lBQ3RCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILE1BQU0sQ0FBQyxVQUFrQixFQUFFLFVBQWtCO1FBQzNDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsUUFBUSxDQUFDLFVBQWtCLEVBQUUsVUFBa0I7UUFDN0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN2RCxDQUFDO0NBQ0Y7QUFFRDs7Ozs7OztHQU9HIiwic291cmNlc0NvbnRlbnQiOlsiLypcbuiuvuiuoeS4gOS4queugOWMlueJiOeahOaOqOeJuShUd2l0dGVyKe+8jOWPr+S7peiuqeeUqOaIt+WunueOsOWPkemAgeaOqOaWh++8jOWFs+azqC/lj5bmtojlhbPms6jlhbbku5bnlKjmiLfvvIzog73lpJ/nnIvop4HlhbPms6jkurrvvIjljIXmi6zoh6rlt7HvvInnmoTmnIDov5HljYHmnaHmjqjmlofjgILkvaDnmoTorr7orqHpnIDopoHmlK/mjIHku6XkuIvnmoTlh6DkuKrlip/og73vvJpcblxucG9zdFR3ZWV0KHVzZXJJZCwgdHdlZXRJZCk6IOWIm+W7uuS4gOadoeaWsOeahOaOqOaWh1xuZ2V0TmV3c0ZlZWQodXNlcklkKTog5qOA57Si5pyA6L+R55qE5Y2B5p2h5o6o5paH44CC5q+P5Liq5o6o5paH6YO95b+F6aG75piv55Sx5q2k55So5oi35YWz5rOo55qE5Lq65oiW6ICF5piv55So5oi36Ieq5bex5Y+R5Ye655qE44CC5o6o5paH5b+F6aG75oyJ54Wn5pe26Ze06aG65bqP55Sx5pyA6L+R55qE5byA5aeL5o6S5bqP44CCXG5mb2xsb3coZm9sbG93ZXJJZCwgZm9sbG93ZWVJZCk6IOWFs+azqOS4gOS4queUqOaIt1xudW5mb2xsb3coZm9sbG93ZXJJZCwgZm9sbG93ZWVJZCk6IOWPlua2iOWFs+azqOS4gOS4queUqOaIt1xuXG7npLrkvos6XG5cblR3aXR0ZXIgdHdpdHRlciA9IG5ldyBUd2l0dGVyKCk7XG5cbi8vIOeUqOaItzHlj5HpgIHkuobkuIDmnaHmlrDmjqjmlocgKOeUqOaIt2lkID0gMSwg5o6o5paHaWQgPSA1KS5cbnR3aXR0ZXIucG9zdFR3ZWV0KDEsIDUpO1xuXG4vLyDnlKjmiLcx55qE6I635Y+W5o6o5paH5bqU5b2T6L+U5Zue5LiA5Liq5YiX6KGo77yM5YW25Lit5YyF5ZCr5LiA5LiqaWTkuLo155qE5o6o5paHLlxudHdpdHRlci5nZXROZXdzRmVlZCgxKTtcblxuLy8g55So5oi3MeWFs+azqOS6hueUqOaItzIuXG50d2l0dGVyLmZvbGxvdygxLCAyKTtcblxuLy8g55So5oi3MuWPkemAgeS6huS4gOS4quaWsOaOqOaWhyAo5o6o5paHaWQgPSA2KS5cbnR3aXR0ZXIucG9zdFR3ZWV0KDIsIDYpO1xuXG4vLyDnlKjmiLcx55qE6I635Y+W5o6o5paH5bqU5b2T6L+U5Zue5LiA5Liq5YiX6KGo77yM5YW25Lit5YyF5ZCr5Lik5Liq5o6o5paH77yMaWTliIbliKvkuLogLT4gWzYsIDVdLlxuLy8g5o6o5paHaWQ25bqU5b2T5Zyo5o6o5paHaWQ15LmL5YmN77yM5Zug5Li65a6D5piv5ZyoNeS5i+WQjuWPkemAgeeahC5cbnR3aXR0ZXIuZ2V0TmV3c0ZlZWQoMSk7XG5cbi8vIOeUqOaItzHlj5bmtojlhbPms6jkuobnlKjmiLcyLlxudHdpdHRlci51bmZvbGxvdygxLCAyKTtcblxuLy8g55So5oi3MeeahOiOt+WPluaOqOaWh+W6lOW9k+i/lOWbnuS4gOS4quWIl+ihqO+8jOWFtuS4reWMheWQq+S4gOS4qmlk5Li6NeeahOaOqOaWhy5cbi8vIOWboOS4uueUqOaItzHlt7Lnu4/kuI3lho3lhbPms6jnlKjmiLcyLlxudHdpdHRlci5nZXROZXdzRmVlZCgxKTtcblxuXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvZGVzaWduLXR3aXR0ZXJcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxuKiAqL1xuXG5jbGFzcyBBcnRpY2xlTGlua0xpc3ROb2RlIHtcbiAgbmV4dDogQXJ0aWNsZUxpbmtMaXN0Tm9kZSB8IG51bGwgPSBudWxsO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFydGljbGU6IG51bWJlcixcbiAgICBwcml2YXRlIGRhdGVTdGFtcDogbnVtYmVyID0gRGF0ZS5ub3coKVxuICApIHt9XG59XG5cbmNsYXNzIFR3aXR0ZXIge1xuICB1c2Vyc0ZvbGxvd0NhY2hlOiB7IFtrZXk6IHN0cmluZ106IFNldDxudW1iZXI+IH07XG4gIHVzZXJzQXJ0aWNsZXNDYWNoZTogeyBba2V5OiBudW1iZXJdOiBBcnRpY2xlTGlua0xpc3ROb2RlIH07XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgeW91ciBkYXRhIHN0cnVjdHVyZSBoZXJlLlxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8g5a2Y5YKo55So5oi35YWz5rOoXG4gICAgdGhpcy51c2Vyc0ZvbGxvd0NhY2hlID0ge307XG4gICAgLy8g5a2Y5YKo55So5oi35Y+R5biD55qE5paH56ugXG4gICAgdGhpcy51c2Vyc0FydGljbGVzQ2FjaGUgPSB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wb3NlIGEgbmV3IHR3ZWV0LlxuICAgKiBAcGFyYW0ge251bWJlcn0gdXNlcklkXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0d2VldElkXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBwb3N0VHdlZXQodXNlcklkOiBudW1iZXIsIHR3ZWV0SWQ6IG51bWJlcikge1xuICAgIGNvbnN0IGFydGljbGUgPSB0aGlzLnVzZXJzQXJ0aWNsZXNDYWNoZVt1c2VySWRdO1xuICAgIGNvbnN0IGxhc3RBcnRpY2xlID0gbmV3IEFydGljbGVMaW5rTGlzdE5vZGUodHdlZXRJZCk7XG4gICAgbGFzdEFydGljbGUubmV4dCA9IGFydGljbGU7XG4gICAgdGhpcy51c2Vyc0FydGljbGVzQ2FjaGVbdXNlcklkXSA9IGxhc3RBcnRpY2xlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlIHRoZSAxMCBtb3N0IHJlY2VudCB0d2VldCBpZHMgaW4gdGhlIHVzZXIncyBuZXdzIGZlZWQuIEVhY2ggaXRlbSBpbiB0aGUgbmV3cyBmZWVkIG11c3QgYmUgcG9zdGVkIGJ5IHVzZXJzIHdobyB0aGUgdXNlciBmb2xsb3dlZCBvciBieSB0aGUgdXNlciBoZXJzZWxmLiBUd2VldHMgbXVzdCBiZSBvcmRlcmVkIGZyb20gbW9zdCByZWNlbnQgdG8gbGVhc3QgcmVjZW50LlxuICAgKiBAcGFyYW0ge251bWJlcn0gdXNlcklkXG4gICAqIEByZXR1cm4ge251bWJlcltdfVxuICAgKi9cbiAgZ2V0TmV3c0ZlZWQodXNlcklkOiBudW1iZXIpOiBudW1iZXJbXSB7XG4gICAgLy8gdG9kbyAyMy4g5ZCI5bm2S+S4quaOkuW6j+mTvuihqFxuICB9XG5cbiAgLyoqXG4gICAqIEZvbGxvd2VyIGZvbGxvd3MgYSBmb2xsb3dlZS4gSWYgdGhlIG9wZXJhdGlvbiBpcyBpbnZhbGlkLCBpdCBzaG91bGQgYmUgYSBuby1vcC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGZvbGxvd2VySWRcbiAgICogQHBhcmFtIHtudW1iZXJ9IGZvbGxvd2VlSWRcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGZvbGxvdyhmb2xsb3dlcklkOiBudW1iZXIsIGZvbGxvd2VlSWQ6IG51bWJlcikge1xuICAgIHRoaXMudXNlcnNGb2xsb3dDYWNoZVtmb2xsb3dlcklkXS5hZGQoZm9sbG93ZWVJZCk7XG4gIH1cblxuICAvKipcbiAgICogRm9sbG93ZXIgdW5mb2xsb3dzIGEgZm9sbG93ZWUuIElmIHRoZSBvcGVyYXRpb24gaXMgaW52YWxpZCwgaXQgc2hvdWxkIGJlIGEgbm8tb3AuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmb2xsb3dlcklkXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmb2xsb3dlZUlkXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICB1bmZvbGxvdyhmb2xsb3dlcklkOiBudW1iZXIsIGZvbGxvd2VlSWQ6IG51bWJlcikge1xuICAgIHRoaXMudXNlcnNGb2xsb3dDYWNoZVtmb2xsb3dlcklkXS5kZWxldGUoZm9sbG93ZWVJZCk7XG4gIH1cbn1cblxuLyoqXG4gKiBZb3VyIFR3aXR0ZXIgb2JqZWN0IHdpbGwgYmUgaW5zdGFudGlhdGVkIGFuZCBjYWxsZWQgYXMgc3VjaDpcbiAqIHZhciBvYmogPSBuZXcgVHdpdHRlcigpXG4gKiBvYmoucG9zdFR3ZWV0KHVzZXJJZCx0d2VldElkKVxuICogdmFyIHBhcmFtXzIgPSBvYmouZ2V0TmV3c0ZlZWQodXNlcklkKVxuICogb2JqLmZvbGxvdyhmb2xsb3dlcklkLGZvbGxvd2VlSWQpXG4gKiBvYmoudW5mb2xsb3coZm9sbG93ZXJJZCxmb2xsb3dlZUlkKVxuICovXG4iXX0=