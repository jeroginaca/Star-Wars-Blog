
import React, { Component, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";
import "../../../styles/index.css"

const CharacterDetail = () => {
    
const {store, actions} = useContext(Context) 
const params = useParams()
const id = params.id

 return(

  <div className="container">
        <div className="desc-lead d-flex text-start align-items-center" >
            <div>
                <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} className="card-img-top" alt="..."/>
            </div>
            <div className="desc-text">
                <h5 className="card-title"> {store.people[id-1].name}</h5>
                <p className="card-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quia cupiditate et vitae qui unde odio doloribus fuga, iste doloremque laborum consectetur repellat ex omnis.</p>
            </div>
        </div>
        <div className="red-desc d-flex justify-content-center text-center">
                <p className="card-text p-5 ">Gender: <br />{store.people[id-1].gender}</p>
                <p className="card-text p-5 ">Birth Year: <br />{store.people[id-1].birth_year}</p>
                <p className="card-text p-5 ">Hair Color: <br />{store.people[id-1].hair_color}</p>
                <p className="card-text p-5 ">Eye-Color: <br />{store.people[id-1].eye_color}</p>
        </div>
    </div> 
                
    )
    };

export default CharacterDetail;