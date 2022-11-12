
import React, { Component, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";

const CardPlanets = () => {
	
    const {store, actions} = useContext(Context) 

    useEffect(() => {
      const response =   actions.getPlanets()

    }, [])

    return store.planet.map((planet, index) => {
        
        return(
            <div className="card-Character">
                <div className="card m-3" style={{"width" : "18rem"}} key={index}>
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${index+2}.jpg`} className="card-img-top" alt="..."/>
                    <div className="card-body text-start mx-2">
                        <h5 className="card-title"> {planet.name}</h5>
                        <p className="card-text">Population: {planet.population}</p>
                        <p className="card-text">Terrain: {planet.terrain}</p>
                     
                        <div className="d-flex justify-content-between mx-3">
                            <Link to={`/planets/${index+1}`}className="btn btn-outline-primary">Learn More</Link>
                            <button className="btn btn-outline-warning" onClick={() => actions.addFavorites(planet.name)}><i className="fa-regular fa-heart"></i></button>
                        </div>
                    </div>
                </div>
            </div>                   
            )
    })

    };

export default CardPlanets;