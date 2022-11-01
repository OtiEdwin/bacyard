import Navbar from "./navbar";
import Footer from "./footer";

function Layout(props) {
    return(
        <>
            <Navbar/>
            <main>{props.children}</main>
            <Footer/>        
        </>
    )
}
export default Layout