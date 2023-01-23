import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import PriceCard from "../components/section_2_components/PriceCard"


function Section_2() {
  return (
      <section className="m-a h-screen w-4/5 flex flex-row justify-evenly m-auto text-center">
         <PriceCard price = "$5" desc = "The description of the plan" items = "the features" />  
         <PriceCard price = "$7" desc = "The description of the plan" items = "the features" />  
         <PriceCard price = "$11" desc = "The description of the plan" items = "the features" />  
      </section>
  )
}
export default Section_2