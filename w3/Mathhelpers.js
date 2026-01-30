function squareRoot(num) {
    return Math.sqrt(num);
}

function square(num) {
    return num * num;
}

function distance(x1, y1, x2, y2) {
    return squareRoot(square(x2 - x1) + square(y2 - y1));
}

module.exports = { distance };