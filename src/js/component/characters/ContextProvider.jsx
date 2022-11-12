import React, { useState } from "react";


const MyContext = React.createContext(null);

const ContextProvider = (props) => {

    const [store, setStore] = useState(
        {
            favorites : []
        } 
        );

    const [actions, setActions] = useState(
        {
        addFavorite: (title) =>{
            setStore({
                ...store, favorites: favorites.concat(title)
            })
        },
        removeFavorite: (title) =>{
            setStore({
                ...store, favorites: favorites.concat(title)
            })
        }
        }
    )

    return(
        <MyContext.Provider value={{ actions, store }}>
            {props.children}
        </MyContext.Provider>
    ) 

}

export default ContextProvider