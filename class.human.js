class Human {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 13;
        this.directions = []
    }
    getNewDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(char1, char2) {
        this.getNewDirections()
        var found = []
        for (var i = 0; i < this.directions.length; i++) {
            var x = this.directions[i][0]
            var y = this.directions[i][1]
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == char1 || matrix[y][x] == char2) {
                    found.push(this.directions[i])
                }
            }

        }
        return found;

    }
    mult() {
        var empty = random(this.chooseCell(0))
        if (empty && this.energy >= 16) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 4
            var newHuman = new Human(newX, newY, 4)
            humanArr.push(newHuman)
            this.energy = 10
        }
    }
    move() {
        var empty = random(this.chooseCell(0))
        this.energy--;
        if (empty) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
        }
    }
    eat() {
        var food = random(this.chooseCell(2, 3))
        if (food) {
            matrix[this.y][this.x] = 0
            var newX = food[0]
            var newY = food[1]

            this.x = newX
            this.y = newY
            if (matrix[newY][newX] == 2) {
                for (var i in grassEaterArr) {
                    if (grassEaterArr[i].x == newX && grassEaterArr[i].y == newY) {
                        grassEaterArr.splice(i, 1)
                    }
                }
            } else
                if (matrix[newY][newX] == 3) {
                    for (var i in predatorArr) {
                        if (predatorArr[i].x == newX && predatorArr[i].y == newY) {
                            predatorArr.splice(i, 1)
                        }
                    }
                }
            matrix[newY][newX] = 4
            this.energy += 5
        }
    }
    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in humanArr) {
                if (humanArr[i].x == this.x && humanArr[i].y) {
                    humanArr.splice(i, 1)
                    break;
                }
            }
        }
    }
    create() {
        if (this.energy > 13) {
            var x = floor(random(matrix[0].length))
            var y = floor(random(matrix.length))
            var ro = new Robot(x, y, 5)
            robotArr.push(ro)
            matrix[y][x] = 5
        }
    }
}