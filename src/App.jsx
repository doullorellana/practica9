import { useEffect, useState } from "react";
import Nav from "./components/Nav/Nav";
import "./App.css";

function App() {
  const URL = "https://rickandmortyapi.com/api/character";
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((datos) => {
        setData(datos.results);
        console.log(datos.results);
      });
  }, []);

  return (
    <>
      <Nav />
      <main>
        {data.map((el) => (
          <div key={el.id} className="card">
            <div className="divImg">
              <img src={el.image} alt={el.name} />
            </div>
            <div className="divText">
              <h3>{el.name}</h3>
              <p>Especie: {el.species}</p>
            </div>
          </div>
        ))}
      </main>
    </>
  );
}

export default App;
