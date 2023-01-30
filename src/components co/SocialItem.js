import React from 'react'
function SocialItem (props){

    return(
        <li className="list-group-item"><input type="checkbox" value="" id= {props.p.id}/>
        <img src={props.p.img} alt={`icons of ${props.alt}`}/>
           <label  htmlfor= {props.p.id}>
           {props.p.media}
           </label>
       </li>

    )
}
export default SocialItem