import {Todo} from "./todos/models/todo.model";
import {ActionReducerMap} from "@ngrx/store";
import {todoReducer} from "./todos/todo.reducer";
import {tiposFiltros} from "./filtro/filtro.action";
import {filtroReducer} from "./filtro/filtro.reducer";

export interface AppState {
  todos: Todo[],
  filtro: tiposFiltros,
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filtro: filtroReducer,
}
