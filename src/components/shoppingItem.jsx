export default function ShoppingItem({
  item,
  onToggle,
  onQuantityChange
}) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={item.bought}
          onChange={() => onToggle(item.id)}
        />
        {item.name}
      </label>

      <input
        type="number"
        min="1"
        value={item.quantity}
        onChange={e =>
          onQuantityChange(item.id, e.target.value)
        }
      />
    </li>
  );
}