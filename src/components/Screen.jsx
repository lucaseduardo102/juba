import Footer from "./Footer";
import NavBar from "./NavBar";

export function Screen({ children }) {
    return (
      <>
        <NavBar />
        <div className="container-lg">
          {children}
        </div>
        <Footer />
      </>
    )
  }