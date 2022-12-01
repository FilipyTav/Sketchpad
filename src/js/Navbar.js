import { Canvas } from "./Canvas";
import { DOM_el } from "./DOM_el";
import { Options } from "./Options";

const Navbar = (function () {
    const { clear, interaction, eraser, color } = DOM_el.nav.buttons;

    const remove_shine = (e) => {
        const element = e.target;
        if (element === DOM_el.canvas) return;

        Options.drawing_styles.rainbow.clear_interval(element);

        element.classList.remove("shine");
    };

    const modes = {
        eraser: {
            type: "eraser",

            config: {
                add: () => {
                    const type = interaction_types[current_type[0]];

                    type.config.clear();

                    DOM_el.canvas.classList.add("erasing");

                    DOM_el.canvas.addEventListener(
                        type.technical_name,
                        remove_shine,
                    );
                },
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
        pixel: {
            type: "pixel",
        },
    };

    let current_mode = ["pixel"];

    const interaction_types = {
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

    let current_type = ["click"];

    const set_interaction_text = () => {
        interaction.textContent =
            current_type[0].charAt(0).toUpperCase() + current_type[0].slice(1);
    };

    set_interaction_text();

    // Adds functionality to the top buttons
    const manage_buttons = () => {
        clear.addEventListener("click", Canvas.clear);

        DOM_el.options.sizing_input.addEventListener("input", Canvas.resize);

        eraser.addEventListener("click", () => {
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
            if (current_mode[0] === "eraser") modes.eraser.config.clear();

            const current = interaction.textContent.toLowerCase();

            const type = interaction_types[current];

            type.config.clear();

            const index = type.id;

            const next_id = (index + 1) % Object.keys(interaction_types).length;

            for (const interaction in interaction_types) {
                const id = interaction_types[interaction].id;

                if (id === next_id) {
                    current_type[0] = interaction_types[interaction].type;
                    break;
                }
            }

            set_interaction_text();

            const next_type =
                interaction_types[interaction.textContent.toLowerCase()];

            next_type.config.add();

            if (current_mode[0] === "eraser") modes.eraser.config.add();
        });

        color.addEventListener("input", (e) => {
            const chosen_color = e.target.value;

            DOM_el.canvas.style.backgroundColor = chosen_color;
        });
    };

    return { manage_buttons, interaction_types, current_type };
})();

export { Navbar };
