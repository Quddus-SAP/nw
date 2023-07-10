/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"qu_baby_nw/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
