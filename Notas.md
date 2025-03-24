Notas de Electron

Instalar electron como dependencia de desarrollador
npm install electron --save-dev

Comando de inicio en package.json, Le dice a electron que busque el script principal en ese directorio
En este caso sería nuestro "Main.js"
"start": "electron ."

Código en main
const { app, BrowserWindow } = require('electron');
    Importa los elementos del proceso principal
        App maneja el ciclo de vida de la aplicación y utiliza eventos
            Solo puede haber 1
        BrowserWindow en un objeto que representa una ventana
            Se pueden instanciar varios

Al instanciar una ventana se pueden definir preferencias
webPreferences: {
            nodeIntegration: true, //Permite acceder a elementos globales de Node desde el código
            preload: path.join(__dirname, 'preload.js'), //Ejecuta un script antes de cargar una ventana
        }

Electron Forge: Framework de desarrollo para electron

npx create-electron-app@latest my-app: Crea un proyecto inicial en electron

Añadir Electron forge a proyecto existente 

npm install --save-dev @electron-forge/cli
npm exec --package=@electron-forge/cli -c "electron-forge import"