// ==== Exercício 4 ====
// Inversão de Texto com Pilha

// Inverter uma string usando pilha. 
// Último que entra → primeiro que sai.

function inverterTexto(texto) {

    // Criamos a pilha
    const pilha = []

    // Empilhar cada caractere
    for (let i = 0; i < texto.length; i++) {
        pilha.push(texto[i])
    }

    // String que vai guardar o resultado invertido
    let invertido = ""

    // Desempilhar até esvaziar
    while (pilha.length > 0) {
        invertido += pilha.pop()
    }

    return invertido
}


// Teste
console.log(inverterTexto("1,2,3")) // 3,2,1
console.log(inverterTexto("casa"))  // asac
console.log(inverterTexto("banana"))    // ananab