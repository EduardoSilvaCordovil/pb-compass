function checarTexto(texto) {
  if (texto.length > 10) {
    console.log("Texto muito longo")
  } else {
    console.log("Texto dentro do limite")
  }
  console.log(texto.length)
}
checarTexto("10")
checarTexto("Teste")
checarTexto("Vamos testar para ver se funciona")