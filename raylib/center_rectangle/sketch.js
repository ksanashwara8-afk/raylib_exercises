const r = require("raylib");
const s = require("./math_functions.js");

const WIDTH = 800;
const HEIGHT = 500;

function running() {
    return !r.WindowShouldClose();
}
function setup() {
    r.InitWindow(WIDTH, HEIGHT, "Raylib");
    r.SetTargetFPS(60);
}

function draw() {
    const rectWidth = 400;
    const rectHeight = 200;
    const x = s.center(WIDTH, rectWidth);
    const y = s.center(HEIGHT, rectHeight);
    r.BeginDrawing();
    r.ClearBackground(r.BLUE);
    r.DrawRectangle(x, y, rectWidth, rectHeight, r.WHITE);
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