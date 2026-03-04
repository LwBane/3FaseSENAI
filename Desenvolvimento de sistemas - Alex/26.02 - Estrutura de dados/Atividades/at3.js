// ==== Exercício 3 ==== 
    // Fila com Prioridade Simples inserção constante

// Implemente uma fila onde:
    // Idosos entram antes
    // Demais entram ao final
// == Discussão == 

    // Você está mantendo ordenação ?
    // Está inserindo no meio ?


class Queue { // Array onde os elementos serão armazenados
    constructor() {
        this.array = []
        this.inicio = 0
        this.final = 0
        this.tamanho = 0
    }

    enqueue(valor) { // Adiciona um elemento ao final da fila
        this.array[this.final] = valor // Insere o valor no final da fila
        this.final++ // Avança o ponteiro final 
        this.tamanho++ // Aumenta o tamanho 
    }

    dequeue() { // Método para remover do início da fila
        if (this.tamanho === 0) return null // Se a fila estiver vazia, retorna null

        const removido = this.array[this.inicio] // Armazena o valor a ser removido
        this.array[this.inicio] = undefined // Limpa a posição do início da fila
        this.inicio++
        this.tamanho--
        return removido // Retorna o valor removido
    }

    peek() { // Mostra o elemento no início da fila sem remover ele 
        if (this.tamanho === 0) return null
        return this.array[this.inicio]
    }

    isEmpty() { // Verifica se a fila está vazia
        return this.tamanho === 0
    }
}


class FilaPrioridade {
    constructor() {
        this.prioridade = new Queue() // Fila para idosos
        this.normal = new Queue() // Fila normal
    }

    enqueue(valor, ehIdoso) { // Verifica se é idoso ou não e coloca na fila certa
        if (ehIdoso) {
            this.prioridade.enqueue(valor)
        } else {
            this.normal.enqueue(valor)
        }
    }

    dequeue() { // Remove o próximo elemento, dando prioridade aos idosos
        if (!this.prioridade.isEmpty()) {
            return this.prioridade.dequeue()
        }
        return this.normal.dequeue()
    }

    peek() { // Mostra quem será o próximo atendido
        if (!this.prioridade.isEmpty()) {
            return this.prioridade.peek()
        }
        return this.normal.peek()
    }

    isEmpty() { // verifica se ambas as filas estão vazias
        return this.prioridade.isEmpty() && this.normal.isEmpty()
    }
}


// Testando

const fila = new FilaPrioridade()

fila.enqueue("Carlos", false)
fila.enqueue("Maria", true)  // idosa
fila.enqueue("Ana", false)
fila.enqueue("João", true)   // idoso

console.log(fila.dequeue()) // Maria
console.log(fila.dequeue()) // João
console.log(fila.dequeue()) // Carlos
console.log(fila.dequeue()) // Ana