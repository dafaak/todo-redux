import {createReducer, on} from "@ngrx/store";


import {tiposFiltros, setFiltro} from "./filtro.action";

export const estadoInicial = tiposFiltros.todos;

export const filtroReducer = createReducer(
  estadoInicial,
  on(setFiltro, (state, props) => props.filtro),
);


