import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";

import {AppState} from "../../app.reducer";
import {Todo} from "../models/todo.model";
import {tiposFiltros} from "../../filtro/filtro.action";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  filtroActual!: tiposFiltros;

  constructor(
    private store: Store<AppState>,
  ) {
  }

  ngOnInit(): void {
    // this.store.select(state => {
    //     return state.todos
    //   }
    // ).subscribe(
    //   todos => {
    //     console.log(todos);
    //     this.todos = todos;
    //   }
    // )
    this.store.subscribe(
      ({todos, filtro}) => {
        this.todos = todos;
        this.filtroActual = filtro;
      }
    )
  }

}
