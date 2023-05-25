import type { GetStaticProps, NextPage } from "next";

import { Grid } from "@nextui-org/react";

import { pokeApi } from "../api";
import { PokemonListResponse, SmallPokemon } from "../interfaces";
import { utils } from "../utils";
import { Layout } from "../components/layouts";
import { PokemonCard } from "../components/pokemon";

interface Props {
	pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
	return (
		<Layout title="Listado de Pokemons">
			<Grid.Container gap={2} justify="flex-start">
				{pokemons.map((pokemon) => (
					<PokemonCard pokemon={pokemon} key={pokemon.id} />
				))}
			</Grid.Container>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps = async (ctx) => {
	const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

	const pokemons: SmallPokemon[] = [...data.results].map((pokemon, i) => {
		return {
			...pokemon,
			id: i + 1,
			img: utils.dreamWorldImgUrl(i + 1),
		};
	});

	return {
		props: {
			pokemons,
		},
	};
};

export default HomePage;
