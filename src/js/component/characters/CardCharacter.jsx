
import React, { Component, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";


const MyContext = React.createContext(null);

const ContextProvider = (props) => {

    const [store, setStore] = useState("Empty");
    const [actions, setActions] = useState({
        addFavorites: (title) =>{
            setStore({
                ...store, title
            })
        }
    })

    return(
        <MyContext.Provider value={{ actions, store }}>
            {props.children}
        </MyContext.Provider>
    ) 

}

const CardCharacter = () => {
	
    const {store, actions} = useContext(Context) 

    const [ like, setLike ] = useState(false);

    const handleClick = () => {
        setLike (!like);
    }


   /* useEffect(() => {
        if (like) {
            actions.addFavorites(people.name)
        } else {
            actions.removeFavorites(people.name)
        }
    }) */

    useEffect(() => {
      const response =   actions.getCharacters()

    }, [])

    return store.people.map((people, index) => {
        
        return(
            <div className="card-Character">
                <div className="card m-3" style={{"width" : "18rem"}} key={index}>
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${index+1}.jpg`} className="card-img-top" alt="..."/>
                    <div className="card-body text-start mx-2">
                        <h5 className="card-title"> {people.name}</h5>
                        <p className="card-text">Gender: {people.gender}</p>
                        <p className="card-text">Hair Color: {people.hair_color}</p>
                        <p className="card-text">Eye-Color: {people.eye_color}</p>
                        <div className="d-flex justify-content-between mx-3">
                            <Link to={`/characters/${index+1}`}className="btn btn-outline-primary">Learn More</Link>
                            <button className="btn btn-outline-warning" onClick={() => {
                                actions.addFavorites(people.name)} } >
                                 <i  className={`${like ? "fa-regular fa-heart-fill" : "fa-regular fa-heart"}`}></i> 
                                </button>
                        </div>
                    </div>
                </div>
            </div>                   
            )
    })

    };

export default CardCharacter;