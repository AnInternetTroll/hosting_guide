// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "Hosting Guide",
	tagline: "Host your own website on the internet!",
	url: "https://hosting_guide.aninternettroll.xyz",
	baseUrl: "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "https://identicons.github.com/aninternettroll.png",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "aninternettroll", // Usually your GitHub org/user name.
	projectName: "hosting_guide", // Usually your repo name.
	deploymentBranch: "gh-pages",

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: "Hosting site",
				logo: {
					alt: "An Internet Troll's profile pic",
					src: "https://github.com/identicons/aninternettroll.png",
				},
				items: [
					{
						type: "doc",
						docId: "intro",
						position: "left",
						label: "Tutorial",
					},
					{
						href: "https://github.com/aninternettroll/hosting_guide",
						label: "GitHub",
						position: "right",
					},
				],
			},
			footer: {
				style: "dark",
				links: [
					{
						title: "Docs",
						items: [
							{
								label: "Tutorial",
								to: "/docs/intro",
							},
						],
					},
					{
						title: "More",
						items: [
							{
								label: "GitHub",
								href: "https://github.com/aninternettroll",
							},
						],
					},
				],
				copyright: `Copyright ?? ${new Date().getFullYear()} hosting_guide, @AnInternetTroll, Built with Docusaurus.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};

module.exports = config;
