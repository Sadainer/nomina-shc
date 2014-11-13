$.extend({
    getUrlVars: function () {
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    },
    getUrlVar: function (name) {
        return $.getUrlVars()[name];
    },
    getCookie: function (c_name) {
        var i, x, y, ARRcookies = document.cookie.split(";");
        for (i = 0; i < ARRcookies.length; i++) {
            x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
            y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
            x = x.replace(/^\s+|\s+$/g, "");
            if (x == c_name) {
                return unescape(y);
            }
        }
    },
    setCookie: function (c_name, value, exdays) {
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + exdays);
        var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
        document.cookie = c_name + "=" + c_value;
    }
});

jQuery.fn.extend({
    byaCombo: function (options) {
        
        placeHolder = options.placeHolder == null ? "Seleccione" : options.placeHolder;
        var IdCombo = $(this);
        IdCombo.children().remove().end();
        //alert($(this).id);
        //PlaceHolder Automatico
        IdCombo.get(0).options[IdCombo.get(0).options.length] = new Option(placeHolder, "");

        $.each(options.DataSource, function (index, item) {
            IdCombo.get(0).options[IdCombo.get(0).options.length] = new Option(item[options.Display], item[options.Value]);
        });
    }
});

jQuery.fn.extend({
    byaSetHabilitar: function (value) {

        if (value) {
            $(this).removeAttr('disabled');

        }
        else {
            $(this).attr('disabled', '-1');

        }
    }
});

jQuery.fn.extend({
    byaSetDecimal: function (valor) {
        $(this).val(valor);
        $(this).formatCurrency();
        $(this).css("text-align", "right");
    }
});

jQuery.fn.extend({
    byaGetDecimal: function () {
        return $(this).asNumber();
    }
});


jQuery.fn.extend({

    DetailsJSON: function (oJSON, DataFields, Titulo) {
        var aplicarFormato = function (valor, tipo) {
            if (tipo == "D") return formatoFechaDMY(valor);
            else if (tipo == "N") return formatNumerico(valor);
            else return valor;
        };

        var formatoFechaDMY = function (dateTime) {
            if (dateTime != null) {
                var date = new Date(parseInt(dateTime.substr(6)));
                var formatted = ("0" + date.getDate()).slice(-2) + "/" +
                                        ("0" + (date.getMonth() + 1)).slice(-2) + "/" +
                                          date.getFullYear();
                return formatted;
            }
        };


        var formatNumerico = function (input) {
            var num = input;
            if (!isNaN(num)) {
                num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
                num = num.split('').reverse().join('').replace(/^[\.]/, '');
                return num;
            }
            else {
                return "";
            }
        };

        var Tabla = '<table class="table table-hover table-bordered">';
        if (Titulo != null) {
            Tabla += "<tr class='active'><th colspan=2 > " + Titulo + "</th></tr>";
        }
        $.each(DataFields, function (i, itemS) {
            var clase = '';// i % 2 ? 'active' : '';

            Tabla += "<tr class='" + clase + "'  ><th width='30%'>" + itemS.Titulo + "</th><td>" + aplicarFormato(oJSON[itemS.Campo], itemS.Tipo) + "</td></tr>";
        });
        Tabla += '</table>';
        $(this).html(Tabla);




    }
});

jQuery.fn.extend({

    ListJSON: function (oJSON, Key, Value, Titulo) {
        var aplicarFormato = function (valor, tipo) {
            if (tipo == "D") return formatoFechaDMY(valor);
            else if (tipo == "N") return formatNumerico(valor);
            else return valor;
        };

        var formatoFechaDMY = function (dateTime) {
            if (dateTime != null) {
                var date = new Date(parseInt(dateTime.substr(6)));
                var formatted = ("0" + date.getDate()).slice(-2) + "/" +
                                        ("0" + (date.getMonth() + 1)).slice(-2) + "/" +
                                          date.getFullYear();
                return formatted;
            }
        };


        var formatNumerico = function (input) {
            var num = input;
            if (!isNaN(num)) {
                num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
                num = num.split('').reverse().join('').replace(/^[\.]/, '');
                return num;
            }
            else {
                return "";
            }
        };

        var Tabla = '<table class="table table-hover table-bordered">';

        if (Titulo != null) {
            Tabla += "<tr class='active'><th colspan=2 > " + Titulo + "</th></tr>";
        }

        $.each(oJSON, function (i, itemS) {
            var clase = '';// i % 2 ? 'active' : '';
            Tabla += "<tr class='" + clase + "'  ><th width='30%'>" + itemS[Key] + "</th><td>" + itemS[Value] + "</td></tr>";
        });
        Tabla += '</table>';

        $(this).html(Tabla);




    }
});



