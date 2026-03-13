import ShoppingItem from "./ShoppingItem";

export default function ShoppingList({
  items,
  onToggle,
  onQuantityChange
}) {
  return (
    <ul>
      {items.map(item => (
        <ShoppingItem
          key={item.id}
          item={item}
          onToggle={onToggle}
          onQuantityChange={onQuantityChange}
        />
      ))}
    </ul>
  );
}