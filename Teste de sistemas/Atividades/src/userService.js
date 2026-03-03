// ===== 3. Regra de Negócio (userService.js)  =====

// Função exportada: createUser(userData)
// Validações obrigatórias:
// Se não existir propriedade name: throw new Error("O nome do usuário é obrigatório.")
// Se age < 18: throw new Error("O usuário deve ser maior de idade.")
// Retorno esperado:
// { id: gerado_aleatoriamente, name: string, age: number, isActive: true, roles: ['user'] }

export const createUser = (userData) => {
    if (!userData || !userData.name) {
        throw new Error("O nome do usuário é obrigatório.");
    }
    if (userData.age < 18) {
        throw new Error("O usuário deve ser maior de idade.");
    }

    const newUser = {
        id: Math.floor(Math.random() * 1000000),
        name: userData.name,
        age: userData.age,
        isActive: userData.true,
        roles: ['user']
    };
    return newUser;
}
