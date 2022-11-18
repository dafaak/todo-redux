import {createAction, props} from "@ngrx/store";

export enum tiposFiltros {
  todos = 'Todos',
  completados = 'Completados',
  pendientes = 'Pendientes'
};

export const setFiltro = createAction(
  '[FILTRO] Set filtro',
  props<{ filtro: tiposFiltros }>()
);
