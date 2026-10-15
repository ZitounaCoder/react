import './cartdrop.css'
import FavoritDropItem from './favoritDropItem.jsx'

export default function FavoritDrop({ items, emptyMessage }) {
  return (
    <div className="cartdrop">
      {items.length > 0
        ? items.map((item, index) => <FavoritDropItem item={item} key={`${item.id}-${index}`} />)
        : <h3>{emptyMessage}</h3>}
    </div>
  )
}
