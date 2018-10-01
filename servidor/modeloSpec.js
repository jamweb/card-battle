var modelo = require('./modelo.js');

describe("El juego de las cartas...", function() {
  var juego;
  var usr;
  //var cartalobo;

  beforeEach(function() {
    juego = new modelo.Juego();
    usr1 = new modelo.Usuario("pepe");
    usr2 = new modelo.Usuario("juan");
   // cartalobo= new Carta("lobo",9,9,9);
  });

 it("deberia tener una coleccion de cartas", function() {
    
    expect(juego.cartas).toBeDefined();
    expect(juego.cartas.length).toEqual(30);
    expect(juego.usuarios).toBeDefined();
    expect(juego.usuarios.length).toEqual(0);

  });

  it("el usuario tiene un mazo", function() {
    
    expect(usr1.mazo).toBeDefined();
    expect(usr1.mazo.length).toEqual(0);
    expect(usr2.mazo).toBeDefined();
    expect(usr2.mazo.length).toEqual(0);
  });
 

  it("Agrego dos usuarios al juego", function() {
    
    juego.agregarUsuario(usr1);
    juego.agregarUsuario(usr2);
    expect(juego.usuarios.length).toEqual(2);
    expect(juego.usuarios[0].nombre).toEqual("pepe");
    expect(juego.usuarios[1].nombre).toEqual("juan");
    expect(usr1.mazo.length).toEqual(30); 
    expect(usr2.mazo.length).toEqual(30);  
  })



  it("El usuario tiene una mano vacia inicialmente", function() {
    
    expect(usr1.mano).toBeDefined();
    expect(usr1.mano.length).toEqual(0);
    expect(usr2.mano).toBeDefined();
    expect(usr2.mano.length).toEqual(0);  
  })

  /*
  it("Agrego carta lobo al juego", function() {
    
    juego.agregarCarta(cartalobo);
    expect(juego.cartas.length).toEqual(31);
    expect(juego.cartas[30].nombre).toEqual("lobo");
    expect(cartalobo.vidas).toEqual(9);   
  })
  */

}); 
