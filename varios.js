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

/*=============================================================*/
/*=============================================================*/

var lista = document.getElementsByClassName('app-class');

Array.from(lista).forEach(function($valor){
	console.log($valor.textContent);
});
/*=============================================================*/
/*=============================================================*/


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
