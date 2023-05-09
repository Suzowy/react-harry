
import { useEffect, useState } from "react";

function App() {
  const [characters, setCharacters] = useState([]);
  const[house, setHouse]= useState("Gryffindor")

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters/house/" +house)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setCharacters(data);
      });
  }, [house]);

  return (
    <>
    <div>
      <select name="" id="" onChange={(ev)=> setHouse(ev.target.value)}>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Slytherin">Slytherin</option>
      </select>
    </div>
      {characters.map((character) => (
        <div key= {character.name}>
          <h3>{character.name}</h3>
          <p>{character.house}</p>
          <img src={character.image} alt={character.name} />
        </div>
      ))}
    </>
  );
}

export default App;
