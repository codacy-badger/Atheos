//////////////////////////////////////////////////////////////////////////////80
// System
//////////////////////////////////////////////////////////////////////////////80
// Copyright (c) Atheos & Liam Siira (Atheos.io), distributed as-is and without
// warranty under the modified License: MIT - Hippocratic 1.2: firstdonoharm.dev
// See [root]/license.md for more. This information must remain intact.
//////////////////////////////////////////////////////////////////////////////80
// Description: 
// The System Module initializes the core Atheos object and puts the engine in
// motion, calling the initilization of other modules, and publishing the
// Amplify 'atheos.loaded' event.
//
//												- Liam Siira
//////////////////////////////////////////////////////////////////////////////80

(function(global) {


	var atheos = global.atheos = {},
		amplify = global.amplify;

	//////////////////////////////////////////////////////////////////////
	// Init
	//////////////////////////////////////////////////////////////////////
	document.addEventListener('DOMContentLoaded', function() {

		//Synthetic Login Overlay
		if (document.querySelector('#login') || document.querySelector('#installer')) {
			global.synthetic.init();
		} else {

			atheos.chrono.init();
			atheos.keybind.init();
			atheos.modal.init();
			// atheos.sidebars.init();

			atheos.codiad.init();

		}
		amplify.publish('atheos.loaded');
		amplify.publish('atheos.plugins');
	});

})(this);