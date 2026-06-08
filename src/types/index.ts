export interface ResponsePayload<T = unknown> {
  message: string;
  total: number;
  data: T;
}

export interface NewsData {
  title: string;
  link: string;
  isoDate: string;
  image: string;
  description: string;
}
