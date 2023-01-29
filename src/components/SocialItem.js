import React from 'react'
function SocialItem (props){

    return(
        <li className="list-group-item"><input type="checkbox" value="" id= {props.id}/>
        <img src={props.img} alt={`icons of ${props.alt}`}/>
           <label  htmlfor= {props.id}>
           {props.media}
           </label>
       </li>

    )
}
export default SocialItem