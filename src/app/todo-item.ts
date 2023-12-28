import { createAdapter } from '@state-adapt/core';
import { createEntityAdapter } from '@state-adapt/core/adapters';

export interface TodoItem {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
}

export const todoItemAdapter = createAdapter<TodoItem>()({
  selectors: {
    todoItem: (state) => state,
  },
});

export const todoItemsAdapter =
  createEntityAdapter<TodoItem>()(todoItemAdapter);
