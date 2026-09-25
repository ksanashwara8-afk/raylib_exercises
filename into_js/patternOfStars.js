const input = 4;
let n = 0;
function star(n) {
    if (n === 0) {
        return "";
    }
    return `*${star(n - 1)}`;
}
function shrinkPattern(n) {
    if (n === 0) {
        return "";
    }
    console.log(star(n));
    result = `${shrinkPattern(n - 1)}`;
    return result;
}
function growingPattern(n) {
    if (n === 0) {
        return "";
    }
    growingPattern(n - 1);
    console.log(star(n));
    if (n === input) {
        shrinkPattern(n - 1);
    }
}
console.log(growingPattern(input));