jQuery.fn.extend({
    msgBox: function (options) {
        var bu = new BootStrap.Utils();
        options.tipo = options.tipo == true ? "success" : options.tipo;
        options.tipo = options.tipo == false ? "danger" : options.tipo;
        bu.crearAlert(options.titulo, options.mensaje, options.tipo, $(this));
    }
});

//Patron Módulo
byaMsgBox = (function () {
    "use strict";
    //Zona Privada Auto Ejecutable
    return {
        alert: function (message, callback) {
            bootbox.alert(message, callback); //callback(alert(message));
        },
        confirm: function (message, callback) {
            bootbox.confirm(message, callback);//callback(confirm(message));
        },
        prompt: function (message, callback) {
            bootbox.prompt(message, callback);//callback(prompt(message));
        }
    };
})(); // copia cacheada


(function (BootStrap, $, undefined) {

    var Utils = (function () {
        function Utils() {
            //ctor
        }

        Utils.prototype.createAlert = function (title, message, alertType, targetElement) {
            var html = '<div class="alert alert-' + alertType + '">' +
                                    '<button type="button" class="close" data-dismiss="alert">&times;</button>' +
                                    '<h4>' + title + '</h4>' + message +
                                '</div>'
            $(targetElement).prepend(html);
        }
        Utils.prototype.crearAlert = function (title, message, alertType, targetElement) {
            var html = '<div class="alert alert-' + alertType + '">' +
                                    '<button type="button" class="close" data-dismiss="alert">&times;</button>' +
                                    '<h4>' + title + '</h4>' + message +
                                '</div>'
            targetElement.html(html);
        }

        return Utils;

    })();

    BootStrap.Utils = Utils;

})(window.BootStrap || (window.BootStrap = {}), jQuery);


function byaLista(config) {
    config = {
        Id: null,
        ClassItem: null,
        Source: null,
        fn_callback: null,
        Display: null,
        Value: null,
        Count: null
    };
    var Seleccionado;
    var _create = function () {
        crearEstados(config.Source, config.fn_callback)
    };

    var crearEstados = function (Source, fn_callback) {
        $(config.Id).html('');
        var items = "";
        $.each(Source, function (index, item) {
            items += '<a href="#" class="list-group-item ' + config.ClassItem + '" id="' + item[config.Value] + '"><span class="badge">' + item[config.Count] + '</span>' + item[config.Display] + '</a>';
        });
        $(config.Id).append(items);
        $('.' + config.ClassItem).click(function () {
            Seleccionado = $(this).prop("id");
            $('.' + config.ClassItem).removeClass("active");
            $(this).addClass("active");
            fn_callback();
        });
    };

    var _setSeleccionado = function (Value) {
        $('.' + config.ClassItem).removeClass("active");
        $.each(config.Source, function (index, item) {
            if (item[config.Value] == Value) {
                $('#' + Value).addClass("active");
                return;
            }
        });
    };
    var _getSeleccionado = function () {
        return Seleccionado;
    };

    this.init = function (Config) {
        config = Config;
        _create();
    };
    this.setSource = function (Source) {
        config.Source = Source;
        _create();
    };
    this.setSeleccionado = function (Value) {
        return _setSeleccionado(Value);
    };
    this.getSeleccionado = function () {
        return _getSeleccionado();
    };

}
function byaComboBox(config) {
    config = {
        Id: null,
        Value: null,
        Display: null,
        Source: null
    };
    var _create = function () {
        $(config.Id).byaCombo({ DataSource: config.Source, Value: config.Value, Display: config.Display, placeHolder: config.placeHolder });
    };
    var _getItem = function (key) {
        var found = null;
        $.each(config.Source, function (index, item) {
            if (item[config.Value] == key) {
                found = item;
                return;
            }
        });
        return found;
    };
    this.init = function (Config) {
        config = Config;
        _create();
    };
    this.getSource = function () {
        return config.Source;
    };
    this.getSeleccionado = function () {
        return _getItem($(config.Id).val());
    };
    this.DesHabilitar = function () {
        $(config.Id).find("option:selected").attr('disabled', true);
    };
};

