angular.module("twoOne")
.controller("TwoCtrl", TwoCtrl);

function TwoCtrl($scope, twoService){

$scope.data = twoService.getData();

}//end of controller
