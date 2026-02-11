let x = 5;
let y = 22;

let result = x + y;
console.log('the sum of ' + x + ' and ' + y + ' is ' + result);

// Show result in the HTML
document.getElementById('result').innerText = 'Result is: ' + result;


// for loop example
for (let i = 0; i < 10; i++) {
    console.log('The number is: ' + i);
    document.getElementById('forloop').innerHTML += 'The number is: ' + i + '<br>';
}