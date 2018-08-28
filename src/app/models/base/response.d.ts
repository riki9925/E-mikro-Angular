export interface IResponse<V> {
  status: number;
  message?: string;
  data?: V;
}
