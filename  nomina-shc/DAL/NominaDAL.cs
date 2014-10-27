using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;
using AutoMapper;

namespace DAL
{
    public class NominaDAL
    {
        nominashcEntities db = new nominashcEntities();

        public List<empleados> GetEmpleados()
        {
            return db.empleados.ToList();
        }
        public Boolean NuevoEmpleado(empleados Emp)
        {
            Boolean Resp = true;
            db.empleados.Add(Emp);
            try
            {
                db.SaveChanges();
            }
            catch (InvalidCastException e)
            {
                Resp = false;
            }
            return Resp;
        }
    }
}
