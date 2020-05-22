import React from 'react';
import { Link } from 'react-router-dom';


const ReservationItem = ({res, updateRes, fetchMusical, deletePost}) =>{
  return(
  <>
  <li>
    <Link to ={`/musicals/ResMade/`}>{res.title}</Link>
    <Link to={`/posts/${res.id}/edit`}>Edit</Link>
    <button onClick = {()=>deletePost(post.id)} >Delete</button>
  </li>
</>
  )
}

export default ReservationItem;