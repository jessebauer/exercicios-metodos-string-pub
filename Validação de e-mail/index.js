// # Exercício 07

// ## Validação de e-mail

// Faça um sistema que verifique se um e-mail é válido

// Dicas:

// -   Sempre tem que ter @
// -   Sempre tem que ter pelo menos um .
// -   Nunca pode começar com .
// -   Nunca pode terminar com .

// | Entrada                      | Saída           |
// | ---------------------------- | --------------- |
// | `jose@cubos.academy`         | E-mail válido   |
// | `jose@cubos.academy.br`      | E-mail válido   |
// | `jose.messias@cubos.academy` | E-mail válido   |
// | `jose.messias@cubos.io`      | E-mail válido   |
// | `jose@cubos`                 | E-mail inválido |
// | `jose.messias@cubos`         | E-mail válido   |
// | `jose.messias@.`             | E-mail inválido |
// | `jose.@cubos`                | E-mail válido   |
// | `.@`                         | E-mail inválido |
// | `@.`                         | E-mail inválido |
// | `jose.messias@cubos.`        | E-mail inválido |
// | `.messias@cubos.`            | E-mail inválido |
// | `.messias@cubos`             | E-mail inválido |


// -   Sempre tem que ter @
// -   Sempre tem que ter pelo menos um .
// -   Nunca pode começar com .
// -   Nunca pode terminar com .

const email = "jose.messias@.";
if (email.indexOf("@") === -1 || email[0] === "." || email[email.length - 1] === "." || email.includes(".") === false) {
    console.log('E-mail inválido');
} else {
    console.log('E-mail válido');
}
