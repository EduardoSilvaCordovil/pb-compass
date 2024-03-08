function lembrarSoma(x) {
    return function(y) {
        return x + y
    }
}
let soma1 = lembrarSoma(2)
console.log(soma1(5))

function contador(i) {
    let cont = i
    let somaContador = function() {
        console.log(cont)
        cont++
    }
    return somaContador
}
let meuContador = contador(5)
meuContador()
meuContador()