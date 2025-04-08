import { useState } from "react";
import Card from "./Card";

type CountryType = {
	name: string;
	image: string;
	description: string;
};

function Cardlist({ countries }: { countries: CountryType[] }) {
	const [choiceCity, setChoiceCity] = useState("");
	const selectedCity = countries.find((country) => country.name === choiceCity);

	return (
		<div>
			<nav>
				{countries.map((country) => (
					<button
						className={`city ${country.name}`}
						type="button"
						key={country.name}
						onClick={() => setChoiceCity(country.name)}
					>
						{country.name}
					</button>
				))}
			</nav>
			{selectedCity && (
				<Card
					name={selectedCity.name}
					image={selectedCity.image}
					description={selectedCity.description}
				/>
			)}
		</div>
	);
}

export default Cardlist;
