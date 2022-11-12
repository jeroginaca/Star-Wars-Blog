import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";


import  Navbar  from "./component/navbar";
import { Footer } from "./component/footer";
import CharacterDetail from "./component/characters/CardDetail.jsx";
import PlanetDetail from "./component/characters/CardDetailPlanets.jsx";
import VehicleDetail from "./component/characters/CardDetailVehicles.jsx";


const Layout = () => {
	
	const basename = process.env.BASENAME || "";

	return (
		<div>
		
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/characters/:id">
							<CharacterDetail />
						</Route>
						<Route exact path="/planets/:id">
							<PlanetDetail />
						</Route>
						<Route exact path="/vehicles/:id">
							<VehicleDetail />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		
		</div>
	);
};

export default injectContext(Layout);
