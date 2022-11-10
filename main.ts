// clase abstratas 

abstract class Auto{
    protected velocidadActual : number;
    protected traccionDoble : boolean;
    protected automatico : boolean;
    private estaPrendido : boolean;

    public constructor(){
        this.velocidadActual = 0;
        this.estaPrendido = false;
    }

    abstract acelerar () : void;
    abstract traccionar (): void;
    abstract avanzarAutomatico (): void;

    public prender (){
        this.estaPrendido = true;
    }

    public apagar (){
        this.estaPrendido = false;
    }
}

class AutoCiudad extends Auto{
    public acelerar(): void {
        this.velocidadActual +=10;
    }

    public traccionar(): void {
        this.traccionDoble = false;
    }

    public avanzarAutomatico(): void {
        this.automatico = false;
    }
}

class AutoDeportivo extends Auto{
    public acelerar(): void {
        this.velocidadActual +=100;
    }

    public traccionar(): void {
        this.traccionDoble = false;
}
    public avanzarAutomatico(): void {
        this.automatico = true;
    }
}

class Camioneta extends Auto{
    public acelerar(): void {
        this.velocidadActual += 25;
    }

    public traccionar(): void {
        this.traccionDoble = true;
}
    public avanzarAutomatico(): void {
        this.automatico = true;
    }
}



let nuevoAutoCiudad : AutoCiudad = new AutoCiudad; 
console.log(nuevoAutoCiudad);
nuevoAutoCiudad.prender();
nuevoAutoCiudad.acelerar();
nuevoAutoCiudad.traccionar();
nuevoAutoCiudad.avanzarAutomatico();
console.log(nuevoAutoCiudad);

let nuevoAutoDeportivo : AutoDeportivo = new AutoDeportivo;
console.log(nuevoAutoDeportivo);
nuevoAutoDeportivo.prender();
nuevoAutoDeportivo.acelerar();
nuevoAutoDeportivo.traccionar();
nuevoAutoDeportivo.avanzarAutomatico();
console.log(nuevoAutoDeportivo);

let nuevaCamioneta : Camioneta = new Camioneta;
console.log(nuevaCamioneta);
nuevaCamioneta.prender();
nuevaCamioneta.acelerar();
nuevaCamioneta.traccionar();
nuevaCamioneta.avanzarAutomatico();
console.log(nuevaCamioneta);
