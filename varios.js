var arr = [2,24,20,8];
var total = 0;

for (var i = 0; i < arr.length;  i++) {
	// 0,1,2,3
	total += arr[i];
	//sumar todo el arreglo
}
/*=============================================================*/
/*=============================================================*/
var arr2 = [1,'javaScript',10,'curso']
var i = 0;
var cantidadDeElementos = arr2.length;

while(i < cantidadDeElementos){
	console.log(arr2[i]);
	i++;
}
/*=============================================================*/
/*=============================================================*/
function Suma(){

	var num1 = 20;
	var num2 = 30;
	var total = num1+num2;
	return total
}
console.log("la suma es",Suma());

/*=============================================================*/
/*=============================================================*/

function SumaPasandoValores(num1, num2){

	var total2 = num1+num2;
	return total2
}
console.log("la suma pasando valores es",SumaPasandoValores(20,70));
/*=============================================================*/
/*=============================================================*/

function efectHover(){
	alert("se puso el mouse en el boton EJECUTAR");
}
/*=============================================================*/
/*=============================================================*/

function click2(){
	alert("Usuario hizo click");
}
/*=============================================================*/
/*=============================================================*/

var el = document.getElementById('info');

el.addEventListener('click', function(){
	alert("el usuario le dio click al div 'HOLA MUNDO'");
});
/*=============================================================*/
/*=============================================================*/

var a = document.querySelector('h1');
console.log(a)

/*=============================================================*/
/*=============================================================*/
var b = document.querySelectorAll('div');

for (var i = 0; i < b.length; i++ ) {
	console.log(b[i].textContent);
}

/*=============================================================*/
/*=============================================================*/
var c = document.getElementsByClassName('app-class');

for (var i = 0; i < b.length; i++ ) {
	console.log(c[i].textContent);
}

$("input[name='textotest']").change(function() {

	alert("holi");
});

$("select[name='tipo_persona']").change(function() {
	alert("holi");
});
/*=============================================================*/
/*=============================================================*/

$(".btnPagar").show();
$(".formPayu").hide();
$(".alert").remove();
$(".formPayu input[name='Submit']").attr("type", "button");
var dire1 = $('.dire1').val();
var distrito = $('select[name="seleccionarPais"] option:selected').text();
$(".formPagarTrans input[name='refer1']").attr("value", refer1);
$(".sumaCesta").html("0");
$("#tipo_libro").val("");
$("#selectall").prop("checked", true);
$("#selectall").prop("checked", false);
$("input[name='tipo_radio']").prop("checked", false);
$('#cuadroAlerta').removeClass("alert-danger").addClass("alert-primary");
document.getElementById("freserva").value = "";
document.querySelector('input[name="tipo_radio"]:checked').checked = false;
$("#divTipoDocJuri").show(1000);
$("#divTipoDocJuri").show("fast");
$("#divTipoDoc").hide(1000);
$("#divTipoDoc").hide("fast");
document.getElementById("spanText").innerHTML = "DOCUMENTO DE IDENTIDAD DEL REPRESENTANTE LEGAL";
$("#checkRequi2").attr("required","required");
$("#checkRequi").removeAttr("required");
$("select[name='tipo_acom']").attr({disabled: 'disabled'});
document.getElementById("tipo_acom").style.background = "#EBEBE4";
$("#RucApi").val(datos[0]);

////////////OBTENER VALOR DE CUALQUIER ATRIBUTO QUE SE LE HALLA
////////////PUESTO A UN SELECT OPTION/////////////////////////////
var rango = $('#selConta>option:selected').attr("idRango");
/*=============================================================*/
/*=============================================================*/
/*=============================================================*/
/*===================LIMPIAR INPUT DROPIFY========================*/
var drEvent = $('#foto_vig_poder').dropify();
                    drEvent = drEvent.data('dropify');
                    drEvent.resetPreview();
                    drEvent.clearElement();

////////////CONTAR DIV POR CLASE/////////////////////
var divs = document.getElementsByClassName("hola").length;
console.log("Hay " + divs + " elementos");

////////////CERRAR MODAL DE BOTSTRAP 3/////////////////////
$('#exampleModal').modal('hide');

