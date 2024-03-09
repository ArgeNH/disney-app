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
