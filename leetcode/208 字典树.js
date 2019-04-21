// 208. Implement Trie (Prefix Tree)
// leetCode 第208题

//节点类
const TrieNode = function (char) {
    this.char = char;
    this.children = [];
    //是否为单词结束节点
    this.isEndNode = false;
};


const Trie = function () {
    //根节点为空
    this.root = new TrieNode(null);
};

//插入一个单词到trie树
Trie.prototype.insert = function (word) {
    if (typeof word != "string") return;

    let curNode = this.root;
    const arr = word.match(/./g);

    for (let i = 0; i < arr.length; i++) {
        const char = arr[i];
        let findNode = null;
        //查看当前node的子节点 是否与char 相等
        curNode.children.forEach(function (item) {
            if (item.char === char) {
                findNode = item;
            }
        });

        //1.相等： curNode指向 找到的子节点
        if (findNode) {
            curNode = findNode;
            //word end 节点
            if (i === arr.length - 1) {
                findNode.isEndNode = true;
            }
        }
        //2.不相等， 在curNode 下新增一个节点值为char ，并且 curNode指向新增节点
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
};

//判断该前缀是否存在与trie树中
Trie.prototype.startsWith = function (prefix) {
    if (typeof prefix != "string" || prefix.length === 0) return false;
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

        //1. 找到字符char 当前curNode 指向 findNode
        if (findNode) {
            curNode = findNode;
        }
        //2. 没找到 则该单词不在trie树中
        else {
            return false;
        }
    }
    return true;
};


// 判断该单词是否在trie树中
Trie.prototype.search = function (word) {
    if (typeof word != "string" || word.length === 0) {
        return false;
    }

    let curNode = this.root;
    for (let i = 0; i < word.length; i++) {
        const char = word.charAt(i);
        let findNode = null;
        //查看当前节点下 是否能找到字符char
        curNode.children.forEach(function (item) {
            if (item.char === char) {
                findNode = item;
            }
        });

        //1. 找到字符char 当前curNode 指向 findNode
        if (findNode) {
            curNode = findNode;
            //word end 节点额外判断 && 结束条件
            if (i === word.length - 1) {
                return curNode.isEndNode;
            }
        }
        //2. 没找到 则该单词不在trie树中
        else {
            return false;
        }

    }

};
