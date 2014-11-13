using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;
using DAL.Modelo;

namespace DAL
{
    public class EmpleadoDAL 
    {
        nominashcEntities db = new nominashcEntities();

        public List<empleados> GetEmpleados()
        {
            return db.empleados.ToList();
        }
        public empleados GetEmple(int id)
        {
            return db.empleados.Find(id);
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
