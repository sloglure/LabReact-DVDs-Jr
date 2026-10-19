import { useState} from "react";
import Badge from "./Badge";
import Button from "./Button";

const TaskItem = ({tarea, onCompletar, onEliminar, onEditarTitulo}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editValue, setEditValue] = useState(tarea.titulo);

    const handleGuardar = () => {
        if (editValue.trim() !=="" && editValue !== tarea.titulo) {
            onEditarTitulo(tarea.id, editValue);
        }else {
            setEditValue(tarea.titulo);
        }
        setIsEditing(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleGuardar();
        } else if (e.key === "Escape") {
            setEditValue(tarea.titulo);
            setIsEditing(false);
        }
    };
    
    return (
        <li className="task-item" style={{displat :"flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px"}}>
            {/* Zona Izquierda: Badge + titulo */}
            <div style={{display: "flex", alignItems: "center", gap: "10px", flex: 1}}>
                <Badge texto={tarea.completada ? "completada" : "pendiente"} onClick={() => onCompletar(tarea.id, tarea.completada)}
                />

                {isEditing ? (
                    <input
                        type="text"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        onBlur={handleGuardar}
                        onKeyDown={handleKeyDown}
                        autoFocus
                        style={{ padding: "4px 8px", borderRadius: "4px", border: "1px solid #cbd5e1", flex: 1, marginRight: "10px" }}
                    />
                ) : (
                    <span 
                    onDoubleClick={() => setIsEditing(true)}
                    title="Haz clic para editar"
                    style={{ 
                        textDecoration: tarea.completada ? "line-through" : "none", 
                        color: tarea.completada ? "#94a3b8" : "inherit",
                        cursor: "text",
                        flex: 1
                    }}>
                    {tarea.titulo}
                </span>
            )}
      </div>

      {/* Zona Derecha: Botones */}
      <div style={{ display: "flex", gap: "8px", flexShrink: 0 }}>
        <Button 
          label={tarea.completada ? "Desmarcar" : "Completar"} 
          onClick={() => onCompletar(tarea.id, tarea.completada)} 
          variant={tarea.completada ? "success" : "primary"} 
        />
        <Button label="Eliminar" onClick={() => onEliminar(tarea.id)} variant="danger" />
      </div>
    </li>
  );
};

export default TaskItem;