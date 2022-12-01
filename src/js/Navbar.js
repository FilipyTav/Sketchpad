import { Canvas } from "./Canvas";
import { DOM_el } from "./DOM_el";
import { Options } from "./Options";

const Navbar = (function () {
    const { clear, interaction } = DOM_el.nav.buttons;

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

        interaction.addEventListener("click", () => {
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
        });
    };

    return { manage_buttons, interaction_types, current_type };
})();

export { Navbar };
