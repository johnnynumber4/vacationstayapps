// pages/index.js
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Welcome to the Condo Booking App
      </h1>
      <Link href="/[condo]" as="/paradise252">
        <a className="text-blue-500 hover:underline">Visit Paradise 252</a>
      </Link>
      {/* Add more condo links as needed */}
    </div>
  );
};

export default Home;