Number.prototype.padLeft = function (width, char) {
    if (!char) {
        char = " ";
    }

    if (("" + this).length >= width) {
        return "" + this;
    }
    else {
        return arguments.callee.call(
          char + this,
          width,
          char
        );
    }
};

var ModTer = (function () {
    "use strict";

    var msgPopup = "#msgTer";
    var gridCon = '#jqxgridTer';
    var urlToGridCon = "/Servicios/wsDatosBasicos.asmx/GetTerceros";

    //crea GridTipos
    var _createGridCon = function () {
        var source = {
            datatype: "xml",
            datafields: [
	                { name: 'IDE_TER', type: 'number' },
                    { name: 'NOMBRE' }
            ],
            async: true,
            record: 'Table',
            url: urlToGridCon
        };
        var cellsrendererNOM = function (row, column, value) {
            return '<div style="margin-left: 5px;margin-top: 5px; font-size: 11px">' + value + '</div>';
        }
        var cellsrendererIDE = function (row, column, value) {
            return '<div style="margin-left: 5px;margin-top: 5px; font-size: 11px">' + value + '</div>';
        }
        var dataAdapter = new $.jqx.dataAdapter(source, { contentType: 'application/json; charset=utf-8' });

        $(gridCon).jqxGrid(
                    {
                        width: '100%',
                        source: dataAdapter,
                        theme: ModTer.config.theme,
                        localization: byaPage.getLocalization(),
                        height: 350,
                        sortable: true,
                        altrows: true,
                        showfilterrow: true,
                        filterable: true,
                        pageable: true,
                        enabletooltips: true,
                        columns: [
                          { text: 'Identificación', datafield: 'IDE_TER', width: 150, cellsformat: 'd', cellsalign: 'right' },
                          { text: 'Apellidos y Nombre', datafield: 'NOMBRE', cellsrenderer: cellsrendererNOM }
                        ]
                    });

        //rowselect
        $(gridCon).bind('rowdoubleclick', function (event) {
            var selectedRowIndex = event.args.rowindex;
            var datarow = {};
            var cell = $(gridCon).jqxGrid('getcell', selectedRowIndex, 'IDE_TER');
            datarow["IDE_TER"] = cell.value;
            var cell = $(gridCon).jqxGrid('getcell', selectedRowIndex, 'NOMBRE');
            datarow["NOMBRE"] = cell.value;
            ModTer.fnresultado(datarow);
            _cerrarVentana();
        });

    };
    var _cerrarVentana = function () {

        $('#modalTer').modal('hide');
        //_createGridCon();
    };
    var _verVentana = function () {

        $('#modalTer').modal('show');
        //_createGridCon();
    };
    return {
        fnresultado: null,
        config: {
            theme: null
        },
        init: function () {

            this.config.theme = byaSite.tema;
            _createGridCon();
        },
        showWindow: function (fnresultado) {
            this.fnresultado = fnresultado;
            _verVentana();
        }
    };
}());

(function (a) {
    a.fn.byaFormatInput = function (b) {
        a(this).on({
            keypress: function (a) {
                var c = a.which,
                  d = a.keyCode,
                  e = String.fromCharCode(c).toLowerCase(),
                  f = b;
                (-1 != f.indexOf(e) || 9 == d || 37 != c && 37 == d || 39 == d && 39 != c || 8 == d || 46 == d && 46 != c) && 161 != c || a.preventDefault()
            }
        })
    }
})(jQuery);
