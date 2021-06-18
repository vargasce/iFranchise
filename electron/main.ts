// Import necesarios
import { app, BrowserWindow, Menu } from 'electron';
import * as path from 'path';
import * as url from 'url';
const controller = require('./preload.js');


// Inicializamos la ventana de Electron
let win: BrowserWindow;

function createWindow() {
    win = new BrowserWindow({ 
        width: 1200, 
        height: 1000,
        show : false,
        webPreferences : {
            nodeIntegration : true,
            //preload : './preload.js'
        }
    });

    win.loadURL(
        url.format({
            pathname: path.join(__dirname, `/../../dist/iFranchise/index.html`),
            protocol: 'file:',
            slashes: true
        })
    );

    configMenuApp( win );

    win.on('closed', () => {
        win = null;
    });
}

//RUN CONTROLLER
controller.init();

// Para ver el estado de la app
app.on('ready', createWindow)

app.on('activate', () => {
    if (win === null) {
      createWindow()
    }
});

const configMenuApp = ( win : BrowserWindow ) =>{
	win.webContents.openDevTools();
	let menuPview = Menu.buildFromTemplate(templateMenu());
	win.setMenu(menuPview);
  win.maximize()
  win.show();
	//win.setResizable(false);
}

const templateMenu = () =>{

	let menuPrincipal = [
		{
			label:"Menu",
			submenu : [
				{
					label : "Acerca de",
					click : () =>{
						viewMenuAcercaDe();
					}
				}
			]
		}
	];

  return menuPrincipal;
}

const viewMenuAcercaDe = () =>{
    //Todavia no se que hacer con esto tipos de eventos, por ahora lo vamos a dejar asi
    //hasta tener nuevo aviso.
}


