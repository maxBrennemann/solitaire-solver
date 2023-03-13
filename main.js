var game = {
    
};

function init() {
    const cols = document.querySelectorAll(".cards");
    const template = document.querySelectorAll("#cardTemplate");
}

/**
 * numbers: from 1 to 13 (1 = Pik, 11 = Bube, 12 = Dame, 13 = König)
 * colors: from 1 to 4 (1 = Kreuz, 2 = Pik, 3 = Herz, 4 = Karo)
 */
class Tile {

    constructor(number, color) {
        this.numer = number;
        this.color = color;
    }

}

class Solver {

    constructor(tiles) {
        this.tiles = tiles;
    }

    solve() {

    }

}

class Path {
    
}
