//------------------------------------------------------------------------------
// <auto-generated>
//    Este código se generó a partir de una plantilla.
//
//    Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//    Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DAL.Modelo
{
    using System;
    using System.Collections.Generic;
    
    public partial class departamentos
    {
        public departamentos()
        {
            this.cargos = new HashSet<cargos>();
        }
    
        public string idDepartamento { get; set; }
        public string Nombre { get; set; }
        public string idEmpresa { get; set; }
    
        public virtual ICollection<cargos> cargos { get; set; }
        public virtual empresas empresas { get; set; }
    }
}
