angular.module("app3")
.service("threeService",threeService);

function threeService(){

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
