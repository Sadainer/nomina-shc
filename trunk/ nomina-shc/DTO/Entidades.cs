using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
        public class EmpleadosDTO
        {
            public string idEmpleado { get; set; }
            public string Nombre { get; set; }
            public string ApellidoP { get; set; }
            public string ApellidoS { get; set; }
            public string Sexo { get; set; }
            public string EstadoCivil { get; set; }
            public System.DateTime FechaNacimiento { get; set; }
            //public string Fecha { get; set; }
            //public System.DateTime FechaNacimiento { get {
            //return Convert.ToDateTime(Fecha);
            //} }
            public string LugarNacimiento { get; set; }
            public string Direccion { get; set; }
            public long Telefono { get; set; }
            public long Celular { get; set; }
            public string GrupoSanguineo { get; set; }
            public string Profesion { get; set; }
        }
        public class DepartamentosDTO
        {
            public string idDepartamento { get; set; }
            public string Nombre { get; set; }
            public string idEmpresa { get; set; }
        }
        public  class CargosDTO
        {
            public string idCargos { get; set; }
            public string Nombre { get; set; }
            public string idDepartamento { get; set; }
        }
        public class VinculacionDTO
        {
            public int idVinculacion { get; set; }
            public string idEmpleado { get; set; }
            public System.DateTime FechaInicio { get; set; }
            public System.DateTime FechaFinal { get; set; }
            public string TipoContrato { get; set; }
            public string PeriodoPago { get; set; }
            public string NitARL { get; set; }
            public string NitCCF { get; set; }
            public string NitEPS { get; set; }
            public string NoCuenta { get; set; }
            public string NitPension { get; set; }
            public string idCargos { get; set; }
            public string NitBanco { get; set; }
            public string TipoCuenta { get; set; }

        }
}
