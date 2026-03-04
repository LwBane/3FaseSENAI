import React, { useEffect, useState } from "react";

import styles from './Card.module.css'

export const CardApi = () => {
  //   let contador = 0;
  // const [contador, setContador] = useState(0)

  //   const incrementaValor = () => {
  //     // contador++;
  //     setContador(prev => prev +1)
  //     console.log("contador:", contador);
  //   };

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
    // .then(data => setUsers(data))
  }, []);

  return (
    <>
      <div className={styles.cardContainerApi}>
        {users.map(
          (
            user, // cada user representa um dado de users (que é um array)
          ) => (
            <div className={styles.card} key={user.id}>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
              <p>{user.address.sreet}</p>
              <p>{user.address.geo.lat}</p>
              <p>{user.address.geo.lng}</p>
            </div>
          ),
        )}
      </div>

      {/* <p>{contador}</p>
      <button onClick={incrementaValor}>Add</button> */}
    </>
  );
};
