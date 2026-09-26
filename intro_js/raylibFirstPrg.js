const r = require("raylib");

r.InitWindow(800, 400, "Raylib");
r.SetTargetFPS(60);

while (!r.WindowShouldClose()) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    r.DrawRectangle(200, 100, 100, 100, r.WHITE);
    r.DrawRectangle(500, 100, 100, 100, r.WHITE);

    r.EndDrawing();
}

r.CloseWindow();
