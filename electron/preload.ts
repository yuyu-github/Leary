import { contextBridge } from 'electron';

contextBridge.exposeInMainWorld('api', {
  _: () => {},
});
