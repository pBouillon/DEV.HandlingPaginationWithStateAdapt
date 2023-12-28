import { Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';

import { switchMap } from 'rxjs';
import { TodoItem } from './todo-item';
import { TodoItemComponent } from './todo-item.component';
import { TodoItemService } from './todo-item.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoItemComponent],
  template: `
    @for (todoItem of todoItems(); track todoItem.id) {
    <app-todo-item [todoItem]="todoItem" />
    }

    <div class="grid">
      <button
        type="button"
        (click)="onPreviousPage()"
        [disabled]="pagination().offset === 0"
      >
        ←
      </button>
      <button
        type="button"
        (click)="onNextPage()"
        [disabled]="pagination().offset === 2"
      >
        →
      </button>
    </div>
  `,
})
export class AppComponent {
  readonly #todoItemService = inject(TodoItemService);

  readonly todoItems = signal<TodoItem[]>([]);
  readonly pagination = signal({
    offset: 0,
    pageSize: 5,
  });

  constructor() {
    toObservable(this.pagination)
      .pipe(
        takeUntilDestroyed(),
        switchMap((pagination) =>
          this.#todoItemService.getTodoItems(pagination)
        )
      )
      .subscribe((todoItems) => this.todoItems.set(todoItems));
  }

  onPreviousPage(): void {
    this.pagination.update((current) => ({
      ...current,
      offset: current.offset - 1,
    }));
  }

  onNextPage(): void {
    this.pagination.update((current) => ({
      ...current,
      offset: current.offset + 1,
    }));
  }
}
