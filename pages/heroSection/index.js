import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
      <section className="m-a bg-teal-700  h-screen flex flex-col justify-start m-auto text-center">
         <div class="h-20py-10">
            <div class="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
               <div class="md:flex">
                  <div class="w-full p-3">
                     <div class="relative">
                        <fontAwesomeIcon
                           icon={faSearch}
                           style={{ fontSize: 100, color: "blue" }}
                           class="absolute text-gray-100 top-5 left-4"
                        />

                        <input type="text" placeholder="Search" className ="bg-white shadow-sm border-teal-500 border h-14 w-full px-12 rounded-lg focus:outline-none hover:cursor-pointer" name=""/>
                        <span class="absolute top-4 right-5 border-l pl-4"><i class="fa fa-microphone text-gray-500 hover:text-green-500 hover:cursor-pointer"></i></span>
                     </div>                  
                  </div>
               </div>
            </div>
         </div>

         <div className=" flex flex-col text-center py-24 px-6">
            <div>
               <img src="assets/undraw_factory.svg" className=" w-3/5 h-3/5 m-auto"/>
            </div>
            <div>
               <h1 className="text-5xl text-gray-800 md:text-6xl xl:text-6xl font-bold tracking-tight mb-12">The best offer on the market <br /><span className="text-gray-50">for your business</span></h1>
               <a className="inline-block px-7 py-3 mr-2 bg-teal-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-teal-700 hover:shadow-lg focus:bg-teal-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Get started</a>
               <a className="inline-block px-7 py-3 bg-transparent text-white-600 font-medium text-sm leading-snug uppercase rounded hover:text-teal-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Learn more</a>               
            </div>
         </div>
      </section>
  )
}