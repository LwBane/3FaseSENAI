const createUser = (userData) => {
if(!userData.name || !userData.name) {
throw new Error("O nome do usuário é obrigatório.")
};

if (userData.age < 18){
throw new Error("O usuário deve ser maior de idade.")
};

const newUser = {
id: Math.floor(Math.random() * 1000000),
name: userData.name,
age: userData.age,
isActive: true,
roles: ['user']
};

return newUser;
}


export default createUser