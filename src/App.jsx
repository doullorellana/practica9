import { useEffect, useState } from "react";
import Nav from "./components/Nav/Nav";
import Card from "./components/Card/Card";
import "./App.css";

function App() {
  const URL = "https://rickandmortyapi.com/api/character";
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((datos) => {
        setData(datos.results);
        setFiltered(datos.results);
        //console.log(datos.results);
      });
  }, []);

  const filterData = (text) => {
    const dataFiltered = data.filter((element) =>
      element.name.toLowerCase().includes(text.toLowerCase())
    );

    return dataFiltered;
  };

  const handleFilter = (e) => {
    e.preventDefault();
    const text = e.target[0].value;
    const resultFiltered = filterData(text);
    //setData(filtered);
    setFiltered(resultFiltered);
  };

  return (
    <>
      <Nav fnSubmit={handleFilter} />
      <main>
        {filtered.map((el) => (
          <Card ele={el}/>
        ))}
      </main>
    </>
  );
}

export default App;
