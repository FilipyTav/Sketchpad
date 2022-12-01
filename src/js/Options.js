import { DOM_el } from "./DOM_el";

const Options = (function () {
    const random_color = () => {
        return "#" + ((Math.random() * 0xffffff) << 0).toString(16);
    };

    // Returns a random interger between min (inclusive) and max (exclusive)
    const random_int = (min, max) => {
        return Math.round(Math.random() * (max - min) + min);
    };

    const color_conversions = (function () {
        const hex_to_rgb = (hex) => {
            var bigint = parseInt(hex, 16);
            var r = (bigint >> 16) & 255;
            var g = (bigint >> 8) & 255;
            var b = bigint & 255;

            return [r, g, b].join();
        };

        const rgba_2_hex = (rgba) =>
            `#${rgba
                .match(
                    /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.{0,1}\d*))?\)$/,
                )
                .slice(1)
                .map((n, i) =>
                    (i === 3 ? Math.round(parseFloat(n) * 255) : parseFloat(n))
                        .toString(16)
                        .padStart(2, "0")
                        .replace("NaN", ""),
                )
                .join("")}`;

        return {
            hex_to_rgb,
            rgba_2_hex,
        };
    })();

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
                    return (pixel, current_color) => {
                        pixel.style.setProperty(
                            "--bg_color",
                            value.toLowerCase(),
                        );

                        if (
                            pixel.classList.contains("shine") &&
                            current_color === value
                        ) {
                            pixel.classList.toggle("shine");
                        } else if (
                            pixel.classList.contains("shine") &&
                            current_color !== value
                        ) {
                            pixel.style.setProperty("--bg_color", value);
                        } else {
                            pixel.classList.toggle("shine");
                        }
                    };
                },
            };
        })(),

        rainbow: (function () {
            let value = random_color();

            const intervals = {};

            const clear_intervals = () => {
                for (const id in intervals) {
                    clearInterval(intervals[id]);
                }

                DOM_el.grid_items().forEach(
                    (item) => (item.style.transition = "none"),
                );
            };

            return {
                get value() {
                    return value;
                },

                get config() {
                    return (pixel) => {
                        pixel.style.setProperty(
                            "--bg_color",
                            random_color().toLowerCase(),
                        );

                        pixel.style.setProperty(
                            "transition",
                            "background 1s ease-in-out",
                        );

                        pixel.classList.toggle("shine");

                        const id = setInterval(() => {
                            pixel.style.setProperty(
                                "--bg_color",
                                random_color().toLowerCase(),
                            );
                        }, 1000);

                        intervals[id] = id;
                    };
                },

                get clear_intervals() {
                    return clear_intervals;
                },
            };
        })(),

        gray: (function () {
            let luminosity = 0;

            let value = `rgba(${luminosity}, ${luminosity}, ${luminosity})`;

            return {
                get value() {
                    return value;
                },

                get config() {
                    return (pixel) => {
                        pixel.style.setProperty("--bg_color", value);

                        luminosity = (luminosity + 15) % 255;

                        value = `rgba(${luminosity}, ${luminosity}, ${luminosity})`;

                        pixel.classList.toggle("shine");
                    };
                },
            };
        })(),

        random: (function () {
            let value = random_color();

            return {
                get value() {
                    return value;
                },

                get config() {
                    return (pixel) => {
                        pixel.style.setProperty(
                            "--bg_color",
                            random_color().toLowerCase(),
                        );

                        pixel.classList.toggle("shine");
                    };
                },
            };
        })(),
    };

    let current_style = ["color"];

    // Changes the color of the divs by adding a class to it
    const change_color = (square) => {
        const details = getComputedStyle(square);
        const style = drawing_styles[current_style[0]];

        const current_bg = color_conversions.rgba_2_hex(
            details.getPropertyValue("background-color"),
        );

        style.config(square, current_bg);
    };

    const attach_listeners = (function () {
        DOM_el.options.close_btn.addEventListener("click", () => {
            DOM_el.options.container.classList.remove("active");
        });

        DOM_el.options.open_btn.addEventListener("click", () => {
            DOM_el.options.container.classList.add("active");
        });

        DOM_el.options.color_picker.addEventListener("input", (e) => {
            current_style[0] = "color";
            const chosen_color = e.target.value;

            drawing_styles["color"]["value"] = chosen_color;
        });

        DOM_el.options.random.addEventListener("click", () => {
            current_style[0] = "random";
        });

        DOM_el.options.gray.addEventListener("click", () => {
            current_style[0] = "gray";
        });

        DOM_el.options.rainbow.addEventListener("click", () => {
            current_style[0] = "rainbow";
        });
    })();

    return { change_color, drawing_styles };
})();

export { Options };
