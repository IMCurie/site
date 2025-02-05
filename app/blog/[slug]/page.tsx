import { getBlogPosts } from "../utils";

type Params = Promise<{ slug: string }>;

export default async function Post({ params }: { params: Params }) {
	const { slug } = await params;
	const post = getBlogPosts().find((post) => post.slug === slug);

	return (
		<div>
			{post ? (
				<>
					<h1>{post.metadata.title}</h1>
					<p>{post.metadata.publishedAt}</p>
					{post.content}
				</>
			) : (
				<p>Post not found</p>
			)}
		</div>
	);
}
