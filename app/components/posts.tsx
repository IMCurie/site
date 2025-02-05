import { getBlogPosts } from "../blog/utils";

import Link from "next/link";

export default function BlogPosts() {
	let posts = getBlogPosts();

	return (
		<div>
			{posts
				.sort((a, b) => {
					return (
						new Date(b.metadata.publishedAt).getTime() -
						new Date(a.metadata.publishedAt).getTime()
					);
				})
				.map((post) => (
					<Link
						key={post.slug}
						className="font-serif flex flex-col mb-6 hover:bg-neutral-100 transition-all rounded-xl"
						href={`/blog/${post.slug}`}
					>
						<div className="flex flex-col px-3 py-4">
							<h1 className="text-xl">{post.metadata.title}</h1>
							<div className="text-gray-400 text-sm">
								{post.metadata.publishedAt.split("-").join(".")}
							</div>
						</div>
					</Link>
				))}
		</div>
	);
}
