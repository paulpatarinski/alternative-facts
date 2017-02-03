var path = require('path');
var projRoot = path.join(__dirname, '..');
var copyfiles = require('copyfiles');
var uiTestsBin = path.join(projRoot, 'ui_tests', 'bin', 'Debug');
var destination = path.join(projRoot, 'fastlane','screenshots', 'en-US');

copyfiles([uiTestsBin + "/*.png",destination], true, function (er, files) {
    console.log(files);
});