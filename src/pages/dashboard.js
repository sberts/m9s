// latest.js
import React from "react";
import City from "../components/City";
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddCity from '../components/AddCity';
import EditCity from '../components/EditCity';
const Dashboard = () => {
	const [description, setDescription] = useState('dev');
	const [cities, setCities] = useState([
		{
			id: 1,
			name: 'mynamea',
			description: 'mydesc',
			img: 'https://images.pexels.com/photos/6572456/pexels-photo-6572456.jpeg?cs=srgb&dl=pexels-kelly-6572456.jpg&fm=jpg&w=640&h=360'
		},	{
			id: 2,
			name: 'mynameb',
			description: 'mydesc b',
			img: 'https://images.pexels.com/photos/6572456/pexels-photo-6572456.jpeg?cs=srgb&dl=pexels-kelly-6572456.jpg&fm=jpg&w=640&h=360'
		},	{
			id: 3,
			name: 'myname1',
			description: 'mydesc c ',
			img: 'https://images.pexels.com/photos/6572456/pexels-photo-6572456.jpeg?cs=srgb&dl=pexels-kelly-6572456.jpg&fm=jpg&w=640&h=360'
		},	{
			id: 4,
			name: 'myname2',
			description: 'mydesc 2222',
			img: 'https://images.pexels.com/photos/6572456/pexels-photo-6572456.jpeg?cs=srgb&dl=pexels-kelly-6572456.jpg&fm=jpg&w=640&h=360'
		},	{
			id: 5,
			name: 'myname3',
			description: 'mydesc3',
			img: 'https://images.pexels.com/photos/6572456/pexels-photo-6572456.jpeg?cs=srgb&dl=pexels-kelly-6572456.jpg&fm=jpg&w=640&h=360'
		},	{
			id: 6,
			name: 'myname4',
			description: 'mydesc4',
			img: 'https://images.pexels.com/photos/6572456/pexels-photo-6572456.jpeg?cs=srgb&dl=pexels-kelly-6572456.jpg&fm=jpg&w=640&h=360'
		},	{
			id: 7,
			name: 'myname5',
			description: 'mydesc5',
			img: 'https://images.pexels.com/photos/6572456/pexels-photo-6572456.jpeg?cs=srgb&dl=pexels-kelly-6572456.jpg&fm=jpg&w=640&h=360'
		}
	]);

	function updateCity(id, newName, newDescription) {
		console.log('updateCity inside of dashboard.js');
		const updatedCity = cities.map((city) => {
			if (id === city.id) {
				console.log('found the city');
				return {
					...city,
					name: newName,
					description: newDescription
				};
			}
			return city;
		});
		setCities(updatedCity);
	}


	function newCity(name, description, img) {
		const city = {
			id: uuidv4(),
			name: name,
			description: description,
			img: img,
		};
		setCities([...cities, city]);
	}

	const showDashboard = true;
	return (
		<>
		{showDashboard ? (
			<>
		<input type='text' onChange={(e) => {
			console.log(e.target.value);
			setDescription(e.target.value);
		}}
		/>
		<div>
			<h1 className='text-6xl'>Dashboard</h1>
		</div>
		<div className='flex flex-wrap justify-center'>
		
		{
			cities.map((city) => {
			console.log(city);
			const editCity = (
				<EditCity
				id={city.id}
				name={city.name}
				description={city.description}
				updateCity={updateCity} />
			);
			return (
				<City
					key={city.id}
					id={city.id}
					name={city.name}
					description={city.description}
					img={city.img}
					editCity={editCity}
				/>
			);
		})}
		</div>
		<AddCity newCity={newCity} />
		</>
	) : (
		<p>You cannot see the dashboard</p>
	)}
	</>
	)
};

export default Dashboard;
