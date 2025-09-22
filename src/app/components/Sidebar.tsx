import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="w-48 min-h-screen bg-gray-800 p-6">
      <h2 className="text-2xl font-semibold mb-8">Dashboard</h2>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link href="/" className="block hover:text-white">
              Home
            </Link>
          </li>
          <li>
            <Link href="/profile" className="block hover:text-white">
              Profile
            </Link>
          </li>
          <li>
            <Link href="/settings" className="block hover:text-white">
              Settings
            </Link>
          </li>
          <li>
            <Link href="#logout" className="block hover:text-white">
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
