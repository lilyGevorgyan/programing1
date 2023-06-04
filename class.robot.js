class Robot {
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
    move() {
        var empty = random(this.chooseCell(0))
        if (empty) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 5
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
        }
    }
    plant() {
        if (this.energy = 13) {
            var x = floor(random(matrix[0].length))
            var y = floor(random(matrix.length))
            var gr = new Grass(x, y, 1)
            grassArr.push(gr)
            matrix[y][x] = 1
        }
    }
}