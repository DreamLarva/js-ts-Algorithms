"use strict";
/*
实现一个 Trie (前缀树)，包含 insert, search, 和 startsWith 这三个操作。

示例:

Trie trie = new Trie();

trie.insert("apple");
trie.search("apple");   // 返回 true
trie.search("app");     // 返回 false
trie.startsWith("app"); // 返回 true
trie.insert("app");
trie.search("app");     // 返回 true
说明:

你可以假设所有的输入都是由小写字母 a-z 构成的。
保证所有输入均为非空字符串。
* */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjA4LuWtl+WFuOagkS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjA4LuWtl+WFuOagkS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBaUJJOztBQUVKLEtBQUs7QUFDTCxNQUFNLFFBQVE7SUFNVixZQUFZLElBQW1CO1FBSC9CLGFBQVEsR0FBZSxFQUFFLENBQUM7UUFDMUIsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUd2QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0NBQ0o7QUFFRCxNQUFNLElBQUk7SUFBVjtRQUNJLFNBQUksR0FBRyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQXNGOUIsQ0FBQztJQXBGRyxlQUFlO0lBQ2YsTUFBTSxDQUFDLElBQVk7UUFDZixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3hCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFFLENBQUM7UUFFOUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDakMsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLDBCQUEwQjtZQUMxQixNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUM7WUFFN0QseUJBQXlCO1lBQ3pCLElBQUksUUFBUSxFQUFFO2dCQUNWLE9BQU8sR0FBRyxRQUFRLENBQUM7Z0JBQ25CLGNBQWM7Z0JBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ3RCLFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2lCQUM3QjthQUNKO1lBQ0Qsa0RBQWtEO2lCQUM3QztnQkFDRCxNQUFNLE9BQU8sR0FBRyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbkMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQy9CLE9BQU8sR0FBRyxPQUFPLENBQUM7Z0JBQ2xCLGFBQWE7Z0JBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ3RCLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2lCQUM1QjthQUNKO1NBRUo7SUFDTCxDQUFDO0lBRUQsbUJBQW1CO0lBQ25CLFVBQVUsQ0FBQyxNQUFjO1FBQ3JCLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDO1lBQUUsT0FBTyxLQUFLLENBQUM7UUFDdEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN4QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNwQyxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQztZQUNwQixxQkFBcUI7WUFDckIsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJO2dCQUNuQyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO29CQUNwQixRQUFRLEdBQUcsSUFBSSxDQUFDO2lCQUNuQjtZQUNMLENBQUMsQ0FBQyxDQUFDO1lBRUgsb0NBQW9DO1lBQ3BDLElBQUksUUFBUSxFQUFFO2dCQUNWLE9BQU8sR0FBRyxRQUFRLENBQUM7YUFDdEI7WUFDRCxzQkFBc0I7aUJBQ2pCO2dCQUNELE9BQU8sS0FBSyxDQUFDO2FBQ2hCO1NBQ0o7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsaUJBQWlCO0lBQ2pCLE1BQU0sQ0FBQyxJQUFZO1FBQ2YsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUM7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUVwQyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2xDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsMEJBQTBCO1lBQzFCLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQztZQUc3RCxvQ0FBb0M7WUFDcEMsSUFBSSxRQUFRLEVBQUU7Z0JBQ1YsT0FBTyxHQUFHLFFBQVEsQ0FBQztnQkFDbkIseUJBQXlCO2dCQUN6QixJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDdkIsT0FBTyxPQUFPLENBQUMsU0FBUyxDQUFDO2lCQUM1QjthQUNKO1lBQ0Qsc0JBQXNCO2lCQUNqQjtnQkFDRCxPQUFPLEtBQUssQ0FBQzthQUNoQjtTQUNKO0lBRUwsQ0FBQztDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLypcbuWunueOsOS4gOS4qiBUcmllICjliY3nvIDmoJEp77yM5YyF5ZCrIGluc2VydCwgc2VhcmNoLCDlkowgc3RhcnRzV2l0aCDov5nkuInkuKrmk43kvZzjgIJcblxu56S65L6LOlxuXG5UcmllIHRyaWUgPSBuZXcgVHJpZSgpO1xuXG50cmllLmluc2VydChcImFwcGxlXCIpO1xudHJpZS5zZWFyY2goXCJhcHBsZVwiKTsgICAvLyDov5Tlm54gdHJ1ZVxudHJpZS5zZWFyY2goXCJhcHBcIik7ICAgICAvLyDov5Tlm54gZmFsc2VcbnRyaWUuc3RhcnRzV2l0aChcImFwcFwiKTsgLy8g6L+U5ZueIHRydWVcbnRyaWUuaW5zZXJ0KFwiYXBwXCIpO1xudHJpZS5zZWFyY2goXCJhcHBcIik7ICAgICAvLyDov5Tlm54gdHJ1ZVxu6K+05piOOlxuXG7kvaDlj6/ku6XlgYforr7miYDmnInnmoTovpPlhaXpg73mmK/nlLHlsI/lhpnlrZfmr40gYS16IOaehOaIkOeahOOAglxu5L+d6K+B5omA5pyJ6L6T5YWl5Z2H5Li66Z2e56m65a2X56ym5Liy44CCXG4qICovXG5cbi8v6IqC54K557G7XG5jbGFzcyBUcmllTm9kZSB7XG4gICAgLy8gbnVsbCDlgLwg5Li6IHJvb3Qg6IqC54K5XG4gICAgY2hhcjogc3RyaW5nIHwgbnVsbDtcbiAgICBjaGlsZHJlbjogVHJpZU5vZGVbXSA9IFtdO1xuICAgIGlzRW5kTm9kZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoY2hhcjogc3RyaW5nIHwgbnVsbCkge1xuICAgICAgICB0aGlzLmNoYXIgPSBjaGFyO1xuICAgIH1cbn1cblxuY2xhc3MgVHJpZSB7XG4gICAgcm9vdCA9IG5ldyBUcmllTm9kZShudWxsKTtcblxuICAgIC8vIOaPkuWFpeS4gOS4quWNleivjeWIsHRyaWXmoJFcbiAgICBpbnNlcnQod29yZDogc3RyaW5nKSB7XG4gICAgICAgIGxldCBjdXJOb2RlID0gdGhpcy5yb290O1xuICAgICAgICBjb25zdCBhcnIgPSB3b3JkLm1hdGNoKC8uL2cpITtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY2hhciA9IGFycltpXTtcbiAgICAgICAgICAgIC8vIOafpeeci+W9k+WJjW5vZGXnmoTlrZDoioLngrkg5piv5ZCm5LiOY2hhciDnm7jnrYlcbiAgICAgICAgICAgIGNvbnN0IGZpbmROb2RlID0gY3VyTm9kZS5jaGlsZHJlbi5maW5kKHYgPT4gdi5jaGFyID09PSBjaGFyKTtcblxuICAgICAgICAgICAgLy8gMS7nm7jnrYnvvJogY3VyTm9kZeaMh+WQkSDmib7liLDnmoTlrZDoioLngrlcbiAgICAgICAgICAgIGlmIChmaW5kTm9kZSkge1xuICAgICAgICAgICAgICAgIGN1ck5vZGUgPSBmaW5kTm9kZTtcbiAgICAgICAgICAgICAgICAvLyB3b3JkIGVuZCDoioLngrlcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gYXJyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgZmluZE5vZGUuaXNFbmROb2RlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAyLuS4jeebuOetie+8jCDlnKhjdXJOb2RlIOS4i+aWsOWinuS4gOS4quiKgueCueWAvOS4umNoYXIg77yM5bm25LiUIGN1ck5vZGXmjIflkJHmlrDlop7oioLngrlcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld05vZGUgPSBuZXcgVHJpZU5vZGUoY2hhcik7XG4gICAgICAgICAgICAgICAgY3VyTm9kZS5jaGlsZHJlbi5wdXNoKG5ld05vZGUpO1xuICAgICAgICAgICAgICAgIGN1ck5vZGUgPSBuZXdOb2RlO1xuICAgICAgICAgICAgICAgIC8vd29yZCBlbmQg6IqC54K5XG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IGFyci5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld05vZGUuaXNFbmROb2RlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIOWIpOaWreivpeWJjee8gOaYr+WQpuWtmOWcqOS4jnRyaWXmoJHkuK1cbiAgICBzdGFydHNXaXRoKHByZWZpeDogc3RyaW5nKSB7XG4gICAgICAgIGlmIChwcmVmaXgubGVuZ3RoID09PSAwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGxldCBjdXJOb2RlID0gdGhpcy5yb290O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByZWZpeC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY2hhciA9IHByZWZpeC5jaGFyQXQoaSk7XG4gICAgICAgICAgICBsZXQgZmluZE5vZGUgPSBudWxsO1xuICAgICAgICAgICAgLy/mn6XnnIvlvZPliY3oioLngrnkuIsg5piv5ZCm6IO95om+5Yiw5a2X56ymY2hhclxuICAgICAgICAgICAgY3VyTm9kZS5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uY2hhciA9PT0gY2hhcikge1xuICAgICAgICAgICAgICAgICAgICBmaW5kTm9kZSA9IGl0ZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIDEuIOaJvuWIsOWtl+espmNoYXIg5b2T5YmNY3VyTm9kZSDmjIflkJEgZmluZE5vZGVcbiAgICAgICAgICAgIGlmIChmaW5kTm9kZSkge1xuICAgICAgICAgICAgICAgIGN1ck5vZGUgPSBmaW5kTm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIDIuIOayoeaJvuWIsCDliJnor6XljZXor43kuI3lnKh0cmll5qCR5LitXG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8g5Yik5pat6K+l5Y2V6K+N5piv5ZCm5ZyodHJpZeagkeS4rVxuICAgIHNlYXJjaCh3b3JkOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHdvcmQubGVuZ3RoID09PSAwKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgbGV0IGN1ck5vZGUgPSB0aGlzLnJvb3Q7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd29yZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY2hhciA9IHdvcmQuY2hhckF0KGkpO1xuICAgICAgICAgICAgLy8g5p+l55yL5b2T5YmNbm9kZeeahOWtkOiKgueCuSDmmK/lkKbkuI5jaGFyIOebuOetiVxuICAgICAgICAgICAgY29uc3QgZmluZE5vZGUgPSBjdXJOb2RlLmNoaWxkcmVuLmZpbmQodiA9PiB2LmNoYXIgPT09IGNoYXIpO1xuXG5cbiAgICAgICAgICAgIC8vIDEuIOaJvuWIsOWtl+espmNoYXIg5b2T5YmNY3VyTm9kZSDmjIflkJEgZmluZE5vZGVcbiAgICAgICAgICAgIGlmIChmaW5kTm9kZSkge1xuICAgICAgICAgICAgICAgIGN1ck5vZGUgPSBmaW5kTm9kZTtcbiAgICAgICAgICAgICAgICAvL3dvcmQgZW5kIOiKgueCuemineWkluWIpOaWrSAmJiDnu5PmnZ/mnaHku7ZcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gd29yZC5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjdXJOb2RlLmlzRW5kTm9kZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAyLiDmsqHmib7liLAg5YiZ6K+l5Y2V6K+N5LiN5ZyodHJpZeagkeS4rVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG59XG5cblxuZXhwb3J0IHt9O1xuIl19