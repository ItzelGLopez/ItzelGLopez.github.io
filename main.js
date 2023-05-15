//let -> es para declarar la variable
let app = document.getElementById('typewriter');
// document.getElementById('typewriter'); ESTA CONECTANDOSE CON EL HTML  
//.getElementById (ID)---- AGARRANDO EL ELEMENTO CON EL ID 

let typewriter = new Typewriter(app, {
  loop: true,//SE REPITE CADA QUE TERMINA EL CICLO
  delay: 75, // LA ESPERA DE TIEMPO
});
 // CADA PUNTO QUIERE DECIR QUE SE LE AGREGA UN METODO
 // METODOS CONCATENADOS EN typewriter
typewriter

  .pauseFor(2500)
  .typeString('<span style="color:#A81D87">  Estudiante de Ingeniería Telemática y Desarrollo de Sitios Web.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
