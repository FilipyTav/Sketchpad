const DOM_el = (function () {
    const canvas = document.querySelector(".canvas");

    const grid_items = () => {
        return Array.from(document.querySelectorAll(".grid_item"));
    };

    const first_grid_item = () => {
        return document.querySelector(".grid_item");
    };

    const nav = (function () {
        const container = document.querySelector("nav.header");

        const buttons = {
            clear: container.querySelector(".clear"),
            eraser: container.querySelector(".eraser"),
            interaction: container.querySelector(".interaction"),
        };

        return { container, buttons };
    })();

    const new_el = (element) => {
        return document.createElement(element);
    };

    const options = (function () {
        const container = document.querySelector(".options");

        const items = container.querySelectorAll(".option");

        const open_btn = document.querySelector("button.open_options");
        const close_btn = container.querySelector("button.close");

        const color_picker = container.querySelector("#color_picker");
        const sizing_input = document.querySelector(".sizing_input");
        const sizing_output = document.querySelector(".sizing_output");

        const random = container.querySelector(".random");
        const gray = container.querySelector(".gray");
        const rainbow = container.querySelector(".rainbow");

        return {
            container,
            items,
            open_btn,
            close_btn,
            color_picker,
            sizing_input,
            sizing_output,
            random,
            gray,
            rainbow,
        };
    })();

    const shining = () => {
        return canvas.querySelectorAll(".shining");
    };

    return {
        canvas,
        grid_items,
        first_grid_item,
        new_el,
        nav,
        options,
        shining,
    };
})();

export { DOM_el };
