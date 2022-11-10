import Navbar from "./navbar";
import Footer from "./footer";
import RingOne from "./hero-components/ring_1";
import RingTwo from "./hero-components/ring_2";
import RingThree from "./hero-components/ring_3";
import RingFour from "./hero-components/ring_4";

export default function Layout(props) {
    return(
        <>
            <div className="relative h-screen flex flex-col justify-start bg-neutral-100 overflow-hidden">
                <Navbar/>
                <main className=" flex flex-col justify-between bg-neutral-100 h-4/5">{props.children}</main>
                <RingOne/>
                <RingTwo/>
                <RingThree/>
                <RingFour/>
            </div>
            <Footer/>        
        </>
    )
}