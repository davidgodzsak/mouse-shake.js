  function rndRGB(){
    var r=rnd(155)+100;
    var g=rnd(155)+100;
    var b=rnd(155)+100;
    return "rgb("+r+","+g+","+b+")";
  };

  function rnd(a){
    return Math.round(Math.random()*a);
  };
