declare module "*.mdx" {
	const MDXComponent: (props: any) => JSX.Element;
	export default MDXComponent;

	export const frontmatter: {
		title: string;
		publishedAt: string;
		[key: string]: any;
	};
}
