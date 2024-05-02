function describeVehicle(vehicle) {
    console.log(`O veículo é da marca: ${vehicle.make}, seu modelo é: ${vehicle.model} e foi fabricado em: ${vehicle.year}`);
}
const myCar = {
    make: "Toyota",
    model: "Corolla",
    year: 2019,
};
function firstElement(arr) {
    return arr[0];
}
describeVehicle(myCar);
const newNumbers = [1, 2, 3];
console.log(firstElement(newNumbers));
const fruits = ["Abacate", "Banana", "Caju"];
console.log(firstElement(fruits));
function freezeProduct(product) {
    return Object.freeze(product);
}
const bread = { id: 2, name: "Pão", price: 1.99 };
const frozenBread = freezeProduct(bread);
function updateProductPrice(product, newPrice) {
    return Object.assign(Object.assign({}, product), newPrice);
}
const updateBread = updateProductPrice(bread, { price: 3.49 });
console.log(updateBread);
