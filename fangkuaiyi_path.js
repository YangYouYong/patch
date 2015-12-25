defineClass('FKYSearchResultViewController : UIViewController<
UITableViewDataSource,
UITableViewDelegate,
FKYSearchBarDelegate,
FKYCategoryViewDelegate,
UIGestureRecognizerDelegate > ',{
// viewDidLoad: function(){
// 	var self = this

// }
tableView_didSelectRowAtIndexPath: function(tableView, indexPath) {
	var alertView = require('UIAlertView').alloc().initWithTitle_message_delegate_cancelButtonTitle_otherButtonTitles("Alert", self.dataSource().objectAtIndex(indexPath.row()), self, "OK", null);
	alertView.show()
}
})