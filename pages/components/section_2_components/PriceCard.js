import Link from "next/link";

function PriceCard({ color, price, desc, items }) {
   return (
      <>
         <div className={ `m-auto h-96 w-72 bg-${color}-100 rounded-md shadow hover:shadow-lg hover:scale-105 transition-all flex flex-col justify-between` }>
            <div className={`bg-${color}-600 h-1/4 w-full flex justify-center`}>
               <h1 className="text-5xl text-white m-auto md:text-5xl xl:text-5xl font-thin tracking-tight mb-4 text-center">{price}</h1>
            </div>
            <div>
               <h2 className="text-xl text-gray-800 md:text-xl xl:text-xl font-bold tracking-tight mb-4 text-center">{desc}</h2>
            </div>
            <div>
               <ul>
                  {items}
               </ul>
            </div>
            <div className="w-full h-1/4 flex flex-col justify-center">
               <Link href="/login">
                  <a className={`m-auto w-4/5 text-center inline-block px-7 py-3 border-2 border-${color}-600 bg-${color}-600 text-white font-medium text-sm leading-snug rounded-full shadow-md hover:bg-${color}-700 hover:border-${color}-700 hover:-translate-y-0.5 focus:bg-${color}-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-${color}-800 active:shadow-lg transition duration-150 ease-in-out`} data-mdb-ripple="true" data-mdb-ripple-color="light" role="button">Let's go</a>
               </Link>
            </div>
         </div>
      </>
   )
 }
 export default PriceCard