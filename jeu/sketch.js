let engine;

function setup() {
    // put setup code here
    engine = new Engine(420, 640);
    engine.start();
    let animatedObject1 = new animatedObjects(320, 210, 80, 80);
    engine.addAnimatedObject(animatedObject1);
}

function draw() {
    engine.live();
    engine.draw();
}