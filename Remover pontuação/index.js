// # Exercício 08

// ## Remover pontuação

// Crie uma função que receba um número de CPF ou CNPJ e remova toda pontuação. A função deverá imprimir o resultado.

// ```javascript=
// const cpf = "011.022.033-44";
// ```

// Para o exemplo acima deverá imprimir:

// ```
// 01102203344
// ```

const cpf = "011.022.033-44";

function removedorCaract(num) {

    while (num.replace(".", "") != num && num.replace("-", "")) {
        num = num.replace(".", "");
        num = num.replace("-", "");

    } return num;

}
console.log(removedorCaract(cpf));