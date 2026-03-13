import { useState } from "react";
import AddForm from "./components/addform";
import ShoppingList from "./components/shoppinglist";

export default function App() {
  // Dette er en tilstand som lager alle varene på handlelisten.
  const [items, setItems] = useState([
    { id: 1, name: "Melk", quantity: 2, bought: false },
    { id: 2, name: "Egg", quantity: 1, bought: true },
  ]);
// Her legger du til en ny vare eller øker antallet hvis varen allerede finnes.
  function addItem(name, quantity) {
  const existingItem = items.find(
    (item) => item.name.toLowerCase() === name.toLowerCase()
  );

  if (existingItem) {
    // Det er noe hvis varen allerede finnes, slik at mengden øker.
    setItems(
      items.map((item) =>
        item.id === existingItem.id
          ? { ...item, quantity: item.quantity + Number(quantity) }
          : item
      )
    );
  } else {
    // Dette er for å opprette et nytt element.
    const newItem = {
      id: Date.now(),
      name,
      quantity: Number(quantity),
      bought: false,
    };
    // Her legger vi til et ny vare øverst på listen.

    setItems([newItem, ...items]);
  }
}
// NNår noen kjøper eller ikke kjøper varer, viser de oss det her.
  function toggleBought(id) {
    setItems(
      items.map(item =>
        item.id === id ? { ...item, bought: !item.bought } : item
      )
    );
  }
// opptater antallet på en vare..
  function updateQuantity(id, value) {
    if (value < 1) return; // Det forhindrer 0 eller negative tall
    setItems(
      items.map(item =>
        item.id === id ? { ...item, quantity: Number(value) } : item
      )
    );
  }

  return (
    <main>
      <h1>Handleliste</h1>
{/* Dette er et skjema for å legge til nye varer */}
      <AddForm onAdd={addItem} />
{/* akkurat her, så vi viser den handlelisten */}
      <ShoppingList
        items={items}
        onToggle={toggleBought}
        onQuantityChange={updateQuantity}
      />
    </main>
  );
}