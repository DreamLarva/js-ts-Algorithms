"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//节点类
class TrieNode {
    constructor(char) {
        this.children = [];
        this.isEndNode = false;
        this.char = char;
    }
}
class Trie {
    constructor() {
        this.root = new TrieNode(null);
    }
    // 插入一个单词到trie树
    insert(word) {
        let curNode = this.root;
        const arr = word.match(/./g);
        for (let i = 0; i < arr.length; i++) {
            const char = arr[i];
            // 查看当前node的子节点 是否与char 相等
            const findNode = curNode.children.find(v => v.char === char);
            // 1.相等： curNode指向 找到的子节点
            if (findNode) {
                curNode = findNode;
                // word end 节点
                if (i === arr.length - 1) {
                    findNode.isEndNode = true;
                }
            }
            // 2.不相等， 在curNode 下新增一个节点值为char ，并且 curNode指向新增节点
            else {
                const newNode = new TrieNode(char);
                curNode.children.push(newNode);
                curNode = newNode;
                //word end 节点
                if (i === arr.length - 1) {
                    newNode.isEndNode = true;
                }
            }
        }
    }
    // 判断该前缀是否存在与trie树中
    startsWith(prefix) {
        if (prefix.length === 0)
            return false;
        let curNode = this.root;
        for (let i = 0; i < prefix.length; i++) {
            const char = prefix.charAt(i);
            let findNode = null;
            //查看当前节点下 是否能找到字符char
            curNode.children.forEach(function (item) {
                if (item.char === char) {
                    findNode = item;
                }
            });
            // 1. 找到字符char 当前curNode 指向 findNode
            if (findNode) {
                curNode = findNode;
            }
            // 2. 没找到 则该单词不在trie树中
            else {
                return false;
            }
        }
        return true;
    }
    // 判断该单词是否在trie树中
    search(word) {
        if (word.length === 0)
            return false;
        let curNode = this.root;
        for (let i = 0; i < word.length; i++) {
            const char = word.charAt(i);
            // 查看当前node的子节点 是否与char 相等
            const findNode = curNode.children.find(v => v.char === char);
            // 1. 找到字符char 当前curNode 指向 findNode
            if (findNode) {
                curNode = findNode;
                //word end 节点额外判断 && 结束条件
                if (i === word.length - 1) {
                    return curNode.isEndNode;
                }
            }
            // 2. 没找到 则该单词不在trie树中
            else {
                return false;
            }
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoi5a2X5YW45qCRLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyLmlbDmja7nu5PmnoQv5a2X5YW45qCRLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsS0FBSztBQUNMLE1BQU0sUUFBUTtJQU1WLFlBQVksSUFBbUI7UUFIL0IsYUFBUSxHQUFlLEVBQUUsQ0FBQztRQUMxQixjQUFTLEdBQVksS0FBSyxDQUFDO1FBR3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7Q0FDSjtBQUVELE1BQU0sSUFBSTtJQUFWO1FBQ0ksU0FBSSxHQUFHLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBc0Y5QixDQUFDO0lBcEZHLGVBQWU7SUFDZixNQUFNLENBQUMsSUFBWTtRQUNmLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDeEIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUUsQ0FBQztRQUU5QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNqQyxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEIsMEJBQTBCO1lBQzFCLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQztZQUU3RCx5QkFBeUI7WUFDekIsSUFBSSxRQUFRLEVBQUU7Z0JBQ1YsT0FBTyxHQUFHLFFBQVEsQ0FBQztnQkFDbkIsY0FBYztnQkFDZCxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDdEIsUUFBUSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7aUJBQzdCO2FBQ0o7WUFDRCxrREFBa0Q7aUJBQzdDO2dCQUNELE1BQU0sT0FBTyxHQUFHLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNuQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDL0IsT0FBTyxHQUFHLE9BQU8sQ0FBQztnQkFDbEIsYUFBYTtnQkFDYixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDdEIsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7aUJBQzVCO2FBQ0o7U0FFSjtJQUNMLENBQUM7SUFFRCxtQkFBbUI7SUFDbkIsVUFBVSxDQUFDLE1BQWM7UUFDckIsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUM7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUN0QyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3BDLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLHFCQUFxQjtZQUNyQixPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUk7Z0JBQ25DLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUU7b0JBQ3BCLFFBQVEsR0FBRyxJQUFJLENBQUM7aUJBQ25CO1lBQ0wsQ0FBQyxDQUFDLENBQUM7WUFFSCxvQ0FBb0M7WUFDcEMsSUFBSSxRQUFRLEVBQUU7Z0JBQ1YsT0FBTyxHQUFHLFFBQVEsQ0FBQzthQUN0QjtZQUNELHNCQUFzQjtpQkFDakI7Z0JBQ0QsT0FBTyxLQUFLLENBQUM7YUFDaEI7U0FDSjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxpQkFBaUI7SUFDakIsTUFBTSxDQUFDLElBQVk7UUFDZixJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQztZQUFFLE9BQU8sS0FBSyxDQUFDO1FBRXBDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDeEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbEMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QiwwQkFBMEI7WUFDMUIsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDO1lBRzdELG9DQUFvQztZQUNwQyxJQUFJLFFBQVEsRUFBRTtnQkFDVixPQUFPLEdBQUcsUUFBUSxDQUFDO2dCQUNuQix5QkFBeUI7Z0JBQ3pCLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUN2QixPQUFPLE9BQU8sQ0FBQyxTQUFTLENBQUM7aUJBQzVCO2FBQ0o7WUFDRCxzQkFBc0I7aUJBQ2pCO2dCQUNELE9BQU8sS0FBSyxDQUFDO2FBQ2hCO1NBQ0o7SUFFTCxDQUFDO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIvL+iKgueCueexu1xyXG5jbGFzcyBUcmllTm9kZSB7XHJcbiAgICAvLyBudWxsIOWAvCDkuLogcm9vdCDoioLngrlcclxuICAgIGNoYXI6IHN0cmluZyB8IG51bGw7XHJcbiAgICBjaGlsZHJlbjogVHJpZU5vZGVbXSA9IFtdO1xyXG4gICAgaXNFbmROb2RlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2hhcjogc3RyaW5nIHwgbnVsbCkge1xyXG4gICAgICAgIHRoaXMuY2hhciA9IGNoYXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFRyaWUge1xyXG4gICAgcm9vdCA9IG5ldyBUcmllTm9kZShudWxsKTtcclxuXHJcbiAgICAvLyDmj5LlhaXkuIDkuKrljZXor43liLB0cmll5qCRXHJcbiAgICBpbnNlcnQod29yZDogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IGN1ck5vZGUgPSB0aGlzLnJvb3Q7XHJcbiAgICAgICAgY29uc3QgYXJyID0gd29yZC5tYXRjaCgvLi9nKSE7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoYXIgPSBhcnJbaV07XHJcbiAgICAgICAgICAgIC8vIOafpeeci+W9k+WJjW5vZGXnmoTlrZDoioLngrkg5piv5ZCm5LiOY2hhciDnm7jnrYlcclxuICAgICAgICAgICAgY29uc3QgZmluZE5vZGUgPSBjdXJOb2RlLmNoaWxkcmVuLmZpbmQodiA9PiB2LmNoYXIgPT09IGNoYXIpO1xyXG5cclxuICAgICAgICAgICAgLy8gMS7nm7jnrYnvvJogY3VyTm9kZeaMh+WQkSDmib7liLDnmoTlrZDoioLngrlcclxuICAgICAgICAgICAgaWYgKGZpbmROb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJOb2RlID0gZmluZE5vZGU7XHJcbiAgICAgICAgICAgICAgICAvLyB3b3JkIGVuZCDoioLngrlcclxuICAgICAgICAgICAgICAgIGlmIChpID09PSBhcnIubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbmROb2RlLmlzRW5kTm9kZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gMi7kuI3nm7jnrYnvvIwg5ZyoY3VyTm9kZSDkuIvmlrDlop7kuIDkuKroioLngrnlgLzkuLpjaGFyIO+8jOW5tuS4lCBjdXJOb2Rl5oyH5ZCR5paw5aKe6IqC54K5XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3Tm9kZSA9IG5ldyBUcmllTm9kZShjaGFyKTtcclxuICAgICAgICAgICAgICAgIGN1ck5vZGUuY2hpbGRyZW4ucHVzaChuZXdOb2RlKTtcclxuICAgICAgICAgICAgICAgIGN1ck5vZGUgPSBuZXdOb2RlO1xyXG4gICAgICAgICAgICAgICAgLy93b3JkIGVuZCDoioLngrlcclxuICAgICAgICAgICAgICAgIGlmIChpID09PSBhcnIubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld05vZGUuaXNFbmROb2RlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5Yik5pat6K+l5YmN57yA5piv5ZCm5a2Y5Zyo5LiOdHJpZeagkeS4rVxyXG4gICAgc3RhcnRzV2l0aChwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgIGlmIChwcmVmaXgubGVuZ3RoID09PSAwKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgbGV0IGN1ck5vZGUgPSB0aGlzLnJvb3Q7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmVmaXgubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgY2hhciA9IHByZWZpeC5jaGFyQXQoaSk7XHJcbiAgICAgICAgICAgIGxldCBmaW5kTm9kZSA9IG51bGw7XHJcbiAgICAgICAgICAgIC8v5p+l55yL5b2T5YmN6IqC54K55LiLIOaYr+WQpuiDveaJvuWIsOWtl+espmNoYXJcclxuICAgICAgICAgICAgY3VyTm9kZS5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5jaGFyID09PSBjaGFyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmluZE5vZGUgPSBpdGVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIDEuIOaJvuWIsOWtl+espmNoYXIg5b2T5YmNY3VyTm9kZSDmjIflkJEgZmluZE5vZGVcclxuICAgICAgICAgICAgaWYgKGZpbmROb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJOb2RlID0gZmluZE5vZGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gMi4g5rKh5om+5YiwIOWImeivpeWNleivjeS4jeWcqHRyaWXmoJHkuK1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5Yik5pat6K+l5Y2V6K+N5piv5ZCm5ZyodHJpZeagkeS4rVxyXG4gICAgc2VhcmNoKHdvcmQ6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh3b3JkLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICBsZXQgY3VyTm9kZSA9IHRoaXMucm9vdDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdvcmQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgY2hhciA9IHdvcmQuY2hhckF0KGkpO1xyXG4gICAgICAgICAgICAvLyDmn6XnnIvlvZPliY1ub2Rl55qE5a2Q6IqC54K5IOaYr+WQpuS4jmNoYXIg55u4562JXHJcbiAgICAgICAgICAgIGNvbnN0IGZpbmROb2RlID0gY3VyTm9kZS5jaGlsZHJlbi5maW5kKHYgPT4gdi5jaGFyID09PSBjaGFyKTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAxLiDmib7liLDlrZfnrKZjaGFyIOW9k+WJjWN1ck5vZGUg5oyH5ZCRIGZpbmROb2RlXHJcbiAgICAgICAgICAgIGlmIChmaW5kTm9kZSkge1xyXG4gICAgICAgICAgICAgICAgY3VyTm9kZSA9IGZpbmROb2RlO1xyXG4gICAgICAgICAgICAgICAgLy93b3JkIGVuZCDoioLngrnpop3lpJbliKTmlq0gJiYg57uT5p2f5p2h5Lu2XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gd29yZC5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN1ck5vZGUuaXNFbmROb2RlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIDIuIOayoeaJvuWIsCDliJnor6XljZXor43kuI3lnKh0cmll5qCR5LitXHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCB7fTtcclxuIl19