function center(total, part) {
    return (total - part) / 2;
}
function sqrt(a) {
    return a ** 0.5;
}
function squareOf(a) {
    return a * a;
}
function distance(x1, y1, x2, y2) {
    return sqrt(squareOf(x1 - x2) + squareOf(y1 - y2));
}
module.exports = {
    center,
    sqrt,
    squareOf,
    distance,
}