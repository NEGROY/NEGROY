
const {app, BrowserWindow, Menu} = require('electron');

const url = require('url');
const path = require('path');

//MODULO PARA NO RECARGAR VENTANA
if (process.env.NODE_ENV !== 'production'){
    require('electron-reload')(__dirname,{
        //
        electron: path.join(__dirname, '../node_modules', '.bin', 'electron')
    })
}

let mainWindow
let createNewWindowAhorro 

//para ecuchar cuando inica la aplicacion
app.on('ready', () => {
    mainWindow = new BrowserWindow({});
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'views/index.html'),
        protocol: 'file', 
        slashes: true
    }))
//Menu.buildFromTemplate()
const mainMenu = Menu.buildFromTemplate(templateMenu);
Menu.setApplicationMenu(mainMenu);

//PARA CERRAR LA VENTANAS
mainWindow.on('closed', () =>{
    app.quit();
});

});

//FUNCION PARA CREAR UNA NUEVA VENTANA 
function createNewWindow(){
    createNewWindowAhorro =  new BrowserWindow({
        width: 400,
        height: 330,
        title: 'VENTANA DE AHORROS'
    });
    createNewWindowAhorro.setMenu(null);
    createNewWindowAhorro.loadURL(url.format({
        pathname: path.join(__dirname, 'views/ahorros.html'),
        protocol: 'file', 
        slashes: true
    }))
    createNewWindowAhorro.on('closed',()=>{
        createNewWindowAhorro = null;
    })
}

const templateMenu = [
    {
        label: 'File',
        submenu: [{
            label: 'New Product',
            accelerator: 'Ctrl+N',
            click(){
                createNewWindow() 
            }
        }]
    },
    {
        label: 'Remove ALL Products',
        click(){

        }
    },
    {
        label: 'Exit',
        accelerator: process.platform == 'darwin' ? 'command+Q' : 'Ctrl+Q',
        click(){
            app.quit();
        }
    }
];

if(process.platform == 'darwin'){
    templateMenu.unshift({
        label: app.getName()
    });
}

if(process.env.NODE_ENV !== 'production'){
    templateMenu.push({
        label : 'DevTools',
        submenu: [
            {
                label: 'Show/Hide Dev Tools',
                click(item, focusedWindow){
                        focusedWindow.toggleDevTools();
                }
            },
            {
                role: 'reload'
            }
        ]
    })
}