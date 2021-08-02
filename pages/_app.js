import "tailwindcss/tailwind.css";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
