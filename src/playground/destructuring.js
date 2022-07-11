//
// object destructuring.
//
const person = {
    name: 'Annant',
    age: 24,
    location: {
        city: 'Indore',
        temp: 29
    }
};

const { name: firstName = 'Anonymous', age } = person;
console.log(`${firstName} is ${age}.`);

const { city, temp: temperature } = person.location;
if (city && temperature) {
    console.log(`It's ${temperature} in ${city}`);
}

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin',
    }
};

const { publisher: publisherName = 'Self-Published' } = book.publisher;
console.log(publisherName)


//
// Array Destructuring
//

const address = ['Vijay Nagar', "Indore", "Madhya Pradesh", "452010"]

const [, city, state = "No idea"] = address;
console.log(`You are in ${city} ${state}.`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`); 