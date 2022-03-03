// Sistema para formatar CPF e CNPJ
const cpf = "12345678900";
const cnpj = "12345678000199";

function validarCPF(cpfInserido) {
    if (cpfInserido.length != 11) {
        return 'CPF inválido'
    } else {
        primeiroPonto = cpfInserido.slice(0, 3)
        segundoPonto = cpfInserido.slice(3, 6)
        tracinho = cpfInserido.slice(6, 9)
        digitos = cpfInserido.slice(cpfInserido.length - 2)
        let cpfFormatado = primeiroPonto + "." + segundoPonto + "." + tracinho + "-" + digitos
        return cpfFormatado
    }
}
function validarCNPJ(cnpjInserido) {
    if (cnpjInserido.length != 14) {
        return 'CNPJ inválido'
    } else {
        primeiroPonto = cnpjInserido.slice(0, 2)
        segundoPonto = cnpjInserido.slice(2, 5)
        barra = cnpjInserido.slice(5, 8)
        tracinho = cnpjInserido.slice(8, 12)
        resto = cnpjInserido.slice(cnpj.length - 2)
        let cnpjFormatado = primeiroPonto + "." + segundoPonto + "." + barra + "/" + tracinho + "-" + resto;
        return cnpjFormatado
    }
}
console.log(validarCPF(cpf));
console.log(validarCNPJ(cnpj));