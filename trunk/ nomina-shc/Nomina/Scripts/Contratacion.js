$(document).ready(function () {
    var states = [];
    var Invitado;
    $.ajax({
            type: "GET",
            url: "http://localhost/NominaAPI/api/empleado",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
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
            url: "http://localhost/NominaAPI/api/empleado/" + Invitado,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (Inv) {
                $("#GrCedula").removeClass("has-warning").addClass("has-success")
                $("#txtNombre").val(Inv.Nombre);
                $("#txtApellidoP").val(Inv.ApellidoP);
                $("#txtApellidoS").val(Inv.ApellidoS);
            },
            error: function (result) {
                $("#GrCedula").removeClass("has-success").addClass("has-warning")
                $("#txtNombre").val("");
                $("#txtApellidoP").val("");
                $("#txtApellidoS").val("");
                
            }
        });
    });
    $("#BtnGuardar").click(function () {
        Emp = {};
        Emp.idEmpleado = $("#txtCedula").val();
        Emp.Nombre = $("#txtNombre").val();
        Emp.ApellidoP = $("#txtApellidoP").val();
        Emp.ApellidoS = $("#txtApellidoS").val();
        Emp.Sexo = $("#txtSexo").val();
        Emp.EstadoCivil = $("#txtEstadoCivil").val();
        Emp.FechaNacimiento = Date.parse($("#txtFechaNac").val());
        Emp.LugarNacimiento = $("#txtLugNac").val();
        Emp.Direccion = $("#txtDireccion").val();
        Emp.Telefono = $("#txtTelefono").val();
        Emp.Celular = $("#txtCelular").val();
        Emp.GrupoSanguineo = $("#txtGrupoSanguineo").val();
        Emp.Profesion = $("#txtProfesion").val();
        Emp.Cargos_idCargos = $("#txtCargo").val();

        alert(JSON.stringify(Emp));
        $.ajax({
            type: "POST",
            url: "http://localhost/NominaAPI/api/empleado",
            data: JSON.stringify(Emp),
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
});