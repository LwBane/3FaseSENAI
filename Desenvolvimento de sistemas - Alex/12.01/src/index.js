import { buscarProdutoPorId, buscarProdutos, cadastrarProduto, valorTotalPorItem, produtoMaiorSaidaNoPeriodo} from "./estoqueService.js";
import { pool } from "./config.js"

async function main() {
//Buscando produtos de limpeza cadastrados por id
    console.log(await buscarProdutoPorId(1))

// Buscando produtos de limpeza (todos)
console.log(await buscarProdutos())

// Cadastrando novo produto de limpeza
const idProduto = await cadastrarProduto(
    'Desinfetanteteste2', 'Limpeza', 10.00, 5, 100
)
console.log(`Produto cadastrado com sucesso!`)


// Listar o valor total por item de produto, considerando a quantidade registrada e o valor unitário  
console.log(await valorTotalPorItem())

// Receber uma data inicial e uma data final... 
// const dataInicial = '2026-02-11'
// const dataFinal = '2026-02-12'

// console.log(await produtoMaiorSaidaNoPeriodo(dataInicial, dataFinal))
// 
}


main().catch(error => 
        console.error(error)
).finally(async () => { 
    await  pool.end();
})


