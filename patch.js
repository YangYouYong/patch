defineClass("ViewController", {
  //instance method definitions
  tableView_didSelectRowAtIndexPath: function(tableView, indexPath) {
    var row = indexPath.row()
    print("this is a patch method")
  }
}, {})
