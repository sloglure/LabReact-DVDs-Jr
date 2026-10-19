import { useState } from "react";
import Button from "./Button";
import EmptyState from "./EmptyState";
import TaskItem from "./TaskItem";

const TaskList = ({ tareas, filtro, onCambiarFiltro, onCompletar, onEliminar, onToggle, onEditarTitulo }) => {

  const [busqueda, setBusqueda] = useState("");

  const tareasFiltradas = tareas.filter (t => 
    t.titulo.toLowerCase().includes(busqueda.toLocaleLowerCase())
  ); 

  const handleCompletar = (id, completadaActual) => {
    if (onToggle) {
      onToggle(id, completadaActual);
    } else if (onCompletar) {
      onCompletar(id);
    }
  };

  return (
    <div>
      <div style={{ marginBottom: "16px" }}>
        <input 
          type="text" 
          placeholder="🔍 Buscar tarea por texto..." 
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "1px solid #cbd5e1" }}
        />
      </div>
      <div style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
        <Button label="📄 Todas" onClick={() => onCambiarFiltro("todas")} variant={filtro === "todas" ? "primary" : "secondary"} />
        <Button label="⏳ Pendientes" onClick={() => onCambiarFiltro("pendientes")} variant={filtro === "pendiente" ? "primary" : "secondary"} />
        <Button label="✅ Completadas" onClick={() => onCambiarFiltro("completadas")} variant={filtro === "completadas" ? "primary" : "secondary"} />
      </div>

      {tareas.length === 0 && (
        <EmptyState icono="🎉" mensaje="No hay tareas en esta categoría" />
      )}

      <ul className="task-list" style={{ listStyle: "none", padding: 0 }}>
        {tareasFiltradas.map((tarea) => (
          <TaskItem key={tarea.id} tarea={tarea} onCompletar={handleCompletar} onEliminar={onEliminar} onEditarTitulo={onEditarTitulo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;