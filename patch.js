defineClass("ViewController", {
  //instance method definitions
  tableView_didSelectRowAtIndexPath: function(tableView, indexPath) {
    var row = indexPath.row()
    out.print("this is a patch method")
    print("this is a patch method")
  }
}, {})
