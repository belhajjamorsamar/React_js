import React from 'react';
function Social(){

    return(
    <div>
       <ul className="list-group">
        <li className="list-group-item"><input type="checkbox" value="" id="Facebook"/>
            <label  for="Facebook">
                Facebook
            </label>
         </li>

            <li className="list-group-item"><input type="checkbox" value="" id="Youtube"/>
            <label c for="Youtube">
               Youtube
            </label>
            </li>
        <li className ="list-group-item"><input   type="checkbox" value="" id="Twitter"/>
        <label for='Twitter'>
        Twitter
        </label>
        </li>
       </ul>

    </div>
    );
}
export default Social