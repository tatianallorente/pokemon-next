const toggleFavorite = (id: number) => {
	let favorites: number[] = JSON.parse(window.localStorage.getItem("favorites") || "[]");

	if (favorites.includes(id)) {
		favorites = favorites.filter((pokeId) => pokeId !== id);
	} else {
		favorites.push(id);
	}

	window.localStorage.setItem("favorites", JSON.stringify(favorites));
};

const existInFavorites = (id: number): boolean => {
	// Para que no de error en la parte del servidor, ya que window no existe allí
	if (typeof window === "undefined") return false;

	const favorites: number[] = JSON.parse(window.localStorage.getItem("favorites") || "[]");

	return favorites.includes(id);
};

const favoritePokemons = (): number[] => {
	return JSON.parse(window.localStorage.getItem("favorites") || "[]");
};

const exportedFunctions = { toggleFavorite, existInFavorites, favoritePokemons };

export default exportedFunctions;
