/**
* numbers: from 1 to 13 (1 = Pik, 11 = Bube, 12 = Dame, 13 = König)
* colors: from 1 to 4 (1 = Kreuz, 2 = Pik, 3 = Herz, 4 = Karo)
*/
export class Tile {

    constructor(ref) {
        this.ref = ref;

        this.input = ref.querySelector(".card-title");
        this.input.addEventListener("change", (e) => {
            this.content = e.target.value;
            this.parseInput(this.content);
        });

        this.content = "";
    }

    parseInput(input) {
        if (input.length < 3) {
            return;
        }

        const color = (input.substring(0, 2)).toLowerCase();
        const number = input.substring(2);

        this.color = colors[color];
        if (this.color == null) {
            return;
        }

        this.number = parseInt(number);
        this.showCardPreview();
    }

    showCardPreview() {
        const unicode = cards[this.color][this.number -1 ];

        this.input.classList.add("hidden");
        const span = this.ref.querySelector(".card-icon");
        span.classList.add("w-full");
        span.classList.add("text-5xl");
        span.classList.add("block");

        if (this.color == 3 || this.color == 4) {
            span.classList.add("text-rose-600");
        }

        span.innerHTML = unicode;
    }

    match() {

    }

}

const colors = {
    "kr": 1,
    "pi": 2,
    "he": 3,
    "ka": 4,
};

const cards = {
    1: [
        "🃑",
        "🃒",
        "🃓",
        "🃔",
        "🃕",
        "🃖",
        "🃗",
        "🃘",
        "🃙",
        "🃚",
        "🃛",
        "🃝",
        "🃞",
    ],
    2: [
        "🂡",
        "🂢",
        "🂣",
        "🂤",
        "🂥",
        "🂦",
        "🂧",
        "🂨",
        "🂩",
        "🂪",
        "🂫",
        "🂭",
        "🂮",
    ],
    3: [
        "🂱",
        "🂲",
        "🂳",
        "🂴",
        "🂵",
        "🂶",
        "🂷",
        "🂸",
        "🂹",
        "🂺",
        "🂻",
        "🂽",
        "🂾",
    ],
    4: [
        "🃁",
        "🃂",
        "🃃",
        "🃄",
        "🃅",
        "🃆",
        "🃇",
        "🃈",
        "🃉",
        "🃊",
        "🃋",
        "🃍",
        "🃎",
    ],
}
