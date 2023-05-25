import { useEffect, useState } from "react";

import type { NextPage } from "next";

import { Layout } from "../../components/layouts";
import { Pokemon } from "../../interfaces";
import { localFavorites } from "../../utils";
import { NoFavorites } from "../../components/ui";
import { FavoritePokemons } from "../../components/pokemon";

interface Props {
	pokemon: Pokemon;
}

const FavoritesPage: NextPage<Props> = () => {
	const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

	useEffect(() => {
		setFavoritePokemons(localFavorites.favoritePokemons());
	}, []);

	return (
		<Layout title="Pokemons - Favoritos">
			{favoritePokemons.length > 0 ? (
				<FavoritePokemons pokemons={favoritePokemons} />
			) : (
				<NoFavorites />
			)}
		</Layout>
	);
};

export default FavoritesPage;
