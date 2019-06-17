import {promises as fsPromise} from "fs";
import path from "path";
import packageJson from './package.json';

(async function () {
    let text = `# Typescript 与 Javascript 重构技巧 算法 以及 数据结构 练习\n`;
    text += `环境:  \n`;
    text += `typescript: ${packageJson.devDependencies.typescript}  \n`;
    text += `ts-node: ${packageJson.devDependencies["ts-node"]}  \n\n`;

    text += `Typescript 语法和类型 学习 : [仓库地址](https://github.com/DreamLarva/learn-typescript) \n\n`;
    text += `Leetcode 中文首页 : [地址](https://leetcode-cn.com/u/dreamlarva) \n\n`;


    text += `## leecode\n`;
    const leetcode_dir = (await fsPromise.readdir("./leetcode"))
        .filter(file => {
            const {name, ext} = path.parse(file);
            return ext === ".ts" && !/\.d$/.test(name);
        })
        .sort((a, b) => {
            return Number(a.split(".")[0]) - Number(b.split(".")[0]);
        });
    for (const file of leetcode_dir) {
        const {name} = path.parse(file);
        text += `[${name}](https://github.com/DreamLarva/js-ts-Algorithms/blob/master/leetcode/${file})  \n`;


    }


    await fsPromise.writeFile("./README.md", text);
    console.log("README.md 更新完毕")
})();
