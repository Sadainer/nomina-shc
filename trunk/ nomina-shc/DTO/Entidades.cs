using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
        public class EmpleadosDTO
        {
            public int idEmpleado { get; set; }
            public string Nombre { get; set; }
            public string ApellidoP { get; set; }
            public string ApellidoS { get; set; }
            public string Sexo { get; set; }
            public string EstadoCivil { get; set; }
            public string FechaNacimiento { get; set; }
            public string LugarNacimiento { get; set; }
            public string Direccion { get; set; }
            public string Telefono { get; set; }
            public string Celular { get; set; }
            public string GrupoSanguineo { get; set; }
            public string Profesion { get; set; }
            public int Cargos_idCargos { get; set; }
        }
}
