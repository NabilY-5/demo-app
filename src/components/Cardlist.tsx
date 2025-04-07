import Card from "./Card";

type CountryType = {
	name: string;
	image: string;
	description: string;
};

function Cardlist({ countries }: { countries: CountryType[] }) {
	return (
		<>
			<div className="cardlist">
				{countries.map((country) => (
					<Card
						key={country.name}
						name={country.name}
						image={country.image}
						description={country.description}
					/>
				))}
			</div>
		</>
	);
}

export default Cardlist;
