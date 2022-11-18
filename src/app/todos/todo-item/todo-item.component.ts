import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Todo} from "../models/todo.model";
import {FormControl, Validator, Validators} from "@angular/forms";
import {AppState} from "../../app.reducer";
import {Store} from "@ngrx/store";
import {editarTodo, eliminarTodo, toggleTodo} from "../todo.actions";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @ViewChild('inputFisico') txtInputFisico: ElementRef | undefined;
  chkCompletado: FormControl;
  txtInput: FormControl;

  editando = false;

  constructor(
    private store: Store<AppState>
  ) {
    this.chkCompletado = new FormControl(false);
    this.txtInput = new FormControl('', [
      Validators.minLength(3),
      Validators.required]
    );


  }

  ngOnInit(): void {
    if (this.todo) {
      console.log(this.todo);
      // this.todo.completado = true;
      this.chkCompletado = new FormControl(this.todo.completado);
      this.txtInput = new FormControl(this.todo.texto, [
        Validators.minLength(3),
        Validators.required]
      );
    }

    this.chkCompletado.valueChanges
      .subscribe(value => {
        this.store.dispatch(toggleTodo({id: this.todo.id}));
      })
  }

  editar() {
    this.editando = true;
    this.txtInput.setValue(this.todo.texto);
    setTimeout(() => {
      this.txtInputFisico?.nativeElement.select();
    }, 1);
  }

  terminarEdicion() {
    this.editando = false;
    if (this.txtInput.invalid) {
      return;
    }
    if (this.txtInput.value === this.todo.texto) {
      return;
    }
    this.store.dispatch(
      editarTodo({
          id: this.todo.id,
          texto: this.txtInput.value
        }
      )
    );
  }

  eliminar() {
    this.store.dispatch(eliminarTodo({id: this.todo.id}));
  }

}
