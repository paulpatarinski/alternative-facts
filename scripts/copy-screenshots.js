var copy = require("glob-copy")
var path = require('path');
var projRoot = path.join(__dirname, '..');
var uiTestsBin = path.join(projRoot, 'ui_tests', 'bin', 'Debug');
var destination = path.join(projRoot, 'fastlane','screenshots');

copy(uiTestsBin + "/*.png",destination, function (er, files) {
    console.log(files);
});