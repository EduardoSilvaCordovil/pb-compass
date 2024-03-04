let productValue = Number(prompt('Enter the product value: '))
if (productValue >= 20) {
    document.getElementById('result').innerHTML = 'Aprovado!'
} else {
    document.getElementById('result').innerHTML = 'Negado!'
}
console.log(typeof(productValue))