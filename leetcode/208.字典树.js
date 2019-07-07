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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjA4LuWtl+WFuOagkS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjA4LuWtl+WFuOagkS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBaUJJOztBQUVKLEtBQUs7QUFDTCxNQUFNLFFBQVE7SUFNVixZQUFZLElBQW1CO1FBSC9CLGFBQVEsR0FBZSxFQUFFLENBQUM7UUFDMUIsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUd2QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0NBQ0o7QUFFRCxNQUFNLElBQUk7SUFBVjtRQUNJLFNBQUksR0FBRyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQXNGOUIsQ0FBQztJQXBGRyxlQUFlO0lBQ2YsTUFBTSxDQUFDLElBQVk7UUFDZixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3hCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFFLENBQUM7UUFFOUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDakMsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLDBCQUEwQjtZQUMxQixNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUM7WUFFN0QseUJBQXlCO1lBQ3pCLElBQUksUUFBUSxFQUFFO2dCQUNWLE9BQU8sR0FBRyxRQUFRLENBQUM7Z0JBQ25CLGNBQWM7Z0JBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ3RCLFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2lCQUM3QjthQUNKO1lBQ0Qsa0RBQWtEO2lCQUM3QztnQkFDRCxNQUFNLE9BQU8sR0FBRyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbkMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQy9CLE9BQU8sR0FBRyxPQUFPLENBQUM7Z0JBQ2xCLGFBQWE7Z0JBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ3RCLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2lCQUM1QjthQUNKO1NBRUo7SUFDTCxDQUFDO0lBRUQsbUJBQW1CO0lBQ25CLFVBQVUsQ0FBQyxNQUFjO1FBQ3JCLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDO1lBQUUsT0FBTyxLQUFLLENBQUM7UUFDdEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN4QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNwQyxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQztZQUNwQixxQkFBcUI7WUFDckIsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJO2dCQUNuQyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO29CQUNwQixRQUFRLEdBQUcsSUFBSSxDQUFDO2lCQUNuQjtZQUNMLENBQUMsQ0FBQyxDQUFDO1lBRUgsb0NBQW9DO1lBQ3BDLElBQUksUUFBUSxFQUFFO2dCQUNWLE9BQU8sR0FBRyxRQUFRLENBQUM7YUFDdEI7WUFDRCxzQkFBc0I7aUJBQ2pCO2dCQUNELE9BQU8sS0FBSyxDQUFDO2FBQ2hCO1NBQ0o7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsaUJBQWlCO0lBQ2pCLE1BQU0sQ0FBQyxJQUFZO1FBQ2YsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUM7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUVwQyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2xDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsMEJBQTBCO1lBQzFCLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQztZQUc3RCxvQ0FBb0M7WUFDcEMsSUFBSSxRQUFRLEVBQUU7Z0JBQ1YsT0FBTyxHQUFHLFFBQVEsQ0FBQztnQkFDbkIseUJBQXlCO2dCQUN6QixJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDdkIsT0FBTyxPQUFPLENBQUMsU0FBUyxDQUFDO2lCQUM1QjthQUNKO1lBQ0Qsc0JBQXNCO2lCQUNqQjtnQkFDRCxPQUFPLEtBQUssQ0FBQzthQUNoQjtTQUNKO0lBRUwsQ0FBQztDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxu5a6e546w5LiA5LiqIFRyaWUgKOWJjee8gOagkSnvvIzljIXlkKsgaW5zZXJ0LCBzZWFyY2gsIOWSjCBzdGFydHNXaXRoIOi/meS4ieS4quaTjeS9nOOAglxyXG5cclxu56S65L6LOlxyXG5cclxuVHJpZSB0cmllID0gbmV3IFRyaWUoKTtcclxuXHJcbnRyaWUuaW5zZXJ0KFwiYXBwbGVcIik7XHJcbnRyaWUuc2VhcmNoKFwiYXBwbGVcIik7ICAgLy8g6L+U5ZueIHRydWVcclxudHJpZS5zZWFyY2goXCJhcHBcIik7ICAgICAvLyDov5Tlm54gZmFsc2VcclxudHJpZS5zdGFydHNXaXRoKFwiYXBwXCIpOyAvLyDov5Tlm54gdHJ1ZVxyXG50cmllLmluc2VydChcImFwcFwiKTtcclxudHJpZS5zZWFyY2goXCJhcHBcIik7ICAgICAvLyDov5Tlm54gdHJ1ZVxyXG7or7TmmI46XHJcblxyXG7kvaDlj6/ku6XlgYforr7miYDmnInnmoTovpPlhaXpg73mmK/nlLHlsI/lhpnlrZfmr40gYS16IOaehOaIkOeahOOAglxyXG7kv53or4HmiYDmnInovpPlhaXlnYfkuLrpnZ7nqbrlrZfnrKbkuLLjgIJcclxuKiAqL1xyXG5cclxuLy/oioLngrnnsbtcclxuY2xhc3MgVHJpZU5vZGUge1xyXG4gICAgLy8gbnVsbCDlgLwg5Li6IHJvb3Qg6IqC54K5XHJcbiAgICBjaGFyOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgY2hpbGRyZW46IFRyaWVOb2RlW10gPSBbXTtcclxuICAgIGlzRW5kTm9kZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNoYXI6IHN0cmluZyB8IG51bGwpIHtcclxuICAgICAgICB0aGlzLmNoYXIgPSBjaGFyO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBUcmllIHtcclxuICAgIHJvb3QgPSBuZXcgVHJpZU5vZGUobnVsbCk7XHJcblxyXG4gICAgLy8g5o+S5YWl5LiA5Liq5Y2V6K+N5YiwdHJpZeagkVxyXG4gICAgaW5zZXJ0KHdvcmQ6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBjdXJOb2RlID0gdGhpcy5yb290O1xyXG4gICAgICAgIGNvbnN0IGFyciA9IHdvcmQubWF0Y2goLy4vZykhO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBjaGFyID0gYXJyW2ldO1xyXG4gICAgICAgICAgICAvLyDmn6XnnIvlvZPliY1ub2Rl55qE5a2Q6IqC54K5IOaYr+WQpuS4jmNoYXIg55u4562JXHJcbiAgICAgICAgICAgIGNvbnN0IGZpbmROb2RlID0gY3VyTm9kZS5jaGlsZHJlbi5maW5kKHYgPT4gdi5jaGFyID09PSBjaGFyKTtcclxuXHJcbiAgICAgICAgICAgIC8vIDEu55u4562J77yaIGN1ck5vZGXmjIflkJEg5om+5Yiw55qE5a2Q6IqC54K5XHJcbiAgICAgICAgICAgIGlmIChmaW5kTm9kZSkge1xyXG4gICAgICAgICAgICAgICAgY3VyTm9kZSA9IGZpbmROb2RlO1xyXG4gICAgICAgICAgICAgICAgLy8gd29yZCBlbmQg6IqC54K5XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gYXJyLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBmaW5kTm9kZS5pc0VuZE5vZGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIDIu5LiN55u4562J77yMIOWcqGN1ck5vZGUg5LiL5paw5aKe5LiA5Liq6IqC54K55YC85Li6Y2hhciDvvIzlubbkuJQgY3VyTm9kZeaMh+WQkeaWsOWinuiKgueCuVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld05vZGUgPSBuZXcgVHJpZU5vZGUoY2hhcik7XHJcbiAgICAgICAgICAgICAgICBjdXJOb2RlLmNoaWxkcmVuLnB1c2gobmV3Tm9kZSk7XHJcbiAgICAgICAgICAgICAgICBjdXJOb2RlID0gbmV3Tm9kZTtcclxuICAgICAgICAgICAgICAgIC8vd29yZCBlbmQg6IqC54K5XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gYXJyLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdOb2RlLmlzRW5kTm9kZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOWIpOaWreivpeWJjee8gOaYr+WQpuWtmOWcqOS4jnRyaWXmoJHkuK1cclxuICAgIHN0YXJ0c1dpdGgocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAocHJlZml4Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGxldCBjdXJOb2RlID0gdGhpcy5yb290O1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJlZml4Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoYXIgPSBwcmVmaXguY2hhckF0KGkpO1xyXG4gICAgICAgICAgICBsZXQgZmluZE5vZGUgPSBudWxsO1xyXG4gICAgICAgICAgICAvL+afpeeci+W9k+WJjeiKgueCueS4iyDmmK/lkKbog73mib7liLDlrZfnrKZjaGFyXHJcbiAgICAgICAgICAgIGN1ck5vZGUuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uY2hhciA9PT0gY2hhcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbmROb2RlID0gaXRlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyAxLiDmib7liLDlrZfnrKZjaGFyIOW9k+WJjWN1ck5vZGUg5oyH5ZCRIGZpbmROb2RlXHJcbiAgICAgICAgICAgIGlmIChmaW5kTm9kZSkge1xyXG4gICAgICAgICAgICAgICAgY3VyTm9kZSA9IGZpbmROb2RlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIDIuIOayoeaJvuWIsCDliJnor6XljZXor43kuI3lnKh0cmll5qCR5LitXHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOWIpOaWreivpeWNleivjeaYr+WQpuWcqHRyaWXmoJHkuK1cclxuICAgIHNlYXJjaCh3b3JkOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAod29yZC5sZW5ndGggPT09IDApIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgbGV0IGN1ck5vZGUgPSB0aGlzLnJvb3Q7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3b3JkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoYXIgPSB3b3JkLmNoYXJBdChpKTtcclxuICAgICAgICAgICAgLy8g5p+l55yL5b2T5YmNbm9kZeeahOWtkOiKgueCuSDmmK/lkKbkuI5jaGFyIOebuOetiVxyXG4gICAgICAgICAgICBjb25zdCBmaW5kTm9kZSA9IGN1ck5vZGUuY2hpbGRyZW4uZmluZCh2ID0+IHYuY2hhciA9PT0gY2hhcik7XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMS4g5om+5Yiw5a2X56ymY2hhciDlvZPliY1jdXJOb2RlIOaMh+WQkSBmaW5kTm9kZVxyXG4gICAgICAgICAgICBpZiAoZmluZE5vZGUpIHtcclxuICAgICAgICAgICAgICAgIGN1ck5vZGUgPSBmaW5kTm9kZTtcclxuICAgICAgICAgICAgICAgIC8vd29yZCBlbmQg6IqC54K56aKd5aSW5Yik5patICYmIOe7k+adn+adoeS7tlxyXG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IHdvcmQubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjdXJOb2RlLmlzRW5kTm9kZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyAyLiDmsqHmib7liLAg5YiZ6K+l5Y2V6K+N5LiN5ZyodHJpZeagkeS4rVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQge307XHJcbiJdfQ==