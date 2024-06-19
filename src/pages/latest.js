// latest.js
import React from "react";
import City from "../components/City";
import { useState } from 'react';

const Latest = () => {
	const [description, setDescription] = useState();
	const showCities = true;
	return (
		<>
		<input type='text' onChange={(e) => {
			console.log(e.target.value);
			setDescription(e.target.value);
		}}
		/>
		<div>
			<h1 className='text-6xl'>Latest</h1>
		</div>
		<div className="flex flex-wrap justify-center">
	
		<City name="Fjordhaven" description="level 16" img="https://images.pexels.com/photos/6572456/pexels-photo-6572456.jpeg?cs=srgb&dl=pexels-kelly-6572456.jpg&fm=jpg&w=640&h=360" />
		<City name="Northway" description="level 20" img="https://images.pexels.com/photos/6572456/pexels-photo-6572456.jpeg?cs=srgb&dl=pexels-kelly-6572456.jpg&fm=jpg&w=640&h=360" />
		<City name="Peach Tree" img="https://images.pexels.com/photos/6572456/pexels-photo-6572456.jpeg?cs=srgb&dl=pexels-kelly-6572456.jpg&fm=jpg&w=640&h=360" />
		<City name="Fjordhaven" description="level 16" img="https://images.pexels.com/photos/6572456/pexels-photo-6572456.jpeg?cs=srgb&dl=pexels-kelly-6572456.jpg&fm=jpg&w=640&h=360" />
		<City name="Northway" description="level 20" img="https://images.pexels.com/photos/6572456/pexels-photo-6572456.jpeg?cs=srgb&dl=pexels-kelly-6572456.jpg&fm=jpg&w=640&h=360" />
		<City name="Peach Tree" img="https://images.pexels.com/photos/6572456/pexels-photo-6572456.jpeg?cs=srgb&dl=pexels-kelly-6572456.jpg&fm=jpg&w=640&h=360" />
		<City name="Fjordhaven" description="level 16" img="https://images.pexels.com/photos/6572456/pexels-photo-6572456.jpeg?cs=srgb&dl=pexels-kelly-6572456.jpg&fm=jpg&w=640&h=360" />
		<City name="Northway" description="level 20" img="https://images.pexels.com/photos/6572456/pexels-photo-6572456.jpeg?cs=srgb&dl=pexels-kelly-6572456.jpg&fm=jpg&w=640&h=360" />
		<City name="Peach Tree" img="https://images.pexels.com/photos/6572456/pexels-photo-6572456.jpeg?cs=srgb&dl=pexels-kelly-6572456.jpg&fm=jpg&w=640&h=360" />
		<City name="Fjordhaven" description="level 16" img="https://images.pexels.com/photos/6572456/pexels-photo-6572456.jpeg?cs=srgb&dl=pexels-kelly-6572456.jpg&fm=jpg&w=640&h=360" />
		<City name="Northway" description="level 20" img="https://images.pexels.com/photos/6572456/pexels-photo-6572456.jpeg?cs=srgb&dl=pexels-kelly-6572456.jpg&fm=jpg&w=640&h=360" />
		<City name="Peach Tree" img="https://images.pexels.com/photos/6572456/pexels-photo-6572456.jpeg?cs=srgb&dl=pexels-kelly-6572456.jpg&fm=jpg&w=640&h=360" />
		<City name="Fjordhaven" description="level 16" img="https://images.pexels.com/photos/6572456/pexels-photo-6572456.jpeg?cs=srgb&dl=pexels-kelly-6572456.jpg&fm=jpg&w=640&h=360" />
		<City name="Northway" description="level 20" img="https://images.pexels.com/photos/6572456/pexels-photo-6572456.jpeg?cs=srgb&dl=pexels-kelly-6572456.jpg&fm=jpg&w=640&h=360" />
		<City name="Peach Tree" img="https://images.pexels.com/photos/6572456/pexels-photo-6572456.jpeg?cs=srgb&dl=pexels-kelly-6572456.jpg&fm=jpg&w=640&h=360" />
		</div>
		</>
	);
};

export default Latest;
