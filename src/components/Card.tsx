type CountryType = {
  name: string;
  image: string;
  description: string;
};

function Card({ name, image, description }: CountryType) {
  const handleclick = () => {};
  return (
    <>
      <span>
        <button onClick={() => handleclick} className="Button">
          {name}
        </button>
      </span>
      <div className="card">
        <h2 className="card-title">{name}</h2>
        <p className="card-description">{description}</p>
        <img src={image} alt={name} className="card-image" />
      </div>
    </>
  );
}

export default Card;
