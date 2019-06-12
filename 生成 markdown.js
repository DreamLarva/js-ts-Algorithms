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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoi55Sf5oiQIG1hcmtkb3duLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyLnlJ/miJAgbWFya2Rvd24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwyQkFBeUM7QUFDekMsZ0RBQXdCO0FBQ3hCLGtFQUF5QztBQUV6QyxDQUFDLEtBQUs7SUFDRixJQUFJLElBQUksR0FBRywyQ0FBMkMsQ0FBQztJQUN2RCxJQUFJLElBQUksU0FBUyxDQUFDO0lBQ2xCLElBQUksSUFBSSxlQUFlLHNCQUFXLENBQUMsZUFBZSxDQUFDLFVBQVUsTUFBTSxDQUFDO0lBQ3BFLElBQUksSUFBSSxZQUFZLHNCQUFXLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7SUFFakUsSUFBSSxJQUFJLGNBQWMsQ0FBQztJQUN2QixNQUFNLFlBQVksR0FBRyxDQUFDLE1BQU0sYUFBUyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN2RCxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDWCxNQUFNLEVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBQyxHQUFHLGNBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsT0FBTyxHQUFHLEtBQUssS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQyxDQUFDLENBQUM7U0FDRCxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDWCxPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDLENBQUMsQ0FBQztJQUNQLEtBQUssTUFBTSxJQUFJLElBQUksWUFBWSxFQUFFO1FBQzdCLE1BQU0sRUFBQyxJQUFJLEVBQUMsR0FBRyxjQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLElBQUksSUFBSSxJQUFJLElBQUkseUVBQXlFLElBQUksT0FBTyxDQUFDO0tBR3hHO0lBR0QsTUFBTSxhQUFTLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUE7QUFDakMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cHJvbWlzZXMgYXMgZnNQcm9taXNlfSBmcm9tIFwiZnNcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgcGFja2FnZUpzb24gZnJvbSAnLi9wYWNrYWdlLmpzb24nO1xuXG4oYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgIGxldCB0ZXh0ID0gYCMgVHlwZXNjcmlwdCDkuI4gSmF2YXNjcmlwdCDnrpfms5Ug5Lul5Y+KIOaVsOaNrue7k+aehCDnu4PkuaBcXG5gO1xuICAgIHRleHQgKz0gYOeOr+WigzogIFxcbmA7XG4gICAgdGV4dCArPSBgdHlwZXNjcmlwdDogJHtwYWNrYWdlSnNvbi5kZXZEZXBlbmRlbmNpZXMudHlwZXNjcmlwdH0gIFxcbmA7XG4gICAgdGV4dCArPSBgdHMtbm9kZTogJHtwYWNrYWdlSnNvbi5kZXZEZXBlbmRlbmNpZXNbXCJ0cy1ub2RlXCJdfSAgXFxuYDtcblxuICAgIHRleHQgKz0gYCMjIGxlZWNvZGVcXG5gO1xuICAgIGNvbnN0IGxlZXRjb2RlX2RpciA9IChhd2FpdCBmc1Byb21pc2UucmVhZGRpcihcIi4vbGVldGNvZGVcIikpXG4gICAgICAgIC5maWx0ZXIoZmlsZSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7bmFtZSwgZXh0fSA9IHBhdGgucGFyc2UoZmlsZSk7XG4gICAgICAgICAgICByZXR1cm4gZXh0ID09PSBcIi50c1wiICYmICEvXFwuZCQvLnRlc3QobmFtZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gTnVtYmVyKGEuc3BsaXQoXCIuXCIpWzBdKSAtIE51bWJlcihiLnNwbGl0KFwiLlwiKVswXSk7XG4gICAgICAgIH0pO1xuICAgIGZvciAoY29uc3QgZmlsZSBvZiBsZWV0Y29kZV9kaXIpIHtcbiAgICAgICAgY29uc3Qge25hbWV9ID0gcGF0aC5wYXJzZShmaWxlKTtcbiAgICAgICAgdGV4dCArPSBgWyR7bmFtZX1dKGh0dHBzOi8vZ2l0aHViLmNvbS9EcmVhbUxhcnZhL2pzLXRzLUFsZ29yaXRobXMvYmxvYi9tYXN0ZXIvbGVldGNvZGUvJHtmaWxlfSkgIFxcbmA7XG5cblxuICAgIH1cblxuXG4gICAgYXdhaXQgZnNQcm9taXNlLndyaXRlRmlsZShcIi4vUkVBRE1FLm1kXCIsIHRleHQpO1xuICAgIGNvbnNvbGUubG9nKFwiUkVBRE1FLm1kIOabtOaWsOWujOavlVwiKVxufSkoKTtcbiJdfQ==