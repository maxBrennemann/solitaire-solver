import { Solver } from "./js/Solver.js";
import { Pile } from "./js/Pile.js";
import { Tile } from "./js/Tile.js";
import { Path } from "./js/Path.js";

const cards = [];

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
        //column.classList.add("flex", "flex-col", "gap-2");
        cardContainer.appendChild(column);

        const placeholder = generatePlaceholder();
        placeholders.appendChild(placeholder);
    }

    const addButton = document.getElementById("add");
    addButton.addEventListener("click", addCards);

    const newRowButton = document.getElementById("newRow");
    newRowButton.addEventListener("click", addNewRow);

    const solveButton = document.getElementById("solve");
    solveButton.addEventListener("click", solve);
}

const addCards = () => {
    const cardContainer = document.getElementById("cardContainer");
    const placeholders = document.getElementById("placeholders");
    let column = 0;
    Array.from(placeholders.children).forEach(card => {
        const cardType = card.querySelector('select[name="suit"]').value;
        const cardNumber = card.querySelector('input[name="cardNumber"]').value;
        const isChecked = card.querySelector('input[type="checkbox"]').checked;

        let newCard;
        // isChecked means there is a card to add, but it can also be empty
        if (isChecked) {
            if (cardNumber === "" && cardType === "") {
                newCard = generateEmpytCard();
                cardContainer.children[column].appendChild(newCard);
            } else {
                newCard = generateCard(cardNumber, cardType);
                cardContainer.children[column].appendChild(newCard);
            }

            cards[column] = newCard;
        }
        column++;
    });
}

const addNewRow = () => { }

const solve = () => { }

const generatePlaceholder = () => {
    const template = document.getElementById("placeholderTemplate");
    return template.content.cloneNode(true);
}

const generateEmpytCard = () => {
    const div = document.createElement("div");
    div.classList.add("bg-transparent", "rounded-md", "p-2");
    return div;
}

/**
 * @param {*} number 
 * @param {*} color (Herz: 1, Karo: 2, Peak: 3, Kreuz: 4)
 */
const generateCard = (number, color) => {
    const template = document.getElementById("cardTemplate");
    const card = template.content.cloneNode(true);
    card.querySelector(".cardNumber").textContent = number;
    let suitSymbol = "";
    switch (color) {
        case "hearts":
            suitSymbol = "♥️";
            break;
        case "diamonds":
            suitSymbol = "♦️";
            break;
        case "clubs":
            suitSymbol = "♣️";
            break;
        case "spades":
            suitSymbol = "♠️";
            break;
    }
    card.querySelector(".cardSuit").textContent = suitSymbol;
    return card;
}

if (document.readyState !== 'loading') {
    init();
} else {
    document.addEventListener('DOMContentLoaded', function () {
        init();
    });
}
