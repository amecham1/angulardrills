angular.module("app3")
.controller("Ctrl3",Ctrl3);

function Ctrl3($scope,service3){

$scope.data = service3.getData();

// $scope.list = service3.getName();

}//end of controller
