export enum severity {
  'error',
  'warning',
  'info',
  'success',
}

export type Alert = {
  message: string;
  severity: severity | null;
};

type Genre = {
  id: number;
  name: string;
};

export type Movie = {
  uid?: string;
  id: number;
  original_title: string;
  backdrop_path: string;
  genres: Genre[];
  poster_path?: string;
  overview?: string;
  release_date?: string;
  isFavorite?: boolean;
  isWatchLater?: boolean;
};

export interface FormInput {
  email: string;
  password: string;
}
