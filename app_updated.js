let board = [
    10,
    20,
    30,
    40,
    50,
    60,
    70,
    80,
    90,
    100,
    110,
    120,
    130,
    140,
    150,
    160,
];

const player1_button = document.getElementById("player1");
const player2_button = document.getElementById("player2");

console.log(player1_button + " " + player2_button);

class player {

    constructor(name, pos, money) {
        this.name = name;
        this.pos = pos;
        this.money = money;
    }

    roll_dice() {
        let pos = Math.floor(Math.floor * 6) + 1;
        console.log(pos);
        this.updatePostion(pos);
    }

    updatePostion(pos) {
        this.pos += pos;
        console.log(this.pos);
        this.updateMoney();
    }

    updateMoney() {
        if (this.pos < board.length) {
            this.money -= board(this.pos);
            this.money -= board;
        } else {
            this.pos %= 15;
            this.money -= board(this.pos);
        }
        console.log(player1);
        console.log(player2);
    }
}

let player1 = new player("FACEPREP", 0, 1000);
let player2 = new player("ProGrad", 0, 1000);

player1_button.addEventListener('click', function () {
    player1.roll_dice();
}, false);

player2_button.addEventListener('click', function () {
    player2.roll_dice();
}, false);