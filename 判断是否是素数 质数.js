function isPrime(num) {
    if (num === 2 || num === 3) {
        return true
    }

    // 与6的倍数相邻的数 不是质数
    if (num % 6 !== 1 && num % 6 !== 5) {
        return false
    }
    const tmp = Math.floor(Math.sqrt(num));
    for (let i = 5; i <= tmp; i++) {
        if (num % i === 0 || num % (i + 2) === 2) {
            return false
        }
    }
    return true
}