////////////OBTENER VALOR DE INPUT CHECKED (TRUE OR FALSE)/////////////////////
if( $('.micheckbox').prop('checked') ) {
    alert('Seleccionado');
}

$(document).ready(function()
		{
		$("#boton").click(function () {	 
			if( $("#formulario input[name='edad']:radio").is(':checked')) {  
				alert("Bien!!!, la edad seleccionada es: " + $('input:radio[name=edad]:checked').val());
				$("#formulario").submit();  
				} else{  
					alert("Selecciona la edad por favor!!!");  
					}  
		});
	 });

////////////OBTENER EL VALUE DE UN GRUPO DE INPUT RADIO BUTTON/////////////////////
$('input:radio[name=selectModo]:checked').val()
////////////OBTENER SI EL GRUPO DE INPUT RADIO, VIENE SELECCIONADO/////////////////////
$("input[name='selectModo']:radio").is(':checked');
////////////SELECCIONAR EL PRIMER SELECT OR JJ/////////////////////
$('#selectDistFirmaVen').prop('selectedIndex',0);

////////////REGRESAR A LA PAGINA ANTERIOR/////////////////////
'<a href="javascript:history.back()" class="text-muted">'
////////////ABRIR EN UNA VENTANA NUEVA FLOTANTE/////////////////////
'onclick="window.open(this.href, this.target, "width=300,height=400"); return false;"';
/*=============================================
VALIDACIÓN FORMULARIO CONTACTENOS
=============================================*/
function validarContactenos() {
    //alert("validacion");
    var nombre = $("#nombreContactenos").val();
    var email = $("#emailContactenos").val();
    var mensaje = $("#mensajeContactenos").val();
    console.log(nombre,email,mensaje);
    /*=============================================
    VALIDACIÓN DEL NOMBRE
    =============================================*/
    if (nombre == "") {
        $("#nombreContactenos").before('<h6 class="alert alert-danger">Escriba por favor el nombre</h6>');
        return false;
    } else {
        var expresion = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;
        if (!expresion.test(nombre)) {
            $("#nombreContactenos").before('<h6 class="alert alert-danger">Escriba por favor sólo letras sin caracteres especiales</h6>');
            return false;
        }
    }
    /*=============================================
    VALIDACIÓN DEL EMAIL
    =============================================*/
    if (email == "") {
        $("#emailContactenos").before('<h6 class="alert alert-danger">Escriba por favor el email</h6>');
        return false;
    } else {
        var expresion = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        if (!expresion.test(email)) {
            $("#emailContactenos").before('<h6 class="alert alert-danger">Escriba por favor correctamente el correo electrónico</h6>');
            return false;
        }
    }
    /*=============================================
    VALIDACIÓN DEL MENSAJE
    =============================================*/
    if (mensaje == "") {
        $("#mensajeContactenos").before('<h6 class="alert alert-danger">Escriba por favor un mensaje</h6>');
        return false;
    } else {
        var expresion = /^[,\\.\\a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ ]*$/;
        if (!expresion.test(mensaje)) {
            $("#mensajeContactenos").before('<h6 class="alert alert-danger">Escriba el mensaje sin caracteres especiales</h6>');
            return false;
        }
    }

    return true;
}
/*=============================================
			AGREGAR TEMPORIZADOR
=============================================*/
swal({
	title: 'Login Success',
	text: 'Redirecting...',
	icon: 'success',
	timer: 2000,
	buttons: false,
})
.then(() => {
	window.location=rutaOculta;

})

