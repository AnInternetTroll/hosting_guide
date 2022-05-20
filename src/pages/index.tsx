import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
// @ts-ignore PNGs don't have types
import GitHubMark from "@site/static/img/GitHub-Mark-120px-plus.png";
// @ts-ignore Same thing here
import GitHubMarkLight from "@site/static/img/GitHub-Mark-Light-120px-plus.png";
import { useColorMode } from "@docusaurus/theme-common";

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<header className={clsx("hero hero--primary", styles.heroBanner)}>
			<div className="container">
				<h1 className="hero__title">{siteConfig.title}</h1>
				<p className="hero__subtitle">{siteConfig.tagline}</p>
				<div className={styles.buttons}>
					<Link
						className="button button--secondary button--lg"
						to="/docs/intro"
					>
						Hosting Guide - 5min ⏱️
					</Link>
				</div>
			</div>
		</header>
	);
}

export default function Home(): JSX.Element {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout
			title={`Hello from ${siteConfig.title}`}
			description={siteConfig.tagline}
		>
			<HomepageHeader />
			<Main />
		</Layout>
	);
}

function Main(): JSX.Element {
	const { colorMode } = useColorMode();
	return (
		<main>
			<h1>Host your own website on</h1>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					flexDirection: "row",
					marginLeft: "auto",
					marginRight: "auto",
					//maxWidth: "700px",
				}}
			>
				{(
					[
						{
							name: "GitHub",
							description: "Where the world builds software",
							logo: colorMode === "dark" ? GitHubMarkLight : GitHubMark,
							link: "/docs/github_pages/create_a_repo",
						},
					] as IProvider[]
				).map((provider) => (
					<Provider {...provider} />
				))}
			</div>
		</main>
	);
}

function Provider({ name, logo, description, link }: IProvider) {
	return (
		<div style={{ flex: "auto", maxWidth: "200px", display: "inline", textAlign: "center" }}>
			<img src={logo} />
			<h1>
				<Link to={link}>{name}</Link>
			</h1>
			<p>{description}</p>
		</div>
	);
}
interface IProvider {
	name: string;
	logo: string;
	description: string;
	link: string;
}
