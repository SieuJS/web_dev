export const name = "chess"


export default class ChessPiece {
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
}


class Rook extends ChessPiece{
    move() {
        
    }
    
}
