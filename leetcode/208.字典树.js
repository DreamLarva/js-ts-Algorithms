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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjA4LuWtl+WFuOagkS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjA4LuWtl+WFuOagkS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBaUJJOztBQUVKLEtBQUs7QUFDTCxNQUFNLFFBQVE7SUFDWixtQkFBbUI7SUFDbkIsSUFBSSxDQUFnQjtJQUNwQixRQUFRLEdBQWUsRUFBRSxDQUFDO0lBQzFCLFNBQVMsR0FBWSxLQUFLLENBQUM7SUFFM0IsWUFBWSxJQUFtQjtRQUM3QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNuQixDQUFDO0NBQ0Y7QUFFRCxNQUFNLElBQUk7SUFDUixJQUFJLEdBQUcsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFMUIsZUFBZTtJQUNmLE1BQU0sQ0FBQyxJQUFZO1FBQ2pCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDeEIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUUsQ0FBQztRQUU5QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNuQyxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEIsMEJBQTBCO1lBQzFCLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDO1lBRS9ELHlCQUF5QjtZQUN6QixJQUFJLFFBQVEsRUFBRTtnQkFDWixPQUFPLEdBQUcsUUFBUSxDQUFDO2dCQUNuQixjQUFjO2dCQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUN4QixRQUFRLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztpQkFDM0I7YUFDRjtZQUNELGtEQUFrRDtpQkFDN0M7Z0JBQ0gsTUFBTSxPQUFPLEdBQUcsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ25DLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMvQixPQUFPLEdBQUcsT0FBTyxDQUFDO2dCQUNsQixhQUFhO2dCQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUN4QixPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztpQkFDMUI7YUFDRjtTQUNGO0lBQ0gsQ0FBQztJQUVELG1CQUFtQjtJQUNuQixVQUFVLENBQUMsTUFBYztRQUN2QixJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQztZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQ3RDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDeEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdEMsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDcEIscUJBQXFCO1lBQ3JCLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSTtnQkFDckMsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRTtvQkFDdEIsUUFBUSxHQUFHLElBQUksQ0FBQztpQkFDakI7WUFDSCxDQUFDLENBQUMsQ0FBQztZQUVILG9DQUFvQztZQUNwQyxJQUFJLFFBQVEsRUFBRTtnQkFDWixPQUFPLEdBQUcsUUFBUSxDQUFDO2FBQ3BCO1lBQ0Qsc0JBQXNCO2lCQUNqQjtnQkFDSCxPQUFPLEtBQUssQ0FBQzthQUNkO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxpQkFBaUI7SUFDakIsTUFBTSxDQUFDLElBQVk7UUFDakIsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUM7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUVwQyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3BDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsMEJBQTBCO1lBQzFCLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDO1lBRS9ELG9DQUFvQztZQUNwQyxJQUFJLFFBQVEsRUFBRTtnQkFDWixPQUFPLEdBQUcsUUFBUSxDQUFDO2dCQUNuQix5QkFBeUI7Z0JBQ3pCLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUN6QixPQUFPLE9BQU8sQ0FBQyxTQUFTLENBQUM7aUJBQzFCO2FBQ0Y7WUFDRCxzQkFBc0I7aUJBQ2pCO2dCQUNILE9BQU8sS0FBSyxDQUFDO2FBQ2Q7U0FDRjtJQUNILENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7lrp7njrDkuIDkuKogVHJpZSAo5YmN57yA5qCRKe+8jOWMheWQqyBpbnNlcnQsIHNlYXJjaCwg5ZKMIHN0YXJ0c1dpdGgg6L+Z5LiJ5Liq5pON5L2c44CCXG5cbuekuuS+izpcblxuVHJpZSB0cmllID0gbmV3IFRyaWUoKTtcblxudHJpZS5pbnNlcnQoXCJhcHBsZVwiKTtcbnRyaWUuc2VhcmNoKFwiYXBwbGVcIik7ICAgLy8g6L+U5ZueIHRydWVcbnRyaWUuc2VhcmNoKFwiYXBwXCIpOyAgICAgLy8g6L+U5ZueIGZhbHNlXG50cmllLnN0YXJ0c1dpdGgoXCJhcHBcIik7IC8vIOi/lOWbniB0cnVlXG50cmllLmluc2VydChcImFwcFwiKTtcbnRyaWUuc2VhcmNoKFwiYXBwXCIpOyAgICAgLy8g6L+U5ZueIHRydWVcbuivtOaYjjpcblxu5L2g5Y+v5Lul5YGH6K6+5omA5pyJ55qE6L6T5YWl6YO95piv55Sx5bCP5YaZ5a2X5q+NIGEteiDmnoTmiJDnmoTjgIJcbuS/neivgeaJgOaciei+k+WFpeWdh+S4uumdnuepuuWtl+espuS4suOAglxuKiAqL1xuXG4vL+iKgueCueexu1xuY2xhc3MgVHJpZU5vZGUge1xuICAvLyBudWxsIOWAvCDkuLogcm9vdCDoioLngrlcbiAgY2hhcjogc3RyaW5nIHwgbnVsbDtcbiAgY2hpbGRyZW46IFRyaWVOb2RlW10gPSBbXTtcbiAgaXNFbmROb2RlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoY2hhcjogc3RyaW5nIHwgbnVsbCkge1xuICAgIHRoaXMuY2hhciA9IGNoYXI7XG4gIH1cbn1cblxuY2xhc3MgVHJpZSB7XG4gIHJvb3QgPSBuZXcgVHJpZU5vZGUobnVsbCk7XG5cbiAgLy8g5o+S5YWl5LiA5Liq5Y2V6K+N5YiwdHJpZeagkVxuICBpbnNlcnQod29yZDogc3RyaW5nKSB7XG4gICAgbGV0IGN1ck5vZGUgPSB0aGlzLnJvb3Q7XG4gICAgY29uc3QgYXJyID0gd29yZC5tYXRjaCgvLi9nKSE7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY2hhciA9IGFycltpXTtcbiAgICAgIC8vIOafpeeci+W9k+WJjW5vZGXnmoTlrZDoioLngrkg5piv5ZCm5LiOY2hhciDnm7jnrYlcbiAgICAgIGNvbnN0IGZpbmROb2RlID0gY3VyTm9kZS5jaGlsZHJlbi5maW5kKCh2KSA9PiB2LmNoYXIgPT09IGNoYXIpO1xuXG4gICAgICAvLyAxLuebuOetie+8miBjdXJOb2Rl5oyH5ZCRIOaJvuWIsOeahOWtkOiKgueCuVxuICAgICAgaWYgKGZpbmROb2RlKSB7XG4gICAgICAgIGN1ck5vZGUgPSBmaW5kTm9kZTtcbiAgICAgICAgLy8gd29yZCBlbmQg6IqC54K5XG4gICAgICAgIGlmIChpID09PSBhcnIubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIGZpbmROb2RlLmlzRW5kTm9kZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIDIu5LiN55u4562J77yMIOWcqGN1ck5vZGUg5LiL5paw5aKe5LiA5Liq6IqC54K55YC85Li6Y2hhciDvvIzlubbkuJQgY3VyTm9kZeaMh+WQkeaWsOWinuiKgueCuVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IG5ld05vZGUgPSBuZXcgVHJpZU5vZGUoY2hhcik7XG4gICAgICAgIGN1ck5vZGUuY2hpbGRyZW4ucHVzaChuZXdOb2RlKTtcbiAgICAgICAgY3VyTm9kZSA9IG5ld05vZGU7XG4gICAgICAgIC8vd29yZCBlbmQg6IqC54K5XG4gICAgICAgIGlmIChpID09PSBhcnIubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIG5ld05vZGUuaXNFbmROb2RlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIOWIpOaWreivpeWJjee8gOaYr+WQpuWtmOWcqOS4jnRyaWXmoJHkuK1cbiAgc3RhcnRzV2l0aChwcmVmaXg6IHN0cmluZykge1xuICAgIGlmIChwcmVmaXgubGVuZ3RoID09PSAwKSByZXR1cm4gZmFsc2U7XG4gICAgbGV0IGN1ck5vZGUgPSB0aGlzLnJvb3Q7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmVmaXgubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNoYXIgPSBwcmVmaXguY2hhckF0KGkpO1xuICAgICAgbGV0IGZpbmROb2RlID0gbnVsbDtcbiAgICAgIC8v5p+l55yL5b2T5YmN6IqC54K55LiLIOaYr+WQpuiDveaJvuWIsOWtl+espmNoYXJcbiAgICAgIGN1ck5vZGUuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBpZiAoaXRlbS5jaGFyID09PSBjaGFyKSB7XG4gICAgICAgICAgZmluZE5vZGUgPSBpdGVtO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gMS4g5om+5Yiw5a2X56ymY2hhciDlvZPliY1jdXJOb2RlIOaMh+WQkSBmaW5kTm9kZVxuICAgICAgaWYgKGZpbmROb2RlKSB7XG4gICAgICAgIGN1ck5vZGUgPSBmaW5kTm9kZTtcbiAgICAgIH1cbiAgICAgIC8vIDIuIOayoeaJvuWIsCDliJnor6XljZXor43kuI3lnKh0cmll5qCR5LitXG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIOWIpOaWreivpeWNleivjeaYr+WQpuWcqHRyaWXmoJHkuK1cbiAgc2VhcmNoKHdvcmQ6IHN0cmluZykge1xuICAgIGlmICh3b3JkLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgbGV0IGN1ck5vZGUgPSB0aGlzLnJvb3Q7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3b3JkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjaGFyID0gd29yZC5jaGFyQXQoaSk7XG4gICAgICAvLyDmn6XnnIvlvZPliY1ub2Rl55qE5a2Q6IqC54K5IOaYr+WQpuS4jmNoYXIg55u4562JXG4gICAgICBjb25zdCBmaW5kTm9kZSA9IGN1ck5vZGUuY2hpbGRyZW4uZmluZCgodikgPT4gdi5jaGFyID09PSBjaGFyKTtcblxuICAgICAgLy8gMS4g5om+5Yiw5a2X56ymY2hhciDlvZPliY1jdXJOb2RlIOaMh+WQkSBmaW5kTm9kZVxuICAgICAgaWYgKGZpbmROb2RlKSB7XG4gICAgICAgIGN1ck5vZGUgPSBmaW5kTm9kZTtcbiAgICAgICAgLy93b3JkIGVuZCDoioLngrnpop3lpJbliKTmlq0gJiYg57uT5p2f5p2h5Lu2XG4gICAgICAgIGlmIChpID09PSB3b3JkLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICByZXR1cm4gY3VyTm9kZS5pc0VuZE5vZGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIDIuIOayoeaJvuWIsCDliJnor6XljZXor43kuI3lnKh0cmll5qCR5LitXG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQge307XG4iXX0=