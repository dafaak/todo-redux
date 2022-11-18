import {Pipe, PipeTransform} from '@angular/core';
import {Todo} from "./models/todo.model";
import {tiposFiltros} from "../filtro/filtro.action";

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  transform(todos: Todo[], filtro: tiposFiltros): Todo[] {
    switch (filtro) {
      case tiposFiltros.todos:
        return todos;
      case tiposFiltros.pendientes:
        return todos.filter(todos => {
            return !todos.completado
          }
        );
      case tiposFiltros.completados:
        return todos.filter(todos => {
            return todos.completado
          }
        );
    }
  }

}
