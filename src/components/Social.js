import React from 'react';
import SocialItem from './SocialItem';
function Social(){

    return(
    <div>
       <ul className="list-group">
         <SocialItem  media='facebook' id="facbook" img="https://picsum.photos/101"/>
         <SocialItem  media='Youtube' id="youtube"  img="https://picsum.photos/100" />
         <SocialItem  media='Instgramme' id="instgramme" img="https://picsum.photos/102"/>
       </ul>

    </div>
    );
}
export default Social