import { FC, PropsWithChildren } from "react";

import Head from "next/head";

import { NavBar } from "../ui";

interface Props {
	title?: string;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout: FC<PropsWithChildren<Props>> = ({ children, title = "Pokemon App" }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="author" content="Tatiana Llorente" />
				<meta name="description" content={`Información sobre el pokémon ${title}`} />
				<meta name="keywords" content={`${title}, pokemon, pokedex`} />
				<meta property="og:title" content={`Información sobre ${title}`} />
				<meta property="og:description" content={`Esta es la página sobre ${title}`} />
				<meta property="og:image" content={`${origin}/img/banner.png`} />
			</Head>

			<NavBar />

			<main style={{ padding: "0 20px" }}>{children}</main>
		</>
	);
};
