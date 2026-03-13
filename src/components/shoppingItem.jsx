export default function ShoppingItem({
  item,
  onToggle,
  onQuantityChange
}) {
  return (
    <li>
       {/* dette er en avmerkingsboks for å merke av elementet */}
      <label>
        <input
          type="checkbox"
          checked={item.bought} // om varen er kjøpt
          onChange={() => onToggle(item.id)}
        />
        {item.name} 
      </label>
{/* Dette er inndata for antall */}
      <input
        type="number"
        min="1"
        value={item.quantity} // viser antall
        onChange={e =>
          onQuantityChange(item.id, e.target.value) // Det er et slags oppdatering antall
        }
      />
    </li>
  );
}