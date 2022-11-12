
import React, { Component, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";

const CardVehicles = () => {
	
    const {store, actions} = useContext(Context) 

    useEffect(() => {
      const response =   actions.getVehicles()

    }, [])

    return store.vehicle.map((vehicle, index) => {
        
        return(
            <div className="card-Character">
                <div className="card m-3" style={{"width" : "18rem"}} key={index}>
                    <img src={`https://starwars-visualguide.com/assets/img/vehicles/${index+2}.jpg`} className="card-img-top" alt="..."/>
                    <div className="card-body text-start mx-2">
                        <h5 className="card-title"> {vehicle.name}</h5>
                        <p className="card-text">Population: {vehicle.population}</p>
                        <p className="card-text">Terrain: {vehicle.terrain}</p>
                     
                        <div className="d-flex justify-content-between mx-3">
                            <Link to={`/vehicles/${index+1}`}className="btn btn-outline-primary">Learn More</Link>
                            <button className="btn btn-outline-warning" onClick={() => actions.addFavorites(vehicle.name)}><i className="fa-regular fa-heart"></i></button>
                        </div>
                    </div>
                </div>
            </div>                   
            )
    })

    };

export default CardVehicles;