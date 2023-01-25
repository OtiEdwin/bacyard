import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";


function Section_1() {
  return (
      <section className="pt-14 pb-20 h-4/5 w-full flex flex-col justify-start m-auto text-center area relative">
         <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
         </ul>
         <div className="h-15 py-0">
            <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
               <div className="md:flex">
                  <div className="w-full p-3">
                     <div className="relative">
                        <FontAwesomeIcon
                           icon={faSearch}
                           style={{ fontSize: 15, color: "teal" }}
                           className="absolute text-gray-100 top-[50%] left-4 -translate-y-2/4"
                        />

                        <input type="text" placeholder="Search" className ="bg-white shadow-sm outline-offset-4 outline-10 border-teal-500 border h-10 w-full px-12 rounded-lg focus:outline-blue-500 hover:cursor-pointer" name=""/>
                        <span className="absolute top-4 right-5 border-l pl-4"><i className="fa fa-microphone text-gray-500 hover:text-green-500 hover:cursor-pointer"></i></span>
                     </div>                  
                  </div>
               </div>
            </div>
         </div>
         <div style={{ zIndex: '1' }} className="flex flex-col text-center m-auto justify-evenly px-2">
            <div className="flex flex-row w-full justify-center">
               <img src="assets/undraw_remotely.svg" className=" w-60 h-60 mx-0 my-4"/>
               <img src="assets/undraw_server_cluster.svg" className=" w-60 h-60 mx-0 my-4"/>            
            </div>
            <div>
               <h1 className="text-3xl text-gray-800 md:text-4xl xl:text-4xl font-bold tracking-tight mb-4 text-start"><span className="text-teal-600">YARD</span><hr/> Bringing Web Hosting to your doorstep <br /><span className="text-teal-600">to you developers</span></h1>
               <div className="flex flex-row justify-start">
                  <Link href="/login">
                     <a className="inline-block px-7 py-3 bg-transparent border-2 border-teal-600 text-teal-600 font-medium text-sm leading-snug rounded hover:text-teal-700 hover:bg-gray-100 hover:shadow-2xl hover:-translate-y-0.5 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out text-start  " data-mdb-ripple="true" data-mdb-ripple-color="light" role="button">Learn more</a>               
                  </Link>

                  <Link href = "/signup">
                     <a className="ml-3 inline-block px-7 py-3 border-2 border-teal-600 bg-teal-600 text-white font-medium text-sm leading-snug rounded shadow-md hover:bg-teal-700 hover:border-teal-700 hover:shadow-2xl hover:-translate-y-0.5 focus:bg-teal-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg transition duration-150 ease-in-out text-start" data-mdb-ripple="true" data-mdb-ripple-color="light" role="button">Get started</a>
                  </Link>
               </div>
            </div>
         </div>

      </section>
  )
}
export default Section_1