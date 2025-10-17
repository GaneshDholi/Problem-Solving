let prompt = require('prompt-sync')();

let n = prompt('Enter a number: ');

for (let i = 1; i <= n; i++) {
    let place = n-i;
    for (let j = 1; j <= 2 * i - 1; j++) {
        place = place -      j
        if (place) {
            process.stdout.write("* ");
        }
    }
    console.log();
}
