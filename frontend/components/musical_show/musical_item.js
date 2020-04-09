
const MusicalItem =({musical})=>{
  return(
    <> 
    <li>
      <Link to ={`/musicals/${musical.id}`} >{musical.name}</Link>
    </li>
    </>
  )
}

export default MusicalItem;