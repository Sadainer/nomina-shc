﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="login.aspx.cs" Inherits="Nomina.WebForm.Entrando" %>

<!DOCTYPE html>

<html>
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Nomina SHC</title>
    <style>
        @import url(http://fonts.googleapis.com/css?family=Exo:100,200,400);
        @import url(http://fonts.googleapis.com/css?family=Source+Sans+Pro:700,400,300);
        body {
            margin: 0;
            padding: 0;
            background: #fff;
            color: #fff;
            font-family: Arial;
            font-size: 12px;
        }

        .body {
            position: absolute;
            top: -20px;
            left: -20px;
            right: -40px;
            bottom: -40px;
            width: auto;
            height: auto;
            background-image: url("../Imagenes/Plaza_Alfonso_Lopez.JPG");
            background-size: cover;
            -webkit-filter: blur(5px);
            z-index: 0;
        }

        .grad {
            position: absolute;
            top: -20px;
            left: -20px;
            right: -40px;
            bottom: -40px;
            width: auto;
            height: auto;
            background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(0,0,0,0)), color-stop(100%,rgba(0,0,0,0.65))); /* Chrome,Safari4+ */
            z-index: 1;
            opacity: 0.7;
        }

        .header {
            position: absolute;
            top: calc(50% - 35px);
            left: calc(50% - 255px);
             padding: 10px;
            z-index: 2;
        }

            .header div {
                float: left;
                color: #fff;
                font-family: 'Exo', sans-serif;
                font-size: 35px;
                font-weight: 200;
            }

                .header div span {
                    color:#03a8a8 !important;
                    font-weight: 900;
                }

        .login {
            position: absolute;
            top: calc(50% - 75px);
            left: calc(50% - 30px);
            height: 150px;
            width: 350px;
            padding: 10px;
            z-index: 2;
        }

        .blanco {
            position: absolute;
            top: calc(50% - 75px);
            left: calc(50% - 250px);
            height: 150px;
            width: 500px;
            border-radius: 5px;
             border: 1px solid #fff;
            padding: 10px;
            z-index: 2;
            background: rgba(255, 255, 255, 0.2);
        }

            .login input[type=text] {
                width: 250px;
                height: 30px;
                background: transparent;
                border: 1px solid #fff;
                border-radius: 2px;
                color: #fff;
                font-family: 'Exo', sans-serif;
                font-size: 16px;
                font-weight: 400;
                padding: 4px;
            }

            .login input[type=password] {
                width: 250px;
                height: 30px;
                background: transparent;
                border: 1px solid #fff;
                border-radius: 2px;
                color: #fff;
                font-family: 'Exo', sans-serif;
                font-size: 16px;
                font-weight: 400;
                padding: 4px;
                margin-top: 10px;
            }

            .login input[type=button] {
                width: 260px;
                height: 35px;
                background: #03a8a8;
                border: 1px solid #03a8a8;
                cursor: pointer;
                border-radius: 2px;
                color: #fff;
                font-family: 'Exo', sans-serif;
                font-size: 16px;
                font-weight: 400;
                padding: 6px;
                margin-top: 10px;
            }

                .login input[type=button]:hover {
                    opacity: 0.8;
                }

                .login input[type=button]:active {
                    opacity: 0.6;
                }

            .login input[type=text]:focus {
                outline: none;
                border: 1px solid rgba(255,255,255,0.9);
            }

            .login input[type=password]:focus {
                outline: none;
                border: 1px solid rgba(255,255,255,0.9);
            }

            .login input[type=button]:focus {
                outline: none;
            }

        ::-webkit-input-placeholder {
            color: rgba(255,255,255,0.6);
        }

        ::-moz-input-placeholder {
            color: rgba(255,255,255,0.6);
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <div class="body"></div>
        <div class="grad"></div>
        <div class="blanco">
            <div class="header">
                <div>Nomina<span> SHC  </span></div>
            </div>
            <br>
            <div class="login">

                <asp:TextBox ID="user" runat="server" placeholder="Usuario"></asp:TextBox><br>
                <asp:TextBox ID="password" runat="server" TextMode="Password" placeholder="Contraseña"></asp:TextBox>
                <input type="button" value="Entrar">
            </div>
        </div>
    </form>
</body>
</html>
