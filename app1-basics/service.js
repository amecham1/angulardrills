angular.module("app3")
.service("myService", myService);


function myService(){

var car = [

  {vehicle:"volkswagon",
    color: "white"},

    {vehicle: "bmw",
    color: "black"},

    {vehicle: "honda",
    color: "gray"}

  ];

  this.getData = function(){
    return car;
  };

}//end of myService
