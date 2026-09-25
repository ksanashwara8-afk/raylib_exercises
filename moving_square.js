const r = require("raylib");
const windowWidth = 800;
const windowHeight = 500;
const squareside = 100;
let x = 0;
let y = 0;

function setup() {
    r.InitWindow(windowWidth, windowHeight, "Raylib");
    r.SetTargetFPS(60);
}

function update() {
    x = x + 2;
    if (x > windowWidth) {
        x = -squareside;
    }
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    r.DrawRectangle(x, y, squareside, squareside, r.WHITE);

    r.EndDrawing();
}
function loop() {
    while (!r.WindowShouldClose()) {
        update();
        draw();
    }
}

function main() {
    setup();
    loop();
    r.CloseWindow();
}

main();

