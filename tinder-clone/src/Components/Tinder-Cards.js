import React, { useEffect, useState } from "react";
import TinderCards from "react-tinder-card";
// import axios from "../axios";

function TinderCard() {
	const [characters, setCharacter] = useState([]);

	useEffect(() => {
		fetch("https://host-tinder-backend.herokuapp.com/tinder/cards")
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setCharacter(data);
			})
			.catch((error) => console.log("ERROR"));
	}, []);

	const swiped = (direction, nameToDelete) => {
		console.log("removing: " + nameToDelete);
	};

	const outOfFrame = (name) => {
		console.log(name + " left the screen!");
	};

	return (
		<div className='cardContainer'>
			<div className='cardBundle'>
				{characters.map((character) => (
					<TinderCards
						className='swipe'
						key={character._id}
						onSwipe={(dir) => swiped(dir, character.name)}
						onCardLeftScreen={() => outOfFrame(character.name)}
					>
						<div
							style={{ backgroundImage: "url(" + character.imgURL + ")" }}
							className='card'
						>
							<h3>{character.name}</h3>
						</div>
					</TinderCards>
				))}
			</div>
		</div>
	);
}

export default TinderCard;
