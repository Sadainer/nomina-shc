$(document).ready(function () {
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#blah').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#imgInp").change(function () {
        readURL(this);
    });
    $("#txtCedula").focusout(function () {
        Invitado = $("#txtCedula").val();

        $.ajax({
            type: "GET",
            url: "http://localhost/NominaAPI/api/empleado/" + Invitado,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (Inv) {
                $("#GrCedula").removeClass("has-success").addClass("has-warning")
                alert("Cédula ya registrada");
            },
            error: function (result) {
                $("#GrCedula").removeClass("has-warning").addClass("has-success")
            }
        });
    });
    $('.fecha').datetimepicker({
        language: "es",
        pickTime: false
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
    $("#BtnCancelar").click(function () {
       

        $.ajax({
            type: "GET",
            url: "http://localhost/NominaAPI/api/empleado",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: true,
            success: function (result) {
                alert("Funciona  " + JSON.stringify(result));
            },
            error: function (result) {
                alert(JSON.stringify(result));
                alert("Error" + result);
            },
        });
    });
});