import Button from "./Button";
import Badge from "./Badge";
import EmptyState from "./EmptyState";
import { useState } from "react";

const TaskList = ({ tareas, onCompletar, onEliminar, cargando, error }) => {
  const [filtro, setFiltro] = useState("todas");

  const tareasFiltradas = tareas.filter((t) => {
    if (filtro === "pendientes") return !t.completada;
    if (filtro === "completadas") return t.completada;
    return true;
  });

  if (cargando) return <p>Cargando tareas...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      {/* Botones de filtro */}
      <div style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
        <Button label="📄 Todas" onClick={() => setFiltro("todas")} variant="primary" />
        <Button label="⏳ Pendientes" onClick={() => setFiltro("pendientes")} variant="primary" />
        <Button label="✅ Completadas" onClick={() => setFiltro("completadas")} variant="primary" />
      </div>

      {tareasFiltradas.length === 0 ? (
        <EmptyState icono="📭" mensaje="No hay tareas en esta categoría" />
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {tareasFiltradas.map((tarea) => (
            <li
              key={tarea.id}
              className="task-item"
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
            >
              
              {/* Título y Badge separados para que no se tache la etiqueta */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Badge 
                  texto={tarea.completada ? "completada" : "pendiente"}
                  onClick={() => onCompletar(tarea.id)}
                />
                <span style={{ 
                  textDecoration: tarea.completada ? "line-through" : "none", 
                  color: tarea.completada ? "#94a3b8" : "inherit" 
                }}>
                  {tarea.titulo}
                </span>
              </div>

              {/* Ícono si completada, boton si pendiente */}
              <div style={{ display: "flex", gap: "8px" }}>
                {tarea.completada ? (
                  <span>✅</span>
                ) : (
                  <Button label="Completar" onClick={() => onCompletar(tarea.id)} variant="primary" />
                )}
                {/* Este boton activa el modal */}
                <Button label="Eliminar" onClick={() => onEliminar(tarea.id)} variant="danger" />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;