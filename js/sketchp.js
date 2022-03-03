// As soon as the page fully loads, create a 16x16 grid of divs inside the container
window.addEventListener("load", generate_grid_items(256));

// Creates a canvas with (num) squares divs
function generate_grid_items(num) {
    let container = document.querySelector(".container");

    // Creates divs based on the argument number
    for (let i = 0; i < num; i++) {
        let grid_item = document.createElement("div");
        grid_item.classList.toggle("grid_item");
        //   grid_item.textContent = `${i + 1}`;
        //   grid_item.setAttribute("style", `height: 50px; width: 50px`);

        container.appendChild(grid_item);
    }

    let items_per_column = Math.sqrt(num);

    // The container is a square. This determines the sides' size
    let size = 20 * items_per_column;

    // Changes the container size and grid layout based on the argument number
    container.setAttribute(
        "style",
        `grid-template-columns: repeat(${items_per_column}, 1fr); height: ${size}px; width: ${size}px`
    );

    draw();
}

// Attach event listeners and change the style of each div inside the container
function draw() {
    let grid_items = document.querySelectorAll(".grid_item");
    grid_items = Array.from(grid_items);

    grid_items.forEach((g_item) => {
        g_item.addEventListener("mouseover", change_color);
    });
}

// Changes the color of the divs by adding a class to it
function change_color(square) {
    square.target.classList.toggle("shine");
}
