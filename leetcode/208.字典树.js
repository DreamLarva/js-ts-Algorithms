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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjA4LuWtl+WFuOagkS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjA4LuWtl+WFuOagkS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBaUJJOztBQUVKLEtBQUs7QUFDTCxNQUFNLFFBQVE7SUFNWixZQUFZLElBQW1CO1FBSC9CLGFBQVEsR0FBZSxFQUFFLENBQUM7UUFDMUIsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUd6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNuQixDQUFDO0NBQ0Y7QUFFRCxNQUFNLElBQUk7SUFBVjtRQUNFLFNBQUksR0FBRyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQW1GNUIsQ0FBQztJQWpGQyxlQUFlO0lBQ2YsTUFBTSxDQUFDLElBQVk7UUFDakIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN4QixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBRSxDQUFDO1FBRTlCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ25DLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQiwwQkFBMEI7WUFDMUIsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUM7WUFFL0QseUJBQXlCO1lBQ3pCLElBQUksUUFBUSxFQUFFO2dCQUNaLE9BQU8sR0FBRyxRQUFRLENBQUM7Z0JBQ25CLGNBQWM7Z0JBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ3hCLFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2lCQUMzQjthQUNGO1lBQ0Qsa0RBQWtEO2lCQUM3QztnQkFDSCxNQUFNLE9BQU8sR0FBRyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbkMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQy9CLE9BQU8sR0FBRyxPQUFPLENBQUM7Z0JBQ2xCLGFBQWE7Z0JBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ3hCLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2lCQUMxQjthQUNGO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsbUJBQW1CO0lBQ25CLFVBQVUsQ0FBQyxNQUFjO1FBQ3ZCLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDO1lBQUUsT0FBTyxLQUFLLENBQUM7UUFDdEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN4QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN0QyxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQztZQUNwQixxQkFBcUI7WUFDckIsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJO2dCQUNyQyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO29CQUN0QixRQUFRLEdBQUcsSUFBSSxDQUFDO2lCQUNqQjtZQUNILENBQUMsQ0FBQyxDQUFDO1lBRUgsb0NBQW9DO1lBQ3BDLElBQUksUUFBUSxFQUFFO2dCQUNaLE9BQU8sR0FBRyxRQUFRLENBQUM7YUFDcEI7WUFDRCxzQkFBc0I7aUJBQ2pCO2dCQUNILE9BQU8sS0FBSyxDQUFDO2FBQ2Q7U0FDRjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELGlCQUFpQjtJQUNqQixNQUFNLENBQUMsSUFBWTtRQUNqQixJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQztZQUFFLE9BQU8sS0FBSyxDQUFDO1FBRXBDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDeEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDcEMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QiwwQkFBMEI7WUFDMUIsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUM7WUFFL0Qsb0NBQW9DO1lBQ3BDLElBQUksUUFBUSxFQUFFO2dCQUNaLE9BQU8sR0FBRyxRQUFRLENBQUM7Z0JBQ25CLHlCQUF5QjtnQkFDekIsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ3pCLE9BQU8sT0FBTyxDQUFDLFNBQVMsQ0FBQztpQkFDMUI7YUFDRjtZQUNELHNCQUFzQjtpQkFDakI7Z0JBQ0gsT0FBTyxLQUFLLENBQUM7YUFDZDtTQUNGO0lBQ0gsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLypcbuWunueOsOS4gOS4qiBUcmllICjliY3nvIDmoJEp77yM5YyF5ZCrIGluc2VydCwgc2VhcmNoLCDlkowgc3RhcnRzV2l0aCDov5nkuInkuKrmk43kvZzjgIJcblxu56S65L6LOlxuXG5UcmllIHRyaWUgPSBuZXcgVHJpZSgpO1xuXG50cmllLmluc2VydChcImFwcGxlXCIpO1xudHJpZS5zZWFyY2goXCJhcHBsZVwiKTsgICAvLyDov5Tlm54gdHJ1ZVxudHJpZS5zZWFyY2goXCJhcHBcIik7ICAgICAvLyDov5Tlm54gZmFsc2VcbnRyaWUuc3RhcnRzV2l0aChcImFwcFwiKTsgLy8g6L+U5ZueIHRydWVcbnRyaWUuaW5zZXJ0KFwiYXBwXCIpO1xudHJpZS5zZWFyY2goXCJhcHBcIik7ICAgICAvLyDov5Tlm54gdHJ1ZVxu6K+05piOOlxuXG7kvaDlj6/ku6XlgYforr7miYDmnInnmoTovpPlhaXpg73mmK/nlLHlsI/lhpnlrZfmr40gYS16IOaehOaIkOeahOOAglxu5L+d6K+B5omA5pyJ6L6T5YWl5Z2H5Li66Z2e56m65a2X56ym5Liy44CCXG4qICovXG5cbi8v6IqC54K557G7XG5jbGFzcyBUcmllTm9kZSB7XG4gIC8vIG51bGwg5YC8IOS4uiByb290IOiKgueCuVxuICBjaGFyOiBzdHJpbmcgfCBudWxsO1xuICBjaGlsZHJlbjogVHJpZU5vZGVbXSA9IFtdO1xuICBpc0VuZE5vZGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihjaGFyOiBzdHJpbmcgfCBudWxsKSB7XG4gICAgdGhpcy5jaGFyID0gY2hhcjtcbiAgfVxufVxuXG5jbGFzcyBUcmllIHtcbiAgcm9vdCA9IG5ldyBUcmllTm9kZShudWxsKTtcblxuICAvLyDmj5LlhaXkuIDkuKrljZXor43liLB0cmll5qCRXG4gIGluc2VydCh3b3JkOiBzdHJpbmcpIHtcbiAgICBsZXQgY3VyTm9kZSA9IHRoaXMucm9vdDtcbiAgICBjb25zdCBhcnIgPSB3b3JkLm1hdGNoKC8uL2cpITtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjaGFyID0gYXJyW2ldO1xuICAgICAgLy8g5p+l55yL5b2T5YmNbm9kZeeahOWtkOiKgueCuSDmmK/lkKbkuI5jaGFyIOebuOetiVxuICAgICAgY29uc3QgZmluZE5vZGUgPSBjdXJOb2RlLmNoaWxkcmVuLmZpbmQoKHYpID0+IHYuY2hhciA9PT0gY2hhcik7XG5cbiAgICAgIC8vIDEu55u4562J77yaIGN1ck5vZGXmjIflkJEg5om+5Yiw55qE5a2Q6IqC54K5XG4gICAgICBpZiAoZmluZE5vZGUpIHtcbiAgICAgICAgY3VyTm9kZSA9IGZpbmROb2RlO1xuICAgICAgICAvLyB3b3JkIGVuZCDoioLngrlcbiAgICAgICAgaWYgKGkgPT09IGFyci5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgZmluZE5vZGUuaXNFbmROb2RlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gMi7kuI3nm7jnrYnvvIwg5ZyoY3VyTm9kZSDkuIvmlrDlop7kuIDkuKroioLngrnlgLzkuLpjaGFyIO+8jOW5tuS4lCBjdXJOb2Rl5oyH5ZCR5paw5aKe6IqC54K5XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29uc3QgbmV3Tm9kZSA9IG5ldyBUcmllTm9kZShjaGFyKTtcbiAgICAgICAgY3VyTm9kZS5jaGlsZHJlbi5wdXNoKG5ld05vZGUpO1xuICAgICAgICBjdXJOb2RlID0gbmV3Tm9kZTtcbiAgICAgICAgLy93b3JkIGVuZCDoioLngrlcbiAgICAgICAgaWYgKGkgPT09IGFyci5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgbmV3Tm9kZS5pc0VuZE5vZGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8g5Yik5pat6K+l5YmN57yA5piv5ZCm5a2Y5Zyo5LiOdHJpZeagkeS4rVxuICBzdGFydHNXaXRoKHByZWZpeDogc3RyaW5nKSB7XG4gICAgaWYgKHByZWZpeC5sZW5ndGggPT09IDApIHJldHVybiBmYWxzZTtcbiAgICBsZXQgY3VyTm9kZSA9IHRoaXMucm9vdDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByZWZpeC5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY2hhciA9IHByZWZpeC5jaGFyQXQoaSk7XG4gICAgICBsZXQgZmluZE5vZGUgPSBudWxsO1xuICAgICAgLy/mn6XnnIvlvZPliY3oioLngrnkuIsg5piv5ZCm6IO95om+5Yiw5a2X56ymY2hhclxuICAgICAgY3VyTm9kZS5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIGlmIChpdGVtLmNoYXIgPT09IGNoYXIpIHtcbiAgICAgICAgICBmaW5kTm9kZSA9IGl0ZW07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyAxLiDmib7liLDlrZfnrKZjaGFyIOW9k+WJjWN1ck5vZGUg5oyH5ZCRIGZpbmROb2RlXG4gICAgICBpZiAoZmluZE5vZGUpIHtcbiAgICAgICAgY3VyTm9kZSA9IGZpbmROb2RlO1xuICAgICAgfVxuICAgICAgLy8gMi4g5rKh5om+5YiwIOWImeivpeWNleivjeS4jeWcqHRyaWXmoJHkuK1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8g5Yik5pat6K+l5Y2V6K+N5piv5ZCm5ZyodHJpZeagkeS4rVxuICBzZWFyY2god29yZDogc3RyaW5nKSB7XG4gICAgaWYgKHdvcmQubGVuZ3RoID09PSAwKSByZXR1cm4gZmFsc2U7XG5cbiAgICBsZXQgY3VyTm9kZSA9IHRoaXMucm9vdDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdvcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNoYXIgPSB3b3JkLmNoYXJBdChpKTtcbiAgICAgIC8vIOafpeeci+W9k+WJjW5vZGXnmoTlrZDoioLngrkg5piv5ZCm5LiOY2hhciDnm7jnrYlcbiAgICAgIGNvbnN0IGZpbmROb2RlID0gY3VyTm9kZS5jaGlsZHJlbi5maW5kKCh2KSA9PiB2LmNoYXIgPT09IGNoYXIpO1xuXG4gICAgICAvLyAxLiDmib7liLDlrZfnrKZjaGFyIOW9k+WJjWN1ck5vZGUg5oyH5ZCRIGZpbmROb2RlXG4gICAgICBpZiAoZmluZE5vZGUpIHtcbiAgICAgICAgY3VyTm9kZSA9IGZpbmROb2RlO1xuICAgICAgICAvL3dvcmQgZW5kIOiKgueCuemineWkluWIpOaWrSAmJiDnu5PmnZ/mnaHku7ZcbiAgICAgICAgaWYgKGkgPT09IHdvcmQubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIHJldHVybiBjdXJOb2RlLmlzRW5kTm9kZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gMi4g5rKh5om+5YiwIOWImeivpeWNleivjeS4jeWcqHRyaWXmoJHkuK1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7fTtcbiJdfQ==