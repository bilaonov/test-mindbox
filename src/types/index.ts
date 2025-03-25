export type FilterType = 'all' | 'active' | 'completed';

export interface ITodo {
  id: number;
  text: string;
  completed: boolean;
}
