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

export type Movie = {
  id: number;
  original_title: string;
  backdrop_path: string;
  genre_ids: number[];
};
