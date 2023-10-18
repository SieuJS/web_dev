
export default class Cell  {
    constructor (color, coor ){
        this.entity = document.createElement('div');
        this.entity.classList.add ("cell");
        this.entity.classList.add (color);
        this.coor = coor;
    }
}