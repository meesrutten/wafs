var settings = {
  sandbox: "SANDBOX",
  lineair: "LINEAIR",
  gpsAvailable: "GPS_AVAILABLE",

}

(function(){


  var app = {
    init = function(){}
  };

  var posistion = {
    set : function (){},
    check : function (){},
    update : function (){},
    getDistance : function (){}
  };

  var gMap = {
    generate: function (){},
    update: function (){}
  };

  var helper = {
    isNumber: function () {},
    getElement: function (){
      return document.querySelector(element);
    },
  ;}

  var $ = helper.getElement();

  //start apply
  app.init();
})()
