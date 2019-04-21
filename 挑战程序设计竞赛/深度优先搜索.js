/*
给定整数 a1,a2,...,an 判断是否可以从中选出若干书,使他们和恰好为K限制条件
1<= n<=20
-10**8 <= ai <=10**8
-10**8 <= k <=10**8

input:
n = 4
a={1,2,4,7}
k=3
output:
yes

input:
n=4
a={1,2,3,7}
k=14
output:
no
* */


// 输入
const N = 10;
const M = 12;
const field = [
    ["W", ".", ".", ".", ".", ".", ".", ".", ".", "W", "W", ".",],
    [".", "W", "W", "W", ".", ".", ".", ".", ".", "W", "W", "W",],
    [".", ".", ".", ".", "W", "W", ".", ".", ".", "W", "W", ".",],
    [".", ".", ".", ".", ".", ".", ".", ".", ".", "W", "W", ".",],
    [".", ".", ".", ".", ".", ".", ".", ".", ".", "W", ".", ".",],
    [".", ".", "W", ".", ".", ".", ".", ".", ".", "W", ".", ".",],
    [".", "W", ".", "W", ".", ".", ".", ".", ".", "W", "W", ".",],
    ["W", ".", "W", ".", "W", ".", ".", ".", ".", ".", "W", ".",],
    [".", "W", ".", "W", ".", ".", ".", ".", ".", ".", "W", ".",],
    [".", ".", "W", ".", ".", ".", ".", ".", ".", ".", "W", ".",],
];

function dfs(x, y) {
    field[x][y] = ".";
    for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
            const nx = x + dx,
                ny = y + dy;
            if (0 <= nx && nx < N && 0 <= ny && ny < M && field[nx][ny] === 'W') {
                dfs(nx, ny)
            }
        }
    }
}

function solve() {
    let res = 0;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (field[i][j] === 'W') {
                dfs(i, j);
                res++
            }
        }
    }

    return res;
}

console.log(solve());
