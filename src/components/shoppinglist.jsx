import ShoppingItem from "./ShoppingItem";
//Her vises handlelisten
export default function ShoppingList({
  items,
  onToggle,
  onQuantityChange
}) {
  return (
    <ul>
      {items.map(item => (
        <ShoppingItem
          key={item.id} // Dette er en unik ID for React
          item={item} // Sender varen
          onToggle={onToggle} // Her er det krysset av kjøpt
          onQuantityChange={onQuantityChange} // På denne måten kan du endre antallet
        />
      ))}
    </ul>
  );
}