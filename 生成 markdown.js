"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const package_json_1 = __importDefault(require("./package.json"));
const axios_1 = __importDefault(require("axios"));
(async function () {
    let text = `# Typescript 与 Javascript 重构技巧 算法 以及 数据结构 练习\n`;
    text += `环境:  \n`;
    text += `typescript: ${package_json_1.default.devDependencies.typescript}  \n`;
    text += `ts-node: ${package_json_1.default.devDependencies["ts-node"]}  \n\n`;
    text += `Typescript 语法和类型 学习 : [仓库地址](https://github.com/DreamLarva/learn-typescript) \n\n`;
    text += `我的 Leetcode : [地址](https://leetcode-cn.com/u/dreamlarva) \n\n`;
    text += `## 数据结构:\n`;
    const dataStructure_dir = (await fs_1.promises.readdir("./数据结构"))
        .filter(file => {
        const { name, ext } = path_1.default.parse(file);
        return ext === ".ts" && !/\.d$/.test(name);
    });
    for (const file of dataStructure_dir) {
        const wholeName = path_1.default.parse(file).name;
        text += `1.  [${wholeName}](https://github.com/DreamLarva/js-ts-Algorithms/blob/master/数据结构/${file})   \n`;
    }
    text += `## Leetcode 解题:\n`;
    const { data } = await axios_1.default('https://leetcode-cn.com/api/problems/all/');
    console.log("拉取leetcode 数据成功");
    const difficulty_array = [];
    data.stat_status_pairs.forEach((v) => {
        difficulty_array[v.stat.frontend_question_id] = String(v.difficulty.level);
    });
    const difficulty_text = {
        1: "简单",
        2: "普通",
        3: "困难",
    };
    text += `| # | 题名 | 难度 |  \n`;
    text += `| --- | --- | --- |  \n`;
    const leetcode_dir = (await fs_1.promises.readdir("./leetcode"))
        .filter(file => {
        const { name, ext } = path_1.default.parse(file);
        return ext === ".ts" && !/\.d$/.test(name);
    })
        .sort((a, b) => {
        return Number(a.split(".")[0]) - Number(b.split(".")[0]);
    });
    for (const file of leetcode_dir) {
        const wholeName = path_1.default.parse(file).name;
        const [index, name] = wholeName.split(".");
        const difficulty_level = difficulty_array[Number(index)];
        text += `| ${index} | [${name}](https://github.com/DreamLarva/js-ts-Algorithms/blob/master/leetcode/${file}) | ${difficulty_text[difficulty_level]} |\n`;
    }
    await fs_1.promises.writeFile("./README.md", text);
    console.log("generate README.md successfully");
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoi55Sf5oiQIG1hcmtkb3duLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyLnlJ/miJAgbWFya2Rvd24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwyQkFBeUM7QUFDekMsZ0RBQXdCO0FBQ3hCLGtFQUF5QztBQUN6QyxrREFBMEI7QUFFMUIsQ0FBQyxLQUFLO0lBQ0YsSUFBSSxJQUFJLEdBQUcsZ0RBQWdELENBQUM7SUFDNUQsSUFBSSxJQUFJLFNBQVMsQ0FBQztJQUNsQixJQUFJLElBQUksZUFBZSxzQkFBVyxDQUFDLGVBQWUsQ0FBQyxVQUFVLE1BQU0sQ0FBQztJQUNwRSxJQUFJLElBQUksWUFBWSxzQkFBVyxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO0lBRW5FLElBQUksSUFBSSxtRkFBbUYsQ0FBQztJQUM1RixJQUFJLElBQUksK0RBQStELENBQUM7SUFFeEUsSUFBSSxJQUFJLFlBQVksQ0FBQztJQUNyQixNQUFNLGlCQUFpQixHQUFHLENBQUMsTUFBTSxhQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3hELE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNYLE1BQU0sRUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFDLEdBQUcsY0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxPQUFPLEdBQUcsS0FBSyxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9DLENBQUMsQ0FBQyxDQUFDO0lBQ1AsS0FBSyxNQUFNLElBQUksSUFBSSxpQkFBaUIsRUFBRTtRQUNsQyxNQUFNLFNBQVMsR0FBRyxjQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQztRQUN4QyxJQUFJLElBQUksUUFBUSxTQUFTLHFFQUFxRSxJQUFJLFFBQVEsQ0FBQztLQUM5RztJQUdELElBQUksSUFBSSxtQkFBbUIsQ0FBQztJQUM1QixNQUFNLEVBQUMsSUFBSSxFQUFDLEdBQUcsTUFBTSxlQUFLLENBQUMsMkNBQTJDLENBQUMsQ0FBQztJQUN4RSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDL0IsTUFBTSxnQkFBZ0IsR0FBd0IsRUFBRSxDQUFDO0lBQ2pELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFNLEVBQUUsRUFBRTtRQUN0QyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQXNCLE1BQU0sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xHLENBQUMsQ0FBQyxDQUFDO0lBQ0gsTUFBTSxlQUFlLEdBQUc7UUFDcEIsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxJQUFJO0tBQ1YsQ0FBQztJQUdGLElBQUksSUFBSSxxQkFBcUIsQ0FBQztJQUM5QixJQUFJLElBQUkseUJBQXlCLENBQUM7SUFDbEMsTUFBTSxZQUFZLEdBQUcsQ0FBQyxNQUFNLGFBQVMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDdkQsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ1gsTUFBTSxFQUFDLElBQUksRUFBRSxHQUFHLEVBQUMsR0FBRyxjQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sR0FBRyxLQUFLLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0MsQ0FBQyxDQUFDO1NBQ0QsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ1gsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQyxDQUFDLENBQUM7SUFDUCxLQUFLLE1BQU0sSUFBSSxJQUFJLFlBQVksRUFBRTtRQUM3QixNQUFNLFNBQVMsR0FBRyxjQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQztRQUN4QyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0MsTUFBTSxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLElBQUksS0FBSyxLQUFLLE9BQU8sSUFBSSx5RUFBeUUsSUFBSSxPQUFPLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7S0FHNUo7SUFHRCxNQUFNLGFBQVMsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQztBQUNuRCxDQUFDLENBQUMsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtwcm9taXNlcyBhcyBmc1Byb21pc2V9IGZyb20gXCJmc1wiO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgcGFja2FnZUpzb24gZnJvbSAnLi9wYWNrYWdlLmpzb24nO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG4oYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IHRleHQgPSBgIyBUeXBlc2NyaXB0IOS4jiBKYXZhc2NyaXB0IOmHjeaehOaKgOW3pyDnrpfms5Ug5Lul5Y+KIOaVsOaNrue7k+aehCDnu4PkuaBcXG5gO1xyXG4gICAgdGV4dCArPSBg546v5aKDOiAgXFxuYDtcclxuICAgIHRleHQgKz0gYHR5cGVzY3JpcHQ6ICR7cGFja2FnZUpzb24uZGV2RGVwZW5kZW5jaWVzLnR5cGVzY3JpcHR9ICBcXG5gO1xyXG4gICAgdGV4dCArPSBgdHMtbm9kZTogJHtwYWNrYWdlSnNvbi5kZXZEZXBlbmRlbmNpZXNbXCJ0cy1ub2RlXCJdfSAgXFxuXFxuYDtcclxuXHJcbiAgICB0ZXh0ICs9IGBUeXBlc2NyaXB0IOivreazleWSjOexu+WeiyDlrabkuaAgOiBb5LuT5bqT5Zyw5Z2AXShodHRwczovL2dpdGh1Yi5jb20vRHJlYW1MYXJ2YS9sZWFybi10eXBlc2NyaXB0KSBcXG5cXG5gO1xyXG4gICAgdGV4dCArPSBg5oiR55qEIExlZXRjb2RlIDogW+WcsOWdgF0oaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vdS9kcmVhbWxhcnZhKSBcXG5cXG5gO1xyXG5cclxuICAgIHRleHQgKz0gYCMjIOaVsOaNrue7k+aehDpcXG5gO1xyXG4gICAgY29uc3QgZGF0YVN0cnVjdHVyZV9kaXIgPSAoYXdhaXQgZnNQcm9taXNlLnJlYWRkaXIoXCIuL+aVsOaNrue7k+aehFwiKSlcclxuICAgICAgICAuZmlsdGVyKGZpbGUgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB7bmFtZSwgZXh0fSA9IHBhdGgucGFyc2UoZmlsZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBleHQgPT09IFwiLnRzXCIgJiYgIS9cXC5kJC8udGVzdChuYW1lKTtcclxuICAgICAgICB9KTtcclxuICAgIGZvciAoY29uc3QgZmlsZSBvZiBkYXRhU3RydWN0dXJlX2Rpcikge1xyXG4gICAgICAgIGNvbnN0IHdob2xlTmFtZSA9IHBhdGgucGFyc2UoZmlsZSkubmFtZTtcclxuICAgICAgICB0ZXh0ICs9IGAxLiAgWyR7d2hvbGVOYW1lfV0oaHR0cHM6Ly9naXRodWIuY29tL0RyZWFtTGFydmEvanMtdHMtQWxnb3JpdGhtcy9ibG9iL21hc3Rlci/mlbDmja7nu5PmnoQvJHtmaWxlfSkgICBcXG5gO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB0ZXh0ICs9IGAjIyBMZWV0Y29kZSDop6Ppopg6XFxuYDtcclxuICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGF4aW9zKCdodHRwczovL2xlZXRjb2RlLWNuLmNvbS9hcGkvcHJvYmxlbXMvYWxsLycpO1xyXG4gICAgY29uc29sZS5sb2coXCLmi4nlj5ZsZWV0Y29kZSDmlbDmja7miJDlip9cIik7XHJcbiAgICBjb25zdCBkaWZmaWN1bHR5X2FycmF5OiAoXCIxXCIgfCBcIjJcIiB8IFwiM1wiKVtdID0gW107XHJcbiAgICBkYXRhLnN0YXRfc3RhdHVzX3BhaXJzLmZvckVhY2goKHY6IGFueSkgPT4ge1xyXG4gICAgICAgIGRpZmZpY3VsdHlfYXJyYXlbdi5zdGF0LmZyb250ZW5kX3F1ZXN0aW9uX2lkXSA9IDwoXCIxXCIgfCBcIjJcIiB8IFwiM1wiKT5TdHJpbmcodi5kaWZmaWN1bHR5LmxldmVsKTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgZGlmZmljdWx0eV90ZXh0ID0ge1xyXG4gICAgICAgIDE6IFwi566A5Y2VXCIsXHJcbiAgICAgICAgMjogXCLmma7pgJpcIixcclxuICAgICAgICAzOiBcIuWbsOmavlwiLFxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgdGV4dCArPSBgfCAjIHwg6aKY5ZCNIHwg6Zq+5bqmIHwgIFxcbmA7XHJcbiAgICB0ZXh0ICs9IGB8IC0tLSB8IC0tLSB8IC0tLSB8ICBcXG5gO1xyXG4gICAgY29uc3QgbGVldGNvZGVfZGlyID0gKGF3YWl0IGZzUHJvbWlzZS5yZWFkZGlyKFwiLi9sZWV0Y29kZVwiKSlcclxuICAgICAgICAuZmlsdGVyKGZpbGUgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB7bmFtZSwgZXh0fSA9IHBhdGgucGFyc2UoZmlsZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBleHQgPT09IFwiLnRzXCIgJiYgIS9cXC5kJC8udGVzdChuYW1lKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBOdW1iZXIoYS5zcGxpdChcIi5cIilbMF0pIC0gTnVtYmVyKGIuc3BsaXQoXCIuXCIpWzBdKTtcclxuICAgICAgICB9KTtcclxuICAgIGZvciAoY29uc3QgZmlsZSBvZiBsZWV0Y29kZV9kaXIpIHtcclxuICAgICAgICBjb25zdCB3aG9sZU5hbWUgPSBwYXRoLnBhcnNlKGZpbGUpLm5hbWU7XHJcbiAgICAgICAgY29uc3QgW2luZGV4LCBuYW1lXSA9IHdob2xlTmFtZS5zcGxpdChcIi5cIik7XHJcbiAgICAgICAgY29uc3QgZGlmZmljdWx0eV9sZXZlbCA9IGRpZmZpY3VsdHlfYXJyYXlbTnVtYmVyKGluZGV4KV07XHJcbiAgICAgICAgdGV4dCArPSBgfCAke2luZGV4fSB8IFske25hbWV9XShodHRwczovL2dpdGh1Yi5jb20vRHJlYW1MYXJ2YS9qcy10cy1BbGdvcml0aG1zL2Jsb2IvbWFzdGVyL2xlZXRjb2RlLyR7ZmlsZX0pIHwgJHtkaWZmaWN1bHR5X3RleHRbZGlmZmljdWx0eV9sZXZlbF19IHxcXG5gO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGF3YWl0IGZzUHJvbWlzZS53cml0ZUZpbGUoXCIuL1JFQURNRS5tZFwiLCB0ZXh0KTtcclxuICAgIGNvbnNvbGUubG9nKFwiZ2VuZXJhdGUgUkVBRE1FLm1kIHN1Y2Nlc3NmdWxseVwiKTtcclxufSkoKTtcclxuIl19