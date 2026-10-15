import { useState } from "react";
import { Link } from "react-router-dom";

export default function Card({item,addToCart,addTofavorit}){
    const [cpt,setCpt]=useState(1);
    function valider(){
        setCpt(cpt+1)
        console.log(cpt)
    }
    return(    
        <div className="card" style={{backgroundImage:`${item.imageUrl}`}}  >
         <h3>{item.name}</h3>
         <h3>{item.price}</h3>
         <div className="card-actions">
          <input type="button" value="addTocart" onClick={()=>addToCart(item)}  />
          <input type="button" value="Fav" onClick={()=>addTofavorit(item)} />
         </div>
         <input type="button" value={cpt} onClick={valider} />
         <Link to={`detail/${item.id}`} >detail</Link>
         
        </div>
        
        
    )
}
