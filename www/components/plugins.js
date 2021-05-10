// This is a JavaScript file

$(document) .on("cliclk","alerta", function(){
  navigator.notification.alert("Minha mensagem",null,"Aviso","Aceito");
 } );

 $(document) .on("cliclk","confirm", function(){
  function confirma(buttonIndex) {
    if(buttonIndex == 1) {
       navigator.notification.alert("Escolheu a opção A");
    }else{
       navigator.notification.alert("Escolheu a opção B");
    }
  
  }
  navigator.notification.confirm("Escolha A ou B",confirma, "Escolha:",['A','B']);
 } );

 $(document) .on("cliclk","beep", function(){
  navigator.notification.beep(3);
 } );

 $(document) .on("cliclk","vibrar", function(){
  navigator.vibrate(3000);
 } );

 function mostraMapa(Lat, long) {
       L.mapquest.key = '	O17XHzLGxAGqeAuoGuzbNYToUCg2HWYw';

        var map = L.mapquest.map('map', {
          center: [lat, long],
          layers: L.mapquest.tileLayer('map'),
          zoom: 16
        });

        map.addControl(L.mapquest.control());
 }

 $(document) .on("cliclk","local", function(){
  var onSuccess = function(position) {
     mostraMapa( position.coords.latitude , position.coords.longitude)
    };

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
 } );