import './cartdropitem.css'

export default function CartDropItem({ item }) {
  return (
    <div className="cartdropitem">
      <img src={item.imageUrl} alt={item.name} />
      <div className="cartdropitem-info">
        <span>{item.name}</span>
        <span>{item.quantite > 1 ? `${item.quantite} × ` : ''}${item.price} €</span>
      </div>
    </div>
  )
}
