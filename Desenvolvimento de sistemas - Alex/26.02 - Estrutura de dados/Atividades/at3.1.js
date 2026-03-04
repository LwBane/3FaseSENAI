// ==== Exercício 3 ====
// Validador de Parênteses

// --- Enunciado ---
// Verifique se uma expressão possui parênteses balanceados: ((a + b) * c)

// Discussão Guiada
//Quando empilha ?
//Quando desempilha ?
//Como detecta erro ?

// Atividade de pilha (Stack - LIFO --> Primeiro que entra, último que sai)

function validarBalanceamento(expressao){
    const pilha = [];
    let topoPilha = 0 // expectativa é que no fim termine em 0 também, para dar certo
    const pares = { // pares de abertura e fechamento, qual corresponde a qual
        ")": "(", 
        "]": "[",
        "}": "{"
    }

    const quemAbre = new Set(["(", "[", "{"]); // array de conjunto dos que abrem alguma expressão / set serve para não duplicar as coisas 
    

    for (const caractere of expressao) {
        if(quemAbre.has(caractere)) {
            pilha[topoPilha] = caractere
            topoPilha++ // topo da pilha passa a ser o próximo que adicionei 
        }
        else if(caractere in pares){
            if(pilha.length === 0) return false // alguma coisa foi aberta sem o usuário saber

            const topo = pilha[topoPilha-1] // como acrescentei mais antes, tenho que decrementar pra saber o topo de vdd 
            pilha[topoPilha] = undefined
            topoPilha-- 
            if (topo !== pares[caractere]) return false // se quem estiver no topo for diferente, significa que tem algo de errado, então retorna como falso // Se o topo (último que abriu) não for o correspondente correto para o fechamento atual (quem está fechando), a função retorna false. 
        }
    }
    return topoPilha === 0; 
}


// Testando 

console.log(validarBalanceamento("((a + b) * c)")) // true 
console.log(validarBalanceamento("((a + b] * c)")) // false