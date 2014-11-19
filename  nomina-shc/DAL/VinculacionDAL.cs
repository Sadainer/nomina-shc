using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;
using DAL.Modelo;

namespace DAL
{
    public class VinculacionDAL 
    {
        nominashcEntities db = new nominashcEntities();

        //public List<empleados> GetEmpleados()
        //{
        //    return db.empleados.ToList();
        //}
        //public empleados GetEmple(int id)
        //{
        //    return db.empleados.Find(id);
        //}
        public Boolean NuevaVinculacion(vinculaciones value)
        {
            Boolean Resp = true;
            db.vinculaciones.Add(value);
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
