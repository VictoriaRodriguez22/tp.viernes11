// clase abstratas 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Auto = /** @class */ (function () {
    function Auto() {
        this.velocidadActual = 0;
        this.estaPrendido = false;
    }
    Auto.prototype.prender = function () {
        this.estaPrendido = true;
    };
    Auto.prototype.apagar = function () {
        this.estaPrendido = false;
    };
    return Auto;
}());
var AutoCiudad = /** @class */ (function (_super) {
    __extends(AutoCiudad, _super);
    function AutoCiudad() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AutoCiudad.prototype.acelerar = function () {
        this.velocidadActual += 10;
    };
    AutoCiudad.prototype.traccionar = function () {
        this.traccionDoble = false;
    };
    AutoCiudad.prototype.avanzarAutomatico = function () {
        this.automatico = false;
    };
    return AutoCiudad;
}(Auto));
var AutoDeportivo = /** @class */ (function (_super) {
    __extends(AutoDeportivo, _super);
    function AutoDeportivo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AutoDeportivo.prototype.acelerar = function () {
        this.velocidadActual += 100;
    };
    AutoDeportivo.prototype.traccionar = function () {
        this.traccionDoble = false;
    };
    AutoDeportivo.prototype.avanzarAutomatico = function () {
        this.automatico = true;
    };
    return AutoDeportivo;
}(Auto));
var Camioneta = /** @class */ (function (_super) {
    __extends(Camioneta, _super);
    function Camioneta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Camioneta.prototype.acelerar = function () {
        this.velocidadActual += 25;
    };
    Camioneta.prototype.traccionar = function () {
        this.traccionDoble = true;
    };
    Camioneta.prototype.avanzarAutomatico = function () {
        this.automatico = true;
    };
    return Camioneta;
}(Auto));
var nuevoAutoCiudad = new AutoCiudad;
console.log(nuevoAutoCiudad);
nuevoAutoCiudad.prender();
nuevoAutoCiudad.acelerar();
nuevoAutoCiudad.traccionar();
nuevoAutoCiudad.avanzarAutomatico();
console.log(nuevoAutoCiudad);
var nuevoAutoDeportivo = new AutoDeportivo;
console.log(nuevoAutoDeportivo);
nuevoAutoDeportivo.prender();
nuevoAutoDeportivo.acelerar();
nuevoAutoDeportivo.traccionar();
nuevoAutoDeportivo.avanzarAutomatico();
console.log(nuevoAutoDeportivo);
var nuevaCamioneta = new Camioneta;
console.log(nuevaCamioneta);
nuevaCamioneta.prender();
nuevaCamioneta.acelerar();
nuevaCamioneta.traccionar();
nuevaCamioneta.avanzarAutomatico();
console.log(nuevaCamioneta);
