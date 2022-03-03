// # Exercício 03

// ## URL amigável

// Faça um sistema que transforma um texto em uma URL amigável

// Obs.: Uma URL amigável é formada por caracteres minúsculos, separados por hífem, sem espaços.

// Exemplo:

// ```javascript=
// const texto = "Aprenda programar do zero na Cubos Academy";
// ```

// Para o exemplo acima o sistema deverá imprimir:

// ```
// aprenda-programar-do-zero-na-cubos-academy
// ```

const texto = "Aprenda programar do zero na Cubos Academy";

function urlTexto(texto) {

    let textoMinusc = texto.toLocaleLowerCase();
    while (textoMinusc !== textoMinusc.replace(" ", "-")) {
        textoMinusc = textoMinusc.replace(" ", "-")
    }
    return textoMinusc;
}

console.log(urlTexto(texto));