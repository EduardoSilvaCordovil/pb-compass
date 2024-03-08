for (i = i; i <= 10; i++) {
    console.log('Número ', i)
} i++

// While loop
i = 1

while (i <= 10) {
    console.log('Número: ', i)
    i++
} 

// Do While loop
do{
    console.log('Número: ', i)
    i++
} while (i <= 10)

// For In loop
const myCar = {
    model: 'BMW',
    year: 2023,
    km: 68000
}

for (let i in myCar)
    console.log(i, myCar[i])

// For Of loop
const friends = ['Eduarda', 'Marcelo', 'Lady', 'Flávia']
for (let i of friends)
    console.log(i)

// While com break
while(i <= 10) {
    if (i ===8 ) break
        console.log('Número: ', i)
        i++
} 