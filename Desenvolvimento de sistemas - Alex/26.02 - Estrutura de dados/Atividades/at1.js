// ====Exercício 1 ==== 
//Simulador de Atendimento
//Objetivo: Implementar fila usando array.

// --- Enunciado ---
//Implemente uma fila com operações:
//enqueue(valor)
//dequeue()
//peek()
//isEmpty()

// Simule um sistema de atendimento bancário.

class Queue {

    constructor() {
        this.array = []
        this.inicio = 0
        this.final = 0
        this.tamanho = 0
    }

    // Inserir no final da fila
    enqueue(valor) {
        this.array[this.final] = valor
        this.final++
        this.tamanho++
    }

    // Remover do início da fila
    dequeue() {
        if (this.isEmpty()) return "Fila vazia"

        const removido = this.array[this.inicio]
        this.array[this.inicio] = undefined
        this.inicio++
        this.tamanho--

        return removido
    }

    // Ver quem será atendido (sem remover)
    peek() {
        if (this.isEmpty()) return "Fila vazia"
        return this.array[this.inicio]
    }

    // Verifica se está vazia
    isEmpty() {
        return this.tamanho === 0
    }

    // Retorna o tamanho atual
    mostrarTamanho() {
        return this.tamanho
    }
}


// Simulação de atendimento

const fila = new Queue()

console.log("Fila vazia?", fila.isEmpty())

fila.enqueue("Ronald")
fila.enqueue("Felipe")
fila.enqueue("Frederico")

console.log("Próximo atendimento:", fila.peek())
console.log("Atendido:", fila.dequeue())
console.log("Atendido:", fila.dequeue())
console.log("Atendido:", fila.dequeue())

console.log("Tentando atender de novo:", fila.dequeue())

console.log("Tamanho atual:", fila.mostrarTamanho())

fila.enqueue("Frederico")

console.log("Novo tamanho:", fila.mostrarTamanho())
console.log("Próximo atendimento:", fila.peek())