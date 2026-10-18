import React from 'react';

function ActionButton({ onReview }) {
  return (
    <section>
      <h2>Acciones</h2>
      <button className="task-button" onClick={onReview}>
        Revisar tareas
      </button>
    </section>
  );
}

export default ActionButton;