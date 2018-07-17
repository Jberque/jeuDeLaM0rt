class animatedObjects {
    constructor(posX, posY, largeur, hauteur) {

        this._direcX = 1;
        this._direcY = 1;

        this._speedX = 5;
        this._speedY = 5;

        this._posX = posX;
        this._posY = posY;

        this._largeur = largeur;
        this._hauteur = hauteur;
    }

    draw() {
        rect(this._posX, this._posY, this._largeur, this._hauteur);

    }

    live() {

        this._posX += this._speedX * this._direcX;
        this._posY += this._speedY * this._direcY;

    }

    getBorderX(){
        return this._posX + this._largeur;
    }

    getBorderY(){
        return this._posY + this._hauteur;
    }

    getCenterX() {
        return this._posX + this._largeur / 2;
    }

    getCenterY() {
        return this._posY - this._hauteur / 2;
    }

    get largeur() {
        return this._largeur;
    }

    set largeur(value) {
        this._largeur = value;
    }

    get hauteur() {
        return this._hauteur;
    }

    set hauteur(value) {
        this._hauteur = value;
    }

    get posX() {
        return this._posX;
    }

    set posX(value) {
        this._posX = value;
    }

    get posY() {
        return this._posY;
    }

    set posY(value) {
        this._posY = value;
    }

    get direcX() {
        return this._direcX;
    }

    set direcX(value) {
        this._direcX = value;
    }

    get direcY() {
        return this._direcY;
    }

    set direcY(value) {
        this._direcY = value;
    }

    get speedX() {
        return this._speedX;
    }

    set speedX(value) {
        this._speedX = value;
    }

    get speedY() {
        return this._speedY;
    }

    set speedY(value) {
        this._speedY = value;
    }


}