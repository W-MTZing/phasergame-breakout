
var oldCreateElement = document.createElement;
document.createElement = function (name) {
    if (name === "canvas") {
        return window.__canvas;
    }
    return oldCreateElement(name);
}

CanvasRenderingContext2D.prototype.drawImage = function (image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) {
    console.log("drawImagedrawImagedrawImage");
}

jsb.fileUtils = {};
jsb.fileUtils.getStringFromFile = function (url) {
    var str = loadRuntime().getFileSystemManager().readFileSync(url, "utf8");
    return str;
}
jsb.fileUtils.getDataFromFile = function (url) {
    var tmp = loadRuntime().getFileSystemManager().readFileSync(url);
    return tmp; 
}

require("libs/phaser.js");

require("game.js");

