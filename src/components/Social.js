import React from 'react';
import SocialItem from './SocialItem';
function Social(){

    return(
    <div>
       <ul className="list-group">

         <SocialItem  media='facebook' id="facbook"/>
         <SocialItem  media='Youtube' id="youtube"/>
         <SocialItem  media='Instgramme' id="instgramme"/>
        
        
       </ul>

    </div>
    );
}
export default Social