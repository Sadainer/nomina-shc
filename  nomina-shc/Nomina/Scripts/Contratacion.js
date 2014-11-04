$(document).ready(function () {
    var states = [];
    var Invi = {};
    $.ajax({
            type: "GET",
            url: "http://localhost/NominaAPI/api/empleado",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (result) {

                $.each(result, function (key, value) {
                    states.push(value.idEmpleado + "-" + value.Nombre + "-" + value.ApellidoP + "-" + value.ApellidoS);
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
        var Invitado = $("#txtCedula").val();
        var strs = Invitado.split("-")
        Invi.idEmpleado = strs[0];
        Invi.Nombre = strs[1];
        Invi.ApellidoP = strs[2];
        Invi.ApellidoS = strs[3];
        $("#txtCedula").val(Invi.idEmpleado);
        $("#txtNombre").val(Invi.Nombre);
        $("#txtApellidoP").val(Invi.ApellidoP);
        $("#txtApellidoS").val(Invi.ApellidoS);
    });
});