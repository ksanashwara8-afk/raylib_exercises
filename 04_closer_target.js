const r = require("raylib");
const WIDTH = 800;
const HEIGHT = 500;
const sourceX = WIDTH / 6;
const sourceY = HEIGHT / 6;

function setup() {
    r.InitWindow(WIDTH, HEIGHT, "Raylib");
    r.SetTargetFPS(60);
}
function sqrt(a) {
    return a ** 0.5;
}
function squareOf(a) {
    return a * a;
}
function distance(x, y) {
    return sqrt(squareOf(x - sourceX) + squareOf(y - sourceY));
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
        distance(circle1X, circle1Y) <
        distance(circle2X, circle2Y)
    ) {
        r.DrawLine(sourceX, sourceY, circle1X, circle1Y, r.BLACK);
    } else {
        r.DrawLine(sourceX, sourceY, circle2X, circle2Y, r.BLACK);
    }

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
