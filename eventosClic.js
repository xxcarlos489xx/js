/* Por medio de este evento le decimos que jQuery ejecute una acción cuando
 el usuario haga click con el botón del mouse. Por ejemplo queremos ocultar
  el contenido que esta dentro de <div id=”contenido”></div> cuando se realice 
  un click con el mouse */
$("#contenido").click(function(){
    $(this).hide();
});

/* Por medio de este evento se ejecuta una función cuando el usuario haya hecho 
2 veces click con el botón del mouse. Por ejemplo podemos mostrar el contenido 
oculto con el método .show() este contenido se encuentra dentro de <div id=”contenido”>
</div> al hacer doble click con el mouse, le pasamos el método show para mostrar el contenido.
 */
$("#contenido").dblclick(function(){
    $(this).show();
})

/* Cuando colocas el puntero del mouse en dicho elemento se activa una acción que hayas especificado. 
Por ejemplo se lanzará un texto cuando el usuario coloque el puntero del mouse encima del contenido
 que hay en un parrafo p */
$("p").mouseenter(function(){
    alert("Hola soy un texto!");
})

/* Este evento ejecuta un acción cuando el usuario retira el puntero del mouse de un lugar especifico. 
Por ejemplo le mostraremos un texto al usuario, cuando este retire el mouse de <div id=”contenido”></div> */
$("#contenido").mouseleave(function(){
    alert("Te saliste del lugar especifico !");
});

/* Este evento ejecuta una acción cada ves que mantienes presionado el botón izquierdo | medio | derecho
 del mouse sobre un elemento. Por ejemplo cuando un encabezado h1 es presionado por el usuario 
 se le muestra un texto especifico */
$("h1").mousedown(function(){
    alert("Soy un encabezado H1!");
});

/* A través de este evento, si el usuario deja de presionar el botón izquierdo | medio | derecho del mouse 
se ejecutará una determinada acción. Por ejemplo si ahora el usuario deja de presionar el botón del mouse
 sobre el encabezado h1 se le muestra un texto especifico */

$("h1").mouseup(function(){
    alert("Has dejado de presionar el Mouse !");
});

/* Con este evento se ejecuta una acción cada ves que el usuario coloca el puntero del mouse encima de un 
contenido o elemento. Por ejemplo cuando el usuario coloque el mouse encima de <div id=”contenido”></div> se 
le lanza un mensaje especifico */
$("#contenido").hover(function(){
    alert("Ingresaste al contenido!");
}

/* Este evento permite ejecutar una acción cuando el usuario coloca el puntero del mouse en un campo de un formulario. 
Por ejemplo cuando el usuario hace click en un campo del formulario pintamos de un color de fondo dicho campo del formulario */
$("input").focus(function(){
    $(this).css("background-color", "#444444");
});

/* Este evento ejecuta una acción cuando el usuario cambia de un campo a otro en un formulario. Por ejemplo cuando el usuario
 decide abandonar un campo que se pinto de color gris al posarse sobre el y decide irse a otro campo, el campo abandonado 
 se pintara de color blanco */
$("input").blur(function(){
    $(this).css("background-color", "#ffffff");
});

/* Con este evento se ejecuta una acción a todos los elementos que correspondan al indicado en el selector. 
Por ejemplo cuando el usuario haga click sobre un elemento de una lista ordenada li se van a ocultar 
todos los elementos de la lista li sin discriminar alguno de estos, salvo que realices una seleccion
 más especifica, por ejemplo $(“li .elemento”) */
$("li").on("click", function(){
    $(this).hide();
});

/* Podemos aplicar acciones para múltiples eventos para <div id=”contenido”></div> 
cuando coloca el mouse, cuando deja el mouse y cuando hace click */
$("#contenido").on({
    mouseenter: function(){
        $(this).css("background-color", "#444444");
    }, 
    mouseleave: function(){
        $(this).css("background-color", "#ffffff");
    }, 
    click: function(){
        $(this).css("background-color", "orange");
    } 
});