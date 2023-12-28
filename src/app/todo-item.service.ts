import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { TodoItem } from './todo-item';

const TODO_ITEMS: TodoItem[] = [
  {
    id: 1,
    title: 'Grocery Shopping',
    description: 'Buy fruits, vegetables, and other essentials for the week.',
    completed: false,
  },
  {
    id: 2,
    title: 'Clean the Garage',
    description:
      'Organize and clean the items in the garage to create more space.',
    completed: true,
  },
  {
    id: 3,
    title: 'Morning Jog',
    description: 'Go for a jog around the neighborhood for 30 minutes.',
    completed: false,
  },
  {
    id: 4,
    title: 'Read a Book',
    description: 'Read at least two chapters of the novel before bedtime.',
    completed: true,
  },
  {
    id: 5,
    title: 'Do the Dishes',
    description: 'Wash and dry the dishes after dinner.',
    completed: false,
  },
  {
    id: 6,
    title: 'Water the Plants',
    completed: true,
  },
  {
    id: 7,
    title: 'Write in Journal',
    description: 'Reflect on the day and jot down thoughts and experiences.',
    completed: false,
  },
  {
    id: 8,
    title: 'Organize Closet',
    completed: true,
  },
  {
    id: 9,
    title: 'Cook a New Recipe',
    description: 'Try cooking a new recipe for dinner tonight.',
    completed: false,
  },
  {
    id: 10,
    title: 'Movie Night',
    description: 'Watch a movie or TV show with family or friends.',
    completed: true,
  },
  {
    id: 11,
    title: 'Learn a New Skill',
    completed: false,
  },
  {
    id: 12,
    title: 'Visit the Gym',
    completed: true,
  },
  {
    id: 13,
    title: 'Call a Friend',
    description: 'Catch up with a friend over the phone.',
    completed: false,
  },
  {
    id: 14,
    title: 'DIY Project',
    description: 'Start a small do-it-yourself project at home.',
    completed: true,
  },
  {
    id: 15,
    title: 'Plan Weekend Activities',
    completed: false,
  },
];

@Injectable({ providedIn: 'root' })
export class TodoItemService {
  getTodoItems(options: {
    offset: number;
    pageSize: number;
  }): Observable<TodoItem[]> {
    const { offset, pageSize } = options;

    const startIndex = offset * pageSize;
    const endIndex = startIndex + pageSize;

    return of(TODO_ITEMS.slice(startIndex, endIndex));
  }
}
