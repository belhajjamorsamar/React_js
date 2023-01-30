import React from 'react';
import SocialItem from './SocialItem';
function Social(){

    return(
    <div>
       <ul className="list-group"> 
         <SocialItem p= {{
            media:'facebook',
            id:'facebook',
            img:'https://picsum.photos/101',
         //pour créer un objt en utliser les {{}}
            alt:"facebook"}}/>


         <SocialItem 
         p={{media:'Youtube'  ,
           id:"youtube" ,
           img:"https://picsum.photos/100" ,
           alt:"youtube"}}/>


         <SocialItem 
         p={{ media:'Instgramme'
         ,id:"instgramme"
         ,img:"https://picsum.photos/102"
         ,alt:"intsgramme"}}/>



         <SocialItem
          p={{ media:'Linkden' , 
            id:"linkden"  ,
             img:"https://picsum.photos/103" 
             ,alt:"linkden"}} />
       </ul>

    </div>
    );
}
export default Social