const tempLondon = [18, 13, 8, 2]
const tempPositive = tempLondon.every(function(value){
    return value >= 0
})
console.log(tempPositive)

// Filtrando 
const tempLondon2 = [18, 13, 8, 2]
const tempPositive2 = tempLondon.filter(value => value >= 0)
console.log(tempPositive)