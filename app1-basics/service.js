angular.module("app3")
.service("service3",service3);

function service3(){

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




}//end of service
