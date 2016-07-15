angular.module("app5")
.controller("Ctrl5",Ctrl5);


function Ctrl5($scope,service5){

$scope.datas=service5.getData();

}//end of controller
