import './cartdropitem.css'

export default function FavoritDropItem({ item }) {
  return (
    <div className="cartdropitem">
      <img src={item.imageUrl} alt={item.name} />
      <div className="cartdropitem-info">
        <span>{item.name}</span>
        <span>{item.price} $</span>
      </div>
    </div>
  )
}
