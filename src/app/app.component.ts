import { Component } from '@angular/core';
import { Model, TodoItem } from './model';

@Component({
  selector: 'todo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  model = new Model();

  getName(){
    return this.model.user;
  }

 getTodoItems(){
    return this.model.items.filter(item => !item.done);
  }

  getTodoItemsConcluidas(){
    return this.model.items.filter(item => item.done);
  }

  addItem(newItem, prioridade){
    if(newItem != ""){
      this.model.items.push(new TodoItem(newItem, false, prioridade));
    }
  }
}
