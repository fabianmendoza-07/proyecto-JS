let contraseña="1234";
let ingreso=true;

for (let index = 2; index >= 0; index--) {
   let ingresoPIN = prompt("Ingresa tu Constraseña");
   if(ingresoPIN === contraseña) {
    alert("Bienvenid@");
    ingreso=true;
    break;
   }else {
    alert("Error");
   }
}
   
if(ingreso){
//alert("menu")

let saldo=1000000;
let opcion = prompt(
    "elige una opción: \n1 - Saldo. \n2 - retirar. \n3 - deposito. \nPresiona X para finalizar.");

while (opcion != "x"){
    switch (opcion) {
        case "1":
            alert("tu saldo es $" + saldo)
            break;
        
        case "2":
        let retiro = parseInt(prompt("ingresa el monto a retirar"));    
        if (retiro <= saldo){
            saldo = saldo - retiro;
            alert("retiro exitoso. Tu saldo es $" + saldo);
        }
        break;

        case "3":
            let deposito= parseInt(prompt("ingresa monto a depositar"));
        saldo = saldo + deposito;
    alert("deposito exitoso. tu nuevo saldo es $" + saldo)
    break;

        default:
            alert("opcion no valida")
            break;
    }
}

alert("gracias por usar nuestros servicios");
} else {
    alert("por seguridad tu tarjeta ha sido bloqueada. comunicate al 01800223468")
}
