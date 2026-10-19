const API_URL = "https://jsonplaceholder.typicode.com/todos";

export const getTareas = async (limite = 10) => {
  const response = await fetch(`${API_URL}?_limit=${limite}`);
  if (!response.ok) throw new Error("Error al obtener tareas");
  return await response.json();
};

export const postTarea = async (titulo) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: titulo, completed: false, userId: 1 }),
  });
  if (!response.ok) throw new Error("Error al crear tarea");
  return await response.json();
};

export const putTarea = async (id, datos) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(datos),
  });
  if (!response.ok) throw new Error("Error al actualizar tarea");
  return await response.json();
};

export const deleteTarea = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  if (!response.ok) throw new Error("Error al eliminar tarea");
};

export const patchTarea = async (id, datos) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(datos),
  });
  if (!response.ok) throw new Error("Error al editar tarea");
  return await response.json();
};
