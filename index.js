var fs=require("fs");
var config=JSON.parse(fs.readFileSync("config.json"));
var host=config.host;
var port=config.port;
var exp=require("express");
var app=exp(); 

var modelo = require("./servidor/modelo.js"); 
var juego = new modelo.Juego(); //cuando se inicia el servidor se crea una instancia de juego


app.get("/",function(request,response){
	var json={};
	response.send(json);
});

app.get("/agregarUsuario/:nombre",function(request,response){
	var usr1=new modelo.Usuario(request.params.nombre);
	//var usrid;
	juego.agregarUsuario(usr1);
	response.send({"usr":usr1.id});
});

app.get("/crearPartida/:usrid/:nombre", function(request,response){
	var usrid=request.params.usrid;
	var partida=request.params.nombre;
	var usr=juego.usuarios[usrid];
	usr.crearPartida(partida);
	response.send({"res":"ok"});
})

app.get("/asignarPartida/:usrid/:nombre", function(request,response){
	var usrid=request.params.usrid;
	var partida=request.params.nombre;
	var usr=juego.usuarios[usrid];
	usr.asignarPartida(partida);
	response.send({"res":"ok"});
})

// PRUEBA JOSE ANGEL
app.get('/obtenerPartidas', function(request, response) {
    juego.obtenerPartidas(function(lista){
        response.send(lista);        
    });
});



console.log("Servidor escuchando en "+host+":"+port);
app.listen(port,host);
