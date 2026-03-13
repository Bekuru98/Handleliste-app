import { useState } from "react";

export default function AddForm({ onAdd }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name && !quantity) {
      setError("Skriv inn vare og antall");
      return;
    }
    if (!name) {
      setError("Skriv inn vare");
      return;
    }
    if (!quantity) {
      setError("Skriv inn antall");
      return;
    }

    onAdd(name, quantity);
    setName("");
    setQuantity("");
    setError("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Vare
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Egg.."
        />
      </label>

      <label>
        Antall
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={e => setQuantity(e.target.value)}
        />
      </label>

      <button type="submit">Legg til vare</button>

      {error && <p>{error}</p>}
    </form>
  );
}