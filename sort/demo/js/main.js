require.config({
  baseUrl: 'js/sort',
  paths: {
    'sort': 'sort'
  }
});

require(['sort'], function (sort) {
  var arr = [8, 5, 2, 6, 9, 3, 1, 4, 0, 7];
  console.info('primary array: ', arr);
  console.log('1. bubble sort: ',sort.bubble(arr));
  console.log('2. cocktail sort: ', sort.cocktail(arr));
  console.log('3. insert sort: ', sort.insertion(arr));
  console.error('4. shell sort:', sort.shell(arr));
  console.error('5. binary insert sort: ', sort.binaryInsert(arr));
  console.log('6. select sort: ', sort.selection(arr));
  console.log('7. quick sort: ', sort.quick(arr));
  console.log('8. heap sort: ', sort.heap(arr));
});

