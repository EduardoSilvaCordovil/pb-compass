let grade = prompt('Digite a nota do aluno: ')

if (grade > 100) {
    alert('Nota invalida')
}
else if (grade >= 90) {
    alert('Aluno nota A')
}
else if (grade >= 80) {
    alert('Aluno nota B')
}
else if (grade >= 70) {
    alert('Aluno nota C')
}
else if (grade >= 60) {
    alert('Aluno nota D')
}
else {
    alert('Aluno nota F')
}