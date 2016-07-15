angular.module("app5")
.service("service5",service5);

function service5(){
var data = [{
  car: "volkswagon",
  color:"white"
},
{
  car: "bmw",
  color:"black"
}];
this.getData = function(){
  return data;
};

}
