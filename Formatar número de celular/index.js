
// # Exercício 06

// ## Formatar número de celular

// Faça um sistema que receba um número de celular, formate corretamente e adicione o 9 quando não existir seguindo os padrões a seguir:

// -   Caso exista o DDD

// ```javascript=
// const celular = 7199918888;
// ```

// Será impresso:

// ```
// (71) 9 9991-8888
// ```

// -   Caso não exista o DDD

// ```javascript=
// const celular = 99918888;
// ```

// Será impresso:

// ```
// 9 9991-8888
// ```


const celular = 7199918888;

let celularStr = String(celular);
let numFormatado = "";
if (celularStr.length == 10) {
    let DDD = celularStr.slice(0, 2);
    DDD = DDD.padStart(3, "(");
    DDD = DDD.padEnd(4, ")");
    let numCelRest = celularStr.slice(2, 6) + "-" + celularStr.slice(6)
    numFormatado = DDD + "9" + " " + numCelRest;
} else {
    let numCelRest = celularStr.slice(2, 6) + "-" + celularStr.slice(6)
    numFormatadoSemDDD = "9" + " " + numCelRest;
}
console.log(numFormatado);



console.log(celularStr.slice(4))
