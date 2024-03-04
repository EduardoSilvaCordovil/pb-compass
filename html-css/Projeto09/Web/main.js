let idade= prompt('Digite a sua idade: ')
let temTitulo = prompt('Tem titulo de eleitor (sim/não): ');

if (idade >= 18 && temTitulo == 'sim') {
  console.log("Você pode votar.");
} 
else if (idade >= 18 && temTitulo == 'não') {
  console.log("Você precisa de titulo para votar");
} 
else {
  console.log('Você não tem idade para votar')
}
// else if (idade < 18 && temTitulo == 'sim' || temTitulo == 'não') {
//     console.log('Você não tem idade para votar')
// }