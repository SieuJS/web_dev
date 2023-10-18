
const cell = document.createElement('div');
const chessTable = document.querySelector('.chess-table');
const colors = ['white', 'black'];
const startAscii = 65;
// import chessPiece from './models/chess.js'
import initDD from './utils/drag-drop.js'
// Create cell 
const chessBoard = [];

const createCell = (kind) => {
    const newEle = document.createElement('div');
            newEle.classList.add("cell");
            newEle.classList.add(kind);
            return newEle;
}


for(let i = 0; i < 8; i ++){
    chessBoard[i] = [];
   for(let j = 0 ; j < 8 ;j++) {
        const first = createCell(colors[i%2])
        const sec = createCell(colors[(i+1)%2]);
        first.id = String.fromCharCode(startAscii+j) + `${i+1}`;
        sec.id = String.fromCharCode(++j + startAscii) + `${i+1}`;
        chessTable.appendChild(first);
        chessTable.appendChild(sec);
        chessBoard[i].push(first);
        chessBoard[i].push(sec)
   }
}


const strongChess = [
    "rook" , "hourse" , "bishop", "queen", "king"
]

class chessPiece {
    constructor(col, row, color, pieceType) {
        this.col = col;
        this.row = row;
        this.color = color;
        this.entity = document.createElement('div');
        this.entity.classList.add(`chess-${color}`);
        this.entity.classList.add('piece');
        this.entity.dataset.col = col;
        this.entity.dataset.row = row;

        // Create an img element for the chess piece
        this.imgElement = document.createElement('img');
        this.imgElement.src = `images/${color}-${pieceType}.png`; // Replace with the actual path to your piece images
        this.entity.appendChild(this.imgElement);
    }
    copy(col, row, color) {
        return new chessPiece(this.col, this.row, color, this.pieceType);
    }
    move(newCol, newRow) {
        // Check if the move is valid for the specific piece type
        if (this.isValidMove(newCol, newRow)) {
            // Remove the piece from its current position
            chessBoard[this.row][this.col].removeChild(this.entity);

            // Update the piece's position
            this.col = newCol;
            this.row = newRow;

            // Place the piece in its new position
            chessBoard[newRow][newCol].appendChild(this.entity);
        } else {
            console.log("Invalid move!");
        }
    }

    // Add the isValidMove method for each piece type
    isValidMove(newCol, newRow) {
        // Implement the specific rules for each piece type
        // Return true if the move is valid, false otherwise
    }
}
// set chess on board 
//set black 
// loop for black pawn 
const setupChess = (color, pawnIndex, strongIndex) => {
    for(let i = 0 ; i < 8; i ++){
        const pawn = new chessPiece(1,i,color,"pawn")
        initDD(pawn.entity);
        chessBoard[pawnIndex][i].appendChild(pawn.entity);
        const strong = new chessPiece(0,i > 4 ? 16 -(i+4) : i,color,strongChess[i > 4 ? i-5:i])
        initDD(strong.entity)
        console.log(strong.entity)
        chessBoard[strongIndex][i > 4 ? 16 -(i+4):i].appendChild(strong.entity);
    }
}

setupChess("white",1,0);
setupChess("black",6,7)


console.log(chessBoard)



