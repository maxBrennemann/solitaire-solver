import { Solver } from "./js/Solver.js";
import { Pile } from "./js/Pile.js";
import { Tile } from "./js/Tile.js";
import { Path } from "./js/Path.js";

var game = {};

if (document.readyState !== 'loading' ) {
    init();
} else {
    document.addEventListener('DOMContentLoaded', function () {
        init();
    });
}

function init() {
    const cols = document.querySelectorAll(".cards");
    const template = document.querySelector("#cardTemplate");
    const cardSolver = new Solver();
    game.solver = cardSolver;

    let iterations = 5;
    for (let i = 1; i <= 10; i++) {
        const anchor = document.querySelector(`#col-${i}`);

        if (i > 4) {
            iterations = 4;
        }

        const pile = new Pile();
        cardSolver.addPile(pile);

        for (let n = 0; n < iterations; n++) {
            const container = template.content.cloneNode(true);
            const title = container.querySelector(".card-title");
            title.placeholder = "Karten";
            title.addEventListener("change", (e) => {

            });
            anchor.appendChild(container);

            const tile = new Tile(container);
            pile.addTile(tile);
        }
    }
}
