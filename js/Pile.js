export class Pile {

    constructor() {
        this.tiles = [];
    }

    addTile(tile) {
        this.tiles.push(tile);
    }

    /**
     * returns an array of the maximum movable cards in that pile
     * @returns 
     */
    getMovables() {
        let index = this.tiles.length;
        const upper = this.tiles[index - 1];
        index--;

        let movables = [upper];

        for (let i = index; i >= 0; --i) {
            const tile = this.tiles[i];
            if (tile.color == upper.color && tile.number == movables[movables.length - 1].number + 1 ) {
                movables.push(tile);
            }
        }

        return movables;
    }

}
