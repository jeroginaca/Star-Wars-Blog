import React, {useContext} from "react";
import { Link } from "react-router-dom";
import starLogo from "../../img/star wars logo.png"
import { Context } from "../store/appContext";

 export let imgs = [
	"https://w7.pngwing.com/pngs/384/403/png-transparent-stormtrooper-star-wars-anakin-skywalker-logo-stormtrooper-text-war-silhouette.png",
	"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png"
	

  ]; 

 

  
const Navbar = () => {

	const {store, actions} = useContext(Context) 

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container">
			<Link to="/">
				<img src={starLogo} style={{width: "30%"}} className="navbar-brand mb-0 logo"></img>
			</Link>
			<div className="ml-auto">
				
				
				<div className="dropdown">
					<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
						Favourites
					</button>
					
					<ul className="dropdown-menu">
					{store.favorites.map((fav) => 
						<li><a className="dropdown-item" href="#">
							{fav} <i class="fa-solid fa-trash" onClick={() => {
                                actions.removeFavorites(fav)} }></i>
							</a></li>
					)}
					</ul>
					</div>
				
			</div>
			</div>
		</nav>
	);
	
};



export default Navbar;