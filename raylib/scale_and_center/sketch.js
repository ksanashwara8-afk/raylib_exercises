const r = require("raylib");
const s = require("./math_functions.js");

const WIDTH = 800;
const HEIGHT = 500;
const widthPerc = 0.25;
const heightPerc = 0.25;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(WIDTH, HEIGHT, "Raylib");
    r.SetTargetFPS(60);
}
function innerRectanagleSize(ref, size) {
    return ref * size;
}

function draw() {
    const rectWidth = 400;
    const rectHeight = 200;
    const innerRectWidth = innerRectanagleSize(widthPerc, rectWidth);
    const innerRectHeight = innerRectanagleSize(heightPerc, rectHeight);

    const x = s.center(WIDTH, rectWidth);
    const y = s.center(HEIGHT, rectHeight);

    const a = s.center(WIDTH, innerRectWidth);
    const b = s.center(HEIGHT, innerRectHeight);

    r.BeginDrawing();
    r.ClearBackground(r.BLUE);

    r.DrawRectangle(x, y, rectWidth, rectHeight, r.WHITE);
    r.DrawRectangle(a, b, innerRectWidth, innerRectHeight, r.RED);

    r.EndDrawing();
}

function teardown() {
    r.CloseWindow();
}

module.exports = {
    running,
    setup,
    draw,
    teardown,
}