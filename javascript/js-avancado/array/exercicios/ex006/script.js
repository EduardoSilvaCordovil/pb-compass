let numeros = [1, 2, 3]
let numeros2 = [1, 2, 3, 4, 5, 6]

function verificarArray(arr) {
    if (arr.length >= 5) {
        console.log("Muitos elementos")
    } else {
        console.log("Poucos elementos")
    }
}

verificarArray(numeros)
verificarArray(numeros2)