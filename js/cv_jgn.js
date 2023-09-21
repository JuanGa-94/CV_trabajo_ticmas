
//*mostrar/ocultar formacion

let ver_datos = document.querySelectorAll('.items');

ver_datos.forEach(function (ver_datos) {
        ver_datos.addEventListener('click', () => {
            let height = 0;
            let menu = ver_datos.nextElementSibling;
            if (menu.clientHeight == "0") {
                height = menu.scrollHeight;
            }
            menu.style.height = height + "px";
        });

    });
;

//*estudios finalizados

let btn_finalizado = document.getElementById('finalizado');

let items_finalizado = document.querySelectorAll('.termino');

btn_finalizado.addEventListener('click',()=> {
    for (let index = 0; index < items_finalizado.length; index++) {
        items_finalizado[index].classList.toggle('termino_v')
    }
});


//*estudios en curso

let btn_cursando = document.getElementById('en_curso');

let items_cursando = document.querySelectorAll('.cursando');

btn_cursando.addEventListener('click',()=> {
    for (let index = 0; index < items_cursando.length; index++) {
        items_cursando[index].classList.toggle('cursando_v')
    }
});


//*boton arriba

window.onscroll = function(){
    console.log(document.documentElement.scrollTop);
    if(document.documentElement.scrollTop > 500){
        document.querySelector('.boton-a-contenedor')
        .classList.add('mostrar_boton')

    }else{
        document.querySelector('.boton-a-contenedor')
        .classList.remove('mostrar_boton');
    }
}

document.querySelector('.boton-a-contenedor').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })

}
);


