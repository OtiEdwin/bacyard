import Navbar from "./navbar";
import Footer from "./footer";

function Layout(props) {
    return(
        <>
            <div className="h-screen flex flex-col bg-neutral-100 relative overflow-hidden">
                <Navbar/>
                <main>{props.children}</main>
            </div>
            <Footer/>        
        </>
    )
}
export default Layout