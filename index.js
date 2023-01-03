function add(a, b) {
    return a + b;
 }
 
 function subtract(a, b) {
     return a - b;
 }
 
 function multiply(a, b) {
     return a * b;
 }
 
 function divide(a, b) {
     return a / b;
 }
 
 
 function increment(number) {
     return (number +=1);
 }
 
 
 function decrement(number) {
     return (number -=1);
 }
 
 function makeInt(b) {
     return parseInt(b, 10)
     // it('parses n as an integer and returns the parsed integer', function() {
         //   expect(makeInt(a.toString())).toEqual(a)
     };
     
 
 // function makeInt(a) {
 //         return (0)
         // expect(makeInt('0x2328')).toEqual(0)
 
 // function makeInt(a) {
 //         return (true)
 // };
 
 
 function preserveDecimal(a) {
         return parseFloat(a)
 };
 
 //     let x = 3;
 // const y = x++;
 
 // console.log(`x:${x}, y:${y}`);
 // // expected output: "x:4, y:3"
 
 // let a = 3;
 // const b = ++a;
 
 // console.log(`a:${a}, b:${b}`);
 // // expected output: "a:4, b:4"
 
 