/**
 * userService.test.js
 * Testes unitários para userService
 */

import { createUser } from "../src/userService.js";

describe("createUser", () => {
    // CT-01: Sucesso na criação de usuário válido
    test("CT-01 - deve criar usuário com dados válidos", () => {
        const userData = { name: "João Silva", age: 25 };
        const user = createUser(userData);

        expect(user.name).toBe("João Silva");
        expect(user.age).toBe(25);
        expect(user.isActive).toBe(true);
        expect(user.roles).toEqual(["user"]);
        expect(typeof user.id).toBe("number");
    });

    // CT-02: Erro quando name não é fornecido
    test("CT-02 - deve lançar erro quando name não é fornecido", () => {
        expect(() => {
            createUser({ age: 25 });
        }).toThrow("O nome do usuário é obrigatório.");
    });

    // CT-02b: Erro quando userData é null/undefined
    test("CT-02b - deve lançar erro quando userData é null", () => {
        expect(() => {
            createUser(null);
        }).toThrow("O nome do usuário é obrigatório.");
    });

    // CT-03: Erro quando age < 18
    test("CT-03 - deve lançar erro quando usuário é menor de idade", () => {
        expect(() => {
            createUser({ name: "Maria", age: 16 });
        }).toThrow("O usuário deve ser maior de idade.");
    });

    // CT-03b: Usando try/catch para validar exceção de menor de idade
    test("CT-03b - valida mensagem de erro com try/catch para menor de idade", () => {
        try {
            createUser({ name: "Pedro", age: 17 });
            fail("Deveria ter lançado um erro");
        } catch (error) {
            expect(error.message).toBe("O usuário deve ser maior de idade.");
        }
    });

    // CT-02c: Usando try/catch para validar exceção de nome ausente
    test("CT-02c - valida mensagem de erro com try/catch para nome ausente", () => {
        try {
            createUser({ age: 20 });
            fail("Deveria ter lançado um erro");
        } catch (error) {
            expect(error.message).toBe("O nome do usuário é obrigatório.");
        }
    });

    // Verifica estrutura completa do retorno
    test("deve retornar objeto com todas as propriedades esperadas", () => {
        const result = createUser({ name: "Ana", age: 30 });

        expect(result).toEqual(
            expect.objectContaining({
                name: "Ana",
                age: 30,
                isActive: true,
                roles: ["user"],
            })
        );
    });
});