import Button from "./Button";
import EmptyState from "./EmptyState";
import TaskItem from "./TaskItem";
import { useState } from "react";

const TaskList = ({ tareas, onCompletar, onEliminar, onToggle, onEditarTitulo }) => {
  const [filtro, setFiltro] = useState("todas");

  const tareasFiltradas = tareas.filter((t) => {
    if (filtro === "pendientes") return !t.completada;
    if (filtro === "completadas") return t.completada;
    return true;
  });

  const handleCompletar = (id, completadaActual) => {
    if (onToggle) {
      onToggle(id, completadaActual);
    } else if (onCompletar) {
      onCompletar(id);
    }
  };

  return (
    <div>
      <div style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
        <Button label="📄 Todas" onClick={() => setFiltro("todas")} variant={filtro === "todas" ? "primary" : "secondary"} />
        <Button label="⏳ Pendientes" onClick={() => setFiltro("pendientes")} variant={filtro === "pendiente" ? "primary" : "secondary"} />
        <Button label="✅ Completadas" onClick={() => setFiltro("completadas")} variant={filtro === "completadas" ? "primary" : "secondary"} />
      </div>

      {tareasFiltradas.length === 0 && (
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