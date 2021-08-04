import Header from "../Header";
import Footer from "../Footer";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className="container mx-auto">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;