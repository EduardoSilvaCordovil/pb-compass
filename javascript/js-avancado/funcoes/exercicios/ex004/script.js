function numeroAleatorio(num) {
  return Mathfloor(Math.random() * num) + 1
}
console.log(numeroAleatorio(10))
console.log(numeroAleatorio(100))
console.log(numeroAleatorio(50))
