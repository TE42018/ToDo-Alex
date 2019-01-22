export interface Task {
    id?: number;
    title?: string;
    description?: string;
    state?: 'Todo' | 'In Progress' | 'Done';
  }