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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoi5a2X5YW45qCRLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyLmlbDmja7nu5PmnoQv5a2X5YW45qCRLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsS0FBSztBQUNMLE1BQU0sUUFBUTtJQU1aLFlBQVksSUFBbUI7UUFIL0IsYUFBUSxHQUFlLEVBQUUsQ0FBQztRQUMxQixjQUFTLEdBQVksS0FBSyxDQUFDO1FBR3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7Q0FDRjtBQUVELE1BQU0sSUFBSTtJQUFWO1FBQ0UsU0FBSSxHQUFHLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBbUY1QixDQUFDO0lBakZDLGVBQWU7SUFDZixNQUFNLENBQUMsSUFBWTtRQUNqQixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3hCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFFLENBQUM7UUFFOUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbkMsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLDBCQUEwQjtZQUMxQixNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQztZQUUvRCx5QkFBeUI7WUFDekIsSUFBSSxRQUFRLEVBQUU7Z0JBQ1osT0FBTyxHQUFHLFFBQVEsQ0FBQztnQkFDbkIsY0FBYztnQkFDZCxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDeEIsUUFBUSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7aUJBQzNCO2FBQ0Y7WUFDRCxrREFBa0Q7aUJBQzdDO2dCQUNILE1BQU0sT0FBTyxHQUFHLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNuQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDL0IsT0FBTyxHQUFHLE9BQU8sQ0FBQztnQkFDbEIsYUFBYTtnQkFDYixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDeEIsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7aUJBQzFCO2FBQ0Y7U0FDRjtJQUNILENBQUM7SUFFRCxtQkFBbUI7SUFDbkIsVUFBVSxDQUFDLE1BQWM7UUFDdkIsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUM7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUN0QyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3RDLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLHFCQUFxQjtZQUNyQixPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUk7Z0JBQ3JDLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUU7b0JBQ3RCLFFBQVEsR0FBRyxJQUFJLENBQUM7aUJBQ2pCO1lBQ0gsQ0FBQyxDQUFDLENBQUM7WUFFSCxvQ0FBb0M7WUFDcEMsSUFBSSxRQUFRLEVBQUU7Z0JBQ1osT0FBTyxHQUFHLFFBQVEsQ0FBQzthQUNwQjtZQUNELHNCQUFzQjtpQkFDakI7Z0JBQ0gsT0FBTyxLQUFLLENBQUM7YUFDZDtTQUNGO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsaUJBQWlCO0lBQ2pCLE1BQU0sQ0FBQyxJQUFZO1FBQ2pCLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDO1lBQUUsT0FBTyxLQUFLLENBQUM7UUFFcEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN4QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNwQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVCLDBCQUEwQjtZQUMxQixNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQztZQUUvRCxvQ0FBb0M7WUFDcEMsSUFBSSxRQUFRLEVBQUU7Z0JBQ1osT0FBTyxHQUFHLFFBQVEsQ0FBQztnQkFDbkIseUJBQXlCO2dCQUN6QixJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDekIsT0FBTyxPQUFPLENBQUMsU0FBUyxDQUFDO2lCQUMxQjthQUNGO1lBQ0Qsc0JBQXNCO2lCQUNqQjtnQkFDSCxPQUFPLEtBQUssQ0FBQzthQUNkO1NBQ0Y7SUFDSCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvL+iKgueCueexu1xuY2xhc3MgVHJpZU5vZGUge1xuICAvLyBudWxsIOWAvCDkuLogcm9vdCDoioLngrlcbiAgY2hhcjogc3RyaW5nIHwgbnVsbDtcbiAgY2hpbGRyZW46IFRyaWVOb2RlW10gPSBbXTtcbiAgaXNFbmROb2RlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoY2hhcjogc3RyaW5nIHwgbnVsbCkge1xuICAgIHRoaXMuY2hhciA9IGNoYXI7XG4gIH1cbn1cblxuY2xhc3MgVHJpZSB7XG4gIHJvb3QgPSBuZXcgVHJpZU5vZGUobnVsbCk7XG5cbiAgLy8g5o+S5YWl5LiA5Liq5Y2V6K+N5YiwdHJpZeagkVxuICBpbnNlcnQod29yZDogc3RyaW5nKSB7XG4gICAgbGV0IGN1ck5vZGUgPSB0aGlzLnJvb3Q7XG4gICAgY29uc3QgYXJyID0gd29yZC5tYXRjaCgvLi9nKSE7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY2hhciA9IGFycltpXTtcbiAgICAgIC8vIOafpeeci+W9k+WJjW5vZGXnmoTlrZDoioLngrkg5piv5ZCm5LiOY2hhciDnm7jnrYlcbiAgICAgIGNvbnN0IGZpbmROb2RlID0gY3VyTm9kZS5jaGlsZHJlbi5maW5kKCh2KSA9PiB2LmNoYXIgPT09IGNoYXIpO1xuXG4gICAgICAvLyAxLuebuOetie+8miBjdXJOb2Rl5oyH5ZCRIOaJvuWIsOeahOWtkOiKgueCuVxuICAgICAgaWYgKGZpbmROb2RlKSB7XG4gICAgICAgIGN1ck5vZGUgPSBmaW5kTm9kZTtcbiAgICAgICAgLy8gd29yZCBlbmQg6IqC54K5XG4gICAgICAgIGlmIChpID09PSBhcnIubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIGZpbmROb2RlLmlzRW5kTm9kZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIDIu5LiN55u4562J77yMIOWcqGN1ck5vZGUg5LiL5paw5aKe5LiA5Liq6IqC54K55YC85Li6Y2hhciDvvIzlubbkuJQgY3VyTm9kZeaMh+WQkeaWsOWinuiKgueCuVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IG5ld05vZGUgPSBuZXcgVHJpZU5vZGUoY2hhcik7XG4gICAgICAgIGN1ck5vZGUuY2hpbGRyZW4ucHVzaChuZXdOb2RlKTtcbiAgICAgICAgY3VyTm9kZSA9IG5ld05vZGU7XG4gICAgICAgIC8vd29yZCBlbmQg6IqC54K5XG4gICAgICAgIGlmIChpID09PSBhcnIubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIG5ld05vZGUuaXNFbmROb2RlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIOWIpOaWreivpeWJjee8gOaYr+WQpuWtmOWcqOS4jnRyaWXmoJHkuK1cbiAgc3RhcnRzV2l0aChwcmVmaXg6IHN0cmluZykge1xuICAgIGlmIChwcmVmaXgubGVuZ3RoID09PSAwKSByZXR1cm4gZmFsc2U7XG4gICAgbGV0IGN1ck5vZGUgPSB0aGlzLnJvb3Q7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmVmaXgubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNoYXIgPSBwcmVmaXguY2hhckF0KGkpO1xuICAgICAgbGV0IGZpbmROb2RlID0gbnVsbDtcbiAgICAgIC8v5p+l55yL5b2T5YmN6IqC54K55LiLIOaYr+WQpuiDveaJvuWIsOWtl+espmNoYXJcbiAgICAgIGN1ck5vZGUuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBpZiAoaXRlbS5jaGFyID09PSBjaGFyKSB7XG4gICAgICAgICAgZmluZE5vZGUgPSBpdGVtO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gMS4g5om+5Yiw5a2X56ymY2hhciDlvZPliY1jdXJOb2RlIOaMh+WQkSBmaW5kTm9kZVxuICAgICAgaWYgKGZpbmROb2RlKSB7XG4gICAgICAgIGN1ck5vZGUgPSBmaW5kTm9kZTtcbiAgICAgIH1cbiAgICAgIC8vIDIuIOayoeaJvuWIsCDliJnor6XljZXor43kuI3lnKh0cmll5qCR5LitXG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIOWIpOaWreivpeWNleivjeaYr+WQpuWcqHRyaWXmoJHkuK1cbiAgc2VhcmNoKHdvcmQ6IHN0cmluZykge1xuICAgIGlmICh3b3JkLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgbGV0IGN1ck5vZGUgPSB0aGlzLnJvb3Q7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3b3JkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjaGFyID0gd29yZC5jaGFyQXQoaSk7XG4gICAgICAvLyDmn6XnnIvlvZPliY1ub2Rl55qE5a2Q6IqC54K5IOaYr+WQpuS4jmNoYXIg55u4562JXG4gICAgICBjb25zdCBmaW5kTm9kZSA9IGN1ck5vZGUuY2hpbGRyZW4uZmluZCgodikgPT4gdi5jaGFyID09PSBjaGFyKTtcblxuICAgICAgLy8gMS4g5om+5Yiw5a2X56ymY2hhciDlvZPliY1jdXJOb2RlIOaMh+WQkSBmaW5kTm9kZVxuICAgICAgaWYgKGZpbmROb2RlKSB7XG4gICAgICAgIGN1ck5vZGUgPSBmaW5kTm9kZTtcbiAgICAgICAgLy93b3JkIGVuZCDoioLngrnpop3lpJbliKTmlq0gJiYg57uT5p2f5p2h5Lu2XG4gICAgICAgIGlmIChpID09PSB3b3JkLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICByZXR1cm4gY3VyTm9kZS5pc0VuZE5vZGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIDIuIOayoeaJvuWIsCDliJnor6XljZXor43kuI3lnKh0cmll5qCR5LitXG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQge307XG4iXX0=