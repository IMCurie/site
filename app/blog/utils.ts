import fs from "fs";
import path from "path";

const postsDir = path.join(process.cwd(), "app/blog");

export function formatDate(date: string) {
	let currentDate = new Date().toISOString().split("T")[0];

	if (currentDate === date) {
		return "Today";
	} else {
		return date;
	}
}

export async function getBlogPosts() {
	const isFolder = (source: string) => fs.lstatSync(source).isDirectory();
	const mdxFolders = fs
		.readdirSync(postsDir)
		.filter((name) => isFolder(path.join(postsDir, name)));

	const posts = await Promise.all(
		mdxFolders.map(async (folder) => {
			const post = await import(`@/app/blog/${folder}/page.mdx`);
			return {
				slug: folder,
				component: post.default,
				frontmatter: post.frontmatter,
			};
		}),
	);

	return posts;
}
