import React from 'react'
function SocialItem (props){

    return(
        <li className="list-group-item"><input type="checkbox" value="" id= {props.id}/>
           <label  for= {props.id}>
           {props.media}
           </label>
       </li>

    )
}
export default SocialItem