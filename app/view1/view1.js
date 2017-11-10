'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope',function($scope) {
	$scope.records = DataDump;
	$scope.selectedItems = [];

	$scope.addItem = function(addItem){
   
    if(!$scope.selectedItems.includes(addItem)){
      $scope.selectedItems.push(addItem)
    }
}
  $scope.delitem = function(delItem){
    $scope.selectedItems = $scope.selectedItems.filter(function(item) {
    return item.id !== delItem.id ;
	});    
  }
  

}]);