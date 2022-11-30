import { DOM_el } from "./DOM_el";

const Canvas = (function () {
    const info = () => {
        const canv_rect = DOM_el.canvas.getBoundingClientRect();

        const height = canv_rect.height;
        const width = canv_rect.width;

        const style = window.getComputedStyle
            ? getComputedStyle(DOM_el.canvas, null)
            : DOM_el.canvas.currentStyle;

        return {
            height,
            width,
            style,
        };
    };

    // Changes the size of each pixel according to the screen size
    const adapt_pixels = (element, { height, width, style }) => {
        const items_per_column = DOM_el.sizing_output.value;

        const adapt = (el) => {
            el.style.setProperty(
                "height",
                `${
                    (height - parseInt(style.borderTopWidth) * 2) /
                    items_per_column
                }px`,
            );

            el.style.setProperty(
                "width",
                `${
                    (width - parseInt(style.borderLeftWidth) * 2) /
                    items_per_column
                }px`,
            );
        };

        element
            ? adapt(element)
            : DOM_el.grid_items().forEach((item) => adapt(item));
    };

    // Creates a canvas with (num) squares divs
    const generate = (num) => {
        const items_per_column = Math.sqrt(num);

        const details = info();

        // Creates divs based on the argument number
        for (let i = 0; i < num; i++) {
            const grid_item = DOM_el.new_el("div");

            grid_item.classList.toggle("grid_item");
            adapt_pixels(grid_item, details);

            grid_item.style.setProperty("--bg_color", "royalblue");

            DOM_el.canvas.appendChild(grid_item);
        }

        // Changes the canvas size and grid layout based on the argument number
        DOM_el.canvas.setAttribute(
            "style",
            `grid-template-columns: repeat(${items_per_column}, 1fr)`,
        );

        draw();
    };

    const drawing_styles = {
        color: (function () {
            let value = "#5f9ea0";

            return {
                get value() {
                    return value;
                },
                set value(new_value) {
                    value = new_value;
                },

                get config() {
                    return (pixel) =>
                        pixel.style.setProperty(
                            "--bg_color",
                            value.toLowerCase(),
                        );
                },
            };
        })(),
        rainbow: "",
        gray: "",
        random: "",
    };

    let current_style = ["color"];

    // Attach event listeners and change the style of each div inside the canvas
    const draw = () => {
        DOM_el.grid_items().forEach((g_item) => {
            g_item.addEventListener("mouseover", (e) =>
                change_color(e.target, drawing_styles[current_style[0]]),
            );
        });
    };

    // Removes all children from a parent
    const purge_all_children = (parent) => {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    };

    const hex_to_rgb = (hex) => {
        var bigint = parseInt(hex, 16);
        var r = (bigint >> 16) & 255;
        var g = (bigint >> 8) & 255;
        var b = bigint & 255;

        return [r, g, b].join();
    };

    const rgba_2_hex = (rgba) =>
        `#${rgba
            .match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.{0,1}\d*))?\)$/)
            .slice(1)
            .map((n, i) =>
                (i === 3 ? Math.round(parseFloat(n) * 255) : parseFloat(n))
                    .toString(16)
                    .padStart(2, "0")
                    .replace("NaN", ""),
            )
            .join("")}`;

    // Changes the color of the divs by adding a class to it
    const change_color = (square, style) => {
        const details = getComputedStyle(square);

        const bg = rgba_2_hex(details.getPropertyValue("background-color"));

        style.config(square);

        if (square.classList.contains("shine") && bg === style.value) {
            square.classList.toggle("shine");
        } else if (square.classList.contains("shine") && bg !== style.value) {
            square.style.setProperty("--bg_color", style.value);
        } else {
            square.classList.toggle("shine");
        }
    };

    // declare an array for all the timeOuts
    const resize_time_outs = {};

    // to clear them all, just call this
    const clear_resize_tm_ot = () => {
        for (const id in resize_time_outs) {
            clearTimeout(resize_time_outs[id]);
        }
    };

    // Resizes canvas based on user input
    const resize = () => {
        if (resize_time_outs["unique_id"]) clear_resize_tm_ot();

        // Changes the output to display the selected value
        DOM_el.sizing_output.value = DOM_el.sizing_input.value;

        const activate = () => {
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

            // Removes all pixels from the previous canvas
            switch (true) {
                case DOM_el.canvas.contains(DOM_el.first_grid_item()):
                    purge_all_children(DOM_el.canvas);
                    break;

                default:
                    return "Problem when resize_canvas() function";
            }

            squares_per_side = Number(squares_per_side);

            // Creates a new, resized canvas
            Canvas.generate(squares_per_side ** 2);
        };

        resize_time_outs["unique_id"] = setTimeout(() => {
            activate();
        }, 1000);
    };

    // Checks if the user input is a valid number based on min and max values
    const check_if_valid_number = (number, min, max) => {
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
    };

    // Uhmm, it clears the canvas
    // by removing the class added to them when drawing
    const clear = () => {
        DOM_el.grid_items().forEach((pixel) => {
            pixel.classList.remove("shine");
            pixel.style.setProperty("--bg_color", "");
        });
    };

    return { info, generate, drawing_styles, clear, resize, adapt_pixels };
})();

export { Canvas };
