nombre_alumno_array = [];

function submit(){

        for(var i=1; i<=5; i++ ){
            console.log(i); 
            var nombre__a = document.getElementById("nombre_del_alumno-"+i).value;
            nombre_alumno_array.push(nombre__a);
        }               


        
        console.log(nombre_alumno_array);

        document.getElementById("ver nombres").innerHTML =nombre_alumno_array;
        document.getElementById("boton_enviar").style.display ="none";
        document.getElementById("boton_ordenar").style.display ="inline-block";
}

function sorting(){
    nombre_alumno_array.sort();
    console.log(nombre_alumno_array);
    document.getElementById("ver nombres").innerHTML =nombre_alumno_array;
}


4a 2b+2h 6a 12b                 
