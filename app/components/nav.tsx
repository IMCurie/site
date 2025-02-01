import Link from "next/link";

const navItmes = [
  { title: "about", href: "/" },
  { title: "blog", href: "/blog" },
];

export default function Navbar() {
  return (
    <nav className="mb-8">
      <ul className="flex space-x-4">
        {navItmes.map((item) => (
          <li key={item.title}>
            <Link href={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
