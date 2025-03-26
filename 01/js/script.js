var titulo=document.getElementById("titulo")
titulo.innerText="DOM Modificado"
var parrafos = document.getElementsByClassName("parrafo")
parrafos.length
parrafos[0].innerText="Parrafo 1 modificado"
parrafos[1].innerHTML="<b>Parrafo 2</b> modificado"
parrafos[2].innerText="Parrafo 3 modificado"
//parrafos[0].outerHTML="<div>Parrafo 11 modificado</div>"
document.getElementById("cuerpo").style.background="#f4f4f4"
document.getElementById("cuerpo").style.textAlign="center"
titulo.style.accentColor="#333"
titulo.style.marginBottom="15px"
titulo.style.textTransform="uppercase"
titulo.style.fontWeight="bold"

parrafos[0].style.background="#ffe6e6"
parrafos[0].style.color="#e74c3c"
parrafos[0].style.borderColor="#c0392b"

parrafos[1].style.background="#eaffea"
parrafos[1].style.color="#2ecc71"
parrafos[1].style.borderColor="#27ea60"

parrafos[2].style.background="#e6f2ff"
parrafos[2].style.color="#3498db"
parrafos[2].style.borderColor="#2980b9"

for(i=0;i<=parrafos.length;i++){
    parrafos[i].style.padding="10px"
    parrafos[i].style.fontSize="18px"
    parrafos[i].style.borderLeftWidth="5px"
    parrafos[i].style.borderLeftStyle="solid"
    parrafos[i].style.borderRadius="5px"
    parrafos[i].style.lineHeight="1.6"
}





