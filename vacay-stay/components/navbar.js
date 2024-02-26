import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 fixed w-full z-10">
      <div className="container mx-auto">
        <Link href="/">
          <a className="text-white font-bold text-lg">Vacation App</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
