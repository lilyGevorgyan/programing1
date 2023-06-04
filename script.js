


var matrix = [

    [2, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 3, 0, 0, 0, 0, 0, 0, 2, 0, 3, 0, 4, 0, 0, 3, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 3, 0],

    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 4],

    [0, 0, 0, 0, 2, 3, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 2, 0, 2, 2, 4, 0, 0],

    [0, 0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

    [0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 2, 0, 0, 0, 3, 0, 0, 0, 3, 2, 0, 4, 0, 3, 1, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0],

    [0, 3, 3, 0, 1, 0, 0, 2, 4, 0, 0, 1, 0, 0, 0, 2, 0, 4, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 1, 2, 0, 0, 3],

    [0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 0, 2, 0, 2, 0, 2, 0, 0, 3, 0, 0, 3, 2, 2, 0, 2, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],

    [0, 1, 0, 3, 0, 1, 2, 0, 0, 2, 3, 0, 0, 1, 1, 0, 0, 4, 0, 0, 4, 3, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0],

    [0, 0, 0, 0, 1, 2, 1, 0, 2, 0, 0, 2, 4, 0, 2, 1, 0, 0, 0, 1, 0, 0, 0, 2, 0, 1, 1, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0, 1, 0, 0],

    [0, 0, 0, 1, 1, 0, 0, 1, 0, 2, 3, 2, 0, 0, 1, 0, 0, 4, 0, 2, 0, 0, 0, 1, 3, 3, 2, 1, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],

    [0, 0, 1, 2, 1, 2, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2, 2, 3, 0, 2, 1, 4, 1, 0, 1, 2, 1, 2, 2, 1, 0, 2, 1, 1, 1, 1],

    [0, 1, 3, 1, 2, 0, 2, 1, 1, 1, 0, 2, 0, 1, 0, 4, 1, 4, 0, 2, 0, 0, 1, 3, 2, 0, 1, 1, 0, 0, 0, 3, 0, 0, 0, 0, 2, 0, 1, 0],

    [0, 0, 1, 1, 3, 1, 0, 1, 0, 0, 0, 0, 0, 2, 1, 4, 1, 1, 4, 1, 1, 4, 1, 4, 0, 0, 0, 0, 3, 0, 0, 2, 0, 0, 2, 2, 1, 0, 1, 0],

    [0, 0, 0, 1, 0, 0, 2, 1, 0, 0, 0, 3, 0, 4, 1, 1, 0, 0, 0, 0, 4, 1, 1, 1, 0, 0, 1, 0, 0, 0, 2, 1, 0, 1, 0, 0, 1, 0, 1, 0],

    [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 2, 1, 0, 1, 0, 0, 0, 4, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 2, 0, 1, 0, 1, 0],

    [0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 2, 0, 0, 0, 0, 0, 2, 1, 1, 1, 2, 1, 1, 1, 0],

    [0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 4, 0, 0, 0, 0, 0, 0, 1, 2, 0, 2, 0, 0, 0, 1, 2, 1, 0, 1, 1, 1, 0],

    [0, 2, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 4, 0, 0, 1, 0, 0, 0, 0, 2, 2, 1, 0, 1, 0, 0, 0, 0],

    [0, 2, 0, 3, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],

    [0, 0, 2, 0, 0, 2, 0, 0, 0, 3, 0, 0, 0, 2, 0, 3, 0, 0, 0, 2, 4, 0, 0, 0, 0, 0, 0, 1, 0, 3, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0]

];

var side = 20;
var grassArr = [];
var predatorArr = []
var grassEaterArr = []
var humanArr = []
var robotArr= []

function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var grE = new GrassEater(x, y, 2);
                grassEaterArr.push(grE)
            }
            else if (matrix[y][x] == 3) {
                var pr = new Predator(x, y, 3)
                predatorArr.push(pr)
            }
            else if (matrix[y][x] == 4) {
                var hu = new Human(x, y, 4)
                humanArr.push(hu)
            }
            else if (matrix[y][x] == 5) {
                var ro = new Robot(x, y, 5)
                humanArr.push(ro)
            }
        }

    }


}
function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill(255, 255, 0)
            }
            else if (matrix[y][x] == 3) {
                fill(204, 0, 0)
            }
            else if (matrix[y][x] == 4) {
                fill(210, 105, 30)
            }
            else if (matrix[y][x] == 5) {
                fill(142, 68, 173)
            }

            rect(x * side, y * side, side, side);


        }
    }


    for (var i in grassArr) {
        grassArr[i].mul()
    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].eat()
        grassEaterArr[i].move()
        grassEaterArr[i].mult()
        grassEaterArr[i].die()
    }
    for (var i in predatorArr) {
        predatorArr[i].eat()
        predatorArr[i].move()
        predatorArr[i].mult()
        predatorArr[i].die()
    }
    for (var i in humanArr) {
        humanArr[i].eat()
        humanArr[i].move()
        humanArr[i].mult()
        humanArr[i].create()
        humanArr[i].die()
        
    }
    for (var i in robotArr) {
        robotArr[i].move()
        robotArr[i].plant()
    }
}