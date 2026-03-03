import { createUser } from "../src/userService.js";

describe("createUser", () => {

    test("Deve criar usuário válido", () => {
        const user = createUser({ name: "Emilie", age: 20 });

        expect(user.name).toBe("Emilie");
        expect(user.age).toBe(20);
        expect(user.isActive).toBe(true);
        expect(user.roles).toEqual(["user"]);
    });

});