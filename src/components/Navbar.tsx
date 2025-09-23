import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-around py-6 bg-cyan-950">
      <Link href="/">Home</Link>
      <Link href="/gallery">Gallery</Link>
      <Link href="/products">products</Link>
    </div>
  );
};

export default Navbar;