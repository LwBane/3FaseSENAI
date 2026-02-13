import { buscarProdutoPorId, buscarProdutos, cadastrarProduto} from "./estoqueService.js";
import { pool } from "./config.js"

// // Buscando produtos de limpeza cadastrados por id
// async function main() {
//     console.log(await buscarProdutoPorId(1))
// }

// // Buscando produtos todos os produtos de limpeza cadastrados
// async function main() {
//     console.log(await buscarProdutos())
// }

// Cadastrando novo produto de limpeza
async function main() {
    const idProduto = await cadastrarProduto(
        'Desinfetante', 'Limpeza', 10.00, 5, 100
    )
    console.log(`Produto cadastrado com sucesso!: ${idProduto}`)
}

main().catch(error => 
        console.error(error)
).finally(async () => { 
    await  pool.end();
})


