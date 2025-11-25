import { Solver } from "./js/Solver.js";
import { Pile } from "./js/Pile.js";
import { Tile } from "./js/Tile.js";
import { Path } from "./js/Path.js";

const cards = {};
const config = {
    colors: 4,
    columns: 10,
    decks: 5,
    numbers: ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"],
    isEmptyAllowed: true,
};

function init() {
    const cardContainer = document.getElementById("cardContainer");
    const placeholders = document.getElementById("placeholders");
    for (let i = 0; i < config.columns; i++) {
        const column = document.createElement("div");
        cardContainer.appendChild(column);

        const placeholder = generatePlaceholder();
        placeholders.appendChild(placeholder);
    }
}

const generatePlaceholder = () => {
    const template = document.getElementById("placeholderTemplate");
    return template.content.cloneNode(true);
}

const generateEmpytCard = () => {

}

/**
 * @param {*} number 
 * @param {*} color (Herz: 1, Karo: 2, Peak: 3, Kreuz: 4)
 */
const generateCard = (number, color) => {

}

if (document.readyState !== 'loading' ) {
    init();
} else {
    document.addEventListener('DOMContentLoaded', function () {
        init();
    });
}
