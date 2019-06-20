"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const package_json_1 = __importDefault(require("./package.json"));
(async function () {
    let text = `# Typescript 与 Javascript 重构技巧 算法 以及 数据结构 练习\n`;
    text += `环境:  \n`;
    text += `typescript: ${package_json_1.default.devDependencies.typescript}  \n`;
    text += `ts-node: ${package_json_1.default.devDependencies["ts-node"]}  \n\n`;
    text += `Typescript 语法和类型 学习 : [仓库地址](https://github.com/DreamLarva/learn-typescript) \n\n`;
    text += `Leetcode 中文首页 : [地址](https://leetcode-cn.com/u/dreamlarva) \n\n`;
    text += `## leecode\n`;
    const leetcode_dir = (await fs_1.promises.readdir("./leetcode"))
        .filter(file => {
        const { name, ext } = path_1.default.parse(file);
        return ext === ".ts" && !/\.d$/.test(name);
    })
        .sort((a, b) => {
        return Number(a.split(".")[0]) - Number(b.split(".")[0]);
    });
    for (const file of leetcode_dir) {
        const { name } = path_1.default.parse(file);
        text += `[${name}](https://github.com/DreamLarva/js-ts-Algorithms/blob/master/leetcode/${file})  \n`;
    }
    await fs_1.promises.writeFile("./README.md", text);
    console.log("README.md 更新完毕");
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoi55Sf5oiQIG1hcmtkb3duLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyLnlJ/miJAgbWFya2Rvd24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwyQkFBeUM7QUFDekMsZ0RBQXdCO0FBQ3hCLGtFQUF5QztBQUV6QyxDQUFDLEtBQUs7SUFDRixJQUFJLElBQUksR0FBRyxnREFBZ0QsQ0FBQztJQUM1RCxJQUFJLElBQUksU0FBUyxDQUFDO0lBQ2xCLElBQUksSUFBSSxlQUFlLHNCQUFXLENBQUMsZUFBZSxDQUFDLFVBQVUsTUFBTSxDQUFDO0lBQ3BFLElBQUksSUFBSSxZQUFZLHNCQUFXLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7SUFFbkUsSUFBSSxJQUFJLG1GQUFtRixDQUFDO0lBQzVGLElBQUksSUFBSSxpRUFBaUUsQ0FBQztJQUcxRSxJQUFJLElBQUksY0FBYyxDQUFDO0lBQ3ZCLE1BQU0sWUFBWSxHQUFHLENBQUMsTUFBTSxhQUFTLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3ZELE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNYLE1BQU0sRUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFDLEdBQUcsY0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxPQUFPLEdBQUcsS0FBSyxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9DLENBQUMsQ0FBQztTQUNELElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNYLE9BQU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdELENBQUMsQ0FBQyxDQUFDO0lBQ1AsS0FBSyxNQUFNLElBQUksSUFBSSxZQUFZLEVBQUU7UUFDN0IsTUFBTSxFQUFDLElBQUksRUFBQyxHQUFHLGNBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsSUFBSSxJQUFJLElBQUksSUFBSSx5RUFBeUUsSUFBSSxPQUFPLENBQUM7S0FHeEc7SUFHRCxNQUFNLGFBQVMsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtBQUNqQyxDQUFDLENBQUMsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtwcm9taXNlcyBhcyBmc1Byb21pc2V9IGZyb20gXCJmc1wiO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgcGFja2FnZUpzb24gZnJvbSAnLi9wYWNrYWdlLmpzb24nO1xyXG5cclxuKGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCB0ZXh0ID0gYCMgVHlwZXNjcmlwdCDkuI4gSmF2YXNjcmlwdCDph43mnoTmioDlt6cg566X5rOVIOS7peWPiiDmlbDmja7nu5PmnoQg57uD5LmgXFxuYDtcclxuICAgIHRleHQgKz0gYOeOr+WigzogIFxcbmA7XHJcbiAgICB0ZXh0ICs9IGB0eXBlc2NyaXB0OiAke3BhY2thZ2VKc29uLmRldkRlcGVuZGVuY2llcy50eXBlc2NyaXB0fSAgXFxuYDtcclxuICAgIHRleHQgKz0gYHRzLW5vZGU6ICR7cGFja2FnZUpzb24uZGV2RGVwZW5kZW5jaWVzW1widHMtbm9kZVwiXX0gIFxcblxcbmA7XHJcblxyXG4gICAgdGV4dCArPSBgVHlwZXNjcmlwdCDor63ms5Xlkoznsbvlnosg5a2m5LmgIDogW+S7k+W6k+WcsOWdgF0oaHR0cHM6Ly9naXRodWIuY29tL0RyZWFtTGFydmEvbGVhcm4tdHlwZXNjcmlwdCkgXFxuXFxuYDtcclxuICAgIHRleHQgKz0gYExlZXRjb2RlIOS4reaWh+mmlumhtSA6IFvlnLDlnYBdKGh0dHBzOi8vbGVldGNvZGUtY24uY29tL3UvZHJlYW1sYXJ2YSkgXFxuXFxuYDtcclxuXHJcblxyXG4gICAgdGV4dCArPSBgIyMgbGVlY29kZVxcbmA7XHJcbiAgICBjb25zdCBsZWV0Y29kZV9kaXIgPSAoYXdhaXQgZnNQcm9taXNlLnJlYWRkaXIoXCIuL2xlZXRjb2RlXCIpKVxyXG4gICAgICAgIC5maWx0ZXIoZmlsZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHtuYW1lLCBleHR9ID0gcGF0aC5wYXJzZShmaWxlKTtcclxuICAgICAgICAgICAgcmV0dXJuIGV4dCA9PT0gXCIudHNcIiAmJiAhL1xcLmQkLy50ZXN0KG5hbWUpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIE51bWJlcihhLnNwbGl0KFwiLlwiKVswXSkgLSBOdW1iZXIoYi5zcGxpdChcIi5cIilbMF0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgZm9yIChjb25zdCBmaWxlIG9mIGxlZXRjb2RlX2Rpcikge1xyXG4gICAgICAgIGNvbnN0IHtuYW1lfSA9IHBhdGgucGFyc2UoZmlsZSk7XHJcbiAgICAgICAgdGV4dCArPSBgWyR7bmFtZX1dKGh0dHBzOi8vZ2l0aHViLmNvbS9EcmVhbUxhcnZhL2pzLXRzLUFsZ29yaXRobXMvYmxvYi9tYXN0ZXIvbGVldGNvZGUvJHtmaWxlfSkgIFxcbmA7XHJcblxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgYXdhaXQgZnNQcm9taXNlLndyaXRlRmlsZShcIi4vUkVBRE1FLm1kXCIsIHRleHQpO1xyXG4gICAgY29uc29sZS5sb2coXCJSRUFETUUubWQg5pu05paw5a6M5q+VXCIpXHJcbn0pKCk7XHJcbiJdfQ==