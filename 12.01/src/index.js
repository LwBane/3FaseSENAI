import { buscarProdutoPorId, cadastrarProduto, produtoMaiorSaidaNoPeriodo } from "./estoqueService";
import { pool } from "./config.js"

async function main() {
    console.log(await buscarProdutoPorId(1))

    const dataInicial = "2026-02-11 10:00:00"; 
    const dataFinal = "2026-02-12 10:00:00";
    console.log(await produtoMaiorSaidaNoPeriodo(dataFinal, dataFinal))
}

main().catch(error => 
        console.error(error)
).finally(async () => { 
    await  pool.end();
})