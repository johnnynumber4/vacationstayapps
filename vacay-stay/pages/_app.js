import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-sans">
      <Navbar />
      <div className="container mx-auto mt-16 p-4">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
