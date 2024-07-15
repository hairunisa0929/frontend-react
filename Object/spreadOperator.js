const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];

// untuk menggabungkan memakai spread
const numbersCombined = [...numbersOne, ...numbersTwo];
console.log(numbersCombined); // hasil pada console [ 1, 2, 3, 4, 5, 6 ]

const myVehicle = {
  brand: "Ford",
  model: "Mustang",
  color: "red",
};

const updateMyVehicle = {
  type: "car",
  year: 2021,
  color: "yellow",
};

const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle };

console.log(myUpdatedVehicle);
