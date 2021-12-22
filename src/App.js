import React from "react";
import Games from "./components/Games";
import Navbar from "./components/Navbar";
import './App.css';

//Obtenha sua API Key  aqui https://rawg.io/apidocs
const API_KEY = '';

function App() {
  const [ queryString, setQuery ] = React.useState(null);
  const [ games, setGames] = React.useState(null);

  React.useEffect(() => {
    if (queryString !== null){
      fetch("https://api.rawg.io/api/games?key="+API_KEY+"&search="+queryString)
        .then((response) => response.json())
        .then((json) => setGames(json));
    }
  },[queryString]);

  React.useEffect(() => {
    fetch("https://api.rawg.io/api/games?key="+API_KEY)
      .then((response) => response.json())
      .then((json) => setGames(json));
  },[]);



  return (
    <>
      <Navbar setQuery={setQuery}/>
      <div className="container">
        { games ? <Games games={games}/> : <div className="loader"></div>}
      </div>
    </>
  );
}

export default App;
