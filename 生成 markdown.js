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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoi55Sf5oiQIG1hcmtkb3duLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyLnlJ/miJAgbWFya2Rvd24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwyQkFBeUM7QUFDekMsZ0RBQXdCO0FBQ3hCLGtFQUF5QztBQUN6QyxrREFBMEI7QUFFMUIsQ0FBQyxLQUFLO0lBQ0YsSUFBSSxJQUFJLEdBQUcsZ0RBQWdELENBQUM7SUFDNUQsSUFBSSxJQUFJLFNBQVMsQ0FBQztJQUNsQixJQUFJLElBQUksZUFBZSxzQkFBVyxDQUFDLGVBQWUsQ0FBQyxVQUFVLE1BQU0sQ0FBQztJQUNwRSxJQUFJLElBQUksWUFBWSxzQkFBVyxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO0lBRW5FLElBQUksSUFBSSxtRkFBbUYsQ0FBQztJQUM1RixJQUFJLElBQUksK0RBQStELENBQUM7SUFFeEUsSUFBSSxJQUFJLFlBQVksQ0FBQztJQUNyQixNQUFNLGlCQUFpQixHQUFHLENBQUMsTUFBTSxhQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3hELE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNYLE1BQU0sRUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFDLEdBQUcsY0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxPQUFPLEdBQUcsS0FBSyxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9DLENBQUMsQ0FBQyxDQUFDO0lBQ1AsS0FBSyxNQUFNLElBQUksSUFBSSxpQkFBaUIsRUFBRTtRQUNsQyxNQUFNLFNBQVMsR0FBRyxjQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQztRQUN4QyxJQUFJLElBQUksUUFBUSxTQUFTLHFFQUFxRSxJQUFJLFFBQVEsQ0FBQztLQUM5RztJQUdELElBQUksSUFBSSxtQkFBbUIsQ0FBQztJQUM1QixNQUFNLEVBQUMsSUFBSSxFQUFDLEdBQUcsTUFBTSxlQUFLLENBQUMsMkNBQTJDLENBQUMsQ0FBQztJQUN4RSxNQUFNLGdCQUFnQixHQUF3QixFQUFFLENBQUM7SUFDakQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQU0sRUFBRSxFQUFFO1FBQ3RDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBc0IsTUFBTSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEcsQ0FBQyxDQUFDLENBQUM7SUFDSCxNQUFNLGVBQWUsR0FBRztRQUNwQixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLElBQUk7S0FDVixDQUFDO0lBSUYsSUFBSSxJQUFJLHFCQUFxQixDQUFDO0lBQzlCLElBQUksSUFBSSx5QkFBeUIsQ0FBQztJQUNsQyxNQUFNLFlBQVksR0FBRyxDQUFDLE1BQU0sYUFBUyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN2RCxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDWCxNQUFNLEVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBQyxHQUFHLGNBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsT0FBTyxHQUFHLEtBQUssS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQyxDQUFDLENBQUM7U0FDRCxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDWCxPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDLENBQUMsQ0FBQztJQUNQLEtBQUssTUFBTSxJQUFJLElBQUksWUFBWSxFQUFFO1FBQzdCLE1BQU0sU0FBUyxHQUFHLGNBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3hDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzQyxNQUFNLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3pELElBQUksSUFBSSxLQUFLLEtBQUssT0FBTyxJQUFJLHlFQUF5RSxJQUFJLE9BQU8sZUFBZSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQztLQUc1SjtJQUdELE1BQU0sYUFBUyxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO0FBQ25ELENBQUMsQ0FBQyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3Byb21pc2VzIGFzIGZzUHJvbWlzZX0gZnJvbSBcImZzXCI7XHJcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCBwYWNrYWdlSnNvbiBmcm9tICcuL3BhY2thZ2UuanNvbic7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbihhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgdGV4dCA9IGAjIFR5cGVzY3JpcHQg5LiOIEphdmFzY3JpcHQg6YeN5p6E5oqA5benIOeul+azlSDku6Xlj4og5pWw5o2u57uT5p6EIOe7g+S5oFxcbmA7XHJcbiAgICB0ZXh0ICs9IGDnjq/looM6ICBcXG5gO1xyXG4gICAgdGV4dCArPSBgdHlwZXNjcmlwdDogJHtwYWNrYWdlSnNvbi5kZXZEZXBlbmRlbmNpZXMudHlwZXNjcmlwdH0gIFxcbmA7XHJcbiAgICB0ZXh0ICs9IGB0cy1ub2RlOiAke3BhY2thZ2VKc29uLmRldkRlcGVuZGVuY2llc1tcInRzLW5vZGVcIl19ICBcXG5cXG5gO1xyXG5cclxuICAgIHRleHQgKz0gYFR5cGVzY3JpcHQg6K+t5rOV5ZKM57G75Z6LIOWtpuS5oCA6IFvku5PlupPlnLDlnYBdKGh0dHBzOi8vZ2l0aHViLmNvbS9EcmVhbUxhcnZhL2xlYXJuLXR5cGVzY3JpcHQpIFxcblxcbmA7XHJcbiAgICB0ZXh0ICs9IGDmiJHnmoQgTGVldGNvZGUgOiBb5Zyw5Z2AXShodHRwczovL2xlZXRjb2RlLWNuLmNvbS91L2RyZWFtbGFydmEpIFxcblxcbmA7XHJcblxyXG4gICAgdGV4dCArPSBgIyMg5pWw5o2u57uT5p6EOlxcbmA7XHJcbiAgICBjb25zdCBkYXRhU3RydWN0dXJlX2RpciA9IChhd2FpdCBmc1Byb21pc2UucmVhZGRpcihcIi4v5pWw5o2u57uT5p6EXCIpKVxyXG4gICAgICAgIC5maWx0ZXIoZmlsZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHtuYW1lLCBleHR9ID0gcGF0aC5wYXJzZShmaWxlKTtcclxuICAgICAgICAgICAgcmV0dXJuIGV4dCA9PT0gXCIudHNcIiAmJiAhL1xcLmQkLy50ZXN0KG5hbWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgZm9yIChjb25zdCBmaWxlIG9mIGRhdGFTdHJ1Y3R1cmVfZGlyKSB7XHJcbiAgICAgICAgY29uc3Qgd2hvbGVOYW1lID0gcGF0aC5wYXJzZShmaWxlKS5uYW1lO1xyXG4gICAgICAgIHRleHQgKz0gYDEuICBbJHt3aG9sZU5hbWV9XShodHRwczovL2dpdGh1Yi5jb20vRHJlYW1MYXJ2YS9qcy10cy1BbGdvcml0aG1zL2Jsb2IvbWFzdGVyL+aVsOaNrue7k+aehC8ke2ZpbGV9KSAgIFxcbmA7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHRleHQgKz0gYCMjIExlZXRjb2RlIOino+mimDpcXG5gO1xyXG4gICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgYXhpb3MoJ2h0dHBzOi8vbGVldGNvZGUtY24uY29tL2FwaS9wcm9ibGVtcy9hbGwvJyk7XHJcbiAgICBjb25zdCBkaWZmaWN1bHR5X2FycmF5OiAoXCIxXCIgfCBcIjJcIiB8IFwiM1wiKVtdID0gW107XHJcbiAgICBkYXRhLnN0YXRfc3RhdHVzX3BhaXJzLmZvckVhY2goKHY6IGFueSkgPT4ge1xyXG4gICAgICAgIGRpZmZpY3VsdHlfYXJyYXlbdi5zdGF0LmZyb250ZW5kX3F1ZXN0aW9uX2lkXSA9IDwoXCIxXCIgfCBcIjJcIiB8IFwiM1wiKT5TdHJpbmcodi5kaWZmaWN1bHR5LmxldmVsKTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgZGlmZmljdWx0eV90ZXh0ID0ge1xyXG4gICAgICAgIDE6IFwi566A5Y2VXCIsXHJcbiAgICAgICAgMjogXCLmma7pgJpcIixcclxuICAgICAgICAzOiBcIuWbsOmavlwiLFxyXG4gICAgfTtcclxuXHJcblxyXG5cclxuICAgIHRleHQgKz0gYHwgIyB8IOmimOWQjSB8IOmavuW6piB8ICBcXG5gO1xyXG4gICAgdGV4dCArPSBgfCAtLS0gfCAtLS0gfCAtLS0gfCAgXFxuYDtcclxuICAgIGNvbnN0IGxlZXRjb2RlX2RpciA9IChhd2FpdCBmc1Byb21pc2UucmVhZGRpcihcIi4vbGVldGNvZGVcIikpXHJcbiAgICAgICAgLmZpbHRlcihmaWxlID0+IHtcclxuICAgICAgICAgICAgY29uc3Qge25hbWUsIGV4dH0gPSBwYXRoLnBhcnNlKGZpbGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gZXh0ID09PSBcIi50c1wiICYmICEvXFwuZCQvLnRlc3QobmFtZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gTnVtYmVyKGEuc3BsaXQoXCIuXCIpWzBdKSAtIE51bWJlcihiLnNwbGl0KFwiLlwiKVswXSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICBmb3IgKGNvbnN0IGZpbGUgb2YgbGVldGNvZGVfZGlyKSB7XHJcbiAgICAgICAgY29uc3Qgd2hvbGVOYW1lID0gcGF0aC5wYXJzZShmaWxlKS5uYW1lO1xyXG4gICAgICAgIGNvbnN0IFtpbmRleCwgbmFtZV0gPSB3aG9sZU5hbWUuc3BsaXQoXCIuXCIpO1xyXG4gICAgICAgIGNvbnN0IGRpZmZpY3VsdHlfbGV2ZWwgPSBkaWZmaWN1bHR5X2FycmF5W051bWJlcihpbmRleCldO1xyXG4gICAgICAgIHRleHQgKz0gYHwgJHtpbmRleH0gfCBbJHtuYW1lfV0oaHR0cHM6Ly9naXRodWIuY29tL0RyZWFtTGFydmEvanMtdHMtQWxnb3JpdGhtcy9ibG9iL21hc3Rlci9sZWV0Y29kZS8ke2ZpbGV9KSB8ICR7ZGlmZmljdWx0eV90ZXh0W2RpZmZpY3VsdHlfbGV2ZWxdfSB8XFxuYDtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhd2FpdCBmc1Byb21pc2Uud3JpdGVGaWxlKFwiLi9SRUFETUUubWRcIiwgdGV4dCk7XHJcbiAgICBjb25zb2xlLmxvZyhcImdlbmVyYXRlIFJFQURNRS5tZCBzdWNjZXNzZnVsbHlcIik7XHJcbn0pKCk7XHJcbiJdfQ==