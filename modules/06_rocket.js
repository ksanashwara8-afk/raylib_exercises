const r = require("raylib");
const WIDTH = 800;
const HEIGHT = 600;
const rectWIdth = 80;
const rectHeight = 100;

let x = 400;
let y = HEIGHT;
let size = 30;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(WIDTH, HEIGHT, "Raylib");
    r.SetTargetFPS(60);
}
function update() {
    y = y - 2;
    if (y < size) {
        y = HEIGHT;
    }
}

function rect() {
    r.DrawRectangle(x, y, rectWIdth, rectHeight, r.WHITE);
}
function triangleUp() {
    r.DrawTriangle(
        { x: x, y: y - 40 },
        { x: x - 10, y: 30 },
        { x: x + 90, y: 30 },
        r.RED
    );
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    rect();
    triangleUp();
    r.EndDrawing();
}

function teardown() {
    r.CloseWindow();
}

module.exports = {
    running,
    setup,
    update,
    draw,
    teardown,
}

