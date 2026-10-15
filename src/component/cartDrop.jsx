import './cartdrop.css'
import CartDropItem from './cartDropItem.jsx'

export default function CartDrop({ items, emptyMessage }) {
  return (
    <div className="cartdrop">
      {
        items.length > 0 ? items.map
        ((item, index) => <CartDropItem item={item} key={`${item.id}-${index}`} />) : <h3>{emptyMessage}</h3>
      }
    </div>
  )
}
