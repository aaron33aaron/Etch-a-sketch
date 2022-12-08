// Aaron LeBlanc, 2022-12-08, SketchPad Program

let color = 'black';
let click = true;

function populateBoard(size) {
    let board = document.querySelector('.board')
    let squares = board.querySelectorAll('div')
    // clearing out any existing squares on the board
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`

    // setting amount of squares
    let amount = size * size
    for(let i = 0; i < amount; i++) {
        let square = document.createElement('div')
        square.addEventListener('mouseover', colorSquare);
        square.style.backgroundColor = 'white';
        board.insertAdjacentElement('beforeend', square)
    }

}

populateBoard(16);

function changeSize(input) {
    if (input >=2 && input <= 100) {
        document.querySelector('.error').style.display = 'none';
        populateBoard(input)
    }
    else {
        document.querySelector('.error').style.display = 'flex';
        console.log("too many squares");
    }   
}

function colorSquare() {
    if (click) {
        if(color === 'rainbow') {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        }
        else {
            // this refers to any square/div that the mouse over event is triggered on, it is then used to change the color of the square
            this.style.backgroundColor = color;
        }
    }
}

function changeColor(choice) {
    color = choice;
}

function resetBoard() {
    let board = document.querySelector('.board')
    let squares = board.querySelectorAll('div')
    // clearing out any existing squares on the board
    squares.forEach((div) => div.style.backgroundColor = "white");
}

document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.tagName != 'BUTTON') {
        // Assigning the value of whatever click isn't to click
        click = !click;
        if (click) {
            document.querySelector('.mode').textContent = "Mode: Drawing"
        } else {
            document.querySelector('.mode').textContent = "Mode: Not Drawing"
        }
    }
})