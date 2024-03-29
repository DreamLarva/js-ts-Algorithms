"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//节点类
class TrieNode {
    // null 值 为 root 节点
    char;
    children = [];
    isEndNode = false;
    constructor(char) {
        this.char = char;
    }
}
class Trie {
    root = new TrieNode(null);
    // 插入一个单词到trie树
    insert(word) {
        let curNode = this.root;
        const arr = word.match(/./g);
        for (let i = 0; i < arr.length; i++) {
            const char = arr[i];
            // 查看当前node的子节点 是否与char 相等
            const findNode = curNode.children.find((v) => v.char === char);
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
            const findNode = curNode.children.find((v) => v.char === char);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoi5a2X5YW45qCRLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyLmlbDmja7nu5PmnoQv5a2X5YW45qCRLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsS0FBSztBQUNMLE1BQU0sUUFBUTtJQUNaLG1CQUFtQjtJQUNuQixJQUFJLENBQWdCO0lBQ3BCLFFBQVEsR0FBZSxFQUFFLENBQUM7SUFDMUIsU0FBUyxHQUFZLEtBQUssQ0FBQztJQUUzQixZQUFZLElBQW1CO1FBQzdCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7Q0FDRjtBQUVELE1BQU0sSUFBSTtJQUNSLElBQUksR0FBRyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUUxQixlQUFlO0lBQ2YsTUFBTSxDQUFDLElBQVk7UUFDakIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN4QixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBRSxDQUFDO1FBRTlCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ25DLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQiwwQkFBMEI7WUFDMUIsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUM7WUFFL0QseUJBQXlCO1lBQ3pCLElBQUksUUFBUSxFQUFFO2dCQUNaLE9BQU8sR0FBRyxRQUFRLENBQUM7Z0JBQ25CLGNBQWM7Z0JBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ3hCLFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2lCQUMzQjthQUNGO1lBQ0Qsa0RBQWtEO2lCQUM3QztnQkFDSCxNQUFNLE9BQU8sR0FBRyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbkMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQy9CLE9BQU8sR0FBRyxPQUFPLENBQUM7Z0JBQ2xCLGFBQWE7Z0JBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ3hCLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2lCQUMxQjthQUNGO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsbUJBQW1CO0lBQ25CLFVBQVUsQ0FBQyxNQUFjO1FBQ3ZCLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDO1lBQUUsT0FBTyxLQUFLLENBQUM7UUFDdEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN4QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN0QyxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksUUFBUSxHQUFvQixJQUFJLENBQUM7WUFDckMscUJBQXFCO1lBQ3JCLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSTtnQkFDckMsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRTtvQkFDdEIsUUFBUSxHQUFHLElBQUksQ0FBQztpQkFDakI7WUFDSCxDQUFDLENBQUMsQ0FBQztZQUVILG9DQUFvQztZQUNwQyxJQUFJLFFBQVEsRUFBRTtnQkFDWixPQUFPLEdBQUcsUUFBUSxDQUFDO2FBQ3BCO1lBQ0Qsc0JBQXNCO2lCQUNqQjtnQkFDSCxPQUFPLEtBQUssQ0FBQzthQUNkO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxpQkFBaUI7SUFDakIsTUFBTSxDQUFDLElBQVk7UUFDakIsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUM7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUVwQyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3BDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsMEJBQTBCO1lBQzFCLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDO1lBRS9ELG9DQUFvQztZQUNwQyxJQUFJLFFBQVEsRUFBRTtnQkFDWixPQUFPLEdBQUcsUUFBUSxDQUFDO2dCQUNuQix5QkFBeUI7Z0JBQ3pCLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUN6QixPQUFPLE9BQU8sQ0FBQyxTQUFTLENBQUM7aUJBQzFCO2FBQ0Y7WUFDRCxzQkFBc0I7aUJBQ2pCO2dCQUNILE9BQU8sS0FBSyxDQUFDO2FBQ2Q7U0FDRjtJQUNILENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8v6IqC54K557G7XG5jbGFzcyBUcmllTm9kZSB7XG4gIC8vIG51bGwg5YC8IOS4uiByb290IOiKgueCuVxuICBjaGFyOiBzdHJpbmcgfCBudWxsO1xuICBjaGlsZHJlbjogVHJpZU5vZGVbXSA9IFtdO1xuICBpc0VuZE5vZGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihjaGFyOiBzdHJpbmcgfCBudWxsKSB7XG4gICAgdGhpcy5jaGFyID0gY2hhcjtcbiAgfVxufVxuXG5jbGFzcyBUcmllIHtcbiAgcm9vdCA9IG5ldyBUcmllTm9kZShudWxsKTtcblxuICAvLyDmj5LlhaXkuIDkuKrljZXor43liLB0cmll5qCRXG4gIGluc2VydCh3b3JkOiBzdHJpbmcpIHtcbiAgICBsZXQgY3VyTm9kZSA9IHRoaXMucm9vdDtcbiAgICBjb25zdCBhcnIgPSB3b3JkLm1hdGNoKC8uL2cpITtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjaGFyID0gYXJyW2ldO1xuICAgICAgLy8g5p+l55yL5b2T5YmNbm9kZeeahOWtkOiKgueCuSDmmK/lkKbkuI5jaGFyIOebuOetiVxuICAgICAgY29uc3QgZmluZE5vZGUgPSBjdXJOb2RlLmNoaWxkcmVuLmZpbmQoKHYpID0+IHYuY2hhciA9PT0gY2hhcik7XG5cbiAgICAgIC8vIDEu55u4562J77yaIGN1ck5vZGXmjIflkJEg5om+5Yiw55qE5a2Q6IqC54K5XG4gICAgICBpZiAoZmluZE5vZGUpIHtcbiAgICAgICAgY3VyTm9kZSA9IGZpbmROb2RlO1xuICAgICAgICAvLyB3b3JkIGVuZCDoioLngrlcbiAgICAgICAgaWYgKGkgPT09IGFyci5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgZmluZE5vZGUuaXNFbmROb2RlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gMi7kuI3nm7jnrYnvvIwg5ZyoY3VyTm9kZSDkuIvmlrDlop7kuIDkuKroioLngrnlgLzkuLpjaGFyIO+8jOW5tuS4lCBjdXJOb2Rl5oyH5ZCR5paw5aKe6IqC54K5XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29uc3QgbmV3Tm9kZSA9IG5ldyBUcmllTm9kZShjaGFyKTtcbiAgICAgICAgY3VyTm9kZS5jaGlsZHJlbi5wdXNoKG5ld05vZGUpO1xuICAgICAgICBjdXJOb2RlID0gbmV3Tm9kZTtcbiAgICAgICAgLy93b3JkIGVuZCDoioLngrlcbiAgICAgICAgaWYgKGkgPT09IGFyci5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgbmV3Tm9kZS5pc0VuZE5vZGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8g5Yik5pat6K+l5YmN57yA5piv5ZCm5a2Y5Zyo5LiOdHJpZeagkeS4rVxuICBzdGFydHNXaXRoKHByZWZpeDogc3RyaW5nKSB7XG4gICAgaWYgKHByZWZpeC5sZW5ndGggPT09IDApIHJldHVybiBmYWxzZTtcbiAgICBsZXQgY3VyTm9kZSA9IHRoaXMucm9vdDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByZWZpeC5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY2hhciA9IHByZWZpeC5jaGFyQXQoaSk7XG4gICAgICBsZXQgZmluZE5vZGU6IFRyaWVOb2RlIHwgbnVsbCA9IG51bGw7XG4gICAgICAvL+afpeeci+W9k+WJjeiKgueCueS4iyDmmK/lkKbog73mib7liLDlrZfnrKZjaGFyXG4gICAgICBjdXJOb2RlLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgaWYgKGl0ZW0uY2hhciA9PT0gY2hhcikge1xuICAgICAgICAgIGZpbmROb2RlID0gaXRlbTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIDEuIOaJvuWIsOWtl+espmNoYXIg5b2T5YmNY3VyTm9kZSDmjIflkJEgZmluZE5vZGVcbiAgICAgIGlmIChmaW5kTm9kZSkge1xuICAgICAgICBjdXJOb2RlID0gZmluZE5vZGU7XG4gICAgICB9XG4gICAgICAvLyAyLiDmsqHmib7liLAg5YiZ6K+l5Y2V6K+N5LiN5ZyodHJpZeagkeS4rVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyDliKTmlq3or6XljZXor43mmK/lkKblnKh0cmll5qCR5LitXG4gIHNlYXJjaCh3b3JkOiBzdHJpbmcpIHtcbiAgICBpZiAod29yZC5sZW5ndGggPT09IDApIHJldHVybiBmYWxzZTtcblxuICAgIGxldCBjdXJOb2RlID0gdGhpcy5yb290O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd29yZC5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY2hhciA9IHdvcmQuY2hhckF0KGkpO1xuICAgICAgLy8g5p+l55yL5b2T5YmNbm9kZeeahOWtkOiKgueCuSDmmK/lkKbkuI5jaGFyIOebuOetiVxuICAgICAgY29uc3QgZmluZE5vZGUgPSBjdXJOb2RlLmNoaWxkcmVuLmZpbmQoKHYpID0+IHYuY2hhciA9PT0gY2hhcik7XG5cbiAgICAgIC8vIDEuIOaJvuWIsOWtl+espmNoYXIg5b2T5YmNY3VyTm9kZSDmjIflkJEgZmluZE5vZGVcbiAgICAgIGlmIChmaW5kTm9kZSkge1xuICAgICAgICBjdXJOb2RlID0gZmluZE5vZGU7XG4gICAgICAgIC8vd29yZCBlbmQg6IqC54K56aKd5aSW5Yik5patICYmIOe7k+adn+adoeS7tlxuICAgICAgICBpZiAoaSA9PT0gd29yZC5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgcmV0dXJuIGN1ck5vZGUuaXNFbmROb2RlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyAyLiDmsqHmib7liLAg5YiZ6K+l5Y2V6K+N5LiN5ZyodHJpZeagkeS4rVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHt9O1xuIl19