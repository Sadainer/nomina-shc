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
    
    public partial class ccf
    {
        public ccf()
        {
            this.vinculaciones = new HashSet<vinculaciones>();
        }
    
        public int idCCF { get; set; }
        public string Nombre { get; set; }
    
        public virtual ICollection<vinculaciones> vinculaciones { get; set; }
    }
}
