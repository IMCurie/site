import fs from "fs";
import path from "path";

const postsDir = path.join(__dirname, "posts");

type Metadata = {
	title: string;
	publishedAt: string;
	summary?: string;
};

function formatDate(date: string) {
	let currentDate = new Date().toISOString().split("T")[0];

	if (currentDate === date) {
		return "Today";
	} else {
		return date;
	}
}

function parseMDXFrontmatter(content: string): {
	metadata: Metadata;
	content: string;
} {
	let endIndex = content.indexOf("\n---\n");
	let frontmatterText = content.slice(4, endIndex);
	let metadata: Record<string, string> = {};

	frontmatterText.split("\n").forEach((line) => {
		let colonIndex = line.indexOf(":");
		if (colonIndex !== -1) {
			let key = line.slice(0, colonIndex).trim();
			let value = line.slice(colonIndex + 1).trim();
			metadata[key] = value.replace(/^['"](.*)['"]$/, "$1");
		}
	});

	let mainContent = content.slice(endIndex + 5).trim();

	return {
		metadata: {
			title: metadata.title,
			publishedAt: formatDate(metadata.publishedAt),
			...(metadata.summary && { summary: metadata.summary }),
		},
		content: mainContent,
	};
}

export function getBlogPosts() {
	let mdxFiles = fs.readdirSync(postsDir);

	return mdxFiles.map((file) => {
		let filePath = path.join(postsDir, file);
		let { metadata, content } = parseMDXFrontmatter(
			fs.readFileSync(filePath, "utf-8"),
		);

		let slug = file.replace(/\.mdx$/, "");

		return {
			slug,
			metadata,
			content,
		};
	});
}
