import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const URL = "https://rickandmortyapi.com/api/character";
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((datos) => {
        setData(datos.result)
        console.log(datos);

      });
  }, []);

  return (
    <>
    </>
  );
}

export default App;
