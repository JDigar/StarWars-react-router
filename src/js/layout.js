import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ScrollToTop from "./component/scrollToTop";
import { Navbar } from "./component/navbar";
import { Home } from "./views/home";
import injectContext from "./store/appContext";
import Detalles from "./views/detalles";
import { Footer } from "./component/footer";
import DetallesPlanetas from "./views/planetsDetails";
import DetallesVehiculos from "./views/VehiclesDetails";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
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
						<Route exact path="/detalles/:theid">
							<Detalles />
						</Route>
						<Route exact path="/planetsDetails/:theid">
							<DetallesPlanetas />
						</Route>
						<Route exact path="/VehiclesDetails/:theid">
							<DetallesVehiculos />
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
