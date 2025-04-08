type CountryType = {
	name: string;
	image: string;
	description: string;
};

function Card({ name, image, description }: CountryType) {
	return (
		<>
			<div className="card">
				<h2 className="card-title">{name}</h2>
				<p className="card-description">{description}</p>
				<img src={image} alt={name} className="card-image" />
			</div>
		</>
	);
}

export default Card;
