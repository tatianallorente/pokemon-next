import Image from "next/image";
import Link from "next/link";

import { Spacer, Text, useTheme } from "@nextui-org/react";

import { utils } from "../../utils";

export const NavBar = () => {
	const { theme } = useTheme();

	return (
		<div
			style={{
				display: "flex",
				width: "100%",
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "start",
				padding: "0 30px",
				backgroundColor: theme?.colors.gray50.value,
			}}
		>
			<Link href="/" passHref style={{ display: "flex", alignItems: "center" }}>
				<Image
					src={utils.dreamWorldImgUrl(39)}
					alt="logo de la app"
					width={70}
					height={70}
					style={{
						padding: "10px 5px 10px 0",
					}}
				/>

				<Text color="white" h2>
					P
				</Text>
				<Text color="white" h3>
					okémon
				</Text>
			</Link>

			<Spacer css={{ flex: 1 }} />

			<Link href="/favorites" passHref>
				<Text color="white">Favoritos</Text>
			</Link>
		</div>
	);
};
