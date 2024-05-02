interface Vehicle {
  make: string;
  model: string;
  year: number;
}

function describeVehicle(vehicle: Vehicle): void {
  console.log(
    `O veículo é da marca: ${vehicle.make}, seu modelo é: ${vehicle.model} e foi fabricado em: ${vehicle.year}`
  );
}

const myCar: Vehicle = {
  make: "Toyota",
  model: "Corolla",
  year: 2019,
};

function firstElement<T>(arr: T[]): T {
  return arr[0];
}

describeVehicle(myCar);

const newNumbers = [1, 2, 3];
console.log(firstElement(newNumbers));

const fruits = ["Abacate", "Banana", "Caju"];
console.log(firstElement(fruits));

type Product = {
  id: number;
  name: string;
  price: number;
};

function freezeProduct(product: Product): Readonly<Product> {
  return Object.freeze(product);
}
const bread: Product = { id: 2, name: "Pão", price: 1.99 };
const frozenBread = freezeProduct(bread);

function updateProductPrice(
  product: Product,
  newPrice: Partial<Product>
): Product {
  return { ...product, ...newPrice };
}
const updateBread = updateProductPrice(bread, { price: 3.49 });
console.log(updateBread);
