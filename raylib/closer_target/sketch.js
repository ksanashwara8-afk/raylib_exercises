const r = require("raylib");
const s = require("./math_functions.js");

const WIDTH = 800;
const HEIGHT = 500;
const sourceX = WIDTH / 6;
const sourceY = HEIGHT / 6;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(WIDTH, HEIGHT, "Raylib");
    r.SetTargetFPS(60);
}

function draw() {
    const circle1X = WIDTH / 2;
    const circle1Y = HEIGHT / 6;
    const circle2X = 700;
    const circle2Y = 450;

    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    r.DrawCircle(sourceX, sourceY, 45, r.BLUE);
    r.DrawCircle(circle1X, circle1Y, 45, r.RED);
    r.DrawCircle(circle2X, circle2Y, 45, r.RED);

    if (
        s.distance(circle1X, circle1Y, sourceX, sourceY) <
        s.distance(circle2X, circle2Y, sourceX, sourceY)
    ) {
        r.DrawLine(sourceX, sourceY, circle1X, circle1Y, r.BLACK);
    } else {
        r.DrawLine(sourceX, sourceY, circle2X, circle2Y, r.BLACK);
    }

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