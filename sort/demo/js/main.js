require.config({
  baseUrl: 'js/sort',
  paths: {
    'sort': 'sort'
  }
});

var sort = require(['sort'], function (sort) {
  var arr = [8, 5, 2, 6, 9, 3, 1, 4, 0, 7];
  console.log(sort.bubble(arr));
  console.log(sort.insertion(arr));
  console.log(sort.binaryInsert(arr));
  console.log(sort.directSelect(arr));
});

