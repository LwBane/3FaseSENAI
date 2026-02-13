import { buscarProdutoPorId, buscarProdutos, cadastrarProduto} from "./estoqueService.js";
import { pool } from "./config.js"

async function main() {
//Buscando produtos de limpeza cadastrados por id
    console.log(await buscarProdutoPorId(1))

// Buscando produtos de limpeza (todos)
console.log(await buscarProdutos())

// Cadastrando novo produto de limpeza
// const idProduto = await cadastrarProduto(
//     'Desinfetante', 'Limpeza', 10.00, 5, 100
// )
// console.log(`Produto cadastrado com sucesso!`)
// 
}


main().catch(error => 
        console.error(error)
).finally(async () => { 
    await  pool.end();
})


