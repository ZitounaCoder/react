import { Link } from 'react-router-dom'
import {ShoppingCart,Heart,House,ContactRound,UserKey} from 'lucide-react'
import './test.css'
export default function Test({cart,favorit,setDropCart,setDropFavorit}){
    return(
        <div className="content">
        <div className="logo">
            <h1>Logo</h1>
        </div>
        <div className="main-menu">
            <ul>
                <li><Link to='/'><House />Acceuil</Link></li>
                <li><Link to='/service'>Service</Link></li>
                <li><Link to='/contact'> <ContactRound />Contact</Link></li>
                <li><Link to='/login'><UserKey />Login</Link></li>
                <li><button className="cart-toggle" type="button" onClick={setDropCart} aria-label="Toggle shopping cart"><ShoppingCart />{cart.length}</button></li>
                <li><button className="cart-toggle" type="button" onClick={setDropFavorit} aria-label="Toggle favorites" title="Favorites"><Heart />{favorit?.length ?? 0}</button></li>
            </ul>

        </div>
        </div>
    ) 
}
