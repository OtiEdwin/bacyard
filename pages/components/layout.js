import Navbar from "./navbar";
import Footer from "./footer";


export default function Layout(props) {
    return(
        <div className="flex flex-col justify-between bg-neutral-100 overflow-hidden">
            <Navbar/>
            <main className="relative flex flex-col justify-between bg-neutral-100 h-5/6">
                {props.children}
            </main>
            <Footer/>        
        </div>
    )
}