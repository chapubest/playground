// 取随机整数 包含min 包含max
function getRandomNum(min, max) {
    return Math.floor(getRandom(min, max + 1))
}
// 取随机数 包含min 不包含max
function getRandom(min = 0, max = 1) {
    return Math.random() * (max - min) + min
}