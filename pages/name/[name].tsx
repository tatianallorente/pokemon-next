import { useState, useEffect } from "react";

import type { GetStaticProps, NextPage, GetStaticPaths } from "next";

import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";

import confetti from "canvas-confetti";

import { Layout } from "../../components/layouts";
import { pokeApi } from "../../api";
import { Pokemon, PokemonListResponse } from "../../interfaces";
import { getPokemonInfo, localFavorites, utils } from "../../utils";

interface Props {
	pokemon: Pokemon;
}

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {
	const { id, name, sprites } = pokemon;

	const [isInFavorites, setIsInFavorites] = useState(false);

	useEffect(() => {
		setIsInFavorites(localFavorites.existInFavorites(id));
	}, [id]);

	const onToggleFavorite = () => {
		localFavorites.toggleFavorite(id);
		setIsInFavorites(!isInFavorites);

		if (isInFavorites) return;

		confetti({
			zIndex: 999,
			particleCount: 100,
			spread: 160,
			angle: -100,
			origin: {
				x: 1,
				y: 0,
			},
		});
	};

	return (
		<Layout title={utils.wordCapitalize(name)}>
			<Grid.Container css={{ marginTop: "5px" }} gap={2}>
				<Grid xs={12} sm={4}>
					<Card isHoverable css={{ padding: "30px" }}>
						<Card.Body>
							<Card.Image
								src={sprites.other?.dream_world.front_default || "/no_img.png"}
								alt={name}
								width="100%"
								height={200}
							/>
						</Card.Body>
					</Card>
				</Grid>

				<Grid xs={12} sm={8}>
					<Card>
						<Card.Header css={{ display: "flex", justifyContent: "space-between" }}>
							<Text h1 transform="capitalize">
								{name}
							</Text>

							<Button color="gradient" ghost={!isInFavorites} onPress={onToggleFavorite}>
								{isInFavorites ? "Guardado en favoritos" : "Guardar en favoritos"}
							</Button>
						</Card.Header>

						<Card.Body>
							<Text size={30}>Sprites:</Text>

							<Container display="flex" direction="row" gap={0}>
								<Image src={sprites.front_default} alt={name} width={100} height={100} />
								<Image src={sprites.back_default} alt={name} width={100} height={100} />
								<Image src={sprites.front_shiny} alt={name} width={100} height={100} />
								<Image src={sprites.back_shiny} alt={name} width={100} height={100} />
							</Container>
						</Card.Body>
					</Card>
				</Grid>
			</Grid.Container>
		</Layout>
	);
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
	const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");
	const pokemonNames: string[] = data.results.map((pokemon) => pokemon.name);

	return {
		paths: pokemonNames.map((name) => ({
			params: { name },
		})),
		fallback: "blocking",
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { name } = params as { name: string };

	const pokemon = await getPokemonInfo(name);

	if (!pokemon) {
		return {
			redirect: {
				destination: "/",
				permanent: false,
			},
		};
	}

	return {
		props: {
			pokemon,
		},
		revalidate: 86400,
	};
};

export default PokemonByNamePage;
