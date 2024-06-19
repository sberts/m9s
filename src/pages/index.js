// Filename - pages/index.js

import React from "react";
import City from "../components/City";



const Home = () => {
	return (
    <>
			<header className="header bg-cover bg-center">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
      <h1 className="text-4xl font-bold text-white">Welcome to Megalopolis City!</h1>
      <p className="mt-4 text-white">
		Just arrived? There is a lot of construction going on in the city right now.</p>
      <a href="#" className="mt-6 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Join Now</a>
    </div>
  </header>

  <div className="flex flex-wrap justify-center py-8">
	
  <City name="Fjordhaven" description="level 16" img="https://images.pexels.com/photos/6572456/pexels-photo-6572456.jpeg?cs=srgb&dl=pexels-kelly-6572456.jpg&fm=jpg&w=640&h=360" />
  <City name="Northway" description="level 20" img="https://images.pexels.com/photos/6572456/pexels-photo-6572456.jpeg?cs=srgb&dl=pexels-kelly-6572456.jpg&fm=jpg&w=640&h=360" />
  <City name="Peach Tree" img="https://images.pexels.com/photos/6572456/pexels-photo-6572456.jpeg?cs=srgb&dl=pexels-kelly-6572456.jpg&fm=jpg&w=640&h=360" />
  </div>
  </>
	);
};

export default Home;
