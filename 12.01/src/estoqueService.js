import { pool } from './config.js'

// Listar o valor total por item de produto, considerando a quantidade registrada e o valor unitário
export async function valorTotalPorItem() {
    const [rows] = await pool.query(
        `SELECT p.id AS produto_id, 
        p.nome AS produto,
        p.valor_unitario,
        SUM(m.quantidade) AS quantidade_total, 
        (SUM(m.quantidade) * p.valor_unitario) AS valor_total 
        FROM produto p 
        JOIN movimentacoes m ON p.id = m.produto_id 
        GROUP BY p.id`)

    return rows.map((item) => {
        const quantidade = item.quantidade_total;
        const valorUnitario = item.valor_unitario;
        return {
            produto: item.produto,
            quantidade_total: quantidade,
            valor_total: quantidade * valorUnitario
        };
    });
}

// Buscando produtos de limpeza cadastrados por id --> 1. CIF / 2. Água Sanitária / 3. Desinfetante...
export async function buscarProdutoPorId(produtoId) {
    const [rows] = await pool.query('SELECT * from produto WHERE id=?', 
        [produtoId]
    )
    return rows[0]
}

// Buscando produtos de limpeza (todos)
export async function buscarProdutos(produto) {
    const [rows] = await pool.query('SELECT * from produto')
    return rows
}

// Cadastrando novo produto de limpeza
export async function cadastrarProduto(
    nomeProduto,
    categoriaProduto,
    valorUniProduto,
    estoqueMinProduto,
    estoqueMaxProduto,
) {
    const [result] = await pool.query(
        `INSERT INTO produto
    (nome, categoria, valor_unitario, estoque_minimo, estoque_maximo) 
    VALUES (?, ?, ?, ?, ?)`,
        [nomeProduto, categoriaProduto, valorUniProduto, estoqueMinProduto, estoqueMaxProduto]
    )

    return result.insertId
}

// Consultar todas as saídas de produtos, apresentadas em ordem descrescente por data 
export async function consultarSaidasProdutos() {}

// Registrar entradas de itens no estoque
export async function registrarEntradaProduto(){}

// Penúltimo item... Receber uma data inicial e uma final...
export async function produtoMaiorSaidaNoPeriodo(dataInicial, dataFinal) {
    const [rows] = await pool.query(`SELECT p.id AS produto_id, 
        p.nome AS produto, 
        p.valor_unitario, 
        m.quantidade_total_saida
        FROM produto p 
        LEFT JOIN 
        ( SELECT produto_id, SUM(quantidade) AS quantidade_total_saida 
        FROM movimentacoes 
        WHERE tipo = 'SAIDA' 
        AND data_movimentacao 
        BETWEEN ? AND ? 
        GROUP BY produto_id ) m on m.produto_id = p.id 
        ORDER BY m.quantidade_total_saida DESC`,
        [dataInicial, dataFinal]);
    return rows.map((item) => {
        const quantidade = item.quantidade_total_saida; 
        const valorUnitario = item.valor_unitario; 
        return {
            produto: item.produto, 
            quantidade_total_saida: quantidade, 
            valor_total_financeiro_saidas: quantidade * valorUnitario
        };
    });
}

// Identificar produtos que tenham atingido os limites mínimo e máximo estabelecidos 
export async function produtosAtingiramLimites() {}