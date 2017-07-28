require(['zhibo'], function (zhibo) {
  var test = ['((()))', '(()()', '(()', '(', ''];
  test.forEach(function (item) {
    console.log(zhibo.isValidBrackets(item.split('')))
  })
})