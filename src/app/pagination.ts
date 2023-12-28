import { createAdapter } from '@state-adapt/core';

export interface Pagination {
  offset: number;
  pageSize: number;
}

export const paginationAdapter = createAdapter<Pagination>()({
  nextPage: ({ offset, pageSize }) => ({ pageSize, offset: offset + 1 }),
  previousPage: ({ offset, pageSize }) => ({ pageSize, offset: offset - 1 }),
  selectors: {
    pagination: (state) => state,
  },
});
