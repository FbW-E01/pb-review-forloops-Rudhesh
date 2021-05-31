// # Review 4 - For loops


// NOTE! Pay close attention to creating code with good and consistent code style.



// Use the variable "i" for all your loops. That variable should *not* be accessible outside the loop. Always use a for loop.


// 1. Make a loop that prints the numbers from 0 to 10.

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// 2. Make a loop that prints the numbers from 10 to 20.

for (let i = 10; i <= 20; i++) {
    console.log(i);
}
// 3. Make a loop that prints the numbers from -10 to 10.

for (let i = -10; i <= 10; i++) {
    console.log(i);
}
// 4. Make a loop that prints the numbers from 10 to -10.

for (let i = 10; i >= -10; i--) {
    console.log(i);
}
// 5. Make a string. Then, make a loop that prints all the individual characters of that string.

const str = "How are you?"

for (let i = 0; i < str.length; i++) {
    const element = str[i];
    console.log(element);

}
// 6. Make an array with 5 items. Then, make a loop that prints all the individual items of that array.

const fruit = ["mango", "banana", "apple", "grape", "orange"];

for (let i = 0; i < fruit.length; i++) {
    const element = fruit[i];
    console.log(element);

}


// 7. Make an array with 6 items. Then, make a loop that prints every second item of that array.

const cars = ["ferrari", "jaguar", "BMW", "Ford", "audi", "mustang"]

for (let i = 0; i < cars.length; i++) {
    const element = cars[i];
    if (i % 2 === 0) {
        continue;
    }
    console.log(i, element);

}

// 8. Make an array with 6 items. Then, make a loop that prints every third item of that array.

const users = ["John", "Kevin", "Alex", "Joel", "Peter", "Andre"]


for (let i = 2; i < users.length; i += 3) {
    const element = users[i];
    console.log(i, element);

}

// 9. Make an array with 10 items. Then, make a loop that prints every third item of that array starting from the 2nd.

const colors = ["red", "green", "blue", "orange", "brown", "mint", "yellow", "cream", "gray", "black"]

for (let i = 1; i < colors.length; i += 3) {
    let element = colors[i];

    console.log(i, element);

}

// 10. Make an array with 7 objects. Each objects should have a property called counter. Create a loop that prints only the counter value of each object.

const userId = [
    { counter: 111, username: "john", active: true },
    { counter: 134, username: "kevin", active: false },
    { counter: 134, username: "luis", active: true },
    { counter: 132, username: "laura", active: true },
    { counter: 142, username: "lena", active: false },
    { counter: 145, username: "sarah", active: true },
    { counter: 176, username: "peter", active: true },
];

for (let i = 0; i < userId.length; i++) {
    const element = userId[i];
    console.log(i, element.counter)
}


// 11. Save a random whole number between 0 and 100 to a variable. Then print all numbers from 0 to 100 and as soon as you reach the random number you created, stop your loop.

let randomNum = Math.floor(Math.random() * 101)
console.log(randomNum);

for (let i = 0; i < 101; i++) {
    if (i === randomNum) {
        break;
    }
    console.log(i)
}