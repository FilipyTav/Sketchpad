import { DOM_el } from "./DOM_el";

const Options = (function () {
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

    // Changes the color of the divs by adding a class to it
    const change_color = (square) => {
        const details = getComputedStyle(square);
        const style = drawing_styles[current_style[0]];

        const bg = color_conversions.rgba_2_hex(
            details.getPropertyValue("background-color"),
        );

        style.config(square);

        if (square.classList.contains("shine") && bg === style.value) {
            square.classList.toggle("shine");
        } else if (square.classList.contains("shine") && bg !== style.value) {
            square.style.setProperty("--bg_color", style.value);
        } else {
            square.classList.toggle("shine");
        }
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

    const attach_listeners = (function () {
        DOM_el.options.close_btn.addEventListener("click", (e) => {
            DOM_el.options.container.classList.remove("active");
        });

        DOM_el.options.open_btn.addEventListener("click", (e) => {
            DOM_el.options.container.classList.add("active");
        });

        DOM_el.options.color_picker.addEventListener("input", (e) => {
            const chosen_color = e.target.value;

            drawing_styles["color"]["value"] = chosen_color;
        });
    })();

    return { change_color };
})();

export { Options };
