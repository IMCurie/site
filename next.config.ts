import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import type { Plugin } from "unified";

const nextConfig: NextConfig = {
	pageExtensions: ["mdx", "ts", "tsx"],
};

const withMDX = createMDX({
	options: {
		remarkPlugins: [
			["remark-gfm" as unknown as Plugin],
			["remark-frontmatter" as unknown as Plugin],
			["remark-mdx-frontmatter" as unknown as Plugin],
		],
	},
});

export default withMDX(nextConfig);
