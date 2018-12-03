// Object destructuring

// const person = {
//     name: 'Andrew',
//     age: 28,
//     location: {
//         city: 'Buenos Aires',
//         temperature: 32
//     }
// }

// const {name = 'Anoymous', age} = person;
// const {temperature: temp } = person.location;

// console.log(`hey! ${name}, you are ${age} years old right? Temperature? ${temp}`);

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const {title, author} = book;
// const {name: publisherName = 'self-published'} = book.publisher;

// console.log(title, author, publisherName)

// Array destructuring

const adress = ['1299 S Juniper Street', 'Philadelphia', 'Pensilvania', '19147'];

const [street, city, state, zip] = adress;

const item = ['coffee (hot)', '$2.00', '$2.50','$2.75'];
const [coffee, small, medium, large] = item;

console.log(coffee, large)