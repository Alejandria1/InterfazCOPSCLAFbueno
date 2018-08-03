/*funcion para hacer el la fila clickable*/
jQuery(document).ready(function($) {
    $(".clickable-row").click(function() {
        window.location = $(this).data("href");
    });
});

/*para el seleccionar todos (checkbox)*/
function toggle(oInput) {
    var aInputs = document.getElementsByTagName('input');
    for (var i=0;i<aInputs.length;i++) {
        if (aInputs[i] != oInput) {
            aInputs[i].checked = oInput.checked;
        }
    }
}

/*funcion para radioboton pero todo en el nmismo html*/
$(document).ready(function() {
    $("input[name$='optionsRadios']").click(function() {
        var test = $(this).val();

        $("div.desc").hide();
        $("#opcion" + test).show();
    });
});

/* funciones para q carguen los html cuando seleccionas el radio botn*/

function load_nuevo() {
     document.getElementById("content").innerHTML=`<form>
       <div class="row">
         <div class="form-group col-md-5">
           <label for="Procedencia">Procedencia</label>
           <input type="text" class="form-control" id="Procedencia" >
         </div>
         <div class="form-group col-md-5">
           <label for="depositante">Depositante</label>
           <input type="text" class="form-control" id="depositante">
         </div>
       </div>
       <div class="row">
         <div class="form-group col-md-5">
           <label for="contacto">Contacto</label>
           <input type="text" class="form-control" id="contacto" >
         </div>
         <div class="form-group col-md-5">
           <label for="telefono">Telefono</label>
           <input type="text" class="form-control" id="telefono">
         </div>
       </div>
       <div class="row">
         <div class="form-group col-md-5">
           <label for="naturaleza">Naturaleza del ingreso</label>
           <input type="text" class="form-control" id="naturaleza" >
         </div>
         <div class="form-group col-md-5">
           <label for="correo">Correo</label>
           <input type="email" class="form-control" id="correo">
         </div>
       </div>

       <button class="btn btn-danger btn-lg">Regresar</button>
       <button type="submit" class="btn btn-primary btn-lg">Continuar</button>
     </form>`;
}
function load_default() {
     document.getElementById("content").innerHTML=`<div class="container">
       <p><b>Ingreso default COPS-CLAF</b></p>
       <p></p>
     </div>  <!--busca-->

     <div class="container"> <!--tabla-->
       <table class="table table-striped">
         <thead>
           <tr>
             <th>#</th>
             <th>Procedencia</th>
             <th>Acción</th>
           </tr>
         </thead>
         <tbody>
           <tr>
             <td>1</td>
             <td>Ingreso COPS-CLAF</td>
             <td>Seleccionar</td>
           </tr>
           <tr>
             <td>2</td>
             <td>Ingreso COPS-CLAF</td>
             <td>Seleccionar</td>
           </tr>
           <tr>
             <td>3</td>
             <td>Ingreso COPS-CLAF</td>
             <td>Seleccionar</td>
           </tr>
         </tbody>
       </table>
     </div> <!--fin tabla-->
     <div class="container">
       <div class="row">
         <div class="col-md-8"></div>
         <div class="col-md-4">
           <button type="button" class="btn btn-danger btn-lg" >Regresar</button>
           <button type="button" class="btn btn-primary btn-lg">Continuar</button>
         </div>
       </div>
     </div>`;
}


function load_existente() {
     document.getElementById("content").innerHTML=`<div class="container">
       <p><b>Busca procedencia</b></p>
       <p></p>
       <form class="navbar-left">
         <div class="form-group">
           <input type="text" class="form-control" placeholder="Buscar donativo">
         </div>
       </form>
     </div>  <!--busca-->

     <div class="container"> <!--tabla-->
       <table class="table table-striped">
         <thead>
           <tr>
             <th>#</th>
             <th>Procedencia</th>
             <th>Acción</th>
           </tr>
         </thead>
         <tbody>
           <tr>
             <td>1</td>
             <td>DONATIVO LIC. ALFONSO ROSAS PRIEGO</td>
             <td><a href="resumenIngreso1.html">Seleccionar</a></td>
           </tr>
           <tr>
             <td>2</td>
             <td>DONATIVO SR. SALVADOR BARBABOSA</td>
             <td><a href="resumenIngreso.html"> Seleccionar</a></td>
           </tr>
           <tr>
             <td>3</td>
             <td>DONATIVO EMBAJADA DE FRANCIA</td>
             <td><a href="resumenIngreso3.html">Seleccionar</a></td>
           </tr>
         </tbody>
       </table>
     </div> <!--fin tabla-->
     <div class="container">
       <div class="row">
         <div class="col-md-8"></div>
         <div class="col-md-4">
           <button type="button" class="btn btn-danger btn-lg" >Regresar</button>
           <button type="button" class="btn btn-primary btn-lg">Continuar</button>
         </div>
       </div>
     </div>`;
}



/* funciones para cargar los otros html pero lo carga en chiquito
function load_nuevo() {
     document.getElementById("content").innerHTML='<object type="text/html" data="nuevoIngreso.html" ></object>';
}
function load_existente() {
     document.getElementById("content").innerHTML='<object type="text/html" data="ingresoExistente.html" ></object>';
}
function load_default() {
     document.getElementById("content").innerHTML='<object type="text/html" data="default.html" ></object>';
}
*/


/* funciones para mandar distintos datos al modal, segun la fila q lo abra*/

function load_modal1() {
    var titulo1 = "FESTIVAL AEREO";
    document.getElementById("nombre").innerHTML = titulo1;
    cambio5("row1");
}

function load_modal2() {
    var titulo2 = "Nubes";
    document.getElementById("nombre").innerHTML = titulo2;
    element = "row2";
}

function load_modal3() {
  var titulo3 = "GENERAL MAXIMINO AVILA CAMACHO INAUGURA LA ESC. SEC. VENUSTIANO CARRANZA EN PUEBLA";
  document.getElementById("nombre").innerHTML = titulo3;
  element = "row3";
}
function load_modal4() {
  var titulo4 = "COLEGIO MILITAR";
  document.getElementById("nombre").innerHTML = titulo4;
  element = "row4";
}

function load_modal5() {
  var titulo5 = "RANCHO LA JOYA";
  document.getElementById("nombre").innerHTML = titulo5;
  element = "row5";
}   /* funciones para mandar distintos datos al modal, segun la fila q lo abra jsja*/

/*
function cambio5(element) {
  var element = document.getElementById("row5");
  element.classList.toggle("baja");
}*/
