import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import PriceCard from "../components/section_2_components/PriceCard"
import Title from "../components/component_chunks/chunks";

function Section_2() {
  let colors = [ 'teal', 'yellow', 'blue' ]
  return (
      <section className = "py-20 bg-white h-screen w-full flex flex-col justify-evenly m-auto text-center">
        <Title><p>Check out our plans</p></Title>
        <div className="flex flex-row justify-evenly m-auto  w-4/5">
          {
            colors.map( ( color ) =>{
              return <PriceCard color = { color } price = "$5" desc = "The description of the plan" items = "the features" />              
            })           
          }
        </div>
      </section>              
  )
}
export default Section_2