define(function () {

  var bigRich = function (n) {
    var methods = [1, 2];
    for (var i = 2; i < n; i++) {
      var temp = 0;
      for (var j = i - 1; j >= 0; j--) {
        temp += methods[j];
      }
      methods[i] = temp + 1;
    }
    return methods[n - 1];
  }

  return {
    bigRich,
  }
})