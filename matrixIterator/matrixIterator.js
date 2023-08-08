class Matrix {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.value = [];

        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                this.value[this.width * y + x] = undefined;
            }
        }
    }


    get(x, y) {
        return this.value[this.width * y + x];
    }

    set(x, y, value) {
        this.value[this.width * y + x] = value;
    }
}


class MatrixIterator {
    constructor(matrix) {
        this.matrix = matrix;
        this.x = 0;
        this.y = 0;
    }

    next() {
        if (this.y >= this.matrix.height) {
            return {
                done: true,
                value: null,
            }
        }

        this.x++;

        if (this.x === this.matrix.width) {
            this.x = 0;
            this.y++;
        }

        return {
            done: false,
            value: this.matrix.get(this.x, this.y)
        }
    }
}

Matrix.prototype[Symbol.iterator] = function () {
    return new MatrixIterator(this);
};
const matrix_2x2 = new Matrix(2, 2);

matrix_2x2.set(0, 1, 'summ')

for(let iter of matrix_2x2){
    console.log(iter);
}
