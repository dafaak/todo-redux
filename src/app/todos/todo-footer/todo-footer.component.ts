import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../app.reducer";
import {setFiltro, tiposFiltros} from "../../filtro/filtro.action";
import {eliminarCompletados} from "../todo.actions";

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  filtroActual!: tiposFiltros;
  filtros: tiposFiltros[] = [
    tiposFiltros.completados,
    tiposFiltros.todos,
    tiposFiltros.pendientes
  ];
  todosPendientes = 0;

  constructor(private store: Store<AppState>) {

  }

  ngOnInit(): void {
    // this.store.select(state => {
    //     return state.filtro
    //   }
    // ).subscribe(
    //   filtro => {
    //     this.filtroActual = filtro;
    //   }
    // )
    this.store.subscribe(
      state => {
        this.filtroActual = state.filtro;
        this.todosPendientes = state.todos.filter(todo => {
          return !todo.completado
        }).length;
      }
    )
  }

  seleccionarFiltro(filtro: tiposFiltros) {
    this.store.dispatch(setFiltro({filtro}));
  }

  eliminarTodosCompletados() {
    this.store.dispatch(eliminarCompletados());
  }
}
