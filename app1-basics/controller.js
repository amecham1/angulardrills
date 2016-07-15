angular.module("app4")
.controller("Ctrl4", Ctrl4);

function Ctrl4($scope,service4){

$scope.datas = service4.getData();

}
