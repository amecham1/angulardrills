angular.module("secondApp")
.service("twoService",twoService);

function twoService(){

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
