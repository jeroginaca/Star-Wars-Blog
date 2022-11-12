import React, { useState, useEffect } from "react";
import CardCharacter from "../component/characters/CardCharacter.jsx";
import CardPlanets from "../component/characters/CardPlanets.jsx";
import CardVehicles from "../component/characters/CardVehicles.jsx";
import "../../styles/index.css"



export const Home = () => {

  const [charactersOpen, setCharactersOpen] = useState(false)
  const [planetsOpen, setPlanetsOpen] = useState(false)
  const [vehiclesOpen, setVehiclesOpen] = useState(false)

  return (
    <>
      <div className="container options">
        <h1 className="h1-reveal" onClick={()=>setCharactersOpen(!charactersOpen)}>Characters</h1>
        <div className="carrousel  container  mt-2"> 
          {charactersOpen && <CardCharacter />}
        </div>

        <h1 className="h1-reveal" onClick={()=>setPlanetsOpen(!planetsOpen)}>Planets</h1>
        <div className="carrousel  container  mt-2"> 
          {planetsOpen && <CardPlanets />}
        </div>
  

        <h1 className="h1-reveal" onClick={()=>setVehiclesOpen(!vehiclesOpen)}>Vehicles</h1>
        <div className="carrousel  container  mt-2"> 
          {vehiclesOpen && <CardVehicles />}
        </div>
      </div>
    </>
  );
};

