let cocher;
let count = 0;
let piedras = [new Piedra()];

let memoria = []

function setup() {
    createCanvas(800, 600);
    cocher = new Coche();
    count = 0;
    //Para debuguear
    //print(cocher);

    piedras[0].posx = 300;
    
}



function draw() {
    background(220);
    piedras[0].show();
    
    console.log(memoria);

    cocher.show();


    if (cocher.posx +30 >= memoria[0]&&cocher.posx <= memoria[0]+25) {
        cocher.direction = 0;
        if (cocher.posy >= 250) {
            cocher.direction = 1;
        }
        if (cocher.posx >= memoria[0] + 25) {
            cocher.direction = -1;
        }
        if (cocher.posy >= 300) {
            cocher.direction = 1;
        }
    }

    if (cocher.posx >= 770 || cocher.posx <= 0 || cocher.posy <= 0 || cocher.posy >= 550) {
        cocher.crash = true;

        setup();
        draw();
    }

    if (cocher.posx + cocher.width >= piedras[0].posx) {
        cocher.crash = true;
        memoria.push(piedras[0].posx);
        setup();
        draw();
    }
    

    if (!cocher.crash && cocher.direction == 1) {
        cocher.posx += cocher.vel;

    } else if (!cocher.crash && cocher.direction == 0) {
        cocher.posy -= cocher.vel;
    } else if (!cocher.crash && cocher.direction == -1) {
        cocher.posy += cocher.vel;
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


function Coche() {
    this.posx = 50;
    this.posy = 300;
    this.width = 30;
    this.height = 50;
    this.vel = 2;
    this.direction = 1;
    this.crash = false;
    this.esquivando = false;
    this.show = function () {
        fill(100);
        noStroke();
        rect(this.posx, this.posy, this.width, this.height, 10);

    }
    this.esquiva = function() {
        var inix;
        var iniy;
    }
}

function Piedra() {
    this.posx = 0;
    this.posy = 300;
    this.width = 20;
    this.height = 50;
    this.show = function () {
        fill(20);
        noStroke();
        rect(this.posx, this.posy, this.width, this.height);

    }
}



function Pointa() {
    this.x = 0;
    this.y = 0;
    this.frame = 0;
}