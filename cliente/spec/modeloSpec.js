describe("El juego de las cartas...", function() {
  var juego;
  var usr1,usr2;
  //var cartalobo;

  beforeEach(function() {
    juego = new Juego();
    usr1 = new Usuario("pepe");
    usr2 = new Usuario("juan");
   // cartalobo= new Carta("lobo",9,9,9);
  });

  it("Se comprueban condiciones iniciales (cartas,partidas,usuario)", function() {
    
    expect(juego.cartas).toBeDefined();
    expect(juego.cartas.length).toEqual(0);
    expect(juego.usuarios).toBeDefined();
    expect(juego.usuarios.length).toEqual(0);
    expect(juego.partidas).toBeDefined();
    expect(juego.partidas.length).toEqual(0);
  });

  it("Los usuarios tienen un mazo", function() {
    
    expect(usr1.mazo).toBeDefined();
    expect(usr1.mazo.length).toEqual(0);
    expect(usr2.mazo).toBeDefined();
    expect(usr2.mazo.length).toEqual(0);
  });

  it("Los usuarios tiene una mano vacia inicialmente", function() {
    
    expect(usr1.mano).toBeDefined();
    expect(usr1.mano.length).toEqual(0);
    expect(usr2.mano).toBeDefined();
    expect(usr2.mano.length).toEqual(0);  
  })

  it("agregar pepe el usuario al juego", function(){
    juego.agregarUsuario(usr1);
    expect(juego.usuarios.length).toEqual(1);
    expect(juego.usuarios[0].nombre).toEqual("pepe");
    expect(usr1.mazo.length).toEqual(30);
  });

  it("Agrego pepe y juan al juego", function() {
    
    juego.agregarUsuario(usr1);
    juego.agregarUsuario(usr2);
    expect(juego.usuarios.length).toEqual(2);
    expect(juego.usuarios[0].nombre).toEqual("pepe");
    expect(usr1.mazo.length).toEqual(30);
    expect(juego.usuarios[1].nombre).toEqual("juan");
    expect(usr2.mazo.length).toEqual(30);  
  })

  it("Pepe crea una partida, juan la elige y se les asigna las zonas correspondientes", function() {
    
    juego.agregarUsuario(usr1);
    juego.agregarUsuario(usr2);
    usr1.crearPartida("prueba");
    usr2.eligePartida("prueba");

    expect(juego.usuarios[0].partida.nombre).toEqual("prueba");
    expect(usr1.partida.nombre).toEqual("prueba");
    expect(juego.usuarios[1].partida.nombre).toEqual("prueba");
    expect(juego.usuarios[0].zona.nombre).toEqual("arriba");
    expect(juego.usuarios[1].zona.nombre).toEqual("abajo");
    expect(usr1.partida.usuariosPartida.length).toEqual(2);

    if(usr1.turno){
      expect(usr2.turno).toBe(false);
    }
    else{
      expect(usr2.turno).toBe(true);
    }
  })

it("Comprobar que la funcion pasarTurno funciona", function() {
    juego.agregarUsuario(usr1);
    juego.agregarUsuario(usr2);
    usr1.crearPartida("prueba");
    usr2.eligePartida("prueba");

    usr1.turno=true;
    usr2.turno=false;
    usr1.pasarTurno();
    expect(usr1.turno).toBe(false);
    expect(usr2.turno).toBe(true);
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
