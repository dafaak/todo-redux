import {createAction, props} from "@ngrx/store";

export const crearTodo = createAction('[TODO] Crear todo', props<{ texto: string }>());
export const toggleTodo = createAction('[TODO] Toggle todo', props<{ id: number }>());
export const editarTodo = createAction('[TODO] Editar todo', props<{ id: number, texto: string }>());
export const eliminarTodo = createAction('[TODO] Eliminar todo', props<{ id: number }>());
export const toggleTodos = createAction('[TODO] Toggle todos', props<{ completado: boolean }>());
export const eliminarCompletados = createAction('[TODO] Eliminar completados');
