defineClass('FKYSearchResultViewController', {
	// viewDidLoad: function(){
	// 	var self = this

	// }
	dataSource: function() {},
	tableView_didSelectRowAtIndexPath: function(tableView, indexPath) {
		var alertView = require('UIAlertView').alloc().initWithTitle_message_delegate_cancelButtonTitle_otherButtonTitles("Alert", self.dataSource().objectAtIndex(indexPath.row()), self, "OK", null);
		alertView.show()
	}
});