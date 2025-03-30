Notas de Electron

Instalar electron como dependencia de desarrollador
npm install electron --save-dev

Comando de inicio en package.json, Le dice a electron que busque el script principal en ese directorio
En este caso sería nuestro "Main.js"
"start": "electron ."

Código en main.js
const { app, BrowserWindow } = require('electron');
    Importa los elementos del proceso principal
        App maneja el ciclo de vida de la aplicación y utiliza eventos
            Solo puede haber 1
        BrowserWindow en un objeto que representa una ventana
            Se pueden instanciar varios

Al instanciar una ventana se pueden definir preferencias
webPreferences: {
            nodeIntegration: true, //Permite acceder a elementos globales de Node desde el código
            contextIsolation: false, //Define si la lógica de electron y el navegador utilizarán el mismo contexto o si utilizan contextos separados
            //Esto permite que no se pueda acceder a la lógica desde la aplicación y desactivarlo abre el sistema a vulnerabilidades y permite utilizar elementos de la lógica (como require) dentro del código de frontend
            preload: path.join(__dirname, 'preload.js'), //Ejecuta un script antes de cargar una ventana
        }

Código en render.js

const {desktopCapturer, remote} = require("electron")
const {Menu} = remote

En este caso se esta importando 2 objetos 1 que permite capturar una ventana similar a OBS y remote

Remote permite tener conexión con el proceso principal, lo que nos permite acceder la clase Menu que solo está diseñado para correr en el proceso principal

Electron Forge: Framework de desarrollo para electron

npx create-electron-app@latest my-app: Crea un proyecto inicial en electron

Añadir Electron forge a proyecto existente 

npm install --save-dev @electron-forge/cli
npm exec --package=@electron-forge/cli -c "electron-forge import"