import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
	// Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
	author: "Luca Fedrizzi",
	// Meta property used to construct the meta title property, found in src/components/BaseHead.astro L:11
	title: "N e r d",
	// Meta property used as the default description meta property
	description:
		"Il mio spazio per scrivere delle cose che guardo, leggo, faccio e creo.",
	// HTML lang property, found in src/layouts/Base.astro L:18
	lang: "it-IT",
	// Meta property, found in src/components/BaseHead.astro L:42
	ogLocale: "it-IT",
	// Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
	date: {
		locale: "it-IT",
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
};

// Used to generate links in both the Header & Footer.
export const menuLinks: Array<{ title: string; path: string }> = [
	{
		title: "Home",
		path: "/",
	},
	{
		title: "Chi sono",
		path: "/chi-sono/",
	},
	{
		title: "Blog",
		path: "/posts/",
	},
	{
		title: "Tags",
		path: "/tags/",
	},
];
