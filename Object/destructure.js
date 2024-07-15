const animals = ["cat", "fish", "rabbit"];

// untuk mengakses elemen bisa menggunakan index
// const animal1 = animals[0];
// const animal2 = animals[1];
// const animal3 = animals[2];

// console.log(animal1, animal2, animal3);

// destructure
const [animal1, , animal3] = animals;
console.log(animal1, animal3);

const person = {
  firstName: "Brachio",
  lastName: "Saurus",
  age: 5,
};

// mengakses properti
// const brand = vehicleOne.brand;
// const model = vehicleOne.model;
// console.log(brand);

// desctructure
const { age } = person;
console.log(firstName);
