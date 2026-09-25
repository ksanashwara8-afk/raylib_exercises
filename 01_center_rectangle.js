const r = require("raylib");
const windowWidth = 800;
const windowHeight = 500;
const rectangleWidth = 400;
const rectangleHeight = 200;

function setup() {
    r.InitWindow(windowWidth, windowHeight, "Raylib");
    r.SetTargetFPS(60);
}

function center(screen, rectangle) {
    return (screen - rectangle) / 2;
}

function draw() {
    const x = center(windowWidth, rectangleWidth);
    const y = center(windowHeight, rectangleHeight);
    r.BeginDrawing();
    r.ClearBackground(r.BLUE);
    r.DrawRectangle(x, y, rectangleWidth, rectangleHeight, r.WHITE);
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
