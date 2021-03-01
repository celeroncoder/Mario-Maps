const { app, BrowserWindow } = require("electron");

const createWindow = () => {
	const win = new BrowserWindow({
		width: 600,
		height: 700,
		webPreferences: {
			nodeIntegration: false,
		},
	});

	win.loadFile("public/index.html");
};

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});

app.on("activate", () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
});
