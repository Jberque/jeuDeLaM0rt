class Engine {
    constructor(hauteur, largeur) {
        this.hauteur = hauteur;
        this.largeur = largeur;
        this.animatedObjects = [];
        this.gravity = 10;
    }

    start() {
        createCanvas(this.largeur, this.hauteur);
    }

    addAnimatedObject(animatedObject) {
        this.animatedObjects.push(animatedObject);
    }

    draw() {
        this.animatedObjects.forEach(function (element) {
            if (element instanceof animatedObjects) {
                element.draw();
            }
        })
    }

    live() {
        this.animatedObjects.forEach(function (element) {
            if (element instanceof animatedObjects) {
                //engine.applyGravity(element);
                engine.colisionDetectionScreenBorder(element);

                element.live();
            }
        })
    }

    colisionDetectionScreenBorder(animatedObject) {
        if (animatedObject.getBorderX() >= this.largeur) {
            animatedObject._direcX = -1;
        } else if (animatedObject._posX <= 0) {
            animatedObject._direcX = 1;
        }
        if (animatedObject.getBorderY() >= this.hauteur) {
            animatedObject._direcY = -1;
        } else if (animatedObject._posY <= 0) {
            animatedObject._direcY = 1;
        }

    }

    applyGravity(animatedObject) {
        if (animatedObject._speedY <= 0) {
            animatedObject._speedY = 1;
        }
        if (animatedObject._direcY = 1) {
            animatedObject._speedY += 1;
        }else if(animatedObject._direcY = -1){
           animatedObject._speedY -= 1;
        }

    }
}