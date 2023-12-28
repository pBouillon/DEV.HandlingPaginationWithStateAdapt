import { Component, Input, signal } from '@angular/core';
import { TodoItem } from './todo-item';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  template: `
    <div
      [attr.data-theme]="isHovered() ? 'light' : 'dark'"
      class="todo-item"
      (click)="todoItem.completed = !todoItem.completed"
      (mouseenter)="isHovered.set(true)"
      (mouseleave)="isHovered.set(false)"
    >
      <div class="todo-details">
        <h5>
          {{ todoItem.title }}
        </h5>

        @if(todoItem.description) {
        <p>{{ todoItem.description }}</p>
        } @else {
        <p><i>No description</i></p>
        }
      </div>

      <input type="checkbox" [checked]="todoItem.completed" />
    </div>
  `,
  styles: [
    `
      .todo-item {
        display: flex;
        align-items: center;
        margin-bottom: 5px;
        transition: background-color 0.3s;
        cursor: pointer;
      }

      .todo-item input {
        margin-left: auto;
      }

      .todo-details {
        margin-right: 10px;
      }

      .todo-details h5 {
        margin-bottom: 3px;
      }
    `,
  ],
})
export class TodoItemComponent {
  @Input({ required: true }) todoItem!: TodoItem;

  isHovered = signal(false);
}
