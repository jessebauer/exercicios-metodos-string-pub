// # Validação de arquivos

// Crie uma função que receba o nome do arquivo com sua extensão e faça a validação dos arquivos permitidos conforme a lista abaixo.

// -   São permitidos arquivos: jpg, jpeg, gif e png;

// Exemplo 1:

// ```javascript=
// const nomeArquivo = 'Foto da Familia.pdf';
// ```

// Para o exemplo acima deverá imprimir:

// ```
// Arquivo inválido
// ```

// Exemplo 2:

// ```javascript=
// const nomeArquivo = 'Foto da Familia.png';
// ```

// Para o exemplo acima deverá imprimir:

// ```
// Arquivo válido
// ```

// jpg, jpeg, gif e png;

const nomeArquivo = 'Foto da Familia.txt';
function verificadorDeExtensaoValida(nomeArquivo) {

    formatosPermitidos = ["jpg", "jpeg", "gif", "png"];
    const extensao = nomeArquivo.slice(nomeArquivo.indexOf(".") + 1);
    const isFormatValid = formatosPermitidos.includes(extensao);
    const resposta = isFormatValid ? 'Formato válido' : 'Formato inválido';

    return resposta
}

console.log(verificadorDeExtensaoValida(nomeArquivo))