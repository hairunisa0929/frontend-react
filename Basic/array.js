const months = ["January", "February", "March"];

// membuat array 1
let food = [];
food = ["pizza", "burger", "fries"];

let nestedArr = ["kelinci", 4, false, ["kucing", 2, [1, 2]]];
// console.log(nestedArr[3][0]);

let animals = ["cat", "dog", "fish"];
// console.log(animals[1]);

for (let i = 0; i < animals.length; i++) {
  // console.log(animals[i]);
}

// animal = element in animals
for (let animal of animals) {
  // console.log(animal);
}

// i = index
for (let i in animals) {
  // console.log(animals[i]);
}

// Menghapus elemen terakhir
const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.pop();
// fruits.push("Kiwi");

// fruits.splice(2, 0, "Lemon");
// fruits.splice(1, 2);
const citrus = fruits.slice(1,2);
console.log(citrus);
