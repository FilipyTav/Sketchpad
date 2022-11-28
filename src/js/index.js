import "../styles/sketchp.css";
import { DOM_el } from "./DOM_el";

// As soon as the page fully loads calls the main function
window.addEventListener("load", main());

// Creates a canvas with (num) squares divs
function generate_canvas(num) {
    let items_per_column = Math.sqrt(num);

    // Creates divs based on the argument number
    for (let i = 0; i < num; i++) {
        const grid_item = DOM_el.new_el("div");

        grid_item.classList.toggle("grid_item");
        grid_item.setAttribute(
            "style",
            `height: ${500 / items_per_column}px;
             width: ${500 / items_per_column}px`,
        );

        DOM_el.canvas.appendChild(grid_item);
    }

    // Changes the canvas size and grid layout based on the argument number
    DOM_el.canvas.setAttribute(
        "style",
        `grid-template-columns: repeat(${items_per_column}, 1fr)`,
    );

    draw();
}

// Attach event listeners and change the style of each div inside the canvas
function draw() {
    DOM_el.grid_items().forEach((g_item) => {
        g_item.addEventListener("mouseover", change_color);
    });
}

// Changes the color of the divs by adding a class to it
function change_color(square) {
    square.target.classList.toggle("shine");
}

// Adds functionality to the top buttons
function manage_top_buttons() {
    DOM_el.clear_btn.addEventListener("click", clear_canvas);
    DOM_el.sizing_input.addEventListener("input", resize_canvas);
}

// Uhmm, it clears the canvas
// by removing the class added to them when drawing
function clear_canvas() {
    DOM_el.grid_items().forEach((pixel) => pixel.classList.remove("shine"));
}

// Resizes canvas based on user input
function resize_canvas() {
    let squares_per_side = DOM_el.sizing_input.value;

    switch (check_if_valid_number(squares_per_side, 1, 100)) {
        case true:
            break;

        case false:
            alert("Not possible");
            return;
        default:
            return "Problem with resize_canvas() function";
    }

    // Changes the output to display the selected value
    DOM_el.sizing_output.value = DOM_el.sizing_input.value;

    const grid_item = DOM_el.grid_items()[0];

    // Removes all pixels from the previous canvas
    switch (true) {
        case DOM_el.canvas.contains(grid_item):
            purge_all_children(DOM_el.canvas);
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
    const num = Number(number);

    switch (true) {
        case isNaN(number):
            return false;

        case num > max:
            return false;

        case num < min:
            return false;

        case num >= min && num <= max:
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

function main() {
    // Create a 16x16 grid of divs inside the canvas when loading the page
    generate_canvas(256);

    // Activate top buttons
    manage_top_buttons();
}
