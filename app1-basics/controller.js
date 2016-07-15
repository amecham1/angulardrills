angular.module("app3")
.controller("ThreeApp",ThreeApp);


function ThreeApp($scope,threeService){

$scope.data = threeService.getData();

}//end of controller
