// global scope
const firstName = "Corydoras";

function greet() {
    console.log(firstName);
}

// greet();


// function scope
function greeting() {
    var fish = "Corydoras";
    console.log(fish)
};
console.log(fish);