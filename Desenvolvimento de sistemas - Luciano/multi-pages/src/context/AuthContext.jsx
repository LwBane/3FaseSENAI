import { Children, createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email) => {
    setUser({ email }); // Passando como objeto para pegar mais dados no futuro, caso preciso. Ex: setUser({email, name:"Joao", role: "admin"}) --> "Isso serve para caso quisermos escalar as coisas, se eu quisesse adicionar um name"
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
        {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => useContext(AuthContext)