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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoi5a2X5YW45qCRLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyLmlbDmja7nu5PmnoQv5a2X5YW45qCRLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsS0FBSztBQUNMLE1BQU0sUUFBUTtJQUNaLG1CQUFtQjtJQUNuQixJQUFJLENBQWdCO0lBQ3BCLFFBQVEsR0FBZSxFQUFFLENBQUM7SUFDMUIsU0FBUyxHQUFZLEtBQUssQ0FBQztJQUUzQixZQUFZLElBQW1CO1FBQzdCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7Q0FDRjtBQUVELE1BQU0sSUFBSTtJQUNSLElBQUksR0FBRyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUUxQixlQUFlO0lBQ2YsTUFBTSxDQUFDLElBQVk7UUFDakIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN4QixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBRSxDQUFDO1FBRTlCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ25DLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQiwwQkFBMEI7WUFDMUIsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUM7WUFFL0QseUJBQXlCO1lBQ3pCLElBQUksUUFBUSxFQUFFO2dCQUNaLE9BQU8sR0FBRyxRQUFRLENBQUM7Z0JBQ25CLGNBQWM7Z0JBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ3hCLFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2lCQUMzQjthQUNGO1lBQ0Qsa0RBQWtEO2lCQUM3QztnQkFDSCxNQUFNLE9BQU8sR0FBRyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbkMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQy9CLE9BQU8sR0FBRyxPQUFPLENBQUM7Z0JBQ2xCLGFBQWE7Z0JBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ3hCLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2lCQUMxQjthQUNGO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsbUJBQW1CO0lBQ25CLFVBQVUsQ0FBQyxNQUFjO1FBQ3ZCLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDO1lBQUUsT0FBTyxLQUFLLENBQUM7UUFDdEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN4QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN0QyxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQztZQUNwQixxQkFBcUI7WUFDckIsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJO2dCQUNyQyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO29CQUN0QixRQUFRLEdBQUcsSUFBSSxDQUFDO2lCQUNqQjtZQUNILENBQUMsQ0FBQyxDQUFDO1lBRUgsb0NBQW9DO1lBQ3BDLElBQUksUUFBUSxFQUFFO2dCQUNaLE9BQU8sR0FBRyxRQUFRLENBQUM7YUFDcEI7WUFDRCxzQkFBc0I7aUJBQ2pCO2dCQUNILE9BQU8sS0FBSyxDQUFDO2FBQ2Q7U0FDRjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELGlCQUFpQjtJQUNqQixNQUFNLENBQUMsSUFBWTtRQUNqQixJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQztZQUFFLE9BQU8sS0FBSyxDQUFDO1FBRXBDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDeEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDcEMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QiwwQkFBMEI7WUFDMUIsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUM7WUFFL0Qsb0NBQW9DO1lBQ3BDLElBQUksUUFBUSxFQUFFO2dCQUNaLE9BQU8sR0FBRyxRQUFRLENBQUM7Z0JBQ25CLHlCQUF5QjtnQkFDekIsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ3pCLE9BQU8sT0FBTyxDQUFDLFNBQVMsQ0FBQztpQkFDMUI7YUFDRjtZQUNELHNCQUFzQjtpQkFDakI7Z0JBQ0gsT0FBTyxLQUFLLENBQUM7YUFDZDtTQUNGO0lBQ0gsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy/oioLngrnnsbtcbmNsYXNzIFRyaWVOb2RlIHtcbiAgLy8gbnVsbCDlgLwg5Li6IHJvb3Qg6IqC54K5XG4gIGNoYXI6IHN0cmluZyB8IG51bGw7XG4gIGNoaWxkcmVuOiBUcmllTm9kZVtdID0gW107XG4gIGlzRW5kTm9kZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKGNoYXI6IHN0cmluZyB8IG51bGwpIHtcbiAgICB0aGlzLmNoYXIgPSBjaGFyO1xuICB9XG59XG5cbmNsYXNzIFRyaWUge1xuICByb290ID0gbmV3IFRyaWVOb2RlKG51bGwpO1xuXG4gIC8vIOaPkuWFpeS4gOS4quWNleivjeWIsHRyaWXmoJFcbiAgaW5zZXJ0KHdvcmQ6IHN0cmluZykge1xuICAgIGxldCBjdXJOb2RlID0gdGhpcy5yb290O1xuICAgIGNvbnN0IGFyciA9IHdvcmQubWF0Y2goLy4vZykhO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNoYXIgPSBhcnJbaV07XG4gICAgICAvLyDmn6XnnIvlvZPliY1ub2Rl55qE5a2Q6IqC54K5IOaYr+WQpuS4jmNoYXIg55u4562JXG4gICAgICBjb25zdCBmaW5kTm9kZSA9IGN1ck5vZGUuY2hpbGRyZW4uZmluZCgodikgPT4gdi5jaGFyID09PSBjaGFyKTtcblxuICAgICAgLy8gMS7nm7jnrYnvvJogY3VyTm9kZeaMh+WQkSDmib7liLDnmoTlrZDoioLngrlcbiAgICAgIGlmIChmaW5kTm9kZSkge1xuICAgICAgICBjdXJOb2RlID0gZmluZE5vZGU7XG4gICAgICAgIC8vIHdvcmQgZW5kIOiKgueCuVxuICAgICAgICBpZiAoaSA9PT0gYXJyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICBmaW5kTm9kZS5pc0VuZE5vZGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyAyLuS4jeebuOetie+8jCDlnKhjdXJOb2RlIOS4i+aWsOWinuS4gOS4quiKgueCueWAvOS4umNoYXIg77yM5bm25LiUIGN1ck5vZGXmjIflkJHmlrDlop7oioLngrlcbiAgICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBuZXdOb2RlID0gbmV3IFRyaWVOb2RlKGNoYXIpO1xuICAgICAgICBjdXJOb2RlLmNoaWxkcmVuLnB1c2gobmV3Tm9kZSk7XG4gICAgICAgIGN1ck5vZGUgPSBuZXdOb2RlO1xuICAgICAgICAvL3dvcmQgZW5kIOiKgueCuVxuICAgICAgICBpZiAoaSA9PT0gYXJyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICBuZXdOb2RlLmlzRW5kTm9kZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyDliKTmlq3or6XliY3nvIDmmK/lkKblrZjlnKjkuI50cmll5qCR5LitXG4gIHN0YXJ0c1dpdGgocHJlZml4OiBzdHJpbmcpIHtcbiAgICBpZiAocHJlZml4Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIGZhbHNlO1xuICAgIGxldCBjdXJOb2RlID0gdGhpcy5yb290O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJlZml4Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjaGFyID0gcHJlZml4LmNoYXJBdChpKTtcbiAgICAgIGxldCBmaW5kTm9kZSA9IG51bGw7XG4gICAgICAvL+afpeeci+W9k+WJjeiKgueCueS4iyDmmK/lkKbog73mib7liLDlrZfnrKZjaGFyXG4gICAgICBjdXJOb2RlLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgaWYgKGl0ZW0uY2hhciA9PT0gY2hhcikge1xuICAgICAgICAgIGZpbmROb2RlID0gaXRlbTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIDEuIOaJvuWIsOWtl+espmNoYXIg5b2T5YmNY3VyTm9kZSDmjIflkJEgZmluZE5vZGVcbiAgICAgIGlmIChmaW5kTm9kZSkge1xuICAgICAgICBjdXJOb2RlID0gZmluZE5vZGU7XG4gICAgICB9XG4gICAgICAvLyAyLiDmsqHmib7liLAg5YiZ6K+l5Y2V6K+N5LiN5ZyodHJpZeagkeS4rVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyDliKTmlq3or6XljZXor43mmK/lkKblnKh0cmll5qCR5LitXG4gIHNlYXJjaCh3b3JkOiBzdHJpbmcpIHtcbiAgICBpZiAod29yZC5sZW5ndGggPT09IDApIHJldHVybiBmYWxzZTtcblxuICAgIGxldCBjdXJOb2RlID0gdGhpcy5yb290O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd29yZC5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY2hhciA9IHdvcmQuY2hhckF0KGkpO1xuICAgICAgLy8g5p+l55yL5b2T5YmNbm9kZeeahOWtkOiKgueCuSDmmK/lkKbkuI5jaGFyIOebuOetiVxuICAgICAgY29uc3QgZmluZE5vZGUgPSBjdXJOb2RlLmNoaWxkcmVuLmZpbmQoKHYpID0+IHYuY2hhciA9PT0gY2hhcik7XG5cbiAgICAgIC8vIDEuIOaJvuWIsOWtl+espmNoYXIg5b2T5YmNY3VyTm9kZSDmjIflkJEgZmluZE5vZGVcbiAgICAgIGlmIChmaW5kTm9kZSkge1xuICAgICAgICBjdXJOb2RlID0gZmluZE5vZGU7XG4gICAgICAgIC8vd29yZCBlbmQg6IqC54K56aKd5aSW5Yik5patICYmIOe7k+adn+adoeS7tlxuICAgICAgICBpZiAoaSA9PT0gd29yZC5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgcmV0dXJuIGN1ck5vZGUuaXNFbmROb2RlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyAyLiDmsqHmib7liLAg5YiZ6K+l5Y2V6K+N5LiN5ZyodHJpZeagkeS4rVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHt9O1xuIl19