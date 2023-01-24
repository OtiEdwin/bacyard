function Title(props) {
  return(
    <>
      <h1 className="text-7xl text-gray-800 md:text-6xl xl:text-6xl font-bold tracking-tight mb-4 text-center"> { props.children } </h1>
      <hr style={{ backgroundColor:'teal', width:'6%', margin:'auto', height:'.2rem', borderRadius: '1000px', marginBottom:'1.5rem' }}/>      
    </>
  ) }  

function Subtitle(props) {
   return(
    <>
      <h2 className="text-2xl text-gray-800 md:text-3xl xl:text-3xl font-bold tracking-tight mb-4 text-center"> { props.children } </h2>
    </>
  
   ) 

}
export default Title