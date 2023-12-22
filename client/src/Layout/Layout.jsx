import NavBar from "./Navbar/NavBar";
import Footer from "./Footer/Footer";
import MobileFooter from "./Footer/MobileFooter";

function Layout({ children }) {
  return (
    <>
      <div className="bg-main text-white select-none">
        <NavBar />
        {children}
        <Footer />
        {/* mobile footer */}
        <MobileFooter />
      </div>
    </>
  );
}

export default Layout;
