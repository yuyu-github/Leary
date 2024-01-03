import { app, BrowserWindow, Menu } from 'electron';
import path from 'path';
import { env } from 'process';

export let mainWindow: BrowserWindow | null;
function createWindow(): void {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  let menu: Menu | null = null;
  if (env.TYPE === 'debug') {
    menu = Menu.buildFromTemplate([
      {
        label: 'デバッグ',
        submenu: [
          { label: 'デベロッパーツール', role: 'toggleDevTools' },
          { label: '再読み込み', role: 'reload' },
        ],
      },
    ]);
  }
  if (process.platform === 'darwin') Menu.setApplicationMenu(menu);
  else mainWindow.setMenu(menu);

  void mainWindow.loadFile(path.join(__dirname, '../index.html'));

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', () => {
  createWindow();
});

app.on('activate', () => {
  if (mainWindow === null) createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
