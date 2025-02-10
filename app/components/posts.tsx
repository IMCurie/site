import { formatDate, getBlogPosts } from "../blog/utils";

import Link from "next/link";

export default async function BlogPosts() {
	let posts = await getBlogPosts();

	return (
		<div>
			{posts
				.sort((a, b) => {
					return (
						new Date(b.frontmatter.publishedAt).getTime() -
						new Date(a.frontmatter.publishedAt).getTime()
					);
				})
				.map((post) => (
					<Link
						key={post.slug}
						className="font-serif flex flex-col mb-6 hover:bg-neutral-100 transition-all rounded-xl"
						href={`/blog/${post.slug}`}
					>
						<div className="flex flex-col px-3 py-4">
							<h1 className="text-xl">{post.frontmatter.title}</h1>
							<div className="text-gray-400 text-sm">
								{formatDate(post.frontmatter.publishedAt)}
							</div>
						</div>
					</Link>
				))}
		</div>
	);
}
