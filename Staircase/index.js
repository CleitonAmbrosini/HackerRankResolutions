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
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
    let tree = new Array(n);
    tree.fill(' ');
    for(let i = n - 1; i >= 0; i--) {
        tree[i] = '#';
        console.log(tree.join(''));
    }
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    staircase(n);
}
