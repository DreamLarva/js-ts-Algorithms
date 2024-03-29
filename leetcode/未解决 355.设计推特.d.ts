declare class ArticleLinkListNode {
  private article;
  private dateStamp;
  next: ArticleLinkListNode | null;
  constructor(article: number, dateStamp?: number);
}
declare class Twitter {
  usersFollowCache: {
    [key: string]: Set<number>;
  };
  usersArticlesCache: {
    [key: number]: ArticleLinkListNode;
  };
  /**
   * Initialize your data structure here.
   */
  constructor();
  /**
   * Compose a new tweet.
   * @param {number} userId
   * @param {number} tweetId
   * @return {void}
   */
  postTweet(userId: number, tweetId: number): void;
  /**
   * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent.
   * @param {number} userId
   * @return {number[]}
   */
  getNewsFeed(userId: number): number[];
  /**
   * Follower follows a followee. If the operation is invalid, it should be a no-op.
   * @param {number} followerId
   * @param {number} followeeId
   * @return {void}
   */
  follow(followerId: number, followeeId: number): void;
  /**
   * Follower unfollows a followee. If the operation is invalid, it should be a no-op.
   * @param {number} followerId
   * @param {number} followeeId
   * @return {void}
   */
  unfollow(followerId: number, followeeId: number): void;
}
/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
