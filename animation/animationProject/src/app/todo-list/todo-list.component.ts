import { Component, OnInit } from '@angular/core';
import { fade } from '../animation';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  animations: [
    fade
  ],
})
export class TodoListComponent implements OnInit {
  listItems = ['this is working', 'javascript is best', 'how is mean'];

  constructor() { }

  ngOnInit(): void { }

  addItems(items: any) {
    this.listItems.push(items.value);
  }
  removeItems(index: number) {
    this.listItems.splice(index, 1);
  }
}
