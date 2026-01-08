function swapDiagonals(matrix) {
    let n = matrix.length;
    for (let i = 0; i < n; i++) {
        if (i === 0 || i === n - 1) {
            let temp = matrix[i][i];
            matrix[i][i] = matrix[i][n - 1 - i];
            matrix[i][n - 1 - i] = temp;
        }
    }
    return matrix;
}

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let swappedMatrix = swapDiagonals(matrix);
console.log(swappedMatrix);