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
        Emp.LugarNacimiento = $("#txtLugarNac").val();
        Emp.Direccion = $("#txtDireccion").val();
        Emp.Telefono = $("#txtTelefono").val();
        Emp.Celular = $("#txtCelular").val();
        Emp.GrupoSanguineo = $("#txtGrupoSanguineo").val();
        Emp.Profesion = $("#txtProfesion").val();
        Emp.Cargos_idCargos = $("#txtCargo").val();
        //alert(JSON.stringify(parametrosJSON));
        alert(JSON.stringify(Emp));
    });
});