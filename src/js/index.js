import "../styles/sketchp.css";

import { Canvas } from "./Canvas";
import { Navbar } from "./Navbar";

const main = () => {
    // Create a 16x16 grid of divs inside the canvas when loading the page
    Canvas.generate(256);

    // Activate top buttons
    Navbar.manage_buttons();
};

window.addEventListener(
    "resize",
    () => Canvas.adapt_pixels(null, Canvas.info()),
    true,
);

// As soon as the page fully loads calls the main function
window.addEventListener("load", main);
