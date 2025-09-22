import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-around py-6 bg-amber-950">
      <Link href="/">Nextjs</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/dashboard">Dashboard</Link>
    </div>
  );
};

export default Navbar;
