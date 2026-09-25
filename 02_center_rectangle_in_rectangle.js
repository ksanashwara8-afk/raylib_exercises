const r = require("raylib");
const windowWidth = 800;
const windowHeight = 500;
const rectangleWidth = 400;
const rectangleHeight = 200;
const innerRectangleWidth = 200;
const innerRectangleHeight = 100;

function setup() {
    r.InitWindow(windowWidth, windowHeight, "Raylib");
    r.SetTargetFPS(60);
}
function centre(screen, rectangle) {
    return (screen - rectangle) / 2;
}

function draw() {
    const x = centre(windowWidth, rectangleWidth);
    const y = centre(windowHeight, rectangleHeight);
    const a = centre(windowWidth, innerRectangleWidth);
    const b = centre(windowHeight, innerRectangleHeight);
    r.BeginDrawing();
    r.ClearBackground(r.BLUE);

    r.DrawRectangle(x, y, rectangleWidth, rectangleHeight, r.WHITE);
    r.DrawRectangle(a, b, innerRectangleWidth, innerRectangleHeight, r.RED);

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
