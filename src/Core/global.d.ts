export interface IElectronApi {
  ipcRenderer: { myClose: () => void };
}

declare global {
  interface Window {
    electron: IElectronApi;
  }
}