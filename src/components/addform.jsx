import { useState } from "react";

export default function AddForm({ onAdd }) {
  const [name, setName] = useState(""); // Dette er navnet på varen.
  const [quantity, setQuantity] = useState(""); // Antall
  const [error, setError] = useState(""); // viser feilmelding

  function handleSubmit(e) {
    e.preventDefault(); // Det er en hindring for å laste inn siden.

    if (!name && !quantity) { // Her kan du lege til varen
      setError("Skriv inn vare og antall"); // tilbakestill skjema
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

      {error && <p>{error}</p>} {/* her vises en feilmelding */}
    </form>
  );
}