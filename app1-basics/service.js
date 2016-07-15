angular.module("app4")
.service("service4", service4);

function service4(){

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
