defineClass("UIViewController", {
  //instance method definitions
  tableView_didSelectRowAtIndexPath: function(tableView, indexPath) {
    var row = indexPath.row()
    // if (self.dataSource().length > row) {  //加上判断越界的逻辑
    //   var content = self.dataArr()[row];
    //   var ctrl = JPViewController.alloc().initWithContent(content);
    //   self.navigationController().pushViewController(ctrl);
    // }
    print("this is a patch method")
  }
}, {})
