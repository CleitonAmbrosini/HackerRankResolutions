'use strict';

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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    let sizeOfArray = arr.length;
    const quantityOfNumbers = {
        positives: 0,
        negatives: 0,
        zeros: 0,
    }
    arr.forEach( (value) => {
        if(value === 0) quantityOfNumbers.zeros++;
        if(value > 0) quantityOfNumbers.positives++;
        if(value < 0) quantityOfNumbers.negatives++;
    })
    const sumRatios = calcRatios(quantityOfNumbers, sizeOfArray);
    printValues(sumRatios);
}

const calcRatios = ({positives, negatives, zeros}, sizeOfArray) => {
    return {
        positivesRatios: positives / sizeOfArray,
        negativesRatios: negatives / sizeOfArray,
        zerosRatios: zeros / sizeOfArray
    }
}

const printValues = (sumRatios) => {
    for (let key in sumRatios) {
        console.log(sumRatios[key].toFixed(6));
    }
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
