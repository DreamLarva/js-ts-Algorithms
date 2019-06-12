"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const package_json_1 = __importDefault(require("./package.json"));
(async function () {
    let text = `# Typescript 与 Javascript 算法 以及 数据结构 练习\n`;
    text += `环境:  \n`;
    text += `typescript: ${package_json_1.default.devDependencies.typescript}  \n`;
    text += `ts-node: ${package_json_1.default.devDependencies["ts-node"]}  \n`;
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
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoi55Sf5oiQIG1hcmtkb3duLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyLnlJ/miJAgbWFya2Rvd24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwyQkFBeUM7QUFDekMsZ0RBQXdCO0FBQ3hCLGtFQUF5QztBQUV6QyxDQUFDLEtBQUs7SUFDRixJQUFJLElBQUksR0FBRywyQ0FBMkMsQ0FBQztJQUN2RCxJQUFJLElBQUksU0FBUyxDQUFDO0lBQ2xCLElBQUksSUFBSSxlQUFlLHNCQUFXLENBQUMsZUFBZSxDQUFDLFVBQVUsTUFBTSxDQUFDO0lBQ3BFLElBQUksSUFBSSxZQUFZLHNCQUFXLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7SUFFakUsSUFBSSxJQUFJLGNBQWMsQ0FBQztJQUN2QixNQUFNLFlBQVksR0FBRyxDQUFDLE1BQU0sYUFBUyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN2RCxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDWCxNQUFNLEVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBQyxHQUFHLGNBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsT0FBTyxHQUFHLEtBQUssS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQyxDQUFDLENBQUM7U0FDRCxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDWCxPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDLENBQUMsQ0FBQztJQUNQLEtBQUssTUFBTSxJQUFJLElBQUksWUFBWSxFQUFFO1FBQzdCLE1BQU0sRUFBQyxJQUFJLEVBQUMsR0FBRyxjQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLElBQUksSUFBSSxJQUFJLElBQUkseUVBQXlFLElBQUksT0FBTyxDQUFDO0tBR3hHO0lBR0QsTUFBTSxhQUFTLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNuRCxDQUFDLENBQUMsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtwcm9taXNlcyBhcyBmc1Byb21pc2V9IGZyb20gXCJmc1wiO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgcGFja2FnZUpzb24gZnJvbSAnLi9wYWNrYWdlLmpzb24nO1xyXG5cclxuKGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCB0ZXh0ID0gYCMgVHlwZXNjcmlwdCDkuI4gSmF2YXNjcmlwdCDnrpfms5Ug5Lul5Y+KIOaVsOaNrue7k+aehCDnu4PkuaBcXG5gO1xyXG4gICAgdGV4dCArPSBg546v5aKDOiAgXFxuYDtcclxuICAgIHRleHQgKz0gYHR5cGVzY3JpcHQ6ICR7cGFja2FnZUpzb24uZGV2RGVwZW5kZW5jaWVzLnR5cGVzY3JpcHR9ICBcXG5gO1xyXG4gICAgdGV4dCArPSBgdHMtbm9kZTogJHtwYWNrYWdlSnNvbi5kZXZEZXBlbmRlbmNpZXNbXCJ0cy1ub2RlXCJdfSAgXFxuYDtcclxuXHJcbiAgICB0ZXh0ICs9IGAjIyBsZWVjb2RlXFxuYDtcclxuICAgIGNvbnN0IGxlZXRjb2RlX2RpciA9IChhd2FpdCBmc1Byb21pc2UucmVhZGRpcihcIi4vbGVldGNvZGVcIikpXHJcbiAgICAgICAgLmZpbHRlcihmaWxlID0+IHtcclxuICAgICAgICAgICAgY29uc3Qge25hbWUsIGV4dH0gPSBwYXRoLnBhcnNlKGZpbGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gZXh0ID09PSBcIi50c1wiICYmICEvXFwuZCQvLnRlc3QobmFtZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gTnVtYmVyKGEuc3BsaXQoXCIuXCIpWzBdKSAtIE51bWJlcihiLnNwbGl0KFwiLlwiKVswXSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICBmb3IgKGNvbnN0IGZpbGUgb2YgbGVldGNvZGVfZGlyKSB7XHJcbiAgICAgICAgY29uc3Qge25hbWV9ID0gcGF0aC5wYXJzZShmaWxlKTtcclxuICAgICAgICB0ZXh0ICs9IGBbJHtuYW1lfV0oaHR0cHM6Ly9naXRodWIuY29tL0RyZWFtTGFydmEvanMtdHMtQWxnb3JpdGhtcy9ibG9iL21hc3Rlci9sZWV0Y29kZS8ke2ZpbGV9KSAgXFxuYDtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhd2FpdCBmc1Byb21pc2Uud3JpdGVGaWxlKFwiLi9SRUFETUUubWRcIiwgdGV4dCk7XHJcbn0pKCk7XHJcbiJdfQ==