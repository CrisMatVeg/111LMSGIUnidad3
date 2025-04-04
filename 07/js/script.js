document.getElementById("agregarFinal").addEventListener("click", function(){
    // Crear un nuevo párrafo
    let parrafo = document.createElement("p");
   
    //añadir texto al párrafo
    parrafo.innerText = document.getElementById("texto").value;
  
    //añadir el párrafo al contenedor
    document.getElementById("contenedor").append(parrafo);

    //agregar el color de texto del nuevo parrafo sea rojo
    parrafo.style.color = "red";
});
//agregar párrafo al principio
document.getElementById("agregarPpio").addEventListener("click", function(){
    // Crear un nuevo párrafo
    let parrafo = document.createElement("p");
   
    //añadir texto al párrafo
    parrafo.innerText = document.getElementById("texto").value;
   
    //añadir el párrafo al contenedor .prepend(parrafo)
    document.getElementById("contenedor").prepend(parrafo);
   
    //agregar estilos al párrafo texto azul
    parrafo.style.color = "blue";
   
});
//agregar párrafo en una posición concreta
document.getElementById("agregarPosicion").addEventListener("click", function(){
    // Crear un nuevo párrafo
    let parrafo = document.createElement("p");
  
    //añadir texto al párrafo
    parrafo.innerText = document.getElementById("texto").value;
  
    //añadir el párrafo al contenedor insertBefore
    let contenedor = document.getElementById("contenedor");
    let referencia = contenedor.children[1]; // segunda posición
    contenedor.insertBefore(parrafo, referencia);
  
    //agregar estilos color del texto verde
    parrafo.style.color = "green";
    
});
//eliminar el primer párrafo
document.getElementById("eliminar").addEventListener("click", function(){
    //eliminar el primer párrafo
    let contenedor = document.getElementById("contenedor");
    let primerParrafo = contenedor.firstElementChild; // primer párrafo
    contenedor.removeChild(primerParrafo); // eliminar el primer párrafo
   
});
document.getElementById("eliminarTodos").addEventListener("click", function(){
    //eliminar todos los párrafos
    let contenedor = document.getElementById("contenedor");
    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild); // eliminar todos los párrafos
    }
});