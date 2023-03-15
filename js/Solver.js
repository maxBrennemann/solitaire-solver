export class Solver {

    constructor() {
        this.piles = [];
    }

    addPile(pile) {
        this.piles.push(pile);
    }

    solve() {
        this.piles.map(pile => {
            return pile.getMovables();
        });
    }

    getUpperTiles() {
        var tiles = [];
        this.piles.forEach(t => {
            tiles.push(t[0]);
        })

        return tiles;
    }

}
