import { useState } from "react";
import Button from "./Button";

const TaskForm = ({ onAgregar, guardando }) => {
  const [titulo, setTitulo] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (guardando) return;

    if (titulo.trim().length < 3) {
      setError("El titulo debe tener al menos 3 caracteres.");
      return;
    }
    onAgregar(titulo.trim());
    setTitulo("");
    setError("");
  };

  return (
    <div className="card">
      <h2 className="section-title">Agregar Nueva Tarea</h2>
      <form onSubmit={handleSubmit} className="task-form">
          <input
            type="text"
            value={titulo}
            onChange={(e) => { setTitulo(e.target.value); setError("")}}
            placeholder="Escribe el título de la tarea..."
            className="task-input"
            disabled ={guardando}
            />
        <Button label={guardando ? "⏳..." :"Agregar"} variant= "primary" />
      </form>
      {error && <p className="form-error">{error}</p>}
      </div>
  );
};

export default TaskForm;