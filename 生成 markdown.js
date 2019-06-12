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
    console.log("README.md 更新完毕");
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoi55Sf5oiQIG1hcmtkb3duLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyLnlJ/miJAgbWFya2Rvd24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwyQkFBeUM7QUFDekMsZ0RBQXdCO0FBQ3hCLGtFQUF5QztBQUV6QyxDQUFDLEtBQUs7SUFDRixJQUFJLElBQUksR0FBRywyQ0FBMkMsQ0FBQztJQUN2RCxJQUFJLElBQUksU0FBUyxDQUFDO0lBQ2xCLElBQUksSUFBSSxlQUFlLHNCQUFXLENBQUMsZUFBZSxDQUFDLFVBQVUsTUFBTSxDQUFDO0lBQ3BFLElBQUksSUFBSSxZQUFZLHNCQUFXLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7SUFFakUsSUFBSSxJQUFJLGNBQWMsQ0FBQztJQUN2QixNQUFNLFlBQVksR0FBRyxDQUFDLE1BQU0sYUFBUyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN2RCxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDWCxNQUFNLEVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBQyxHQUFHLGNBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsT0FBTyxHQUFHLEtBQUssS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQyxDQUFDLENBQUM7U0FDRCxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDWCxPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDLENBQUMsQ0FBQztJQUNQLEtBQUssTUFBTSxJQUFJLElBQUksWUFBWSxFQUFFO1FBQzdCLE1BQU0sRUFBQyxJQUFJLEVBQUMsR0FBRyxjQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLElBQUksSUFBSSxJQUFJLElBQUkseUVBQXlFLElBQUksT0FBTyxDQUFDO0tBR3hHO0lBR0QsTUFBTSxhQUFTLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUE7QUFDakMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cHJvbWlzZXMgYXMgZnNQcm9taXNlfSBmcm9tIFwiZnNcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IHBhY2thZ2VKc29uIGZyb20gJy4vcGFja2FnZS5qc29uJztcclxuXHJcbihhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgdGV4dCA9IGAjIFR5cGVzY3JpcHQg5LiOIEphdmFzY3JpcHQg566X5rOVIOS7peWPiiDmlbDmja7nu5PmnoQg57uD5LmgXFxuYDtcclxuICAgIHRleHQgKz0gYOeOr+WigzogIFxcbmA7XHJcbiAgICB0ZXh0ICs9IGB0eXBlc2NyaXB0OiAke3BhY2thZ2VKc29uLmRldkRlcGVuZGVuY2llcy50eXBlc2NyaXB0fSAgXFxuYDtcclxuICAgIHRleHQgKz0gYHRzLW5vZGU6ICR7cGFja2FnZUpzb24uZGV2RGVwZW5kZW5jaWVzW1widHMtbm9kZVwiXX0gIFxcbmA7XHJcblxyXG4gICAgdGV4dCArPSBgIyMgbGVlY29kZVxcbmA7XHJcbiAgICBjb25zdCBsZWV0Y29kZV9kaXIgPSAoYXdhaXQgZnNQcm9taXNlLnJlYWRkaXIoXCIuL2xlZXRjb2RlXCIpKVxyXG4gICAgICAgIC5maWx0ZXIoZmlsZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHtuYW1lLCBleHR9ID0gcGF0aC5wYXJzZShmaWxlKTtcclxuICAgICAgICAgICAgcmV0dXJuIGV4dCA9PT0gXCIudHNcIiAmJiAhL1xcLmQkLy50ZXN0KG5hbWUpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIE51bWJlcihhLnNwbGl0KFwiLlwiKVswXSkgLSBOdW1iZXIoYi5zcGxpdChcIi5cIilbMF0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgZm9yIChjb25zdCBmaWxlIG9mIGxlZXRjb2RlX2Rpcikge1xyXG4gICAgICAgIGNvbnN0IHtuYW1lfSA9IHBhdGgucGFyc2UoZmlsZSk7XHJcbiAgICAgICAgdGV4dCArPSBgWyR7bmFtZX1dKGh0dHBzOi8vZ2l0aHViLmNvbS9EcmVhbUxhcnZhL2pzLXRzLUFsZ29yaXRobXMvYmxvYi9tYXN0ZXIvbGVldGNvZGUvJHtmaWxlfSkgIFxcbmA7XHJcblxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgYXdhaXQgZnNQcm9taXNlLndyaXRlRmlsZShcIi4vUkVBRE1FLm1kXCIsIHRleHQpO1xyXG4gICAgY29uc29sZS5sb2coXCJSRUFETUUubWQg5pu05paw5a6M5q+VXCIpXHJcbn0pKCk7XHJcbiJdfQ==