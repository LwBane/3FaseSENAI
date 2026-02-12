CREATE DATABASE IF NOT EXISTS estoque_db;  

USE estoque_db; 

-- == TABELA DOS MATERIAIS DE LIMPEZA -- 
-- (o nome ia ser material mas eu tava confundindo o m com o de movimentações dai troquei) == 

CREATE TABLE produto (
id INT PRIMARY KEY auto_increment, 
nome VARCHAR(150) NOT NULL, 
categoria VARCHAR(80) NOT NULL,
valor_unitario DECIMAL (10,2) NOT NULL,
estoque_minimo INT NOT NULL DEFAULT 0,
estoque_maximo INT NOT NULL DEFAULT 0,
created_at timestamp default current_timestamp
);

-- == TABELA DA MOVIMENTAÇÃO DESSES MATERIAIS == 

CREATE TABLE movimentacoes (
id INT PRIMARY KEY auto_increment, 
produto_id INT NOT NULL, 
tipo ENUM('ENTRADA', 'SAIDA') NOT NULL, 
quantidade INT NOT NULL, 
data_movimentacao datetime NOT NULL DEFAULT current_timestamp, 
created_at timestamp DEFAULT current_timestamp,
CONSTRAINT fk_movimentacoes_materiais
	FOREIGN KEY (produto_id) REFERENCES produto(id)
	ON UPDATE CASCADE 
    ON DELETE RESTRICT
);

-- == POPULANDO AS TABELAS == 

-- Dos materiais de limpeza 
INSERT INTO produto
(nome, categoria, valor_unitario, estoque_minimo, estoque_maximo) 
VALUES 
('CIF', 'Cozinha', '10.00', '5', '20'), 
('Água sanitária', 'Banheiro', '15.00', '10', '30'), 
('Desinfetante', 'Geral', '5.00', '20', '100');

-- Das movimentações 
INSERT INTO movimentacoes
(produto_id, tipo, quantidade, data_movimentacao) 
VALUES 
('1', 'ENTRADA', '2', '2026-02-12 10:00:00'),
('2', 'ENTRADA', '5', '2026-02-12 10:00:00'),
('3', 'SAIDA', '10', '2026-02-12 10:00:00'); 

-- == CRIANDO A VIEW ''vw_estoque'' --> -- View responsável por calcular 
-- e apresentar o valor total por item de produto, considerando a quantidade registrada e o valor unitário == 

CREATE VIEW vw_estoque as 
SELECT p.id as produto_id, 
p.nome, 
p.categoria, 
p.valor_unitario, 
SUM( 
CASE 
	WHEN m.tipo = 'ENTRADA' THEN m.quantidade 
    WHEN m.tipo = 'SAIDA' THEN -m.quantidade 
    ELSE 0 
END) as saldo_estoque, 
SUM(
CASE
	WHEN m.tipo = 'ENTRADA' THEN m.quantidade 
    WHEN m.tipo = 'SAIDA' THEN -m.quantidade 
	ELSE 0
END) * p.valor_unitario as valor_total_item
from produto p 

LEFT JOIN movimentacoes m on m.produto_id = p.id
group by p.id, 
p.nome, 
p.categoria,
p.valor_unitario 
