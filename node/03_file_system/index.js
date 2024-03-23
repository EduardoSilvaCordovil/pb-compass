let{readFile, writeFile} = require('fs')

readFile("arquivo.txt", "utf8", (error, text) => {
    if (error) {
        throw error;
    } else {
        console.log(text);
    }
});

writeFile("arquivo.txt", "Escrevendo arquivos com Node", (error) => {
    if (error) {
        throw error;
    } else {
        console.log("Arquivo escrito com sucesso!");
    }
});