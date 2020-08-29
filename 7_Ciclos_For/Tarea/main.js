//-------> Challenge Final <-------
// 1 -> 100
// Si el numero es divisible entre 3 -> Fizz 
// Si el numero es divisible entre 5 -> Buzz
// Si el numero es divisible entre 3 y 5 -> FizzBuzz
//---- 👍 -----
// 0
// 1
// 2
// 3 Fizz
// 4 
// 5 Buzz
// ...
// 15 Fizbuzz
//----- 🚫 -----
// 15 fizz
// 15 buzz
// 15 fizzbuzz


for (var i = 1; i <= 100; i++) {
    if (i === 0) {
        console.log(i);
    } else if (i % 3 === 0 &&  i % 5 === 0) {
        console.log(i + ' FizzBuzz');
    } else if (i % 3 === 0) {
        console.log(i + ' Fizz');
    } else if (i % 5 === 0) {
        console.log(i + ' Buzz');
    } else {
        console.log(i);
    }
}