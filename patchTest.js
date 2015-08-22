defineClass("PatchViewController",{
	var UIColor = require("UIColor") 
	viewDidLoad: function() {
	var self = this
	this.view.backgroundColor = UIColor.greenColor()
	log('print view clolor')
	}
},{})