/*=============================================
           VALDIACION ESPACIOS EN BLANCO
=============================================*/
function verificar() {
  if ( $("#nombre-input").val().trim().length > 0 ) {
    alert("El campo contiene un string válido que no son espacios");
  }
  else {
    alert("El campo contiene espacios y está vacío");
  }
}
/*=============================================
            OBTENER FILE DE UN INPUT
=============================================*/
var pdf = $("#uploadPDF1").prop("files")[0];
/*==================================================================
                ATRIBUTOS DEL DOM A ARRAY (creando array)
====================================================================*/
var lista = document.getElementsByClassName('app-class');
Array.from(lista).forEach(function(valor){
	console.log(valor.textContent);
});
/*==================================================================
        Array.isArray(nameArray) (DEVUELVE TFALSE SI NO ES ARRAY)
		MAP (PERMITE MODIFICAR EL CONTENIDO DEL ARRAY)
        FILTER (filtra de acuerdo a la condicion y devuelve el resto)
        FIND (busca y retorno solo un elemento)
        CONCAT (CONCATENA ARRAYS)
        kEYS (DEVUELVE EL INDEX DEL ARRAY)
        JOIN (CONVIERTE A STRING LOS VALORES DE UN ARRAY) 
        SPLITE
        FINDINDEX (DEVUELVE EL INDICE DEL ELEMENTO BUSCADO)
        LASTINDEXIF (BUSCA DE DERECHA A IZQUIERDA)
        SOME (SI ALGUN ELEMENTO CUMPLE LA CONDICION, DEVUELVE TRUE OR FALSE)
        EVERY (APLICA UNA CONDICION SOBRE TODO LOS OBJETOS Y DEVUELVE UN BOOLEANO)
        REDUCE (USA UN ACUMULADOR)
====================================================================*/
const data = [
                {
                    "id": "4a68ddcd-f856-41c9-96b1-51573caefa4f",
                    "titulo": "Paquete seminario 2021",
                    "precio_nosuscriptor": "150.00",
                    "tipo": 0
                },
                {
                    "id": "4a68ddcd-f856-41c9-96b1-51573caefa4f",
                    "titulo": "Paquete seminario 2019",
                    "precio_nosuscriptor": "150.00",
                    "tipo": 1
                },
                {
                    "id": "4a68ddcd-f856-41c9-96b1-51573caefa4f",
                    "titulo": "Paquete taller 2021",
                    "precio_nosuscriptor": "150.00",
                    "tipo": 1
                }
            ],
const onlyOne = data.find(element =>{
    return element.titulo == "2021";//devuelve el primer elemento encontrado
})
const onlyOne = data.findIndex(element =>{
    return element.titulo == "2021";//devuelve el indice
})
const globalBusqueda = data.filter(element =>{
    //return element.titulo == "2021";//busqueda restringida
    return (/2021/g).test(element.titulo);//busqueda mas global
})
//SE AGREGA UN NUEVO PRECIO, NO MODIFICANDO EL OBJETO PRINCIPAL(data)
const newData = data.map(element =>{
    let newPrice = element.precio_suscriptor + element.precio_suscriptor*0.18;
    return {...element, precio_suscriptor: newPrice}
})
const everyElement = data.every(element =>{
    return element.precio >= 50;//DEVUELVE TRUE OR FALSE
})
const oneElement = data.some(element =>{
    return element.precio >= 50;//ANALIZA SOLO UN ELEMENTO
})
const total = data.reduce((total,element) =>{
    return total+=parseInt(element.precio_nosuscriptor);
},0)

var arr1 = [1,2,3,4]
var arr2 = [4,5,6,7]
const total = arr1.reduce((acum,item) =>{//[1,2,3,4]
    return Math.max(acum,item);//retorna numero mayor
})
const total = arr1.reduce((acum,item) =>{//[1,2,3,4]
    return Math.min(acum,item);//retoran numero menor
})
Array.isArray(arr1)//DEVUELVE TRUE, PORQUE EL ARR1 ES UN ARRAY

var ex1 = arr1.concat(arr2)//UNE DOS ARRAYS [0, 1, 2, 3, 4, 5, 6, 7]
var ex2 = ex1.concat(2)//TRAE A PARTIR DEL TERCER INDICE
var ex3 = ex1.concat(2,5)//TRAE A PARTIR DEL TERCER INDICE, HASTA ANTES DEL QUINTO INDICE 2<X<5
var ex4 = ex1.concat(-1)//TRAE ULTIMO INDICE
var ex5 = ex1.concat(-3)//TRAE ULTIMOS TRES INDICES
var ex6 = arr1.join()// por defecto es una coma 0,1,2,3
var ex6 = arr1.join('/')// 0/1/2/3
var ex7 = [...arr1.keys()];// devuelve los indices de un array [0, 1, 2, 3]
var ex8 = arr1.reverse();// reordena un array [3, 2, 1, 0]
arr.sort((a,b)=>{
    return b-a; //ORDENA DE MENOR A MAYOR Y VICEVERSA
})





