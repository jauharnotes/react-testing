import React, { useEffect, useState } from "react";

export const data = [
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jumat",
  "Sabtu",
  "Minggu",
];

const CompVariant = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setUser("Prawito");
    }, 1000);
  }, []);

  return (
    <>
      {user ? <p>Selamat datang {user}</p> : null}
      <p>Hari-hari yang ada: </p>
      {data.map((hari, i) => {
        return (
          <p data-testid="hari" key={i}>
            {hari}
          </p>
        );
      })}
    </>
  );
};

export default CompVariant;
