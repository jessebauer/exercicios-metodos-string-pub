// # Exercício 09

// ## Gerador de Nickname

// Crie uma função que receba um nome e gere um nickname seguindo o padrão a seguir.

// -   O nickname deve conter, no máximo, 13 caracteres;
// -   Deve começar sempre com "@";
// -   Não deve existir espaços em branco;
// -   São permitidos apenas caracteres minúsculos.

// ```javascript=
// const nome = 'Guido Cerqueira';
// ```

// Para o exemplo acima deverá imprimir:

// ```
// @guidocerquei
// ```

const nome = 'Guido Cerqueira';

function nickNameGenerator(nome) {
    nickName = "@" + nome.replace(" ", "").toLowerCase().slice(0, 12)
    return nickName;
}
console.log(nickNameGenerator(nome));