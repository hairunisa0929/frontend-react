// without parameter
function greet() {
  console.log("Hello World!");
}

// greet();

// function with paramater
function penambahan(num1, num2) {
  let result = num1 + num2;
  console.log(result);
}

penambahan(3, 7);

// function that returns value
function perkalian(num1, num2) {
  let result = num1 * num2;
  return result;
}

const hasilPerkalian = perkalian(3, 5);
console.log(hasilPerkalian);
