let counter1=0; 

document.addEventListener("DOMContentLoaded", function(){
    let boton1=document.getElementById("boton1"); 
    boton1.addEventListener("click", contadorLike1);
}); 

function contadorLike1 () {
    counter1+=1; 
    let contador1=document.querySelector("#contador1");
    contador1.innerText= "Likes:" + counter1; 
};

let counter2= 0

document.addEventListener("DOMContentLoaded", function(){
    letboton2=document.getElementById("boton2");
    boton2.addEventListener("click", ContadorLike2);
});

function ContadorLike2 () {
    counter2+=1;
    let contador2=document.querySelector("#contador2");
    contador2.innerText= "Likes:" + counter2;
}

let counter3= 0;

document=addEventListener("DOMContentLoaded", function (){
    let boton3=document.getElementById("boton3");
    boton3.addEventListener("click", contadorLike3); 
});

function contadorLike3 () {
    counter3+=1
    let contador3= document.querySelector("#contador3");
    contador3.innerText= "Likes:" + counter3;
}