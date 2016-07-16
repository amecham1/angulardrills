angular.module("app3")
.controller("Ctrl3", Ctrl3);

function Ctrl3($scope,myService){

$scope.vehicles = myService.getData();

}//end of controller
