// How to declare a variable using let and const
const fatherName = 'isahaque';
let season = 'summer';
season = 'winter';
//2. condition
if(fatherName === 'isahaque' || season === 'winter'){

}
else if(fatherName === 'Isahaque'){

}
else{

}
// 3. Array declare
// index numbers, index array elements set, push, pop, shift
const numbers = [34, 54, 45, 65, 95];
numbers[0] = 56;
console.log(numbers);
numbers.push(98);
console.log(numbers);
numbers.pop();
console.log(numbers);
numbers.shift();
console.log(numbers);
//4. for loop 
for (let i = 0; i<numbers.length; i++){
    const number = numbers[i];
    console.log(number);
}

// 5. function
function multiply (num1, num2){
    const result = num1 * num2;
    return result;
}
const output = multiply(90, 5);
console.log(output);

// 6. object 
const person = {
    name: 'Rakib', 
    age: 27,
    profession: 'web developer'
}
const myAge = 'age';
// 3 ways to access objects
console.log(person.age);
console.log(person['age']);
console.log(person[myAge]);