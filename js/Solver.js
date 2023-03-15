export class Solver {

    constructor(tiles) {
        this.piles = [];
    }

    addPile(pile) {
        this.piles.push(pile);
    }

    solve() {
        this.piles.forEach(tile => {
            tile.match(this.getUpperTiles());
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
