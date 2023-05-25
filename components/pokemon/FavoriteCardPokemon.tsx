import { FC } from "react";

import { useRouter } from "next/router";

import { Grid, Card } from "@nextui-org/react";

import { utils } from "../../utils";

interface Props {
	pokemonId: number;
}

export const FavoriteCardPokemon: FC<Props> = ({ pokemonId }) => {
	const router = useRouter();

	const onFavoriteClicked = () => {
		router.push(`/pokemon/${pokemonId}`);
	};

	return (
		<Grid xs={6} sm={3} md={2} xl={1} key={pokemonId} onClick={onFavoriteClicked}>
			<Card isHoverable isPressable css={{ padding: 10 }}>
				<Card.Image src={utils.dreamWorldImgUrl(pokemonId)} width={"100%"} height={140} />
			</Card>
		</Grid>
	);
};
