//  ===== 5. Servidor(server.js) =====

// Servidor rodando na porta 3000.

import app from "./app.js";

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});