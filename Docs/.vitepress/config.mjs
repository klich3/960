import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "960.css",
	description: "Library for implement 960 grid for your site",
	themeConfig: {
		logo: "/public/images/960.png",
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: "Home", link: "/" },
			{ text: "Documentation", link: "/Documentation/" },
		],

		sidebar: [
			{ text: "Home", link: "/" },
			{
				text: "Documentation",
				items: [
					{ text: "Getting Started", link: "/Documentation/getting-started" },
					{ text: "Installation", link: "/Documentation/installation" },
					{ text: "Development/Debug", link: "/Documentation/development" },
					{ text: "Variables", link: "/Documentation/variables" },
					{ text: "Grid", link: "/Documentation/grid" },
					{ text: "Print", link: "/Documentation/print" },
					{ text: "Debug", link: "/Documentation/debug" },
					{ text: "Global", link: "/Documentation/global" },
					{ text: "Text", link: "/Documentation/text" },
					{ text: "List", link: "/Documentation/list" },
					{ text: "Image", link: "/Documentation/image" },
					{ text: "Margin", link: "/Documentation/margin" },
					{ text: "Padding", link: "/Documentation/padding" },
					{ text: "Flex", link: "/Documentation/flex" },
					{ text: "Float", link: "/Documentation/float" },
					{ text: "Height", link: "/Documentation/height" },
				],
			},
		],

		socialLinks: [{ icon: "github", link: "https://github.com/klich3/960" }],
	},
});
