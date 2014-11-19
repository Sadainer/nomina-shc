$(document).ready(function () { 
    var ruta = "http://localhost/NominaAPI/api/";
    var states = [];
    var Invitado;
    $.ajax({
        type: "GET",
        url: ruta + "dpto/12345",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: true,
        success: function (result) {
            //alert(JSON.stringify(result));
            $("#DropDownDpto").byaCombo({ DataSource: result, Value: "idDepartamento", Display: "Nombre", placeHolder: "Seleccione Dpto" });
        },
        error: function (result) {
            alert("Error" + (JSON.stringify(result)));
        }
    });

    $.ajax({
            type: "GET",
            url: ruta + "empleado",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: true,
            success: function (result) {

                $.each(result, function (key, value) {
                    //states.push(value.idEmpleado + "-" + value.Nombre + "-" + value.ApellidoP + "-" + value.ApellidoS);
                    states.push(value.idEmpleado);
                });
            
            },
            error: function (result) {
                alert("Error" + (JSON.stringify(result)));
            }
    });
    $('#DropDownDpto').change(function () {
        $.ajax({
            type: "GET",
            url: ruta + "cargos/" + $("#DropDownDpto").val(),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: true,
            success: function (result) {
                $("#DropDownCargo").byaCombo({ DataSource: result, Value: "idCargos", Display: "Nombre", placeHolder: "Seleccione Cargo" });
           
            },
            error: function (result) {
                $("#DropDownCargo").empty();
            }
        });
    });
    var substringMatcher = function (strs) {
        return function findMatches(q, cb) {
            var matches, substrRegex;
            matches = [];
            substrRegex = new RegExp(q, 'i');
            $.each(strs, function (i, str) {
                if (substrRegex.test(str)) {
                    matches.push({ value: str });
                }
            });

            cb(matches);
        };
    };
    $('.fecha').datetimepicker({
        language: "es",
        pickTime: false,
    });
    
    $('#txtCedula').typeahead({
        hint: true,
        highlight: true,
        minLength: 3
    },
    {
        name: 'states',
        displayKey: 'value',
        source: substringMatcher(states)
    });
    $("#btnAgregar").click(function () {
        Invitado = $("#txtCedula").val();
        $.ajax({
            type: "GET",
            url: ruta + "empleado/" + Invitado,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (Inv) {
                $("#GrCedula").removeClass("has-warning").addClass("has-success")
                $("#txtNombre").val(Inv.Nombre);
                $("#lblCedula").text(". Empleado registrado");
                $("#lblCedula").css({ color: 'green' });
                
                $("#txtApellidoP").val(Inv.ApellidoP);
                $("#txtApellidoS").val(Inv.ApellidoS);
            },
            error: function (result) {
                $("#GrCedula").removeClass("has-success").addClass("has-warning")
                $("#txtNombre").val("");
                $("#txtApellidoP").val("");
                $("#txtApellidoS").val("");
                $("#lblCedula").text(". Empleado no registrado");
                $("#lblCedula").css({ color: 'red' });
                
            }
        });
    });
    $("#BtnGuardar").click(function () {
        Vinc = {};
        Vinc.idEmpleado =$("#txtCedula").val();
        Vinc.FechaInicio =  moment($("#txtFechaVinculacion").val(), "DD-MM-YYYY");
        Vinc.FechaFinal =  moment($("#txtFechaTerminacion").val(), "DD-MM-YYYY");
        Vinc.TipoContrato = $("#ComTipContrato").val();
        Vinc.PeriodoPago = $("#ComPedPago").val();
        Vinc.NitARL = $("#DropDownARL").val();
        Vinc.NitCCF = $("#ComCajaCompensacion").val();
        Vinc.NitEPS = $("#DropDownEPS").val();
        Vinc.NoCuenta = $("#txtNumCuenta").val();
        Vinc.NitPension = $("#DropDownPension").val();
        Vinc.idCargos = $("#DropDownCargo").val();

        alert(JSON.stringify(Vinc));
        $.ajax({
            type: "POST",
            url: ruta + "vinculacion",
            data: JSON.stringify(Vinc),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (result) {
                alert(JSON.stringify(result));
                $(".form-control").val("");
            },
            error: function (result) {
                alert(JSON.stringify(result));
            },
        });
    });
    $("#BtnCancelar").click(function () {
        Emp = {};
        Emp.idEmpleado = $("#DropDownPension").val();
        Emp.Nombre = $("#DropDownEPS").val();
        alert(JSON.stringify(Emp));
        
    });
    
});