import React from 'react';
import SocialItem from './SocialItem';
function Social(){

    return(
    <div>
       <ul className="list-group">
         <SocialItem  media='facebook'   id="facbook"   img="https://picsum.photos/101" alt="facebook"/>
         <SocialItem  media='Youtube'    id="youtube"   img="https://picsum.photos/100" alt="youtube"/>
         <SocialItem  media='Instgramme' id="instgramme"img="https://picsum.photos/102" alt="intsgramme"/>
         <SocialItem  media='Linkden'    id="linkden"   img="https://picsum.photos/103" alt="linkden" />
       </ul>

    </div>
    );
}
export default Social