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
        difficulty_array[v.stat.frontend_question_id] = String(v.difficulty.level);
    });
    const difficulty_text = {
        1: "简单",
        2: "普通",
        3: "困难"
    };
    text += `## leetcode 做题\n`;
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
    console.log("README.md 更新完毕");
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoi55Sf5oiQIG1hcmtkb3duLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyLnlJ/miJAgbWFya2Rvd24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwyQkFBeUM7QUFDekMsZ0RBQXdCO0FBQ3hCLGtFQUF5QztBQUN6QyxrREFBMEI7QUFFMUIsQ0FBQyxLQUFLO0lBQ0YsSUFBSSxJQUFJLEdBQUcsZ0RBQWdELENBQUM7SUFDNUQsSUFBSSxJQUFJLFNBQVMsQ0FBQztJQUNsQixJQUFJLElBQUksZUFBZSxzQkFBVyxDQUFDLGVBQWUsQ0FBQyxVQUFVLE1BQU0sQ0FBQztJQUNwRSxJQUFJLElBQUksWUFBWSxzQkFBVyxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO0lBRW5FLElBQUksSUFBSSxtRkFBbUYsQ0FBQztJQUM1RixJQUFJLElBQUksaUVBQWlFLENBQUM7SUFFMUUsTUFBTSxFQUFDLElBQUksRUFBQyxHQUFHLE1BQU0sZUFBSyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7SUFDeEUsTUFBTSxnQkFBZ0IsR0FBdUIsRUFBRSxDQUFDO0lBQ2hELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFNLEVBQUUsRUFBRTtRQUN0QyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQXNCLE1BQU0sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xHLENBQUMsQ0FBQyxDQUFDO0lBQ0gsTUFBTSxlQUFlLEdBQUc7UUFDcEIsQ0FBQyxFQUFDLElBQUk7UUFDTixDQUFDLEVBQUMsSUFBSTtRQUNOLENBQUMsRUFBQyxJQUFJO0tBQ1QsQ0FBQztJQUdGLElBQUksSUFBSSxrQkFBa0IsQ0FBQztJQUMzQixJQUFJLElBQUkscUJBQXFCLENBQUM7SUFDOUIsSUFBSSxJQUFJLHlCQUF5QixDQUFDO0lBQ2xDLE1BQU0sWUFBWSxHQUFHLENBQUMsTUFBTSxhQUFTLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3ZELE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNYLE1BQU0sRUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFDLEdBQUcsY0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxPQUFPLEdBQUcsS0FBSyxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9DLENBQUMsQ0FBQztTQUNELElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNYLE9BQU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdELENBQUMsQ0FBQyxDQUFDO0lBQ1AsS0FBSyxNQUFNLElBQUksSUFBSSxZQUFZLEVBQUU7UUFDN0IsTUFBTSxTQUFTLEdBQUcsY0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDeEMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLE1BQU0sZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDekQsSUFBSSxJQUFJLEtBQUssS0FBSyxPQUFPLElBQUkseUVBQXlFLElBQUksT0FBTyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDO0tBRzVKO0lBR0QsTUFBTSxhQUFTLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDbEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cHJvbWlzZXMgYXMgZnNQcm9taXNlfSBmcm9tIFwiZnNcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IHBhY2thZ2VKc29uIGZyb20gJy4vcGFja2FnZS5qc29uJztcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuKGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCB0ZXh0ID0gYCMgVHlwZXNjcmlwdCDkuI4gSmF2YXNjcmlwdCDph43mnoTmioDlt6cg566X5rOVIOS7peWPiiDmlbDmja7nu5PmnoQg57uD5LmgXFxuYDtcclxuICAgIHRleHQgKz0gYOeOr+WigzogIFxcbmA7XHJcbiAgICB0ZXh0ICs9IGB0eXBlc2NyaXB0OiAke3BhY2thZ2VKc29uLmRldkRlcGVuZGVuY2llcy50eXBlc2NyaXB0fSAgXFxuYDtcclxuICAgIHRleHQgKz0gYHRzLW5vZGU6ICR7cGFja2FnZUpzb24uZGV2RGVwZW5kZW5jaWVzW1widHMtbm9kZVwiXX0gIFxcblxcbmA7XHJcblxyXG4gICAgdGV4dCArPSBgVHlwZXNjcmlwdCDor63ms5Xlkoznsbvlnosg5a2m5LmgIDogW+S7k+W6k+WcsOWdgF0oaHR0cHM6Ly9naXRodWIuY29tL0RyZWFtTGFydmEvbGVhcm4tdHlwZXNjcmlwdCkgXFxuXFxuYDtcclxuICAgIHRleHQgKz0gYExlZXRjb2RlIOS4reaWh+mmlumhtSA6IFvlnLDlnYBdKGh0dHBzOi8vbGVldGNvZGUtY24uY29tL3UvZHJlYW1sYXJ2YSkgXFxuXFxuYDtcclxuXHJcbiAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCBheGlvcygnaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vYXBpL3Byb2JsZW1zL2FsbC8nKTtcclxuICAgIGNvbnN0IGRpZmZpY3VsdHlfYXJyYXk6KFwiMVwiIHwgXCIyXCIgfCBcIjNcIilbXSA9IFtdO1xyXG4gICAgZGF0YS5zdGF0X3N0YXR1c19wYWlycy5mb3JFYWNoKCh2OiBhbnkpID0+IHtcclxuICAgICAgICBkaWZmaWN1bHR5X2FycmF5W3Yuc3RhdC5mcm9udGVuZF9xdWVzdGlvbl9pZF0gPSA8KFwiMVwiIHwgXCIyXCIgfCBcIjNcIik+U3RyaW5nKHYuZGlmZmljdWx0eS5sZXZlbCk7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGRpZmZpY3VsdHlfdGV4dCA9IHtcclxuICAgICAgICAxOlwi566A5Y2VXCIsXHJcbiAgICAgICAgMjpcIuaZrumAmlwiLFxyXG4gICAgICAgIDM6XCLlm7Dpmr5cIlxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgdGV4dCArPSBgIyMgbGVldGNvZGUg5YGa6aKYXFxuYDtcclxuICAgIHRleHQgKz0gYHwgIyB8IOmimOWQjSB8IOmavuW6piB8ICBcXG5gO1xyXG4gICAgdGV4dCArPSBgfCAtLS0gfCAtLS0gfCAtLS0gfCAgXFxuYDtcclxuICAgIGNvbnN0IGxlZXRjb2RlX2RpciA9IChhd2FpdCBmc1Byb21pc2UucmVhZGRpcihcIi4vbGVldGNvZGVcIikpXHJcbiAgICAgICAgLmZpbHRlcihmaWxlID0+IHtcclxuICAgICAgICAgICAgY29uc3Qge25hbWUsIGV4dH0gPSBwYXRoLnBhcnNlKGZpbGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gZXh0ID09PSBcIi50c1wiICYmICEvXFwuZCQvLnRlc3QobmFtZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gTnVtYmVyKGEuc3BsaXQoXCIuXCIpWzBdKSAtIE51bWJlcihiLnNwbGl0KFwiLlwiKVswXSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICBmb3IgKGNvbnN0IGZpbGUgb2YgbGVldGNvZGVfZGlyKSB7XHJcbiAgICAgICAgY29uc3Qgd2hvbGVOYW1lID0gcGF0aC5wYXJzZShmaWxlKS5uYW1lO1xyXG4gICAgICAgIGNvbnN0IFtpbmRleCwgbmFtZV0gPSB3aG9sZU5hbWUuc3BsaXQoXCIuXCIpO1xyXG4gICAgICAgIGNvbnN0IGRpZmZpY3VsdHlfbGV2ZWwgPSBkaWZmaWN1bHR5X2FycmF5W051bWJlcihpbmRleCldO1xyXG4gICAgICAgIHRleHQgKz0gYHwgJHtpbmRleH0gfCBbJHtuYW1lfV0oaHR0cHM6Ly9naXRodWIuY29tL0RyZWFtTGFydmEvanMtdHMtQWxnb3JpdGhtcy9ibG9iL21hc3Rlci9sZWV0Y29kZS8ke2ZpbGV9KSB8ICR7ZGlmZmljdWx0eV90ZXh0W2RpZmZpY3VsdHlfbGV2ZWxdfSB8XFxuYDtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhd2FpdCBmc1Byb21pc2Uud3JpdGVGaWxlKFwiLi9SRUFETUUubWRcIiwgdGV4dCk7XHJcbiAgICBjb25zb2xlLmxvZyhcIlJFQURNRS5tZCDmm7TmlrDlrozmr5VcIik7XHJcbn0pKCk7XHJcbiJdfQ==