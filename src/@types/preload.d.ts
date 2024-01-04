export interface IApi {
  _: () => void;
}

declare global {
  interface Window {
    api: IApi;
  }
}
