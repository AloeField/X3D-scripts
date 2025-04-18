// JavaScript Document
var matiz = new Audio('sonidos/ataquerl.wav'); //audio de ataquerl Chiquito
var flag = false; //variable para saber si el cilindro es rojo o azul

function estado(val) {
    if(val == true)
        {
            if(flag == false)
            {
                matiz.play('sonidos/ataquerl.wav');     //audio de Chiquito, el problema es que la boca no se mueve una vez y en cualquier parte de la esfera produce sonido
                flag = true;
            } else
            {
                matiz.play('sonidos/willow1.wav');    
                flag = false;
            }
        }
}