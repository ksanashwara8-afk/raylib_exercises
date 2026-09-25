const r = require("raylib");

function setup() {
    const WIDTH = 800;
    const HEIGHT = 500;
    r.InitWindow(WIDTH, HEIGHT, "Raylib");
    r.SetTargetFPS(60);
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

function areCirclesOverlapping(x1, y1, x2, y2, r1, r2) {
    return (distance(x1, y1, x2, y2) <= ((r1) + (r2)))
}

function draw() {
    const c1X = 300;
    const c1Y = 100;

    const c2X = 366;
    const c2Y = 100;
    const c1Rad = 30;
    const c2Rad = 35;

    const circleColor = areCirclesOverlapping(c1X, c1Y, c2X, c2Y, c1Rad, c2Rad) ? r.RED : r.BLACK;

    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    r.DrawCircle(c1X, c1Y, c1Rad, circleColor);
    r.DrawCircle(c2X, c2Y, c2Rad, circleColor);

    r.EndDrawing();
}

function loop() {
    while (!r.WindowShouldClose()) {
        draw();
    }
}

function main() {
    setup();
    loop();
    r.CloseWindow();
}

main();
