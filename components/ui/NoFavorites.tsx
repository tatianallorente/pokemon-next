import { Container, Text, Image } from "@nextui-org/react";

import { utils } from "../../utils";

export const NoFavorites = () => {
	return (
		<Container
			css={{
				display: "flex",
				flexDirection: "column",
				height: "calc(100vh - 100px)",
				alignItems: "center",
				justifyContent: "center",
				alignSelf: "center",
			}}
		>
			<Text h1>No hay favoritos</Text>
			<Image
				src={utils.dreamWorldImgUrl(132)}
				width={250}
				height={250}
				alt="No hay favoritos"
				css={{
					opacity: 0.1,
				}}
			/>
		</Container>
	);
};
