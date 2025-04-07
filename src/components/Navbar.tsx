function Navbar() {
	return (
		<nav>
			<div className="logo">
				<img src="./logo.jpg" alt="logo" />
			</div>
			<ul className="nav">
				<li>
					<a href="https://wwws.airfrance.fr/">S'envoler</a>
				</li>
				<li>
					<a href="https://www.xe.com/fr/currencyconverter/">Convertisseur</a>
				</li>
				<li>
					<a href="https://www.getyourguide.com/fr-fr/">Découvrir</a>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
