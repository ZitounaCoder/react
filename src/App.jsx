import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Test from './test'
import Acceuil from './Pages/acceuil'
import Service from './Pages/services'
import Login from './Pages/login'
import { useState } from 'react'
import CartDetail from './component/cartDetail'
import Contact from './Pages/contact'
import CartDrop from './component/cartDrop'
import FavoritDrop from './component/favoritDrop'

export default function App() {
  const [cart,setCart]=useState([])
  const [favorit,setFavorit]=useState([])
  const [dropCartOpen,setDropCartOpen]=useState(false)
  const [dropFavoritOpen,setDropFavoritOpen]=useState(false)

   function addToCart(item){        
        setCart([...cart,{...item,"quantite":1} ])
        console.log(cart)
    }

   function addTofavorit(item){
        setFavorit([...favorit,item])
        console.log(favorit)
    }

  return (
    <div>       
      <BrowserRouter>
      <Test
        cart={cart}
        favorit={favorit}
        setDropCart={() => { setDropCartOpen(open => !open); setDropFavoritOpen(false) }}
        setDropFavorit={() => { setDropFavoritOpen(open => !open); setDropCartOpen(false) }}
      />
      {dropCartOpen && <CartDrop items={cart} emptyMessage="Cart Empty" />}
      {dropFavoritOpen && <FavoritDrop items={favorit} emptyMessage="No favorites yet" />}
      <Routes>
        <Route path='/' element=<Acceuil addToCart={addToCart} addTofavorit={addTofavorit}/> />
        <Route path='/service' element=<Service/> />
        <Route path='/login' element=<Login/> />
        <Route path='/contact' element=<Contact/> />
        <Route path='/detail/:id' element=<CartDetail/> />
      </Routes>

      </BrowserRouter>
   
    </div>
  )
}


