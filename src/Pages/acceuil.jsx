import Card from "../component/card"
import Data from "../shop"
import './acceuil.css'
const Acceuil=({addToCart, addTofavorit})=>{
    return (
    <>    
     <div className="main-card">
        {

        Data.map(item=> <Card addToCart={addToCart}  addTofavorit={addTofavorit} key={item.id} item={item} />
        
        
       )
       
    }
    </div>
    </>
    

    )
     
}
export default Acceuil
