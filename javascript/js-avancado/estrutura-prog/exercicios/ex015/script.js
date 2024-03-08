let number = 41;
let divisoes = 0;

for (let i = 1; i <= number; i++) {
  if (number % 1 == 0) {
    divisoes++;
  }
}

if (divisoes == 2) {
  console.log(`Número ${number} é primo`);
} else {
  console.log(`Número ${number} não é primo`);
}
