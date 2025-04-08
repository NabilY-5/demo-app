import Navbar from "./components/Navbar";
import Cardlist from "./components/Cardlist";
import Footer from "./components/Footer";
import "./App.css";

const countriesList = [
	{
		name: "Paris",
		image: "Paris.avif",
		description:
			"Paris, la capitale de la France, est un véritable musée à ciel ouvert où l'histoire, l'art et la culture se mêlent harmonieusement. Réputée pour ses monuments emblématiques, la ville vous invite à découvrir la majestueuse Tour Eiffel, qui offre une vue panoramique imprenable sur la ville, ou encore la Cathédrale Notre-Dame, chef-d'œuvre de l'architecture gothique.",
		// Heure local : CEST
	},
	{
		name: "Londres",
		image: "Londres.jpg",
		description:
			"Londres, capitale dynamique du Royaume-Uni, est une ville qui allie tradition et modernité avec une étonnante aisance. Les visiteurs peuvent commencer leur exploration par les sites iconiques comme le Palais de Buckingham, résidence de la Reine, ou l'abbaye de Westminster, témoin de siècles d'histoire royale. La fameuse horloge Big Ben et le Parlement britannique, majestueux au bord de la Tamise, sont également des incontournables.",
		// Heure local : "GMT+1"
	},
	{
		name: "Tokyo",
		image: "Tokyo.jpg",
		description:
			"Tokyo,a capitale du Japon, est une métropole vibrante où tradition et innovation se rencontrent à chaque coin de rue. C’est une ville où l’ancien et le moderne coexistent parfaitement : entre les temples anciens comme le Senso-ji à Asakusa et les quartiers ultramodernes comme Shibuya et Shinjuku, Tokyo offre une expérience unique.",
		// Heure local :GMT +9
	},
	{
		name: "New York",
		image: "New-York.avif",
		description:
			"New York, la ville qui ne dort jamais, est un véritable carrefour de cultures, d'art et de possibilités infinies. En tant que l'une des plus grandes métropoles du monde, elle offre une diversité étonnante et une énergie palpable à chaque coin de rue.",
		// Heure local : GMT -4
	},
];

function App() {
	return (
		<>
			<Navbar />
			<div>
				<h1>Mon blog voyage</h1>
				<img
					src="avion trajet.jpg"
					alt="Trajet poitillé d'un avion"
					className="Airplane"
				/>
				<Cardlist countries={countriesList} />
			</div>
			<Footer />
		</>
	);
}

export default App;
