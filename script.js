//Import Pixi JS
const PIXI = await import("https://cdn.jsdelivr.net/npm/pixi.js@7.x/dist/pixi.min.mjs");

//Import filters
const PIXIFilters = await import("https://cdn.jsdelivr.net/npm/pixi-filters@latest/dist/pixi-filters.min.mjs");

document.addEventListener("DOMContentLoaded", () => {
    // Get the div from Webflow
    const container = document.getElementById("pixi-container");
  // Create a PixiJS application
    const app = new PIXI.Application({
        width: 320,
        height: 320,
        backgroundColor: 0x1099bb
    });
  container.appendChild(app.view);
  const sprite = PIXI.Sprite.from("https://pixijs.com/assets/bunny.png");
    sprite.x = app.screen.width / 2;
    sprite.y = app.screen.height / 2;
    sprite.anchor.set(0.5);
    app.stage.addChild(sprite);

    // Apply a filter (e.g., BlurFilter)
    const blurFilter = new PIXIFilters.BlurFilter();
    sprite.filters = [blurFilter];

    // Adjust blur strength
    blurFilter.blur = 5;
  });
