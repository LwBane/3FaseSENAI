// ==== Exercício 2 ====
// Fila com Prioridade Simples

// Implemente uma fila onde:
// Idosos entram antes
// Demais entram ao final

// Discussão
// Você está mantendo ordenação ?
// Está inserindo no meio ?


class Queue {

    constructor() {
        this.array = []
        this.inicio = 0
    }

    enqueue(value) {

        // Se for idoso, insere antes dos não idosos
        if (value.isElderly) {

            let contador = this.inicio

            // Avança enquanto encontrar idosos
            while (
                contador < this.array.length &&
                this.array[contador]?.isElderly
            ) {
                contador++
            }

            // Insere na posição encontrada
            this.array.splice(contador, 0, value)
        }

        // Se não for idoso, entra no final
        else {
            this.array.push(value)
        }
    }

    dequeue() {

        // Proteção contra fila vazia
        if (this.inicio >= this.array.length) {
            return "Fila vazia"
        }

        const removido = this.array[this.inicio]
        this.inicio++

        return removido
    }

    mostrarTamanho() {
        return this.array.length - this.inicio
    }

    mostrarFila() {
        return this.array.slice(this.inicio)
    }
}


// Teste

const fila = new Queue()

fila.enqueue({ nome: "Ronald", isElderly: false }) // Não idoso, entra no final
fila.enqueue({ nome: "Felipe", isElderly: false }) // Não idoso, entra no final
fila.enqueue({ nome: "Fred", isElderly: false }) // Não idoso, entra no final

fila.enqueue({ nome: "Sebastião", isElderly: true }) 
fila.enqueue({ nome: "Gertrude", isElderly: true })
fila.enqueue({ nome: "Terezinha", isElderly: true })

console.table(fila.mostrarFila()) // Sebastião, Gertrude, Terezinha, Ronald, Felipe, Fred // O console.table deixa mais fácil de visualizar a fila, nessa tabelinha ali 

fila.dequeue() // Sebastião
fila.dequeue() // Gertrude

fila.enqueue({ nome: "Maria", isElderly: true }) // Maria entra antes dos não idosos, mas depois dos idosos que já estão na fila

console.table(fila.mostrarFila()) // mostra a fila atualizada, na ordem de prioridade: Terezinha, Maria, Ronald, Felipe, Fred