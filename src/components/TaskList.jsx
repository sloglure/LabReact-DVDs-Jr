import React, { useState } from "react";

const TaskList = ({ tareas, onCompletar, cargando, error }) => {
  const [filtro, setFiltro] = useState("todas");

  if (cargando) {
    return (
      <div className="card">
        <p>Cargando tareas...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="card">
        <p style={{ color: "red" }}>Error al cargar tareas: {error}</p>
      </div>
    );
  }

  const tareasFiltradas = tareas.filter((t) => {
    if (filtro === "pendientes") return !t.completada;
    if (filtro === "completadas") return t.completada;
    return true;
  });

  return (
    <div className="card">
      <h2 className="section-title">Lista de Tareas</h2>
      
      <div style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
        <button className="task-button" onClick={() => setFiltro("todas")}>Todas</button>
        <button className="task-button" onClick={() => setFiltro("pendientes")}>Pendientes</button>
        <button className="task-button" onClick={() => setFiltro("completadas")}>Completadas</button>
      </div>

      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {tareasFiltradas.map((tarea) => (
          <li
            key={tarea.id}
            className="task-item"
            style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
          >
            <span
              style={{
                textDecoration: tarea.completada ? "line-through" : "none",
                color: tarea.completada ? "#94a3b8" : "inherit",
              }}
            >
              {tarea.titulo}
            </span>
            {tarea.completada ? (
              <span>✔</span>
            ) : (
              <button className="task-button" onClick={() => onCompletar(tarea.id)}>
                Completar
              </button>
            )}
          </li>
        ))}
      </ul>

      {tareasFiltradas.length === 0 && (
        <p style={{ marginTop: "12px" }}>No hay tareas en esta categoria.</p>
      )}
    </div>
  );
};

export default TaskList;