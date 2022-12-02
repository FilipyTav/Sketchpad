import { Canvas } from "./Canvas";
import { DOM_el } from "./DOM_el";
import { Options } from "./Options";

import html2canvas from "html2canvas";

const Navbar = (function () {
    const { clear, interaction, eraser, color, download } = DOM_el.nav.buttons;

    // Removes any alteration previously made to the pixel
    const remove_shine = (e) => {
        const element = e.target;
        if (element === DOM_el.canvas) return;

        // Removes the interval related to this pixel, in case there is one
        Options.drawing_styles.rainbow.clear_interval(element);

        element.classList.remove("shine");
    };

    // The 'brush' modes
    const modes = {
        // Removes style from a pixel
        eraser: {
            type: "eraser",

            config: {
                // Activates the eraser
                add: () => {
                    const type = interaction_types[current_type[0]];

                    // Remove everything related to the current drawing style
                    type.config.clear();

                    DOM_el.canvas.classList.add("erasing");

                    // Attaches listener for erasing
                    DOM_el.canvas.addEventListener(
                        type.technical_name,
                        remove_shine,
                    );
                },

                // Cancles the eraser
                clear: () => {
                    const type = interaction_types[current_type[0]];

                    type.config.clear();

                    DOM_el.canvas.classList.remove("erasing");

                    DOM_el.canvas.removeEventListener(
                        type.technical_name,
                        remove_shine,
                    );

                    type.config.add();
                },
            },
        },

        // Adds style from a pixel
        pixel: {
            type: "pixel",
        },
    };

    // 'Brush' mode being used at the moment
    const current_mode = ["pixel"];

    // Ways the user can interact with a pixel
    const interaction_types = {
        // By clicking
        click: {
            id: 0,

            type: "click",
            technical_name: "click",

            config: {
                add: () => {
                    DOM_el.grid_items().forEach((item) => {
                        item.addEventListener("click", Options.change_color);
                    });
                },
                clear: () => {
                    DOM_el.grid_items().forEach((item) => {
                        item.removeEventListener("click", Options.change_color);
                    });
                },
            },
        },

        // By just passing the mouse over it
        hover: {
            id: 1,

            type: "hover",
            technical_name: "mouseover",

            config: {
                add: () => {
                    DOM_el.grid_items().forEach((item) => {
                        item.addEventListener(
                            "mouseover",
                            Options.change_color,
                        );
                    });
                },
                clear: () => {
                    DOM_el.grid_items().forEach((item) => {
                        item.removeEventListener(
                            "mouseover",
                            Options.change_color,
                        );
                    });
                },
            },
        },
    };

    // Interaction type currently being used
    const current_type = ["click"];

    // Changes the text to match with the current type
    const set_interaction_text = () => {
        interaction.textContent =
            current_type[0].charAt(0).toUpperCase() + current_type[0].slice(1);
    };

    set_interaction_text();

    const adapt_cloned_pixels = (doc) => {
        // Removes border from canvas
        const canv = doc.querySelector(".canvas");
        canv.style.border = "none";

        const canv_rect = canv.getBoundingClientRect();

        const { height, width } = canv_rect;

        const pixels = canv.querySelectorAll(".grid_item");

        const items_per_column = Number(
            doc.querySelector(".sizing_output").value,
        );

        // Accounts for the border removal
        const adapt = (el) => {
            el.style.setProperty("height", `${height / items_per_column}px`);

            el.style.setProperty("width", `${width / items_per_column}px`);

            el.style.padding = 0;
            el.style.margin = 0;
        };

        pixels.forEach((pixel) => {
            adapt(pixel);
        });
    };

    // Adds functionality to the top buttons
    const manage_buttons = () => {
        // Removes styling from all the pixels
        clear.addEventListener("click", Canvas.clear);

        // Changes the amount of pixels in the canvas
        DOM_el.options.sizing_input.addEventListener("input", Canvas.resize);

        eraser.addEventListener("click", () => {
            // Activates eraser
            eraser.classList.toggle("active");

            switch (current_mode[0]) {
                case "pixel":
                    current_mode[0] = "eraser";
                    modes.eraser.config.add();
                    break;

                case "eraser":
                    current_mode[0] = "pixel";
                    modes.eraser.config.clear();
                    break;
            }
        });

        interaction.addEventListener("click", () => {
            // For handling type changing while in eraser mode
            if (current_mode[0] === "eraser") modes.eraser.config.clear();

            const current = interaction.textContent.toLowerCase();

            const type = interaction_types[current];

            // Removes everything related to the previously used type
            type.config.clear();

            const index = type.id;

            // Id of the next type on the obj
            const next_id = (index + 1) % Object.keys(interaction_types).length;

            // Gets the next type and modifies the current_type variable accordingly
            for (const interaction in interaction_types) {
                const id = interaction_types[interaction].id;

                if (id === next_id) {
                    current_type[0] = interaction_types[interaction].type;
                    break;
                }
            }

            set_interaction_text();

            // The type to be used now
            const next_type =
                interaction_types[interaction.textContent.toLowerCase()];

            // Activates it
            next_type.config.add();

            if (current_mode[0] === "eraser") modes.eraser.config.add();
        });

        color.addEventListener("input", (e) => {
            const chosen_color = e.target.value;

            DOM_el.canvas.style.backgroundColor = chosen_color;
        });

        download.addEventListener("click", async () => {
            // Clones the hole DOM body and changes the style of the cloned canvas
            // TODO: figure out how to remove the blank space between pixels
            const canvas = await html2canvas(DOM_el.canvas, {
                onclone: (doc) => {
                    adapt_cloned_pixels(doc);
                },
            });

            const base64 = canvas.toDataURL("image/jpeg");

            const a = document.createElement("a");
            a.href = base64;

            // Default file name
            a.download = "sketchpad-test.png";
            a.click();
        });
    };

    return { manage_buttons, interaction_types, current_type };
})();

export { Navbar };
