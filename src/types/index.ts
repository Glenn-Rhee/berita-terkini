export interface ResponsePayload<T = unknown> {
  message: string;
  total: number;
  data: T;
}

export interface NewsDataNormalized {
  title: string;
  link: string;
  isoDate: string;
  image: string;
  description: string;
}

export interface DataInternasional {
  title: string;
  link: string;
  contentSnippet: string;
  isoDate: string;
  image: {
    small: string;
    large: string;
  };
}
