'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    let sumDiagonalLeftToRight = 0;
    let sumDiagonalRightToLeft = 0;
    let arrSize = arr.length;

    for (let i = 0; i < arrSize; i++) {
        for (let j = 0; j < arrSize; j++) {
            if(i === j) sumDiagonalLeftToRight += arr[i][j];
            if(i + j === arrSize - 1) sumDiagonalRightToLeft += arr[i][j];
        };
    };

    return Math.abs(sumDiagonalLeftToRight - sumDiagonalRightToLeft);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
