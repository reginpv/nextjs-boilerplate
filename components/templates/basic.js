// Components
import Footer from "../footer";
import Navbar from "../header";

const Basic = ({ children }) => {

  return(
    <>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}
export default Basic;