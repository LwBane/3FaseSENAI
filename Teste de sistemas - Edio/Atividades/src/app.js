//  ===== 4. Express(app.js) =====

// app.use(express.json())
// Criar rota POST / users
// Retornar 201 em sucesso
// Retornar 400 em erro com: { "error": error.message }

import express from "express";
import { createUser } from "./userService.js";

const app = express();
app.use(express.json()); 

app.post("/users", (req, res) => {
    try {
        const user = createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

export default app;