var modelo = require('./modelo.js');

describe("El juego de las cartas...", function() {
  var juego;
  var usr;
  //var cartalobo;

  beforeEach(function() {
    juego = new modelo.Juego();
    usr = new modelo.Usuario("pepe")
   // cartalobo= new Carta("lobo",9,9,9);
  });

  it("deberia tener una coleccion de cartas", function() {
    
    expect(juego.cartas).toBeDefined();
    expect(juego.cartas.length).toEqual(30);
    expect(juego.usuarios).toBeDefined();
    expect(juego.usuarios.length).toEqual(0);

  });

  it("el usuario tiene un mazo", function() {
    
    expect(usr.mazo).toBeDefined();
    expect(usr.mazo.length).toEqual(0);
  });

  it("Agrego el usuario pepe al juego", function() {
    
    juego.agregarUsuario(usr);
    expect(juego.usuarios.length).toEqual(1);
    expect(juego.usuarios[0].nombre).toEqual("pepe");
    expect(usr.mazo.length).toEqual(30);   
  })

  /*it("El usuario tiene una mano vacia inicialmente", function() {
    
    juego.agregarUsuario(usr);
    expect(juego.usuarios.length).toEqual(1);
    expect(juego.usuarios[0].mano).toEqual(0);
    expect(usr.mazo.length).toEqual(30);   
  })*/

  /*
  it("Agrego carta lobo al juego", function() {
    
    juego.agregarCarta(cartalobo);
    expect(juego.cartas.length).toEqual(31);
    expect(juego.cartas[30].nombre).toEqual("lobo");
    expect(cartalobo.vidas).toEqual(9);   
  })
  */

}); 
