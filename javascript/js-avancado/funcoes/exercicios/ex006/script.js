function tipoDeDado(dado) {
  if (typeof dado == "string") {
    console.log("Este dado é do tipo: STRING");
  } else if (typeof dado == "number") {
    console.log("Este dado é do tipo: NUMBER");
  } else if (typeof dado == "boolean") {
    console.log("Este dado é do tipo: BOOLEAN");
  }
}
tipoDeDado(true)
tipoDeDado(23)
tipoDeDado("Eduardo")
