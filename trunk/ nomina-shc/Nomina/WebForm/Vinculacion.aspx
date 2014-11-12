<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Vinculacion.aspx.cs" Inherits="Nomina.WebForm.Contratacion" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
    
    <link href="../Content/bootstrap.min.css" rel="stylesheet" />
    <link href="../datepicker/css/bootstrap-datetimepicker.min.css" rel="stylesheet" />
    <link href="../Content/font-awesome-4.1.0/css/font-awesome.css" rel="stylesheet" />
    <link href="../Content/plugins/metisMenu/metisMenu.min.css" rel="stylesheet"/>
    <link href="../Content/sb-admin-2.css" rel="stylesheet"/>
    <link href="../Content/plugins/morris.css" rel="stylesheet"/>
    <link href="../Content/main.css" rel="stylesheet" />

    


</head>
<body>
     <nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="index.html">SB Admin v2.0</a>
            </div>
            <!-- /.navbar-header -->

            <ul class="nav navbar-top-links navbar-right">
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i class="fa fa-envelope fa-fw"></i>  <i class="fa fa-caret-down"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-messages">
                        <li>
                            <a href="#">
                                <div>
                                    <strong>John Smith</strong>
                                    <span class="pull-right text-muted">
                                        <em>Yesterday</em>
                                    </span>
                                </div>
                                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <strong>John Smith</strong>
                                    <span class="pull-right text-muted">
                                        <em>Yesterday</em>
                                    </span>
                                </div>
                                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <strong>John Smith</strong>
                                    <span class="pull-right text-muted">
                                        <em>Yesterday</em>
                                    </span>
                                </div>
                                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a class="text-center" href="#">
                                <strong>Read All Messages</strong>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                    </ul>
                    <!-- /.dropdown-messages -->
                </li>
                <!-- /.dropdown -->
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i class="fa fa-tasks fa-fw"></i>  <i class="fa fa-caret-down"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-tasks">
                        <li>
                            <a href="#">
                                <div>
                                    <p>
                                        <strong>Task 1</strong>
                                        <span class="pull-right text-muted">40% Complete</span>
                                    </p>
                                    <div class="progress progress-striped active">
                                        <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
                                            <span class="sr-only">40% Complete (success)</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <p>
                                        <strong>Task 2</strong>
                                        <span class="pull-right text-muted">20% Complete</span>
                                    </p>
                                    <div class="progress progress-striped active">
                                        <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
                                            <span class="sr-only">20% Complete</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <p>
                                        <strong>Task 3</strong>
                                        <span class="pull-right text-muted">60% Complete</span>
                                    </p>
                                    <div class="progress progress-striped active">
                                        <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
                                            <span class="sr-only">60% Complete (warning)</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <p>
                                        <strong>Task 4</strong>
                                        <span class="pull-right text-muted">80% Complete</span>
                                    </p>
                                    <div class="progress progress-striped active">
                                        <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%">
                                            <span class="sr-only">80% Complete (danger)</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a class="text-center" href="#">
                                <strong>See All Tasks</strong>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                    </ul>
                    <!-- /.dropdown-tasks -->
                </li>
                <!-- /.dropdown -->
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i class="fa fa-bell fa-fw"></i>  <i class="fa fa-caret-down"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-alerts">
                        <li>
                            <a href="#">
                                <div>
                                    <i class="fa fa-comment fa-fw"></i> New Comment
                                    <span class="pull-right text-muted small">4 minutes ago</span>
                                </div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <i class="fa fa-twitter fa-fw"></i> 3 New Followers
                                    <span class="pull-right text-muted small">12 minutes ago</span>
                                </div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <i class="fa fa-envelope fa-fw"></i> Message Sent
                                    <span class="pull-right text-muted small">4 minutes ago</span>
                                </div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <i class="fa fa-tasks fa-fw"></i> New Task
                                    <span class="pull-right text-muted small">4 minutes ago</span>
                                </div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <i class="fa fa-upload fa-fw"></i> Server Rebooted
                                    <span class="pull-right text-muted small">4 minutes ago</span>
                                </div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a class="text-center" href="#">
                                <strong>See All Alerts</strong>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                    </ul>
                    <!-- /.dropdown-alerts -->
                </li>
                <!-- /.dropdown -->
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i class="fa fa-user fa-fw"></i>  <i class="fa fa-caret-down"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-user">
                        <li><a href="#"><i class="fa fa-user fa-fw"></i> User Profile</a>
                        </li>
                        <li><a href="#"><i class="fa fa-gear fa-fw"></i> Settings</a>
                        </li>
                        <li class="divider"></li>
                        <li><a href="login.html"><i class="fa fa-sign-out fa-fw"></i> Logout</a>
                        </li>
                    </ul>
                    <!-- /.dropdown-user -->
                </li>
                <!-- /.dropdown -->
            </ul>
            <!-- /.navbar-top-links -->

            <div class="navbar-default sidebar" role="navigation">
                <div class="sidebar-nav navbar-collapse">
                    <ul class="nav" id="side-menu">
                        <li class="sidebar-search">
                            <div class="input-group custom-search-form">
                                <input type="text" class="form-control" placeholder="Search..."/>
                                <span class="input-group-btn">
                                <button class="btn btn-default" type="button">
                                    <i class="fa fa-search"></i>
                                </button>
                            </span>
                            </div>
                            <!-- /input-group -->
                        </li>
                        <li>
                            <a href="Principal.aspx" ><i class="fa fa-dashboard fa-fw"></i> Dashboard</a>
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-bar-chart-o fa-fw"></i> Charts<span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level">
                                <li>
                                    <a href="flot.html">Flot Charts</a>
                                </li>
                                <li>
                                    <a href="morris.html">Morris.js Charts</a>
                                </li>
                            </ul>
                            <!-- /.nav-second-level -->
                        </li>
                        <li>
                            <a href="tables.html"><i class="fa fa-table fa-fw"></i> Tables</a>
                        </li>
                        <li class="active">
                            <a href="#"><i class="fa fa-edit fa-fw"></i> Registro <span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level">
                                <li >
                                    <a  href="Empleados.aspx" id="mnEmpleado">Empleados</a>
                                </li>
                                <li>
                                     <a class="active" href="Vinculacion.aspx" id="mnContratacion">Ingreso a Nómina</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-wrench fa-fw"></i> UI Elements<span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level">
                                <li>
                                    <a href="panels-wells.html">Panels and Wells</a>
                                </li>
                                <li>
                                    <a href="buttons.html">Buttons</a>
                                </li>
                                <li>
                                    <a href="notifications.html">Notifications</a>
                                </li>
                                <li>
                                    <a href="typography.html">Typography</a>
                                </li>
                                <li>
                                    <a href="grid.html">Grid</a>
                                </li>
                            </ul>
                            <!-- /.nav-second-level -->
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-sitemap fa-fw"></i> Multi-Level Dropdown<span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level">
                                <li>
                                    <a href="#">Second Level Item</a>
                                </li>
                                <li>
                                    <a href="#">Second Level Item</a>
                                </li>
                                <li>
                                    <a href="#">Third Level <span class="fa arrow"></span></a>
                                    <ul class="nav nav-third-level">
                                        <li>
                                            <a href="#">Third Level Item</a>
                                        </li>
                                        <li>
                                            <a href="#">Third Level Item</a>
                                        </li>
                                        <li>
                                            <a href="#">Third Level Item</a>
                                        </li>
                                        <li>
                                            <a href="#">Third Level Item</a>
                                        </li>
                                    </ul>
                                    <!-- /.nav-third-level -->
                                </li>
                            </ul>
                            <!-- /.nav-second-level -->
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-files-o fa-fw"></i> Sample Pages<span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level">
                                <li>
                                    <a href="blank.html">Blank Page</a>
                                </li>
                                <li>
                                    <a href="login.html">Login Page</a>
                                </li>
                            </ul>
                            <!-- /.nav-second-level -->
                        </li>
                    </ul>
                </div>
                <!-- /.sidebar-collapse -->
            </div>
            <!-- /.navbar-static-side -->
        </nav>
    <form id="form1" runat="server">
    <div id="page-wrapper"/>
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="page-header">Ingreso a Nómina</h1>
                </div>
                <!-- /.col-lg-12 -->
            </div>
            <!-- /.row -->
            <div class="row">
                <div class="col-lg-12">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            Datos de vinculación
                        </div>
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-lg-6">
                                    <%--<form role="form" runat="server">--%>
                                        <div class="form-group" id="GrCedula">
                                            <div class="row">
                                                <div class="col-lg-8">
                                                    <label class="control-label">Cédula</label> <asp:Label ID="lblCedula" runat="server"></asp:Label>
                                                    <input id="txtCedula" class="form-control typeahead" maxlength="10" onkeypress='return event.charCode >= 48 && event.charCode <= 57'/>
                                                </div>
                                                <br />
                                                <div class="col-lg-2">
                                                    
                                                    <button type="button" id= "btnAgregar" class="btn btn-info">Cargar</button>
                                                </div>
                                                <div class="col-lg-2">
                                                    <asp:Button ID="Button2" runat="server" Text="Limpiar" class="btn btn-success" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label>Nombres</label>
                                            <input class="form-control" id="txtNombre" type="text"  disabled="disabled"/>
                                        </div>
                                        <div class="form-group">
                                            <label>Primer apellido</label>
                                            <input id="txtApellidoP" class="form-control" disabled="disabled"/>
                                        </div>
                                        <div class="form-group">
                                            <label>Segundo apellido</label>
                                            <input id="txtApellidoS" class="form-control" disabled="disabled"/>
                                        </div>
                                        <div class="form-group">
                                               
                                        <div class="row">
                                            <div class="col-lg-6">
                                            <label>Tipo de contrato</label>
                                                <select class="form-control">
                                                <option>Termino Fijo</option>
                                                <option>Termino Indefinido</option>
                                                <option>Obra o labor determinada</option>
                                                <option>Ocasional o transitorio</option>
                                                </select> 
                                            </div>
                                            <div class="col-lg-6">
                                                <label>Tipo de jornada</label>
                                                <select class="form-control">
                                                <option>Diurna</option>
                                                <option>Nocturna</option>
                                            </select> 
                                            </div>
                                        </div>
                                    </div>
                                        <div class="form-group"/>
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <label>Fecha de vinculación</label>
                                                        <div class='input-group date fecha' id='txtFechaNac'>
                                                            <input type='text' class="form-control" />
                                                            <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                        <div class="form-group"/>
                                                    <div class="row">
                                                        <div class="col-lg-6">
                                                            <label>Fecha de Terminación</label>
                                                            <div class='input-group date fecha' id='Div1'>
                                                                <input type='text' class="form-control" id="FechaTerminacion" />
                                                                <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4">
                                                            <asp:Label ID="LblDuraccion" runat="server"></asp:Label>
                                                        </div>
                                                    </div>
                                            </div>
                                         
                                    
                                    <%--</form>--%>
                                </div>
                                <!-- /.col-lg-6 (nested) -->
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-lg-6">
                                            <label>Departamento</label>
                                                <select class="form-control" id="Select3">
                                                 <option>1</option>
                                                </select> 
                                            </div>
                                            <div class="col-lg-6">
                                                <label>Cargo</label>
                                                <select class="form-control" id="Select4">
                                                 <option>1</option>
                                                </select> 
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-lg-6">
                                            <label>Salario</label>
                                                 <input type='text' class="form-control" />
                                            </div>
                                            <div class="col-lg-6">
                                                <label>Periodo de pago</label>
                                                <select class="form-control">
                                                <option>Quincenal</option>
                                                <option>Mensual</option>
                                                 </select> 
                                            </div>
                                        </div>
                                    </div>
                                   
                                    <div class="form-group">
                                       
                                        <div class="row">
                                            <div class="col-lg-4">
                                            <label>Banco</label>
                                            <select class="form-control">
                                                <option>Bancolombia</option>
                                                <option>Banco de Bogotá</option>
                                            </select> 
                                            </div>
                                            <div class="col-lg-4">
                                            <label>Tipo de cuenta</label>
                                            <select class="form-control">
                                                <option>De ahorro</option>
                                                <option>Corriente</option>
                                            </select> 
                                            </div>
                                            <div class="col-lg-4">
                                                <label>Número de cuenta</label>
                                                <input type='text' class="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                   
                                    <div class="form-group">
                                        <label>Empresa Prestadora de Salud</label>
                                        <asp:DropDownList ID="DropDownEPS" runat="server" CssClass="form-control" DataSourceID="EntityDataSourceEPS" DataValueField="NitEPS" DataTextField="Nombre"></asp:DropDownList>
                                         
                                    </div>
                                    <div class="form-group">
                                        <label>Fondo de Pensión</label>
                                        <asp:DropDownList ID="DropDownPension" runat="server" CssClass="form-control" DataSourceID="EntityDataSourcePension" DataValueField="NitPension" DataTextField="Nombre"></asp:DropDownList>
                                    </div>
                                    <div class="form-group">
                                        <label>ARL</label>
                                        <asp:DropDownList ID="DropDownARL" runat="server" CssClass="form-control" DataSourceID="EntityDataSourceARL" DataValueField="NitARL" DataTextField="Nombre"></asp:DropDownList> 
                                    </div>
                                    <div class="form-group">
                                        <label>Caja de Compensación</label>
                                            <select class="form-control">
                                            <option>Masculino</option>
                                            <option>Femenino</option>
                                        </select> 
                                    </div>

                                    <br />
                                    
                                </div>
                                    <div class="row">
                                        <div class="col-lg-4">
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="form-group"/>
                                            <div class="row">
                                                <div class="col-lg-6">
                                                    <button type="button" id= "BtnGuardar" class="btn btn-primary">Guardar</button>
                                                </div>
                                                <div class="col-lg-6">
                                                    <button type="button" id= "BtnCancelar" class="btn btn-danger">Cancelar</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- /.col-lg-6 (nested) -->
                            </div>
                            <!-- /.row (nested) -->
                        </div>
                        <!-- /.panel-body -->
        <asp:EntityDataSource ID="EntityDataSourceEPS" runat="server" ConnectionString="name=nominashcEntities" DefaultContainerName="nominashcEntities" EnableDelete="True" EnableFlattening="False" EnableInsert="True" EnableUpdate="True" EntitySetName="eps"></asp:EntityDataSource>
        <asp:EntityDataSource ID="EntityDataSourcePension" runat="server" ConnectionString="name=nominashcEntities" DefaultContainerName="nominashcEntities" EnableDelete="True" EnableFlattening="False" EnableInsert="True" EnableUpdate="True" EntitySetName="pension"></asp:EntityDataSource>
        <asp:EntityDataSource ID="EntityDataSourceARL" runat="server" ConnectionString="name=nominashcEntities" DefaultContainerName="nominashcEntities" EnableDelete="True" EnableFlattening="False" EnableInsert="True" EnableUpdate="True" EntitySetName="arl"></asp:EntityDataSource>
            
    </form>         
</body>
</html>
    <script src="../Scripts/jquery-1.9.0.min.js"></script>
    <script type="text/javascript" src="../Scripts/bootstrap.min.js"></script>
    <script type="text/javascript" src="../datepicker/js/moment.js"></script>
    <script src="../datepicker/js/bootstrap-datetimepicker.js"></script>
    <script src="../Scripts/plugins/metisMenu/metisMenu.min.js"></script>
    <script src="../Scripts/sb-admin-2.js"></script>
    <script src="../Scripts/typeahead.js"></script>
    <script src="../Scripts/Contratacion.js"></script>