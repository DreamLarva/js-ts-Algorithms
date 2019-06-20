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
    text += `Leetcode 中文首页 : [地址](https://leetcode-cn.com/u/dreamlarva) \n\n`;
    const { data } = await axios_1.default('https://leetcode-cn.com/api/problems/all/');
    const difficulty_array = [];
    data.stat_status_pairs.forEach((v) => {
        difficulty_array[v.stat.frontend_question_id] = v.difficulty.level;
    });
    const difficulty_text = [
        "简单",
        "普通",
        "困难"
    ];
    text += `## leecode\n`;
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
        text += `| ${index} | [${name}](https://github.com/DreamLarva/js-ts-Algorithms/blob/master/leetcode/${file}) | ${difficulty_text[difficulty_array[Number(index)]]} |\n`;
    }
    await fs_1.promises.writeFile("./README.md", text);
    console.log("README.md 更新完毕");
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoi55Sf5oiQIG1hcmtkb3duLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyLnlJ/miJAgbWFya2Rvd24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwyQkFBeUM7QUFDekMsZ0RBQXdCO0FBQ3hCLGtFQUF5QztBQUN6QyxrREFBMEI7QUFFMUIsQ0FBQyxLQUFLO0lBQ0YsSUFBSSxJQUFJLEdBQUcsZ0RBQWdELENBQUM7SUFDNUQsSUFBSSxJQUFJLFNBQVMsQ0FBQztJQUNsQixJQUFJLElBQUksZUFBZSxzQkFBVyxDQUFDLGVBQWUsQ0FBQyxVQUFVLE1BQU0sQ0FBQztJQUNwRSxJQUFJLElBQUksWUFBWSxzQkFBVyxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO0lBRW5FLElBQUksSUFBSSxtRkFBbUYsQ0FBQztJQUM1RixJQUFJLElBQUksaUVBQWlFLENBQUM7SUFFMUUsTUFBTSxFQUFDLElBQUksRUFBQyxHQUFHLE1BQU0sZUFBSyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7SUFDeEUsTUFBTSxnQkFBZ0IsR0FBWSxFQUFFLENBQUM7SUFDckMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQU0sRUFBRSxFQUFFO1FBQ3RDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztJQUN2RSxDQUFDLENBQUMsQ0FBQztJQUNILE1BQU0sZUFBZSxHQUFHO1FBQ3BCLElBQUk7UUFDSixJQUFJO1FBQ0osSUFBSTtLQUNQLENBQUM7SUFHRixJQUFJLElBQUksY0FBYyxDQUFDO0lBQ3ZCLElBQUksSUFBSSxxQkFBcUIsQ0FBQztJQUM5QixJQUFJLElBQUkseUJBQXlCLENBQUM7SUFDbEMsTUFBTSxZQUFZLEdBQUcsQ0FBQyxNQUFNLGFBQVMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDdkQsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ1gsTUFBTSxFQUFDLElBQUksRUFBRSxHQUFHLEVBQUMsR0FBRyxjQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sR0FBRyxLQUFLLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0MsQ0FBQyxDQUFDO1NBQ0QsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ1gsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQyxDQUFDLENBQUM7SUFDUCxLQUFLLE1BQU0sSUFBSSxJQUFJLFlBQVksRUFBRTtRQUM3QixNQUFNLFNBQVMsR0FBRyxjQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQztRQUN4QyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0MsSUFBSSxJQUFJLEtBQUssS0FBSyxPQUFPLElBQUkseUVBQXlFLElBQUksT0FBTyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0tBRzNLO0lBR0QsTUFBTSxhQUFTLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDbEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cHJvbWlzZXMgYXMgZnNQcm9taXNlfSBmcm9tIFwiZnNcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgcGFja2FnZUpzb24gZnJvbSAnLi9wYWNrYWdlLmpzb24nO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG4oYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgIGxldCB0ZXh0ID0gYCMgVHlwZXNjcmlwdCDkuI4gSmF2YXNjcmlwdCDph43mnoTmioDlt6cg566X5rOVIOS7peWPiiDmlbDmja7nu5PmnoQg57uD5LmgXFxuYDtcbiAgICB0ZXh0ICs9IGDnjq/looM6ICBcXG5gO1xuICAgIHRleHQgKz0gYHR5cGVzY3JpcHQ6ICR7cGFja2FnZUpzb24uZGV2RGVwZW5kZW5jaWVzLnR5cGVzY3JpcHR9ICBcXG5gO1xuICAgIHRleHQgKz0gYHRzLW5vZGU6ICR7cGFja2FnZUpzb24uZGV2RGVwZW5kZW5jaWVzW1widHMtbm9kZVwiXX0gIFxcblxcbmA7XG5cbiAgICB0ZXh0ICs9IGBUeXBlc2NyaXB0IOivreazleWSjOexu+WeiyDlrabkuaAgOiBb5LuT5bqT5Zyw5Z2AXShodHRwczovL2dpdGh1Yi5jb20vRHJlYW1MYXJ2YS9sZWFybi10eXBlc2NyaXB0KSBcXG5cXG5gO1xuICAgIHRleHQgKz0gYExlZXRjb2RlIOS4reaWh+mmlumhtSA6IFvlnLDlnYBdKGh0dHBzOi8vbGVldGNvZGUtY24uY29tL3UvZHJlYW1sYXJ2YSkgXFxuXFxuYDtcblxuICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGF4aW9zKCdodHRwczovL2xlZXRjb2RlLWNuLmNvbS9hcGkvcHJvYmxlbXMvYWxsLycpO1xuICAgIGNvbnN0IGRpZmZpY3VsdHlfYXJyYXk6bnVtYmVyW10gPSBbXTtcbiAgICBkYXRhLnN0YXRfc3RhdHVzX3BhaXJzLmZvckVhY2goKHY6IGFueSkgPT4ge1xuICAgICAgICBkaWZmaWN1bHR5X2FycmF5W3Yuc3RhdC5mcm9udGVuZF9xdWVzdGlvbl9pZF0gPSB2LmRpZmZpY3VsdHkubGV2ZWw7XG4gICAgfSk7XG4gICAgY29uc3QgZGlmZmljdWx0eV90ZXh0ID0gW1xuICAgICAgICBcIueugOWNlVwiLFxuICAgICAgICBcIuaZrumAmlwiLFxuICAgICAgICBcIuWbsOmavlwiXG4gICAgXTtcblxuXG4gICAgdGV4dCArPSBgIyMgbGVlY29kZVxcbmA7XG4gICAgdGV4dCArPSBgfCAjIHwg6aKY5ZCNIHwg6Zq+5bqmIHwgIFxcbmA7XG4gICAgdGV4dCArPSBgfCAtLS0gfCAtLS0gfCAtLS0gfCAgXFxuYDtcbiAgICBjb25zdCBsZWV0Y29kZV9kaXIgPSAoYXdhaXQgZnNQcm9taXNlLnJlYWRkaXIoXCIuL2xlZXRjb2RlXCIpKVxuICAgICAgICAuZmlsdGVyKGZpbGUgPT4ge1xuICAgICAgICAgICAgY29uc3Qge25hbWUsIGV4dH0gPSBwYXRoLnBhcnNlKGZpbGUpO1xuICAgICAgICAgICAgcmV0dXJuIGV4dCA9PT0gXCIudHNcIiAmJiAhL1xcLmQkLy50ZXN0KG5hbWUpO1xuICAgICAgICB9KVxuICAgICAgICAuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIE51bWJlcihhLnNwbGl0KFwiLlwiKVswXSkgLSBOdW1iZXIoYi5zcGxpdChcIi5cIilbMF0pO1xuICAgICAgICB9KTtcbiAgICBmb3IgKGNvbnN0IGZpbGUgb2YgbGVldGNvZGVfZGlyKSB7XG4gICAgICAgIGNvbnN0IHdob2xlTmFtZSA9IHBhdGgucGFyc2UoZmlsZSkubmFtZTtcbiAgICAgICAgY29uc3QgW2luZGV4LCBuYW1lXSA9IHdob2xlTmFtZS5zcGxpdChcIi5cIik7XG4gICAgICAgIHRleHQgKz0gYHwgJHtpbmRleH0gfCBbJHtuYW1lfV0oaHR0cHM6Ly9naXRodWIuY29tL0RyZWFtTGFydmEvanMtdHMtQWxnb3JpdGhtcy9ibG9iL21hc3Rlci9sZWV0Y29kZS8ke2ZpbGV9KSB8ICR7ZGlmZmljdWx0eV90ZXh0W2RpZmZpY3VsdHlfYXJyYXlbTnVtYmVyKGluZGV4KV1dfSB8XFxuYDtcblxuXG4gICAgfVxuXG5cbiAgICBhd2FpdCBmc1Byb21pc2Uud3JpdGVGaWxlKFwiLi9SRUFETUUubWRcIiwgdGV4dCk7XG4gICAgY29uc29sZS5sb2coXCJSRUFETUUubWQg5pu05paw5a6M5q+VXCIpO1xufSkoKTtcbiJdfQ==