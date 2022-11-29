import { DOM_el } from "./DOM_el";

const Options = (function () {
    const attach_listeners = (function () {
        DOM_el.options.close_btn.addEventListener("click", (e) => {
            DOM_el.options.container.classList.remove("active");
        });

        DOM_el.options.open_btn.addEventListener("click", (e) => {
            DOM_el.options.container.classList.add("active");
        });
    })();

    return {};
})();

export { Options };
