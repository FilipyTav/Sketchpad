import "../styles/sketchp.css";

import { Canvas } from "./Canvas";
import { DOM_el } from "./DOM_el";

// Adds functionality to the top buttons
const manage_top_buttons = () => {
    DOM_el.clear_btn.addEventListener("click", Canvas.clear);
    DOM_el.sizing_input.addEventListener("input", Canvas.resize);
};

const main = () => {
    // Create a 16x16 grid of divs inside the canvas when loading the page
    Canvas.generate(256);

    // Activate top buttons
    manage_top_buttons();
};

// As soon as the page fully loads calls the main function
window.addEventListener("load", main);
