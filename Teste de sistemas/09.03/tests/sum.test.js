import createUser from "../src/userService.js";

// Deve criar um usuário válido com todos os campos corretos
test("Teste de criar um usuário válido", () => {
    const userData = { name: "Carlos Mendes", age: 25 };

    const user = createUser(userData);

    expect(user.name).toBe("Carlos Mendes");
    expect(user.age).toBe(25);
    expect(user.isActive).toBe(true);
    expect(user.roles).toEqual(['user']); 
    expect(user.id).toBeDefined();
});

// Deve lançar erro quando o nome não for informado
test("Teste de lançar erro ao criar usuário sem nome", () => {
    const userData = { age: 30 };

    expect(() => createUser(userData)).toThrow("O nome do usuário é obrigatório.");
});

// Deve lançar erro quando o usuário for menor de idade
test("Teste de lançar erro ao criar usuário menor de idade", () => {
    const userData = { name: "Beatriz Lima", age: 15 };

    expect(() => createUser(userData)).toThrow("O usuário deve ser maior de idade.");
});