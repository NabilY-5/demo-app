
import Navbar from "./components/Navbar";
import "./App.css";
 
const countriesList = [
  {
    name: "Paris",
    image:
      "https://img.freepik.com/free-photo/beautiful-wide-shot-eiffel-tower-paris-surrounded-by-water-with-ships-colorful-sky_181624-5118.jpg?ga=GA1.1.66729270.1737766141&semt=ais_hybrid&w=740",
    description:
      "Paris, la capitale de la France, est un véritable musée à ciel ouvert où l'histoire, l'art et la culture se mêlent harmonieusement. Réputée pour ses monuments emblématiques, la ville vous invite à découvrir la majestueuse Tour Eiffel, qui offre une vue panoramique imprenable sur la ville, ou encore la Cathédrale Notre-Dame, chef-d'œuvre de l'architecture gothique.",
    // Heure local : CEST
  },
  {
    name: "Londres",
    image:
      "https://www.freepik.com/free-photo/big-ben-westminster-bridge-sunset-london-uk_10589985.htm#fromView=search&page=1&position=0&uuid=a6429919-9fd7-47f1-970c-54373e99d840&query=londres",
    description:
      "Londres, capitale dynamique du Royaume-Uni, est une ville qui allie tradition et modernité avec une étonnante aisance. Les visiteurs peuvent commencer leur exploration par les sites iconiques comme le Palais de Buckingham, résidence de la Reine, ou l'abbaye de Westminster, témoin de siècles d'histoire royale. La fameuse horloge Big Ben et le Parlement britannique, majestueux au bord de la Tamise, sont également des incontournables.",
    // Heure local : "GMT+1"
  },
  {
    name: "Tokyo",
    image:
      "https://www.freepik.com/premium-photo/breathtaking-cityscape-tokyo-dusk_253823996.htm#fromView=search&page=1&position=27&uuid=aadc5d75-f88d-45a3-9890-163939882ea2&query=Tokyo",
    description:
      "Tokyo,a capitale du Japon, est une métropole vibrante où tradition et innovation se rencontrent à chaque coin de rue. C’est une ville où l’ancien et le moderne coexistent parfaitement : entre les temples anciens comme le Senso-ji à Asakusa et les quartiers ultramodernes comme Shibuya et Shinjuku, Tokyo offre une expérience unique.",
    // Heure local :GMT +9
  },
  {
    name: "New York",
    image:
      "https://www.freepik.com/free-photo/manhattan-skyline_26744480.htm#fromView=search&page=1&position=0&uuid=5f18e8bb-92bc-4e07-a7c1-ed3a028fcf1e&query=New+York",
    description:
      "New York, la ville qui ne dort jamais, est un véritable carrefour de cultures, d'art et de possibilités infinies. En tant que l'une des plus grandes métropoles du monde, elle offre une diversité étonnante et une énergie palpable à chaque coin de rue.",
    // Heure local : GMT -4
  },
];
        
        

function App() {
	return (
		<div>
			<Navbar />
		</div>
	);
}

export default App;
