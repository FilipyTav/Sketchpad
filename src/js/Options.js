import { Canvas } from "./Canvas";
import { DOM_el } from "./DOM_el";

const Options = (function () {
    const attach_listeners = (function () {
        DOM_el.options.close_btn.addEventListener("click", (e) => {
            DOM_el.options.container.classList.remove("active");
        });

        DOM_el.options.open_btn.addEventListener("click", (e) => {
            DOM_el.options.container.classList.add("active");
        });

        DOM_el.options.color_picker.addEventListener("input", (e) => {
            const chosen_color = e.target.value;

            Canvas.drawing_styles["color"]["value"] = chosen_color;
        });
    })();

    return {};
})();

export { Options };
