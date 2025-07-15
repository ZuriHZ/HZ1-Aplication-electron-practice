const { app, BrowserWindow, Menu, ipcMain } = require("electron");
const path = require("path");

const isDev = !app.isPackaged;
let win;
function createWindow() {
    win = new BrowserWindow({
        width: 1340,
        height: 1000,
        backgroundColor: "#262335",
        frame: false,
        show: false,
        autoHideMenuBar: true,
        
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            contextIsolation: true,
            nodeIntegration: false,
            webviewTag: true,
            sandbox:true,
        
        },
    });

    if (isDev) {
        win.loadURL("http://localhost:5173");
    } else {
        win.loadFile(path.join(__dirname, "../dist/index.html"));
    }
    win.once("ready-to-show", () => {
        win.show();
    });
    // La carga solo ocurre aquí, no se repite después.

    // Menú personalizado
    const template = [
        {
            label: "Archivo",
            submenu: [
                {
                    label: "Nuevo",
                    click: () => {
                        /* lógica para nuevo */
                    },
                },
                {
                    label: "Abrir",
                    click: () => {
                        /* lógica para abrir */
                    },
                },
                { type: "separator" },
                { label: "Salir", role: "quit" },
            ],
        },
        {
            label: "Editar",
            submenu: [
                { role: "undo" },
                { role: "redo" },
                { type: "separator" },
                { role: "cut" },
                { role: "copy" },
                { role: "paste" },
            ],
        },
        {
            label: "Ver",
            submenu: [
                { role: "reload" },
                { type: "separator" },
                { role: "resetzoom" },
                { role: "zoomin" },
                { role: "zoomout" },
                { type: "separator" },
                { role: "togglefullscreen" },
            ],
        },
        {
            label: "Refrescar ventana",
            accelerator: "F5",
            click: () => {
                const { BrowserWindow } = require("electron");
                const focused = BrowserWindow.getFocusedWindow();
                if (focused) focused.reload();
            },
        },
    ];

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);

    // Menú personalizado y resto de la función
}


app.whenReady().then(createWindow);

ipcMain.on("close-window", () => {
    win.close();
});

ipcMain.on("minimize-window", () => {
    if (win && !win.isMinimized()) win.minimize();
});

ipcMain.on("toggle-maximize-window", () => {
    if (win.isMaximized()) {
        win.unmaximize();
    } else {
        win.maximize();
    }
});

// Manejo correcto del cierre de la aplicación
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
