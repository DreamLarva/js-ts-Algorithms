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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoi55Sf5oiQIG1hcmtkb3duLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyLnlJ/miJAgbWFya2Rvd24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwyQkFBeUM7QUFDekMsZ0RBQXdCO0FBQ3hCLGtFQUF5QztBQUV6QyxDQUFDLEtBQUs7SUFDRixJQUFJLElBQUksR0FBRyxnREFBZ0QsQ0FBQztJQUM1RCxJQUFJLElBQUksU0FBUyxDQUFDO0lBQ2xCLElBQUksSUFBSSxlQUFlLHNCQUFXLENBQUMsZUFBZSxDQUFDLFVBQVUsTUFBTSxDQUFDO0lBQ3BFLElBQUksSUFBSSxZQUFZLHNCQUFXLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7SUFFbkUsSUFBSSxJQUFJLG1GQUFtRixDQUFDO0lBRTVGLElBQUksSUFBSSxjQUFjLENBQUM7SUFDdkIsTUFBTSxZQUFZLEdBQUcsQ0FBQyxNQUFNLGFBQVMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDdkQsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ1gsTUFBTSxFQUFDLElBQUksRUFBRSxHQUFHLEVBQUMsR0FBRyxjQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sR0FBRyxLQUFLLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0MsQ0FBQyxDQUFDO1NBQ0QsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ1gsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQyxDQUFDLENBQUM7SUFDUCxLQUFLLE1BQU0sSUFBSSxJQUFJLFlBQVksRUFBRTtRQUM3QixNQUFNLEVBQUMsSUFBSSxFQUFDLEdBQUcsY0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxJQUFJLElBQUksSUFBSSxJQUFJLHlFQUF5RSxJQUFJLE9BQU8sQ0FBQztLQUd4RztJQUdELE1BQU0sYUFBUyxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ2pDLENBQUMsQ0FBQyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3Byb21pc2VzIGFzIGZzUHJvbWlzZX0gZnJvbSBcImZzXCI7XHJcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCBwYWNrYWdlSnNvbiBmcm9tICcuL3BhY2thZ2UuanNvbic7XHJcblxyXG4oYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IHRleHQgPSBgIyBUeXBlc2NyaXB0IOS4jiBKYXZhc2NyaXB0IOmHjeaehOaKgOW3pyDnrpfms5Ug5Lul5Y+KIOaVsOaNrue7k+aehCDnu4PkuaBcXG5gO1xyXG4gICAgdGV4dCArPSBg546v5aKDOiAgXFxuYDtcclxuICAgIHRleHQgKz0gYHR5cGVzY3JpcHQ6ICR7cGFja2FnZUpzb24uZGV2RGVwZW5kZW5jaWVzLnR5cGVzY3JpcHR9ICBcXG5gO1xyXG4gICAgdGV4dCArPSBgdHMtbm9kZTogJHtwYWNrYWdlSnNvbi5kZXZEZXBlbmRlbmNpZXNbXCJ0cy1ub2RlXCJdfSAgXFxuXFxuYDtcclxuXHJcbiAgICB0ZXh0ICs9IGBUeXBlc2NyaXB0IOivreazleWSjOexu+WeiyDlrabkuaAgOiBb5LuT5bqT5Zyw5Z2AXShodHRwczovL2dpdGh1Yi5jb20vRHJlYW1MYXJ2YS9sZWFybi10eXBlc2NyaXB0KSBcXG5cXG5gO1xyXG5cclxuICAgIHRleHQgKz0gYCMjIGxlZWNvZGVcXG5gO1xyXG4gICAgY29uc3QgbGVldGNvZGVfZGlyID0gKGF3YWl0IGZzUHJvbWlzZS5yZWFkZGlyKFwiLi9sZWV0Y29kZVwiKSlcclxuICAgICAgICAuZmlsdGVyKGZpbGUgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB7bmFtZSwgZXh0fSA9IHBhdGgucGFyc2UoZmlsZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBleHQgPT09IFwiLnRzXCIgJiYgIS9cXC5kJC8udGVzdChuYW1lKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBOdW1iZXIoYS5zcGxpdChcIi5cIilbMF0pIC0gTnVtYmVyKGIuc3BsaXQoXCIuXCIpWzBdKTtcclxuICAgICAgICB9KTtcclxuICAgIGZvciAoY29uc3QgZmlsZSBvZiBsZWV0Y29kZV9kaXIpIHtcclxuICAgICAgICBjb25zdCB7bmFtZX0gPSBwYXRoLnBhcnNlKGZpbGUpO1xyXG4gICAgICAgIHRleHQgKz0gYFske25hbWV9XShodHRwczovL2dpdGh1Yi5jb20vRHJlYW1MYXJ2YS9qcy10cy1BbGdvcml0aG1zL2Jsb2IvbWFzdGVyL2xlZXRjb2RlLyR7ZmlsZX0pICBcXG5gO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGF3YWl0IGZzUHJvbWlzZS53cml0ZUZpbGUoXCIuL1JFQURNRS5tZFwiLCB0ZXh0KTtcclxuICAgIGNvbnNvbGUubG9nKFwiUkVBRE1FLm1kIOabtOaWsOWujOavlVwiKVxyXG59KSgpO1xyXG4iXX0=