"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import necesarios
var electron_1 = require("electron");
var path = require("path");
var url = require("url");
var controller = require('./preload.js');
// Inicializamos la ventana de Electron
var win;
function createWindow() {
    win = new electron_1.BrowserWindow({
        width: 1200,
        height: 1000,
        show: false,
        webPreferences: {
            nodeIntegration: true,
        }
    });
    win.loadURL(url.format({
        pathname: path.join(__dirname, "/../../dist/iFranchise/index.html"),
        protocol: 'file:',
        slashes: true
    }));
    configMenuApp(win);
    win.on('closed', function () {
        win = null;
    });
}
//RUN CONTROLLER
controller.init();
// Para ver el estado de la app
electron_1.app.on('ready', createWindow);
electron_1.app.on('activate', function () {
    if (win === null) {
        createWindow();
    }
});
var configMenuApp = function (win) {
    win.webContents.openDevTools();
    var menuPview = electron_1.Menu.buildFromTemplate(templateMenu());
    win.setMenu(menuPview);
    win.maximize();
    win.show();
    //win.setResizable(false);
};
var templateMenu = function () {
    var menuPrincipal = [
        {
            label: "Menu",
            submenu: [
                {
                    label: "Acerca de",
                    click: function () {
                        viewMenuAcercaDe();
                    }
                }
            ]
        }
    ];
    return menuPrincipal;
};
var viewMenuAcercaDe = function () {
    //Todavia no se que hacer con esto tipos de eventos, por ahora lo vamos a dejar asi
    //hasta tener nuevo aviso.
};
//# sourceMappingURL=main.js.map