let temIdadeMinima = false
let temTituloEleitor = true

let podeVotar = temIdadeMinima && temTituloEleitor
let podeVotar2 = temIdadeMinima || temTituloEleitor
console.log(podeVotar)

let podeViajar = !podeVotar
console.log(podeViajar)