import { Component, inject } from '@angular/core';

import { TodoItemComponent } from './todo-item.component';
import { TodoItemService } from './todo-item.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoItemComponent],
  template: `
    @for (todoItem of vm().todoItems; track todoItem.id) {
    <app-todo-item [todoItem]="todoItem" />
    }

    <div class="grid">
      <button
        type="button"
        (click)="onPreviousPage()"
        [disabled]="vm().pagination.offset === 0"
      >
        ←
      </button>
      <button
        type="button"
        (click)="onNextPage()"
        [disabled]="vm().pagination.offset === 2"
      >
        →
      </button>
    </div>
  `,
})
export class AppComponent {
  readonly #todoItemService = inject(TodoItemService);

  readonly vm = this.#todoItemService.vm;

  onPreviousPage(): void {
    this.#todoItemService.previousPage$.next();
  }

  onNextPage(): void {
    this.#todoItemService.nextPage$.next();
  }
}
