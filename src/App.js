// Filename - App.js

import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Latest from "./pages/latest";
import Popular from "./pages/popular";
import Contact from "./pages/contact";
import Dashboard from "./pages/dashboard";


function App() {
	return (<div>
		<Header />
    	<Router>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/latest" element={<Latest />} />
				<Route path="/popular" element={<Popular />} />
      			<Route path="/about" element={<About />} />
     			<Route path="/dashboard" element={<Dashboard />} />
			</Routes>
		</Router>
    </div>
	);
}

export default App;
