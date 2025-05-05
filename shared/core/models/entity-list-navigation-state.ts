import { SortDirection } from '@fiix/angular-components';

export interface EntityListNavigationState {
  query: string;
  pageNumber: number;
  parentId: string;
  sortDirection?: SortDirection;
  sortBy?: string;
  totalElements?: number;
}
