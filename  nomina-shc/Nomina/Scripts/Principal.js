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
        Emp.FechaNacimiento = $("#txtFechaNac").val();
        Emp.LugarNacimiento = $("#txtLugNac").val();
        Emp.Direccion = $("#txtDireccion").val();
        Emp.Telefono = $("#txtTelefono").val();
        Emp.Celular = $("#txtCelular").val();
        Emp.GrupoSanguineo = $("#txtGrupoSanguineo").val();
        Emp.Profesion = $("#txtProfesion").val();
        Emp.Cargos_idCargos = $("#txtCargo").val();
       
            $.ajax({
                type: "POST",
                url: "http://localhost:56431/api/empleado",
                data: JSON.stringify(Emp),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: true,
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
            url: "http://localhost:56431/api/empleado",
            contentType: "application/json; charset=utf-8",
            dataType: "jsonp",
            async: true,
            success: function (result) {
                alert("Funciona  " + result.ApellidoP);
            },
            error: function (result) {
                alert(JSON.stringify(result));
                alert("Error" + result);
            },
        });
    });
});