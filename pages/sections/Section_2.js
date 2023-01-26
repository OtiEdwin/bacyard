import PriceCard from "../components/section_2_components/PriceCard"
import Title from "../components/component_chunks/chunks";

function Section_2() {
  let blueprint = [
    {
      shade: 'rgb(45 212 191)',
      price: 'Free'
    },
    {
      shade: 'rgb(20 184 166)',
      price: '$5'
    },
    {
      shade: 'rgb(13 148 136)',
      price: '$8'
    },
  ]
  return (
      <section className = "py-20 bg-white h-screen w-full flex flex-col justify-evenly m-auto text-center">
        <Title><p>Check out our plans</p></Title>
        <div className="flex flex-row justify-evenly m-auto  w-4/5">
          {
            blueprint.map(( card )=>{
              return <PriceCard shade = { card.shade } price = { card.price }/>
            })
          }
                        
        </div>
      </section>              
  )
}
export default Section_2