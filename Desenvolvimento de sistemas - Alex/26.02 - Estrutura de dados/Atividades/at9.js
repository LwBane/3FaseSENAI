// ==== Exercício 9 ====
// Busca Binária Recursiva

// Comparar versão iterativa vs recursiva.
// Array: [1,2,3,4,5,6,7,8,9]

function buscaBinariaRecursiva(array, numeroBuscado, inicio=0, fim = array.length - 1){
    console.log("Chamou a função")
    if(inicio>fim) return -1 // se o meu início for maior que meu fim, não achei o número que eu estava procurando, então retorna ''-1''

    const meio = inicio + Math.floor((fim-inicio)/2)
    if(array[meio] === numeroBuscado) return meio

    if(array[meio] < numeroBuscado) return buscaBinariaRecursiva(array, numeroBuscado, meio+1)

    return buscaBinariaRecursiva(array, numeroBuscado, inicio, meio-1) 
}

console.log(buscaBinariaRecursiva([1,2,3,4,5,6,7,8,9], 2)) // 1 

