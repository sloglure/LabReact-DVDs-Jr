const TaskSummary = ({ total, completadas, pendientes }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around", textAlign: "center", padding: "10px 0" }}>
      <div>
        <span style={{ display: "block", fontSize: "2rem", fontWeight: "bold", color: "#1e40af" }}>{total}</span>
        <span style={{ fontSize: "0.875rem", color: "#64748b", fontWeight: 500 }}>Total</span>
      </div>
      <div>
        <span style={{ display: "block", fontSize: "2rem", fontWeight: "bold", color: "#16a34a" }}>{completadas}</span>
        <span style={{ fontSize: "0.875rem", color: "#64748b", fontWeight: 500 }}>Completadas</span>
      </div>
      <div>
        <span style={{ display: "block", fontSize: "2rem", fontWeight: "bold", color: "#f59e0b" }}>{pendientes}</span>
        <span style={{ fontSize: "0.875rem", color: "#64748b", fontWeight: 500 }}>Pendientes</span>
      </div>
    </div>
  );
};

export default TaskSummary;