/*

# Exercício 01

## Sistema de filtro de comentários

Assim como o YouTube exclui vídeos que falem `pandemia` ou `covid`, uma rede social precisa bloquear qualquer comentário que também possua uma dessas duas palavras.

Faça um sistema que verifique o texto de um comentário e caso exista qualquer uma das duas palavras citada anteriormente imprima: `Comentário bloqueado por conter palavras proibidas`, senão, imprima: `Comentário autorizado`.

Obs.: É necessário bloquear a palavra em qualquer formato (Maiúscula, Minúscula...).

*/

const comentario = "Esse COVID é muito perigoso!";


function filtro(comentario) {
    comentarioMinusc = comentario.toLocaleLowerCase()
    if (String(comentarioMinusc).includes("covid") === true || String(comentarioMinusc).includes("pandemia") === true) {
        return `Comentário bloqueado por conter palavras proibidas`

    } else {
        return `Comentário autorizado`
    }

}
console.log(filtro(comentario));

