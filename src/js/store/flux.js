const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
          people: [], 
          planet: [],
          vehicle: [],
          favorites: []
        },
        actions: {
          getCharacters: () => {
            fetch("https://swapi.dev/api//people?page=1&limit=82") 
            .then((resp) => resp.json())
            .then((data) => {setStore({people: data.results}); console.log(getStore()) })
          },
          getPlanets: () => {
            fetch("https://swapi.dev/api//planets/") 
            .then((resp) => resp.json())
            .then((data) => setStore({planet: data.results}))
          },
          getVehicles: () => {
            fetch("https://swapi.dev/api//vehicles/") 
            .then((resp) => resp.json())
            .then((data) => setStore({vehicle: data.results}))
          },
          addFavorites: (name) => {
            const store = getStore();
            setStore({favorites: [...store.favorites, name]})
          },
          removeFavorites: (item) => {
            
            const store = getStore();
            
            let newList = store.favorites.filter((fav) => fav !== item);

            setStore({ favorites: newList });
          }
        }
    };
};

export default getState;

