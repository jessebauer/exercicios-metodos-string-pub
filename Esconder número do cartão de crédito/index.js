// ## Esconder número do cartão de crédito

// Faça um sistema que seja capaz de formatar uma string com os 16 números de um cartão de crédito, de maneira que seja exibido apenas os 4 primeiros e os 4 últimos dígitos, substituindo os caracteres ocultos por `*`.



const numeroCartao = '1111222233334444';

let numCartaoInicio = numeroCartao.slice(0, 4)
let numCartaoFim = numeroCartao.slice(12)
let cartaoProtegido = numCartaoInicio + numCartaoFim.padStart(12, "*");
console.log(cartaoProtegido);