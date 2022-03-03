// As soon as the page fully loads, create a 16x16 grid of divs inside the canvas container
window.addEventListener("load", generate_canvas(256));

// Creates a canvas with (num) squares divs
function generate_canvas(num) {
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
    let size = 10 * items_per_column;

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

// Adds functionality to the top buttons
function manage_top_buttons() {
    let clear_btn = document.querySelector(".clear");
    let sizing_btn = document.querySelector(".sizing");

    clear_btn.addEventListener("click", clear_canvas);
    sizing_btn.addEventListener("click", resize_canvas);
}

// Uhmm, it clears the canvas
// by removing the class added to them when drawing
function clear_canvas() {
    let rem = document.querySelectorAll(".container .grid_item");
    rem = Array.from(rem);

    rem.forEach((pixel) => pixel.classList.remove("shine"));
}

// Resizes canvas based on user input
function resize_canvas() {
    let squares_per_side = prompt(
        "How many squares per side on the new canvas? (Max. 100)"
    );

    switch (check_if_valid_number(squares_per_side, 0, 100)) {
        case true:
            break;

        case false:
            alert("Not possible");
            return;
        default:
            return "Problem with resize_canvas() function";
    }

    let container = document.querySelector(".container");

    let grid_items = Array.from(document.querySelectorAll(".grid_item"));
    let grid_item = grid_items[0];

    // Removes all pixels from the previous canvas
    switch (true) {
        case container.contains(grid_item):
            purge_all_children(container);
            break;

        default:
            return "Problem when resize_canvas() function";
    }

    squares_per_side = Number(squares_per_side);

    // Creates a new, resized canvas
    generate_canvas(squares_per_side ** 2);
}

// Checks if the user input is a valid number based on min and max values
function check_if_valid_number(number, min, max) {
    num = Number(number);

    switch (true) {
        case isNaN(number):
            return false;

        case num > max:
            return false;

        case num <= min:
            return false;

        case num > min && num <= max:
            return true;

        default:
            return "Problem with check_if_valid_number() function";
    }
}

// Removes all children from a parent
function purge_all_children(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

manage_top_buttons();
