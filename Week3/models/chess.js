export default class ChessPiece {
    constructor () {
        this.entity = document.createElement('div');
        this.entity.classList.add('piece');
        this.pieceType = "";
    }
    render (col, row, color) {
        this.entity.classList.add(`chess-${color}`);
        this.imgElement = document.createElement('img');
        this.imgElement.src = `images/${color}-${this.pieceType}.png`; // Replace with the actual path to your piece images
        this.entity.appendChild(this.imgElement);
        this.entity.dataset.col = col;
        this.entity.dataset.row = row;
        this.entity.appendChild(this.imgElement);
        return this;
    }
}

class Pawn extends ChessPiece { 
    constructor () {
        super.constructor() ;
        this.pieceType = "pawn";
    }
    
}

class Rook extends ChessPiece { 
    constructor () {
        super.constructor() ;
        this.pieceType = "pawn";
    }
}

class Bishop extends ChessPiece {
    constructor () {
        super.constructor() ;
        this.pieceType = "bishop";
    }
}

class Hourse extends ChessPiece{
    constructor () {
        super.constructor() ;
        this.pieceType = "hourse";
    }
}

class Queen extends ChessPiece{
    constructor () {
        super.constructor() ;
        this.pieceType = "queen";
    }
}

class King extends ChessPiece {
    constructor() {
        super.constructor();
        this.pieceType = "king";
    }
}