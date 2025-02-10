import Hello, { frontmatter } from "../blog/hello/page.mdx";

export default function Blog() {
  console.log(frontmatter);

  return (
    <div className="mt-8">
      <Hello />
    </div>
  );
}