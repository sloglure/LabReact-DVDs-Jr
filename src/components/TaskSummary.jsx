import React from "react";

const TaskSummary = ({ total }) => {
  return (
    <div className="card">
      <h2 className="section-title">Resumen de Tareas</h2>
      <p>Tareas registradas: <strong>{total}</strong></p>
    </div>
  );
};

export default TaskSummary;