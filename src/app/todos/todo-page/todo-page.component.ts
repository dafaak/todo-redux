import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../app.reducer";
import {toggleTodos} from "../todo.actions";

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {
  completadas: boolean = false;

  constructor(
    private store: Store<AppState>,
  ) {
  }

  ngOnInit(): void {
  }

  toggleAll() {
    this.completadas = !this.completadas;
    this.store.dispatch(toggleTodos({completado: this.completadas}));
  }
}
