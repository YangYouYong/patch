defineClass("PatchViewController",{ 
	viewDidLoad: function() {
	var self = this
	// this.view.backgroundColor = require("UIColor").alloc().initWithRed_green_blue_alpha(0.5,0.5,0.5,1)

	var myView = require("UIView").alloc().initWithFrame({
		    x: 20,
    		y: 100,
    		width: 120,
    		height: 20
	})
	self.view.addSubview(myView)
	log('print view clolor')
	}
},{})