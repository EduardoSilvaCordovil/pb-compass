function carLOan(loan, rate = 2.9, years = 5){
    return loan * rate / 100 * years
}
console.log(carLOan(20000))