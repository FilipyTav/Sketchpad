const DOM_el = (function () {
    const canvas = document.querySelector(".canvas");

    const grid_items = () => {
        return Array.from(document.querySelectorAll(".grid_item"));
    };

    let clear_btn = document.querySelector(".clear");
    let sizing_btn = document.querySelector(".sizing");

    const new_el = (element) => {
        return document.createElement(element);
    };

    return {
        canvas,
        grid_items,
        clear_btn,
        sizing_btn,
        new_el,
    };
})();

export { DOM_el };
