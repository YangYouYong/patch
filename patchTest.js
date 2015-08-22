defineClass("PatchViewController",{ 
	viewDidLoad: function() {
	var self = this
	this.view.backgroundColor = require("UIColor").alloc().initWithRed_green_blue_alpha(0.5,0.5,0.5,1)
	log('print view clolor')
	}
},{})