// ====== AULA ======= 

// function esperarTempo(ms) {
//     return new Promise(
//         (resolve, reject) => {
//             setTimeout(() => {
//                 console.log("antes")
//                 // resolve(`Esperou ${ms}ms`);
//                 console.log("depois")
//                 // Para simular erro: 
//                 reject(new Error('Falhou'));
//             },
//                 ms);
//         });
// }
// esperarTempo(2000)
//     .then((resultado) => console.log(resultado))
//     .catch((erro) => console.error(erro))
//     .finally(() => console.log('Finalizado'));

// ====== ATIVIDADE =======

// Criar uma funcao que retorna uma promisse, e a ideia é simular o preparo do bolo
// Receber tempo de assamento
// Lógica que trata, se o tempo que foi passado é suficente pro bolo assar ou não
// Se sim, retorna a função do resolve -> informando que o bolo assou com sucesso
// Se não, retorna reject com bolo queimado ou cru
// finally, criatividade de voces.

function preparoBolo(tempo) { 
    return new Promise(
        (resolve, reject) => {
            setTimeout(() => {
                if (tempo >= 40 && tempo <= 45) {
                    resolve(`Esperou ${tempo} minutos, o bolo assou com sucesso!`);
                } else if (tempo > 45) {
                    reject(new Error('Falhou, o bolo queimou xD'));
                } else {
                    reject(new Error('Falhou, você não esquentou o suficiente, deixe mais'));
                }
            },
                2000);
        });
}
preparoBolo(80) // 80 É pra retornar como bolo queimado 
    .then((resultado) => console.log(resultado))
    .catch((erro) => console.error(erro))
    .finally(() => console.log('Finalizado'));


// Criar uma função que recebe um número aleatório, gerem o numero aleatorio
// quando chamar a funcao(usem metodos js)
// se o numero for maior que 5, retorna resolve, se não retorna reject
// usem o finally livremente.

function numeroAleatorio(numero) {
    return new Promise(
        (resolve, reject) => {
            setTimeout(() => {
                let numero = Math.floor(Math.random() * 10) + 1; // Gerar número aleatório entre 1 e 10
                if (numero > 5) {
                    resolve(`O número ${numero} é maior que 5, parabéns!`);
                } else {
                    reject(new Error(`O número ${numero} é menor ou igual a 5, tente novamente!`));
                }
            },
                3000);
        });
}
numeroAleatorio()
    .then((resultado) => console.log(resultado))
    .catch((erro) => console.error(erro))
    .finally(() => console.log('Eii, jogue novamente!'));