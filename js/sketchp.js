// As soon as the page fully loads, create 16 divs inside the container

// How to make something activate on load?

window.addEventListener("load", generate_grid_items(256));

function generate_grid_items(num) {
    let container = document.querySelector(".container");

    for (let i = 0; i < num; i++) {
        let grid_item = document.createElement("div");
        grid_item.classList.toggle("grid_item");
        //   grid_item.textContent = `${i + 1}`;
        //   grid_item.setAttribute("style", `height: 50px; width: 50px`);

        container.appendChild(grid_item);
    }

    let items_per_column = Math.sqrt(num);
    let size = 20 * items_per_column;

    container.setAttribute(
        "style",
        `grid-template-columns: repeat(${items_per_column}, 1fr); height: ${size}px; width: ${size}px`
    );

    draw();
}

function draw() {
    let grid_items = document.querySelectorAll(".grid_item");
    grid_items = Array.from(grid_items);

    grid_items.forEach((g_item) => {
        g_item.addEventListener("mouseover", change_color);
    });
}

function change_color(square) {
    square.target.classList.toggle("shine");
}
